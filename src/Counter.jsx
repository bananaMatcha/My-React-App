import React, { useState } from "react"


// 11. updater function = a function passed as an argument to setState()
          // e.g setYear(arrow function)
          //allow for safe updates based on the PREVIOUS state
          //used with multiple state updates and asynchronous functions
        
function Counter(){
    const [count, setCount] = useState(0);

    // const increment = () =>{
    //     setCount(count + 1);
    // }


    //takes the PENDING state to calculate NEXT state
    //updater function is put in a queue
    //During the next render, it'll call them in the same order
    function increment(){
        //c = previous count
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    // function decrement() {
    //     setCount(count - 1);
    // } 
    function decrement() {
        setCount(c => c -1);
        setCount(c => c -1);
        setCount(c => c -1);
    } 
    function reset(){
        setCount(0);
    }
 
    return (
        <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter