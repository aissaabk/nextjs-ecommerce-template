import React , { Suspense, lazy } from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import Countdown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";



const Home = () => {
  return (
    <main>
        <Hero />
        <Categories />
        <NewArrival />
        <PromoBanner />
        <BestSeller />
        <Countdown />
        <Testimonials />
        <Newsletter />
    </main>
  );
};

export default Home;
