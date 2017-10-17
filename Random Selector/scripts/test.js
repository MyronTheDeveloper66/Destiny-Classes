$(document).ready(function() {
  var $pageSwitch = function (url) {
      $("#results").fadeOut(function() {
        $("#results").load(url, function() {
          $("#results").fadeIn(300);
        })  
    })
  }
    $("#titan").on('click', function(event) { 
        event.preventDefault();
        $pageSwitch("titan.html #titan-results");
    });
    $("#warlock").on('click', function(event) { 
        event.preventDefault();
        $pageSwitch("warlock.html #warlock-results");
    });
    $("#hunter").on('click', function(event) { 
        event.preventDefault();
        $pageSwitch("hunter.html #hunter-results");
    });
    $("#home").on('click', function(event) { 
        event.preventDefault();
        $pageSwitch("class.html #home-results");
    });
})