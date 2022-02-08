const apiUrl = 'http://localhost:3000'
const apiRoute = 'calc'
function getCalculatorResult() {
  fetch(apiUrl+'/'+apiRoute)
  .then(response => response.json())
    .then(json => {
      return response;
    }
);
}

//  main.js

  
//  GET request using fetch()

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>Name</th><th>Email</th></tr>`;

        json.forEach(user => {
            li += `<tr>
                <td>${user.name} </td>
                <td>${user.email}</td>         
            </tr>`;
        });
    document.getElementById("users").innerHTML = li;
});