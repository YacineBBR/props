import React from "react";

//function Greet() {
//    return <h1> hello</h1>;
//}


const Greet = (props)=> {
    
    return(
        <div>
         <span> 
             hi my name is {props.name} {props.fname}
        </span>
        {props.children}
        </div>
        )
}
export default Greet;