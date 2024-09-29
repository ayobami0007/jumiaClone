


// window.onscroll = function () {
//     var navbar = document.getElementsByClassName("nav");
//     var sticky = navbar.offsetTop;

//     if (window.pageYoffset > sticky) {
//         navbar.classList.add("fixedNav")
//     } else {
//         navbar.classList.remove("fixed-nav")
//     }
// }



// countdown timer

let targetDate = new Date(" September 1, 2024 22:59:59")


function calculateTime(timeDifference) {
    // let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    let hours = Math.floor(timeDifference / (1000 * 60 * 60))
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeDifference % (1000 * 60)) / (1000))

    document.getElementById("hrs").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    document.getElementById("sec").innerHTML = seconds
    // return { hours, minutes, seconds}

}

function updateCountDown() {
    let today = new Date();

    let timeDifference = targetDate - today;

    if (timeDifference < 0) {
        clearInterval(countDownInterval);
        return
    }
    calculateTime(timeDifference)

}




let countDownInterval = setInterval(updateCountDown, 1000)





document.addEventListener('DOMContentLoaded', function() {
    const dropDownButton = document.querySelector(".accountsDropDown");
    const dropDownContent = document.querySelector(".dropDownContent");
    const dropDownIcon = document.getElementById("dropDownIcon");

    if (dropDownButton && dropDownContent && dropDownIcon) {
        dropDownButton.addEventListener('click', function(event) {
            dropDownContent.classList.toggle('activ');
            dropDownButton.classList.toggle('activ');

            if (dropDownContent.classList.contains('activ')) {
                dropDownIcon.classList.remove('fa-caret-down');
                dropDownIcon.classList.add('fa-caret-up');
            } else {
                dropDownIcon.classList.add('fa-caret-down');
                dropDownIcon.classList.remove('fa-caret-up');
            }
        });

        window.addEventListener('click', function(event) {
            if (!event.target.closest('.accountsDropDown')) {
                if (dropDownContent.classList.contains('activ')) {
                    dropDownContent.classList.remove('activ');
                    dropDownButton.classList.remove('activ');
                    dropDownIcon.classList.remove('fa-caret-up');
                    dropDownIcon.classList.add('fa-caret-down');
                }
            }
        });
    } else{
        console.error("Dropdown elements not found");
    }
});




document.addEventListener('DOMContentLoaded', function() {
// function setupHoverDropdown(dropDownButtonSelector, dropDownContentSelector) {
    const dropDownButton = document.querySelector('.fa-bars');
    const dropDownContent = document.querySelector('.sideBarLink');

    if (dropDownButton && dropDownContent) {
        let isHoveringDropdown = false;
        let isHoveringButton = false;

        // Show dropdown when hovering over button
        dropDownButton.addEventListener('mouseenter', function() {
            dropDownContent.classList.add('sideActive');
            isHoveringButton = true;
        });

        // Keep dropdown open when hovering over the content
        dropDownContent.addEventListener('mouseenter', function() {
            dropDownContent.classList.add('sideActive');
            isHoveringDropdown = true;
        });

        // Hide dropdown when the mouse leaves the button
        dropDownButton.addEventListener('mouseleave', function() {
            isHoveringButton = false;
            setTimeout(hideDropdownIfNeeded, 100);
        });

        // Hide dropdown when the mouse leaves the content
        dropDownContent.addEventListener('mouseleave', function() {
            isHoveringDropdown = false;
            setTimeout(hideDropdownIfNeeded, 100);
        });

        // Function to hide dropdown if not hovering over button or content
        function hideDropdownIfNeeded() {
            if (!isHoveringButton && !isHoveringDropdown) {
                dropDownContent.classList.remove('sideActive');
            }
        }
    } else {
        // console.error("Dropdown elements not found for hover dropdown");
    }
}

)




// sidebar link

const applianceLink = document.querySelector('.applianceLink');
 const sideSlide = document.querySelector('.sideSlide');
const appliancesDiv = document.querySelector('.appliances');
  const sideBar = document.querySelector('.sideBar')
applianceLink.addEventListener('mouseover', () =>{
    appliancesDiv.style.display = 'flex';
    sideSlide.style.gap  = '1px'
    sideBar.style.borderTopRightRadius = "0"
    sideBar.style.borderBottomRightRadius = "0"
    } )


    applianceLink.addEventListener('mouseout', () =>{
        appliancesDiv.style.display = 'none'
        sideSlide.style.gap = "8px"
         sideBar.style.borderTopRightRadius = "4px"
    sideBar.style.borderBottomRightRadius = "4px"
    } )