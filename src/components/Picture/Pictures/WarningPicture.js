import React from "react";

const WarningPicture = (props) => {  
    return (
        <svg 
            id={props.name} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 50 50" 
            width={`${props.width}px`} 
            height={`${props.height}px`} 
        >
            <circle style={{fill: "#fda017"}} cx="25" cy="25" r="25"/>
            <line style={{fill: "none", stroke: "#FFFFFF", strokeWidth: 4, strokeLinecap: "round", strokeMiterlimit:10}} x1="25" y1="10" x2="25" y2="32"/>
            <circle style={{fill: "white"}} cx="25" cy="39" r="3"/>
           
        </svg>
    );
  };
  
export default WarningPicture;