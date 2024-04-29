const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDMzZjQ0OTQxOWJhMmJkZWRiMWJjMTNjNjYyMDY3MSIsInN1YiI6IjY2MmIxNzBmMTc1MDUxMDExZDc4YjU4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aHbylSxa8vT1wF-QRKuHc6BF1rAOU7XvV1mxmCCGI-g'
  }
};

//목록 출력
let url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
let movie = []
fetch(url, options)
  .then(response => response.json())
  .then(date => {
    let movie = date.results
    console.log(movie)
    movie.forEach(elem => {

      let image = 'https://image.tmdb.org/t/p/w500' + elem.poster_path

      let id = elem.id
      let movieTitle = elem.title
      let content = elem.overview
      let rate = elem.vote_average

      document.querySelector('.card-list').innerHTML += `
        <div class="movie-card" id="${id}" onClick="clickCard(${id})">
            <img src="${image}" alt="${movieTitle}">
            <h3 class="movie-title">${movieTitle}</h3>
            <p class="content">${content}</p>
            <p class="rate">Rating: ${rate}</p>
        </div>`;

    });
  })


// 검색창의 유효성 검사
const handleSearch = event => {
  const searchInput = document.getElementById('search-input')
  event.preventDefault();
  if (!searchInput.innerText) {	                    // 자바스크립트 : 빈문자열 -> false 반환
    alert("입력하지 않았습니다.");
    searchInput.focus();
    return false;
  }
}
// // 검색어에 따라 사용자 필터링하는 함수
// function filter() {
//   for (let i = 0; i < movieCard.length; i++) {
//     movieTitle = movieCard[i].getElementsByClassName("movie-title");
//     if (movieTitle[0].innerHTML.toLowerCase().indexOf(search) != -1
//     ) {
//       movieTitle[i].style.display = "flex"
//     } else {
//       movieTitle[i].style.display = "none"
//     }
//   }


// }

// // 검색 입력 이벤트 리스너 등록
// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value.toLowerCase();
//   filterUsers(value);
// });

//id 출력
let clickCard = id => {
  alert('id : ' + id)
}