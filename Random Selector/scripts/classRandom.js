$(document).ready(function() {
  const hunterImage = "/images/ClassSelector/hunter.jpg";
  const titanImage = "/images/ClassSelector/titan.jpg";
  const warlockImage = "/images/ClassSelector/warlock.jpg";
  function classHtml(name, image) {
    return `<h2>The ${name} Class has been chosen!</h2>
            <img src = ${image}>
           `
  }
  function randClass() {
      let randNum = Math.floor(Math.random() * 3) + 1;
      switch(randNum) {
          case 1: $("#functionResults").append(classHtml("Hunter", hunterImage));
          break;
          case 2: $("#functionResults").append(classHtml("Titan", titanImage));
          break;
          case 3: $("#functionResults").append(classHtml("Warlock", warlockImage));
          break;
      }
  }
  $("input[type=checkbox]").on("change", function(e) {
      if($(this).is(':checked')) {
          randClass();
       } else {
          $("#functionResults").html(" "); 
       }
  })
})
