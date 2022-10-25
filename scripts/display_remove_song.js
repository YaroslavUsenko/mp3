'use strict'

var removeSongButton = document.querySelector('.remove-song-button')

removeSongButton.addEventListener('click', function () {
  var removeSongInput = document.querySelector('#remove-song-input')

  MP3.removeSong(removeSongInput.value)

  removeSongInput.value = ''
})
