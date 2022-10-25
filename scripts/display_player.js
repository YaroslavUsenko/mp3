'use strict'

var songNumber = document.querySelector('.song-number')
var songName = document.querySelector('.song-name')
var songTimer = document.querySelector('.song-timer')
var nextSong = document.querySelector('.next-song')
var previousSong = document.querySelector('.previous-song')
var displayWrapper = document.querySelector('.display-wrapper')
var playButton = document.querySelector('.play')
var slider = document.querySelector('.slider')

var playSongInterval = null
var playbackSpeed = 1000
var isPlaying = false

setSongPlayerData(0, 0)

nextSong.addEventListener('click', function () {
  if (currentDisplay === songPlayerDisplay) {
    if (MP3.currentSong < MP3.songs.length - 1) {
      playNextSong()
      switchSongDesign()

      if (isPlaying) {
        clearInterval(playSongInterval)
        playSongInterval = null
        play()
      } else {
        clearInterval(playSongInterval)
        playSongInterval = null
      }
    }
  }
})

previousSong.addEventListener('click', function () {
  if (currentDisplay === songPlayerDisplay) {
    if (MP3.currentSong > 0) {
      MP3.previousSong()
      switchSongDesign()

      if (isPlaying) {
        clearInterval(playSongInterval)
        playSongInterval = null
        play()
      } else {
        clearInterval(playSongInterval)
        playSongInterval = null
      }
    }
  }
})

playButton.addEventListener('click', function () {
  if (currentDisplay === songPlayerDisplay && MP3.songs.length) {
    isPlaying = !isPlaying

    play()
  }
})
