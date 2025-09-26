import { useState, useEffect } from 'react'
import previousIcon from '../assets/images/icon-previous.svg'
import nextIcon from '../assets/images/icon-next.svg'
import closeIcon from '../assets/images/icon-close.svg'

function Lightbox({ images, isOpen, onClose, initialImage = 0 }) {
  const [currentImage, setCurrentImage] = useState(initialImage)

  useEffect(() => {
    setCurrentImage(initialImage)
  }, [initialImage])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>

        <div className="lightbox-main-image-container">
          <img
            src={images[currentImage].full}
            alt="Product"
            className="lightbox-main-image"
          />

          <button className="lightbox-nav lightbox-nav-prev" onClick={previousImage}>
            <img src={previousIcon} alt="Previous" />
          </button>

          <button className="lightbox-nav lightbox-nav-next" onClick={nextImage}>
            <img src={nextIcon} alt="Next" />
          </button>
        </div>

        <div className="lightbox-thumbnail-container">
          {images.map((image, index) => (
            <button
              key={index}
              className={`lightbox-thumbnail ${index === currentImage ? 'lightbox-thumbnail-active' : ''}`}
              onClick={() => setCurrentImage(index)}
            >
              <img src={image.thumbnail} alt={`Product ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lightbox