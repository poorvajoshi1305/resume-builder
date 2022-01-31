import react from "react";
import { Link } from "react-router-dom";

function Navbar() {

const logout = () =>{

    sessionStorage.removeItem("userSession");
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("username");
    localStorage.removeItem("user");

}
return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="./landing">Amaze.io</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link class="nav-link active" aria-current="page" to="./landing">Home</Link></li>
                            <li className="nav-item"><Link class="nav-link" onClick={logout} to="./login">Logout</Link></li>
                            {/* <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li> */}
                            <li class="nav-item"><Link class="nav-link" to="">{sessionStorage.getItem("userSession")}</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>  
    </>
)
};
export default Navbar;