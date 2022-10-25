'use strict'

function generateRandomColor() {
  var hexCode = '6789ABCDEF'
  var color = ''

  for (var i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * hexCode.length)]
  }

  return '#' + color
}

function generateRandomGradient() {
  var gradient = ''
  var color1 = generateRandomColor()
  var color2 = generateRandomColor()
  var angle = Math.floor(Math.random() * 360)

  gradient = 'linear-gradient(' + angle + 'deg,' + color1 + ',' + color2 + ')'

  return gradient
}
