import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/Layout/Navbar'
import Home from '@/Pages/Home'
import Preinscription from '@/Pages/Preinscription'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/preinscription' element={<Preinscription />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
