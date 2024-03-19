import axios from "axios"
import { getcardbyuser } from "../apis/fakestoreprodapis"

export async function fetchusercart(userid, setcart){
    const response = await axios.get(getcardbyuser(userid))
    //console.log(response.data[0])
    setcart(response.data[0])
 }