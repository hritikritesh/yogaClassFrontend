import React,{useState,useEffect} from 'react';
import "./BookedSlot.css"

export default function BookedSlot()
{
    const [data,setData] = useState([]);

    const getDetails = ()=>{
        fetch("https://yoga-class-backend-red.vercel.app/bookedSlot",{
            method: "get",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>setData(result))
        .catch(err=>console.log(err));
    }
    useEffect(()=>{
        getDetails();
    },[])
    return <div className='bookedSlot'>
                <div>
                    Your booked slots are 
                </div>
                {data.map((slots) => {
                    return (
                        <div>
                            <h3>{slots.slot}</h3>
                        </div>
                    )
                })}
        </div>
}