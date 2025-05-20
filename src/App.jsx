import { useState } from "react"; // Lägg till denna
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Lägg till denna
import Start from "./pages/Start";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css"; // Lägg till denna

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null); // ⬅️ Flytta hit

  return (
    <div className={`app-wrapper ${selectedGame ? "blurred" : ""}`}>
      {" "}
      {/* ⬅️ Lägg till wrapper */}
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            path="/home"
            element={
              <Home
                selectedGame={selectedGame}
                setSelectedGame={setSelectedGame}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
