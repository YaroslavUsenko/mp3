'use strict'

var buttonSongPlayer = document.querySelector('.button-song-player')
var buttonSongList = document.querySelector('.button-song-list')
var buttonSongAdd = document.querySelector('.button-song-add')
var buttonSongRemove = document.querySelector('.button-song-remove')
var buttonMenu = document.querySelector('.button-menu')

var optionsDisplay = document.querySelector('.options')
var songListDisplay = document.querySelector('.song-list')
var songPlayerDisplay = document.querySelector('.song-player')
var songAddDisplay = document.querySelector('.song-add')
var songRemoveDisplay = document.querySelector('.song-remove')

buttonMenu.addEventListener('click', function () {
  if (currentDisplay !== undefined) {
    if (currentDisplay === songPlayerDisplay) {
      toggleHideClass(songNumber)
    }
    toggleHideClass(optionsDisplay)
    toggleHideClass(currentDisplay)
    currentDisplay = optionsDisplay
  }
})

buttonSongPlayer.addEventListener('click', function () {
  currentDisplay = songPlayerDisplay

  setSongPlayerData(MP3.currentSong, 0)

  toggleHideClass(songPlayerDisplay)
  toggleHideClass(songNumber)
  toggleHideClass(optionsDisplay)
})

buttonSongList.addEventListener('click', function () {
  currentDisplay = songListDisplay
  var songList = songListDisplay.children[0]
  var arraySongs = MP3.getSongs()

  toggleHideClass(songListDisplay)
  toggleHideClass(optionsDisplay)

  if (songList.children.length) {
    while (songList.children.length) {
      songList.children[0].remove()
    }
  }

  for (let i = 0; i < arraySongs.length; i++) {
    var listItem = document.createElement('li')
    listItem.textContent = arraySongs[i]

    listItem.addEventListener('click', function () {
      MP3.setSong(i)

      setSongPlayerData(MP3.currentSong, 0)
      clearInterval(playSongInterval)
      playSongInterval = null
      MP3.currentTime = 0
      setSliderPosition(0, 100)

      toggleHideClass(songPlayerDisplay)
      toggleHideClass(songNumber)
      toggleHideClass(songListDisplay)

      currentDisplay = songPlayerDisplay
    })
    songList.append(listItem)
  }
})

buttonSongAdd.addEventListener('click', function () {
  currentDisplay = songAddDisplay

  toggleHideClass(songAddDisplay)
  toggleHideClass(optionsDisplay)
})

buttonSongRemove.addEventListener('click', function () {
  currentDisplay = songRemoveDisplay

  toggleHideClass(songRemoveDisplay)
  toggleHideClass(optionsDisplay)
})
