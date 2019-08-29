import React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';

const fragmentSpec = graphql`
    fragment Home_barbecues on Query {
      barbecues(
        first: 2147483647 # max GraphQLInt
      ) @connection(key: "Home_barbecues") {
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
  `;

const query = graphql`
  query HomeQuery {
    ...Home_barbecues
  }
`;

const Home = () => (
  <div>
    Home
  </div>
);

export default Home;
