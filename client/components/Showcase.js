const Showcase = () => {
  return (
    <section className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24">
      <div className="container px-4 mx-auto">
        <div className="pt-12 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
              Committed to <br />
              Building <span className="text-blue-500">the Future</span>
            </h2>
            <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
              Trust our team of experts for{" "}
              <strong className="text-blue-500">innovating, creating</strong>{" "}
              and <strong className="text-blue-500">maintaining</strong> your
              website, mobile application, graphic design, digital marketing and
              SEO
            </p>
          </div>
          <div>
            <a
              className="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2"
              href="#key-features"
            >
              Key Features
            </a>
            <a
              className="btn-white wow animate__animated animate__fadeIn hover-up-2"
              data-wow-delay=".3s"
              href="#how-we-work"
            >
              How We Work?
            </a>
          </div>
        </div>
      </div>
      <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
        <img src="/elements/pattern.png" alt="NTTS" />
        <div
          className="absolute"
          style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}
        >
          <img
            className="jump rounded wow animate__animated animate__fadeIn"
            src="placeholders/Screenshot 2022-03-20 164526.png"
            alt="NTTS"
          />
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between pt-8 pb-16">
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".2s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading">+</span>
              <span className="sm:text-2xl font-bold font-heading count">
                <span>30</span>
              </span>
              <p className="text-xs sm:text-base text-blueGray-400">
                Annual Partner
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".4s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading">+</span>
              <span className="sm:text-2xl font-bold font-heading count">
                <span>58</span>
              </span>
              <span className="sm:text-2xl font-bold font-heading"> k </span>
              <p className="text-xs sm:text-base text-blueGray-400">
                Completed Projects
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".6s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading">+</span>
              <span className="sm:text-2xl font-bold font-heading count">
                <span>500</span>
              </span>
              <p className="text-xs sm:text-base text-blueGray-400">
                Happy Customers
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".8s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading">+</span>
              <span className="sm:text-2xl font-bold font-heading count">
                <span>800</span>
              </span>
              <p className="text-xs sm:text-base text-blueGray-400">Works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
