import React, { Component } from 'react';
import ProcessForm from './ProcessForm.js'
import '../App.css';
import logo from '../logo.svg';
import Preview from './Preview.js'
import { connect } from 'react-redux'
import Test from './Test.js'

import {
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);

    console.log(props)
  }

  render() {

    const { value } = this.props;
    return (
      <view>
        <Segment inverted textAlign='center' style={{ minHeight: 400, padding: '1em 0em' }} vertical>
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <ProcessForm/>
          </Container>
        </Segment>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Container>
              <Preview id="68110dae4ac6cc5d692855132a6013fe" description="asdsad"/>
            </Container>
            <p>{value}</p>
            <Test/>
          </Grid>
        </Segment>
      </view>
    );
  }
}


function mapStateToProps(state){
  console.log(state);
  console.log(state.reduceActions);
  return {
    value: state.reduceActions
  }
}

export default connect()(App);
