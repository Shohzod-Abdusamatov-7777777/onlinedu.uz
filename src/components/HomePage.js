import React from "react";
import Layout from "./Layout";
import HeroSection from "./HeroSection/HeroSection";
import Service from "./Service/Service";
import Courses from "./Courses/Courses";
import Calltoaction from "./CallToAction/CallToAction";
import Teachers from "./Teachers/Teachers"

const HomePage = () => {
    return (
        <Layout>
            {/* bosh sahidfa */}
            <HeroSection />
            {/* xizmatlar */}
            <Service />
            {/* courses */}
            <Courses />
            {/* call to action */}
            <Calltoaction />
            {/* teachers */}
            <Teachers />
        </Layout>
    );
};

export default HomePage;
