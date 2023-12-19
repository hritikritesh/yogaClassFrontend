import logo from './logo.svg';
import React,{createContext,useState} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import BookedSlot from './components/BookedSlot';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from './components/context/LoginContext';
import Modal from './components/Modal';

function App() {

  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
      <LoginContext.Provider value={{setUserLogin, setModalOpen }}>
        <Navbar login={userLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/bookedslot" element={<BookedSlot />}></Route>
        </Routes>
        <ToastContainer />
        {modalOpen && <Modal setModalOpen={setModalOpen}></Modal> }
      </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
