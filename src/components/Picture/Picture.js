import React from "react";
import Info from "./Pictures/InfoPicture";
import Error from "./Pictures/ErrorPicture";
import Success from "./Pictures/SuccessPicture";
import Warning from "./Pictures/WarningPicture";
import Question from "./Pictures/QuestionPicture";

const Picture = (props) => {  
    
    switch(props.name) {
        case "info":
            return <Info {...props} />;
        case "error":
            return <Error {...props} />;
        case "success":
            return <Success {...props} />;
        case "warning":
            return <Warning {...props} />;
        case "question":
            return <Question {...props} />;
                                
        default:
            return <div />;
    };
  };
  
export default Picture;