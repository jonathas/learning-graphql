const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true // graphiql is a tool only intended to be used in a development environment
}));

app.listen(4000, () => {
    console.log('Listening');
});
