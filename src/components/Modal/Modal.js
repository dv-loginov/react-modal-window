import React from "react";
import Portal from "./Portal";
import Button from "../../components/Button/Button";

import "./Modal.scss"

const Modal = ({ children, render, close}) => {
    return (
    <Portal>
        <div>
            <div className="ModalWrap">
                <div className="ModalWindow">
                    {render(children) || children}
                    <Button id="primary" onClick={close}>Close</Button>                                      
                </div>
            </div>       
            <div className="ModalDimmer"/>
        </div>
        {/* { setTimeout(close,5000) } */}
    </Portal>
    );
};

export default Modal;