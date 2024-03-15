import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { FcShop } from "react-icons/fc";





const NavBar = ({ cartItem, isAdmin }) => {


  let navigate = useNavigate()


  function logOut() {


    localStorage.clear()
    navigate("/")
    window.location.reload(false)
  }


  return (<>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h3 className="navbar-brand">Shop.com <FcShop className='fs-2 mx-2 mb-1' /></h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse n  navbar-collapse  justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>

            </li>
            <li className="nav-item">
              < Link className="nav-link active" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              < Link className={localStorage.length === 0 ? "nav-link active" : "d-none "} to="/login">Log in</Link>
            </li>
              

            <li className="nav-item">
              < Link className={localStorage.getItem('isAdmin') == 'true' ? "nav-link active d-block" : "d-none"} to="/dashboard">Dashboard</Link>
            </li>
            
            

            <li className="nav-item">
              < Link className={localStorage.length > 0 ? "nav-link active d-block" : "d-none "} to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-warning " to="/cart">    < BsCart2 className='fs-5 text-warning  mb-1' />{cartItem.length} </Link>
            </li>

            <li className={localStorage.length > 0 ? "nav-item my-1 mx-5" : "d-none"}>
              <button onClick={() => logOut()} className='btn btn-danger  '>log out</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    {/* //////////////////////////////////////// */}


  





  </>);
}

export default NavBar;