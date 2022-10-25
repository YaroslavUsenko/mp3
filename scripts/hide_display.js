'use strict'

function toggleHideClass(node) {
  if (node.style.display === 'none') {
    node.style.display = 'block'
  } else {
    node.style.display = 'none'
  }
}
