import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import Sidebar from "./components/Sidebar/Sidebar";
import HeroSection from "./components/HeroSection/HeroSection";
import Service from "./components/Service/Service";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Calltoaction from "./components/CallToAction/CallToAction";
import Teachers from "./components/Teachers/Teachers";

const App = () => {
  // language
  const [language, setLanguage] = useState("O'zbekcha");
  // modal
  const [showModal, setShowModal] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);



  // ##################################################################

  //get teachers from server

  const [teachers, setTeachers] = useState([]);
const getUrl="https://api.onlinedu.uz/api/v1/teachers?page=1"
  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => res)
      .then((data) => {
        setTeachers(data.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // ##################################################################

  return (
    <React.Fragment>
      <BrowserRouter>
        {/* navbar */}
        <Navbar
          language={language}
          setLanguage={setLanguage}
          setShowModal={setShowModal}
          setSideOpen={setSideOpen}
        />
        {/* sidebar */}
        <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
        {/* login form modal */}
        <Modal showModal={showModal} setShowModal={setShowModal} />

        {/* bosh sahidfa */}
        <HeroSection />
        {/* xizmatlar */}
        <Service />
        {/* courses */}
        <Courses />
        {/* call to action */}
        <Calltoaction />
        {/* teachers */}
        <Teachers teachers={teachers} />
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
