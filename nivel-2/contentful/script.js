function main() {
   const contentful = require('contentful')

const client = contentful.createClient({
  space: 'tlhmp99qyhx5',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'izoDrIT470lbcYNwERYpBb2j7Sy6zTvQw8Jta2VyR4I'
})

client.getEntry('1nA6iICeXGFulX8qXPKmK1')
  .then((entry) => console.log(entry))
  .catch(console.error) 
} 

main();

