import { ReactNode, useState } from "react";
import { ApiContext } from "./ApiContext";
import useDataList from "../hooks/useDataList";

/**
 * Provides the API context to its child components.
 *
 * This component uses the `useDataList` hook to fetch data and then
 * provides the fetched data, loading state, error state, and any error encountered
 * to its child components through the ApiContext.Provider.
 *
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components that require access to the API context.
 * @returns {JSX.Element} The provider component that wraps its children with the API context.
 */

const ApiContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const { data, isError, error, isLoading } = useDataList();
  const [selectAll, setSelectAll] = useState(false);

  const contextValue = {
    data,
    error,
    isError,
    isLoading,
    selectAll,
    setSelectAll,
  };

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};

export default ApiContextProvider;
