import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const ImageContainer = (props) => {
    return (
        <div className="imgContainer pt-6">
            {/* {props.images.map((image, key) => {
            return <img src={image} alt="" key={key} style={{height:200, width:200, padding:10}}/>
            })} */}
            <ImageList cols={2}>
                {props.images.map((image, key) => {
                    return (
                        <ImageListItem key={key}>
                            <img src={image} alt="" />
                        </ImageListItem>
                    )
                })}                
            </ImageList>
        </div>
    )
}

export default ImageContainer