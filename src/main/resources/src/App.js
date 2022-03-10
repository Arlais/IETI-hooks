import './App.css';
import {BrowserRouter, Switch, Routes, Route, Link} from "react-router-dom"
import Login from './components/login';
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
        <Login/>
    </div>
  );
}

export default App;
