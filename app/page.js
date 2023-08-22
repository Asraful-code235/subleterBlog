"use client";
import { FadeIn } from "../components/FadeIn";
import Recentblogs from "../components/blogs/Recentblogs";
import Subscription from "../components/blogs/Subscription";
import Tags from "../components/blogs/Tags";
import useGetAllBlogs from "../components/hooks/useGetAllBlogs";
import useGetAllCategories from "../components/hooks/useGetAllCategories";
import { urlForImage } from "../sanity/lib/image";
import TimeAgo from "react-timeago";
import Link from "next/link";

export default function Home() {
  const categories = useGetAllCategories();

  const blogs = useGetAllBlogs(14);
  const firstFourCategories = categories?.slice(0, 4);

  // Find blogs that belong to these categories
  const blogsInFirstFourCategories = blogs?.filter((blog) => {
    const blogCategory = blog?.categories[0]?.title; // Assuming each blog has only one category
    return firstFourCategories.some(
      (category) => category.title === blogCategory
    );
  });

  if (!blogsInFirstFourCategories) {
    return "Loading...";
  }

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-between p-4 max-w-[1440px] mx-auto">
      <FadeIn>
        <h1 className="font-bold text-3xl mb-4">Blogs</h1>
        <p className="text-xl font-bold ">
          <span className="text-[#01ae6f]"> Welcome</span> to your source of
          everything sublets!
        </p>
        <section className="flex flex-col w-full lg:flex-row gap-4 mt-6 !rounded-lg ">
          <Link
            href={`/blogs/${blogsInFirstFourCategories[0]?.slug?.current}`}
            className="hover:bg-opacity-70 hover:scale-[0.97] hover:border hover:border-green-400 hover:transition-all hover:duration-300 h-[620px] relative !rounded-lg"
          >
            <img
              width="500"
              height={550}
              src={
                urlForImage(blogsInFirstFourCategories[0]?.mainImage).url() ||
                "/productimage.jpeg"
              }
              alt={blogsInFirstFourCategories[0]?.mainImage?.alt}
              className="w-full h-full rounded-lg object-cover  object-center "
            />
            <div class="absolute rounded-lg  items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
              <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                {blogsInFirstFourCategories[0]?.categories[0]?.title}
              </span>
              <h2 className="text-white text-5xl tracking-wide line-clamp-2 mb-2">
                {blogsInFirstFourCategories[0]?.title}
              </h2>
              <p className="text-lg opacity-90 font-normal line-clamp-2">
                {/* You can customize the view blog post with similar mouse clicks
                and immediately see the results change. */}
              </p>

              <div className="flex items-center gap-4 text-base">
                <div>
                  <img
                    width="56"
                    height={56}
                    src={
                      urlForImage(
                        blogsInFirstFourCategories[0]?.author?.image
                      ).url() || "/productimage.jpeg"
                    }
                    alt="admin"
                    className="w-w-14 h-14 rounded-full object-cover "
                  />
                </div>
                <div className="flex items-center gap-4  opacity-90 font-normal">
                  <p>{blogsInFirstFourCategories[0]?.author?.name}</p>
                  <span>
                    <TimeAgo date={blogsInFirstFourCategories[0]?._updatedAt} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <article className=" max-h-[620px] w-full">
            <div className="flex flex-col h-full gap-4">
              <Link
                href={`/blogs/${blogsInFirstFourCategories[1]?.slug?.current}`}
                className="h-[310px] relative hover:opacity-70 hover:transition-all hover:duration-300"
              >
                <img
                  width="500"
                  height={250}
                  src={
                    urlForImage(
                      blogsInFirstFourCategories[1]?.mainImage
                    ).url() || "/productimage.jpeg"
                  }
                  alt={blogsInFirstFourCategories[1]?.mainImage?.alt}
                  className="w-full h-full bg-opacity-80 rounded-lg object-cover object-center  "
                />
                <div class="absolute  rounded-lg items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
                  <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                    {blogsInFirstFourCategories[1]?.categories[0]?.title}
                  </span>
                  <h2 className="text-white text-2xl tracking-wide line-clamp-2">
                    {blogsInFirstFourCategories[1]?.title}
                  </h2>

                  <div className="flex items-center gap-4 text-base">
                    <div>
                      <img
                        width="56"
                        height={56}
                        src={
                          urlForImage(
                            blogsInFirstFourCategories[1]?.author?.image
                          ).url() || "/productimage.jpeg"
                        }
                        alt="author"
                        className="w-w-14 h-14 rounded-full object-cover "
                      />
                    </div>
                    <div className="flex items-center gap-4  opacity-90 font-normal">
                      <p>{blogsInFirstFourCategories[1]?.author?.name}</p>
                      <span>
                        <TimeAgo
                          date={blogsInFirstFourCategories[1]?._updatedAt}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="h-[295px]  flex flex-col w-full md:flex-row items-center gap-4">
                <Link
                  href={`/blogs/${blogsInFirstFourCategories[2]?.slug?.current}`}
                  className="hover:opacity-70 relative hover:transition-all hover:duration-300 h-full w-full !rounded-lg"
                >
                  <img
                    width="500"
                    height={500}
                    src={
                      urlForImage(
                        blogsInFirstFourCategories[2]?.mainImage
                      ).url() || "/productimage.jpeg"
                    }
                    alt="thumbnail"
                    className="w-full h-full rounded-lg object-cover object-center  "
                  />
                  <div class="absolute  rounded-lg  items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
                    <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                      {blogsInFirstFourCategories[2]?.categories[0]?.title}
                    </span>
                    <h2 className="text-white text-2xl tracking-wide line-clamp-2">
                      {blogsInFirstFourCategories[2]?.title}
                    </h2>

                    <div className="flex items-center gap-4 text-base ">
                      <div className="flex items-center gap-4  opacity-90 font-normal">
                        <p>{blogsInFirstFourCategories[2]?.author?.name}</p>
                        <span>
                          <TimeAgo
                            date={blogsInFirstFourCategories[2]?._updatedAt}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/blogs/${blogsInFirstFourCategories[3]?.slug?.current}`}
                  className="h-[295px] relative hover:opacity-70 hover:transition-all hover:duration-300  w-full"
                >
                  <img
                    width="500"
                    height={500}
                    src={
                      urlForImage(
                        blogsInFirstFourCategories[3]?.mainImage
                      ).url() || "/productimage.jpeg"
                    }
                    alt=""
                    className="w-full h-full rounded-lg object-cover object-center  "
                  />
                  <div class="absolute   rounded-lg items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
                    <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                      {blogsInFirstFourCategories[3]?.categories[0]?.title}
                    </span>
                    <h2 className="text-white text-2xl tracking-wide line-clamp-2">
                      {blogsInFirstFourCategories[3]?.title}
                    </h2>

                    <div className="flex items-center gap-4 text-base ">
                      <div className="flex items-center gap-4  opacity-90 font-normal">
                        <p>{blogsInFirstFourCategories[3]?.author?.name}</p>
                        <span>
                          <TimeAgo
                            date={blogsInFirstFourCategories[3]?._updatedAt}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </FadeIn>
      <Tags />
      <Recentblogs />
      <Subscription />
    </main>
  );
}
