// POPOVER
$(function() {
  $('[data-toggle="popover"]').popover();
});

// close popover
$(".popover-dismiss").popover({
  trigger: "focus"
});

// WOW
// new WOW().init();

//Color or background Gradient
let colors = [
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0]
];

//Current Position
let pos = 0;
//Indices
let indices = [0, 1, 2, 3];
//Transition speed
let speed = 0.01;

function bgGradient() {
  //colors from left
  let cl_0 = colors[indices[0]];
  let cl_1 = colors[indices[1]];
  //colors from right
  let cr_0 = colors[indices[2]];
  let cr_1 = colors[indices[3]];

  //next position
  let newPos = 1 - pos;
  //color numbers for r,g,b values
  let r1 = Math.round(newPos * cl_0[0] + pos * cl_1[0]);
  let g1 = Math.round(newPos * cl_0[1] + pos * cl_1[1]);
  let b1 = Math.round(newPos * cl_0[2] + pos * cl_1[2]);
  //first color gradient
  let col1 = `rgb(${r1},${g1},${b1})`;

  let r2 = Math.round(newPos * cr_0[0] + pos * cr_1[0]);
  let g2 = Math.round(newPos * cr_0[1] + pos * cr_1[1]);
  let b2 = Math.round(newPos * cr_0[2] + pos * cr_1[2]);
  //second color gradient
  let col2 = `rgb(${r2},${g2},${b2})`;

  let colorGradient = `linear-gradient(-45deg, ${col1},${col2}) scroll`;
  document.body.style.background = colorGradient;

  //Gradient speed with position
  pos += speed;
  if (pos >= 1) {
    pos %= 1;
    indices[0] = indices[1];
    indices[2] = indices[3];

    //To target other colors
    indices[1] =
      (indices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    indices[3] =
      (indices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}

bgGradient();
setInterval(bgGradient, 10);
