import React, { useContext } from "react";
import BookSearchContext from "../../context/BookSearchContext";
import Card from "../Card";
import "./index.css";

function Body() {
  const context = useContext(BookSearchContext);
  console.log(context);
  return (
    <div>
      {context.bookData.map((item) => (
        <Card
        classname="Cards"
          key={item.id}
          img={item.volumeInfo.imageLinks?.thumbnail}
          title={item.volumeInfo.title}
          author={item.volumeInfo.authors[0]}
          href={item.volumeInfo.infoLink}
          category={item.volumeInfo.categories?.[0] || "Bilgi Yok"}
          page={item.volumeInfo.pageCount}
          thumbnail={item.volumeInfo.imageLinks?.smallThumbnail || ""}
          publishDate={item.volumeInfo.publishedDate}
          description={item.volumeInfo.description}
        />
      ))}
    </div>
  );
}

export default Body;
