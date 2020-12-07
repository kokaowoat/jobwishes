import './Loading.scss';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined className="loading" spin />;
const Loading = props => {
  return (
    <div className="loadingContainer">
      <Spin className="loadingIcon" indicator={antIcon} />
    </div>
  );
};

export default Loading;
