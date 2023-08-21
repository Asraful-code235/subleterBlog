import { FadeIn } from "@/components/FadeIn";
import Recentblogs from "@/components/blogs/Recentblogs";
import Subscription from "@/components/blogs/Subscription";
import Tags from "@/components/blogs/Tags";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-between p-4 max-w-[1440px] mx-auto">
      <FadeIn>
        <h1 className="font-bold text-3xl mb-4">Blogs</h1>
        <p className="text-xl font-bold ">
          <span className="text-[#01ae6f]"> Welcome</span> to your source of
          everything sublets!
        </p>
        <section className="flex flex-col w-full lg:flex-row gap-4 mt-6 !rounded-lg ">
          <article className="hover:bg-opacity-70 hover:scale-[0.97] hover:border hover:border-green-400 hover:transition-all hover:duration-300 h-[620px] relative !rounded-lg">
            <Image
              width="500"
              height={550}
              src="/productimage.jpeg"
              alt=""
              className="w-full h-full rounded-lg object-cover  object-center "
            />
            <div class="absolute rounded-lg  items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
              <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                Fashion
              </span>
              <h2 className="text-white text-5xl tracking-wide line-clamp-2">
                What&apos;s In Trend In Women&apos;s Fashion Summer?
              </h2>
              <p className="text-lg opacity-90 font-normal line-clamp-2">
                You can customize the view blog post with similar mouse clicks
                and immediately see the results change.
              </p>

              <div className="flex items-center gap-4 text-base">
                <div>
                  <Image
                    width="56"
                    height={56}
                    src="/productimage.jpeg"
                    alt=""
                    className="w-w-14 h-14 rounded-full object-cover "
                  />
                </div>
                <div className="flex items-center gap-4  opacity-90 font-normal">
                  <p>By Marilou kelleher</p>
                  <span> 25Dec, 2023</span>
                </div>
              </div>
            </div>
          </article>

          <article className=" max-h-[620px] w-full">
            <div className="flex flex-col h-full gap-4">
              <div className="h-[310px] relative hover:opacity-70 hover:transition-all hover:duration-300">
                <Image
                  width="500"
                  height={250}
                  src="/productimage.jpeg"
                  alt=""
                  className="w-full h-full bg-opacity-80 rounded-lg object-cover object-center  "
                />
                <div class="absolute  rounded-lg items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
                  <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                    Fashion
                  </span>
                  <h2 className="text-white text-4xl tracking-wide line-clamp-2">
                    Traveling Makes You More Interesting
                  </h2>

                  <div className="flex items-center gap-4 text-base">
                    <div>
                      <Image
                        width="56"
                        height={56}
                        src="/productimage.jpeg"
                        alt=""
                        className="w-w-14 h-14 rounded-full object-cover "
                      />
                    </div>
                    <div className="flex items-center gap-4  opacity-90 font-normal">
                      <p>By konal Biry</p>
                      <span> 25Dec, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[295px]  flex flex-col w-full md:flex-row items-center gap-4">
                <div className="hover:opacity-70 relative hover:transition-all hover:duration-300 h-full w-full !rounded-lg">
                  <Image
                    width="500"
                    height={500}
                    src="/productimage.jpeg"
                    alt=""
                    className="w-full h-full rounded-lg object-cover object-center  "
                  />
                  <div class="absolute  rounded-lg  items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
                    <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                      Fashion
                    </span>
                    <h2 className="text-white text-4xl tracking-wide line-clamp-2">
                      Traveling Makes You More Interesting
                    </h2>

                    <div className="flex items-center gap-4 text-base ">
                      <div className="flex items-center gap-4  opacity-90 font-normal">
                        <p>By konal Biry</p>
                        <span> 25Dec, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[295px] relative hover:opacity-70 hover:transition-all hover:duration-300  w-full">
                  <Image
                    width="500"
                    height={500}
                    src="/productimage.jpeg"
                    alt=""
                    className="w-full h-full rounded-lg object-cover object-center  "
                  />
                  <div class="absolute   rounded-lg items-start p-6 flex-col gap-4 inset-0 flex justify-end text-white text-2xl font-bold bg-black bg-opacity-40 opacity-100 transition-opacity duration-300">
                    <span className="bg-[#01ae6f] text-white px-4 py-2 rounded-full text-sm w-fit">
                      Fashion
                    </span>
                    <h2 className="text-white text-4xl tracking-wide line-clamp-2">
                      Traveling Makes You More Interesting
                    </h2>

                    <div className="flex items-center gap-4 text-base ">
                      <div className="flex items-center gap-4  opacity-90 font-normal">
                        <p>By konal Biry</p>
                        <span> 25Dec, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
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
