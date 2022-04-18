import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div>
      {/* Header */}
      <header className="bg-transparent sticky-bar mt-4">
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/">
              <span className="text-3xl font-semibold leading-none cursor-pointer">
                <h2
                  className="md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Software
                  <span className="text-blue-500">Sewa</span>
                </h2>
              </span>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="pt-4 pb-4">
                <Link href="/about">
                  <span className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/services">
                  <span className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#">
                  <span className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Company
                  </span>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/team">
                      <span className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500 cursor-pointer">
                        Team
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials">
                      <span className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500 cursor-pointer">
                        Testimonials
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs">
                      <span className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500 cursor-pointer">
                        Faqs
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative pt-4 pb-4">
                <Link href="/blog">
                  <span className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/contact">
                  <span className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                className="flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
                onClick={() => setNav(true)}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* Mobile Header */}
      {nav ? (
        <div
          className="navbar-menu relative z-50 transition duration-300"
          id="mobile-header"
        >
          <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-3xl font-semibold leading-none"
                href="index.html"
              >
                {/* <Image
                  width={20}
                  height={20}
                  className="h-10"
                  src="/imgs/logo/ntts-v2.png"
                  alt="NTTS"
                /> */}
              </a>
              <button className="navbar-close" onClick={() => setNav(false)}>
                <svg
                  className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul className="mobile-menu" id="menu">
                <li className="mb-1 rounded-xl">
                  <Link href="/about">
                    <span className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                      About Us
                    </span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/services">
                    <span className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                      Services
                    </span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/team">
                    <span className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                      Team
                    </span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/blog">
                    <span className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                      Blogs
                    </span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/faqs">
                    <span className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                      Faqs
                    </span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/testimonials">
                    <span className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                      Testimonial
                    </span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/contact">
                    <span className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <p className="my-4 text-xs text-blueGray-400">
                <span>Get in Touch</span>
                <span className="text-blue-500 hover:text-blue-500 underline px-2">
                  itnttsnepal.com
                </span>
              </p>
              <Link className="inline-block px-1" href="https://facebook.com/">
                <Image
                  width={20}
                  height={20}
                  src="/icons/facebook-blue.svg"
                  alt="NTTS"
                />
              </Link>
              <Link href="https://twitter.com/">
                <span className="inline-block px-1">
                  <Image
                    width={20}
                    height={20}
                    src="/icons/twitter-blue.svg"
                    alt="NTTS"
                  />
                </span>
              </Link>
              <Link href="https://www.instagram.com/">
                <span className="inline-block px-1">
                  <Image
                    width={20}
                    height={20}
                    src="/icons/instagram-blue.svg"
                    alt="NTTS"
                  />
                </span>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
