import AboutUs from "@/components/about/AboutUs";
import Header from "@/components/about/Header";
import Team from "@/components/about/Team";
import SubHead from "@/components/home/SubHead";
import React from "react";

const About = () => {
  return (
    <div>
      <Header />
      <SubHead />
      <AboutUs />
      <Team />
    </div>
  );
};

export default About;
