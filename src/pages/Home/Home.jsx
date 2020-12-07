import './Home.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'antd';

import { fetchGetJob } from '../../actions';
import {
   Template,
   ContentCard,
   Loading
} from '../../components';
import { jobs } from '../../reducers/Job';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         jobNextPage: 2,
         jobs: [],
      }
   }

   componentDidMount = () => {
      window.addEventListener('scroll', this.handleInfiniteScroll);
      this.props.dispatch(fetchGetJob(1));
   }

   UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({ isLoading: false });
      if (nextProps.jobs && nextProps.jobs !== this.props.jobs) {
         const newJobList = this.state.jobs.concat(nextProps.jobs);
         console.log('newJobList', newJobList);
         this.setState({ jobs: newJobList });
      }
   }

   handleInfiniteScroll = () => {
      // Fetch when scroll to bottom of page
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
         this.setState({ isLoading: true });
         this.props.dispatch(fetchGetJob(this.state.jobNextPage));
         this.setState({ jobNextPage: this.state.jobNextPage + 1 });
      }
   }

   render() {
      let contentcardList = this.state.jobs ? this.state.jobs.map((data,index) =>
         <Col key={`${data.id}-${index}`} xs={24} sm={8} md={8} lg={8}>
            <ContentCard data={data} />
         </Col>
      ) : null;
      return (
         <Template>
            { this.state.isLoading ? <Loading /> : null}
            <Row>
               {contentcardList}
            </Row>
         </Template >
      );
   }
}

const mapStateToProps = state => {
   const { jobs } = state;
   return { jobs: jobs.data };
};

export default connect(mapStateToProps)(Home);
