document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const handleFavoriteSubmit = (e) => {
    e.preventDefault();

    const favoriteRestInput = document.querySelector(".favorite-input");
    const favoriteRest = favoriteRestInput.value;
    favoriteRestInput.value = "";

    const newListLi = document.createElement("li");
    newListLi.textContent = favoriteRest;

    const favoritesList = document.getElementById("sf-places");
    favoritesList.appendChild(newListLi);
  };

  const favListSubmitButton = document.querySelector(".favorite-submit");
  favListSubmitButton.addEventListener("click", handleFavoriteSubmit);



  // adding new photos

  // --- your code here!



});
