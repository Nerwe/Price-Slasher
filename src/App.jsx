import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import GameDetails from "./pages/GameDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/giveaways" />} />
        <Route path="/giveaways" element={<Home />} />
        <Route path="/giveaways/:platform" element={<Home />} />
        <Route path="game-details" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
