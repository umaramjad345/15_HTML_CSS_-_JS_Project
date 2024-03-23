const formEl = document.querySelector("form");
const inputEl = document.querySelector("#searchInput");
const searchButtonEl = document.querySelector("#searchButton");
const showMoreEl = document.querySelector("#showMore");
const searchResultsEl = document.querySelector(".searchResults");

let page = 1;

async function searchImages() {
  const url = "";
  const response = await fetch(``);
  const data = await response.json();

  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }
  const results = data.results;

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("searchResult");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMoreEl.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});
showMoreEl.addEventListener("click", () => {
  searchImages();
});
