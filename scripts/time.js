'use strict'

function returnValidSongIndicator(currentSong, maxSongs) {
  var songNumberIndicator = ''

  if (currentSong < 10) {
    songNumberIndicator = '0' + currentSong
  } else {
    songNumberIndicator = currentSong
  }

  if (maxSongs < 10) {
    songNumberIndicator += ' / 0' + maxSongs
  } else {
    songNumberIndicator += ' / ' + maxSongs
  }

  return songNumberIndicator
}

function returnValidTime(time) {
  var timeIndicator = ''
  var wholePart = Math.floor(time)
  var fractionalPart = Math.floor((time * 100) % 100)

  if (time === 0) {
    timeIndicator = '00:00'
  } else if (!wholePart) {
    if (fractionalPart >= 0 && fractionalPart < 10) {
      timeIndicator = '00:0' + fractionalPart
    } else {
      timeIndicator = '00:' + fractionalPart
    }
  } else if (wholePart < 10) {
    if (fractionalPart >= 0 && fractionalPart < 10) {
      timeIndicator = '0' + wholePart + ':0' + fractionalPart
    } else {
      timeIndicator = '0' + wholePart + ':' + fractionalPart
    }
  } else {
    if (fractionalPart >= 0 && fractionalPart < 10) {
      timeIndicator = wholePart + ':0' + fractionalPart
    } else {
      timeIndicator = wholePart + ':' + fractionalPart
    }
  }

  return timeIndicator
}

function convertToMinutes(time) {
  var timeInMinutes = 0

  if (time > 0 && time < 60) {
    timeInMinutes = time / 100
  } else {
    timeInMinutes = Math.floor(time / 60) + (time % 60) / 100
  }

  return timeInMinutes
}

function convertToSeconds(songDuration) {
  return Math.floor(songDuration) * 60 + ((songDuration * 100) % 100)
}

function returnValidSongTimer(currentSongTime, songDuration) {
  var timeInMinutes = convertToMinutes(currentSongTime)

  var songDurationIndicator =
    returnValidTime(timeInMinutes) + ' / ' + returnValidTime(songDuration)

  return songDurationIndicator
}
