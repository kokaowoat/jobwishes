import './Template.scss';
import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { Layout, Input } from 'antd';

import {
  SearchOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

const Template = props => {
  const [searchContent, setSearchContent] = useState(props.description ? props.description : null);
  const onChangeSearchBox = e => {
    if (e.target.value && e.target.value !== "") {
      setSearchContent(e.target.value);
    } else {
      setSearchContent(null);
    }
  }
  const handleSearch = e => {
    if (searchContent) {
      props.navigate(`/filter?description=${searchContent}`);
    } else {
      props.navigate('/');
    }
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
            placeholder="search"
            suffix={suffix}
            onPressEnter={handleSearch}
            onChange={onChangeSearchBox}
            className="searchBox"
            value={searchContent}
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
  navigate: PropsTypes.func.isRequired,
  description: PropsTypes.string,
  children: PropsTypes.any,
};

export default Template;
