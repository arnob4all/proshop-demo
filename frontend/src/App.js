import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
  <>
    <Header/>
    <main className='py-3 bg-dark'>
    <Container>
    <Outlet/>
    </Container>  
    </main>
    <Footer/>
    
    </>
  )
}

export default App