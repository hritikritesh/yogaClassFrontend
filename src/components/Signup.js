import React,{useEffect,useState} from 'react';
import logo from '../img/logo.png';
import {Link,useNavigate} from 'react-router-dom';
import './Signup.css';
import {toast} from 'react-toastify';

export default function Signup()
{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [password, setPassword] = useState("");

    // Toast function
    const notifyA = (data) => toast(data);

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;

    const postData=() =>
    {
        // checking email
        if(!emailRegex.test(email))
        {
            notifyA("Invalid Email");
            return;
        }
        if(!passRegex.test(password))
        {
            notifyA("Password must conatain at least 8 character including at least one number and one include both lower and uppercase letters and one special character")
            return;
        }
        const currentYear = new Date().getFullYear();
        const year = dateOfBirth.split("-")[0];
        const age = currentYear - year;
        if (age < 18 || age > 65)
        {
            notifyA("Age must be between 18 to 65");
            return;
        }

        fetch("https://yoga-class-backend-red.vercel.app/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                dateOfBirth: dateOfBirth,
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
                navigate('/signin');
            }
            console.log(data);
        })
    }

    return <div className='signUp'>
        <div className='form-container'> 
            <div className="form">
                <img className="signUpLogo" src={logo} alt="" />
                <p className='loginPara'>
                    SignUp to choose and purchase our yoga slots
                </p>
                <div>
                    <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div>
                    <input type="text" name="name" id="name" placeholder='Full Name' value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div>
                <input type="date" name="dateOfBirth" placeholder="mm/dd/yyyy" onChange={(e) => {setDateOfBirth(e.target.value)}} />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="Submit" id="submit-btn" value="Sign Up" onClick={()=>{postData()}} />
            </div>
            <div className="form2">
                Already have an account ?
                <Link to="/signin">
                    <span style={{color: "blue", cursor: "pointer"}}>Sign In</span>
                </Link>
            </div>
        </div>
    </div>
}