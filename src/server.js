import { schema } from "./schema";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const Pages = require("../models/Pages");


// Initialize the app
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
// http://www.tumultyeverafter.com
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

// Allow CORS between routes
app.use(cors(corsOptions));

// The GraphQL endpoint
app.use("/graphql", cors(), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Load static resources for the client
app.use(express.static(path.join(__dirname, "../client/build")));

// Serve up react app under home route
app.get("/", (req, res) => {
  const index = path.join(__dirname, "../client/build", "index.html");
  res.sendFile(index);
});

// Start the server
app.listen(port, () => {
  console.log(` Server running on: ${port}`);
});
