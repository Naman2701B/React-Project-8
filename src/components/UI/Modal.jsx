import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>{props.children}</div>;
};

// const portalElement = document.getElementById("overlays");
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
};

export default Modal;
