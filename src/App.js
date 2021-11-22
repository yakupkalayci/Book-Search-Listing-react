import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { BookSearchContextProvider } from "./context/BookSearchContext";

function App() {
  return (
    <BookSearchContextProvider>
      <div className="App">
        <Header />
        <Card />
        <Footer />
      </div>
    </BookSearchContextProvider>
  );
}

export default App;
