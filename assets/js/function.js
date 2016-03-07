var start = function() {
    document.onfullscreenchange = function() {
      screen.orientation.lock('landscape').then(startInternal);
    }
    document.documentElement.requestFullscreen();
  }