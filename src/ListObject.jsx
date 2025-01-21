function ListObject(){
   
    //this is an array of objects
    const fruits = [
        {id: 1, name:"apple", calories: 95}, 
        {id: 2, name:"orange", calories: 45}, 
        {id: 3, name: "banana", calories: 105}, 
        {id: 4, name:"coconut", calories: 159}, 
        {id: 5, name: "pineapple", calories: 37}];

    //SORTING

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL

    // fruits.sort((a, b) => a.calories - b.calories); //NUMBERIC
    
    //fruits.sort((a, b) => b.calories - a.calories); //REVERSED NUMERIC
    
    const lowCalFruits = fruits.filter(fruit => fruit.calories <100);
    

    //specify a key as the unique value for each list item
    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp; 
                                            <b>{fruit.calories}</b></li>);

    const lowCalItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                        {lowCalFruit.name}: &nbsp; 
                                        <b>{lowCalFruit.calories}</b></li>);

    return(
        <>
        <ol>{listItems}</ol>
        <hr></hr>
        <p>Low Calories Fruit</p>
        <o>{lowCalItems}</o>
        </>
    );
}
export default ListObject