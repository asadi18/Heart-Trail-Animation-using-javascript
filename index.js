const bodyEL = document.querySelector("body");

const mouseMoveAnimation = (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  console.log("x-position = " + xPos + " and y-position = " + yPos); // just for checking position of xy in browser console
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEL.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};

bodyEL.addEventListener("mousemove",mouseMoveAnimation)