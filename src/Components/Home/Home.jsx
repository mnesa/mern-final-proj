import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";
import ExceptionalDental from "./ExceptionalDental/ExceptionalDental";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <ExceptionalDental />
      <MakeAppointment />
      <Reviews />
      <Contact></Contact>
    </div>
  );
};

export default Home;
