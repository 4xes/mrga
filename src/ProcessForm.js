import React, { Component } from 'react';
import RutubeFrame from './RutubeFrame.js'

export default class ProcessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <view>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" placeholder="Введите ссылку на Rutube" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <RutubeFrame id="68110dae4ac6cc5d692855132a6013fe"/>
      </view>
    );
  }
}
