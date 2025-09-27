import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HW0 from './HW0/HW0'
import Home from './Views/Home'
import HW1 from './HW1/HW1'
import HW2 from './HW2/HW2'
import backgroundImage from "./assets/Fall-bg.jpg"
import './App.css'

function App() {

  return (
    <div className="bg-cover bg-center bg-color-500 w-lvw h-lvh">
      <div className="bg-cover bg-center bg-color-500 w-full h-full absolute z-[-1] object-top-left" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
      <div className='py-10 px-20 h-full w-full flex flex-col'>
        <Router>
          <nav className="p-4 bg-brown flex gap-4">
            <Link to="/" className="font-bold text-beige">Home</Link>
            <Link to="/HW0" className="font-bold text-beige">HW0</Link>
            <Link to="/HW1" className="font-bold text-beige">HW1</Link>
            <Link to="/HW2" className="font-bold text-beige">HW2</Link>
          </nav>

          <div className='bg-beige grow-1 overflow-scroll'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/HW0" element={<HW0 />} />
              <Route path="HW1" element={<HW1/>}/>
              <Route path="HW2" element={<HW2/>}/>
              <Route path="/*" element={<div>Error 404</div>} />
            </Routes>
          </div>
          
        </Router>
      </div>
    </div>
  )
}

export default App
