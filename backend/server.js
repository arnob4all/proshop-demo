import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { errorHandler,notFound } from './middelware/errorMiddleware.js'
import connectDB from './config/db.js'
import ProductRoute from './routes/ProductRoutes.js'
//const express=require('express')
const port=process.env.PORT || 5000


connectDB()
const app=express()

// app.get('/',(req,res)=>{
//     res.send('api is running...')
// })

app.use('/api/products',ProductRoute)
app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{console.log(`server runing on ${port}`)})