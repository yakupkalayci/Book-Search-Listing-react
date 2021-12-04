import React, { useState, useContext } from "react";
import BookSearchContext from "../../context/BookSearchContext";
import "./index.css";

function Header() {
  const context = useContext(BookSearchContext);

  const [input, setInput] = useState("");

  // const addLocalStorage = (newSearch) => {
  //   let storage;
  //   if(localStorage.getItem("lastSearches")) storage = JSON.parse(localStorage.getItem("lastSearches"));
  //   else storage = [];
  //   if(storage.length < 3) storage.push(newSearch);
  //   else {
  //     storage.shift();
  //     storage.push(newSearch);
  //   }
  //   localStorage.setItem("lastSearches", JSON.stringify(storage));
  //   context.setLastSearches(storage);
  // }

  return (
    <div className="mainHeader">
      <div className="contentHeader">
        <h1 className="mainText">Book Search using React</h1>
        <input
          className="searchMenu"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Kitap Adı..."
          value={input}
        />

        <button
          className="btnSearch"
          type="submit"
          onClick={() => {
            context.setBookTitle(input);
            setInput("");
            context.setStorage(input);
            // addLocalStorage(input);
          }}
        >
          Ara
        </button>
      </div>
    </div>
  );
}

export default Header;
