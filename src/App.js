import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ContactMessageSent from './pages/ContactMessageSent'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Footer from './components/Footer'
import ProductProvider from './context/SingleItemContext'



function App() {
  return (
    <ProductProvider>
      <Router>
        <div className='h-screen'>
          <Navbar/>
          <main>
            <Routes>
              <Route path='/' element = { <Home/> } />
              <Route path='/about' element = { <About/> } />
              <Route path='/contact' element = { <Contact/> } />
              <Route path='/contact-message-sent' element = { <ContactMessageSent/> } />
              <Route path='/product/:id' element = { <SingleProduct/> } />
              <Route path='/cart' element = { <Cart/> } />
              <Route path='/checkout' element = { <Checkout/> } />
            </Routes>
          </main>
          <Footer/>
        </div>

      </Router>
    </ProductProvider>
  );
}

export default App;
