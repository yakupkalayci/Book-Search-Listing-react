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
            src={
              img ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6nBZmN2eqi1bPJmBSiyDqFdcW7WwWextqw&usqp=CAU"
            }
          />
        </div>
      </div>
      <div className="buttons">
        <a target="_blank" href={href}>
          <Button color="success">İncele</Button>
        </a>
        {/* <a href="#">Details</a> */}
        <Button color="success" onClick={toggle}>
          Detay
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            <img src={thumbnail} />
            <h3>Yazar :</h3> {author} <br />
            <h3>Sayfa Sayısı : </h3> {page} <br />
            <h3>Kategori : </h3> {category} <br />
            <h3>Basım Tarihi : </h3> {publishDate} <br />
            <h3>Açıklama : </h3> {description}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Ok
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
      <div id="title">
        <a href={href} target="_blank">
          <h3>
            {title} - {author}
          </h3>
        </a>
      </div>
    </div>
  );
}

export default Card;
