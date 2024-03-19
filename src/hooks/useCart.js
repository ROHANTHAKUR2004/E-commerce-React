import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import axios from "axios";
import { getcardbyuser } from "../apis/fakestoreprodapis";

 function usecart(userid){
    console.log('userid' , userid);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {cart, setcart} = useContext(CartContext);

    async function fetchusercart(userid){
       const response = await axios.get(getcardbyuser(userid))
       //console.log(response.data[0])
       setcart(response.data[0])
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        fetchusercart(userid);
    },[userid]);


    return [cart, setcart];
}

export default usecart;
