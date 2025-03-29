import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, classes, children, ...props }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.closeModal();
    }
  }, [open]);

  return createPortal(
    <dialog className={`modal ${classes}`} ref={dialog} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
