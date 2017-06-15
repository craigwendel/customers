// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

(function () {

  'use strict';

  function fetchPerson(){

  fetch("https://randomuser.me/api/?nat=us")
    .then( function(response){
      return response.json()
    })
    .then(function(json){
      console.log("data", json)
      const image = json.results[0].picture.large;
      const firstName = json.results[0].name.first;
      const lastName = json.results[0].name.last;
      const email = json.results[0].email;
      const streetName = json.results[0].location.street;
      const city = json.results[0].location.city;
      const state = json.results[0].location.state;
      const postalCode = json.results[0].location.postcode;
      const phone = json.results[0].phone;
      const blurredSSN = json.results[0].id.value;

      const html = `
        <div class="customers">
          <div class="customers-info">
            <div class="image"><img src="${image}"/></div>
            <div id="full-name">
               ${firstName} ${lastName}
            </div>
            <div class="details" id ="email">${email}</div>
            <div class="details">${streetName}</div>
            <div class="details">
              ${city}, ${state} ${postalCode}
            </div>
            <div class="details">${phone}</div>
            <div class="blurred-SSN">${blurredSSN}</div>
          </div>
        </div>`

      document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
    })
}
for (var i = 1; i <= 12; i++) {
  fetchPerson(i)
}

})();
