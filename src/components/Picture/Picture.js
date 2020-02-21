import React from "react";
import TestPicture from "./Pictures/TestPicture"

const Picture = (props) => {  
    
    switch(props.name) {
            case "test":
              return <TestPicture {...props} />;
            default:
              return <div />;
    };
  };
  
export default Picture;