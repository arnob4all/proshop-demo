import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image, Col, ListGroup, Row, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

function ProductScreen() {
  const[product,setProduct]=useState({})
  const {id:productId}=useParams()
  useEffect(()=>{
    const fetchProducts=async()=>{
      const {data}=await axios.get(`/api/products/${productId}`)
        setProduct(data)
        
    }
    fetchProducts()
  },[])
    
    
    
  return (<>
  <Link to='/' className='btn btn-primary my-3'>Go Back</Link>
  
  
  <Row >
    <Col md={5}>
    <Image fluid src={product.image} alt={product.name} />
    </Col>

    <Col md={4}>
    <ListGroup variant='flush'>
      <ListGroup.Item className='bg-dark text-light'>
        <h3>{product.name}</h3>
      </ListGroup.Item>
      </ListGroup>

      <ListGroup variant='flush'>
      <ListGroup.Item className='bg-dark text-light'>
        <h3>{product.rating}</h3>
      </ListGroup.Item>

      <ListGroup.Item className='bg-dark text-light'>
      <Rating value={product.rating} text={`Rating ${product.numReviews}`}/>
    </ListGroup.Item>
    <ListGroup.Item className='bg-dark text-light'>
      Price: {product.price}
    </ListGroup.Item>
    <ListGroup.Item className='bg-dark text-light'>
    <strong>Description:</strong> {product.description}
    </ListGroup.Item>

      </ListGroup>

    

    </Col>

    <Col md={3}>
    <Card variant='flush'>
      <ListGroup variant='flush'>
        <ListGroup.Item className='bg-dark text-light'>
          <Row>
            <Col>
            Price:
          </Col>
          <Col>
           <strong> ${product.price}</strong>
          </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item className='bg-dark text-light'>
          <Row>
            <Col>
            Status:
          </Col>
          <Col>
           <strong> {product.countInStock>0?'In Stock':'Out of Stock'}</strong>
          </Col>
          </Row>
        </ListGroup.Item >
        <ListGroup.Item className='bg-dark text-light'
        type='button' disabled={product.countInStock===0}>
          <Button className='btn-block'>
              Add to Cart
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>
    </Row>
    </>
  )
}

export default ProductScreen