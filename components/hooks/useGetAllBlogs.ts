import { useQuery } from "@tanstack/react-query";
import { client } from "../../sanity/lib/client";

const useGetAllBlogs = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/blogs"],
    queryFn: async () => {
      const query = `
        *[_type == "post" ]  | order(publishedAt desc) {
          ...,
          author->{name,image,...},
          categories[]->{
            title,
            ref
          }
        }
     

      `;
      const response = await client.fetch(query);
      console.log(response);
      return response;
    },
    keepPreviousData: true,
  });

  return blogs;
};

export default useGetAllBlogs;
