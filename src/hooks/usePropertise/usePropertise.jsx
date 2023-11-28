import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const usePropertise = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: propertise = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["propertise"],
    queryFn: async () => {
      const res = await axiosPublic.get("/propertise");
      return res.data;
    },
  });

  return [propertise, loading, refetch];
};

export default usePropertise;
