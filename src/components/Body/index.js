import React, {useContext} from 'react'
import BookSearchContext from '../../context/BookSearchContext'
import Card from '../Card';

function Body() {
    const context = useContext(BookSearchContext);
    console.log(context);
    return (
        <div>
            {
                context.bookData.map(item => (
                    <Card key={item.id} img="https://picsum.photos/id/24/200/300" title={item.volumeInfo.title} author={item.volumeInfo.authors[0]} href={item.volumeInfo.infoLink} />
                ))
            }
        </div>
    )
}

export default Body
