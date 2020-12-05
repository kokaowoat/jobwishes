import './Home.scss';
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import {
  Template,
  ContentCard
} from '../../components';

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
        <Row>
          <Col xs={24} sm={12} md={8} lg={8}>
            <ContentCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <ContentCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <ContentCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <ContentCard />
          </Col>
        </Row>        
      </Template >
    );
  }
}

export default Home;
