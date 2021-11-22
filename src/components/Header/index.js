import React, {useState, useContext} from "react";
import reactDom from "react-dom";
import BookSearchContext from "../../context/BookSearchContext";

function Header() {
const context = useContext(BookSearchContext);

const [input, setInput] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Kitap Adı..."
        value={input}
      />

      <button type="submit" onClick={() => context.setBookTitle(input)}>
        Ara
      </button>
    </div>
  );
}

export default Header;
