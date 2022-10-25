'use strict'

var addSongButton = document.querySelector('.add-song-button')

addSongButton.addEventListener('click', function () {
  var addSongInput = document.querySelector('#add-song-input')
  var songData = addSongInput.value.split(',')

  if (songData[0]) {
    MP3.addSong([songData[0], parseFloat(songData[1] || 0)])
  }

  addSongInput.value = ''
})
