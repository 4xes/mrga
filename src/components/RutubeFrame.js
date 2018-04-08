import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default class ProcessForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {id: props.id, width: props.width, height: props.height, autoStart: props.autoStart, startFrom: props.startFrom || 0};
  }

  componentDidMount(){
    this.getIFrame().onload = () => {
      //this.play();
      // if ()
      // this.time(this.state.startFrom)
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

  time(time) {
    this.sendMessage({
      type: 'player:setCurrentTime',
      data: {
        time: time
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
    const {id, width, height, autoStart, startFrom} = this.state
    let params = [];
    console.log('startFrom: ' + startFrom);
    if (startFrom && startFrom !== 0) {
      params.push('bmstart=' + startFrom)
    }
    if (autoStart) {
      params.push('autoStart=' + autoStart)
    }
    let query = params.length > 0? '?'+ params.join('&') : '';

    const url = "//rutube.ru/play/embed/" + id + query;
    console.log(url);

    return (
      <Iframe url={url}
              width={width}
              height={height}
              ref={(f) => this.ifr = f}
              id="frame"
              display="initial"
              position="relative"
              allowFullScreen/>
    );
  }
}
