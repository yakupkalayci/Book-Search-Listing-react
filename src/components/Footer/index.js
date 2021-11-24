import React from 'react'
import GridLayout from 'react-grid-layout';

function Footer() {
 
    const layout = [
        {i: 'a', x: 0, y: 0, w: 3, h: 4, static: true},
        {i: 'b', x: 4, y: 0, w: 3, h: 4, static:true},
        {i: 'c', x: 8, y: 0, w: 3, h: 4, static:true}]

    return (
        <div className="footer">
           Created By:...
           <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
               
        <div className="layout1" key="a"  >  <a href="http://tympanus.net/codrops/2014/01/14/look-inside-book-preview-with-bookblock/" target="_blank" rel="noreferrer">
        <p className="yazi">
             Book Preview</p>
				</a></div>
        <div className="layout2" key="b"><a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        <p className="yazi">React Js</p>
				</a></div>
        <div className="layout3" key="c" >  <a href="https://developers.google.com/books/?hl=en" target="_blank" rel="noreferrer"> 
       <p className="yazi">Google Books API</p>
				</a></div>
        
      </GridLayout>


        </div>
         
    )
}export default Footer
