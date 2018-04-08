import React, { Component } from 'react'
import { Container,Image, Transition, Icon } from 'semantic-ui-react'
import {selectUser} from "../actions/Actions";

export default class Avatar extends Component {
  constructor(props){
    super(props);

    this.state = {userId: props.userId, avatar: props.avatar, isSelected: props.isSelected};

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.handler(selectUser(this.state.userId))
  }

  render() {
    return (
      <Container>
        <div style={{width: '1em', height: '1em'}}>
          <Transition visible={this.props.isSelected} animation='scale' duration={500}  >
          <Icon link size='large' color="green" name="check circle"/>
        </Transition>
        </div>
        <div style={{left: 0, right: 0}}>
            <Image src={this.state.avatar} size='small' circular onClick={this.handleClick} />
        </div>
      </Container>
    )
  }
}