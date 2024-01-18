import React,{useState,useEffect} from "react";


import { useParams } from "react-router-dom";

import axios from "axios";



import { useNavigate} from "react-router-dom";



const Swal = require('sweetalert2')


export default function EditProduct () {

    let [product,setProduct] =useState({})

    const [productName,setProductName] = useState("")

    const [productPrice,setProductPrice] = useState(0)

    const [productRating,setProductRating] = useState(0)

    const[producImage,setProductImage] = useState("")

    const [productDescription,setProductDescription]=useState("")
 
    const navigate = useNavigate()

    let {id} = useParams()
    
async function editProdact() {
 let {data}= await  axios.get(`http://localhost:7000/products/${id}`)

 setProduct(data)
 setProductName(data.title)
 setProductPrice(data.price)
 setProductRating(data.rating.rate)
 setProductImage(data.image)
 setProductDescription(data.description)
}

useEffect(()=>{editProdact()},[])



async function ubdateProduct(e) {
    e.preventDefault()

if(productName=="") {Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product name can not be empty',
  })}

else if (productPrice===""||productPrice==0){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product price can not be empty or 0',
  })}


else if(productRating==""||productRating.length > 2 ){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product rate must not be empty or more than 2 numbers',
  })}


  else if (producImage==""){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product image must not be not empty',
  })}

  else if (productDescription==""){Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'product description must not be not empty',
  })}







else {const updatedProducts = {title:productName,price:productPrice,rating:{rate:productRating},image:producImage, description:productDescription }

await  axios.put(`http://localhost:7000/products/${id}`,updatedProducts )

navigate("/dashboard")


Swal.fire({
    icon: 'success',
    title: 'Done',
    text: 'product edited successfully',
    
  })
}






}

    return ( <>  

         <div className="container text-center">

        {Object.keys(product).length>0? <div>

           <form onSubmit={(e)=>{ubdateProduct(e)}}>
          
<input className="form-control my-5" type="text" placeholder="product name" value={productName}onChange={(e)=>setProductName(e.target.value)}/>
<input className="form-control my-5" type="number" placeholder="product price" value={productPrice}onChange={(e)=>setProductPrice(e.target.value)} />       
<input className="form-control my-5" type="number" placeholder="product rate" value={productRating}onChange={(e)=>setProductRating(e.target.value)}/>
<input className="form-control my-5" type="text" placeholder="product image" value={producImage}onChange={(e)=>setProductImage(e.target.value)}/>
<input className="form-control my-5" type="text" placeholder="product description" value={productDescription}onChange={(e)=>setProductDescription(e.target.value)}/>
<button type="submit" className="btn btn-info">edit product</button>
           </form>


            
        </div>:""}


         </div>



</>
    );
}