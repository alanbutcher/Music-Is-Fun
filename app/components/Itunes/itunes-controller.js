import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  // console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  results.forEach(song => {
    template += `
    <div class='card m-3 text-center'>
      <img class image src = "${song.albumArt}">
      <p>${song.title}</p>
      <p>${song.artist}</p>
      <p>${song.collection}</p>
      <a href="https://www.apple.com/itunes/" class="btn btn-outline-success my-2" role="button" aria-pressed ="true" style="margin-right:1vw">$${song.price}</a> 
      <audio class="audio-width" controls controlsList="nodownload" src="${song.preview}"></audio>
    </div>
    `
  })
  document.getElementById('song-list').innerHTML = template
}
//event listeners to make it only play one song at a time

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