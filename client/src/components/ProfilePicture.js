import React from 'react'


const ProfilePicture = (props) => {
  return (
    <div className="pfpContainer flex justify-content-center mt-5 mb-4">
        <img src={props.src} alt="" />
    </div>
  )
}

export default ProfilePicture