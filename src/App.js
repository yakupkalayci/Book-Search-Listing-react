import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";

import { BookSearchContextProvider } from "./context/BookSearchContext";

function App() {
  return (
    <BookSearchContextProvider>
      <div className="App">
        <Header />
        
        <Footer />
      </div>
    </BookSearchContextProvider>
  );
}

export default App;
