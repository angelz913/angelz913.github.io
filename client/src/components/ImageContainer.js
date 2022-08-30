import React from 'react'
import { useState, useEffect } from 'react'

const ImageContainer = (props) => {
    return (
        <div className="imgContainer flex flex-wrap justify-content-center pt-6">
            {props.images.map((image, key) => {
            return <img src={image} alt="" key={key} style={{height:200, width:200, padding:10}}/>
            })}
        </div>
    )
}

export default ImageContainer