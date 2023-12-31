import React,{useState, useEffect} from 'react' ;

import twitterIcon from  '../logo-white.png';
import tumblerIcon from '../logo-white.png'

const Quotes=()=>{
 const [quote, setQuote]= useState('');
 const [author,setAuthor]= useState('');

 useEffect(()=>{
    getQuote()
 },[]);

 const getQuote=()=>{
    let url ='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
    .then(res=>res.json())
    .then(data=>
        {let  dataQuotes=data.quotes;
        let randomNum=Math.floor(Math.random() * dataQuotes.length);
        let randomQuote= dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        // console.log(randomQuotes);
    })
 }

 const handleClick=()=>{
    getQuote();
 }
 
     return (
       
       <div id="quote-box">
          <div id="text"><p>{quote}</p></div>
            <div id="author"><p>{author}</p></div>

            <div id="buttons"> 
                <div className='social-media'>
                    <a href="" id="tweet-quote"> 
                     <span><img src={twitterIcon} alt=""/></span>
                    </a>

                    {/* <a href="" id="tumlr-quote"> 
                     <span><img src={tumblerIcon} alt=""/></span>
                    </a> */}
                </div>

                <button onClick={handleClick} id="new-quote">New Quote</button>

            </div>
        </div>
     )
}

export  default Quotes