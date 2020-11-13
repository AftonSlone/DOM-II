// Your code goes here
const body = document.querySelector("body");
const navLink = document.querySelectorAll(".nav-link");
const headerImg = document.querySelector("header img");
const headerH2 = document.querySelector("header h2");
const headerP = document.querySelector("header p");
const contentSection = document.querySelector(".content-section");
const textContent = document.querySelector(".text-content");
const textContentH2 = document.querySelector(".text-content h2");
const textContentP = document.querySelectorAll(".text-content p");
const imgContent = document.querySelector(".img-content img");
const inverseContent = document.querySelector(
  ".img-content:nth-of-type(1) img"
);
const contentDestination = document.querySelector(".content-destination img");

navLink.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    e.target.style.fontSize = "200%";
    e.target.style.color = "lime";
  });
  link.addEventListener("mouseleave", (e) => {
    e.target.style.fontSize = "initial";
    e.target.style.color = "black";
  });
});

contentDestination.addEventListener("auxclick", (e) => {
  e.target.style.border = "2px dotted red";
});

headerImg.addEventListener("mousedown", (e) => {
  e.target.src =
    "https://www.affaritampa.com/wp-content/uploads/Party-Bus-Tampa-8.jpg";
});

headerH2.addEventListener("copy", (e) => {
  e.target.textContent = "Leave That Text Alone!!";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log(e);
    alert("DONT LEAVE");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "y") {
    alert("You cant jump here");
  }
});

textContent.addEventListener("click", (e) => {
  e.target.style.background = "Orange";
});

textContentP.forEach((p) => {
  p.addEventListener("click", (e) => {
    e.target.style.background = "blue";
    e.stopPropagation();
  });
});
inverseContent.addEventListener("mouseenter", (e) => {
  e.target.style.border = "5px solid grey";
});

document.addEventListener("scroll", (e) => {
  body.style.background = "yellow";
});

//Finished Project
