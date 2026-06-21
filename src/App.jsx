import Container from "./components/layouts/Container"
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from "./components/layouts/MainLayout";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import { CompanyLayout } from "./pages/Company/CompanyLayout";
import Regestration from "./components/Regestration";
import Login from "./components/Login";

import BlogPage from "./pages/BlogPage";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Company" element={<CompanyLayout />} />
        <Route path='/registration' element={<Regestration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/blog' element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App
