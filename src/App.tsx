import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { AuthProvider } from "./Context/AuthContext";
import Quizz from "./Pages/Quizz";
import Result from "./Pages/Result";
import Start from "./Pages/Start";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/quizz" element={<Quizz />}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
