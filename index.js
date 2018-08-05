// const showRepositories = ((event, data) => {
//   console.log(event, data);
// })

function showCommits(event) {
  const commits = document.getElementById("commits");
  const data = JSON.parse(this.responseText);
  let list = "<ul>";

  data.forEach(commitObj => {
    list += `<li>${commitObj.commit.message} - ${commitObj.author.name}</li>`;
  });

  list += "</ul>";
  commits.innerHTML = list;
}

function getCommits(element) {
  const repoName = element.dataset.repo;
  const request = new XMLHttpRequest();
  request.addEventListener("load", showCommits);
  request.open("GET", 'https://api.github.com/repos/ahamedali95/' + repoName + '/commits');
  request.send();
}

function showRepositories(event) {
  const repositories = document.getElementById("repositories");
  const data = JSON.parse(this.responseText);
  let list = "<ul>";

  data.forEach(repo => {
    list += `<li>${repo.name} <a href="#" data-repo="${repo.name}" onClick="getCommits(this)">Get commits</a></li>`;
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
