import React, {Component} from 'react';
import {Grid, Input, Transition, Button, Form, Icon, Container, Header} from 'semantic-ui-react'
import Backend from '../api/Backend.js'
import {connect} from 'react-redux';
import {showResult, errorProcess, inProgress} from "../actions/Actions";
import Avatar from "./Avatar.js";
import reduceActions from "../reducers/formReducer";

const users = [
  {
    id: 0,
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
    name: "Alexey"
  },
  {
    id: 1,
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    name: "Nikita"
  },
  {
    id: 2,
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
    name: "Dmitry"
  }];


class ProcessForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: users[0].id,
      value: 'https://rutube.ru/video/25b6c4d11395048b3d16a7e3e7681add',
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handler = this.handler.bind(this)
  }

  handler(action) {
    const {isLoading, value} = this.state;
    this.setState({value: value, isLoading: isLoading, userId: action.userId})
  }

  handleChange(event) {
    this.setState({value: event.target.value, isLoading: this.state.isLoading});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.isLoading) {
      this.setLoading(true);
      Backend.startProcess(this.state.value, (processId) => {
          Backend.checkProcess(processId, () => {
            //this.props.handler(inProgress())
          }, (data) => {
            this.setLoading(false);
            this.props.handler(showResult(data))
          })
        },
        () => {
          this.setLoading(false);
          this.props.handler(errorProcess())
        })
    } else {
      this.setLoading(false);
      Backend.stopCheckProcess()
    }

  }

  handleClick() {
    console.log('onClose');
    this.setLoading(false);
    Backend.stopCheckProcess()
  }

  setLoading(isLoading) {
    if (this.state.value !== isLoading) {
      this.setState({value: this.state.value, isLoading: isLoading});
    }
  }

  render() {
    const {userId, isLoading, value} = this.state;
    return (
      <Container>
        <Grid centered columns={5}>
          {users.map(user => {
            return (
              <Grid.Column textAlign='center'>
                <Avatar handler={this.handler} userId={user.id} avatar={user.avatar} isSelected={userId === user.id}/>
              </Grid.Column>
            )
          })
          }

        </Grid>
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
            <div style={{minHeight: '1em'}}>
              <Transition visible={isLoading} animation='scale' duration={500}>
                <div onClick={this.handleClick}>
                  <Icon link inverted name="close"/>
                </div>
              </Transition>
            </div>
            <Input
              disabled={isLoading}
              placeholder='Url on rutube video'
              style={{
                fontSize: '1.3em',
                fontWeight: 'normal',
                marginTop: '1.5em',
              }} value={value} onChange={this.handleChange}/>
          </Form.Field>
          <Button type='submit' color="red" size='huge' loading={isLoading}>
            Make
            <Icon name='right arrow'/>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect()(ProcessForm);