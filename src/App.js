import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./Admin/Admin.js";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import UserEducation from "./Pages/UserEducation";
import UserExperience from "./Pages/UserExperience";
import UserProfile from "./Pages/UserProfile.js";
import Resume from "./Pages/Resume.js";
import Register from "./Register_Login/Register.js";
import Login from "./Register_Login/Login.js";
import Landing from "./Components/Landing.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      
      <Route exact path="/admin" component={Admin} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/usereducation" component={UserEducation} />
        <Route exact path="/userexperience" component={UserExperience} />
        <Route exact path="/resume" component={Resume} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
