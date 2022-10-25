'use strict'

function setSongPlayerData(songIndex, songTime) {
  if (MP3.songs.length) {
    songNumber.innerHTML = returnValidSongIndicator(
      MP3.currentSong + 1,
      MP3.songs.length
    )
    songName.innerHTML = MP3.songs[songIndex][0]
    songTimer.innerHTML = returnValidSongTimer(
      songTime,
      MP3.songs[songIndex][1]
    )
  } else {
    songNumber.innerHTML = returnValidSongIndicator(0, 0)
    songName.innerHTML = ''
    songTimer.innerHTML = returnValidSongTimer(0, 0)
  }

  displayWrapper.style.background = generateRandomGradient()
}

function setSliderPosition(currentTime, duration) {
  slider.style.width = (currentTime / duration) * 100 + '%'
}

function switchSongDesign() {
  songNumber.innerHTML = returnValidSongIndicator(
    MP3.currentSong + 1,
    MP3.songs.length
  )
  songName.innerHTML = MP3.songs[MP3.currentSong][0]
  songTimer.innerHTML = returnValidSongTimer(0, MP3.songs[MP3.currentSong][1])
  displayWrapper.style.background = generateRandomGradient()
  setSliderPosition(0, 100)
}

function playNextSong() {
  if (currentDisplay === songPlayerDisplay) {
    if (MP3.currentSong < MP3.songs.length - 1) {
      MP3.nextSong()
    }
  }
}

function play() {
  if (!playSongInterval) {
    playSongInterval = setInterval(function () {
      var songDuration = MP3.songs[MP3.currentSong][1]
      var songDurationInSeconds = convertToSeconds(songDuration)

      if (MP3.currentTime < songDurationInSeconds) {
        MP3.play()

        songTimer.innerHTML = returnValidSongTimer(
          MP3.currentTime,
          MP3.songs[MP3.currentSong][1]
        )

        setSliderPosition(MP3.currentTime, songDurationInSeconds)
      } else if (
        MP3.currentTime === songDurationInSeconds &&
        MP3.currentSong < MP3.songs.length - 1
      ) {
        playNextSong()
        switchSongDesign()
      } else {
        clearInterval(playSongInterval)
        playSongInterval = null
      }
    }, playbackSpeed)
  } else {
    clearInterval(playSongInterval)
    playSongInterval = null
  }
}
