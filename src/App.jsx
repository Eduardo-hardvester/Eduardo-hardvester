import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Acerca from "./pages/Acerca"
import Articles from "./pages/Articles"
import Proyectos from "./pages/Proyectos"
import Usos from "./pages/Usos"
import Diseno from "./pages/articulos/Diseno"
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
          <Route path="/usos" element={<Usos/>} />
          <Route path="/articulos/diseno" element={<Diseno />}/>
        </Routes>
      </div>
      <Footer/>
    </Router> 
  )
}

export default App
