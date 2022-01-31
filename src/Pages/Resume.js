import React from "react";
// import "./Resume.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Resume() {

  useEffect(() => {
    document.title = "index";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/login"
    } else if (localStorage.getItem("user") == null) {
      window.location = "./login"
    }

  })

  const getProfile = async () => {
    const url = "http://localhost:8080/user/resume";
    const Data = {
      email: localStorage.getItem("user"),

    }
    await axios.post(url, Data).then((response) => {
      sessionStorage.setItem("firstName", response.data.firstName);
      sessionStorage.setItem("lastName", response.data.lastName);
      sessionStorage.setItem("jobTitle", response.data.jobTitle);
      sessionStorage.setItem("email", response.data.email);
      sessionStorage.setItem("website", response.data.website);
      sessionStorage.setItem("phoneNum", response.data.phoneNum);
      sessionStorage.setItem("summary", response.data.summary);
    })
  }

  useEffect(() => getProfile(), []);

  const getEducation = async () => {
    const url = "http://localhost:8080/user/Profile/education";
    const Data = {
      email: localStorage.getItem("user"),

    }
    await axios.post(url, Data).then((response) => {
      sessionStorage.setItem("college", response.data.college);
      sessionStorage.setItem("degree", response.data.degree);
      sessionStorage.setItem("grade", response.data.grade);
      sessionStorage.setItem("startDate", response.data.startDate);
      sessionStorage.setItem("endDate", response.data.endDate);
      sessionStorage.setItem("currentEducation", response.data.currentEducation);
    })
  }

  useEffect(() => getEducation(), []);


  const getExperience = async () => {
    const url = "http://localhost:8080/user/experience";
    const Data = {
      email: localStorage.getItem("user"),

    }
    await axios.post(url, Data).then((response) => {
      sessionStorage.setItem("company", response.data.company);
      sessionStorage.setItem("designation", response.data.designation);
      sessionStorage.setItem("description", response.data.description);
      sessionStorage.setItem("startDate", response.data.startDate);
      sessionStorage.setItem("endDate", response.data.endDate);

    })
  }


  useEffect(() => getExperience(), []);




  return (
    <>
      <Navbar />
      <div className="row" style={{ backgroundColor: "#d3c6db", marginTop: "0" }}>
        {/* style={{ backgroundColor: "#d3c6db"}} */}
        <div className="">
          <h1 className="mt-3 mb-5">Your Resume <button className="btn btn-success w-10 mr-5" style={{ justifyContent: "right" }}>Download</button> <Link to="./userprofile"><button className="btn btn-info w-10 ">Edit</button></Link></h1> <div></div>
        </div>
        {/* <div className="card col-lg-11 ml-5" > */}
        <div className="col-lg-11 col-xl-8 card flex-col mx-auto px-0 mb-5">
          {/* <h1> </h1> */}
          {/* <br/> */}
          <div className=" bg-secondary">
            <div className="row m-2">
              <div className="col-4 ">
                {sessionStorage.getItem("firstName")} {sessionStorage.getItem("lastName")}
              </div>

              <div className="col-4">
                <h2></h2>
                <p>Job profile</p>
                <div></div>
                <div></div>
                <br />
                <h6>{sessionStorage.getItem("firstName")}</h6>
                <h6>{sessionStorage.getItem("phoneNum")}</h6>
              </div>
              <div className="col-3">
                <h6>{sessionStorage.getItem("website")}</h6>
                <h6>{sessionStorage.getItem("email")}</h6>
              </div>

            </div>

          </div>
          <div className="card-body">

            <h5>CAREER SUMMARY</h5>
            {sessionStorage.getItem("summary")}
            {/* <hr /> */}

            {/* <div>
              About
            </div> */}

          </div>

          <div className="card-footer">
            <div className="row">
              <div className="col-7">
                <h6>EDUCATION</h6>
                {/* <hr /> */}
                <p>{sessionStorage.getItem("degree")}  Grade : {sessionStorage.getItem("grade")}</p>
                <p>{sessionStorage.getItem("college")}</p>
                <p>Start Date:{sessionStorage.getItem("startDate")}  </p>
                <p>End Date : {sessionStorage.getItem("endDate")}</p>
                <hr />
                <h5>WORK  EXPERIENCE</h5>

                {/* <hr /> */}

                <p>Company: {sessionStorage.getItem("company")}  </p>
                <p>Designation:{sessionStorage.getItem("designation")}</p>
                <p>Description : {sessionStorage.getItem("description")}</p>
                <p>Start Date: {sessionStorage.getItem("startDate")} </p>
                <p>End Date: {sessionStorage.getItem("endDate")}</p>


                {/* <p>About Job Role Insofrmation</p> */}

                <br />

                {/* <h6>Achievements</h6>
                <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                <li>At vero eos et accusamus et iusto odio dignissimos</li> */}

                <br />
                {/* <h6>Senior Software Developer</h6> */}
                {/* <h6>2016-2020</h6> */}

                {/* <p>About Job Role Insofrmation</p> */}

                <br />

                <h6>Achievements</h6>
                <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                <li>At vero eos et accusamus et iusto odio dignissimos</li>
              </div>

              <div className="col-3">
                <h5>SKILLS</h5>
                <hr />
                <br />
                <h6>Frontend</h6>
                <li>Html</li>
                <li>Css</li>
                <li>Js</li>
                <li>React</li>
              </div>

            </div>


          </div>



        </div>
      </div>


      {/* <p>{sessionStorage.getItem("firstName")}</p>
              // <p>{sessionStorage.getItem("lastName")}</p>
              // <p>{sessionStorage.getItem("jobTitle")}</p>
              // <p>{sessionStorage.getItem("email")}</p>
              // <p>{sessionStorage.getItem("website")}</p>
              // <p>{sessionStorage.getItem("phoneNum")}</p>
              // <p>{sessionStorage.getItem("summary")}</p>
              // <p>{sessionStorage.getItem("college")}</p>
              // <p>{sessionStorage.getItem("degree")}</p>
              // <p>{sessionStorage.getItem("grade")}</p>
              // <p>{sessionStorage.getItem("startDate")}</p>
              // <p>{sessionStorage.getItem("endDate")}</p>
              // <p>{sessionStorage.getItem("currentEducation")}</p>
              // <p>{sessionStorage.getItem("company")}</p>
              // <p>{sessionStorage.getItem("designation")}</p>
              // <p>{sessionStorage.getItem("description")}</p>
              // <p>{sessionStorage.getItem("startDate")}</p>
              // <p>{sessionStorage.getItem("endDate")}</p>
              // <p>{sessionStorage.getItem("currentJob")}</p> */}




    </>
  )
};
export default Resume;