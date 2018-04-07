import React, { Component } from 'react';
import RutubeFrame from './RutubeFrame.js'
import { Grid, Segment } from 'semantic-ui-react'

export default class ProcessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {id: props.id, description: props.description};
  }

  render() {
    return (
      <Grid>
      <Grid.Row>
        <Grid.Column width={6}>
          <RutubeFrame id={this.state.id} width="400" height="300"/>
        </Grid.Column>
        <Grid.Column width={10}>
          {this.state.description}
        </Grid.Column>
      </Grid.Row>
      </Grid>
    );
  }
}