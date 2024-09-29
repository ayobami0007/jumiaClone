
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Consistent naming for user data
  const signInSection = document.getElementById('signInSection');
  const loggedInOptions = document.getElementById('loggedInOptions');
  const logoutBtn = document.getElementById('logoutBtn');

  // Check if the user is logged in
  if (currentUser && currentUser.name) {
    document.querySelector('.acccountText').textContent = `Hi, ${currentUser.name.split(' ')[0]}`;

    // Hide the sign-in option and show logged-in options
    signInSection.style.display = 'none';
    loggedInOptions.style.display = 'block';
    
    // Logout functionality
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser'); // Remove user data from local storage
      alert("You have been logged out.");
      window.location.href = '/signIn/signIn.html'; // Redirect to login page after logout
    });
  } else {
    // If the user is not logged in, show only the sign-in option
    signInSection.style.display = 'block';
    loggedInOptions.style.display = 'none';
  
  }


  const cartTextNav = document.querySelector('.cartNo');
  function displayCartCountInNav(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item)  => sum + item.quantity,0)

    if(cartTextNav){
      cartTextNav.innerText = `${totalItems}`
    }
  }
displayCartCountInNav();


  // 


})
