import {buildSchema} from 'graphql';

const schema = buildSchema(`
   type Contact {
    id: ID,
    name: String, 
    email: String,
    phone: String
  }

  type Query {
    getAllContacts: [Contact],
    getOneContact(id: ID!): Contact
  }

  input ContactInput {
    id: ID,
    name: String,
    email: String,
    phone: String
  }

  type Mutation {
    createContact(input: ContactInput): Contact,
    updateContact(input: ContactInput): Contact,
    deleteContact(id: ID!): String
  }
  `);

  export default schema;