import { useState } from 'react'
import previousIcon from '../assets/images/icon-previous.svg'
import nextIcon from '../assets/images/icon-next.svg'
import Lightbox from './Lightbox'

function ProductGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = () => {
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img
          src={images[currentImage].full}
          alt="Product"
          className="main-image"
          onClick={openLightbox}
        />

        <button className="gallery-nav gallery-nav-prev" onClick={previousImage}>
          <img src={previousIcon} alt="Previous" />
        </button>

        <button className="gallery-nav gallery-nav-next" onClick={nextImage}>
          <img src={nextIcon} alt="Next" />
        </button>
      </div>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${index === currentImage ? 'thumbnail-active' : ''}`}
            onClick={() => setCurrentImage(index)}
          >
            <img src={image.thumbnail} alt={`Product ${index + 1}`} />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        initialImage={currentImage}
      />
    </div>
  )
}

export default ProductGallery