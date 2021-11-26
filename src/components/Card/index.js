import React from 'react'
import "./index.css"

function Card({img, title, author, href}) {

    return (
        <div id="bookshelf" className="bookshelf">
            <div className="perspective">
                <div id="cover">
                    <img src={img} />
                </div> 
            </div>
            <div className="buttons">
            <a target="_blank" href="http://books.google.com.tr/books?id=Yuo_EAAAQBAJ&amp;dq=intitle:dune&amp;hl=&amp;as_pt=BOOKS&amp;cd=1&amp;source=gbs_api" >Preview</a>
            <a href="#">Details</a>
            </div>
            {/* <div id="cover">
                <img src={img} />
            </div>         */}
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
