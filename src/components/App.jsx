import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import CustomLoader from './Loader/Loader';
import css from './app.module.css';

const API_KEY = '38384941-ef7cd509cb805b326d83218b0';
const API_URL = 'https://pixabay.com/api/';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset current page when performing a new search
    fetchImages(query);
  };

  const fetchImages = async (query, page = 1) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}?q=${query}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
      );

      if (page === 1) {
        setImages(response.data.hits);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setIsLoading(false);
    }
  };

  const handleLoadMoreClick = () => {
    const nextPage = currentPage + 1;
    fetchImages(searchQuery, nextPage);
    setCurrentPage(nextPage);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <div className={css.body}>
      <h1>Image Search App</h1>
      <Searchbar onSubmit={handleSearchSubmit} />
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {images.length > 0 && <Button onClick={handleLoadMoreClick} />}
        </>
      )}
      {showModal && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
