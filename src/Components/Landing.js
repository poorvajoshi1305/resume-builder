import React from "react";
import { useEffect, useState } from "react";
import './Landing.css';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";



function Landing() {

    useEffect(() => {
        document.title = "index";
        if (sessionStorage.getItem("userSession") == null) {
            window.location = "/login"
        } else if (localStorage.getItem("user") == null) {
            window.location = "./login"
        }

    })
    useEffect(() => {
        document.title = "landing";
        if (sessionStorage.getItem("userSession") == null) {
            window.location = "/login"
        } else if (localStorage.getItem("user") == null) {
            window.location = "./login"
        }

    })


    return (
        <>
            <Navbar />
            <div style={{backgroundColor:"#fcbf49"}}>

            <header className="masthead d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-center">
                    <h1 className="mb-1">Welcome</h1>
                    <h1 className="mb-5"><em>{sessionStorage.getItem("userSession")}</em></h1>
                    <Link className="btn btn-primary btn-xl" to="/userprofile">Create Resume</Link>
                </div>
            </header>

            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-mailchimp" /> </div>
                                    <div className="ms-2 c-details">
                                        {/* <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span> */}
                                    </div>
                                </div>
                                <img src="https://www.pngkey.com/png/detail/0-5198_edit-pencil-png-pencil-edit-logo.png" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                {/* <div className="badge"> <span>Design</span> </div> */}
                                {/* Create Resume */}
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Want to create resume<br /></h3>
                                <Link to="./userprofile"><button className="btn btn-info">Create</button></Link>
                                <div className="mt-5">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-dribbble" /> </div>
                                    <div className="ms-2 c-details">
                                        {/* <h6 className="mb-0">Dribbble</h6> <span>4 days ago</span> */}
                                    </div>
                                </div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtm86pFnsVn2LjDVCGXRPZkhdgr7sR61nlEZwVZ6dHno6MImFBEAPWpzaI4OSQ-AQmJI&usqp=CAU" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                {/* <div className="badge"> <span>Product</span> </div> */}
                            </div>
                            <div className="mt-5">
                            <h3 className="heading">Want to edit resume<br /></h3>
                                <Link to="./editprofile"><button className="btn btn-info">Edit</button></Link>
                                <div className="mt-5">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-reddit" /> </div>
                                    <div className="ms-2 c-details">
                                        {/* <h6 className="mb-0">Reddit</h6> <span>2 days ago</span> */}
                                    </div>
                                </div>
                                <img src="https://t3.ftcdn.net/jpg/03/77/85/04/360_F_377850455_Gk0rRBzegH6YX9SZK9YbgyYyLwrVb9zi.jpg" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height:"50px" }} />

                                {/* <div className="badge"> <span>Design</span> </div> */}
                            </div>
                            <div className="mt-5">
                            <h3 className="heading">Want to view resume<br /></h3>
                                <Link to="./resume"><button className="btn btn-info">View</button></Link>
                                <div className="mt-5">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};
export default Landing;