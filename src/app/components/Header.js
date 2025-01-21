import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-[#040709] fixed w-full z-20 top-0 start-0 sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/Navbar Logo.png"
            width={150}
            height={100}
            alt="ghostCoder Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#1a2629] hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Get started
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white  rounded hover:shadow-[0_0_2px_#1a2629,inset_0_0_2px_#1a2629,0_0_5px_#1a2629,0_0_15px_#1a2629,0_0_30px_#1a2629] "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-white rounded hover:shadow-[0_0_2px_#1a2629,inset_0_0_2px_#1a2629,0_0_5px_#1a2629,0_0_15px_#1a2629,0_0_30px_#1a2629] "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-3 text-white rounded hover:shadow-[0_0_2px_#1a2629,inset_0_0_2px_#1a2629,0_0_5px_#1a2629,0_0_15px_#1a2629,0_0_30px_#1a2629]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-white rounded hover:shadow-[0_0_2px_#1a2629,inset_0_0_2px_#1a2629,0_0_5px_#1a2629,0_0_15px_#1a2629,0_0_30px_#1a2629] "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
