import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import FeatureComponent from "./components/FeatureComponent";
import DownloadComponent from "./components/DownloadComponent";
import FaqComponent from "./components/FaqComponent";
import SignUpComponent from "./components/SignUpComponent";
import FooterNavComponent from "./components/FooterNavComponent";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <main>
        <HeroComponent></HeroComponent>
        <FeatureComponent></FeatureComponent>
        <DownloadComponent></DownloadComponent>
        <FaqComponent></FaqComponent>
        <SignUpComponent></SignUpComponent>
      </main>
      <FooterNavComponent></FooterNavComponent>
    </>
  );
}

export default App;
