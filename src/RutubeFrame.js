import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default class ProcessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {id: props.id};
  }

  componentDidMount(){
    this.getIFrame().onload = () => {
      this.play();
    }
  }

  getIFrame() {
    return this.ifr.refs.iframe
  }

  sendMessage(message){
    this.getIFrame().contentWindow.postMessage(JSON.stringify(message), "*");
  }

  change(id) {
    this.sendMessage({
      type: 'player:changeVideo',
      data: {
        id: id
      }
    })
  }

  play (){
    this.sendMessage({
      type: 'player:play',
      data: {}
    })
  }

  render() {
    const url = "//rutube.ru/play/embed/" + this.state.id;
    return (
      <Iframe url={url}
              width="720px"
              ref={(f) => this.ifr = f}
              id="frame"
              height="450px"
              display="initial"
              position="relative"
              allowFullScreen/>
    );
  }
}
