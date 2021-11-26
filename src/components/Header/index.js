import React, {useState, useContext} from "react";
import BookSearchContext from "../../context/BookSearchContext";
import "./index.css"

function Header() {
const context = useContext(BookSearchContext);

const [input, setInput] = useState("");

  return (
    <div className="mainHeader">
    <div className="contentHeader">
    <h1 className="mainText">Book Search using React</h1>
      <input className="searchMenu"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Kitap Adı..."
        value={input}
      />

      <button className="btnSearch" type="submit" onClick={() => {
      context.setBookTitle(input);
      // filter(input);
      }}>
        Ara
      </button>
     
    </div>
    </div>

  );
}

export default Header;
