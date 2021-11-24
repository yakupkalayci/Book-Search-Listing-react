import React from 'react'

function Card({img, title, author}) {

    return (
        <div>
            <div id="cover">
                <img src={img} />
            </div>        
            <div id="title">
                <h3>{title}</h3>
            </div>
            <div id="author">
                <h3>{author}</h3>
            </div>
        </div>
    )
}

export default Card
