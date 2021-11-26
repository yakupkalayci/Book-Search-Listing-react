import { createContext, useState, useEffect } from "react";

const BookSearchContext = createContext();


export const BookSearchContextProvider = ({ children }) => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookData, setBookData] = useState([]);

  const fetchData = async() => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle.trim() || "dune"}&key=AIzaSyBAz_FUoc12g2XYxo1DBiCPmqE84-s3gxQ`
    );
    const data = await response.json();
    

    setBookData(data.items)

  }

  useEffect(() => {
    fetchData();
  }, [bookTitle]);

  const values = {
    bookTitle,
    setBookTitle,
    bookData,
  };

  return (
    <BookSearchContext.Provider value={values}>
      {children}
    </BookSearchContext.Provider>
  );
};

export default BookSearchContext;
