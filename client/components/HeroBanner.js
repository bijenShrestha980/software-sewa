import Link from "next/link";

const HeroBanner = ({ item }) => {
  return (
    // <!-- Hero Banner -->
    <section className="relative -mt-24 pt-24">
      <div
        className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
        style={{ zIndex: "-1" }}
      ></div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <h2
                  className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__ animate__fadeIn animated animated"
                  style={{ visibility: "visible" }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-blueGray-400 leading-relaxed wow animate__ animate__fadeIn mt-3 text-sm  animated"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  {item.desc}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <Link href="/services">
                  <a
                    className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__ animate__fadeIn animated animated"
                    href="./services.html"
                    style={{ visibility: "visible" }}
                  >
                    Our Services
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__ animate__fadeIn animated animated"
                    data-wow-delay=".3s"
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                  >
                    How We Work?
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
            <div className="flex items-center justify-center">
              <img className="lg:max-w-lg" src={item.img} alt="NTTS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
