const results = document.getElementById("results");
const button = document.getElementById("random");
const hunterCode = `<h1>Hunter Class Chosen</h1>`;
const titanCode = `<h1>Titan Class Chosen</h1>`;
const warlockCode = `<h1>Warlock Class Chosen</h1>`;
const wrap = document.querySelector(".wrap");
const slidesCode = `
<header>
    <label for="slide-1-trig">1</label>
    <label for="slide-2-trig">2</label>
    <label for="slide-3-trig">3</label>
    <label for="slide-4-trig">4</label>
    <label for="slide-5-trig">5</label>
</header>
<input id="slide-1-trig" type="radio" name="slides" checked>
<section class="img img-one"></section>
<input id="slide-2-trig" type="radio" name="slides">
<section class="img img-two"></section>
<input id="slide-3-trig" type="radio" name="slides">
<section class="img img-three"></section>
<input id="slide-4-trig" type="radio" name="slides">
<section class="img img-four"></section>
<input id="slide-5-trig" type="radio" name="slides">
<section class="img img-five"></section>
`;
button.addEventListener("click", function randClass() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    wrap.innerHTML = slidesCode;
    let imgOne = document.querySelector(".img-one");
    let imgTwo = document.querySelector(".img-two");
    let imgThree = document.querySelector(".img-three");
    let imgFour = document.querySelector(".img-four");
    let imgFive = document.querySelector(".img-five");
    
    switch(randNum) {
        case 1: results.innerHTML = hunterCode;
                imgOne.style.background = "url('images/hunter/hunter1.jpg') no-repeat";
                imgOne.style.backgroundSize = "cover";  
                imgTwo.style.background = "url('images/hunter/hunter2.jpg') no-repeat";
                imgTwo.style.backgroundSize = "cover";
                imgThree.style.background = "url('images/hunter/hunter3.jpg') no-repeat";
                imgThree.style.backgroundSize = "cover";
                imgFour.style.background = "url('images/hunter/hunter4.jpg') no-repeat";
                imgFour.style.backgroundSize = "cover";
                imgFive.style.background = "url('images/hunter/hunter5.jpg') no-repeat";
                imgFive.style.backgroundSize = "cover";
        break;
        case 2: results.innerHTML = titanCode;
                imgOne.style.background = "url('images/titan/titan1.jpg') no-repeat";
                imgOne.style.backgroundSize = "cover";  
                imgTwo.style.background = "url('images/titan/titan2.jpg') no-repeat";
                imgTwo.style.backgroundSize = "cover";
                imgThree.style.background = "url('images/titan/titan3.jpg') no-repeat";
                imgThree.style.backgroundSize = "cover";
                imgFour.style.background = "url('images/titan/titan4.jpg') no-repeat";
                imgFour.style.backgroundSize = "cover";
                imgFive.style.background = "url('images/titan/titan5.jpg') no-repeat";
                imgFive.style.backgroundSize = "cover";
        break; 
        case 3: results.innerHTML = warlockCode;
                imgOne.style.background = "url('images/warlock/warlock1.jpg') no-repeat";
                imgOne.style.backgroundSize = "cover";  
                imgTwo.style.background = "url('images/warlock/warlock2.jpg') no-repeat";
                imgTwo.style.backgroundSize = "cover";
                imgThree.style.background = "url('images/warlock/warlock3.jpg') no-repeat";
                imgThree.style.backgroundSize = "cover";
                imgFour.style.background = "url('images/warlock/warlock4.jpg') no-repeat";
                imgFour.style.backgroundSize = "cover";
                imgFive.style.background = "url('images/warlock/warlock5.jpg') no-repeat";
                imgFive.style.backgroundSize = "cover";
        break;
    }
})
