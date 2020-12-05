import './ContentDetail.scss';
import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { Modal, Button } from 'antd';
import {
  BankFilled,
  EnvironmentFilled,
  SoundFilled,
  ProfileFilled,
} from '@ant-design/icons';
import { JWButton } from '../../';

const ContentDetail = props => {
  const { data, isDisplay } = props;
  // console.log('data.how_to_apply', data.how_to_apply);
  return (
    <Modal
      title={null}
      visible={isDisplay}
      footer={null}
      className="contentDetailContainer"
    >
      <div className="header">
        <img src={data.company_logo ? data.company_logo : '/default_company.jpg'} />
        <span className="title">{data.title}</span>
      </div>
      <hr />
      <div className="detail">
        <span><BankFilled /> </span>
        <span className="description">{data.company}</span>
      </div>
      <div className="detail">
        <span><EnvironmentFilled /> </span>
        <span className="description">{data.location}</span>
      </div>
      <div className="detail">
        <span><SoundFilled /> </span>
        <span className="description">{data.type}</span>
      </div>
      <hr />
      <div className="detail">
        <span className="label">Description</span>
        <div className="content" dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
      <hr />
      <div className="footer">
        <JWButton href={data.company_url} target="_blank">Visit Company</JWButton>
        <JWButton>Apply</JWButton>
      </div>
      {/* TODO concat to link */}
      {/* <div dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />       */}
    </Modal>
  );
};

ContentDetail.propTypes = {
  props: PropsTypes.any,
};

export default ContentDetail;
