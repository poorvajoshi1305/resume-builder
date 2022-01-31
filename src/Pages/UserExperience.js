import React from "react";
import './css/Details.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
//    company
//    designation
//    description
//    startDate
//    endDate
//    currentJob
function UserExperience() {

    useEffect(() => {
        document.title = "index";
        if (sessionStorage.getItem("userSession") == null) {
            window.location = "/login"
        } else if (localStorage.getItem("user") == null) {
            window.location = "./login"
        }

    })

    const [validationError, setValidationError] = useState(false);
    const [company, setFname] = useState("");
    const [designation, setLname] = useState("");
    const [description, setEmail] = useState("");
    const [startDate, setWebsite] = useState("");
    const [endDate, setMobile] = useState("");
    // const [summary, setSummery] = useState("");

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

    const updateUserEducation = async () => {

        if (company == "" || designation == "" || description == "") {
            setValidationError(true);
            return;
        }

        const url = "http://localhost:8080/user/Profile/edit-education";
        const data = {
            company: company,
            designation: designation,
            description: description,
            startDate: startDate,
            endDate: endDate,
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
        // setSummery("");

        setValidationError(false);
    };

    const userProfile = async () => {

        if (endDate === "" || endDate === "" || endDate === "") {
            setValidationError(true);
            return;
        }

        const url = "http://localhost:8080/user/Profile/addExperience";
        const data = {
            company: company,
            designation: designation,
            description: description,
            startDate: startDate,
            endDate: endDate,
            email: localStorage.getItem("user"),
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
        // setSummery("");

        setValidationError(false);

    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8">
                        <form id="regForm">
                        <h1 id="register">Experience Details</h1>
                            <div className="all-steps" id="all-steps"> <span className="step"><i className="fa fa-user"></i></span> <span className="step"><i className="fa fa-map-marker"></i></span> <span className="step"><i className="fa fa-shopping-bag"></i></span> <span className="step"><i className="fa fa-car"></i></span> <span className="step"><i className="fa fa-spotify"></i></span> <span className="step"><i className="fa fa-mobile-phone"></i></span> </div>
                            <div className="">
                                <h6>Company Name</h6>
                                <p> <input placeholder="Enter Company Name" oninput="this.className = ''" name="fname" onChange={handleFname}
                                    className={company === "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>Designation</h6>
                                <p><input placeholder="Enter Your Designation" oninput="this.className = ''" name="dd" onChange={handleLname}
                                    className={designation === "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>Description</h6>
                                <p><input type="text" name="uname" value={description} onChange={handleEmail}
                                    className={description === "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>Start Date</h6>
                                <p><input type="date" name="startDate" value={startDate} onChange={handleWebsite}
                                    className={startDate === "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>End Date</h6>
                                <p><input type="date" name="endDate" placeholder="Current Job" value={endDate} oninput="this.className = ''" name="dd" onChange={handleMobile}
                                    className={endDate === "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            {/* <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                        <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                    </div> */}
                            <div className="d-flex mt-5">
                                <button type="submit" className="btn btn-block text-uppercase ml-5" onClick={userProfile}>
                                    Submit
                                </button>
                                <button type="submit" className="btn btn-block text-uppercase ml-5" onClick={updateUserEducation}>
                                    Update
                                </button>

                            </div>
                            <div style={{ overflow: "auto" }} id="nextprevious">
                                <div style={{ float: "right" }}>
                                    <Link to="./usereducation">
                                        <button type="button" id="prevBtn" onclick="nextPrev(-1)">
                                            <i className="fa fa-angle-double-left"></i>
                                        </button>
                                    </Link>
                                    <Link to="./resume">
                                        <button type="button" id="nextBtn" onclick="nextPrev(1)">
                                            <i className="fa fa-angle-double-right"></i></button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default UserExperience;