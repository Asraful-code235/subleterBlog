export default function Header() {
  return (
    <header className="max-w-[1440px] py-8 mx-auto flex items-center gap-8 justify-between px-4">
      <div>
        <img src="/logo.png" alt="logo" className="w-56" />
      </div>
      <nav className=" items-center gap-4 hidden md:flex">
        {["Home", "Product updates", "Contact"].map((item) => (
          <div
            key={item}
            className="text-gray-600 font-medium hover:text-gray-900 text-lg"
          >
            {item}
          </div>
        ))}
      </nav>
    </header>
  );
}
