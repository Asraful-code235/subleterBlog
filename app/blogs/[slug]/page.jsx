import Image from "next/image";

export default function BlogDetailsPage() {
  return (
    <div className=" max-w-3xl text-gray-900  mx-auto ">
      <section className="md:w-2/3 w-full flex flex-col gap-4">
        <h1 className="mt-4 text-4xl text-extrabold">
          {/* {blogsDetails?.blogsDetails?.title} */} text
        </h1>
        <p className="font-semibold text-lg">
          {/* {blogsDetails?.blogsDetails?.excerpt} */}text
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-0 justify-between">
          <div className="flex items-center gap-2">
            <div className="">
              {/* <Image
                src={"/bg-image.jpg"}
                height={45}
                width={45}
                className="w-14 h-14 object-cover object-center rounded-full"
                alt=""
              /> */}
            </div>
            <div className="flex flex-col ">
              <p>
                By{" "}
                <span className="font-bold text-sm">
                  {/* {blogsDetails?.blogsDetails?.author?.name} */}
                </span>
              </p>
              <div className="flex items-center gap-1.5 text-sm">
                {/* <ClockIcon className="w-5" /> */}
                {/* <TimeAgo date={blogsDetails?.blogsDetails?._updatedAt} /> */}

                {/* <span>
                    4 days ago in{" "}
                    <Link className="font-extrabold" href="/">
                      Shirts
                    </Link>
                  </span> */}
              </div>
            </div>
          </div>
          {/* <div className="flex gap-4 items-center">
              <div>Fa</div> <div>Tw</div>
            </div> */}
        </div>
        <div className="flex flex-col justify-center gap-6">
          {/* <Image
            src={
              urlFor(blogsDetails?.blogsDetails?.mainImage).url() ||
              "/bg-image.jpg"
            }
            height="650"
            width="860"
            priority
            alt={blogsDetails?.blogsDetails?.mainImage?.alt || ""}
            className="w-full hover:border-2 hover:border-green-400 hover:transition-all hover:duration-300  h-full object-cover object-center rounded-md"
          /> */}
          {/* {blogsDetails?.blogsDetails?.body && (
            <PortableText
              content={blogsDetails?.blogsDetails?.body}
              projectId={process.env.Next_APP_SANITY_PROJECT_ID}
              dataset={process.env.SANITY_DATASET}
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => (
                  <ul className="px-4 my-2">
                    <li className="list-disc">{children}</li>
                  </ul>
                ),
              }}
            />
          )} */}
        </div>
      </section>
    </div>
  );
}
