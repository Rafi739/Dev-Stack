import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
// import Product from './components/Product'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
    {/* <Product /> */}
    <Footer />
  </StrictMode>,
)
