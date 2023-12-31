import React,{useContext} from 'react';
import {RiCloseLine} from 'react-icons/ri';
import "./Modal.css";
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './context/LoginContext';

export default function Modal({setModalOpen}) {
    const navigate = useNavigate()
    const {setUserLogin}=useContext(LoginContext);
    return (
        <div className="darkBg">
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className='heading'>Confirm</h5>
                    </div>
                    <button className='closeBtn' onClick={()=>setModalOpen(false)}>
                        <RiCloseLine></RiCloseLine>
                    </button>

                    <div className="modalContent">
                        Are you really want to log out?
                    </div>

                    <div className="actionConta
                    iner">
                        <button className="logOutBtn" onClick={
                            ()=>{setModalOpen(false)
                            localStorage.clear()
                            setUserLogin(false)
                            navigate('/signin')
                            }}>Log Out</button>
                        <button className="cancelBtn" onClick={()=>setModalOpen(false)}>Cancel</button>
                    </div>
                </div> 
            </div>
        </div>
       
        
    )
}