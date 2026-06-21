import Container from "./components/layouts/Container"
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from "./components/layouts/MainLayout";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import { CompanyLayout } from "./pages/Company/CompanyLayout";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Company" element={<CompanyLayout />} />
      </Route>
    </Routes>
  );
}

export default App
