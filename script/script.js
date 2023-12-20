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

async function startAnimation() {
  for (let i = 0; i < allPath.length; i++) {
    allPath[i].style.opacity = 1;
    if (i === allPath.length - 1) {
      changeRootVarCss("--svg-color-primary", "var(--primary-color)");
      aboutMeUnderline.style.opacity = 0;
    } else if (i > allPath.length / 4) {
      changeRootVarCss("--show-menu", 1);
      changeRootVarCss("--y-transform-transition", "translateY(0px)");
    }
    await sleep(70);
  }

  const student = document.getElementsByClassName("student");
  for (let i = 0; i < student.length; i++) {
    const word = student[i];
    word.classList.add("opacity-3");
    await sleep(70);
  }
}

startAnimation();

var howSkillsBar = document.querySelector(".fake-skills-interrogation button");
var fakeSkills = document.querySelector(".fake-skills");
var undoFakeSkills = document.querySelector(".true-to-fake button");

howSkillsBar.onclick = () => {
  fakeSkills.style.width = "0";
  fakeSkills.style.borderRaduis = "100%";
};

undoFakeSkills.onclick = () => {
  fakeSkills.style.width = "100%";
  fakeSkills.style.borderRaduis = "0";
};

var currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();

function getAboutId() {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (w >= 800) return "#about";
  return "#about-div";
}

const linksToAbout = document.querySelectorAll("a.link-to-about-me");
setHrefForLinkToAbout();
function setHrefForLinkToAbout() {
  for (let i = 0; i < linksToAbout.length; i++)
    linksToAbout[i].setAttribute("href", `/${getAboutId()}`);
}

window.addEventListener(
  "resize",
  () => {
    setHrefForLinkToAbout();
  },
  true
);

// Fonctions utilitaires
function changeRootVarCss(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let hideProject = true;
function showMoreProjects() {
  hideProject = !hideProject;
  if (hideProject) {
    document.getElementById("show-more-projects").classList.remove("hidden");
    document.getElementById("show-less-projects").classList.add("hidden");
    document.getElementById("show-less-projects").scrollIntoView();
    changeRootVarCss("--hide-projects", "none");
  } else {
    document.getElementById("show-more-projects").classList.add("hidden");
    document.getElementById("show-less-projects").classList.remove("hidden");
    changeRootVarCss("--hide-projects", "block");
  }
}
