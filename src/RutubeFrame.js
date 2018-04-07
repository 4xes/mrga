import React, { Component } from 'react';

export default class ProcessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {id: props.id};
  }

  componentDidMount(){
    this.ifr.onload = () => {
      //this.play()
    }

  }

  sendMessage(message){
    this.ifr.contentWindow.postMessage(JSON.stringify(message), "*");
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

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const src = "//rutube.ru/play/embed/" + this.state.id;
    return (
      <iframe width="720" height="405" src={src}  ref={(f) => this.ifr = f } frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen/>
    );
  }
}
