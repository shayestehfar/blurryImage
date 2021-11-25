// get elements from DOM
const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

const mainFunction = () => {
  let load = 0
  const blurring = () => {
    load++
    if (load > 99) {
      clearInterval(int)
    }
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    loadingText.textContent = `${load}`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
  }
  let int = setInterval(blurring, 30)
}
document.addEventListener('DOMContentLoaded', mainFunction())
//Helper function to scale a number of a range to another range
const scale = function (number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
