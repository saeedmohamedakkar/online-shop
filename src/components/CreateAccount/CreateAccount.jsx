import  React , {useState }  from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const CreateAccount = ({users}) => {
    const Swal = require('sweetalert2')


    let [show,setShow] = useState(true)



    function showPassord() {
        if (show=== true){setShow(false)}
        else{setShow(true)}
    }

let navigate = useNavigate()
                      
let [id,setId]=useState(users[users.length - 1].id);



let [firstName,setFirstName]=useState("")

let [lastName,setlastName]=useState("")

let [userName,setUserName]=useState("")

let [email,setEmail]=useState("")

let [password,setPassword]=useState("")

let [city,setCity]=useState("")

let [phoneNumber,setPhoneNumber]=useState(0)

let [gander,setGander]=useState("")

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//////////////////////////////////////////////////////////////////////
async function userInfo(e) {

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

  else if (gander===""){Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'you must choose your gender',
    
  })
  }

  else if (users.some((user)=>user.email===email)){Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'This Email Already used',
    
  })}

else{setId(id+=1)
  let userData = {id:id,firstName:firstName,lastName:lastName,userName:userName,email:email,password:password,city:city,phoneNumber:phoneNumber,gander:gander,role:"member"}



let x = await axios.post(`https://db-kco2.onrender.com/users`,userData)





localStorage.setItem("user data",JSON.stringify(userData))

navigate("/products")
}


}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
return ( <>

<div className='container  my-5 d-flex  justify-content-center bg-body-secondary rounded-5'>

<form className='my-5'onSubmit={(e)=>userInfo(e)} >

<div className="row">

<div className="col-lg-6">

    <label className='my-2 d-block  ' htmlFor="first name">First Name</label>

    <input onChange={(e)=>setFirstName(e.target.value)}  className="form-control" id='first name' type="text" placeholder ="First Name"  />

   
</div>

<div className="col-lg-6">

    <label className='my-2' htmlFor="last name" >Last Name</label>

    <input onChange={(e)=>setlastName(e.target.value)} className="form-control" id='last name' type="text" placeholder='Last Name'/>

   
</div>

<div className="col-lg-12">

    <label className='my-2  ' htmlFor="user name">User Name</label>

    <input onChange={(e)=>setUserName(e.target.value)}  className="form-control" id='user name' type="text" placeholder="User Name" />

    
    <label className='my-2  ' htmlFor="email">Email</label>

    <input onChange={(e)=>setEmail(e.target.value)} className="form-control" id='email' type="text" placeholder ="Email"/>

    <label className='my-2  ' htmlFor="password">Password</label>

    <input onChange={(e)=>setPassword(e.target.value)} className="form-control" id='password' type={show ? "password" : "text"}  placeholder ="Password"/>
    
    <div className='my-2'>
    <input onClick={()=>showPassord()}  type="checkbox" className="form-check-input mx-1 " id="show" />
    
    <label className="form-check-label  " htmlFor="show">Show password</label>
    </div>

   



   
</div>


</div>

<div className="row">

    <div className="col-lg-4">
    <label  className='my-2 d-block' htmlFor="city">City</label>

    <input onChange={(e)=>setCity(e.target.value)} className="form-control" id='city' type="text"placeholder='City' />
    </div>

    
    <div className="col-lg-4">
    <label className='my-2 d-block' htmlFor="number">Phone Number</label>

    <input onChange={(e)=>setPhoneNumber(e.target.value)} className="form-control" id='number' type="number" placeholder ="Phone Number" />
    </div>
    <div className="col-lg-4">
    <label className="my-2  fs-5 d-block">Gander</label>

    <div>
  <input onChange={(e)=>setGander(e.target.value)} className="mx-2" name="gander" id="male" defaultValue="male" type="radio" />
  <label className="radio" htmlFor="male">Male</label>
  
  <input onChange={(e)=>setGander(e.target.value)} className="mx-2" name="gander" id="famale" defaultValue="famale" type="radio"  />
  <label className="radio" htmlFor="famale" >Famale</label>
</div>


    </div>
    
 
</div>

<div className='my-3'>
<input  type="checkbox" className="form-check-input" id="exampleCheck1" />
    
    <label  className="form-check-label mx-2 " htmlFor="exampleCheck1">Apply Rules And Conditions </label>
</div>



<button type="submit" className="btn btn-primary my-3">Log in</button>
<button type='reset' className="btn btn-primary mx-2">Reset</button>

 
</form>



  
</div>




    
    

    </> );
}
 
export default CreateAccount


 