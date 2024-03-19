//import { useEffect, useState } from 'react'
import Categoryitem from '../../components/Navbar/Categoryitem/Categoryitem'
import './Home.css'
//import axios from 'axios'
//import { getAllcategories } from '../../apis/fakestoreprodapis';
import usecategory from '../../hooks/usecategory';
import { useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import usecart from '../../hooks/useCart';
export default function Home(){


      const [categoryies] = usecategory();
      const  {user} = useContext(UserContext);
     // console.log('useris', user)
      const [cart] = usecart(user ? user.id : undefined);

      useEffect(()=>{
         console.log('cart is' , cart)
      },[user])

    return (
        <div className="container welcome-wrap ">
        <div className="row">
            <h2 className="home-title text-center mt-4">Welcome to Shop Cart</h2>
            <div className="category-list d-flex flex-row justify-content-between align-items-center mt-4" id="categoryList">
               

                <Categoryitem itemName="All Products"/>
                {categoryies &&  categoryies.map(category => <Categoryitem itemName={category} key={category} filter={category}/>
)}

            </div>
            <div className="category-title text-center mt-4">
                Select a category to start Shopping
            </div>
        </div>
    </div>
    )
}