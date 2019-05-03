import { ObjectTypeComposer } from './graphql-compose'; // simplified example
// import { ObjectTypeComposer } from 'graphql-compose'; // full example

declare const User: ObjectTypeComposer<any, any>;

User.addResolver({
  type: User, // `User as any` fix the problem
});
