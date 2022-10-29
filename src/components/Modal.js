import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {

  return ReactDOM.createPortal(
    <div className="modalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
};

export { Modal };