/* 
  아래에 코드를 작성해주세요.
*/
// const API_URL = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=제발&api_key=2b636580c860863558efd4506d0db7b1&format=json'

const keyword = document.querySelector('.search-box__input')

const searchBtn = document.querySelector('.search-box__button')
searchBtn.style
searchBtn.addEventListener('click', () =>{
  fetchAlbums();
  // location.reload(); // 페이지를 새로고침 

});

// Enter키로 submit
function enterKey() {
  if(window.event.keyCode==13){
    fetchAlbums();
    console.log('success');
  }
}

function fetchAlbums(page = 1, limit = 10){
  // alert('확인!'); 
  
  const API_URL = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword.value}&api_key=2b636580c860863558efd4506d0db7b1&format=json`
  axios.get(API_URL)
    .then((response) =>{
      albums = response.data.results.albummatches.album
      return albums
    })
    .then((albums)=>{
      const divTag = document.querySelector('.search-result')
      divTag.innerHTML = ''; // 이전 검색 결과 삭제
      albums.forEach(album => {

        // 이미지 태그 만들기
        const cardImg = document.createElement('img')
        cardImg.src = album.image[1]['#text']

        // div 태그 만들고 클래스 부여하기
        const card = document.createElement('div')
        card.classList.add('search-result__card')

        // div 태그에 이미지 태그 추가하기
        card.append(cardImg) 

        const div2 = document.createElement('div')
        const h2Tag = document.createElement('h2')
        const pTag = document.createElement('p')

        cardImg.setAttribute('src', `${album.image[1]['#text']}`)
        h2Tag.innerText = album.artist
        pTag.innerText = album.name

        divTag.append(card)
        card.appendChild(cardImg)
        card.appendChild(div2)
        div2.appendChild(h2Tag)
        div2.appendChild(pTag)

        // card 클릭 이벤트 등록
        card.addEventListener('click', () => {
          window.open(`${album.url}`)
        })
      })
    })
    .catch(error =>{
      alert('잠시 후 다시 시도해주세요.')
    })
}

