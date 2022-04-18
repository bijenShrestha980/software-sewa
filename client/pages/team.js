import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { publicRequest } from "../requestMethods";
import { useRouter } from "next/router";

const team = () => {
  const [member, setMember] = useState([]);
  const { asPath } = useRouter();
  const path =
    asPath.split("/")[1].charAt(0).toLocaleUpperCase() + asPath.slice(2);

  useEffect(() => {
    const getMember = async () => {
      try {
        const res = await publicRequest.get("/teams");
        setMember(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMember();
  }, [setMember]);
  return (
    <div>
      <Header />
      <Navigation path={path} />
      {/* Leader */}
      <section className="py-20 bg-blueGray-50">
        <div className="container">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <span
              className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__ animate__fadeIn"
              data-wow-delay=".1s"
              style={{ visibility: "visible", animationDelay: "0.1s" }}
            >
              Our Team Leader
            </span>
            <h2
              className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__ animate__fadeIn  animated animated"
              data-wow-delay=".1s"
              style={{ visibility: "visible", animationDelay: "0.1s" }}
            >
              Meet Your <span className="text-blue-500">Experts</span> <br />
              Team Member
            </h2>
          </div>
          <div className="flex flex-wrap">
            {member &&
              member?.map((item) => (
                <div className="w-full md:w-1/2 py-5 md:px-5">
                  <div
                    className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__ animate__fadeIn  border border-gray-100 hover:border-gray-200 animated animated"
                    data-wow-delay=".1s"
                    style={{ visibility: "visible", animationDelay: "0.1s" }}
                  >
                    <div className="flex items-center mb-4">
                      <img
                        className="h-16 w-16 rounded-full object-cover"
                        src={item.img}
                        alt="NTTS"
                      />
                      <div className="pl-4">
                        <strong className="mt-6 mb-2 text-md">
                          {item.name}
                        </strong>
                        <p className="text-gray-500 text-xs mt-3">Director</p>
                      </div>
                    </div>
                    <p className="leading-loose text-blueGray-400 mb-5">
                      {item.desc}
                    </p>
                    <div className="flex space-x-2">
                      <a href="#">
                        <img src="/icons/facebook-blue.svg" alt="NTTS" />
                      </a>
                      <a href="#">
                        <img src="/icons/instagram-blue.svg" alt="NTTS" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Member */}
      <section className="pt-20">
        <div className="container text-center">
          <div className="max-w-lg mx-auto mb-12">
            <span
              className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__ animate__fadeIn  animated animated"
              data-wow-delay=".1s"
              style={{ visibility: "visible", animationDelay: "0.1s" }}
            >
              Our Team
            </span>
            <h2
              className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__ animate__fadeIn  animated animated"
              data-wow-delay=".3s"
              style={{ visibility: "visible", animationDelay: "0.3s" }}
            >
              Our Awesome
              <br />
              <span className="text-blue-500">Creative</span> Team Member
            </h2>
            <p
              className="text-blueGray-400 leading-loose wow animate__ animate__fadeIn  animated animated"
              data-wow-delay=".1s"
              style={{ visibility: "visible", animationDelay: "0.3s" }}
            >
              Software Sewa is a software firm dedicated to supporting each and
              every client and assisting them with their IT issues.
            </p>
          </div>
          <div className="flex flex-wrap -mx-3">
            {member &&
              member.map((item, _id) => (
                <div
                  className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__ animate__fadeIn  animated animated"
                  data-wow-delay=".4s"
                  style={{ visibility: "visible", animationDelay: "0.4s" }}
                  key={_id}
                >
                  <img
                    className="h-64 w-64 mx-auto rounded object-cover object-top"
                    src={item.img}
                    alt="NTTS"
                  />
                  <p className="mt-6">
                    <strong className="text-md">{item.name}</strong>
                  </p>
                  <p className="text-gray-500 text-xs mb-4">Director</p>
                  <div className="flex py-1 justify-center space-x-2">
                    <a href="">
                      <img src="/icons/facebook.svg" alt="NTTS" />
                    </a>
                    <a href="">
                      <img src="/icons/twitter.svg" alt="NTTS" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default team;
