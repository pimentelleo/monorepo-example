window.onload = async function () {
  const apiUrl = "https://localhost:3000";
  const apiRoute = `?userId=${userUUID}`;
  async function getUserName() {
    fetch(apiUrl + "/" + apiRoute)
      .then((response) => response.json())
      .then((json) => {
        console.log(response.data);
        return response;
      });
  }
  const resultName = await getUserName();
  const name = resultName;
  var lengthOfName = name.length;

  document.getElementById("output").innerHTML = lengthOfName;
};

const apiUrl = "https://localhost:3000/";
const apiRoute = `?userId=${userUUID}`;
async function getUserName() {
  fetch(apiUrl + "/" + apiRoute)
    .then((response) => response.json())
    .then((json) => {
      console.log(response.data);
      return response;
    });
}

fetch(apiUrl + "home?userId=a4c52257-2c6f-46f6-ae0b-2514df42be5d")
  .then((response) => response.json())
  .then((json) => {
    let li = `<tr><th>Name</th><th>Email</th></tr>`;

    json.forEach((user) => {
      li += `<tr>
                <td>${user.name} </td>
                <td>${user.email}</td>         
            </tr>`;
    });
    document.getElementById("users").innerHTML = li;
  });
