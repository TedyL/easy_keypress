
function handleKeysCodeKeyDownEvent(vars){
  var register_key_code = function(event){
    if (vars.indexOf(event.keyCode) != -1 ){
      event.preventDefault();
      return false
    }
  }
  return register_key_code
}

//Multiple Binding KeyDown Keys Event
function registerKeyDownEvent(elem){
  for (var key in elem){
    var cls;
    key == "window" || key == "document" ? cls = window[key] : cls = key
    $(cls).keydown(handleKeysCodeKeyDownEvent(elem[key]));
   
  }
}