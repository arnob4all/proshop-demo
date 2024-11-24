import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"

function Product({product}) {
  return (
    <Card className="my-3 p-3 rounded bg-secondary bg-gradient text-light">
        <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"/>
        </Link>

        <Card.Body>
        <Link to={`/product/${product._id}`}>
        <Card.Title as='div' className="product-title">
            <h6 className="text-light">{product.name}</h6>
        </Card.Title>
        </Link>
        <Card.Text as='h6'>
            ${product.price}
        </Card.Text>
        
        <Card.Text as='div'>
          <Rating value={product.rating} 
          text={`${product.numReviews} reviews`}/>
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product