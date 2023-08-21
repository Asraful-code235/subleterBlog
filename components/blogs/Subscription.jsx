import { FadeIn } from "../FadeIn";

export default function Subscription() {
  return (
    <section className="w-full my-24">
      <FadeIn>
        <div className="max-w-7xl mx-auto min-h-[500px] bg-[#01ae6f] rounded-xl flex flex-col gap-4 items-center justify-center ">
          <h1 className="text-white text-4xl font-bold text-center">
            Subscribe to our weekly Newsletter
          </h1>
          <p className="text-2xl font-medium text-white text-center">
            Get all the latest subletting news right in your inbox every
            thursday
          </p>
          <div className="relative border py-2 px-8 border-transparent outline-none bg-white rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 border-none outline-none py-2"
            />
            <button className="absolute hover:bg-black right-3 top-2 px-4 py-2 bg-[#01ae6f] rounded-full text-white ">
              Subscribe
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
