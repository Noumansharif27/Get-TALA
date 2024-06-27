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
    topMenu.style.top = "-100vh";

    h1.style.color = "#dadada";
    h2.style.color = "#dadada";
    menuIcon.style.color = "#dadada";

    flag = 0;
  }
});

let tl = gsap.timeline();

tl.from("#page-1 h1", {
  y: 60,
  opacity: 0,
  duration: 1.5,
})
  .from("#page-1 h2", {
    y: 60,
    opacity: 0,
    duration: 1.5,
    delay: "-0.8",
  })
  .from("#page-1 #floatng-text", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: "-0.5",
  })
  .to("#page-2 img", {
    scale: 1,
    // width: "100%",

    scrollTrigger: {
      trigger: "#page-2 img",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "bottom 30%",
      scrub: 3,
    },
  })
  .to("#page-2 h1", {
    rotateX: 90,
    // opacity: 0,
    // duration: 0.5,
    // delay: "-0.5",
    scrollTrigger: {
      trigger: "#page-2 h1",
      scrollar: "body",
      markers: true,
      scrub: true,
      start: "top 70%",
      end: "bottom 40%",
    },
  });
