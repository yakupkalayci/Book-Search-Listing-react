import React, { useContext, useState } from "react";
import BookSearchContext from "../../context/BookSearchContext";
import Card from "../Card";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import "./index.css";




function Body() {
  const context = useContext(BookSearchContext);

  const [dropdownSearch, setDropdownSearch] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleSearches = () => setDropdownSearch(!dropdownSearch);
  const toggleModal = () => setModal(!modal);

  return (
    <div>
      <div className="homeSide">
      {
        <Dropdown
          toggle={toggleSearches}
          isOpen={dropdownSearch}
          style={{ marginBottom: "10px" }}
        >
          <DropdownToggle caret className="arama">Son Aramalar</DropdownToggle>
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
      {<Button className="favButton" onClick={toggleModal} id="fav" >
        Favoriler
        </Button>}
      </div>
      {
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader id="modalHeader" toggle={toggleModal}>
            Favoriler
          </ModalHeader>
          <ModalBody id="modalBody">
            {context.favourites.map((fav, index) => <li key={index}><a onClick={() => context.setBookTitle(fav)}>{fav}</a> <Button id="btsil" onClick={() => context.setFavourites("delete", fav)}>Sil</Button></li>)}
          </ModalBody>
          <ModalFooter id="modalFooter">
            <Button id="bttn" onClick={toggleModal}>
              Ok
            </Button>{" "}
          </ModalFooter>
        </Modal>
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
