import React from "react";
import LearnReact from "./sub-components/LearnReact";
import AboutReact from "./sub-components/AboutReact";
const Main = () => (
  <main className="py-8 px-4 max-w-3xl mx-auto bg-light font-body">
    <LearnReact />
    <AboutReact />
  </main>
);

export default Main;
