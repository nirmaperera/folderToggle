import React, { Component } from 'react';

import './App.css';


class Folder extends Component{
   constructor(props) {
    super(props);
    this.state = {isToggle: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({isToggle: !this.state.isToggle});
  }

  render() { 
    return (
      <div className="myFiles">
        <button
          className="btn"
          onClick={this.handleClick}
        >
          Toggle
        </button>
        <h1 className="folerTitle">Home</h1>
        
        <div
        // display(block) or hide (none)
          style={{display: this.state.isToggle ? 'block': 'none'}}
          className="container"
        >
          <li>File1</li>
          <li>File2</li>
          <li>File3</li>
         
        </div>
      </div>
      );
   }
}


//main component

class App extends Component {
  render() {
    return (
      <div className="App">
           <Folder/>
      </div>
    );
  }
}



export default App;
