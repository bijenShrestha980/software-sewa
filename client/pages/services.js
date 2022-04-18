import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ServicesCard from "../components/ServicesCard";

const services = () => {
  const { asPath } = useRouter();
  const path =
    asPath.split("/")[1].charAt(0).toLocaleUpperCase() + asPath.slice(2);
  return (
    <div>
      <Header />
      <Navigation path={path} />
      <ServicesCard />
      <Footer />
    </div>
  );
};

export default services;
