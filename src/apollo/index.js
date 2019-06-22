import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: "https://randomuser.me/api/?results=10"
  });
  
  client
    .query({
      query: gql`
        {
          rates {
            currency
          }
        }
      `
    })
    .then(result => console.log(result));