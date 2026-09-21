// Pulls the 3 most recently-pushed-to GitHub repos and renders them into
// #project-list. No build step, no dependencies: this runs as-is in the browser.
(function () {
  var USERNAME = "eluu02";
  var EXCLUDED_REPOS = ["03-demo", "03-git-verify-deploy"];
  var listEl = document.getElementById("project-list");

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function renderCard(repo) {
    var article = document.createElement("article");
    article.className = "project-card";

    var body = document.createElement("div");
    body.className = "project-card__body";

    var row = document.createElement("div");
    row.className = "project-card__row";

    var title = document.createElement("h3");
    title.className = "project-card__title";
    var link = document.createElement("a");
    link.href = repo.html_url;
    link.textContent = repo.name;
    title.appendChild(link);

    var stats = document.createElement("div");
    stats.className = "project-card__stats";
    var created = document.createElement("p");
    created.textContent = "Created " + formatDate(repo.created_at);
    var pushed = document.createElement("p");
    pushed.textContent = "Last commit " + formatDate(repo.pushed_at);
    stats.appendChild(created);
    stats.appendChild(pushed);

    row.appendChild(title);
    row.appendChild(stats);

    var desc = document.createElement("p");
    desc.className = "project-card__desc";
    desc.textContent = repo.description || "No description added on GitHub yet.";

    body.appendChild(row);
    body.appendChild(desc);
    article.appendChild(body);
    return article;
  }

  function renderError() {
    listEl.textContent = "";
    var status = document.createElement("p");
    status.className = "project-list__status";
    var link = document.createElement("a");
    link.href = "https://github.com/" + USERNAME + "?tab=repositories";
    link.textContent = "view them directly on GitHub";
    status.appendChild(document.createTextNode("Couldn't load recent projects right now, "));
    status.appendChild(link);
    status.appendChild(document.createTextNode("."));
    listEl.appendChild(status);
  }

  var url =
    "https://api.github.com/users/" +
    USERNAME +
    "/repos?type=owner&sort=pushed&direction=desc&per_page=10";

  fetch(url)
    .then(function (res) {
      if (!res.ok) {
        throw new Error("GitHub API returned " + res.status);
      }
      return res.json();
    })
    .then(function (repos) {
      var picked = repos
        .filter(function (repo) {
          return !repo.fork && EXCLUDED_REPOS.indexOf(repo.name) === -1;
        })
        .slice(0, 3);

      if (picked.length === 0) {
        renderError();
        return;
      }

      listEl.textContent = "";
      picked.forEach(function (repo) {
        listEl.appendChild(renderCard(repo));
      });
    })
    .catch(renderError);
})();
