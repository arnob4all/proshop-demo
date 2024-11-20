import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
const currentYear=new Date().getFullYear()
function Footer() {
  return (
    <footer>
        <Container>
            <Row>
             <Col className='text-center py-3'>
             <p>ProShop &copy;{currentYear}</p>
             </Col>   
            </Row>
        </Container>

    </footer>
  )
}

export default Footer