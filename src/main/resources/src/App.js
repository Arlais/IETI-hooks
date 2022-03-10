import './App.css';
import {BrowserRouter, Switch, Routes, Route, Link} from "react-router-dom"
import Login from './components/login';
import Profile from "./components/profile";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/login" component={<Login/>}> Hola</Route>
                  <Route path="/profile" component={<Profile/>}> chao</Route>
              </Routes>
              <Login/>
          </div>
      </BrowserRouter>

  );
}

export default App;
