import React from 'react'

const DrawingCard = (props) => {
    return (
        <div className="drawing-card" style={{backgroundImage: `url(${props.img})`, backgroundSize: 'cover' ,height: "200px", width: "200px" }}>
             <p>Im a card</p>
        </div>
    )
}

export default DrawingCard