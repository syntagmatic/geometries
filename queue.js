/* Looping */

function render() {
  var i = Math.min(queue.length, 12);
  while (i-- > 0) {
    queue.pop()();
  }
};

window.requestAnimFrame =   window.requestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  function(/* function */ callback, /* DOMElement */ element){
    window.setTimeout(callback, 16);
  };

function startLoop() {
  (function animloop(){
    requestAnimFrame(animloop);
    render();
  })();
}
