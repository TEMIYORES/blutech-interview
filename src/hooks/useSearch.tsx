import { QueryObserverOptions, useQuery, useQueryClient } from "react-query";
import { API_URL } from "../config/config";
import { DataListType } from "../utilities/Types";

/**
 * Custom hook to search for data from the API based on a search query.
 *
 * This hook uses react-query's useQuery to fetch data from the specified API endpoint with a search query.
 * It also updates the query data for the "dataList" key in the query client.
 *
 * @param {string} search - The search query string.
 * @param {QueryObserverOptions<DataListType[]>} [options] - Optional configuration for the useQuery hook.
 * @returns {object} The query object containing:
 *   - {function} refetch: Function to manually refetch the query.
 */

const useSearch = (
  search: string,
  options?: QueryObserverOptions<DataListType[]>
) => {
  const queryClient = useQueryClient();
  const { refetch } = useQuery({
    queryKey: ["searchList"],
    queryFn: () =>
      fetch(
        `${API_URL}/products/public/catalog?supplier=FragranceX&search=${search}`
      ).then((response) => response.json()),
    onSuccess: (data) => {
      console.log({ data });
      queryClient.setQueryData("dataList", data);
    },
    refetchOnWindowFocus: false,
    enabled: !!search,
    ...options,
  });

  return { refetch };
};

export default useSearch;
