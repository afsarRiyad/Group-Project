import Container from "./components/layouts/Container"
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from "./components/layouts/MainLayout";
import Product from "./pages/Product";
import BlogPage from "./pages/blogpage";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/blog' element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App
