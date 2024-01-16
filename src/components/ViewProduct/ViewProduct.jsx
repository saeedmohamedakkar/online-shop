import React, { useState, useEffect } from "react";


import { useParams } from "react-router-dom";

import axios from "axios";





export default function ViewProduct() {
    let [items, setItems] = useState({})

    let { id } = useParams()


    console.log(items);

    async function myProduct() {

        let { data } = await axios.get(` http://localhost:5000/products/${id}`)
        setItems(data)
    }
   

    useEffect(() => {
        myProduct()
    }, [])


    return (<>


        <div className="container text-center">


            {Object.keys(items).length > 0 ? <div className="my-5">
                <img className="w-25 my-5" src={items.image} alt="img" />
                <h2>{items.title}</h2>
                <p className="my-2">{items.description}</p>
                <p className="text-warning">Rate {items.rating.rate}</p>
                <p className="text-success">{items.price}$</p>
            </div>
                : "loading..."}



        </div>

    </>
    );
}