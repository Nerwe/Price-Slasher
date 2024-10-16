import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import GameDetails from "./pages/GameDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game-details" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
