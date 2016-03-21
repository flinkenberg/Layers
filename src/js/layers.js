var Wraps = document.getElementsByClassName('layer');
var Layers = document.getElementsByClassName('layer-content');

if (Wraps.length == Layers.length) {

  var layersHeight = 0;
  for (var i = 0; i < Layers.length; i++) {
    for (var i = 0; i < Wraps.length; i++) {
      Wraps[i].style.height = Layers[i].scrollHeight+'px';
      if (!Layers[i].style.background) {
        Layers[i].style.background = 'white';
      }
    }
  }

  var LayersScroll = function() {
    for (var i = 0; i < Layers.length; i++) {
      var initWdth = Layers[i].offsetWidth;
      if (window.scrollY > Wraps[i].offsetTop) {
        Layers[i].style.position = 'fixed';
        Layers[i].style.top = 0;
        Layers[i].style.zIndex = -1;
        Layers[i].style.width = initWdth+'px';
      } else {
        Layers[i].style.position = 'static';
        Layers[i].style.top = 'auto';
        Layers[i].style.zIndex = 'initial';
      }
    }
  }

  document.addEventListener("scroll",LayersScroll);

} else {
  console.log('Not matching quantity of layer blocks and their containers');
}
