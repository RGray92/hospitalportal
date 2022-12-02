import './App.css';
import Clinic from './pages/Clinic';
import Medteam from './pages/Medteam';
import Games from './pages/Games';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clinic" element={<Clinic />} />
          <Route path="games" element={<Games />} />
          <Route path="medteam" element={<Medteam />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
