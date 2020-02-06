require('dotenv').config();

const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const { resolvers } = require('../database/resolvers')
module.exports = {
    options: {
        port: process.env.NODE_PORT,
    },
    server: new GraphQLServer({
        typeDefs: 'database/graphql/database.graphql',
        resolvers,
        context: {
            prisma,
        },
    })
}

