import './ContentDetail.scss';
import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { Modal, Button } from 'antd';

const ContentDetail = props => {
  const { data } = props;
  return (
    <Modal
      title={data.title}
      visible={props.isDisplay}
      footer={null}
    >
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
      <div dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />
    </Modal>
  );
};

ContentDetail.propTypes = {
  props: PropsTypes.any,
};

export default ContentDetail;
