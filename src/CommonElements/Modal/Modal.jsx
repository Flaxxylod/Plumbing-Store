import "./modal.css"
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
    const modalRoot = document.getElementById("modal__window");
    return ReactDOM.createPortal(<div className="modal">
        <div className="modal__content">
            {children}
        </div>
    </div>, modalRoot);
};

export default Modal;