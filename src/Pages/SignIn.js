import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import se from "./se.js";
// import img from "D:/spring_workplace/MainProject3/src/main/resources/static/images/forgotpassword.png";

function SignIn() {
  useEffect(() => {
  //   se();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [validationError, setValidationError] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const [userList, setUserList] = useState([]);


  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //console.log(errors);
  const loginUser = () => {

    if (password === "" || email === "") {
      setValidationError(true);
      return;
    }

    const url = "http://localhost:8080/user/login";
    const data = {

      email: email,
      password: password,
    };

    axios.post(url, data)
      .then((response) => {
        if (response.data.role === "USER") {
          sessionStorage.setItem("username", response.data.firstName)
          const userdata = {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email
          };
          sessionStorage.setItem("userdata", JSON.stringify(userdata));
          sessionStorage.setItem("userSession", response.data.email);
          localStorage.setItem("user_id", response.data.id);
          localStorage.setItem("user", response.data.email);
          // console.log(JSON.parse(sessionStorage.user).id);
          window.location = "/user";
        }
        if (response.data.role === "admin") {
          window.location = "/admin/viewcomplaints"
        }
      }).catch((error) => {
        swal("Bad credentials");
      });




    setValidationError(false);
  };

  return (
    <div className="App">
      {/* <img src={img} alt="img1" /> */}
      <div className="container py-3">
        <h1>Login</h1>
        <div className="card border-0 shadow w-50 p-5 mx-auto">
          <div>
            <form loginUser={handleSubmit(loginUser)}>
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
                    *Must Contain 8 Characters, One Uppercase, One Lowercase,
                    One Number and one special case Character
                  </span>
                )}
              </div>

              <button className="btn btn-primary">Login</button>
              <br />
              <p className="forgot-password " color="red">
                <Link to={"/forgot"}>Forgot Password?</Link>
              </p>

              <p className=" Register " color="red">
                <Link to={"/signup"}>New User?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
