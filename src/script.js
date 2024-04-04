let screenHeight = window.screen.height;
let screenWidth = window.screen.width;

const screenHeightInfo = document.querySelector('.screen-height');
const screenWidthInfo = document.querySelector('.screen-width');

const updateScreenRes = () => {
  screenHeight = window.screen.height;
  screenWidth = window.screen.width;
  screenHeightInfo.textContent = screenHeight;
  screenWidthInfo.textContent = screenWidth;
  const sizeHeight = document.querySelector('.height-size'
  ).textContent = "  " +  screenHeight
  
  const sizeWidth = document.querySelector('.width-size'
  ).textContent = "  " +  screenWidth

};

// Initial update
updateScreenRes();

// Update on window resize
window.addEventListener('resize', updateScreenRes);
