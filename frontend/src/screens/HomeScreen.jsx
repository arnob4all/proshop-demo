import {Col,Row} from 'react-bootstrap'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import axios from 'axios'

function HomeScreen() {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const fetchProducts=async ()=>{
        const {data}=await axios.get("/api/products")
        
        setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <>
    <h1>Latest Product</h1>
    <Row >
      {products.map(product=>(
      
      <Col key={product._id} sm={6} md={6} lg={4} xl={3}>
      <Product product={product}/>        
      </Col>
        
      ))}
    </Row>
    </>
  )}

export default HomeScreen