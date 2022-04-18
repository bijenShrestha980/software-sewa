import Category from "../components/Category";
import KeyFeatures from "../components/KeyFeatures";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowWeWork from "../components/HowWeWork";
import Products from "../components/Products";
import Showcase from "../components/Showcase";
import Slider from "../components/Slider";
// import Preloader from "../components/Preloader";
// import { useState } from "react";

export default function Home() {
  // const [preloader, setPreloader] = useState(true);
  // if (preloader) {
  //   return <Preloader />;
  // } else {
  return (
    <div>
      {/* <Preloader /> */}
      <Header />
      <Slider />
      <Showcase />
      <KeyFeatures />
      <Products />
      <HowWeWork />
      <Category />
      <Footer />
    </div>
  );
  // }
}
