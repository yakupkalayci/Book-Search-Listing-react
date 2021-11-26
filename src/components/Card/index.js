import React from 'react'

function Card({img, title, author, href}) {

    return (
        <div>
            <div id="cover">
                <a href={href} target="_blank">
                    <img src={img} />
                </a>
            </div>        
            <div id="title">
                <a href={href} target="_blank">
                    <h3>{title}</h3>
                </a>
            </div>
            <div id="author">
                <h3>{author}</h3>
            </div>
        </div>
    )
}

export default Card
