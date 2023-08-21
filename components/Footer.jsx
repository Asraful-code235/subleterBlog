import { FadeIn } from "./FadeIn";

export default function Footer() {
  return (
    <footer className="w-screen mx-auto flex items-center bg-gray-900 p-8 gap-8 justify-between px-4">
      <FadeIn className="flex flex-col md:flex-row w-full items-start gap-24 max-w-[1440px] justify-between  mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start w-full  gap-4">
          <img src="/logo.png" alt="logo" className="w-56" />
          <p className="text-white font-normal text-base max-w-xs ">
            Subletr Blogs posts about everything sublets! ranging from tips and
            tricks, finance, travel, !&As plus more! 🏠💚
          </p>
        </div>
        <nav className="flex w-full justify-center items-start gap-4 text-white">
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-bold">Company</li>
            <li>Subletr.com</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-bold">Socials</li>
            <li>Instagram</li>
            <li>Threads</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-bold">Learn More</li>
            <li>Resources</li>
          </ul>
        </nav>
      </FadeIn>
    </footer>
  );
}
