"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Tags() {
  const { data: category } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      const res = axios.get("/api/getCategories");
      return res || [];
    },
    keepPreviousData: true,
  });
  let categories = category?.data;

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => {
      const res = axios.get("/api/getAllPosts");
      return res || [];
    },
    keepPreviousData: true,
  });
  let blogs = blog?.data;

  const blogsInFirstFourCategories = blogs?.filter((blog) => {
    const blogCategory = blog?.categories[0]?.title; // Assuming each blog has only one category
    return categories.some((category) => category.title === blogCategory);
  });

  if (isLoading) return "";
  if (isError) return "Something went wrong";
  return (
    <section className="py-24 bg-gray-100 w-screen my-24 min-h-[500px] max-[500px]:mt-56  max-[768px]:mt-96">
      <ul className="flex flex-wrap items-center justify-center p-4 gap-4 max-w-[1440px] mx-auto">
        <li className="px-12 py-8 flex  gap-2 bg-[#4dc69a] rounded-lg">
          <div className="flex flex-col py-2 text-white text-center font-bold">
            <h2>Popular Tags</h2>
            {/* <span className="font-medium">6 posts</span> */}
          </div>
        </li>
        {categories?.map((tag, key) => {
          const tagPostsCount = blogsInFirstFourCategories?.filter(
            (blog) => blog.categories[0]?.title === tag.title
          ).length;

          return (
            <li
              key={key}
              className="px-12 py-6 flex items-start  gap-2 bg-[#4dc69a] hover:bg-black hover:text-white rounded-lg"
            >
              <div>
                {/* <img
                    src="/productimage.jpeg"
                    alt=""
                    className="w-16 h-16 rounded-full object-cover object-center"
                  /> */}
              </div>
              <div className="flex flex-col text-white text-lg font-bold">
                <h2 className="line-clamp-1 whitespace-pre-wrap">
                  {tag?.title}
                </h2>
                <span className="font-medium">{tagPostsCount || 0} posts</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
