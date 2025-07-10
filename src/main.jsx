import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import "./Styles/reset.css"
import "./Styles/common.css"
import Landing from './Landing/Landing.jsx'
import CatalogProducts from './Catalog-Products/CatalogProudcts.jsx'
import ShiftersCatalog from './Shifters-Catalog/ShiftersCatalog.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/catalog' element={<CatalogProducts />} />
      <Route path='/catalog/Shifters' element={<ShiftersCatalog />} />
    </Routes>
  </BrowserRouter>,
)
