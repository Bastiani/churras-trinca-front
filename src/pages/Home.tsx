import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, List, Card, Typography, Icon, Alert } from 'antd';
import idx from 'idx';

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
  relay: any;
}

const LOAD_MORE = 4;

const Home = ({ query, relay }: IProps): any => {
  const loadMore = () => {
    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }

    relay.loadMore(LOAD_MORE, (error: any) => {
      console.log(error);
    });
  };

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
        </AlertContainer>
      )}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        // @ts-ignore
        dataSource={idx(query, _ => _.barbecues.edges) || []}
        renderItem={({ node }: any) => (
          <List.Item>
            <LinkStyled key={node.id} to={`/barbecue/${node.id}`}>
              <Card title={formatDate(node.date)}>
                <p>
                  <Typography.Text>{node.description}</Typography.Text>
                </p>
                <Icon type="team" />
                {node.participants.edges.length}
                <p>{BRL(node.total).format(true)}</p>
              </Card>
            </LinkStyled>
          </List.Item>
        )}
      />
      {query.barbecues && query.barbecues.edges.length >= 1 && (
        <ButtonStyled onClick={loadMore}>Carregar mais</ButtonStyled>
      )}
    </div>
  );
};

const HomePaginationContainer = createPaginationContainer(
  Home,
  {
    query: graphql`
      fragment Home_query on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
        ) {
        me {
          id
          _id
          name
        }
        barbecues(first: $count, after: $cursor)
          @connection(key: "Home_barbecues", filters: []) {
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
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.query && props.query.barbecues;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      query HomePaginationQuery($count: Int!, $cursor: String) {
        ...Home_query @arguments(count: $count, cursor: $cursor)
      }
    `
  }
);

export default createQueryRenderer(HomePaginationContainer, Home, {
  query: graphql`
    query HomeQuery($count: Int!, $cursor: String) {
      ...Home_query @arguments(count: $count, cursor: $cursor)
    }
  `,
  variables: {
    count: LOAD_MORE
  }
});
