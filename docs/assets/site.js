(function () {
  var index = window.PE_SEARCH_INDEX || [];
  var docsRoot = window.PE_DOCS_ROOT || ".";

  function lower(value) {
    return String(value || "").toLowerCase();
  }

  function trim(value) {
    return String(value || "").replace(/^\s+|\s+$/g, "");
  }

  function splitTerms(value) {
    var parts = trim(lower(value)).split(/\s+/);
    var terms = [];
    var i;
    for (i = 0; i < parts.length; i += 1) {
      if (parts[i]) {
        terms.push(parts[i]);
      }
    }
    return terms;
  }

  function resolveHref(entry) {
    if (entry.external_href) {
      return entry.external_href;
    }
    if (!entry.docs_href) {
      return "#";
    }
    if (docsRoot === "." || docsRoot === "") {
      return entry.docs_href;
    }
    return docsRoot + "/" + entry.docs_href;
  }

  function scoreEntry(entry, terms) {
    var title = lower(entry.title);
    var description = lower(entry.description);
    var bundle = lower(entry.bundle);
    var searchText = lower(entry.search_text);
    var score = 0;
    var i;

    for (i = 0; i < terms.length; i += 1) {
      if (searchText.indexOf(terms[i]) === -1) {
        return -1;
      }
      if (title.indexOf(terms[i]) !== -1) {
        score += 60;
      }
      if (description.indexOf(terms[i]) !== -1) {
        score += 25;
      }
      if (bundle.indexOf(terms[i]) !== -1) {
        score += 10;
      }
      score += 2;
    }

    if (entry.kind === "section") {
      score -= 10;
    }

    return score;
  }

  function search(query) {
    var terms = splitTerms(query);
    var matches = [];
    var i;
    var score;

    if (!terms.length) {
      return matches;
    }

    for (i = 0; i < index.length; i += 1) {
      score = scoreEntry(index[i], terms);
      if (score >= 0) {
        matches.push({ entry: index[i], score: score });
      }
    }

    matches.sort(function (a, b) {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return lower(a.entry.title) < lower(b.entry.title) ? -1 : 1;
    });

    return matches.slice(0, 8);
  }

  function renderResult(match) {
    var entry = match.entry;
    var article = document.createElement("article");
    var meta = document.createElement("div");
    var title = document.createElement("h3");
    var link = document.createElement("a");
    var description = document.createElement("p");
    var bundle = document.createElement("span");
    var kind = document.createElement("span");

    article.className = "search-result";
    meta.className = "search-result-meta";

    bundle.textContent = entry.bundle || "Package";
    kind.textContent = entry.kind === "download" ? "Download" : (entry.kind === "section" ? "Section" : "Page");
    meta.appendChild(bundle);
    meta.appendChild(kind);

    link.href = resolveHref(entry);
    link.textContent = entry.title;
    title.appendChild(link);

    description.textContent = entry.description;

    article.appendChild(meta);
    article.appendChild(title);
    article.appendChild(description);
    return article;
  }

  function bindSearch(root) {
    var input = root.querySelector("[data-search-input]");
    var results = root.querySelector("[data-search-results]");
    var status = root.querySelector("[data-search-status]");

    if (!input || !results || !status) {
      return;
    }

    function update() {
      var query = trim(input.value);
      var matches;
      var i;

      results.innerHTML = "";

      if (query.length < 2) {
        status.textContent = "Type two or more characters to search the published package.";
        return;
      }

      matches = search(query);

      if (!matches.length) {
        status.textContent = "No matching results yet. Try another keyword.";
        return;
      }

      status.textContent = "Showing the best matching results across the published package.";

      for (i = 0; i < matches.length; i += 1) {
        results.appendChild(renderResult(matches[i]));
      }
    }

    input.addEventListener("input", update);
  }

  function boot() {
    var widgets = document.querySelectorAll("[data-site-search]");
    var i;
    for (i = 0; i < widgets.length; i += 1) {
      bindSearch(widgets[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}());
