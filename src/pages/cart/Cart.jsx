//import { useContext, useEffect } from 'react'/
import OrderDetailsProduct from '../../components/OrderDetailsProduct/OrderDetailsProduct'
import './Cart.css'
import { useParams } from 'react-router-dom'
//import axios from 'axios';
//import { getcardbyuser } from '../../apis/fakestoreprodapis';
//import CartContext from '../../context/CartContext';
//import usecart from '../../hooks/useCart';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import axios from 'axios';
import { getsingleprod } from '../../apis/fakestoreprodapis';
export default function Cart(){

     //const {userid} = useParams();
     //console.log(userid)
     const {cart} = useContext(CartContext)
     const [products, setproducts] = useState([]);


     async function downloadcardproducts(cart){
        if(!cart ||  !cart.products) return ;

        //object for product quantity

        const productQuantitiymapping= {};
        cart.products.forEach(product => {
            productQuantitiymapping[product.productId] = product.quantity;
        })


        const productsPromise = cart.products.map(product => axios.get(getsingleprod(product.productId)))
       // console.log(productsPromise)
        const productPromiseResponse =  await axios.all(productsPromise);
        const downloadproduct = productPromiseResponse.map(product => ({...product.data , quantity : productQuantitiymapping[product.data.id]}))
        //nsole.log(downloadproduct)
        setproducts(downloadproduct);
     }
  
      
     useEffect(()=>{
        //console.log(cart);
        downloadcardproducts(cart)
     },[cart])
    return(
        <div className="container">
        <div className="row">
            <h2 className="cart-title text-center">Your cart</h2>
            <div className="cart-wrapper d-flex flex-row">
                <div className="order-details d-flex flex-column" id="orderDetails">
                    {/* <!-- todo --> */}
                    <div className="order-details-title fw-bold">Order Details</div>
                    {products.length > 0 &&  products.map(product =>  <OrderDetailsProduct 
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                    />  
                    )}
                   
                    {/* <!-- below products are coming from js --> */}
                    
                    
                </div>

                <div className="price-details d-flex flex-column" id="priceDetails">
                    <div className="price-details-box">

                        {/* <!-- todo --> */}

                        <div className="price-details-title fw-bold">Price Details</div>
                        <div className="price-details-data">
                            <div className="price-details-item d-flex flex-row justify-content-between">
                                <div>Price</div>
                                <div id="total-price"></div>
                            </div>
                            <div className="price-details-item d-flex flex-row justify-content-between">
                                <div>Discount</div>
                                <div>10</div>
                            </div>
                            <div className="price-details-item d-flex flex-row justify-content-between">
                                <div>Delivery Charges</div>
                                <div>FREE</div>
                            </div>
                            <div className="price-details-item d-flex flex-row justify-content-between">
                                <div>Total</div>
                                <div id="net-price"></div>
                            </div>
                        </div>

                    </div>
                    <div className="price-details-btn-group">
                        <a href="productList.html" className="continue-shopping-btn btn btn-info text-decoration-none">
                            Continue Shopping
                        </a>
                        <a href="checkout.html" className=" checkout-btn btn btn-primary text-decoration-none">
                            Checkout
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}