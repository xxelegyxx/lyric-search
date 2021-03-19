// for MusixMatch API search, so can search by LYRICS or ARTIST or SONG
const musixMatchApiKey = '07aa5ecd02d38ca088c3bbcb58ebaf53';
const cardGen = document.querySelector('#card-section')
const lyricsGen = document.querySelector('#lyrics-section')

//youtube API
const youtubeApiKey = 'AIzaSyBKXGaS0dwFOXnn1DhiFpKrE33E-k8veB4';
const youtubeSearch = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
//const andrew = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=metallica&key='

const searchBtn = document.getElementById('search-btn')
const results = document.getElementById('results')
var userInput;

searchBtn.addEventListener('click', lyricSearch)
//.body.message.tracklist

function lyricSearch() {
    results.classList.remove("hidden");
    cardGen.innerHTML = ''
    lyricsGen.innerHTML = ''
    userInput = inputVal()
    var musixmatchApiURL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=' + userInput + '&page_size=5&page=1&s_track_rating=desc&apikey=' + musixMatchApiKey
   //setLoading(true);
    fetch (musixmatchApiURL)
    .then(function(res){ 
        console.log(res)
       return res.json() })
    .then(function(data){
        // setLoading(false);
        var tracklist = data.message.body.track_list;
        // console.log(tracklist);
        // console.log(tracklist[0]);
        var resultList = []
        for (var i = 0; i < tracklist.length; i++) {
            var result = {
                trackName: tracklist[i].track.track_name,
                artist: tracklist[i].track.artist_name,
                album: tracklist[i].track.album_name,
                id : tracklist[i].track.track_id,
                youtubeSearchCriteria : tracklist[i].track.artist_name.replace(/\s/g, '+') + '+' + tracklist[i].track.track_name.replace(/\s/g, '+') + '+official+music+video',
            }
            resultList.push(result)
        }
        console.log(resultList)
        for (var i = 0; i < resultList.length; i++) {
            generateCard(resultList[i])
        }

    
    })
    
}

function generateCard(obj) {
    // console.log("im here", obj)
    cardGen.innerHTML += `
            <div class="row">
                <div class="col s12">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title" id="title">${obj.trackName}</span>
                      <p id="artist-name">by ${obj.artist}</p>
                      <p id="album-name">Album Name: ${obj.album}</p>
                    </div>
                    <div class="card-action">
                      <a class="waves-effect waves-light btn" onclick="searchMusicVid('${obj.youtubeSearchCriteria}')">Music Video</a>
                      <a class="waves-effect waves-light btn" onclick="getLyrics(${obj.id})">Show Lyrics</a>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
    `
}

function generateLyrics(obj) {
    lyricsGen.innerHTML = `
    <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <pre id= "lyrics-box">${obj}</pre>
                </div>
              </div>
            </div>
            `
}

function getLyrics(id) {
    console.log(id)
    var musixmatchApiURL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + id + '&apikey=' + musixMatchApiKey
    fetch (musixmatchApiURL)
    .then(function(res){
        console.log(res)
        return res.json() })
    .then(function(data){
        var lyricGen = data.message.body.lyrics.lyrics_body;
    console.log(lyricGen)
    generateLyrics(lyricGen)
    search()
    console.log(lyricGen)
    })
}

function search() {
  if (userInput !== "") {
  	let text = document.getElementById("lyrics-box").innerHTML;
  	let re = new RegExp(userInput,"i"); // search for all instances
		let newText = text.replace(re, `<mark>${userInput}</mark>`);
		document.getElementById("lyrics-box").innerHTML = newText;
  }
}

function searchMusicVid(x) {
  var musicVideoSearch = youtubeSearch + x + '&key=' + youtubeApiKey;
  console.log(musicVideoSearch)
  fetch(musicVideoSearch)
  .then(function(res){
    console.log(res)
    return res.json() })
  .then(function(data){
    console.log(data)
    var video_id = data.items[0].id.videoId
    var URL = "https://www.youtube.com/watch?v=" + video_id;
    window.open(URL, '_blank');
  })
  
} 

function inputVal() {
        return document.getElementById("searchbar").value;
}




//assemble the YouTube search
//get Lyrics
//











//http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=


//loading screen function setLoading(bool)




// const searchURL = 'https://api.musixmatch.com/ws/1.1/track.search';
// const trackURL = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';

// // link to MusixMatch artist search results
// // const linkURL = 'https://www.musixmatch.com/search';

// //https://www.musixmatch.com/search/i%20just%20ride/lyrics

// // link to MusixMatch lyrics search results
// const linkURL = 'https://www.musixmatch.com/lyrics';








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
//see full lyrics button // 