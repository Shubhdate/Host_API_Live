const mongoose = require('mongoose') 



const connectDB = (Uri) => {
    console.log("database is connected")
    return mongoose.connect(Uri)
}

module.exports = connectDB