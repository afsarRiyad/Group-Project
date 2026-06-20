import Container from "./components/layouts/Container"
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from "./components/layouts/MainLayout";
import { Company } from "./pages/Company/Company";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Company" element={<Company />} />
      </Route>
    </Routes>
  );
}

export default App
