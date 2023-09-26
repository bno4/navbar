let lastScroll = 0; // on déclare la variable dans laquelle sera stockée la nouvelle valeur de scrollY

window.addEventListener("scroll", () => {
  //   user has scrolled down. On cache la nav
  if (window.scrollY > lastScroll) {
    navbar.style.top = "-60px";
    // la navbar est une id. JS la capte automatique dans le html... pas besoin de getElementById
  }
  //   user has scrolled up. On montre la nav.
  else {
    navbar.style.top = 0;
  }
  lastScroll = window.scrollY;
});
