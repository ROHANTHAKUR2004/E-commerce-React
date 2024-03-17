import './Productlist.css'
//import Productimg from '../../assets/product.avif'
import Productbox from '../../components/Navbar/Productbox/Productbox';
import FilterProduct from '../../components/Filterproduct/FilterProduct';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';


export default function Productlist(){


      const [productlist , setproductlist] = useState(null);
      const [query] = useSearchParams();


      async function getproducts(category){

        const downloadurl = category ? `http://localhost:8765/products/category/${category}` : `http://localhost:8765/products` ;

        const response = await axios.get(downloadurl)
        setproductlist(response.data)
      }

      useEffect(()=>{
           getproducts(query.get("category"));
      },[query]);


return(
     <div className='container'>
        <div className='row'>
            <h2 className="product-list-title text-center">All Products</h2>
            <div className="product-list-wrapper d-flex flex-row">

                <FilterProduct/>
          
           {/* list of products */}
            <div className="product-list-box" id="productList">
            

                 {productlist && productlist.map((product) => <Productbox 
                             productId={product.id}
                             key={product.id}
                             Productimg={product.image} 
                             name={product.title} 
                             price={product.price}
                             />
                             )}
           
            </div>

            </div>

        </div>
     </div>
    );
}