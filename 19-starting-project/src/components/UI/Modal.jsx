import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, classes, children, ...props }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${classes}`} ref={dialog} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
