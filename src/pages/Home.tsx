import React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import createQueryRenderer from '../relay/createQueryRenderer';
import { formatDate } from '../utils/formatDate';

import { Home_query as HomeQuery } from './__generated__/Home_query.graphql';

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

interface IProps {
  query: HomeQuery;
}

const Home = ({ query }: IProps): any => {
  return (
    <div>
      <ul>
        {query &&
          query.barbecues &&
          query.barbecues.edges.map(({ node }: any) => (
            <LinkStyled key={node.id} to={`/barbecue/${node.id}`}>
              <li>
                <h1>{formatDate(node.date)}</h1>
                <p>{node.description}</p>
                <p>{node.participants.edges.length}</p>
                <p>{node.total}</p>
              </li>
            </LinkStyled>
          ))}
      </ul>
    </div>
  );
};

// @ts-ignore
const HomeFragmentContainer = createRefetchContainer(Home, {
  query: graphql`
    fragment Home_query on Query {
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
