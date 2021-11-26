import React from 'react'
import GridLayout from 'react-grid-layout';
import "./index.css"
import bookpreview from '../../img/bookpreview.png'
import react from '../../img/react.png'
import googlebooks from '../../img/googlebooks.png'
function Footer() {
    return (
        <div className="footer">
          <span>Created By :</span>
          <a className="links" href="https://www.kodluyoruz.org">Kodluyoruz</a>
          <div className="grid-container">
            <div>
              <a className="links" href="http://tympanus.net/codrops/2014/01/14/look-inside-book-preview-with-bookblock/" target="_blank" rel="noreferrer">
                <img src={bookpreview}></img>
                <h3>Book Preview</h3>
              </a>
            </div>
            <div>
              <a className="links" href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img src={react}></img>
                <h3>React JS</h3>
              </a>
            </div>
            <div>
              <a className="links" href="https://developers.google.com/books/?hl=en" target="_blank" rel="noreferrer">
                <img src={googlebooks}></img>
                <h3>Google Books API</h3>
              </a>
            </div>
          </div>
        </div>    
    )
}export default Footer
