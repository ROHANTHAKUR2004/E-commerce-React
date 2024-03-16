import { Link } from "react-router-dom";

export default function Categoryitem({itemName , filter = ''}){

    const redirectlink = `/products?category=${filter}`
    return(
                
         <div className="category-item d-flex align-items-center justify-content-center">
         <Link to={redirectlink}>{itemName}</Link>
     </div>
    )
}