import React from "react";
import axios from "axios";
//import sweetalert from "sweetalert";
import swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';

function EditProfile () {
    const [list, setList] = useState([]);

    const getUsers = async () => {
      const url = "http://localhost:8080/user/profile/getProfile";
      const result = await axios.get(url);
  
      const list = result.data;
      const newList = [...list];
      setList(newList);
    };
    useEffect(() => getUsers(), []);
  return (
    <>
    <Navbar />
    <div className="App">
      <div className="container py-10">
        <div className="card border-1 shadow w-150 p-5 mx-auto">
        <h1>Edit Profile<span className=""><button type="button" class="btn btn-info">Edit</button></span></h1>
        <ol>
        {list.map((item, index) =>(
              <li key={index}>
                  <p>Name : {item.firstName}</p>
                  <p>Name : {item.lastName}</p>
                  <p>Email : {item.email}</p>
                  <p><button type="button" class="btn btn-info">Edit</button></p>
                  
                  <hr />
                  </li>
          ))}
          </ol>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default EditProfile ;
