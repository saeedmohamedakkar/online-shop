import React,{useState,useEffect} from "react";


import { useParams } from "react-router-dom";

import axios from "axios";





export default function ViewUser () {
    let [user,setUser] = useState({})

    let {id}= useParams()
    
   
  

async function myUser() {
    
 let {data} = await axios.get(`https://db-kco2.onrender.com/users/${id}`)
 setUser(data)
}


useEffect(()=>{
    myUser()
},[])


    return ( <>  


<div className="container text-center">


{Object.keys(user).length > 0 ? <div className="my-5">
<h2 className="my-4">First Name : {user.firstName}</h2>
<h2>Last Name : {user.lastName}</h2>
<h2 className="my-4">User Name : {user.userName}</h2>
<h2 className="my-4">User Email : {user.email}</h2>
<h2>User Gander : {user.gander}</h2>
<h2 className="my-4">User City : {user.city}</h2>
<h2 className="my-4">Phone Number : {user.phoneNumber}</h2>
<h2>User Password : {user.password}</h2>
<h2 className="text-danger my-4 ">Role : {user.role}</h2>
</div>
: "loading..."}



</div>

</>
    );
}