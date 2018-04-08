import React, { Component } from 'react';
import RutubeFrame from './RutubeFrame.js'
import { Grid, Header, Statistic } from 'semantic-ui-react'

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title || '',
      text: props.text || '',
      hype: props.hype,
      beauty: props.beauty};
  }

  static colorBy(value) {
    let color;

    if (value >= 0) {
      color = 'red'
    }
    if (value >= 3) {
      color = 'orange'
    }
    if (value >= 5) {
      color = 'yellow'
    }
    if (value >= 7) {
      color = 'olive'
    }
    if (value >= 8) {
      color = 'green'
    }
    return color
  }

  render() {

    const {id, title, text, hype, beauty} = this.state;
    console.log('beauty ' + beauty);
    return (
      <Grid>
      <Grid.Row>
        <Grid.Column width={6}>
          <RutubeFrame key={id} id={id} width="400" height="300"/>
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h2'>{title}</Header>
          {text}
          <br />
          {hype ? (
            <Statistic color={Preview.colorBy(hype)}>
              <Statistic.Value>{hype.toFixed(1)}</Statistic.Value>
              <Statistic.Label>Хайповость</Statistic.Label>
            </Statistic>):
            ''}
          {beauty ? (
            <Statistic color={Preview.colorBy(beauty)}>
              <Statistic.Value>{beauty.toFixed(1)}</Statistic.Value>
              <Statistic.Label>Привлекательность</Statistic.Label>
            </Statistic>):
            ''}
        </Grid.Column>
      </Grid.Row>
      </Grid>
    );
  }
}
