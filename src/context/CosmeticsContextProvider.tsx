import { ReactNode } from "react";
import { CosmeticsContext } from "./CosmeticsContext";
import useCosmeticsList from "../hooks/useCosmeticsList";

const CosmeticsContextProvider = ({ children }: { children: ReactNode }) => {
  // const [data, setData] = useState<CosmeticsListType[] | null>(null);
  const { data, isError, error, isLoading } = useCosmeticsList();

  const value = {
    data,
    error,
    isError,
    isLoading,
  };
  return (
    <CosmeticsContext.Provider value={value}>
      {children}
    </CosmeticsContext.Provider>
  );
};

export default CosmeticsContextProvider;
