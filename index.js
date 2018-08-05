// const showRepositories = ((event, data) => {
//   console.log(event, data);
// })

function showCommits(element) {
  console.log(element)
}

function showRepositories(event) {
  const repositories = document.getElementById("repositories");
  const data = JSON.parse(this.responseText);
  let list = "<ul>";

  data.forEach(repo => {
    list += `<li>${repo.name} <a href="#" data-repo="${repo.name}" onClick="showCommits(this)">Get commits</a></li>`;
  });

  list += "</ul>";
  repositories.innerHTML = list;
}

const getRepositories = (() => {
  const request = new XMLHttpRequest();
  request.addEventListener("load", showRepositories)
  request.open("GET", "https://api.github.com/users/ahamedali95/repos");
  request.send();
});
