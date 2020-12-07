import './Filter.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'antd';
// import { useParams } from "react-router-dom";

import { fetchFilterJob } from '../../actions';
import {
  Template,
  ContentCard,
  Loading
} from '../../components';

class Filter extends Component {
  constructor(props) {
    super(props);
    const search = this.props.location.search;
    const params = new URLSearchParams(search);

    this.state = {
      isLoading: true,
      filterJobNextPage: 2,
      filterJobs: [],
      description: params.get('description'),
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleInfiniteScroll);
    this.props.dispatch(fetchFilterJob(1, this.state.description));
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: false });
    // if change search 
    if (nextProps.location && nextProps.location !== this.props.location) {
      const search = nextProps.location.search;
      const params = new URLSearchParams(search);
      const description = params.get('description');
      this.setState({
        isLoading: true,
        filterJobNextPage: 2,
        filterJobs: [],
        description,
      });
      nextProps.dispatch(fetchFilterJob(1, description));
    }
    // if loaded more filtered jobs
    if (nextProps.filterJobs && nextProps.filterJobs !== this.props.filterJobs) {
      const newFilterJobList = this.state.filterJobs.concat(nextProps.filterJobs);
      this.setState({ filterJobs: newFilterJobList });
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleInfiniteScroll);
  }

  handleInfiniteScroll = () => {
    // Fetch when scroll to bottom of page
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.setState({ isLoading: true });
      this.props.dispatch(fetchFilterJob(this.state.filterJobNextPage, this.state.description));
      this.setState({ filterJobNextPage: this.state.filterJobNextPage + 1 });
    }
  }

  render() {
    let filteredContentcardList = this.state.filterJobs ? this.state.filterJobs.map((data, index) =>
      <Col key={`${data.id}-${index}`} xs={24} sm={8} md={8} lg={8}>
        <ContentCard data={data} />
      </Col>
    ) : null;
    return (
      <Template navigate={this.props.history.push} description={this.state.description}>
        <div className="filterContainer">
          {this.state.isLoading ? <Loading /> : null}
          <div>
            <span className="labelResult">Your result for: </span>
            <span className="content">{this.state.description}</span>
          </div>
          {this.state.filterJobs.length > 0 ?
            <Row>
              {filteredContentcardList}
            </Row>
            :
            <div className="notFound">
              <span>Search not found</span>
            </div>
          }
        </div>
      </Template >
    );
  }
}

const mapStateToProps = state => {
  const { filterJobs } = state;
  return {
    filterJobs: filterJobs.data
  };
};

export default connect(mapStateToProps)(Filter);
