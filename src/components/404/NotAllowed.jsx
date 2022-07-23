import "./notAllowed.css"
import React from 'react'

const NotAllowed = () => {
  return (
    <div className='notAllowedContainer'>
        <div className="notAllowedContent">
            <img className="notAllowedImg" src="./assets/warning.png" alt="" />
            <p className="notAllowedTitle">Bu Sayfaya Erişim İzniniz Yok!</p>
        </div>
    </div>
  )
}

export default NotAllowed