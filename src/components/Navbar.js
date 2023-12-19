import React,{useContext} from 'react';
import './Navbar.css';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import { LoginContext } from './context/LoginContext';

export default function Navbar({login}) {
    const {setModalOpen} = useContext(LoginContext)
    const loginStatus = () => {
        const token = localStorage.getItem("jwt");
        if(login || token)
        {
            console.log(login);
            return [
                <>
                <Link to='/' className='nav-menu'><li>Home</li></Link>
                <Link to='/bookedslot' className='nav-menu'><li>Booked Slot</li></Link>
                <Link to={""}>
                    <button className='primaryBtn' onClick={()=>{
                        
                        setModalOpen(true)
                        }} >Log Out</button>
                </Link>
                </>
            ]
        }
        else{
            return [
                <>
                <Link to='/signup' className='nav-menu'><li>Signup</li></Link>
                <Link to='/signin' className='nav-menu'><li>Singin</li></Link>
                </>
            ]
        }
    };

    return <div className='navbar'>
        <img className="navBarLogo" src={logo}/>
        <ul className='nav-menu'>
            {loginStatus()}
        </ul>
    </div>;
}