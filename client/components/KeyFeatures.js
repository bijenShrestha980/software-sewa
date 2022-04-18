import Image from "next/image";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const KeyFeatures = () => {
  const [keyFeature, setKeyFeature] = useState([]);

  useEffect(() => {
    const getKeyFeature = async () => {
      try {
        const res = await publicRequest.get("/keyFeatures");
        setKeyFeature(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getKeyFeature();
  }, [setKeyFeature]);
  return (
    <div>
      <section
        className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden"
        id="key-features"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <div
                className="lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="mb-4">
                  <span
                    className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                    data-wow-delay=".9s"
                  >
                    Why choose us
                  </span>
                  <h2
                    className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    Key Features
                  </h2>
                </div>
                {/*  */}
                {keyFeature?.map(({ _id, title, desc, img }) => (
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                    key={_id}
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={img}
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        {title}
                      </h3>
                      <p className="text-blueGray-400 leading-loose">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
              <div
                className="wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="jump relative mx-auto rounded-xl w-full z-10"
                  src="/placeholders/mobile.svg"
                  alt="NTTS"
                />
                <img
                  className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                  src="/elements/blob-tear.svg"
                  alt="NTTS"
                />
                <img
                  className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                  src="/elements/blob-tear.svg"
                  alt="NTTS"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyFeatures;
