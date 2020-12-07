import './ContentDetail.scss';
import React from 'react';
import PropsTypes from 'prop-types';
import { Modal } from 'antd';
import {
  BankFilled,
  EnvironmentFilled,
  SoundFilled,
} from '@ant-design/icons';
import { JWButton } from '../../';

const ContentDetail = props => {
  const { data, isDisplay } = props;

  const extractLink = (text) => {
    if (text.match(/href="([^"]*)/)) {
      const link = text.match(/href="([^"]*)/)[1];
      return link ? link : null;
    } else {
      return null;
    }

  }

  return (
    <Modal
      title={null}
      visible={isDisplay}
      footer={null}
      className="contentDetailContainer"
    >
      <div className="header">
        <img src={data.company_logo ? data.company_logo : '/default_company.jpg'} alt='job default' />
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
        {extractLink(data.how_to_apply) ? <JWButton href={extractLink(data.how_to_apply)} target="_blank">Apply</JWButton> : null}
      </div>
    </Modal>
  );
};

ContentDetail.propTypes = {
  props: PropsTypes.any,
};

export default ContentDetail;
