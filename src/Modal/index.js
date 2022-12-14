import './Modal.css';
import React from "react";
import ReactDOM from "react-dom";


function Modal({children}){
    return ReactDOM.createPortal(
        <div className="Modal-background">
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export {Modal};