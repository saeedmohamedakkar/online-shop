import  React,{useState ,useEffect}  from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

const EditeUser = ({users}) => {

const Swal = require('sweetalert2')

const {userId}= useParams()

let navigate = useNavigate()

let [show,setShow] = useState(true)

let [gander,setGander] = useState("")

let [firstName,setFirstName]=useState("")

let [lastName,setlastName]=useState("")

let [userName,setUserName]=useState("")

let [email,setEmail]=useState("")

let [password,setPassword]=useState("")

let [city,setCity]=useState("")

let [phoneNumber,setPhoneNumber]=useState(0)

let [user , setUser] = useState({})

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


////////////////////////////////////////////////
    function showPassord() {
        if (show=== true){setShow(false)}
        else{setShow(true)}
    }
///////////////////////////////////////////////

async function getUser() {
    
let {data}= await axios.get(`https://db-kco2.onrender.com/users/${userId}`)

setUser(data)

setFirstName(data.firstName)
setPassword(data.password)
setUserName(data.lastName)
setlastName(data.lastName)
setCity(data.city)
setEmail(data.email)
setPhoneNumber(data.phoneNumber)
setGander(data.gander)
}
//////////////////////////////////////////////

useEffect(()=>{getUser()},[])



//////////////////////////////////////////////
async function submitData(e) {
    e.preventDefault()
   
    if (firstName.length<3){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'First name must be more than 3 char'})}
    
    else if (lastName.length<3){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Last name must be more than 3 char',
        
      })
      }
    
      else if (userName.length<3){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User name must be more than 3 char',
        
      })
      }

      else if (gander===""){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you must choose your gender',
        
      })
      }
    
      else if (regexEmail.test(email)===false){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Email',
        
      })
      }
    
      else if (password.length<7){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be more than 7 char or number',
        
      })
      }
    
      else if (city.length<3){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'City must be more than 3 char',
        
      })
      }
    
    
      else if (phoneNumber.length!==11){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'phone number must be 11 numberes',
        
      })
      }
    
else{let userData = {id:userId,firstName:firstName,lastName:lastName,userName:userName,email:email,password:password,city:city,phoneNumber:phoneNumber,role:"member",gander:gander}

localStorage.setItem("user data",JSON.stringify(userData))

await axios.put(`https://db-kco2.onrender.com/users/${userId}`,userData)

navigate("/profile")

Swal.fire({
    icon: 'success',
    title: `Information updated successfully`
  })

}
}
///////////////////////////////////////////
    return ( <>

{Object.keys(user).length>0? <div className='container  my-5 d-flex  justify-content-center bg-body-secondary rounded-5'>

<form onSubmit={(e)=>submitData(e)} className='my-5' >

<div className="row">

<div className="col-lg-6">

    <label className='my-2 d-block  ' htmlFor="first name">First Name</label>

    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}   className="form-control" id='first name' type="text" placeholder ="First Name"  />

   
</div>

<div className="col-lg-6">

    <label className='my-2' htmlFor="last name" >Last Name</label>

    <input value={lastName} onChange={(e)=>setlastName(e.target.value)} className="form-control" id='last name' type="text" placeholder='Last Name'/>

   
</div>

<div className="col-lg-12">

    <label className='my-2  ' htmlFor="user name">User Name</label>

    <input value={userName} onChange={(e)=>setUserName(e.target.value)}  className="form-control" id='user name' type="text" placeholder="User Name" />

    
    <label className='my-2  ' htmlFor="email">Email</label>

    <input value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id='email' type="text" placeholder ="Email"/>

    <label className='my-2  ' htmlFor="password">Password</label>

    <input value={password} onChange={(e)=>setPassword(e.target.value)} type={show ? "password" : "text"}  className="form-control" id='password'   placeholder ="Password"/>
    
    <div className='my-2'>
    <input onClick={()=>showPassord()}   type="checkbox" className="form-check-input mx-1 " id="show" />
    
    <label className="form-check-label" htmlFor="show">Show password</label>
    </div>

   



   
</div>


</div>

<div className="row">

    <div className="col-lg-4">
    <label  className='my-2 d-block' htmlFor="city">City</label>

    <input value={city} onChange={(e)=>setCity(e.target.value)} className="form-control" id='city' type="text"placeholder='City' />
    </div>

    
    <div className="col-lg-4">
    <label className='my-2 d-block' htmlFor="number">Phone Number</label>

    <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className="form-control" id='number' type="number" placeholder ="Phone Number" />
    </div>
    <label className="my-2  fs-5 d-block">Gander</label>

<div>
<input onChange={(e)=>setGander(e.target.value)} className="mx-2" name="gander" id="male" defaultValue="male" type="radio" />
<label className="radio" htmlFor="male">Male</label>

<input onChange={(e)=>setGander(e.target.value)} className="mx-2" name="gander" id="famale" defaultValue="famale" type="radio"  />
<label className="radio" htmlFor="famale" >Famale</label>
</div>
    
 
</div>





<button type="submit" className="btn btn-primary my-3">Edite</button>
<button type='reset' className="btn btn-primary mx-2">Reset</button>

 
</form>



  
</div>:"no data"}















    

    </> );
}
 
export default EditeUser