
// useContext() = allows u to share values between multiple levels
// 	of components without passing props through each level

// have to set up:
// I. PROVIDER COMPONENT

// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
// 	<Child/>
//    </MyContext.Provider>

// II. CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react';
// 	import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);
import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("Bro")
    
    return(
        <>
            <h2>18. Use Context </h2>
            <div className="box">
                <h1>Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value = {user}>
                    <ComponentB user={user}>
                    </ComponentB>
                </UserContext.Provider>
            </div>
        </>
    )
}
export default ComponentA