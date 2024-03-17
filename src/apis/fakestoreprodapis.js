export function getAllcategories(){
    return `http://localhost:8765/products/categories`;
}

export function getsingleprod(id){
    return `http://localhost:8765/products/${id}`;
}

export function signup(){
    return  `http://localhost:8765/users`;
}