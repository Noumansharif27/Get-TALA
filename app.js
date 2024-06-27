let menuIcon = document.querySelector("#icon");
let line1 = document.querySelector("#icon #line-1");
let line2 = document.querySelector("#icon #line-2");

let topMenu = document.querySelector("#top-menu");
let h1 = document.querySelector("#nav-bar h1");
let h2 = document.querySelector("#nav-options h2");

let flag = 0;

menuIcon.addEventListener("click", () => {
  if (flag == 0) {
    topMenu.style.top = "0%";

    h1.style.color = "#dadada";
    h2.style.color = "#2b2b2b";
    line1.style.backgroundColor = "#2b2b2b";
    line2.style.backgroundColor = "#2b2b2b";
    line2.style.transformOrigin = "0% 50%";
    line1.style.transformOrigin = "0% 50%";
    line1.style.width = "70%";
    // line1.style.ZIndex = "5";

    line2.style.transform = "rotate(-40deg)";
    line1.style.transform = "rotate(40deg)";
    menuIcon.style.justifyContent = "sapce-evnely";

    // line1.style.backgroundColor = `#232025`;
    // line2.style.backgroundColor = `#232025`;
    // line1.style.transform = `rotate(40deg)`;
    // line1.style.width = `70%`;
    // line2.style.transform = `rotate(-40deg)`;
    // line2.style.backgroundColor = `#232025`;

    flag = 1;
  } else {
    topMenu.style.top = "-100vh";

    h1.style.color = "#dadada";
    h2.style.color = "#dadada";
    // line1.style.width = "100%";
    line1.style.backgroundColor = "#cecece";
    line2.style.backgroundColor = "#cecece";
    line2.style.transform = "rotate(00deg)";
    line1.style.transform = "rotate(-0deg)";
    menuIcon.style.justifyContent = "sapce-between";

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
    rotateX: 0,
    opacity: 1,
    // duration: 0.5,
    // delay: "-0.5",
    scrollTrigger: {
      trigger: "#page-2 h1",
      scroller: "body",
      // markers: true,
      scrub: 2,
      start: "top 60%",
      end: "top 50%",
    },
  });
// .to("#page-6 .text-1", {
//   x: "-80",
//   duration: 1,
//   delay: "0.1",
//   scrollTrigger: {
//     trigger: "#page-6",
//     scrollar: "body",
//     markers: true,
//     // start: "top 10%",
//     // end: "top 10%",
//     scrub: 3,
//   },
// });

let textH1 = document.querySelectorAll("#page-6 .text-1 h1");
textH1.forEach(function (elem) {
  gsap.to("elem", {
    transform: "translateX(-96%)",

    duration: 4,
    // delay: "0.1",
    scrollTrigger: {
      trigger: "#page-6",
      scroller: "#main",
      markers: true,
      scrub: 3,
      start: "top top",
      end: "bottom bottom",
    },
  });
});

let textH2 = document.querySelectorAll("#page-6 .text-2 h1");
textH1.forEach(function (elem) {
  gsap.to("elem", {
    transform: "translateX(0%)",

    duration: 4,
    ease: "linear",
    // delay: "0.1",
    scrollTrigger: {
      trigger: "#page-6",
      scroller: "#main",
      markers: true,
      // start: "top 10%",
      // end: "top 10%",
      scrub: 3,
    },
  });
});
