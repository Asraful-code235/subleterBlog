import { FadeIn } from "../FadeIn";

export default function Tags() {
  return (
    <section className="py-24 bg-gray-100 w-screen my-24 min-h-[500px] max-[500px]:mt-56  max-[768px]:mt-96">
      <FadeIn>
        <ul className="flex flex-wrap items-center justify-center p-4 gap-4 max-w-[1440px] mx-auto">
          <li className="px-12 py-8 flex  gap-2 bg-[#4dc69a] rounded-lg">
            <div>
              <img
                src="/productimage.jpeg"
                alt=""
                className="w-16 h-16 rounded-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col text-white text-lg font-bold">
              <h2>Tips</h2>
              <span className="font-medium">6 posts</span>
            </div>
          </li>
          {Array.from({ length: 7 }).map((tag, key) => (
            <li
              key={key}
              className="px-12 py-8 flex items-start  gap-2 bg-[#4dc69a] hover:bg-black hover:text-white rounded-lg"
            >
              <div>
                <img
                  src="/productimage.jpeg"
                  alt=""
                  className="w-16 h-16 rounded-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col text-white text-lg font-bold">
                <h2 className="line-clamp-1 whitespace-pre-wrap">Tips</h2>
                <span className="font-medium">6 posts</span>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
