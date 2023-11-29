import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useReviews = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: reviews = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["allreviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allreviews");
      return res.data;
    },
  });

  return [reviews, loading, refetch];
};

export default useReviews;
