import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import Footer from "./components/Footer";

export default function App() {
  const journalElements = data.map((item) => {
    return (
    <Countries 
    {...item} />
    );
  })
    return (
    <div>
    <Navbar />
    {journalElements}
    <Footer />
    </div>
    );
}
