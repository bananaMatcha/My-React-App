import React, {useState} from "react";

function MyComponent3(){

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"
    });

    function handleYearChange(event){
        //{...c} is SPREAD syntax
            //     allows you to "spread" or "copy" elements or properties 
            //     of an object or array into another object or array


        // spread syntax is commonly used to:
        // 1. Clone objects or arrays.
        // 2. Merge or update objects or arrays immutably (without directly modifying the original).
        
        // car => referencing the previous state of car
        setCar(c => ({...c, year: event.target.value}))
    }
    function handleMakeChange(event){

        setCar(c => ({...c, make: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }


    return(
        <div>
            <h3>11. Update ARRAY in State</h3>
            <p> Your favorite car is: {car.year} {car.make} {car.model} </p>

            <input type="number" value = {car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value = {car.make} onChange={handleMakeChange}/> <br/>
            <input type="text" value = {car.model} onChange={handleModelChange}/> <br/>

        </div>
    )

}
export default MyComponent3