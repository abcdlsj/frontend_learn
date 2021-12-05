const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const { link } = require("fs/promises");
const path = require("path");
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

let links = [
    {
        id: "link-0",
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
];

// 2
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            let idCount = links.length;
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };
            links.push(link);
            return link;
        },
        update: (parent, args) => {
            links.forEach(function (item, index, array) {
                if (item.id == args.id) {
                    array[index].url = args.url;
                    array[index].description = args.description;
                }
            });
        },
        delete: (parent, args) => {
            links.forEach(function (item, index, array) {
                if (item.id == args.id) {
                    array.splice(index, 1)
                }
            });
        },
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    },
};

// 3
const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
    resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
