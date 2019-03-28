import { GraphQLServer } from 'graphql-yoga'
// Types: 5 Scalar types
// String, Boolean, Int, Float, ID
// Type definitions (applications schema)
const typeDefs = `
  type Query {
    id: ID!
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`
// Resolvers (functions)
const resolvers = {
	Query: {
		id(){
			return '12'
		},
		title(){
			return 'A girl walks alone at night'
		},
		price(){
			return 550
		},
		releaseYear(){
			return 2014
		},
		rating(){
			return 9.2
		},
		inStock(){
			return true
		}
	}
}

const server = new GraphQLServer({
	typeDefs,
	resolvers
})

server.start(()=>{
  console.log('the server is up');
})
