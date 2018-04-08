import React, { Component } from 'react'
import { Icon, Button, Segment, TransitionablePortal } from 'semantic-ui-react'
import RutubeFrame from './RutubeFrame.js'

export default class PlayerPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {id: props.id, open: false, startFrom: props.startFrom };
  }

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const { id, open, startFrom} = this.state;

    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
        trigger={(
          <Button style={{marginTop:10}}>
            Play
            <Icon name='right play' />
          </Button>
        )}
      >
        <Segment style={ {position: 'fixed', top: '25%', left: '25%', zIndex: 1000 }}>
          <div id={id + Math.random()} key={id + Math.random()}>
            <RutubeFrame key={id + Math.random()} id={id} width="720" height="480" autoStart startFrom={this.state.startFrom} />
          </div>
        </Segment>
      </TransitionablePortal>
    )
  }
}