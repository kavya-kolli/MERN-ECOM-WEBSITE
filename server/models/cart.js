const mongoose= require('mongoose');

const CartSchema = new mongoose.Schema(
    {
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'products'},
    title:String,
    price:Number,
    count: {type:Number, default:1}
}
);

module.exports = mongoose.model('cart', CartSchema);