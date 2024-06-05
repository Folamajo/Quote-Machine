import React, { useState, useEffect } from 'react';
import './App.css';
import Quotes from './quotes.json';
import setBodyColor from './setBodyColor';

// import {Helmet} from 'react-helmet';


function App() {




   const [quote, setQuote] = useState("");
   const [author, setAuthor] = useState("");
   const [color, setColor] = useState("")
   let quotes = Quotes.quotes
   // let fontColor = color;


   

   const newQuote = () => {

      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setQuote(randomQuote.quote)
      setAuthor(randomQuote.author)

      var letters = "0123456789ABCDEF";
      var newColor = '#';

      for (let i= 0; i < 6; i++){
         newColor += letters[Math.floor(Math.random() * 16)]
         console.log(newColor)
      }
      setColor(newColor)
   }

   useEffect(() => {
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setQuote(randomQuote.quote)
      setAuthor(randomQuote.author)

      var letters = "0123456789ABCDEF";
      var newColor = '#'

      for (let i= 0; i < 6; i++){
         newColor += letters[Math.floor(Math.random() * 16)]
         console.log(newColor)
      }
      setColor(newColor)
   
   }, [])
   
   
   const changeColor = {
      color : color,
      transition: "color 1.5s",
   }

   const buttonStyle = {
      backgroundColor : color,
      color: "white",
      borderWidth: 0,
      borderRadius: 2,
      transition: "background-color 1.5s",
   }

  
   //Imported function 
   setBodyColor({color: color})

   return (
   <>
      <div id="quote-box" style = {{backgroundColor : "white", border: "none"}}>
         
         <div id="quote" style ={changeColor}>
            <p id = "text" >
               <i class="fa fa-quote-left"></i> {quote}
            </p>

            <p id="author">
               - {author}
            </p>
         </div>
         <div id ="buttons">
            <div id="links">
               <a id="tweet-quote" target ="_blank" href="twitter.com/intent/tweet">
                  <button  style ={buttonStyle}>
                     <i class="fa fa-twitter fa-lg"></i>
                  </button>
               </a>   
               <a target ="_blank" href="https://www.tumblr.com/" >
                  <button id="tumblr" style ={buttonStyle}>
                  <i class="fa fa-tumblr fa-lg"></i>

                  </button>
               </a> 
            </div>
            <button id= "new-quote" onClick ={newQuote} style ={buttonStyle}>New Quote</button>
         </div>
      </div>
      <p id = "footer">by Fola Majoyegbe</p>
      </>
   );
}
export default App;







   // function getRandomColor(){
   //    var letters = "0123456789ABCDEF";
   //    var color = '#'

   //    for (let i= 0; i < 6; i++){
   //       color += letters[Math.floor(Math.random() * 16)]
   //       console.log(color)
   //    }
   //    return color;
   // }

   // getRandomColor();