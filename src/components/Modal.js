import { createPortal } from 'react-dom';
import { ModalWrapper, Overlay } from './Modal.styles';
const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div>
      <Overlay onClick={closeModal} />
      <ModalWrapper>{children}</ModalWrapper>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
