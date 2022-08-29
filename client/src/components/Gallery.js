import React from 'react'
import { useState, useEffect } from 'react'

const Gallery = () => {
  const [images, setImages] = useState([])
  const importAll = r => {
    return r.keys().map(r)
  }

  useEffect(() => {
    setImages(importAll(require.context('../assets/images/', false, /\.jpg$/)))
    console.log(images)
  }, [])
    

  return (
    <>
      <header>Gallery</header>
      {images.map((image, key) => {
        return <img src={image} alt="" key={key} style={{height:200, width:200, padding:10}}/>
      })}
    </>
  )
}

export default Gallery