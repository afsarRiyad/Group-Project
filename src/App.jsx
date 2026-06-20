import Container from "./components/layouts/Container"
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from "./components/layouts/MainLayout";
import Praicing from "./pages/Praicing";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/praicing" element={<Praicing />} />
      </Route>
    </Routes>
  );
}

export default App
