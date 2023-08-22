import { useQuery } from "@tanstack/react-query";
import { client } from "../../sanity/lib/client";

const useGetAllCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/categories"],
    queryFn: async () => {
      const query = `
        *[_type == "category" ]  | order(publishedAt desc) {
          ...,
         title
        }
     

      `;
      const response = await client.fetch(query);
      console.log(response);
      return response;
    },
    keepPreviousData: true,
  });

  return categories;
};

export default useGetAllCategories;
