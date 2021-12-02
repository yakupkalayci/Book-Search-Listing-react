import React from 'react'
import "./index.css"
import github from '../../img/GitHub.jpg'
import react from '../../img/react.png'
import googlebooks from '../../img/googlebooks.png'
function Footer() {
    return (
        <div className="footer">
          <span>Created By :</span>
          <a className="links" href="https://github.com/yakupkalayci" target="_blank">Yakup KALAYCI</a>
          <a className="links" href="https://github.com/7Auri" target="_blank">Büşra YEŞİLALİOĞLU</a>
          <a className="links" href="https://github.com/esincaglakiral" target="_blank">Esin Çağla KIRAL</a>
          
          <div className="grid-container">
            <div>
              <a className="links" href="https://github.com/yakupkalayci/Book-Search-Listing-react" target="_blank" rel="noreferrer">
                <img id="github" src={github}></img>
                <h3>Github</h3>
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
