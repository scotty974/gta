import { useEffect, useState } from "react";

export default function Timer(){
   
   
const calculateDate = () =>{
    const now:any = new Date();
    const targetDate:any = new Date('December 31, 2025 23:59:59 GMT+00:00')
    const timeRemaining = targetDate - now;

    if(timeRemaining <= 0 ){
        return{
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0
        }
    }
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return {
      days,
      hours,
      minutes,
      seconds,
    };
}
    

const [timeRemaining, setTimeRemaining] = useState(calculateDate)

    useEffect(()=>{
        const inteval = setInterval(()=>{
            setTimeRemaining(calculateDate())
        },1000)
        return ()=> clearInterval(inteval)
    },[])


    return(
        <>
        <div className="flex justify-around ">
            <div className="flex flex-col items-center">
                <p className="md:text-8xl text-2xl font-bold text-orange">{timeRemaining.days}</p>
                <h4 className="md:text-5xl text-1xl text-white">Days</h4>
            </div>
            <div className="flex flex-col items-center">
                <p className="md:text-8xl text-2xl font-bold text-orange">{timeRemaining.hours}</p>
                <h4 className="md:text-5xl text-1xl text-white">Hours</h4>
            </div>
            <div className="flex flex-col items-center">
                <p className="md:text-8xl text-2xl font-bold text-orange">{timeRemaining.minutes}</p>
                <h4 className="md:text-5xl text-1xl text-white">Minutes</h4>
            </div>
            <div className="flex flex-col items-center">
                <p className="md:text-8xl text-2xl font-bold text-orange">{timeRemaining.seconds}</p>
                <h4 className="md:text-5xl text-1xl text-white">Seconds</h4>
            </div>
        </div>
        </>
    )

}