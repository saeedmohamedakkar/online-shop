import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";


const Swal = require('sweetalert2')


export default function Addproduct () {
  
    const [productName,setProductName] = useState("")

    const [productPrice,setProductPrice] = useState(0)

    const [productRating,setProductRating] = useState(0)
   
    const [productDescription,setProductDescription]=useState("")

    const [producImage,setProductImage] = useState("")
    
    const navigate = useNavigate()

   async function add(e) {

   e.preventDefault()

   let newProduct ={title:productName,price:productPrice,image:producImage,rating:{rate:productRating},description:productDescription}
/////////////////////////////////////

if(productName===""){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product name can not be empty',
  })}

else if (productPrice===""||productPrice==0){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product price can not be empty or 0',
  })}

else if(productRating==""||productRating.length>2){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product rate must not be empty or more than 2 numbers',
  })}
else if(producImage===""){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product image must not be not empty',
  })}


  else if(productDescription===""){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product description must not be not empty',
  })}




  else{ let x =  await axios.post(`http://localhost:5000/products`,newProduct)
   
  navigate("/dashboard")

  Swal.fire({
   icon: 'success',
   title: 'Done',
   text: 'product added successfully',
   
 })



 }
}


////////////////////////////////////




  


    return ( <>  

<div className="container text-center ">
<h2 className="my-5 fs-1">Add  <i className="fa-brands fa-product-hunt text-danger"></i>roduct</h2>


<form onSubmit={(e)=>{ add(e)}}>

<input onChange={(e)=>setProductName(e.target.value)} className="form-control my-4 " type="text" placeholder="product name" />
<input onChange={(e)=>setProductPrice(e.target.value)}   className="form-control my-4"  type="number" placeholder="product price"/>
<input onChange={(e)=>setProductRating(e.target.value)} className="form-control my-4"  type="number" placeholder="product rating" />
<input onChange={(e)=>setProductImage(e.target.value)} className="form-control my-4"  type="text" placeholder="product image" />
<input onChange={(e)=>setProductDescription(e.target.value)} className="form-control my-4"  type="text" placeholder="product description" />
<button className="btn btn-info" type="submit">Add product</button>

</form>


</div>


</>
    );
    }