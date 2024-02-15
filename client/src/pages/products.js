import { useState, useEffect } from 'react';
import axios from 'axios';
import  './style.css';

export const Products = () =>
{
    const [products, setProduct] = useState([]); //"all products"

  useEffect(() =>
  {
    fetch("http://localhost:3000/products",{
        method : 'GET',
    })
    .then((res) => res.json())
    .then((products) => setProduct(products.products)
    )
  },[])

  const handleAddToCart = async (_id) => {
    try {
      const response = await axios.post(`http://localhost:3000/products/${_id}`);
      console.log(response.data);
      
      
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      
    }}


return (
    <div>
        <h1> Our Products</h1>
        <div class="card-group">
        {products.map((p) =>{
            return (
                <div class="card">
                 <img src={p.imagePath} class="card-img-top" alt="..." width='100px' />
                 <div class="card-body">
                 <h4 class="card-title">{p.title}</h4>
                 <h6 class="card-text">{p.description}</h6>
                 <h5 class="card-text">
                  <small class="text-body-secondary">{p.price} .Rs</small>
                 </h5>
                 <button onClick={() => handleAddToCart(p._id)}> 
                  Add to cart
                 </button>
                </div>
                </div>
            )}
        )}
    </div>
    </div>
)}