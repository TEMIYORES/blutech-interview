import { QueryObserverOptions, useQuery, useQueryClient } from "react-query";
import { API_URL } from "../config/config";
import { CosmeticsListType } from "../utilities/Types";

const useSearch = (
  search: string,
  options?: QueryObserverOptions<CosmeticsListType[]>
) => {
  const queryClient = useQueryClient();
  const { refetch } = useQuery({
    queryKey: ["searchList"],
    queryFn: () =>
      fetch(
        API_URL +
          `/products/public/catalog?supplier=FragranceX&search=${search}`
      ).then((res) => res.json()),
    onSuccess: (data) => {
      console.log({ data });
      queryClient.setQueryData("cosmeticsList", data);
    },
    refetchOnWindowFocus: false,
    enabled: !!search,
    ...options,
  });
  return { refetch };
};

export default useSearch;
