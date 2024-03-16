//import { useEffect, useState } from 'react';
import './Productbox.css'
import { Link } from "react-router-dom";
//import axios from 'axios';
//import { getsingleprod } from '../../../apis/fakestoreprodapis';

export default function Productbox({Productimg , name, price , productId}){


  
    return(
        <Link to={`/product/${productId}`}
        href="productDetails.html"  
        className="product-item text-decoration-none">
        <div className="product-img">
            <img src={Productimg} alt="" />
        </div>
        <div className="product-name text-center">{name}</div>
        <div className="product-price text-center">&#8377; {price}</div>
    </Link>

    )
}