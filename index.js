// Variables
var i = 0, // for Align
  toggle = 0; // For show and hide progress bar
const list = ["center", "right", "left"];
const idList = ["about", "movies", "links", "rwd", "footer", "navBar", "header", "t1", "t2", "t3"];

$(document).ready(function() {
  // Fade In by 3s
  $('#all').fadeIn(3000);
  // Calculate and Set progress bar percentage
  var docHeight = $(document).height(),
    windowHeight = $(window).height(),
    scrollPercent;
  $(window).scroll(function() {
    scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;
    $('#scrollBar').width(scrollPercent + '%');
  });
});

function align() {
  const isCenter = $("h2").hasClass("text-center");
  const isLeft = $("h2").hasClass("text-left");
  const isRight = $("h2").hasClass("text-right");
  if (isCenter) {
    $("h2").removeClass("text-center");
  } else if (isLeft) {
    $("h2").removeClass("text-left");
  } else if (isRight) {
    $("h2").removeClass("text-right");
  }
  $("h2").addClass("text-" + list[i]);
  i = i + 1;
  if (i === 3) i = 0;
}

function newHobby() {
  const heroName = prompt("What is your favourite Superhero? e.g. Batman, Ironman...");
  const newHero = "<div class='m-2 p-3 bg-dark text-light'>" + heroName + "</div>";
  $(".d-flex").append(newHero);
}

function scoll() {
  if (toggle === 1) {
    toggle = 0;
    $("#hideShow").hide();
  } else {
    toggle = 1;
    $("#hideShow").show()
  }
}

var bonusToggle = 0;

function bonus() {
  if (bonusToggle === 0) {
    alert("You have triggered the forbidden power of Infinity Gauntlet! Every thing is going to vanish now! Look what've you done! (Components will fade out with 1s by 1.5s.)");
    $("#loadSpinner").show();
    for (let i = 1; i <= idList.length; i++) {
      setTimeout(function timer() {
        $("#" + idList[i - 1]).fadeOut(1000);
        console.log(i);
        if (i === 10) {
          setTimeout(() => {
            $("#loadSpinner").hide();
            $("#t4").text("Go BACK!");
          }, 1000)
        }
      }, i * 1099);
    }
    bonusToggle = 1;
  } else {
    location.reload();
  }
}
