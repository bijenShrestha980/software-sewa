import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <Header />
      <section className="pt-20 pb-32">
        <div className="container text-center">
          <span
            className="text-4xl text-blue-500 font-bold font-heading wow animate__ animate__fadeIn  animated"
            data-wow-delay=".2s"
            style={{ visibility: "visible", animationDelay: "0.2s" }}
          >
            Error 404
          </span>
          <h2
            className="mb-2 text-4xl font-bold font-heading wow animate__ animate__fadeIn  animated"
            data-wow-delay=".3s"
            style={{ visibility: "visible", animationDelay: "0.3s" }}
          >
            Something went wrong!
          </h2>
          <p
            className="mb-6 text-blueGray-400 wow animate__ animate__fadeIn  animated"
            data-wow-delay=".4s"
            style={{ visibility: "visible", animationDelay: "0.4s" }}
          >
            Sorry, but we are unable to open this page.
          </p>
          <div>
            <Link href="/">
              <a
                className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__ animate__fadeIn  animated"
                data-wow-delay=".5s"
                href="./index.html"
                style={{ visibility: "visible", animationDelay: "0.5s" }}
              >
                Go back to Homepage
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded wow animate__ animate__fadeIn  animated"
                data-wow-delay=".6s"
                href="./contact.html"
                style={{ visibility: "visible", animationDelay: "0.6s" }}
              >
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
