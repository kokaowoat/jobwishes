import './Template.scss';
import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { Layout, Input } from 'antd';

import {
  SearchOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

const Template = props => {
  const [searchContent, setSearchContent] = useState(null);

  const onChangeSearchBox = e => {
    console.log(e.target.value);
    if (e.target.value && e.target.value !== "") {
      setSearchContent(e.target.value);
    } else {
      setSearchContent(null);
    }
  }
  const handleSearch = e => {
    console.log('searchContent', searchContent);
    // TODO check searchContent is null or not
  }

  const suffix = (
    <SearchOutlined
      className="searchIcon"
      onClick={handleSearch}
    />
  );

  return (
    <Layout id="top" className="layout" >
      <Header id="navbar" className="navbar">
        <div className="logo">
          <a href="/">
            <img src='/logo.jpg' alt='job' />
          </a>
        </div>
        <div className="menuList">
          <Input
            placeholder="input search text"
            suffix={suffix}
            onPressEnter={handleSearch}
            onChange={onChangeSearchBox}
            className="searchBox"
          />
        </div>
      </Header>
      <Content className="contentContainer">
        {props.children}
      </Content>
    </Layout >
  );
};

Template.propTypes = {
  props: PropsTypes.any,
  children: PropsTypes.any,
};

export default Template;
