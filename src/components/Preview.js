import React, { Component } from 'react';
import RutubeFrame from './RutubeFrame.js'
import { Grid, Header} from 'semantic-ui-react'

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {id: props.id, title: props.title || '',text: props.text || ''};
  }

  render() {
    return (
      <Grid>
      <Grid.Row>
        <Grid.Column width={6}>
          <RutubeFrame id={this.state.id} width="400" height="300"/>
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h2'>{this.state.title}</Header>
          {this.state.text}
        </Grid.Column>
      </Grid.Row>
      </Grid>
    );
  }
}
