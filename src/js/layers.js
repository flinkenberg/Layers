var Wraps = document.getElementsByClassName('layer');
    Layers = document.getElementsByClassName('layer-content');
    triggerPoint = -2;

(function(){
  LayersScroll();
}());

function LayersScroll() {
  for (var i = 0; i < Layers.length; i++) {
    Wraps[i].style.height = Layers[i].scrollHeight+'px';
    if (Wraps[i].scrollHeight > document.documentElement.clientHeight) {
      if ((Wraps[i].offsetTop+Wraps[i].scrollHeight - window.scrollY) < document.documentElement.clientHeight) {
        !Wraps[i].className.match(/(?:^|\s)pinnedBottom(?!\S)/) ? Wraps[i].className += ' pinnedBottom' : null;
      } else {
        Wraps[i].className =  Wraps[i].className.replace(/(?:^|\s)pinnedBottom(?!\S)/g, '')
      }
    } else {
      if (window.scrollY > Wraps[i].offsetTop+triggerPoint) {
        !Wraps[i].className.match(/(?:^|\s)pinned(?!\S)/) ? Wraps[i].className += ' pinned' : null;
      } else {
        Wraps[i].className =  Wraps[i].className.replace(/(?:^|\s)pinned(?!\S)/g, '')
      }
    }
  }
}

document.removeEventListener("scroll",LayersScroll);
document.addEventListener("scroll",LayersScroll);
