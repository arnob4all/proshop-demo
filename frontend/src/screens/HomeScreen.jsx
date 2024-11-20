import {Col,Row} from 'react-bootstrap'
import products from '../product'

function HomeScreen() {
  return (
    <>
    <h1>Latest</h1>
    <Row className='col-6'>{products.map(product=>{
      return(
      <>
      <Col sm={12} md={6} lg={4} xl={2}>{product.brand}
      <h3>{product.name}</h3>       
      </Col>
        </>
      )})}
    </Row>
    </>
  )}

export default HomeScreen