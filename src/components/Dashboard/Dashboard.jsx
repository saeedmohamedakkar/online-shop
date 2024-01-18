import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Swal = require('sweetalert2')

export default function Dashboard() {
  //////////////////////////////////
  let [gander, setGander] = useState("")

  let [firstName, setFirstName] = useState("")

  let [lastName, setlastName] = useState("")

  let [userName, setUserName] = useState("")

  let [email, setEmail] = useState("")

  let [password, setPassword] = useState("")

  let [city, setCity] = useState("")

  let [phoneNumber, setPhoneNumber] = useState(0)

  let [isAdmin, setIsAdmin] = useState(false)

  let [user, setUser] = useState({})



  //////////////////////////////////


  let [products, setProducts] = useState([])

  let [users, setUsers] = useState([])

  async function myProducts() {
    let { data } = await axios.get(`https://db-kco2.onrender.com/products`)

    setProducts(data)
  }
  /////////////////////////////////////////////////


  async function removeOrMakeAdmin(id) {

    let { data } = await axios.get(`https://db-kco2.onrender.com/users/${id}`)
    setUser(data)
    setFirstName(data.firstName)
    setPassword(data.password)
    setUserName(data.userName)
    setlastName(data.lastName)
    setCity(data.city)
    setEmail(data.email)
    setPhoneNumber(data.phoneNumber)
    setGander(data.gander)

    if (id === user.id && data.role === "admin") {


      let newUser = { firstName: firstName, lastName: lastName, userName: userName, email: email, password: password, city: city, phoneNumber: phoneNumber, role: "member", gander: gander }


      await axios.put(`https://db-kco2.onrender.com/users/${id}`, newUser)
      myUsers()
      setIsAdmin(true)
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    else if (id === user.id && data.role === "member") {
      let { data } = await axios.get(`https://db-kco2.onrender.com/users/${id}`)
      setUser(data)
      setFirstName(data.firstName)
      setPassword(data.password)
      setUserName(data.userName)
      setlastName(data.lastName)
      setCity(data.city)
      setEmail(data.email)
      setPhoneNumber(data.phoneNumber)
      setGander(data.gander)




      let newUser = { firstName: firstName, lastName: lastName, userName: userName, email: email, password: password, city: city, phoneNumber: phoneNumber, role: "admin", gander: gander }


      await axios.put(`https://db-kco2.onrender.com/users/${id}`, newUser)
      myUsers()
      setIsAdmin(false)
    }


  }

  ////////////////////////////////
  async function myUsers() {
    let { data } = await axios.get(`https://db-kco2.onrender.com/users`)

    setUsers(data)

  }
  /////////////////////////////////////////////////
  useEffect(() => { myProducts() }, [])

  /////////////////////////////////////////////////
  useEffect(() => { myUsers() }, [])


  async function deleteProduct(id) {
    let { data } = await axios.delete(`https://db-kco2.onrender.com/products/${id}`)
    myProducts()

    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'product deleted  successfully',

    })

  }
  ////////////////////////////////////////
  async function deleteUser(id) {

    let { data } = await axios.delete(`https://db-kco2.onrender.com/users/${id}`)
    myUsers()

    Swal.fire({
      position: 'top-start',
      icon: 'success',
      title: 'User Deleted',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ///////////////////////////////////////

  return (<>


    <div className="container my-5 ">
      <div className="text-end my-3">
        <Link to={`/dashboard/addproduct`}><button className="btn btn-dark w-25 text-info">Add product</button></Link>

      </div>
      <h2>products</h2>
      <table className="table table-info table-hover ">
        <thead>

          <tr  >

            <th>Product Name</th>
            <th>Product Price</th>
            <th >Dperations</th>
          </tr>






          {products.length > 0 ? products.map((product) => <tr key={product.id} >

            <th>{product.title}</th>
            <th>{product.price} $ </th>
            <th  >
              <Link to={`/dashboard/viewProduct/${product.id}`}><button className="btn btn-info mx-1  my-1">View</button></Link>

              <Link to={`/dashboard/editProduct/${product.id}`}><button className="btn btn-success mx-1  my-1">Edit</button></Link>
              <button onClick={() => { deleteProduct(product.id) }} className="btn btn-danger mx-1 my-1">Delete</button> </th>
          </tr>
          ) : null}



        </thead>
      </table>



    </div>
    <hr />
    <hr />
    {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

    <div className="container my-5 ">
      <div className="text-end my-3">


      </div>
      <h2>Users</h2>
      <table className="table table-info table-hover">
        <thead>

          <tr >

            <th>user Name</th>
            <th>Role</th>
            <th >Dperations</th>
          </tr>






          {users.length > 0 ? users.map((user) => <tr key={user.id} >

            <th>{user.firstName}</th>
            <th>{user.role}  </th>
            <th  >
              <Link to={`/dashboard/viewUser/${user.id}`}><button className="btn btn-info mx-1  my-1">View</button></Link>


              <button onClick={() => removeOrMakeAdmin(user.id)} className={user.role === "admin" ? "btn btn-dark mx-1 my-1" : "btn btn-warning mx-1 my-1"}>{user.role === "admin" ? "Remove" : "Make"} admin</button>
              <button onClick={() => { deleteUser(user.id) }} className="btn btn-danger mx-1 my-1">Delete</button> </th>
          </tr>
          ) : null}


        </thead>
      </table>



    </div>




  </>
  )
}