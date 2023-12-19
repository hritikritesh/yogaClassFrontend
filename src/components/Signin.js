import React,{useState,useContext} from 'react';
import './Signin.css';
import logo from '../img/logo.png';
import {Link,useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { LoginContext } from './context/LoginContext';

export default function Signin()
{
    const {setUserLogin}=useContext(LoginContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const notifyA = (data) => toast(data);

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const postData=() =>
    {
        // checking email
        if(!emailRegex.test(email))
        {
            notifyA("Invalid Email");
            return;
        }

        fetch("https://yoga-class-backend-red.vercel.app/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then(res=>res.json())
          .then(data=>{
            if(data.error)
            {
                notifyA(data.error);
            }
            else{
                notifyA(data.message);
                console.log(data);
                localStorage.setItem("jwt",data);
                setUserLogin(true);
                navigate('/');
            }
        })
    }

    return <div className='signIn'>
        <div>
            <div className="loginForm">
                <img className="signUpLogo" src={logo} alt="" />
                <p className='loginPara1'>
                    SignIn to choose and purchase our yoga slots
                </p>
                <div>
                <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div>
                <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="Submit" id="submit-btn" value="Sign In" onClick={()=>{postData()}} />
            </div>
            <div className="loginForm2">
                Don't have an account ?
                <Link to="/signup">
                    <span style={{color: "blue", cursor: "pointer"}}>Sing Up</span>
                </Link>
            </div>
        </div>
    </div>
}