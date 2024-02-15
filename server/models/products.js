const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    imagePath:{type:String, required:true},
    title:{type:String, require:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
})
module.exports=mongoose.model("products", productSchema)