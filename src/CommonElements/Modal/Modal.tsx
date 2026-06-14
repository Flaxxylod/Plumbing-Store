import "./modal.css"
import ReactDOM from "react-dom";
import UI_Store from "../../Store/UI_Store";


interface ModalProps {
    children?: React.ReactNode;
    testid?: string
}


const Modal = ({ children, testid }: ModalProps) => {
    const MobileVersion: boolean = UI_Store((state) => state.MobileVersion)
    const modalRoot: HTMLElement | null = document.getElementById("modal__window");

    if (MobileVersion) {

        return ReactDOM.createPortal(<div data-testid={testid} className="modal">
            <div className="max-w-[768px] w-full">
                {children}
            </div>
        </div>, modalRoot);

    }

};

export default Modal;