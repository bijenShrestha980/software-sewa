import Link from "next/link";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import Loading from "./Loading";

const ServicesCard = () => {
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState([]);

  useEffect(() => {
    const getService = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("/categories");
        setService(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getService();
  }, [setService]);
  return (
    <div>
      {/* <!-- Service --> */}
      <section className="pt-12">
        {loading ? (
          <Loading />
        ) : (
          service?.map((item) => (
            <Link href={`/cat/${item.categories}`} key={item._id}>
              <div
                className="container py-12 mx-auto hover-up-5 "
                data-wow-delay=".3s"
              >
                <div className="flex flex-wrap">
                  <div
                    className="w-full group md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__ animate__fadeIn  animated"
                    data-wow-delay=".5s"
                    style={{ visibility: "visible", animationDelay: "0.5s" }}
                  >
                    <img
                      className="sm:max-w-sm lg:max-w-full mx-auto"
                      src={item.img}
                      alt="NTTS"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                    <div className="max-w-md-2">
                      <div className="mb-4">
                        <h2
                          className="text-4xl mt-3 font-bold font-heading wow animate__ animate__fadeIn  animated cursor-pointer"
                          data-wow-delay=".3s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                          }}
                        >
                          <span className="text-blue-500 hover:text-blue-700 transition duration-50 ease-in-out">
                            {item.title}
                          </span>
                        </h2>
                      </div>
                      <p
                        className="mb-6 leading-loose text-blueGray-400 wow animate__ animate__fadeIn  animated"
                        data-wow-delay=".1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        {service.desc}
                      </p>
                      <div className="flex flex-wrap">
                        <div
                          className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__ animate__fadeIn  animated"
                          data-wow-delay=".2s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.1s",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                              1
                            </span>
                          </div>
                          <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">
                              Push Notification
                            </h3>
                          </div>
                        </div>
                        <div
                          className="w-full md:w-1/2 items-start py-4 wow animate__ animate__fadeIn  animated"
                          data-wow-delay=".3s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                              2
                            </span>
                          </div>
                          <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">
                              Interactive and Intuitive
                            </h3>
                          </div>
                        </div>
                        <div
                          className="w-full md:w-1/2 items-start py-4 wow animate__ animate__fadeIn  animated"
                          data-wow-delay=".4s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                              3
                            </span>
                          </div>
                          <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">
                              Secure and Personalised
                            </h3>
                          </div>
                        </div>
                        <div
                          className="w-full md:w-1/2 items-start py-4 wow animate__ animate__fadeIn  animated"
                          data-wow-delay=".5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                              4
                            </span>
                          </div>
                          <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">
                              Systematic and Better Functioning
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
};

export default ServicesCard;
