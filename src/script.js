let screenHeight = screen.height
let screenWidth = screen.width

screenRes = () => {
  const  screenHeightinfo = document.querySelector('.screen-height')
  const  screenWidthinfo = document.querySelector('.screen-width')

  screenHeightinfo.textContent = screenHeight
  screenWidthinfo.textContent = screenWidth
}

screenRes()
const closeThis = document.querySelector('.theme')

closem = () => {
  window.close()
}

closeThis.addEventListener('click', closem)