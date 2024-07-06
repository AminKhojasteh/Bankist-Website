"use strict";

///////////////////////////////////////////////////
// ELEMENTS
const [bodyEL] = document.getElementsByTagName("body");
const [topMenuLogoEL] = document.getElementsByClassName("top-menu_logo");
const [topMenuLinksUlEL] = document.getElementsByClassName("top-menu_opts");
const topMenuLinksEL = [
  ...document.getElementsByClassName("top-menu_opts_opt_link"),
];

const [topMenuEL] = document.getElementsByClassName("top-menu");
const [heroEL] = document.getElementsByClassName("hero");
const [sectionFeaturesEL] = document.getElementsByClassName("features");
const [sectionOperationsEL] = document.getElementsByClassName("operations");
const [sectionTestimonialsEL] = document.getElementsByClassName("testimonials");
const [sectionSignUpEL] = document.getElementsByClassName("sign-up");

const [learnMoreEL] = document.getElementsByClassName("hero_box_lft_link");

const imgsFeaturesEL = [...document.getElementsByClassName("features_box_img")];

const [operationsTabTransferEL] = document.getElementsByClassName(
  "operations_box_dess_tabs_tab--transfer"
);
const [operationsTabLoanEL] = document.getElementsByClassName(
  "operations_box_dess_tabs_tab--loan"
);
const [operationsTabClosingEL] = document.getElementsByClassName(
  "operations_box_dess_tabs_tab--closing"
);

const [operationsTextTransferEL] = document.getElementsByClassName(
  "operations_box_dess_des--1"
);
const [operationsTextLoanEL] = document.getElementsByClassName(
  "operations_box_dess_des--2"
);
const [operationsTextClosingEL] = document.getElementsByClassName(
  "operations_box_dess_des--3"
);

const testimonialsEL = [
  ...document.getElementsByClassName("testimonials_box_tstms_tstm-box"),
];

const [testimonialsArrowRghEL] = document.getElementsByClassName(
  "testimonials_box_tstms_arw-box--rgh"
);
const [testimonialsArrowLftEL] = document.getElementsByClassName(
  "testimonials_box_tstms_arw-box--lft"
);

const testimonialsDotsEL = [
  ...document.getElementsByClassName("testimonials_box_tstms_dots-box_dot"),
];

const [openAccBtnEL] = document.getElementsByClassName("sign-up_box_btn");

const [overlayEL] = document.getElementsByClassName("overlay");
const [openAccEL] = document.getElementsByClassName("open-account");
const [openAccClsBtn] = document.getElementsByClassName(
  "open-account_box_cls-btn"
);

///////////////////////////////////////////////////
// FUNCTIONS

///////////////////////////////////////////////////
// GLOBAL VARIABLES

const openAccTrigEls = [topMenuLinksEL[3], openAccBtnEL];
let sliderTransformNumbers = [-100, 0, 100];

///////////////////////////////////////////////////
//

topMenuLinksEL.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    const lowOpacity = 0.5;
    topMenuLogoEL.style.opacity = lowOpacity;
    topMenuLinksEL.forEach(function (item) {
      if (item !== link) {
        item.style.opacity = lowOpacity;
      }
    });
  });
  link.addEventListener("mouseout", function () {
    topMenuLogoEL.style.opacity = 1;
    topMenuLinksEL.forEach(function (item) {
      item.style.opacity = 1;
    });
  });
});

openAccTrigEls.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    overlayEL.classList.remove("remove");
    openAccEL.classList.remove("remove");

    const signUpRemove = function (event) {
      if (event.type === "click") {
        overlayEL.classList.add("remove");
        openAccEL.classList.add("remove");
        document.removeEventListener("keydown", signUpRemove);
      } else if (event.type === "keydown" && event.key === "Escape") {
        overlayEL.classList.add("remove");
        openAccEL.classList.add("remove");
        document.removeEventListener("keydown", signUpRemove);
      }
    };

    document.addEventListener("keydown", signUpRemove);
    openAccClsBtn.addEventListener("click", signUpRemove);
    overlayEL.addEventListener("click", signUpRemove);
  });
});

learnMoreEL.addEventListener("click", function (event) {
  event.preventDefault();
  sectionFeaturesEL.scrollIntoView({ behavior: "smooth" });
});

topMenuLinksUlEL.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("top-menu_opts_opt_link--feat")) {
    sectionFeaturesEL.scrollIntoView({ behavior: "smooth" });
  } else if (event.target.classList.contains("top-menu_opts_opt_link--oprn")) {
    sectionOperationsEL.scrollIntoView({ behavior: "smooth" });
  } else if (event.target.classList.contains("top-menu_opts_opt_link--tstms")) {
    sectionTestimonialsEL.scrollIntoView({ behavior: "smooth" });
  }
});

