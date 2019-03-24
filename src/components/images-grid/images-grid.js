import React, { Component } from 'react';
import './images-grid.css';
import axios from 'axios';
import Image from 'react-bootstrap/Image'

class ImagesGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            memes: [],
        }
    }

    /**
     * @returns {promise<any>}
     * calls the get memes and sets the state of the memes array.
     */
    componentDidMount = async () => {
        const data = await axios.get(' https://api.imgflip.com/get_memes');
        const memes = data.data.data.memes;
        this.setState({ memes });
    }
    /**
 * @returns {jsx} containing array of <div class="column"></div> 
 * each contains 5 images
 * check this for your reference : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_grid_responsive
 */
    imagesInColumns = () => {
        let imagesArray = [];
        let columnArray = [];
        this.state.memes.forEach((val, index) => {

            imagesArray.push(<Image className="img" src={val.url} key={index} />)
            if (index % 5 === 0) {
                columnArray.push(<div key={index} className="column">{imagesArray}</div>)
                imagesArray = [];
            }
        })
        // removing the first element to make the grid
        // look better. try it without splicing to see the difference.
        return columnArray.splice(1);
    }
    render() {
        return (
            <div className="row">
                {this.imagesInColumns()}
            </div>
        );
    }
}

export default ImagesGrid;