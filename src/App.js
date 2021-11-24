import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { BookSearchContextProvider } from "./context/BookSearchContext";

function App() {
  return (
    <BookSearchContextProvider>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </BookSearchContextProvider>
  );
}

export default App;
