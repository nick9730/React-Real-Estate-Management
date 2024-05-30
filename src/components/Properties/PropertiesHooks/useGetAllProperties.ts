import { useInfiniteQuery } from "@tanstack/react-query";
import { usePropertiesContext } from "../../Context/PropertiesContext";
import { useFilterQueries } from "./useFilterQueries";
import { useGetUser } from "../../Users/useGetUser";

const LIMIT = 4;

export const useGetAllProperties = () => {
  const { user } = useGetUser();
  const { filters } = usePropertiesContext();
  const filteredQuery = useFilterQueries();

  const {
    data: estates,
    isLoading,
    fetchNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["estates", filters, user],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const { data, error, count } = await filteredQuery;

      if (error) throw new Error("It couldn't get the Estates");

      return {
        count,
        data: data?.slice(pageParam, pageParam + LIMIT),
        currentPage: pageParam,
        nextPage: pageParam + LIMIT < data?.length ? pageParam + LIMIT : null,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastpage) => lastpage.nextPage,
  });

  return { estates, isLoading, isPending, fetchNextPage, isFetchingNextPage };
};
