import './App.css';
import React, { Component } from 'react';
import Hero from './field.jpg';


const HeroStyle = {
    maxWidth: "100px",
    maxHeight: "100px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
};

class App extends Component {
    render() {
        return (
          <div className = "herobg" style={HeroStyle}>
            <img src = {Hero}/>
          </div>
        );
    }
}

export default App;
