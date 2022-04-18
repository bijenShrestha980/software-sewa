import Image from "next/image";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const HowWeWork = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const getWork = async () => {
      try {
        const res = await publicRequest.get("/works");
        setWork(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getWork();
  }, [setWork]);

  return (
    <section className="py-20 bg-blueGray-50" id="how-we-work">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
              <span>We are</span>
              <span className="text-blue-500"> awesome team</span>
              <br />
              <span>for your business dream</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
              Software Sewa is one of Nepal’s leading digital software and
              application companies. We aim to provide complete IT services
              related to web applications, Android applications, and iOS
              applications. Our team is dedicated to interacting with each
              client, understanding their needs, and completing each task with
              excellence.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
          {work?.map(({ title, desc, img, sn, _id }) => (
            <div
              className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
              key={_id}
            >
              <div className="p-12 bg-white shadow rounded">
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  {sn}
                </div>
                <Image
                  width={170}
                  height={190}
                  objectFit="contain"
                  className="mx-auto my-4"
                  src={img}
                  alt="NTTS"
                />
                <h3 className="mb-2 font-bold font-heading text-xl">{title}</h3>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
