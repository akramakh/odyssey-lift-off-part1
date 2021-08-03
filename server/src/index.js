const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');


const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
        spaceCats: () => [...new Array(5)]
    }),
    Track: () => ({
      id: () => 'track_01',
      title: () => 'Astro Kitty, Space Explorer',
      author: () => {
        return {
          name: 'Grumpy Cat',
          photo:
            'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
        };
      },
      thumbnail: () =>
        'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
      length: () => 1210,
      modulesCount: () => 6
    }),
    SpaceCat: () => ({
        id: () => 'spaceCat_01',
        name: () => "Space Cat One",
        age: () => 10,
        missions: () => [...new Array(3)]
    }),
    Mission: () => ({
        id: () => 'mission_01',
        name: () => 'Misson 01',
        description: () => "Mission description here ..."
    })
  };

const server = new ApolloServer({typeDefs, mocks});
server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    https://studio.apollographql.com/graph/My-Graph-yy3mh/explorer?variant=current
    `)
}).catch(error => {
    console.log(`error`, error)
})
