const axios = require('axios')

setInterval(function(){ axios.get('http://localhost:3000/estado')
  .then(function (response) {
    console.log('res', response.data);
  })
  .catch(function (error) {
    console.log('err', error);
  });
 }, 3000);
