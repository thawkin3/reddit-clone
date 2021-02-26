import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'https://reddit-clone.us-west-2.aws.cloud.dgraph.io/graphql',
  cache: new InMemoryCache(),
})
