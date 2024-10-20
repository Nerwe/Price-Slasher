import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import GameDetails from "./pages/GameDetails";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/giveaways" />} />
        <Route path="/giveaways" element={<Home />} />
        <Route path="/giveaways/:platform" element={<Home />} />
        <Route path="/game-details/:id" element={<GameDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
