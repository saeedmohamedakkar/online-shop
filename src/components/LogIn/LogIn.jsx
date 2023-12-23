import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


const LogIn = ({ users }) => {

  const Swal = require('sweetalert2')

  let navigate = useNavigate()

  let [show, setShow] = useState(true)

  let [email, setEmail] = useState("")

  let [pass, setPass] = useState("")
  /////////////////////////////////////////////
  function showPassord() {
    if (show === true) { setShow(false) }
    else { setShow(true) }
  }
  //////////////////////////////////////////

  function logIn(e) {




    e.preventDefault()

    if (users.some((user) => user.email === email && user.password === pass && user.role === "admin")) {
      let userData = users.filter((user) => { return user.email === email })
      localStorage.setItem("user data", JSON.stringify(...userData))
      navigate("/products")

      localStorage.setItem('isAdmin',"true");

    }




    else if (users.some((user) => user.email === email && user.password === pass)) {
      let userData = users.filter((user) => { return user.email === email })
      localStorage.setItem("user data", JSON.stringify(...userData))
      navigate("/products")

    }









    else {
      Swal.fire({
        icon: 'error',
        title: 'Invaled Email or Password'
      })
    }

  }

  //////////////////////////////////////////
  return (<>

    <div className='container  my-5 d-flex  justify-content-center bg-body-secondary rounded-5'>

      <form onSubmit={(e) => logIn(e)} className='my-5'>
        <div className="mb-2  ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input placeholder='Email ' onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={(e) => setPass(e.target.value)} type={show ? "password" : "text"} className="form-control" id="exampleInputPassword1" placeholder='Password' />
        </div>
        <div className="mb-3 form-check">
          <input onClick={() => showPassord()} type="checkbox" className="form-check-input" id="show" />

          <label className="form-check-label" htmlFor="show">Show password</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />

          <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
        <button type='reset' className="btn btn-primary mx-2">Reset</button>
        <p className='mt-3'>Don't have an account?</p>
        <Link to="/logIn/creatrAccount">  <button className='btn btn-primary d-block my-3 '>Create Account</button></Link>

      </form>




    </div>







  </>);
}

export default LogIn;