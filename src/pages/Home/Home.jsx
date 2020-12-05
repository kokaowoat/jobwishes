import './Home.scss';
import React, { Component } from 'react';
import { Template } from '../../components';
import { Row, Col, Select, Form, Input, message } from 'antd';

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   ip: '',
    // };
  }

  render() {    
    return (
      <Template>
        <p>Hello</p>
      </Template >
    );
  }
}

export default Home;
