const connectDB = require("./Db/Connect") 
const Product = require("./Model/Products")
require("dotenv").config()
const ProductJson =  require("./Products.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany()
        await Product.create(ProductJson) 
        console.log("success data is Send")
    } catch (error) {
        console.log(error)
    }
}

start()