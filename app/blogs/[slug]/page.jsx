import { client } from "../../../sanity/lib/client";
import BlogDetails from "./BlogDetails";

export default async function BlogDetailsPage({ params: { slug } }) {
  const query = `
  *[_type == "post"  && slug.current == $slug][0] {
    ...,
    author->{name,image,...},
    categories[]->{
      title,
      ref
    }
  }
  `;
  const blogsDetails = await client.fetch(query, { slug });

  return (
    <div className=" max-w-3xl text-gray-900  mx-auto ">
      <BlogDetails blogsDetails={blogsDetails} />
    </div>
  );
}
