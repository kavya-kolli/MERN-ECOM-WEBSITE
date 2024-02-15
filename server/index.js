//server/index.js
const stripe = require('stripe')('sk_test_51OPNWACnf1EGyWdjTBVh5CGRd17RxUPsvw79zAL38533Mq1F7Mj1ZFsiAqLobIlgZ7LksveHiEf5kngGIHVDIFXC00E4AU2eip');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user')
const users = require('./routes/user')
const Products = require('./models/products')
const Cart = require('./models/cart');
// const Mycart = require('./routes/cart')
// to run --> npx nodemon index.js
const app = express();
const YOUR_DOMAIN = 'http://localhost:3000';
app.use(express.json());
app.use(cors());

app.use("/auth", users)
// app.use("/cart", Mycart)

mongoose.connect("mongodb://127.0.0.1:27017/E-Com");

app.get("/products", async (req, res) =>
{
    try{
        const data = await Products.find({})
        res.send({products : data })
    }
    catch(err){
        console.error(err)
    } 
})

app.post('/products/:_id', async (req, res) => {
  try {
    const productId = req.params._id; //
    console.log(productId);

    const product = await Products.findOne({_id: productId });
    console.log(product)
    const cartItem = new Cart({ product });
    await cartItem.save();

    res.json({ success: true, message: 'Item added to cart' });
    }
    catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

app.get("/cart", async (req, res) => {
  
  try {
    // Retrieve cart items from the database
    const cartItems = await Cart.find().populate('product'); // Ensure to populate the product field

    res.json({ cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }

});

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1OPPNGCnf1EGyWdjfqBojUIb',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}`,
    cancel_url: `${YOUR_DOMAIN}`,
  });

  res.redirect(303, session.url);
});
app.listen(3000);