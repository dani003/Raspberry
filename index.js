const axios = require('axios')

setInterval(function(){ axios.get('http://pird.ddns.net:2002/estado')
  .then(function (response) {
    console.log('res', response.data);
  })
  .catch(function (error) {
    console.log('err', error);
  });
}, 3000);
