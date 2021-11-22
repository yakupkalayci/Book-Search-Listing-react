import React from 'react'
import {useContext} from "react";
import BookSearchContext from '../../context/BookSearchContext';

function Card() {

    const context = useContext(BookSearchContext);
    console.log(context.bookData);
    return (
        <div>
            <div id="cover">
                <img src="https://picsum.photos/id/27/200/300" />
            </div>
            <div id="book-title">
                <h3>Dune - Frank Herbet</h3>
            </div>
            <div id="button">
                <button>Detaylı Bilgi</button>
            </div>
        </div>
    )
}

export default Card
