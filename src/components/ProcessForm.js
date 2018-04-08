import React, { Component } from 'react';
import { Button, Form, Icon, Container, Header} from 'semantic-ui-react'
import Backend from '../api/Backend.js'
import { connect } from 'react-redux';
import {inProgress, showResult, startProcess, errorProcess} from "../actions/Actions";

class ProcessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {value: 'https://rutube.ru/video/25b6c4d11395048b3d16a7e3e7681add'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    Backend.startProcess(this.state.value, (processId) => {
        this.props.handler(inProgress(processId));
        Backend.checkProcess(processId, (data) =>{
          this.props.handler(showResult(data))
        })
      },
      () => {
        this.props.handler(errorProcess())
      })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header
            as='h2'
            content='Make rutube great again.'
            inverted
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}
          />
          <Form.Field>
            <input placeholder='Url on rutube video' style={{
              fontSize: '1.3em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}  value={this.state.value} onChange={this.handleChange} />
          </Form.Field>
          <Button type='submit' color="red" size='huge'>
            Make
            <Icon name='right arrow' />
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect()(ProcessForm);