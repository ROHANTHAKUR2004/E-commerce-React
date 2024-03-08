import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Error from "../pages/home/error/Error"

export default function MainRoutes() {


    return(
        <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>} />
        {/*  <Route/> */}
        
        </Routes>
    )
}
