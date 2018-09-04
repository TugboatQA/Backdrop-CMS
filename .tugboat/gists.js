const Gists = require('gists');

const gists = new Gists({
  token: 'process.env.GITHUB_TOKEN'
});

gists.get('f4c65ea152877b3b7a8ddb5576dfd492')
  .then(res => console.log(res))
  .catch(console.error)
