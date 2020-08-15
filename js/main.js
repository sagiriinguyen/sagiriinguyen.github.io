var fsize = "large";
var fdisplay = "show";
function ret() {
  document.getElementsByTagName('footer')[0].click();
}

function show() {
  fdisplay = "show";
  document.getElementsByTagName('footer')[0].style.bottom = "0";
}

function hide() {
  fdisplay = "hide";
  document.getElementsByTagName('footer')[0].style.bottom = "-66px";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (document.documentElement.scrollTop == 0 || document.documentElement.scrollHeight - document.documentElement.scrollTop < 1041 ) {
    show();
  } else {
    hide();
  }
}

document.addEventListener("contextmenu", function contextmenu(e) {
  e.preventDefault();
  e.target.click();
});

document.addEventListener("click", function contextmenu(i) {
  if (fdisplay == "hide") {
    show();
  } else {
    hide();
  };
});
