// for MusixMatch API search, so can search by LYRICS or ARTIST or SONG
const musixMatchApiKey = '07aa5ecd02d38ca088c3bbcb58ebaf53';
const searchURL = 'https://api.musixmatch.com/ws/1.1/track.search';
const trackURL = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';

// link to MusixMatch artist search results
// const linkURL = 'https://www.musixmatch.com/search';

// link to MusixMatch lyrics search results
const linkURL = 'https://www.musixmatch.com/lyrics';

//youtube API
const youtubeApiKey = 'AIzaSyBKXGaS0dwFOXnn1DhiFpKrE33E-k8veB4';
const youtubeSearch = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
//const andrew = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=metallica&key='

const searchBtn = document.getElementById('search-btn')
const results = document.getElementById('results')

searchBtn.addEventListener('click', lyricSearch)

function lyricSearch() {
    results.classList.remove("hidden");
}






//display youtube video with relevant search
//display artist name and song title
//display partial lyrics
//see full lyrics button