import './ContentCard.scss';
import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import {
  CalendarFilled,
  ShoppingFilled,
  EnvironmentFilled,
  SoundFilled
} from '@ant-design/icons';
import { formatDate } from '../../../helpers';

const ContentCard = props => {
  const { data } = props;


  return (
      {/* Header Section */}
      <div className="header">
        <img src={data.company_logo ? data.company_logo : '/default_company.jpg'} />
        <div className="title">
          <span className="name">{data.company}</span>
          <span className="createdAt"><CalendarFilled /> {formatDate(data.created_at)}</span>
        </div>
      </div>
      {/* Image Section */}
      <div className="imageSection">
        <img src={data.company_logo ? data.company_logo : '/default_company.jpg'} />
      </div>
      {/* Short Detail ex. title, place, type*/}
      <div className="detailContainer">
        <div className="detail">
          <span><ShoppingFilled /> </span>
          <span className="label">{data.title}</span>
        </div>
        <div className="detail">
          <span><EnvironmentFilled /> </span>
          <span className="label">{data.location}</span>
        </div>
        <div className="detail">
          <span><SoundFilled /> </span>
          <span className="label">{data.type}</span>
        </div>
      </div>
    </div>
  );
};

ContentCard.propTypes = {
  props: PropsTypes.any,
};

export default ContentCard;
