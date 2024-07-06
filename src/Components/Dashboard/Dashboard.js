import React from "react";
import Header from "../Navbar/Header";
import Introduction from "../Pages/Introduction";
import OurPrograms from "../Pages/OurPrograms";
import Footer from "../Navbar/Footer";

function Dashboard() {
  return (
    <>
      <Header />
      <Introduction />
      <OurPrograms />
      <Footer />
    </>
  );
}

export default Dashboard;
