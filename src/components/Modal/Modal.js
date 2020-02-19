import React from "react";
import Portal from "./Portal";
import "./Modal.scss"
const Modal = ({ children, render, ...props }) => {
    console.log(props);
    
    const attribute={
        alert:{
            success:{
                ico: null,
                text: 'Success',    
            },
            error:{
                ico: null,
                text: 'Error',
            },
            warning:{
                ico: null,
                text: 'Warning',
            },
            info:{
                ico: null,
                text: 'Info',
            },
            question:{
                ico: null,
                text: 'Question',
            },
        },
    };
    
    //let str=attribute[]

    return (
    <Portal>
        <div>
            <div className="ModalWrap">
                <div className="ModalWindow">
                    {render(children) || children}
                    <div>Здесь анимированная иконка</div>
                    <div>{attribute[props.type][props.subtype].text}</div>
                    <hr />
                    <button onClick={props.close}>Close</button>
                                       
                </div>
            </div>       
            <div className="ModalDimmer"/>
        </div>
        {/* { setTimeout(close,5000) } */}
    </Portal>
    );
};

export default Modal;