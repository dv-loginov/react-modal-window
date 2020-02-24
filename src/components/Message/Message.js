import React from "react";
import "./Message.scss";

const Message = props => {  
    
    // switch(props.name) {
    //     case "info":
    //         return <Info {...props} />;
    //     case "error":
    //         return <Error {...props} />;
    //     case "success":
    //         return <Success {...props} />;
    //     case "warning":
    //         return <Warning {...props} />;
    //     case "question":
    //         return <Question {...props} />;
                                
    //     default:
    //         return <div />;
    // };
    return(
        <div className="Message">
            {props.children}
        </div>
    );

  };
  
export default Message;