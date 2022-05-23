import "./overlay.css"
import React, { useRef } from 'react'

function Overlay() {

    const overlayRef = useRef();

    const handleClick = () => {
        overlayRef.current.style.display = "none"
    }

  return (
    <div className='overlayContainer' onClick={handleClick}>
      
    </div>
  )
}

export default Overlay
