const apiUrl = 'https://localhost:3000/'
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

fetch(apiUrl+"home?userId=a4c52257-2c6f-46f6-ae0b-2514df42be5d")
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