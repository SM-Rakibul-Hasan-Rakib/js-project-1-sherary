var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  var rectanglelocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectanglelocation.left;

  if (insiderectval < rectanglelocation.width / 2) {
    console.log("left");
    // Map the value from a range of 0 to 250 to a range of 255 to 0
    var redcolor = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      255,
      0,
      insiderectval
    );

    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor}, 0, 0)`,
      duration: 0.3,
    });
  } else {
    console.log("right");
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, 255)`,
      duration: 0.3,
    });
  }
});

rect.addEventListener("mouseleaves", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
