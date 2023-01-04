import React, { useEffect } from "react";
import { Portal } from "./Portal";
import { Overlay, Dialog } from "./styles";

export const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }

    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};