operationsTabTransferEL.addEventListener("click", function () {
  operationsTabTransferEL.classList.add("tab-up");
  operationsTabLoanEL.classList.remove("tab-up");
  operationsTabClosingEL.classList.remove("tab-up");
  operationsTextTransferEL.classList.remove("remove");
  operationsTextLoanEL.classList.add("remove");
  operationsTextClosingEL.classList.add("remove");
});
operationsTabLoanEL.addEventListener("click", function () {
  operationsTabTransferEL.classList.remove("tab-up");
  operationsTabLoanEL.classList.add("tab-up");
  operationsTabClosingEL.classList.remove("tab-up");
  operationsTextTransferEL.classList.add("remove");
  operationsTextLoanEL.classList.remove("remove");
  operationsTextClosingEL.classList.add("remove");
});
operationsTabClosingEL.addEventListener("click", function () {
  operationsTabTransferEL.classList.remove("tab-up");
  operationsTabLoanEL.classList.remove("tab-up");
  operationsTabClosingEL.classList.add("tab-up");
  operationsTextTransferEL.classList.add("remove");
  operationsTextLoanEL.classList.add("remove");
  operationsTextClosingEL.classList.remove("remove");
});

///// SLIDER
//

const moveActions = function (direction) {
  let sign;
  if (direction === "right") {
    sign = 1;
  } else if (direction === "left") {
    sign = -1;
  }
  for (let i = 0; i < 3; i++) {
    if (sliderTransformNumbers[i] !== 100 * sign) {
      sliderTransformNumbers[i] += 100 * sign;
      if (sliderTransformNumbers[i] === 0) {
        testimonialsDotsEL[i].classList.add("dark-dot");
      } else {
        testimonialsDotsEL[i].classList.remove("dark-dot");
      }
      testimonialsEL[
        i
      ].style.transform = `translateX(${sliderTransformNumbers[i]}%)`;
    } else {
      const transitionTime = getComputedStyle(
        testimonialsEL[i]
      ).transitionDuration;
      testimonialsEL[i].style.transition = "none";
      sliderTransformNumbers[i] = -100 * sign;
      testimonialsEL[
        i
      ].style.transform = `translateX(${sliderTransformNumbers[i]}%)`;
      setTimeout(() => {
        testimonialsEL[i].style.transition = `all ${transitionTime}`;
      }, 10);
    }
  }
};
testimonialsArrowRghEL.addEventListener("click", function () {
  moveActions("right");
});
testimonialsArrowLftEL.addEventListener("click", function () {
  moveActions("left");
});
testimonialsDotsEL.forEach(function (dotEl) {
  dotEl.addEventListener("click", function (event) {
    let currentDarkDotIndex;
    let clickedDotIndex;
    testimonialsDotsEL.forEach(function (element, i) {
      if (element.classList.contains("dark-dot")) {
        currentDarkDotIndex = i;
      }
      if (event.target === element) {
        clickedDotIndex = i;
      }
    });
    if (
      clickedDotIndex - currentDarkDotIndex === 1 ||
      clickedDotIndex - currentDarkDotIndex === -2
    ) {
      moveActions("left");
    } else if (
      clickedDotIndex - currentDarkDotIndex === -1 ||
      clickedDotIndex - currentDarkDotIndex === 2
    ) {
      moveActions("right");
    }
  });
});

///// STICKY MENU
//
const heroObserverCallback = function (entries, observer) {
  if (!entries[0].isIntersecting) {
    const topMenuHeight = getComputedStyle(topMenuEL).height;
    heroEL.style.marginTop = topMenuHeight;
    topMenuEL.classList.add("sticky");
  } else {
    topMenuEL.classList.remove("sticky");
    heroEL.style.marginTop = "0";
  }
};
const heroObserverOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${getComputedStyle(topMenuEL).height}`,
};
const heroObserver = new IntersectionObserver(
  heroObserverCallback,
  heroObserverOption
);
heroObserver.observe(heroEL);

///// FADE-OUT SECTIONS
//
const sectionObserverCallback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("fade-out");
      observer.unobserve(entry.target);
    }
  });
};
const sectionObserverOption = {
  root: null,
  threshold: 0.3,
};
const sectionObserver = new IntersectionObserver(
  sectionObserverCallback,
  sectionObserverOption
);
sectionFeaturesEL.classList.add("fade-out");
sectionOperationsEL.classList.add("fade-out");
sectionTestimonialsEL.classList.add("fade-out");
sectionSignUpEL.classList.add("fade-out");
sectionObserver.observe(sectionFeaturesEL);
sectionObserver.observe(sectionOperationsEL);
sectionObserver.observe(sectionTestimonialsEL);
sectionObserver.observe(sectionSignUpEL);

///// LAZY IMAGE
//
const imgObserverCallback = function (entries, observer) {
  const imgEl = entries[0].target;
  if (entries[0].isIntersecting === true) {
    let imgSource = imgEl.src;
    imgEl.src = imgSource
      .replace("-lazy", "")
      .replace("http://127.0.0.1:8080/", "");
    observer.unobserve(imgEl);
  }
};
const imgObserverOption = {
  root: null,
  threshold: 1,
};
const imgObserver = new IntersectionObserver(
  imgObserverCallback,
  imgObserverOption
);
imgsFeaturesEL.forEach(function (imgEl) {
  imgObserver.observe(imgEl);
});
