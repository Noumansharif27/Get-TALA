let menuIcon = document.querySelector("i");
let topMenu = document.querySelector("#top-menu");
let h1 = document.querySelector("#nav-bar h1");
let h2 = document.querySelector("#nav-options h2");

let flag = 0;

menuIcon.addEventListener("click", () => {
  if (flag == 0) {
    topMenu.style.top = "0%";

    h1.style.color = "#2b2b2b";
    h2.style.color = "#2b2b2b";
    menuIcon.style.color = "#2b2b2b";

    flag = 1;
  } else {
    topMenu.style.top = "-100%";

    h1.style.color = "#dadada";
    h2.style.color = "#dadada";
    menuIcon.style.color = "#dadada";

    flag = 0;
  }
});
