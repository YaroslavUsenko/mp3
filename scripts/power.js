'use strict'

var powerOffDisplay = document.querySelector('.display-off')
var powerOnDisplay = document.querySelector('.display-wrapper')
var buttonPower = document.querySelector('.button-power')

var currentDisplay = optionsDisplay
var isPowerOn = false
var chargeStatus = 'full'
var losesCharge = null

buttonPower.addEventListener('click', function () {
  isPowerOn = !isPowerOn

  if (isPowerOn) {
    changeCharge()
    buttonPower.style.color = '#dcdcdc'
  } else {
    clearInterval(losesCharge)
    buttonPower.style.color = '#66b05d'
  }

  if (currentDisplay === songPlayerDisplay) {
    songNumber.style.display = 'none'
  }
  currentDisplay.style.display = 'none'
  optionsDisplay.style.display = 'block'

  toggleHideClass(powerOnDisplay)
  toggleHideClass(powerOffDisplay)

  MP3.currentTime = 0
  MP3.currentSong = 0
  clearInterval(playSongInterval)
  playSongInterval = null
  setSongPlayerData(0, 0)
})
