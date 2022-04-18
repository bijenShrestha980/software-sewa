import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Mission = () => {
  const [mission, setMission] = useState([]);
  const [vision, setVision] = useState([]);

  useEffect(() => {
    const getMission = async () => {
      try {
        const res = await publicRequest.get("/missions");
        setMission(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMission();
  }, [setMission]);

  useEffect(() => {
    const getVision = async () => {
      try {
        const res = await publicRequest.get("/visions");
        setVision(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getVision();
  }, [setVision]);

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full mb-4 lg:mb-0">
            {/* Mission */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold font-heading wow animate__ animate__fadeInDown  animated mb-8"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <span>Our </span>
                <span className="text-blue-500">Mission </span>
              </h2>
              <div className="max-w-2xl mb-8">
                {mission?.map((item, _id) => (
                  <p
                    className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                    key={_id}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            {/* Vision */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold font-heading wow animate__ animate__fadeInDown  animated mb-8"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <span>Our </span>
                <span className="text-blue-500">Vision </span>
              </h2>
              <div className="flex flex-wrap items-startjustify-between max-w-2xl lg:max-w-full">
                {vision?.map((item, _id) => (
                  <span className="w-1/2 px-2" key={_id}>
                    <h3 className="mb-2 font-bold font-heading text-xl">
                      {item.title}
                    </h3>
                    <div className="max-w-2xl mb-8">
                      <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                        {item.desc}
                      </p>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
