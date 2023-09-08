function mySearch() {
  let searchInput = document.getElementById("search").value.toUpperCase();
  let recipeElements = document.querySelectorAll(".recipe");
  let hasResults = false;

  for (let i = 0; i < recipeElements.length; i++) {
    let recipeElement = recipeElements[i];
    let h3Element = recipeElement.querySelector("h3");
    let h4Element = recipeElement.querySelector("h4");

    if (
      h3Element.innerHTML.toUpperCase().indexOf(searchInput) > -1 ||
      h4Element.innerHTML.toUpperCase().indexOf(searchInput) > -1
    ) {
      recipeElement.classList.remove("hide-search");
      hasResults = true;
    } else {
      recipeElement.classList.add("hide-search");
    }
  }

  if (!hasResults) {
    document.getElementById("no-result").style.display = "block";
  } else {
    document.getElementById("no-result").style.display = "none";
  }
}
