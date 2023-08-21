"use client";
import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { urlForImage } from "../../sanity/lib/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGetAllBlogs from "../hooks/useGetAllBlogs";

export default function Recentblogs() {
  // if (blogs?.isLoading) return "Loading...";
  // if (blogs?.isError) return "Something went wrong";

  const blogs = useGetAllBlogs();

  return (
    <section className="bg-white text-gray-600 w-full">
      <p className="text-base normal-case text-left">Browse our newest posts</p>
      <h1 className=" text-3xl md:text-4xl font-bold mb-8">
        <span className="text-[#02ae70]">Recent</span> Blogs
      </h1>
      <FadeIn>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-500 ">
          {blogs?.map((blog, key) => (
            <Link
              href={`/blogs/${blog?.slug?.current}`}
              key={key}
              className="flex flex-col gap-4 cursor-pointer hover:scale-[1.02]"
            >
              <img
                src={urlForImage(blog?.mainImage).url() || "/productimage.jpeg"}
                alt=""
                className="w-full aspect-[10/7] rounded-t-lg object-cover object-center hover:opacity-70"
              />
              <div className="px-4 flex items-center gap-4">
                <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                  {blog?.categories[0]?.title}
                </span>
                <span>2 minute read</span>
              </div>
              <div className="px-4 flex flex-col text-left gap-2">
                <h3 className="text-lg md:text-xl line-clamp-2 whitespace-pre-wrap font-bold">
                  This is a blog title
                </h3>
                <p className="line-clamp-4 whitespace-pre-wrap text-sm font-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text
                </p>
              </div>
            </Link>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
