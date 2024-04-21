let bx1 = document.getElementsByClassName("bx")[0];
let left = document.getElementById("left");
let right = document.getElementById("right");

left.addEventListener("click", () => {
  bx1.scrollLeft += 100;
});
right.addEventListener("click", () => {
  bx1.scrollLeft -= 100;
});
let scroll_watch = document.getElementsByClassName("scroll_watch");
let main_watch = document.getElementsByClassName("main_watch")[0];
let brand_name = document.getElementsByClassName("brand_name")[0];
let img = document.getElementById("img")[0];
let svg = document.getElementById("svg");
let price = document.getElementsByClassName("price")[0];
let span_number = document.getElementById("span_number");

scroll_watch[0].addEventListener("click", () => {
  svg.innerHTML = "";
  main_watch.src = "img/w1.png";
  brand_name.innerHTML = `
  <h1> <a href="#">CITIZEN</a> </h1>
                        <svg id="svg">
                            <text x="0%" y="90%">
                                Gen 5
                            </text>
                        </svg>
                        <div class="price">
                            <h6>
                                Rs 15999/-
                            </h6>
                        </div>
  `;
  span_number.innerText = "1";
  console.log(price);
});
scroll_watch[1].addEventListener("click", () => {
  main_watch.src = "img/w2.png";
  brand_name.innerHTML = `<h1> <a href="#">CASIO</a> </h1>
                        <svg id="svg">
                            <text x="0%" y="90%">
                            EDIFICE 
                            </text>
                        </svg>
                        <div class="price">
                            <h6>
                                Rs 28000/-
                            </h6>
                        </div>`;
  span_number.innerText = "2";
  console.log(price);
});
scroll_watch[2].addEventListener("click", () => {
  main_watch.src = "img/w3.png";
  brand_name.innerHTML = `<h1>
  <a href="#">FOSSIL</a>
</h1>
<svg id="svg">
  <text x="0%" y="90%">
      Knight
  </text>
</svg>
<div class="price">
  <h6>
      Rs 18999/-
  </h6>
</div> `;
  span_number.innerText = "3";
  
});
scroll_watch[3].addEventListener("click", () => {
  main_watch.src = "img/w4.png";
  brand_name.innerHTML = `<h1>
  <a href="#">TITAN</a>
</h1>
<svg id="svg">
  <text x="0%" y="90%">
      RAGA
  </text>
</svg>
<div class="price">
  <h6>
      Rs 8999/-
  </h6>
</div>`;
  span_number.innerText = "4";
});
