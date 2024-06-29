function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

smoothScroll();

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

    h1.style.color = "#2b2b2b";
    h2.style.color = "#2b2b2b";
    line1.style.backgroundColor = "#2b2b2b";
    line2.style.backgroundColor = "#2b2b2b";
    line1.style.width = "1.3rem";
    line2.style.width = "1.3rem";

    line2.style.transform = "rotate(-45deg)";
    line1.style.transform = "rotate(45deg)";
    menuIcon.style.justifyContent = "sapce-evnely";
    menuIcon.style.display = "block";

    flag = 1;
  } else {
    topMenu.style.top = "-100vh";

    h1.style.color = "#dadada";
    h2.style.color = "#dadada";

    line2.style.width = "3vh";
    line1.style.width = "1.75rem";

    line1.style.backgroundColor = "#cecece";
    line2.style.backgroundColor = "#cecece";
    line2.style.transform = "rotate(00deg)";
    line1.style.transform = "rotate(00deg)";
    menuIcon.style.display = "flex";
    menuIcon.style.flexDirection = "column";
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
    duration: 0.8,
    delay: "-0.8",
  })
  .to("#page-2 img", {
    scale: 1,
    // width: "100%",

    scrollTrigger: {
      trigger: "#page-2 img",
      scroller: "#main",
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
      scroller: "#main",
      // markers: true,
      scrub: 2,
      start: "top 60%",
      end: "top 50%",
    },
  });

let body = document.querySelector("body");

// animating text to move from left to right respectively to the scroll

let textH1 = document.querySelectorAll(".scroll-text-1 h1");
textH1.forEach(function (elem) {
  gsap.to(elem, {
    transform: "translateX(-20%)",
    duration: 7,
    scrollTrigger: {
      trigger: "#page-6",
      scroller: "#main", // Assuming this is the scrollable element
      // markers: true,
      scrub: 3,
      start: "top 40%",
      end: "bottom 10%",
    },
  });
});

// Animation for second line elements (adjust selector if needed)
let textH2 = document.querySelectorAll(".scroll-text-2 h1");
textH2.forEach(function (elem) {
  gsap.to(elem, {
    transform: "translateX(20%)",
    duration: 7,
    ease: "linear",
    scrollTrigger: {
      trigger: "#page-6",
      scroller: "#main", // Assuming this is the scrollable element
      // markers: true,
      scrub: 3,
      start: "top 40%",
      end: "bottom 10%",
      // Adjust start and end points if needed
    },
  });
});

// animating the yes or no options with gif mouse move
let yesEvent = document.querySelector("#yes");
let bananaGif = document.querySelector("#yes img");

yesEvent.addEventListener("mousemove", (details) => {
  bananaGif.style.opacity = 1;
  bananaGif.style.left = `${details.x - 90}px`;
  bananaGif.style.top = `${details.y - 400}px`;
});

yesEvent.addEventListener("mouseleave", () => {
  bananaGif.style.opacity = 0;
});

let noEvent = document.querySelector("#no");
let syrupGif = document.querySelector("#no img");

noEvent.addEventListener("mousemove", (details) => {
  syrupGif.style.opacity = 1;
  syrupGif.style.left = `${details.x - 790}px`;
  syrupGif.style.top = `${details.y - 390}px`;
});

noEvent.addEventListener("mouseleave", () => {
  syrupGif.style.opacity = 0;
});

// animating the turbo-image
gsap.to("#page-5 img", {
  rotate: 360,
  ease: "linear",
  duration: 2,
  repeat: -1, // Infinite the animation
});

gsap.to("#line-div", {
  width: "85vw", // Target width
  duration: 12, // Increased duration for slower animation
  ease: Expo.inOut, // Easing function for smooth start and end
  scrollTrigger: {
    trigger: "#page-3 #line-div",
    scroller: "#main",
    markers: true, // Optional: Visualize trigger area (remove if not needed)
    scrub: true, // Link animation progress to scrolling
    // start: "top top",
    // end: "top top",
  },
});

// let fruitName = document.querySelectorAll("#page-3 > h2");
// fruitName.addEventListener("mousemove", () => {
//   alert("hi");
// });

let fruitName = document.querySelector(".fruit-name");

fruitName.addEventListener("mousemove", (details) => {
  gsap.to("#page-3 #mango-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    x: `${details.x - 90}`,
    y: `${details.y - 300}`,
    duration: 1.5,
  });
});

fruitName.addEventListener("mouseleave", () => {
  gsap.to("#page-3 #mango-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    duration: 0.5,
  });
});

fruitName.addEventListener("mousemove", (details) => {
  gsap.to("#page-3 #banana-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    x: `${details.x - 90}`,
    y: `${details.y - 300}`,
    duration: 1.5,
  });
});

fruitName.addEventListener("mouseleave", () => {
  gsap.to("#page-3 #banana-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    duration: 0.5,
  });
});

fruitName.addEventListener("mousemove", (details) => {
  gsap.to("#page-3 #pineapple-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    x: `${details.x - 90}`,
    y: `${details.y - 300}`,
    duration: 1.5,
  });
});

fruitName.addEventListener("mouseleave", () => {
  gsap.to("#page-3 #pineapple-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    duration: 0.5,
  });
});

fruitName.addEventListener("mousemove", (details) => {
  gsap.to("#page-3 #pithaya-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    x: `${details.x - 90}`,
    y: `${details.y - 290}`,
    duration: 1.5,
  });
});

fruitName.addEventListener("mouseleave", () => {
  gsap.to("#page-3 #pithaya-card", {
    opacity: 1, // Adjust the properties as needed
    ease: Expo.easeInOut,
    duration: 0.5,
  });
});
// gsap.to("#page-3 .card .fruit-name", {
//   opacity: 1, // Adjust the properties as needed
//   ease: Expo.easeInOut,
// });
