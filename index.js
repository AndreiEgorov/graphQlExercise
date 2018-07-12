const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./api/schema"); //types of things we can query "typeDefinitions"
const resolvers = require("./api/resolvers"); //how to resolve info 

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.set("PORT", process.env.PORT || 5000);
const port = app.get("PORT");

app.listen({ port }, () =>
    console.log(
        `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
);