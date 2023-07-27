import "./instructive.css"
import React, { useRef } from "react";

const Instructive = () => {
    const imgRef = useRef(null);
      
    return (
        <div className="container-instructive">
            <img ref={imgRef} src="./static/textures/instructive/instructive.jpg" alt="instructive" />
        </div>
    )
}

export default Instructive;
