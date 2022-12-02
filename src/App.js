import logo from './logo.svg';
import './App.css';
import Clinic from './pages/Clinic';
import Med_team from './pages/Med_team';
import Games from './pages/Games';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactDom from 'react-dom';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clinic" element={<Clinic />} />
          <Route path="games" element={<Games />} />
          <Route path="med_team" element={<Med_team />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
