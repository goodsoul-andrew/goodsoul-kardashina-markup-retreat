const stars = document.getElementsByClassName("star");
console.log(stars.length);
for (let star of stars) {
  star.colored = false;
}
const starsStatus = new Array(stars.length).fill(false);

function colorStar(n) {
  console.log(n);
  const star = stars[n];
  console.log(star.colored);
  if (!star.colored) {
    star.src = "img/star.svg";
  } else {
    star.src = "img/star-empty.svg";
  }
  star.colored = !star.colored;
}

function StarEnterHandler(event) {
  const star = event.currentTarget;
  const idStart = star.id.indexOf("_");
  const n = Number.parseInt(star.id.substring(idStart + 1));
  for (let i = 0; i < n; i++) {
    colorStar(i);
  }
}
function starLeaveHandler(event) {
  for (let star of stars) {
    star.src = "img/star-empty.svg";
    star.colored = false;
  }
}

for (const el of stars) {
  el.addEventListener("mouseenter", StarEnterHandler);
  el.addEventListener("mouseleave", starLeaveHandler);
}
