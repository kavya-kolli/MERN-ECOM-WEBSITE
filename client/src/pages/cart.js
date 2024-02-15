import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        const fetchCartItems = async () => {
            try{
                const response = await axios.get('http://localhost:3000/cart');
                console.log(response.data);
                setCartItems(response.data.cartItems);

            }catch(error){
              console.error('Error fetching cart items:', error);
            }
        };
        fetchCartItems();
    },[]);
//     const checkout = async() =>
//     {
//         try{
//             await axios.post('http://localhost:3000/create-checkout-session');
//             console.log("Payment gateway is working")
//         }
//         catch(error){
//         console.error('Error in payment:', error);
//       }
//     }
    return(
        <div>
            <h2>Your cart has{`${cartItems.length}`}items</h2>
            <hr/>
            {cartItems.map((cartItems)=>(
                <div className='card mb-3'>{/* style="max-width: 540px"*/}
                <div className='row g-0'>
                 <div className='col-md-4'>
                    <div key={cartItems._id}>
                        {cartItems.product?.imagePath &&(
                            <img src={cartItems.product.imagePath} class="img-fluid rounded-start" alt="..."/>
                        )}
                    </div>
                    <div className='col-md-8'>
                    <div className='card-body'>
                    <h5 className='card-title'>{cartItems.product?.title}</h5>
                    <p className='card-text'>{cartItems.product?.description}</p>
                    <p className='card-text'>{cartItems.product?.itemCode}</p>
                    <p className='card-text'><small class="text-body-secondary">
                        {cartItems.product?.price} Rs
                        </small></p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
              
            ))}
            {/* <button onClick={checkout}>Checkout</button> */}
            <stripe-buy-button
  buy-button-id="buy_btn_1OiEUZCnf1EGyWdj26ThQMkz"
  publishable-key="pk_test_51OPNWACnf1EGyWdjIdg16Cky16AQW5kAPVumCus7ZZ84jrgTjvOYLkc3RQT80XA54Fl5R2YujFV08Bg4P28MTzfo00akOTj0Cv"
>
</stripe-buy-button>
        </div>
    );
};