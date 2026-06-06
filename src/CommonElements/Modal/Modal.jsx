import "./modal.css"
import ReactDOM from "react-dom";
import UI_Store from "../../Store/UI_Store";
import { test } from "vitest";

const Modal = ({ children, testid }) => {
    const MobileVersion = UI_Store((state) => state.MobileVersion)
    const modalRoot = document.getElementById("modal__window");

    if (MobileVersion) {

        return ReactDOM.createPortal(<div data-testid={testid} className="modal">
            <div className="max-w-[768px] w-full">
                {children}
            </div>
        </div>, modalRoot);

    }

};

export default Modal;