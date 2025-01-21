import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // set new date and time every 1000 miliseconds
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridium = hours >= 12 ? "PM" : "AM";


        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridium}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") +number;
    }

    return(
        <>
            <h1>Digital Clock</h1>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    )
}
export default DigitalClock