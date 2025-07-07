import React from "react";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import { GlobalPointer } from "./Components/ui/GlobalPointer";

function App() {
  return (
    <Layout>
      <GlobalPointer />
      <Hero />
      <Main />
    </Layout>
  );
}

export default App;
