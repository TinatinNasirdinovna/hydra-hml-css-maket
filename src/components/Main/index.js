import React from "react";
import Hero from "./Hero";
import ConnectInfo from "./ConnectInfo";
import Instraduction from "./Instraduction";
import About from "./About";
import Cards from "./Cards";
import Technologies from "./Technologies";
import Logos from "./Logos";
import Steps from "./Steps";
import JoinHydry from "./JoinHydry";

let obj = {
  title: "INTRODUCTION",
  title2: "TO HYDRA VR",
  paragraph:
    "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.",
};

let obj2 = {
  title: "WHY BUILD",
  title2: "WITH HYDRA VR?",
  paragraph:
    "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.",
};

let obj3 = {
  title: "HOW WE BUILD",
  title2: "WITH HYDRA?",
  paragraph:
    "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.",
};


const Main = () => {
  return (
    <main id="main">
      <Hero />
      <ConnectInfo />
      <Instraduction obj={obj} />
      <About />
      <Instraduction obj={obj2} />
      <Cards/>
      <Technologies/>
      <Logos/>
      <Instraduction obj={obj3}/>
      <Steps/>
      <JoinHydry/>
    </main>
  );
};

export default Main;
