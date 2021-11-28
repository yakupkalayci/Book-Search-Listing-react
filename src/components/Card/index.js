import React, { useState } from "react";
import "./index.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

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
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div id="bookshelf" className="bookshelf">
      <div className="perspective">
        <div id="cover">
          <img
            src={ img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6nBZmN2eqi1bPJmBSiyDqFdcW7WwWextqw&usqp=CAU" }
          />
        </div>
      </div>
      <div className="buttons">
        <a target="_blank" href={href}>
          <Button className="bttnBody" >İncele</Button>
        </a>
        {/* <a href="#">Details</a> */}
        <Button className="bttnBody2" onClick={toggle}>
          Detay
        </Button>
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
