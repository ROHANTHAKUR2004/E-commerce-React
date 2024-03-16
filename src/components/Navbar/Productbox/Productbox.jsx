import './Productbox.css'
import { Link } from "react-router-dom";

export default function Productbox({Productimg , name, price}){
    return(
        <Link to="/product/2"
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