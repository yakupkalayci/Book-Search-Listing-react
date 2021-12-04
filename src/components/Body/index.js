import React, { useContext, useState } from "react";
import BookSearchContext from "../../context/BookSearchContext";
import Card from "../Card";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "./index.css";

function Body() {
  const context = useContext(BookSearchContext);

  const [dropdown, setDropdown] = useState(false);
  const toggle = () => setDropdown(!dropdown);

  console.log(context.storage);

  return (
    <div>
      {
        <Dropdown toggle={toggle} isOpen={dropdown}>
          <DropdownToggle caret>Son Aramalar</DropdownToggle>
          <DropdownMenu container="body">
            <DropdownItem
              onClick={() => {
                context.setBookTitle(context.storage[0]);
              }}
            >
              {context.storage[0]}
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                context.setBookTitle(context.storage[1]);
              }}
            >
              {context.storage[1]}
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                context.setBookTitle(context.storage[2]);
              }}
            >
              {context.storage[2]}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      }

      {!context.bookData && (
        <div style={{ margin: "20px 0px" }}>
          <h3>Aradığınız kitap bulunamadı</h3>
        </div>
      )}
      {context.bookData?.map((item) => (
        <Card
          classname="Cards"
          key={item.id}
          img={item.volumeInfo.imageLinks?.thumbnail}
          title={item.volumeInfo.title}
          author={item.volumeInfo.authors?.[0]}
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
