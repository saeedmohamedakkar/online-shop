import  React  from 'react';

import header from "../../Assets/Images//1024x1024-Mens-Jackets-Racer-Tobacco-081523-1_768e793d-93df-47be-b353-c6def99affd7.webp";

import sunGlas from "../../Assets/Images/SF-are-your-sunglasses-real-or-fake-2.jpg"

import shoes from "../../Assets/Images/best-running-shoes-for-men-01-52191575003b4281ac1cf2d7b29b5362.jpg"

import last1 from "../../Assets/Images/m-st-boxhead-black-smartees-original-imagr6yyw5hnn5zg.webp"

import last2 from "../../Assets/Images/8d02834bae0322880d931fc0a4ee7374.jpg"

import last3 from "../../Assets/Images/1024x1024-Mens-Jackets-Racer-Tobacco-081523-1_768e793d-93df-47be-b353-c6def99affd7.webp"

import last4 from "../../Assets/Images/last.jpg"


import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Home = () => {

   

    let navigate = useNavigate()

    function shopNow() {
       navigate("/products")
    }
    
    return ( <>
    
<div className="container-fluid g-0 home">


<h4 className='text-danger p-5'>SUMMER COLLECTION </h4>

<h2 className='l text-light p-5 '>FALL-Winter <br />
 Collections 2023</h2>

 <h4 className='text-light p-5 fst-italic'>A specialist label creating luxury essentials.Ethically crafted with <br /> an unwavering commitmment to exceptional quality.    </h4>

 <div className='mx-5 my-5'>
    
 <button onClick={()=>shopNow()} className='btn btn-danger p-3'>Shop Now <BsArrowRightShort/></button>
 </div>
</div>


{/* //////////////////////////////////////////////////////////////////////////// */}

<div className='container'>

 <div className="row">


  <div className="col-lg-6 my-5 fst-italic">

<h2>Clothing <br /> Collections 2023</h2>

<h3 className='my-5 '>SHOP NOW</h3>
<hr />
</div>


<div className="col-lg-6">

<img className='w-100' src={header} alt="jacet" />

</div>



</div>

<div className="row">
<div className="col-lg-4">

<img className='w-100' src={sunGlas} alt="sunglas" />

    </div>
    <div className="col-lg-4 fst-italic">

<h2 className='my-5'>Shoes Spring <br />2023</h2>
<h3 className='my-5 '>SHOP NOW</h3>
<hr />
    </div>
    <div className="col-lg-4 my-5 ">

<img className='w-100' src={shoes} alt="shoes" />

    </div>

</div>
    </div>
    

    <div className='container--fluid g-0 text-center bg-dark text-light p-3  '>
<h2 >Free Shipping, 30-Day return or refund guarantee.</h2>
    </div>

    <div className="container--fluid g-0">

<div className="row g-0 ">

<div className="col-lg-3 text-center">

<img className='w-100 ' src={last1} alt="Clothing" />
<p >cool shirt</p>
<p >40 $</p>

</div>

<div className="col-lg-3 text-center">

<img className='w-100 ' src={last2} alt="Clothing" />
<p >jacet</p>
<p >69 $</p>

</div>

<div className="col-lg-3 text-center">

<img className='w-100 ' src={last3} alt="Clothing" />
<p >browen jacet</p>
<p >99 $</p>

</div>

<div className="col-lg-3 text-center">

<img className='w-100 ' src={last4} alt="Clothing" />

<p >nice shirt</p>
<p >35 $</p>
</div>



</div>



    </div>


    </> );
}
 
export default Home;