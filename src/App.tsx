import "./App.css";
import Quizz from "./Pages/Quizz";
import Start from "./Pages/Start";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/quizz" element={<Quizz />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
