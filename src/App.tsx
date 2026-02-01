import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./components/Landingone"
import Resources from "./components/Resource"
import Contact from "./components/Contact"
import About from "./components/About"
import ResourceContactPage from './components/ResourceContent'
// import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/resources" element={<Resources />} />
             <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources/:id" element={<ResourceContactPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
