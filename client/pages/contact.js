import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import { publicRequest } from "../requestMethods";

const contact = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const res = await publicRequest.get("/contactBanners");
        setBanner(res.data);
      } catch (err) {}
    };
    getBanner();
  }, [setBanner]);

  return (
    <div>
      <Header />
      {banner?.map((item, _id) => (
        <HeroBanner key={_id} item={item} />
      ))}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="max-w-md mb-8 mx-auto">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__ animate__fadeIn animated animated"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeIn",
                }}
              >
                Contact Us
              </span>
              <h2
                className="mt-2 text-4xl font-bold font-heading wow animate__ animate__fadeIn animated animated"
                data-wow-delay=".s"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                We will
                <span className="text-blue-500">be glad</span> to hear from you!
              </h2>
            </div>
            <div>
              {" "}
              <form>
                <div
                  className="mb-4 text-sm wow animate__ animate__fadeIn animated animated"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeIn",
                  }}
                >
                  <span className="mr-4 font-semibold">Departament:</span>
                  <label className="mr-4">
                    <input
                      className="mr-1"
                      type="radio"
                      name="department"
                      value="1"
                    />
                    <span>Support</span>
                  </label>
                  <label>
                    <input
                      className="mr-1"
                      type="radio"
                      name="department"
                      value="2"
                    />
                    <span>Sales</span>
                  </label>
                </div>
                <div
                  className="mb-4 wow animate__ animate__fadeIn animated animated"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div
                  className="mb-4 wow animate__ animate__fadeIn animated animated"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div
                  className="mb-4 wow animate__ animate__fadeIn animated animated"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div
                  className="mb-4 wow animate__ animate__fadeIn animated animated"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <textarea
                    className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                    placeholder="Message..."
                  ></textarea>
                </div>
                <div
                  className="mb-4 wow animate__ animate__fadeIn animated animated"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <label className="flex px-2 bg-blueGray-50 rounded">
                    <input className="hidden" type="file" name="Choose file" />
                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                      Browse
                    </span>
                  </label>
                </div>
                <div
                  className="flex justify-between items-center wow animate__ animate__fadeIn animated animated"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <label>
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      value="1"
                    />
                    <span className="text-sm font-semibold">
                      I agree to terms and conditions.
                    </span>
                  </label>
                  <button
                    className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default contact;
