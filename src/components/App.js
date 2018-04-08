import React, { Component } from 'react';
import ProcessForm from './ProcessForm.js'
import '../App.css';
import logo from '../logo.svg';
import Preview from './Preview.js'
import RutubeFrame from './RutubeFrame.js'
import { connect } from 'react-redux'
import Chart from './Chart.js'
import {BASE_URI} from '../api/Backend.js'
import { Modal, Header, Button, Icon, Item, Rating} from 'semantic-ui-react'

import {
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react'
import reduceActions from "../reducers/formReducer";
import PlayerPortal from "./PlayerPortal.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {values: {}};

    this.handler = this.handler.bind(this)
  }

  handler(action) {
    let values = reduceActions(this.state.values, action);
    console.log(values);
    this.setState({values: values})
  }

  render() {
    const {id,features, recommendations, scenes} = this.state.values;

    const data = id ? (
      <Segment vertical>
        <Grid style={{ padding: '4em 0em 0em 2em' }} container stackable verticalAlign='middle'>
          <Container>

            <Preview
              id={id}
              title={features.title}
              text={features.text}
            />

          </Container>
        </Grid>
        <Container style={{ padding: '4em 0em' }} verticalAlign='middle'>
          <Header as='h1'>Аналитика</Header>
          <Chart data={features['video_atraction_on_timeline']}/>
        </Container>
        <Container style={{ padding: '4em 0em' }}>
          <Header as='h1'>Рекомендации</Header>
          <Grid centered columns={4}>
            {recommendations.map(recommendation => {
              return (
                <Grid.Column textAlign='center'>
                  <RutubeFrame id={recommendation.id} width="260" height="180"/>
                  <Header as='h3'>{recommendation['explanation']}</Header>
                </Grid.Column>
              )})
            }

          </Grid>
          <Header as='h1'>Сцены</Header>
          <Item.Group divided>
            {scenes.map(scene => {
              let features = scene['features'];
              let src = BASE_URI + '/' + scene['path_to_preview'];
              let description = 'Описание: ' + features['description'];
              let genre = 'Жанр: ' + features['genre'];
              let beauty = features['beauty'] * 2;
              let hype= features['haypost'] * 2;
              let startFrom = scene['bmstart'] / 1000;
              return (
                <Item>
                  <Item.Image size='big' src={src}/>
                  <Item.Content>
                    <Item.Meta>{description}</Item.Meta>
                    <Item.Meta>{genre}</Item.Meta>
                    <Item.Extra>Привлекательность</Item.Extra>
                    <Item.Description>
                        <Rating disabled icon='heart' defaultRating={beauty} maxRating={10}/>
                    </Item.Description>
                    <Item.Extra>Хайповость</Item.Extra>
                    <Item.Description>
                      <Rating disabled icon='star' defaultRating={hype} maxRating={10}/>
                      <br />
                      <PlayerPortal id={id} startFrom={startFrom}/>
                    </Item.Description>
                  </Item.Content>
                </Item>
              )})
            }
          </Item.Group>
        </Container>
      </Segment>
    ) : (
      <div/>
    );

    return (
      <div>
        <Segment inverted textAlign='center' style={{ minHeight: 400, padding: '1em 0em' }} vertical>
          <Header as="h1">Oilstone</Header>
          <Container>
            <ProcessForm handler = {this.handler}/>
          </Container>
        </Segment>
        {data}
        {/*<p>{JSON.stringify(this.state.values)}</p>*/}
      </div>
    );
  }
}

export default App;
