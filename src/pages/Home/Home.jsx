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
        <ContentCard />
      </Template >
    );
  }
}

export default Home;
