import './Template.scss';
import React from 'react';
import PropsTypes from 'prop-types';
import { Layout, Drawer, Menu, Row, Col } from 'antd';
import {
  HomeFilled,
  SearchOutlined
} from '@ant-design/icons';

const { Header, Content } = Layout;

const Template = props => {
  const horizontalMenu = (
    <Menu mode="horizontal">
      <Menu.Item key="home" className="menuIconContainer">
        <HomeFilled className="menuIcon" />
      </Menu.Item>
      <Menu.Item key="search" className="menuIconContainer">
        <SearchOutlined className="menuIcon" />
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout id="top" className="layout" >
      <Header id="navbar" className="navbar">
        <div className="logo">
          <img src='/logo.jpg' />
        </div>
        <div className="menuList">
          {horizontalMenu}
        </div>
      </Header>
      <Content>
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
