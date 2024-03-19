export function getAllcategories(){
    return `http://localhost:8765/products/categories`;
}

export function getsingleprod(id){
    return `http://localhost:8765/products/${id}`;
}

export function signup(){
    return  `http://localhost:8765/users`;
}

export function signin(){
    return `http://localhost:8765/auth/login`;

}

export function getcardbyuser(userid){
    return `http://localhost:8765/carts/user/${userid}`;

}

export function addproductcart(){
    return `http://localhost:8765/carts`;

}