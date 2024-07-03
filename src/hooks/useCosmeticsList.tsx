import { QueryObserverOptions, useQuery } from "react-query";
import { API_URL } from "../config/config";
import { CosmeticsListType } from "../utilities/Types";

const useCosmeticsList = (
  options?: QueryObserverOptions<CosmeticsListType[]>
) => {
  const {
    data: cosmeticsList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cosmeticsList"],
    queryFn: () =>
      fetch(API_URL + "/products/public/catalog?supplier=FragranceX").then(
        (res) => res.json()
      ),
    refetchOnWindowFocus: false,
    ...options,
  });

  return { cosmeticsList, isLoading, isError, error };
};
export default useCosmeticsList;
