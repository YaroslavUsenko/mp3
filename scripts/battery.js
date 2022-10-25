'use strict'

var energyIntensity = 5000

function changeCharge() {
  var chargeValue = 100
  var chargeIndicator = document.querySelector('.battery-value')
  var node = document.querySelector('.battery').children[1]

  node.classList.remove('fa-battery-' + chargeStatus)
  node.classList.add('fa-battery-full')
  chargeIndicator.innerHTML = chargeValue + '%'

  losesCharge = setInterval(function () {
    if (chargeValue >= 15 && chargeValue < 60) {
      node.classList.remove('fa-battery-full')
      node.classList.add('fa-battery-half')

      chargeStatus = 'half'
    } else if (chargeValue > 1 && chargeValue < 15) {
      node.classList.remove('fa-battery-half')
      node.classList.add('fa-battery-quarter')

      chargeStatus = 'quarter'
    } else if (chargeValue <= 1) {
      clearInterval(losesCharge)
      toggleHideClass(powerOnDisplay)
      toggleHideClass(powerOffDisplay)
      isPowerOn = !isPowerOn
    }

    chargeValue -= 1

    chargeIndicator.innerHTML = chargeValue + '%'
  }, energyIntensity)
}
