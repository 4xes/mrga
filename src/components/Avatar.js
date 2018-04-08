import React, { Component } from 'react'
import { Container,Image, Transition, Icon } from 'semantic-ui-react'
import {selectUser} from "../actions/Actions";

export default class Avatar extends Component {
  constructor(props){
    super(props);

    this.state = {userId: props.userId, avatar: props.avatar, isSelected: props.isSelected};

    this.handleClick = this.handleClick.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }


  handleClick() {
    this.props.handler(selectUser(this.state.userId))
  }

  render() {
    return (
      <Container>
      <Transition visible={this.props.isSelected} animation='scale' duration={500}  >
        <Icon link color="green" name="check circle"/>
      </Transition>
      <Image src={this.state.avatar} size='small' circular onClick={this.handleClick} />
      </Container>
    )
  }
}