import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { AiOutlineStar } from "react-icons/ai";

const Products = ({ products,addCart }) => {

    let [show, setShow] = useState(false)

    function showDescription() {
        if (show) { setShow(false) }
        else { setShow(true) }



    }


    return <>

        {products.length === 0 ? <div className='my-5 d-flex justify-content-center align-content-center'><h2 className='text-center my-5 '>loading....</h2></div> : <div className='container justify-content-evenly '>

            <div className="row">

                {products.map((product) => <div key={product.id} className="col-lg-3 col-md-4 my-5 col-sm-6">


                    <Link to={`/dashboard/viewProduct/${product.id}`}>
                        <img className='imges w-50 d-block ' src={product.image} alt="product" loading='lazy' />
                    </Link>

                    <p className='my-1'>{product.title}</p>
                    <p className='my-1'>Rate: {product.rating.rate} <AiOutlineStar className='text-warning ' /> </p>
                    <p className='price text-success'>{product.price} $</p>


                    <button onClick={(() => addCart(product))} className='btn btn-info '>Add to cart</button>



                </div>)}

            </div>

        </div>}






    </>
}

export default Products