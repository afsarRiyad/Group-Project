import Container from "./components/layouts/Container"
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from "./components/layouts/MainLayout";
import Product from "./pages/Product";
import Regestration from "./components/Regestration";
import Login from "./components/Login";



function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/registration' element={<Regestration/>} />
        <Route path='/login' element={<Login/>} />
        
        
      </Route>
    </Routes>
  );
}

export default App
