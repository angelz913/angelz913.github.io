import React from 'react'


const ProfilePicture = (props) => {
  return (
    <div className="pfpContainer flex justify-content-center my-5">
        <img src={props.src} alt="" />
    </div>
  )
}

export default ProfilePicture