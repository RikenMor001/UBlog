import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"

export default function App(){
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>
}
