import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  // console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  results.forEach(song => {
    template += `
    <div class='col card'>
    <ul>
      <img src = "${song.albumArt}">
      <li>${song.title}</li>
      <li>${song.artist}</li>
      <li>${song.collection}</li>
      <a href="https://www.apple.com/itunes/" class="btn btn-outline-success my-2" role="button" aria-pressed ="true" style="margin-right:1vw">$${song.price}</a> 
      <audio controls controlsList="nodownload" src="${song.preview}"></audio>
    </ul>
    </div>
    `
  })
  document.getElementById('song-list').innerHTML = template
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController