import React, {useState} from 'react'

const displayInfo = (isShown, props) => {
    if (isShown) {
        return (
            <div className="card-info" >
                <p>{props.description}</p>
                <p>Image Owner</p>
                <p>Likes</p>
            </div>
        )
    }
}

const DrawingCard = (props) => {
    const [isShown, setIsShown] = useState(false)
    return (
        <div className="drawing-card" 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} 
        style={{backgroundImage: `url(${props.img})`, backgroundSize: 'cover' ,height: "200px", width: "200px" }}>
                {isShown &&
                <div className="card-info" >
                    <p>{props.description}</p>
                    <p>Image Owner</p>
                    <p>Likes</p>
                </div>}
        </div>
    )
}

export default DrawingCard