import React, {useState} from "react";

function MyArray(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value ="";
        
        //add new element to array
        //       setFoods([...foods, newFood]);

        //better practice of referencing to PrevState
        setFoods(f => [...f, newFood]);

    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
        //Explain: filter(element, index) = create new array including only the items that satisfy a certain condition
        //          Condition is (i !== index)
    }

    return(
        <div>
            <h3> 13. Update ARRAYS in State</h3>
            <h2> List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key ={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}
export default MyArray