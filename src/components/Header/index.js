import React, {useState, useContext} from "react";
import BookSearchContext from "../../context/BookSearchContext";
import Card from "../Card";

function Header() {
const context = useContext(BookSearchContext);

const [input, setInput] = useState("");

function filter(input){
  for(let i=0;i<context.bookData.length;i++){

  if(context.bookData.includes(input) && input != null && input !== ""){
    
    return context.bookData;
    
  }
  
  }
}

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Kitap Adı..."
        value={input}
      />

      <button type="submit" onClick={() => {
      context.setBookTitle(input);
      filter(input);
      }}>
        Ara
      </button>
      <Card book={filter(input)} />
     
    </div>
  );
}

export default Header;
