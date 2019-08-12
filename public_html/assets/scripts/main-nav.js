window.onscroll = function() {
  toggleMainNav();
};

function toggleMainNav() {
  if (document.documentElement.scrollTop > 5) {
    document
      .getElementById("main-nav__wrapper")
      .classList.add("main-nav__wrapper-solid");
  } else {
    document
      .getElementById("main-nav__wrapper")
      .classList.remove("main-nav__wrapper-solid");
  }
}
