import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import FsLightbox from 'fslightbox-react'
import { useState } from 'react'

const ImageContainer = (props) => {

    const [lightbox, setLightbox] = useState({
        toggler: false,
        slide: 1,
    });

    const openLightboxOnSlide = (idx) => {
        setLightbox({
            toggler: !lightbox.toggler,
            slide: idx + 1
        })
    }
    
    return (
        <div className="imgContainer sm:w-11 md:w-10 lg:w-9 xl:w-8 p-6">
            <ImageList cols={3} gap={10} variant="masonry">
                {props.images.map((image, key) => {
                    return ( 
                        <ImageListItem key={key}>
                            <img src={image} alt="" onClick={() => openLightboxOnSlide(key)} />
                        </ImageListItem>
                    )
                })}                
            </ImageList>
            <FsLightbox
                toggler={lightbox.toggler}
                sources={props.images}
                slide={lightbox.slide}
            />
             
        </div>
    )
}

export default ImageContainer