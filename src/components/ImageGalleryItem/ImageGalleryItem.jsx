import React from 'react';
import css from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.galleryItem}>
      <img src={image.webformatURL} alt="" onClick={onClick} />
    </li>
  );
};

export default ImageGalleryItem;