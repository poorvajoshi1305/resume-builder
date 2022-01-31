import React from "react";
import axios from "axios";
//import sweetalert from "sweetalert";
import swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar";

function Admin () {
    const [list, setList] = useState([]);

    useEffect(() => {
      document.title = "index";
      if (localStorage.getItem("role") != "ADMIN") {
        window.location = "./landing"
      }
      if (sessionStorage.getItem("userSession") == null) {
          window.location = "/login"
      } else if (localStorage.getItem("user") == null) {
          window.location = "./login"
      }

  })

    const getUsers = async () => {
      const url = "http://localhost:8080/user/getAllUsers";
      const result = await axios.get(url);
  
      const list = result.data;
      const newList = [...list];
      setList(newList);
    };
    useEffect(() => getUsers(), []);
    const disable = async (email) => {
      const url = "http://localhost:8080/admin/disable";
      const data = {
          email:sessionStorage.getItem("disable")
      };
      await axios.post(url, data);


  };
  return (
    <>
    <Navbar />
    <div className="App" style={{ backgroundColor: "#d3c6db"}}>
      <div className="container">
        {/* <div className="card border-1 shadow w-250 mx-auto"> */}
        {/* <ol>
        {list.map((item, index) =>(
              <li key={index}>
                  <p>Name : {item.firstName}</p>
                  <p>Name : {item.lastName}</p>
                  <p>Email : {item.email}</p>
                  <p><button type="button" class="btn btn-danger">Danger</button></p>
                  
                  <hr />
                  </li>
          ))}
          </ol> */}
          <h1 style={{ backgroundColor: "#d3c6db"}}>.</h1>
          <h1>Admin DashBoard</h1>
          <table className="table w-100 mt-5 mb-5" style={{backgroundColor : "#6a1b9a", color:"white"}}>
          
        <thead>
        <tr className='p-2'>
            <th class="col-md-4" scope="col"><b>USER NAME</b></th>
            <th class="col-md-4" scope="col"><b>EMAIL</b></th>
            {/* <th class="col-md-2" scope="col"><b>MOBILE</b></th> */}
            {/* <th class="col-md-4" scope="col"><b></b></th> */}
            <th class="col-md-4" scope="col"><b>DISABLE USER</b></th>
        </tr>
        </thead>
        </table>
        {list.map((item, index) =>(
              <div key={index}>
                  <table className="table w-100">
                      <tbody>
                      <tr>
                      <td class="col-md-4 " scope="row">{item.firstName} {item.lastName}</td>
                      <td class="col-md-4" scope="row">{item.email}</td>
                      {sessionStorage.setItem("disable", item.data)}
                      {/* <td class="col-md-2" scope="row">{item.mobile}</td> */}
                      <td class="col-md-4" scope="row"><button type="button" class="btn btn-danger" onClick={disable}>Disable</button></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          ))}
        </div>
      </div>
    {/* </div> */}
    </>
  );
}

export default Admin ;
