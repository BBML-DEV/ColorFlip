//select
const btn = document.getElementById('initialBTN');
const infoColor = document.querySelector(".color");


//addEvent
btn.addEventListener("click", () => {
  let color = random_rgba();
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
  infoColor.textContent = color
  console.log(color);
});



//generateCode
function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


