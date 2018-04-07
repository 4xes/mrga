import React, { Component } from 'react';
import ProcessForm from './ProcessForm.js'
import './App.css';
import logo from './logo.svg';
import Preview from './Preview.js'
import {
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react'

class App extends Component {
  render() {
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
            {/*<Container>*/}
              {/*<Preview id="68110dae4ac6cc5d692855132a6013fe" description="asdsad"/>*/}
            {/*</Container>*/}
          </Grid>
        </Segment>
      </view>
    );
  }
}

export default App;
