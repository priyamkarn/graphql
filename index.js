/*const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const express = require('express');
const gql = require('graphql-tag');
const app = express();
// Define your GraphQL schema
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int
  }

  type Query {
    hello: String
    author(id: ID!): Author
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    author: (parent, args) => {
      // Mock data for example purposes
      const authors = [
        { id: '1', name: 'Jane Austen', age: 41 },
        { id: '2', name: 'Mark Twain', age: 74 },
      ];
      return authors.find(author => author.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json());

async function startServer() {
  await server.start();
  app.use('/graphql', expressMiddleware(server));
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/graphql');
  });
}

startServer();

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const express = require('express');
const gql = require('graphql-tag');

const app = express();

// Define your GraphQL schema
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int
    books: [Book]
  }

  type Book {
    title: String!
    publishedYear: Int
  }

  type Query {
    author(id: ID!): Author
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    author: (parent, args) => {
      // Mock data for example purposes
      const authors = [
        { 
          id: '1', 
          name: 'Jane Austen', 
          age: 41, 
          books: [
            { title: 'Pride and Prejudice', publishedYear: 1813 },
            { title: 'Sense and Sensibility', publishedYear: 1811 }
          ]
        },
        { 
          id: '2', 
          name: 'Mark Twain', 
          age: 74, 
          books: [
            { title: 'Adventures of Huckleberry Finn', publishedYear: 1884 },
            { title: 'The Adventures of Tom Sawyer', publishedYear: 1876 }
          ]
        },
      ];
      return authors.find(author => author.id === args.id);
    },
  },
  Author: {
    books: (parent) => {
      // `parent` here refers to the `Author` object returned from the `author` query resolver
      return parent.books;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json());

async function startServer() {
  await server.start();
  app.use('/graphql', expressMiddleware(server));
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/graphql');
  });
}

startServer();
*/
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const express = require('express');
const gql = require('graphql-tag');

// Create an instance of Express
const app = express();

// Define your GraphQL schema
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int
    books: [Book]
  }

  type Book {
    title: String!
    publishedYear: Int
    author: Author
  }

  type Query {
    author(id: ID!): Author
    book(title: String!): Book
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    author: (parent, args) => {
      // Mock data for example purposes
      const authors = [
        { 
          id: '1', 
          name: 'Jane Austen', 
          age: 41, 
          books: [
            { title: 'Pride and Prejudice', publishedYear: 1813 },
            { title: 'Sense and Sensibility', publishedYear: 1811 }
          ]
        },
        { 
          id: '2', 
          name: 'Mark Twain', 
          age: 74, 
          books: [
            { title: 'Adventures of Huckleberry Finn', publishedYear: 1884 },
            { title: 'The Adventures of Tom Sawyer', publishedYear: 1876 }
          ]
        },
      ];
      return authors.find(author => author.id === args.id);
    },
    book: (parent, args) => {
      // Mock data for example purposes
      const books = [
        { 
          title: 'Pride and Prejudice', 
          publishedYear: 1813, 
          author: { id: '1', name: 'Jane Austen', age: 41 }
        },
        { 
          title: 'Adventures of Huckleberry Finn', 
          publishedYear: 1884, 
          author: { id: '2', name: 'Mark Twain', age: 74 }
        },
      ];
      return books.find(book => book.title === args.title);
    },
  },
  Author: {
    books: (parent) => {
      // `parent` is the `Author` object returned from the `author` query resolver
      return parent.books;
    },
  },
  Book: {
    author: (parent) => {
      // `parent` is the `Book` object returned from the `book` query resolver
      return parent.author;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Middleware setup
app.use(bodyParser.json());

async function startServer() {
  // Start the Apollo Server
  await server.start();
  
  // Apply middleware
  app.use('/graphql', expressMiddleware(server));

  // Start the Express server
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/graphql');
  });
}

startServer();
//field resolver=typename then fieldname(jo chhye)

/*inclient side use usequery hook with const query=gql'query {
  book(title: "Pride and Prejudice") {
    title
    publishedYear
    author {
      id
      name
    }
  }
}
 const client =new appoloclient(uri,cache)
wrap app with appoloprovider client={client}
  */
