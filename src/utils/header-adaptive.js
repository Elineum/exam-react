let header = document.querySelector(".page-head__absolute-bg");

if (window.pageYOffset > 100)
  header.classList.add(".page-head__absolute-bg_visible");
else header.classList.remove(".page-head__absolute-bg_visible");
