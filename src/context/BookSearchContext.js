import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useFavourites } from "../hooks/useFavourites";

const BookSearchContext = createContext();


export const BookSearchContextProvider = ({ children }) => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookData, setBookData] = useState([]);
  const [storage, setStorage] = useLocalStorage("lastSearches", []);
  const [favourites, setFavourites] = useFavourites();


  const fetchData = async() => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle.trim() || "harry potter"}&key=AIzaSyBAz_FUoc12g2XYxo1DBiCPmqE84-s3gxQ`
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
    storage,
    setStorage,
    favourites,
    setFavourites
  };

  return (
    <BookSearchContext.Provider value={values}>
      {children}
    </BookSearchContext.Provider>
  );
};

export default BookSearchContext;
