const mongoose = require("mongoose") 

const productSchema = new mongoose.Schema({
    // id:"1",
    // heading:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. T",
    // subheading:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, id ad vero hic ex ea fuga doloremque mollitia ipsum amet maiores. Ex at in vitae! enetur quod debitis magni, in amet reprehenderit!"

    id:{type:Number,required:true},
    day:{type:String,required:true},
    heading:{type:String,required:true},
    subheading:{type:String,required:true},
    date:{type:Date,required:true, default:Date.now()},
    tags:{type:String,required:true,
        enum : {
            values:["tech","politics","wars","currentaffarirs"],
    }}

})

 
module.exports = mongoose.model('Product',  productSchema)//Product should be singualar always and first letter should be capital  

