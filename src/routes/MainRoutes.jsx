import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Error from "../pages/home/error/Error"
import Productlist from "../pages/Productlist/Productlist"
import ProductDetails from "../pages/ProductDetails/ProductDetails"

export default function MainRoutes() {


    return(
        <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/products"  element={<Productlist/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<Error/>} />
        {/*  <Route/> */}
        
        </Routes>
    )
}
