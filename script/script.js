var aboutMeUnderline = document.querySelector(".about-me-underline");

var aboutMeClicable = document.querySelector(".about-me-clicable");
var aboutMe = document.querySelector(".about-me");

aboutMeClicable.onmouseover = () => {
  aboutMeUnderline.style.opacity = 1;
  changeRootVarCss("--about-me-color", "var(--primary-color)");
};

aboutMeClicable.onmouseout = () => {
  changeRootVarCss("--about-me-color", "black");
  aboutMeUnderline.style.opacity = 0;
};

var allPath = document.querySelectorAll(".home-container svg path");

async function demo() {
  for (let i = 0; i < allPath.length; i++) {
    allPath[i].style.opacity = 1;
    if (i === allPath.length - 1) {
      changeRootVarCss("--svg-color-primary", "var(--primary-color)");
      aboutMeUnderline.style.opacity = 0;
    } else if (i === allPath.length - 40) {
      changeRootVarCss("--show-menu", 1);
      changeRootVarCss("--y-transform-transition", "translateY(0px)");
    }
    await sleep(70);
  }
}

demo();

for (let i = 0; i < allPath.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

function changeRootVarCss(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
