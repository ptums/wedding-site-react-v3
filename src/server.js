const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { schema } = require('./schema');

// Initialize the app
const app = express();
const port = process.env.PORT || 3001; 

// Enable CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

app.use(cors(corsOptions));
// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// serve up react app under home route
app.get('*', (req, res) => {
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('client/build/static'));
  const index = path.join(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});
// Start the server
app.listen(port, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});