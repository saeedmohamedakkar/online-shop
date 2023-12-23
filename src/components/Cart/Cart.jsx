import  React   from 'react';

import { TbMoodSad } from "react-icons/tb";

import { BsTrash3 } from "react-icons/bs";



const Cart = ({cartItem,deletItems,increase,minus,removeItem }) => {


    return ( <>
    
    
    <div className='container text-center '>


    <h1 className='my-5 fst-italic'>Cart </h1>
 <h2 className={cartItem.length ===0? "d-block" :"d-none"}>Empty <TbMoodSad/></h2>

 <button onClick={(()=>deletItems())} className={cartItem.length ===0? "d-none" :"d-block btn btn-danger my-5 "}>delete all</button>
    <div className="row">
    
        {cartItem.map((item)=><div key={item.id} className='col-lg-3 '>
         
         <img className='w-50' src={item.image} alt="item"/>
         <p>{item.title}</p>
           <div>
            <button className='btn btn-danger' onClick={(()=>minus(item))}>-</button>
            <p className='d-inline mx-2 '>Item {item.number}</p> 
            <button className='btn btn-info mx-2 ' onClick={(()=>increase(item))}>+</button>
           </div>
         <p  className='price text-success'> {item.price } $</p>
         <p className='text-secondary'>Total amount : {item.number * item.price }$</p>
        <button onClick={()=>removeItem(item.id)} className='btn btn-danger '>  <BsTrash3/>    </button>
       
             </div>)}</div></div>
<h2 className={cartItem.length===0?"d-none":"d-block my-5 text-center"}>Total Amount : {cartItem.reduce((x,y)=>{return Math.round(x+=y.price*y.number)},0)}$</h2>
    
    
    
    
    </> )
}
export default Cart
