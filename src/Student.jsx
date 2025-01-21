
// props = read-only properties that are shared between components
//         A parent component can send data to a child component
//         <Component key=value />

// propTypes = a mechanism that ensure the passed value is of the correct datatype
// age: propTypes.number

// Default Props = default values for props in case they are 
//             not passed from the parent component

import propTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p> Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

//ensure the prop type is of that datatype
Student.propTypes ={
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

//default prop
Student.defaultProps ={
    name: "Guest",
    age:0,
    isStudent: false
}
export default Student