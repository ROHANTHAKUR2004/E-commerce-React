import { useEffect, useState } from 'react'
import Categoryitem from '../../components/Navbar/Categoryitem/Categoryitem'
import './Home.css'
import axios from 'axios'
import { getAllcategories } from '../../apis/fakestoreprodapis';
export default function Home(){


    const [categoryies , setcategoryies] = useState(null);

    async function downloadcategory() {
             const response = await axios.get(getAllcategories());
             setcategoryies(response.data);
    }


    useEffect(()=> {
           downloadcategory();
    },[])

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