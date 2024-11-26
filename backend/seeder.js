import mongoose from "mongoose";
import dotenv from 'dotenv'

import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import products from "./data/product.js";
import Product from "./models/productModel.js"



dotenv.config();
connectDB()

const importData=async()=>{
    try {
    await Product.deleteMany()
    await Order.deleteMany()
    await User.deleteMany()

    const createUser=await User.insertMany(users)
    const adminUser=createUser[0]._id
    const sampleProduct=products.map((product)=>
        {
            return {...product,user:adminUser}
        })

        await Product.insertMany(sampleProduct)
        
     console.log('product added')
     process.exit()
        
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData= async()=>{
    try {
        await Product.deleteMany()
    await Order.deleteMany()
    await User.deleteMany()
    console.log(`Data Destroyed`)
    process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}


if(process.argv[2]==="-d"){
    destroyData()
} else {
    importData()
}