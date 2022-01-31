import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Landing';
import Navbar from "./Navbar";




function Home() {

  useEffect(() => {
    document.title = "index";
    if (sessionStorage.getItem("userSession") == null) {
        window.location = "/login"
    } else if (localStorage.getItem("user") == null) {
        window.location = "./login"
    }

})


  return (
    <>
      <Navbar />
      <div>
        {/* Navigation*/}

        {/* Header*/}
        <header className="masthead d-flex align-items-center">
          <div className="container px-4 px-lg-5 text-center">
            <h1 className="mb-1">Stylish Resume</h1>
            <h3 className="mb-5"><em>Create Your Resume in modern style</em></h3>
            <Link className="btn btn-primary btn-xl" to="./login">Create Resume</Link>
          </div>
        </header>
        {/* About*/}

      </div>

    </>
  );
};
export default Home;
