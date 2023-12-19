import React,{useState,useEffect} from 'react';
import './Home.css';
import logo from '../img/logo.png';
import {Link,useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

export default function Home()
{
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("jwt");
        if(!token)
        {
            navigate('/signup');
        }
    },[])

    const [slot, setSlot] = React.useState('6-7AM');
    const notifyA = (data) => toast(data);

    const postData=() =>
    {
        fetch("https://yoga-class-backend-red.vercel.app/bookSlot",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                slot
            })
        }).then(res=>res.json())
          .then(data=>{
            if(data.error)
            {
                notifyA(data.error);
            }
            else{
                notifyA(data.slot);
                navigate('/bookedslot');
            }
            console.log(data);
        })
    }
    
    return <div className='home'>
    <div className='form-container'> 
        <div className="form">
            <img className="signUpLogo" src={logo} alt="" />
            <p className='loginPara'>
                Choose slot and pay rupees 500 only<br/>
                After one month you have to again choose slot and pay
            </p>
            <div>
                <select value={slot} onChange={(e)=>{setSlot(e.target.value)}}>
                    <option value="6-7AM">6-7AM</option>
                    <option value="7-8AM">7-8AM</option>
                    <option value="8-9AM">8-9AM</option>
                    <option value="5-6PM">5-6PM</option>
                </select>
            </div>
            <input type="Submit" id="submit-btn" value="Pay" onClick={()=>{postData()}} />
        </div>
        <div className="form2">
            <Link to="/signin">
                <span style={{color: "blue", cursor: "pointer",padding: "10px"}}>Sign In</span>
            </Link>
            or
            <Link to="/signup">
                    <span style={{color: "blue", cursor: "pointer", padding: "10px"}}>Sing Up</span>
            </Link>
        </div>
    </div>
</div>
}