import styles from './Button.module.css'
import React, { useState } from 'react';
function Button(){
    // let count = 0
    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log( `${name} you clicked me ${count} time/s`);
    
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    // return(
    //     <button className = {styles.button} onClick={() => handleClick("Bro") }> Lick me 😺</button>
    // )


    //Event Handler
    // const handleClick = (e) => e.target.textContent = "Ouch! 🫨";

    // return(
    //     <button className = {styles.button} onDoubleClick={(e) => handleClick(e) }> Click me 😺</button>
    // );

      // State to manage the button's text
      const [buttonText, setButtonText] = useState("Click me 😺");

      
        const handleClick = () => {
            setButtonText("Ouch! 🫨");

            // Revert the text back after 1 second (1000 ms)
            setTimeout(() => {
                setButtonText("Click me 😺");
            }, 500); //set timeout time to 500milisec
        };
   
      return (
          <button className={styles.button} onClick= {handleClick} >
              {buttonText}
          </button>
      );

}
export default Button