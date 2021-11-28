window.addEventListener(
  "resize",
  () => {
    getAboutId();
  },
  true
);

var btnBack = document.querySelector(".back");

function getAboutId() {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (w > 950) {
    btnBack.textContent = 'back'
  } else {
    btnBack.textContent = ''
  }
}

getAboutId();