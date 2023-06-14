const Products = require("../Model/Products")


const getAllProducts = async (req,res) => {
    const myArticles = await Products.find(req.query)
    res.status(200).json({myArticles})
    // res.status(200).json({myArticles,msg:"get all products"})
}   

const getAllProductsTesting = async (req,res) => {
    // let page = Number(req.query.page) || 1 
    // let limit = Number(req.query.limit) || 2//per page limit 
    // let skip = (page - 1) * limit;

    const myArticles = await (
    await Products.find(req.query))
        // .sort("day id heading subheading tags")
        // .select("id heading subheading").skip(skip).limit(limit))
    // res.status(200).json({msg:"get all products testing"})
    res.status(200).json({myArticles})
}   


module.exports = {getAllProducts,getAllProductsTesting}