//import { useEffect, useState } from 'react';
import './FilterProduct.css';
//mport axios from 'axios';
//import { getAllcategories } from '../../apis/fakestoreprodapis';
import usecategory from '../../hooks/usecategory';
import { useNavigate } from 'react-router-dom';
export default function FilterProduct() {

       const minPriceoptions = [0,10,20,50,100,200];
       const maxPriceoptions = [0,10,20,50,100,200,1000];

      const [categoryies] = usecategory();

      const navigate = useNavigate();

      function handlecategory(category) {
             navigate(`/products?category=${category}`)
      }


    return (

        <div className="product-list-sidebar d-flex flex-column">

        <div className="sidebar-title">Search Products</div>
        <div className="sidebar-search form-group">
            <input type="text" placeholder="Search by name" className="form-control" id="searchInput" />
        </div>

        <div className="sidebar-title fw-bold">Categories</div>
        <div id="categoryList">
            {/* <!-- will be populated by JS --> */}
            {/* <a className='d-flex text-decoration-none'>Electronics</a>
            <a className='d-flex text-decoration-none'>KitchenWare</a>
            <a className='d-flex text-decoration-none'>Mobiles</a>
            <a className='d-flex text-decoration-none'>Clothes</a> */}
            {categoryies && categoryies.map((category) =>  <a 
                                               onClick={() =>handlecategory(category)}
                                                key={category}
                                                 className='d-flex text-decoration-none'>
                                                   {category}</a> )}
        </div>


        <div className="sidebar-title">Filter by price</div>
        <div className="price-filter">
            <div className="price-filter-select d-flex flex-row justify-content-between">
                <div className="form-group">
                    <select name="minPrice" className="form-select" id="minPrice">
                        {minPriceoptions.map(optionValue => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                      
                    </select>
                </div>
                <div className="form-group">
                    <select name="maxPrice" className="form-select" id="maxPrice">
                    {maxPriceoptions.map(optionValue => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                    </select>
                </div>
            </div>
            <div className="price-filter-title d-flex flex-row justify-content-between">
                <div id="price-filter-label-min">Min Price</div>
                <div id="price-filter-label-max">Max Price</div>
            </div>
        </div>
        <button className="btn btn-warning clear-filter" id="search">Search</button>
        <button className="btn btn-danger clear-filter" id="clear">Clear Filters</button>
    </div>
    )
}