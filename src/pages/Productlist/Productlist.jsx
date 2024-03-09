import './Productlist.css'
import Productimg from '../../assets/product.avif'
import Productbox from '../../components/Navbar/Productbox/Productbox';
import FilterProduct from '../../components/Filterproduct/FilterProduct';
export default function Productlist(){
return(
     <div className='container'>
        <div className='row'>
            <h2 className="product-list-title text-center">All Products</h2>
            <div className="product-list-wrapper d-flex flex-row">

                <FilterProduct/>
          
           {/* list of products */}
            <div className="product-list-box" id="productList">
                
                 <Productbox  Productimg={Productimg} name={"dummy"} price={1000}/>
           
            </div>

            </div>

        </div>
     </div>
    );
}