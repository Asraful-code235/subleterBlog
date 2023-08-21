import { client } from "../../sanity/lib/client";
import { useQuery } from "@tanstack/react-query";

const useBlogsDetails = (slug: string) => {
  const { data: blogsDetails } = useQuery({
    queryKey: ["/blogs/details", slug],
    queryFn: async () => {
      const query = `
        *[_type == "post"  && slug.current == $slug ]  | order(publishedAt desc) {
          ...,
          author->{name,image,...},
          categories[]->{
            title,
            ref
          }
        } 

      `;

      const response = await client.fetch(query, { slug });
      console.log("API Response:", response);
      return response[0];
    },
    keepPreviousData: true,
  });

  return blogsDetails;
};

export default useBlogsDetails;
