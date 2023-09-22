import css from './Modal.module.css';

const Modal = ({ visible, setModal, children }) => {
  
  if (visible) {
    return (
    <div className={css.modal} onClick={() => setModal(false)}>
      <div className={css['modal-content']} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>)
  }
}

export default Modal;