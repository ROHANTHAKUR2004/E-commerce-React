
import axios from "axios";


import { getAllcategories } from "../apis/fakestoreprodapis";
import { useEffect, useState } from "react";

function usecategory(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [categoryies , setcategoryies] = useState(null);

    async function downloadcategory() {
             const response = await axios.get(getAllcategories());
             setcategoryies(response.data);
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
           downloadcategory();
    },[])


    return[categoryies]

}

export default usecategory;