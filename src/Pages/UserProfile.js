import React from "react";
import "./css/Details.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

function UserProfile() {
  useEffect(() => {
    //   se();
  }, []);

  useEffect(() => {
    document.title = "index";
    if (sessionStorage.getItem("userSession") == null) {
        window.location = "/login"
    } else if (localStorage.getItem("user") == null) {
        window.location = "./login"
    }

})
  const {
    userprofile,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  const [validationError, setValidationError] = useState(false);
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNum, setMobile] = useState("");
  const [summary, setSummery] = useState("");

  const [userProfileList, setuserProfileList] = useState([]);

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleSummery = (e) => {
    setSummery(e.target.value);
  };

  const updateUserProfile = async () => {
    if (firstName == "" || lastName == "" || email == "") {
      setValidationError(true);
      return;
    }

    const url = "http://localhost:8080/user/Profile/edit-profile";
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      website: website,
      phoneNum: phoneNum,
      summary: summary,
      emails: localStorage.getItem("user"),
    };
    await axios.post(url, data);

    const newList = [userProfile, ...userProfileList];
    setuserProfileList(newList);

    // Clear in the End
    setFname("");
    setLname("");
    setEmail("");
    setWebsite("");
    setMobile("");
    setSummery("");

    setValidationError(false);
  };
  const userProfile = async () => {
    if ((firstName == "" || lastName == "" || email == "")||(phoneNum.length < 10)) {
      setValidationError(true);
      return;
    }

    const url = "http://localhost:8080/user/Profile/addProfile";
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      website: website,
      phoneNum: phoneNum,
      summary: summary,
      emails: localStorage.getItem("user"),
    };
    await axios.post(url, data);

    const newList = [userProfile, ...userProfileList];
    setuserProfileList(newList);

    // Clear in the End
    setFname("");
    setLname("");
    setEmail("");
    setWebsite("");
    setMobile("");
    setSummery("");

    setValidationError(false);
  };
  return (
    <>
      <Navbar />
      <div className="container mt-3" style={{ backgroundColor: "#d3c6db"}}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <form id="regForm">
            <h1 id="register">Enter Your Details To Your Profile</h1>
              <div className="all-steps" id="all-steps">
                {" "}
                <span className="step">
                  <i className="fa fa-userProfile"></i>
                </span>{" "}
                <span className="step">
                  <i className="fa fa-map-marker"></i>
                </span>{" "}
                <span className="step">
                  <i className="fa fa-shopping-bag"></i>
                </span>{" "}
                <span className="step">
                  <i className="fa fa-car"></i>
                </span>{" "}
                <span className="step">
                  <i className="fa fa-spotify"></i>
                </span>{" "}
                <span className="step">
                  <i className="fa fa-mobile-phone"></i>
                </span>{" "}
              </div>
              <div className="">
                <h6>Enter your First Name</h6>
                <p>
                  {" "}
                  <input
                    placeholder="First Name"
                    name="fname"
                    tabindex="10"
                    value={firstName}
                    onChange={handleFname}
                    className={
                      firstName == "" && validationError
                        ? "border border-danger"
                        : ""
                    }
                  // {...userprofile("firstName", {
                  //   required: true,
                  //   pattern: /[A-Za-z]{3}/,
                  //   min: 4,
                  //   max: 10,
                  // })}
                  />
                  {errors.lastName && errors.lastName.type === "required" && (
                    <span role="alert" class="imp">
                      *This field is required
                    </span>
                  )}
                  {errors.lastName && errors.lastName.type === "pattern" && (
                    <span role="alert" class="imp">
                      *Invalid Last Name
                    </span>
                  )}
                </p>
              </div>
              <div className="">
                <h6>Enter your Last Name</h6>
                <p>
                  <input
                    placeholder="Last Name"
                    name="dd"
                    tabindex="10"
                    value={lastName}
                    onChange={handleLname}
                    className={
                      lastName == "" && validationError
                        ? "border border-danger"
                        : ""
                    }
                  />
                </p>
              </div>
              <div className="">
                <h6>Enter your Email</h6>
                <p>
                  <input
                    placeholder="Enter Email-Id"
                    name="dd"
                    tabindex="10"
                    value={email}
                    onChange={handleEmail}
                    className={
                      email == "" && validationError
                        ? "border border-danger"
                        : ""
                    }
                  />
                </p>
              </div>
              <div className="">
                <h6>Enter your Website</h6>
                <p>
                  <input
                    placeholder="Last Name"
                    name="dd"

                    tabindex="10"
                    value={website}
                    onChange={handleWebsite}
                    className={
                      website == "" && validationError
                        ? "border border-danger"
                        : ""
                    }
                  />
                </p>
              </div>
              <div className="">
                <h6>Enter your Contact</h6>
                <p>
                  <input
                    placeholder="Last Name"
                    name="dd"
                    placeholder ="+91"
                    type="number"
                    tabindex="10"
                    value={phoneNum}
                    onChange={handleMobile}
                    className={
                      phoneNum == "" && validationError
                        ? "border border-danger"
                        : ""
                    }
                  />
                </p>
              </div>
              <div className="">
                <h6>Enter your Summery</h6>
                <p>
                  <textarea
                    className="form-control rounded "
                    style={{ width: "200px" }}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    tabindex="10"
                    value={summary}
                    onChange={handleSummery}
                    className={
                      summary == "" && validationError
                        ? "border border-danger"
                        : ""
                    }
                  ></textarea>
                </p>
              </div>
              {/* <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                        <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                    </div> */}
              <div className="d-flex mt-5">
                <button
                  type="submit"
                  className="btn btn-block text-uppercase ml-5"
                  onClick={userProfile}
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-block text-uppercase mr-5"
                  onClick={updateUserProfile}
                >
                  Update
                </button>
              </div>
              <div style={{ overflow: "auto" }} id="nextprevious">
              <div style={{overflow:"auto"}} id="nextprevious">
                        <div style={{float:"right"}}> 
                        <Link to="./landing">
                        <button type="button" id="prevBtn" onclick="nextPrev(-1)">
                            <i className="fa fa-angle-double-left"></i>
                        </button> 
                        </Link>
                        <Link to="./usereducation">
                            <button type="button" id="nextBtn" onclick="nextPrev(1)">
                                <i className="fa fa-angle-double-right"></i></button> 
                        </Link>
                        </div>
                    </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
