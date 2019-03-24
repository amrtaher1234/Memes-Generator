import React, { Component } from 'react';
import './App.css';
import ImagesGrid from './components/images-grid/images-grid'
import Navigation from './components/navigation/navigation';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="">
      <Navigation />
      <div className="container-fluid">
      <ImagesGrid />
      </div>
      </div>
    );
  }
}
// friendly advice. create a new component to just return the images
// instead of writing it in the App.js, for example an ImageGrid Component with its own css.

export default App;
