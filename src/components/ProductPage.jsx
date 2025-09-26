import { useState } from 'react'
import ProductGallery from './ProductGallery'
import ProductDetails from './ProductDetails'

import product1 from '../assets/images/image-product-1.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product4 from '../assets/images/image-product-4.jpg'
import product1Thumb from '../assets/images/image-product-1-thumbnail.jpg'
import product2Thumb from '../assets/images/image-product-2-thumbnail.jpg'
import product3Thumb from '../assets/images/image-product-3-thumbnail.jpg'
import product4Thumb from '../assets/images/image-product-4-thumbnail.jpg'

const productImages = [
  { full: product1, thumbnail: product1Thumb },
  { full: product2, thumbnail: product2Thumb },
  { full: product3, thumbnail: product3Thumb },
  { full: product4, thumbnail: product4Thumb }
]

const productData = {
  id: 1,
  company: "SNEAKER COMPANY",
  name: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  originalPrice: 250.00,
  discountPrice: 125.00,
  discountPercentage: 50,
  images: productImages
}

function ProductPage({ addToCart }) {
  return (
    <main className="product-page">
      <div className="product-container">
        <ProductGallery images={productData.images} />
        <ProductDetails product={productData} addToCart={addToCart} />
      </div>
    </main>
  )
}

export default ProductPage