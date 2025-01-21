// useEffect() = Tell REACT to do some code when 
//      This component re renders
//      This component mounts
//      The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})      Runs after every re-renders
// 2. useEffect(() => {}, [])      Runs only on mount
// 3. useEffect(() => {}, [value])   Runs on mount + when value change

import React, { useState, useEffect } from "react";

function EffectCount() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count}, Color: ${color}`;
    }, [count]); //color is not added to dependencies
    // => document only updated when count change

    
    function addCount() {
        setCount(c => c + 1); // Increment count
    }

    function subtractCount() {
        setCount(c => c - 1); // Decrement count
    }

    function changeColor(){
        setColor(c => c=== "green" ? "red" : "green");
    }
    return (
        <>
            <p style = {{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br></br>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default EffectCount;
