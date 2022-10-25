'use strict'

var volumeValue = document.querySelector('.volume-value')
var buttonVolumeIncrease = document.querySelector('.volume-increase')
var buttonVolumeDecrease = document.querySelector('.volume-decrease')

volumeValue.innerHTML = MP3.volume

buttonVolumeIncrease.addEventListener('click', function () {
  MP3.increaseVolume()

  if (MP3.volume > 0) {
    var node = document.querySelector('.volume-indicator').children[0]

    node.classList.remove('fa-volume-xmark')
    node.classList.add('fa-volume-high')
  }

  volumeValue.innerHTML = MP3.volume
})

buttonVolumeDecrease.addEventListener('click', function () {
  MP3.decreaseVolume()

  if (MP3.volume === 0) {
    var node = document.querySelector('.volume-indicator').children[0]

    node.classList.remove('fa-volume-high')
    node.classList.add('fa-volume-xmark')
  }

  volumeValue.innerHTML = MP3.volume
})
