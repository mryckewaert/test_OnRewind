import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.URL_ON_REWIND,
  cache: new InMemoryCache(),
  headers: {
    "x-account-key": process.env.KEY_ON_REWIND,
  },
});

export default client;
