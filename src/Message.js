import React, { Component } from 'react';
import {Button , ButtonGroup} from './bootstrap';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  getButtons() {
    return (
      <ButtonGroup aria-label="Basic example">
      <Button onClick={() => {
          this.props.setName('hamada')
      }} variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
    );
  }
  render() {
    return (
      <div className="App">
      {this.getButtons()}
      </div>
    );
  }
}

export default Message;
