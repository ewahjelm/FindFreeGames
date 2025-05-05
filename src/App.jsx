<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx"
import Start from "./components/Start.jsx"
import Quiz from "./components/Quiz.jsx"
import ShowGame from "./components/ShowGame.jsx"


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/showgame" element={<ShowGame />}/>
      </Routes>
    </Router>
  );
=======
import Home from "./pages/Home";
import './App.css'

const App = () => {
  return (<Home/>)
>>>>>>> 473e1d1db11ad81be2d269dcfd6600183182bc91
};

export default App;
