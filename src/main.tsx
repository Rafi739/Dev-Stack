import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nev from './components/Nev'
import Hero from './components/Hero'
import Product from './components/Product'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nev />
    <Hero />
    <Product />
    
  </StrictMode>,
)
