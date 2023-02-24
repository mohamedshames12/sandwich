import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./components/Navber";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import './App.css'
function App() {
  return (
    <div className="App">

<BrowserRouter>
<Navber />
    <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
