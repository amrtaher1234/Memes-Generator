import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Image from 'react-bootstrap/Image'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memes : [],
    }
  }
  /**
   * @returns {promise<any>}
   * calls the get memes and sets the state of the memes array.
   */
  componentDidMount = async () => {
   const data = await axios.get(' https://api.imgflip.com/get_memes');
   const memes = data.data.data.memes;
   this.setState({memes});
  }

  /**
   * @returns {jsx} containing array of <div class="column"></div> 
   * each contains 5 images
   * check this for your reference : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_grid_responsive
   */
  imagesInColumns = () => {
    let imagesArray = [];
    let columnArray = [];
    this.state.memes.map((val , index) => {
      
      imagesArray.push(<Image className="img" src = {val.url} key = {index}  />)
      if (index % 5 == 0) {
        columnArray.push(<div className="column">{imagesArray}</div>)
        imagesArray = [];
      }
    })
    columnArray.push(<div className="column">{imagesArray}</div>);
    return columnArray.splice(1);
  }
  render() {
    return (
      <div className="App container-fluid">
      <div className="row">
      {this.imagesInColumns()}
      </div>
      </div>
    );
  }
}
// friendly advice. create a new component to just return the images
// instead of writing it in the App.js, for example an ImageGrid Component with its own css.

export default App;
