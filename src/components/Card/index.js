import React, { useState, useContext } from "react";
import "./index.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import BookSearchContext from "../../context/BookSearchContext";
import {BsFillHeartFill} from "react-icons/bs"



function Card({
  img,
  title,
  author,
  href,
  category,
  page,
  thumbnail,
  publishDate,
  description,
}) {
  const context = useContext(BookSearchContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div id="bookshelf" className="bookshelf">
      <div className="perspective">
        <div id="cover">
          <img
            src={ img || "https://books.google.com.tr/googlebooks/images/no_cover_thumb.gif"} width="128px" height="199px"
          />
        </div>
      </div>
      <div className="buttons">
        <Button className="bttnBody2" onClick={toggle}>
          Detay
        </Button>

        <a target="_blank" href={href}>
          <Button className="bttnBody" >İncele</Button>
        </a>
        <Button className="bttnBody3" onClick={() => context.setFavourites("add", title)}><span>
          <BsFillHeartFill/>
          </span></Button>
        

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader id="modalHeader" toggle={toggle}>{title}</ModalHeader>
          <ModalBody id="modalBody">
            <img src={thumbnail} />
            <h5>Yazar :</h5> {author} <br />
            <h5>Sayfa Sayısı : </h5> {page} <br />
            <h5>Kategori : </h5> {category} <br />
            <h5>Basım Tarihi : </h5> {publishDate} <br />
            <h5>Açıklama : </h5> {description}
          </ModalBody>
          <ModalFooter id="modalFooter">
            <Button id="bttn" onClick={toggle}>
              Ok
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
      <div id="title">
        <a className="titleAuthor" id="yazi" href={href} target="_blank">
          <h6>
            {title} - {author}
          </h6>
        </a>
      </div>
    </div>
  );
}

export default Card;
