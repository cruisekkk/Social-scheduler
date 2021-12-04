import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

const ModalPortal = props => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('uk-modal', 'bg-close: false');
    modalRoot.id = 'modal-save';
 
    useEffect(() => {
       document.body.appendChild(modalRoot);
       return () => {
          document.body.removeChild(modalRoot);
       }
    });
 
    return ReactDOM.createPortal(props.children, modalRoot);
 }
 
 export default ModalPortal;