import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ListObject from "./ListObject";

// use State
import MyComponent from "./MyComponent";
import Counter from "./Counter";

// with onChange event
import MyComponent2 from "./MyComponent2";
import ColorPicker from "./ColorPicker";
import MyComponent3 from "./MyComponent3";
import MyArray from "./MyArray";

import CarArray from "./CarArray";

import ToDoList from "./ToDoList";
import EffectCount from "./EffectCount";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import RefObject from "./RefObject";
import Stopwatch from "./Stopwatch";

// conditional rendering = allows you to control what get rendered
//                   based on certain conditions
//                (show, hide, change components)

//8. 
// React hook: Special functions that allows functional components to 
      // use React feature without writing class component
      // eg. (useState, useEffect, useContext, useReducer, useCallback, etc)

// 8.1. useState() = allow the creation of  a stateful variable  AND a setter function
    // update its value in the virtual DOM, [name, setNam]

//9. onChange = event handler used with form elements
//     e.g <input>, <textarea>, <select>, <radio>
//    Trigger a function every time the value of input changes


// 11. updater function = a function passed as an argument to setState()
          // e.g setYear(arrow function)
          //allow for safe updates based on the previous state
          //used with multiple state updates and asynchronous functions
          // goo
function App(){


  const fruits = [ {id: 1, name:"apple", calories: 95}, 
                  {id: 2, name:"orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name:"coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [ {id: 6, name:"potato", calories: 110}, 
                    {id: 7, name:"celery", calories: 15}, 
                    {id: 8, name: "carrots", calories: 25}, 
                    {id: 9, name:"corn", calories: 63}, 
                    {id: 10, name: "broccoli", calories: 50}];


  return (
    <>
      <Header/>

      <Food></Food>
      <Card></Card>
      <Card></Card>
      <Button></Button>

      {/* props */}
      <Student name ="SpongeBob" age ={30} isStudent={true}></Student>
      <Student name ="Patrick" age ={42} isStudent={false}></Student>
      <Student name ="Squidward" age ={63} isStudent={false}></Student>
      
      {/* default Student */}
      <Student></Student>

      {/* conditional rendering */}
      <UserGreeting isLoggedIn ={true} username ="BroCode"/>
      <UserGreeting isLoggedIn ={false} username ="Han Nguyen"/>
      
      {/* list rendering */}
      <ListObject></ListObject>
      
      {/* Reusable List */}
      {fruits.length > 0 ? <List items={fruits} category = "Fruits"></List>
                        : null}
      {vegetables.length > 0 && <List items={vegetables} category = "Vegetables"></List>}
      
      {/* useState hook */}
      <MyComponent></MyComponent>
      <Counter></Counter>
      <MyComponent2/>

      {/* color picker app */}
      <ColorPicker></ColorPicker>

      <MyComponent3></MyComponent3>
      <MyArray></MyArray>

      <CarArray></CarArray>

      {/* To Do List APP */}
      <ToDoList></ToDoList>

      {/* useEffect() */}
      <EffectCount></EffectCount>

      <DigitalClock></DigitalClock>
      <ComponentA></ComponentA>
      
      {/* useRef () */}
      <RefObject></RefObject>

      <Stopwatch/>
      <Footer/>
    </>
  );
}
export default App



























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  // NEW

// }

// export default App
