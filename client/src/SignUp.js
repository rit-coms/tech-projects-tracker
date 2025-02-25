import React from 'react';
import {Row, Input, Label, Button} from 'reactstrap';
import "./App.css";
import addPhoto from "./addphoto.png";

class SignUp extends React.Component {

  render(){
    return (
      <div className='body'>
        <Button> SignUp </Button>
        <Row className='sign-up-title'>
        Sign Up
        </Row>

        <img src={addPhoto} width="105"/>

        <Row>
        <Label for='firstname' className='label-style'>
            First Name
            </Label>
          <Input id='firstname' className='input'>
          </Input>
        </Row>

        <Row>
        <Label for='lastname' className='label-style'>
            Last Name
            </Label>
          <Input id='lastname'className='input'>
          </Input>
        </Row>

        <Row>
        <Label for='email' className='label-style'>
            RIT Email
            </Label>
          <Input id='email'className='input'>
          </Input>
        </Row>

        <Row>
        <Label for='password' className='label-style'>
            Password
            </Label>
          <Input id='password'className='input'>
          </Input>
        </Row>
      </div>
    );
  }
}

export default SignUp;
