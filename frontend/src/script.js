const apiUrl = 'http://localhost:3000';

console.log("Hello world");

function getAniversariantes() {
  fetch(apiUrl)
  .then(data => {
  return data.json();
  })
  .then(post => {
  console.log(post.title);
});
}