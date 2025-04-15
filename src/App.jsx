import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Acerca from "./pages/Acerca"
import Articles from "./pages/Articles"
import Proyectos from "./pages/Proyectos"
function App() {


  return (
    <Router>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </div>
      <Footer/>
    </Router> 
  )
}

export default App
