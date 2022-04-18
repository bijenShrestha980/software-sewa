import Footer from "../components/Footer";
import Header from "../components/Header";
import HowWeWork from "../components/HowWeWork";
import HeroBanner from "../components/HeroBanner";
import Mission from "../components/Mission";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

export default function Home() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const res = await publicRequest.get("/aboutBanners");
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
      <Mission />
      <HowWeWork />
      <Footer />
    </div>
  );
}
