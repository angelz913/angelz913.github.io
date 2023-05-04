import React from 'react'
import { useState, useEffect } from 'react'
// import { Divider } from 'antd'
// import GalleryHeader from './GalleryHeader'
import ImageContainer from './ImageContainer'
import Footer from './Footer'

const Gallery = () => {
    const [images, setImages] = useState([])
    const importAll = r => {
        return r.keys().map(r)
    }
    useEffect(() => {
        setImages(importAll(require.context('../assets/images/', false, /\.jpg$/)))
    }, [])
     return (
        <section className="gallery">
            <div className="flex flex-wrap justify-content-center">
                {/* <GalleryHeader /> */}
                {/* <Divider /> */}
                <ImageContainer images={images}/>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )   
}

export default Gallery