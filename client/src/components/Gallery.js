import React from 'react'
import { useState, useEffect } from 'react'
import { Divider } from 'antd'
import GalleryHeader from './GalleryHeader'
import ImageContainer from './ImageContainer'

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
        <div className="gallery flex flex-wrap justify-content-cneter">
            <GalleryHeader />
            <Divider />
            <ImageContainer images={images}/>
        </div>
    )
}

export default Gallery