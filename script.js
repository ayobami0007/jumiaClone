let slideIndex = 0;
showSlides(); // You need to call the function

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imgShow");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Fix: change `slides.index` to `slides.length`

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");  // Fix: add space before "active"
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";  // Fix: add space before "active"
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


window.onscroll = function(){
    var navbar = document.getElementsByClassName("nav");
    var sticky = navbar.offsetTop;

    if(window.pageYoffset > sticky){
navbar.classList.add("fixedNav")
    } else{
        navbar.classList.remove("fixed-nav")
    }
}



// countdown timer

let targetDate = new Date(" September 1, 2024 22:59:59")


function calculateTime(timeDifference) {
    // let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    let hours = Math.floor(timeDifference / (1000 * 60 * 60  )) 
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60 )) / (1000 * 60 ) )
    let seconds = Math.floor((timeDifference % (1000 * 60  )) / (1000  ) )

    document.getElementById("hrs").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    document.getElementById("sec").innerHTML = seconds
    // return { hours, minutes, seconds}
    
}

function updateCountDown(){
let today = new Date();

let timeDifference = targetDate - today;

if (timeDifference < 0){
    clearInterval(countDownInterval);
return
}
 calculateTime(timeDifference)

}




let countDownInterval = setInterval(updateCountDown, 1000)