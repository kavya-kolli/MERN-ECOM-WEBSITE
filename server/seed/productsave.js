var Product=require('../models/products');
var mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/E-Com');

var products=[
    new Product({
        imagePath:'https://th.bing.com/th/id/OIP.znMeZZ_j08zDpZ9xsv70tQHaLH?w=138&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title:'Tee shirts',
        description:'black tee shirts',
        price:300
    }),
    new Product({
        imagePath:'https://th.bing.com/th/id/OIP.oMSXRszRPZ4BRC2vdG9PsQHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title:'shirts',
        description:'formal shirts',
        price:1500
    }),
    new Product({
        imagePath:'https://th.bing.com/th/id/OIP.63Nd4FhFTGr52Gt736DMewHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title:'crop tops',
        description:'white crop top',
        price:500
    }),
    new Product({
        imagePath:'https://th.bing.com/th/id/OIP.vZG1e8B_Jef6RgW-6KZUOwHaKx?w=207&h=301&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title:'dresses',
        description:'flor touch dresses',
        price:2000
    }),
    new Product({
        imagePath:'https://th.bing.com/th/id/OIP.Kcle1oGU_Vr5rxQvAYbFrQHaKl?w=208&h=297&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title:'jeens',
        description:'mens jeens',
        price:1100
    }),
    new Product({
        imagePath:'https://th.bing.com/th/id/OIP.BQ_q3sf92af3bKy0haV1qQHaLu?w=208&h=311&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title:'sarees',
        description:'daily ware sarees',
        price:700
    }),
];
var done=0;
for(var i=0;i<products.length;i++) //5<6
{
    products[i].save().then(function(err,rezult) //save().then
    {
      done++; //0++ =6
      if(done==products.length) //6==6
      {
        exit();
      }
    });
}
function exit()
{
    mongoose.disconnect();
}