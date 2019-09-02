import React from 'react';
import { Layout, Menu, Button, PageHeader, Dropdown } from 'antd';
import { graphql, createRefetchContainer } from 'react-relay';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import 'antd/dist/antd.css';

import createQueryRenderer from './relay/createQueryRenderer';
import { App_query as AppQuery } from './__generated__/App_query.graphql';
import { logout, isLoggedIn } from './security/authentication';

const { Content, Footer } = Layout;

interface IProps {
  children?: React.ReactNode;
  history?: any;
  location: any;
  query?: AppQuery;
  relay?: any;
}

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const refetch = (relay: any) => {
  relay.refetch(
    {},
    null,
    () => {
      console.log('Refetch done');
    },
    { force: true }
  );
};

const handleMenuClick = (event: any, history: any, relay: any) => {
  if (event.key === '0') {
    logout();
    history.push('/');
    refetch(relay);
  }
};

const menu = (history: any, relay: any) => (
  <Menu onClick={(event: any) => handleMenuClick(event, history, relay)}>
    <Menu.Item key="0" disabled={!isLoggedIn()}>
      {isLoggedIn() && <LinkStyled to={'/'}>Logout</LinkStyled>}
    </Menu.Item>
    <Menu.Item key="1">
      <LinkStyled to={'/signin'}>Signin</LinkStyled>
    </Menu.Item>
    <Menu.Item key="2">
      <LinkStyled to={'/signup'}>Signup</LinkStyled>
    </Menu.Item>
  </Menu>
);

const App = ({ children, history, location, query, relay }: IProps) => {
  return (
    <Content className="layout">
      <PageHeader
        onBack={() => history.goBack()}
        title="Churras"
        subTitle={location.pathname}
        extra={[
          <Dropdown key="1" overlay={menu(history, relay)} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              {query && query.me && `${query.me.name} - `}
              <Button shape="circle" icon="user" />
            </a>
          </Dropdown>
        ]}
      />
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Rafael Campos de Bastiani - Challenge
      </Footer>
    </Content>
  );
};

const AppFragmentContainer = createRefetchContainer(
  App,
  {
    query: graphql`
      fragment App_query on Query {
        me {
          id
          _id
          name
          email
        }
      }
    `
  },
  graphql`
    query AppRefetchQuery {
      ...App_query
    }
  `
);

export default withRouter(
  createQueryRenderer(AppFragmentContainer, App, {
    query: graphql`
      query AppQuery {
        ...App_query
      }
    `
  })
);
