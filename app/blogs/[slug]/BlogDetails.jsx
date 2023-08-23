"use client";
import TimeAgo from "react-timeago";
import PortableText from "react-portable-text";

export default function BlogDetails({ blogsDetails }) {
  return (
    <section className=" w-full flex flex-col gap-4">
      <div className=" mx-auto space-y-4">
        <h1 className="mt-4 text-4xl text-extrabold">{blogsDetails?.title}</h1>
        <p className="font-semibold text-sm space-x-2 ">
          {" "}
          {`By ${blogsDetails?.author?.name}`}{" "}
          <span className="ml-2">
            <TimeAgo date={blogsDetails?._updatedAt} />
          </span>
        </p>
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div className="customeBlock">
          {blogsDetails?.body && (
            <PortableText
              content={blogsDetails?.body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              serializers={{
                h1: (props) => (
                  <h1
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      margin: "16px 0",
                    }}
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h1
                    style={{ fontSize: "20px", fontWeight: "600" }}
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h1
                    style={{ fontSize: "18px", fontWeight: "500" }}
                    {...props}
                  />
                ),

                h4: (props) => <h1 style={{ fontSize: "16px" }} {...props} />,
                h5: (props) => <h1 style={{ fontSize: "14px" }} {...props} />,
                li: ({ children }) => (
                  <ul className="px-4  my-4">
                    <li className="list-disc">{children}</li>
                  </ul>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="px-4 my-1.5 ">{children}</blockquote>
                ),
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
