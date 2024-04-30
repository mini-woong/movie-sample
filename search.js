export const handleSearch = (searchKeyword) => {

  // if (!searchKeyword) {
  //   alert("입력하지 않았습니다.");
  //   document.getElementById('search-input').focus();
  //   return false;
  // }
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};