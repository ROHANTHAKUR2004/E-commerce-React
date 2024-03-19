import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { fetchusercart } from "../helpers/fetchUserCart";

 function usecart(userid){
    console.log('userid' , userid);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {cart, setcart} = useContext(CartContext);

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        fetchusercart(userid, setcart);
    },[userid]);


    return [cart, setcart];
}

export default usecart;
