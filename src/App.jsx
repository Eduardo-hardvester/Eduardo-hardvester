import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Acerca from "./pages/Acerca"
import Articles from "./pages/Articles"
import Proyectos from "./pages/Proyectos"
import Usos from "./pages/Usos"
import Ransomware from "./pages/articulos/Ransomware"
import Pia from "./pages/articulos/Pia"
import Breach from "./pages/articulos/Breach"

function App() {
  return(
    <Router>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/articulos/ransomware" element={<Ransomware />}/>
          <Route path="/articulos/programacionconia" element={<Pia />}/>
          <Route path="/articulos/breachforum" element={<Breach/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router> 
  )
}

export default App
