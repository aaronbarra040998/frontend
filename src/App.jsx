import { BrowserRouter } from 'react-router-dom';
// , Routes, Route 
import Navbar from '@/Layout/Navbar';
import Modal from '@/Layout/Modal';
import { Body } from '@/Layout/Body';// import Home from '@/Pages/Home';
// import Preinscription from '@/Pages/Preinscription';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Body />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/preinscription' element={<Preinscription />} />
        </Routes> */}
        <Modal />
      </>
    </BrowserRouter>
  );
}

export default App;
