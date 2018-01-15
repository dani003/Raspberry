const axios = require('axios')

axios.get('http://localhost:3000/estado')
  .then(function (response) {
    console.log('res', response.data);
  })
  .catch(function (error) {
    console.log('err', error);
  });
