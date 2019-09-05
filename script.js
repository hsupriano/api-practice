function pageOne() {
  const axios = require('axios');
  axios.get('https://reqres.in/api/users')
    .then(response => {
      let list = response.data;
      let firstIn = list.data[0];

      console.log(firstIn);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function() {
      
    });
}
pageOne()

function pageTwo() {
  const axios = require('axios');
  axios.get('https://reqres.in/api/users?page=2')
    .then(response => {
      const list2 = response.data;
      let person = list2.data[0]
      console.log(person);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function() {

    });
}
pageTwo()
