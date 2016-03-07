var show = function() {
     console.log("Orientation type is " + screen.orientation.type);
     console.log("Orientation angle is " + screen.orientation.angle);
  }

  screen.orientation.addEventListener("change", show);
  window.onload = show;