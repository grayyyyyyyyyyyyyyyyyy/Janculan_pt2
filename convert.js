let meter, centimeter;
let compute = 0;
let centimeters = 0.01;
function computeValue(){

  meter = parseInt(document.getElementById("meters").value);
  compute = meter / centimeters;

  document.getElementById("output").value = compute;
}

document.getElementById("btncompute").addEventListener("click", computeValue);