var Wraps = document.getElementsByClassName('layer');
var Layers = document.getElementsByClassName('layer-content');

function LayersScroll() {
  for (var i = 0; i < Layers.length; i++) {
    if (Wraps[i].scrollHeight > document.documentElement.clientHeight) {
      if ((Wraps[i].offsetTop+Wraps[i].scrollHeight - window.scrollY) < document.documentElement.clientHeight) {
        !Wraps[i].className.match(/(?:^|\s)pinned(?!\S)/) ? Wraps[i].className += ' pinned' : null;
      } else {
        Wraps[i].className =  Wraps[i].className.replace(/(?:^|\s)pinned(?!\S)/g, '')
      }
    } else {
      if (window.scrollY > Wraps[i].offsetTop) {
        !Wraps[i].className.match(/(?:^|\s)pinned(?!\S)/) ? Wraps[i].className += ' pinned' : null;
      } else {
        Wraps[i].className =  Wraps[i].className.replace(/(?:^|\s)pinned(?!\S)/g, '')
      }
    }
  }
}

for (var i = 0; i < Layers.length; i++) {
  for (var i = 0; i < Wraps.length; i++) {
    Wraps[i].style.height = Layers[i].scrollHeight+'px';
    Wraps[i].style.width = Layers[i].offsetWidth+'px';
  }
}

document.removeEventListener("scroll",LayersScroll);
document.addEventListener("scroll",LayersScroll);
