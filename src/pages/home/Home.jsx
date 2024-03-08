import Categoryitem from '../../components/Navbar/Categoryitem/Categoryitem'
import './Home.css'
export default function Home(){

    return (
        <div className="container welcome-wrap ">
        <div className="row">
            <h2 className="home-title text-center mt-4">Welcome to Shop Cart</h2>
            <div className="category-list d-flex flex-row justify-content-between align-items-center mt-4" id="categoryList">
               

                <Categoryitem itemName="All Products"/>

            </div>
            <div className="category-title text-center mt-4">
                Select a category to start Shopping
            </div>
        </div>
    </div>
    )
}