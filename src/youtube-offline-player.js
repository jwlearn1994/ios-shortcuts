window.addEventListener('visibilitychange', function(e) {
  e.stopImmediatePropagation();
}, true);

// call this when everything is done
completion();
