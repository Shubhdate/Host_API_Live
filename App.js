const express = require("express")
const app = express() 
require("dotenv").config()

const connectDB = require("./Db/Connect")
const PORT = process.env.PORT || 3000;
const products_routes = require("./Routes/Products")

app.get("/", (req,res) => {
    res.send("i am live")
})

//middleware for routes 
app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {console.log(`${PORT} i am connected`)})
    } catch (error) {
        console.log(error)
    }
}

start();

