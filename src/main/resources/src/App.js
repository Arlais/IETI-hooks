import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Login from './components/login';
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
