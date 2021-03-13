// for MusixMatch API search, so can search by LYRICS or ARTIST or SONG
const musixMatchApiKey = '07aa5ecd02d38ca088c3bbcb58ebaf53';
const searchURL = 'https://api.musixmatch.com/ws/1.1/track.search';
const trackURL = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';

// link to MusixMatch artist search results
// const linkURL = 'https://www.musixmatch.com/search';

//https://www.musixmatch.com/search/i%20just%20ride/lyrics

// link to MusixMatch lyrics search results
const linkURL = 'https://www.musixmatch.com/lyrics';

//youtube API
const youtubeApiKey = 'AIzaSyBKXGaS0dwFOXnn1DhiFpKrE33E-k8veB4';
const youtubeSearch = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
//const andrew = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=metallica&key='

const searchBtn = document.getElementById('search-btn')
const results = document.getElementById('results')

searchBtn.addEventListener('click', lyricSearch)
//.body.message.tracklist
function lyricSearch() {
    results.classList.remove("hidden");
    var userInput = inputVal()
    var musixmatchApiURL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=' + userInput + '&page_size=5&page=1&s_track_rating=desc&apikey=' + musixMatchApiKey
    // setLoading(true);
    fetch (musixmatchApiURL)
    .then(function(res){ return res.json() })
    .then(function(data){
        // setLoading(false);
        var tracklist = data.message.body.track_list;
        console.log(tracklist);
        tracklist[i].track
    })
}

function inputVal() {
        return document.getElementById("searchbar").value;
}

//http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=


//loading screen function setLoading(bool)













//capture the user input
//use user input to search in the API for the lyrics
//pull song title, artist name, and lyric content from API
//turn those results into songTitle, artistName, lyricContent
//display the results cards in the HTML using JS
//using the songTitle and artistName FROM MUSIXMATCH,
//we have to search the YOUTUBE api using those returned songTitle and ArtistName
//create a youtube search https://www.googleapis.com/youtube/v3/search?part=snippet&q=_________________&key='
//search the YT api for the most relevant music video / first result
//create a card that displays all of the content
//list the 5 most relevant results
























//display youtube video with relevant search
//display artist name and song title
//display partial lyrics
//see full lyrics button