import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { addproductcart, getsingleprod } from '../../apis/fakestoreprodapis';
import CartContext from '../../context/CartContext';
import UserContext from '../../context/UserContext';

export default function ProductDetails(){

    const {id} = useParams();
    const navigate = useNavigate();

    const[product ,setproduct] = useState(null);
    const {setcart} = useContext(CartContext);
    const {user} = useContext(UserContext);
 
    async function getprod(id){
         const response = await axios.get(getsingleprod(id))
         setproduct(response.data)
         
    }
    
    async function addprodttocart(){
        if(!user) return ;
        
       
        const response = await axios.put(addproductcart(), {userId : user.id, productId : id})
        setcart({...response.data})
        navigate(`/cart/${user.id}`)
    }

    
       useEffect(() =>{
             getprod(id);
       },[])



    return(
        product && <div className="container">
        <div className="row">
            <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                <div className="product-img d-flex">
                    <img src={product.image}
                    alt="product image" id="product-img"/>
                </div>

                <div className="product-details-box d-flex flex-column">
                    <div id="productDetails">
                        {/* <!-- product details --> */}
                        <div className="product-name" id="product-name">{product.title}</div>
                        <div className="product-price fw-bold" id="product-price">{product.price}</div>
                        <div className="product-description">
                            <div className="product-description-title fw-bold">Description</div>
                            <div className="product-description-data" id="product-description-data">
                               {product.description}
                            </div>
                        </div>
                    </div>

                    <div 
                    onClick={addprodttocart}
                    className="product-details-action btn btn-primary text-decoration-non">
                        Add to cart
                        </div>
                    <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                        Go to cart
                    </a>
                </div>
            </div>
        </div>
    </div>






    )
}