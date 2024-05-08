import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Login from './component/project/project/Login';
import Users from './component/project/project/Users';
import ListToDo from './component/project/project/ListToDo ';
import NavBar from './component/project/project/NavBar';
// import NavBar from './component/less5/NavBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='' element={<Login/>}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Users' element={<Users/>}></Route>
          <Route path='/ListToDo' element={<ListToDo/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
