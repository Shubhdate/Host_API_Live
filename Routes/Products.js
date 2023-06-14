const express = require("express") 
const router = express.Router() 

const {getAllProducts,getAllProductsTesting} = require("../Controllers/Products")


router.route("/").get(getAllProducts)//for main api 

router.route("/testing").get(getAllProductsTesting)//for testing on postman

module.exports = router