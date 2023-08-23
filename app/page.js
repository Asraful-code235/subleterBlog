import Recentblogs from "../components/blogs/Recentblogs";
import Subscription from "../components/blogs/Subscription";
import Tags from "../components/blogs/Tags";
import { dehydrate, useQuery } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";
import Hydrate from "./Hydrate";
import Hero from "../components/blogs/Hero";

const getBlogs = async () => {
  const blogs = await fetch("/api/getAllPosts");
  return blogs;
};

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["blogs"], getBlogs);
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-between p-4 max-w-[1440px] mx-auto">
      <h1 className="font-bold text-3xl mb-4">Blogs</h1>
      <p className="text-xl font-bold ">
        <span className="text-[#01ae6f]"> Welcome</span> to your source of
        everything sublets!
      </p>
      <Hydrate state={dehydratedState}>
        <Hero />
        <Tags />
        <Recentblogs />
      </Hydrate>
      <Subscription />
    </main>
  );
}
