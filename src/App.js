import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      quotes: [
        { text: "Quote 1", author: "Author 1" },
        { text: "Quote 2", author: "Author 2" },
        { text: "Quote 3", author: "Author 3" },
        { text: "Quote 4", author: "Author 4" },
        { text: "Quote 5", author: "Author 5" },
      ],
      currentQuote: "", 
      currentAuthor: "",
      backgroundColor: "",
      color: "",
    };
  }

  componentDidMount() {
    // Call getRandomQuote to display a random quote when the component loads
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    const {quotes} = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = this.getRandomColor(); // Generate a random color
    this.setState({
      currentQuote: quotes[randomIndex].text,
      currentAuthor: quotes[randomIndex].author,
      backgroundColor: randomColor, // Set the background color
      color: randomColor,
    });
  };

  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render(){
    const {currentQuote, currentAuthor, backgroundColor, color  } = this.state;
    return(
        <div id="all" style={{ backgroundColor }}>
          <div id="quote-box" >
            <div id="text" style={{ color }}>"{currentQuote}</div>
            <div id="author" style={{ color }}>- {currentAuthor}</div>
            <div className='buttons'>
              <button id="new-quote" className='button' onClick={this.getRandomQuote} style={{ backgroundColor }}>New quote</button>
              <a id="tweet-quote" className='button' href='twitter.com/intent/tweet' target="_blank" style={{ backgroundColor }}>&#x1F54A;</a>
            </div>
          </div>
        </div>
      
    )
  }

}

export default App;
