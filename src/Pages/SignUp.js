import React from "react";
import axios from "axios";
//import sweetalert from "sweetalert";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import "../Register_Login/Login.css";

function SignUp() {
  useEffect(() => {
  //   se();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:8080/user/register", data)
      .then((response) => {
        swal("Registered Successfully!!");
        window.location.href = "/login";
      })
      .catch((error) => {
        swal("User alreay exist");
      });
  };

  // const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // const emailIsUnique = async (email) => {
  //   await wait(1000);
  //   return email !== "someone@somewhere.com";
  // };

  return (
    <>
    {/* <Navbar /> */}
    <div className="" style={{backgroundColor:"#070C10"}}>
    {/* heigth:"700vh" */}
    <h1 className="h-5 mb-5" style={{backgroundColor:"#070C10"}}>.</h1>
    <div className="divform  mb-5">
  <div className="container">
    <div className="row px-3">
      <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
        <div className="img-left d-none d-md-flex"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} /></div>

        <div className="card-body">
          <h4 className="title text-center mt-4">
             Register account
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control "
                id="firstName"
                name="firstName"
                placeholder="Enter Your First Name"
                {...register("firstName", {
                  required: true,
                  pattern: /[A-Za-z]{3}/,
                  min: 4,
                  max: 10,
                })}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.firstName && errors.firstName.type === "pattern" && (
                <span role="alert" class="imp">
                  *Invalid First Name
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter Your Last Name"
                {...register("lastName", {
                  required: true,
                  pattern: /[A-Za-z]{3}/,
                  min: 4,
                  max: 10,
                })}
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
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Your E-mail Address"
                {...register("email", {
                  required: true,
                  //validate: emailIsUnique,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.email && errors.email.type === "validate" && (
                <div className="error" class="imp">
                  This email address already exists
                </div>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <div className="error" class="imp">
                  *Invalid email address
                </div>
              )}
            </div>

            {/* <div className="form-group">
              <label htmlFor="mobileNo">mobileNo Number</label>
              <input
                type="text"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                placeholder="Enter Your mobileNo Number"
                {...register("mobileNo", {
                  required: true,
                  minLength: 8,
                  maxLength: 12,
                })}
              />
              {errors.mobileNo && errors.mobileNo.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.mobileNo && errors.mobileNo.type === "minLength" && (
                <span role="alert" class="imp">
                  *Invalid mobileNo no minLength:10 maxLength: 12
                </span>
              )}
            </div> */}

            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Your password"
                {...register("password", {
                  required: true,
                  // validate: confirm,
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  },
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span role="alert" class="imp">
                  *Must Contain 8 Characters, One Uppercase, One Lowercase, One
                  Number and one special case Character
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmpassword">confirm password</label>
              <input
                type="text"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="confirm your password"
                {...register("confirmpassword", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  },
                })}
              />
              {errors.confirmpassword &&
                errors.confirmpassword.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )}
              {errors.confirmpassword &&
                errors.confirmpassword.type === "pattern" && (
                  <span role="alert" class="imp">
                    *Must Contain 8 Characters, One Uppercase, One Lowercase,
                    One Number and one special case Character
                  </span>
                )}
            </div>


            {/* <button className="btn btn-primary" type="submit">
              Create New Account
            </button> */}
            <div className="mb-3 ">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="cb1" name="" />
                      <label className="custom-control-label" for="cb1">Remember me</label>
                    </div>
                  </div>
            <div class="mb-3 mt-4">
                    <button type="submit" class="btn btn-block rounded-pill text-uppercase bg-black w-10" style={{color:"white"}}>
                      Register
                    </button>
                  </div>
            <br />
            <br></br>
                  <hr/>
                  <div className="text-center mb-3 ">
            
                    <Link to="./login">Existing User? Login</Link>
                  </div>
          </form>
          </div>
      </div>
    </div>
  </div>
</div>
    // </div>
    </>
  );
}

export default SignUp;
