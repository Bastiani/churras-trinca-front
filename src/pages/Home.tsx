import React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, List, Typography, Icon, Alert } from 'antd';

import createQueryRenderer from '../relay/createQueryRenderer';
import { formatDate } from '../utils/formatDate';
import { BRL } from '../utils/money';
import { validIsLoggedIn } from '../utils/validIsLoggedIn';

import { Home_query as HomeQuery } from './__generated__/Home_query.graphql';

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const ButtonStyled = styled(Button)`
  margin-bottom: 5px;
`;

const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface IProps {
  query: HomeQuery;
}

const Home = ({ query }: IProps): any => {
  return (
    <div>
      {validIsLoggedIn() ? (
        <LinkStyled to={'/barbecue'}>
          <ButtonStyled type="primary">Adicionar Churras</ButtonStyled>
        </LinkStyled>
      ) : (
        <AlertContainer>
          <Alert
            message="Para adicionar um novo churrasco primeiro faça o login"
            type="info"
          />
          <LinkStyled to={'/signin'}>
            <ButtonStyled type="primary">Signin</ButtonStyled>
          </LinkStyled>
        </AlertContainer>
      )}
      <List
        header={<div>Lista de churrascos agendados</div>}
        bordered
        // @ts-ignore
        dataSource={query.barbecues.edges || []}
        renderItem={({ node }: any) => (
          <List.Item>
            <LinkStyled key={node.id} to={`/barbecue/${node.id}`}>
              <b>
                <Typography.Text>{formatDate(node.date)}</Typography.Text>
              </b>
              <p>
                <Typography.Text>{node.description}</Typography.Text>
              </p>
              <Icon type="team" />
              {node.participants.edges.length}
              <p>{BRL(node.total).format(true)}</p>
            </LinkStyled>
          </List.Item>
        )}
      />
    </div>
  );
};

// @ts-ignore
const HomeFragmentContainer = createRefetchContainer(Home, {
  query: graphql`
    fragment Home_query on Query {
      me {
        id
        _id
        name
        email
      }
      barbecues(
        first: 2147483647 # max GraphQLInt
      ) @connection(key: "Home_barbecues", filters: []) {
        edges {
          node {
            id
            _id
            date
            description
            observation
            participants {
              edges {
                node {
                  participant {
                    name
                  }
                  total
                }
              }
            }
            total
          }
        }
      }
    }
  `
});

export default createQueryRenderer(HomeFragmentContainer, Home, {
  query: graphql`
    query HomeQuery {
      ...Home_query
    }
  `
});
