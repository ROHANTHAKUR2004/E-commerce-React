import './ProductDetails.css';

export default function ProductDetails(){
    return(
        <div className="container">
        <div className="row">
            <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                <div className="product-img d-flex">
                    <img src="data:image/jpeg;base64,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" 
                    alt="product image" id="product-img"/>
                </div>

                <div className="product-details-box d-flex flex-column">
                    <div id="productDetails">
                        {/* <!-- product details --> */}
                        <div className="product-name" id="product-name">sdfkgfj</div>
                        <div className="product-price fw-bold" id="product-price">1000</div>
                        <div className="product-description">
                            <div className="product-description-title fw-bold">Description</div>
                            <div className="product-description-data" id="product-description-data">
                               
                            </div>
                        </div>
                    </div>

                    <div className="product-details-action btn btn-primary text-decoration-non">Add to cart</div>
                    <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                        Go to cart
                    </a>
                </div>
            </div>
        </div>
    </div>






    )
}