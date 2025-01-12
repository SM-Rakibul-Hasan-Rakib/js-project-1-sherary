var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  var rectanglelocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectanglelocation.left;

  if (insiderectval < rectanglelocation.width / 2) {
    console.log("left");
  } else {
    console.log("right");
  }
});
