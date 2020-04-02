import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const getHeaders = () => {
  const headers = {};
  const token = process.env.VUE_APP_APOLLO_API_KEY || '';
  if (token) {
    headers['x-api-key'] = token;
  }
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP,
  fetch,
  headers: getHeaders()
});
export const client = new ApolloClient({
  link: link,
  connectToDevTools: true,
  cache: new InMemoryCache({
    addTypename: true
  })
});
