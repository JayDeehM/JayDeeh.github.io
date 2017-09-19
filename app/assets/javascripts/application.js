// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// a key map of allowed keys

var allowedKeys = {
  84: 't',
  85: 'u',
  75: 'k',
  77: 'm',
  76: 'l'
};

var konamiCode = ['t', 'u', 'k', 'm', 'u', 'l'];

var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {

  var key = allowedKeys[e.keyCode];

  var requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {

    konamiCodePosition++;

    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.getElementById('add-portfolio').style.display = "block";
  document.getElementById('add-portfolio1').style.display = "block";
  document.getElementById('update-portfolio').style.display = "block";
  document.getElementById('update-portfolio1').style.display = "block";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "35%";
    document.getElementById("main").style.marginLeft = "35%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


