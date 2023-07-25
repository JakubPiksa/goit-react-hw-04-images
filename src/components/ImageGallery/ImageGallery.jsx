import css from "./imageGallery.module.css"
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";


const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={() => onImageClick(image.largeImageURL)} />
      ))}
    </ul>
  );
};

export default ImageGallery