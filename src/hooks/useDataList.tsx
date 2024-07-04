import { QueryObserverOptions, useQuery } from "react-query";
import { API_URL } from "../config/config";
import { DataListType } from "../utilities/Types";

/**
 * Custom hook to fetch a list of data from the API.
 *
 * This hook uses react-query's useQuery to fetch data from the specified API endpoint.
 * It returns the query result including data, loading state, error state, and any error encountered.
 *
 * @param {QueryObserverOptions<DataListType[]>} [options] - Optional configuration for the useQuery hook.
 * @returns {object} The query result containing:
 *   - {DataListType[]} data: The fetched data.
 *   - {boolean} isLoading: Indicator for the loading state.
 *   - {boolean} isError: Indicator for the error state.
 *   - {Error} error: The error object if an error occurred.
 */

const useDataList = (options?: QueryObserverOptions<DataListType[]>) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: "dataList",
    queryFn: () =>
      fetch(`${API_URL}/products/public/catalog?supplier=FragranceX`).then(
        (response) => response.json()
      ),
    refetchOnWindowFocus: false,
    ...options,
  });

  return { data, isLoading, isError, error };
};

export default useDataList;
