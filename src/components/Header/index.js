import React, {useState, useContext} from "react";
import BookSearchContext from "../../context/BookSearchContext";
import Card from "../Card";
import "./index.css"

function Header() {
const context = useContext(BookSearchContext);

const [input, setInput] = useState("");

// function filter(input){
//   for(let i=0;i<context.bookData.length;i++){

//   if(context.bookData.includes(input) && input != null && input !== ""){
    
//     return context.bookData;
    
//   }
  
//   }
// }

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
      {/* <Card book={filter(input)} /> */}
     
    </div>
    </div>

  );
}

export default Header;
