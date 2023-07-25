import React from 'react';
import css from './modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;