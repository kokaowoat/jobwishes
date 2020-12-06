import './JWButton.scss';
import React from 'react';
import PropsTypes from 'prop-types';
import { Button } from 'antd';

const JWButton = props => {
  return (
    <Button className="JWButton" {...props}>
      {props.children}
    </Button>
  );
};

JWButton.propTypes = {
  props: PropsTypes.any,
  children: PropsTypes.any,
};

export default JWButton;
