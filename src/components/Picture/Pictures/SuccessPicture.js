import React from "react";

const SuccessPicture = (props) => {  
    return (
        <svg 
            id={props.name} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 144 144" 
            width={`${props.width}px`} 
            height={`${props.height}px`} 
        >

        <path style={{stroke: 'none',fillRule: 'nonzero',fill: '#95c75a',fillOpacity:1}} d="M 72 144 C 32.234375 144 0 111.765625 0 72 C 0 32.234375 32.234375 0 72 0 C 111.765625 0 144 32.234375 144 72 C 144 111.765625 111.765625 144 72 144 Z M 72 144 "/>
        <path style={{stroke: 'none', fillRule:'nonzero', fill:'#ffffff', fillOpacity:1}} d="M 111.875 45.03125 L 55.1875 101.71875 L 32.125 78.660156 L 25.398438 85.625 L 55.1875 115.171875 L 118.601562 51.753906 Z M 111.875 45.03125 "/>
       
    </svg>
    );
  };
  
export default SuccessPicture;