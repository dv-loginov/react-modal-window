import React from "react";
import Portal from "./Portal";
import "./Modal.scss"

const Modal = ({ children, render, close}) => {
    return (
    <Portal>
        <div>
            <div className="ModalWrap">
                <div className="ModalWindow">
                    {render(children) || children}
                    <button onClick={close}>Close</button>                                      
                </div>
            </div>       
            <div className="ModalDimmer"/>
        </div>
        {/* { setTimeout(close,5000) } */}
    </Portal>
    );
};

export default Modal;