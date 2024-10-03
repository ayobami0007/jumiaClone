// document.addEventListener('DOMContentLoaded', () => {
//     const cartItemsDiv = document.getElementById('cartItems');
//     const totalPriceDiv = document.getElementById('totalPrice');

//     function displayCartItems() {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cartItemsDiv.innerHTML = ''; // Clear previous items
//         let totalPrice = 0;

//         if (cart.length === 0) {
//             cartItemsDiv.innerHTML = `<p>Your cart is empty.</p>`;
//         } else {
//             cart.forEach(product => {
//                 const itemHTML = `
//                     <div class="addedItemsDivDetails">
//                         <img src="${product.image}" alt="${product.name}">
//                         <div>
//                             <h4>${product.name}</h4>
//                             <p>₦ ${product.price}</p>
//                             <p>Quantity: ${product.quantity}</p>
//                         </div>
//                         <div class="removeItem" data-id="${product.id}">
//                             <i class="fa-solid fa-trash"></i>
//                             <p>REMOVE</p>
//                         </div>
//                     </div>
//                 `;
//                 cartItemsDiv.innerHTML += itemHTML;
//                 totalPrice += product.price * product.quantity; // Update total
//             });
//         }

//         totalPriceDiv.innerText = `Total: ₦ ${totalPrice.toFixed(2)}`;
//     }

//     // Call to display cart items
//     displayCartItems();
// });




document.addEventListener('DOMContentLoaded', () => {



    const cartItemsDiv = document.querySelector('.addedItemsSection'); // Use the correct selector
    const totalPriceDiv = document.getElementById('totalPrice');
    const emptyCartSection = document.querySelector('.cartSection'); // Empty cart section
    const addedSection = document.querySelector('.added');

    function displayCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsDiv.innerHTML = ''; // Clear previous items
        let totalPrice = 0;



        if (cart.length === 0) {
            emptyCartSection.style.display = 'block';
            addedSection.style.display = 'none';
        } else {
            emptyCartSection.style.display = 'none';
            addedSection.style.display = 'block';
            cart.forEach(product => {
                const itemHTML = `
                    <div>
                        <hr>
                         <div class="addedItemsDivDetails">
                            <div class="addedItemsDetailDiv">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="addedItemsDetails">
                                    <a href="">${product.name}</a>
                                    <a class="seller" href="">Seller: <span>${product.seller}</span></a>
                                    <a class="unitLeft" href="">Few units left</a>
                                </div>
                            </div>
                            <div class="addedItemPriceDiv">
                                <h3>₦ ${product.price}</h3>
                                <div class="flex">
                                    <p>${product.oldPrice}</p>
                                    <p class="addedItemDiscount">${product.discount}</p>
                                </div>
                            </div>
                        </div>
                        <div class="addOrRemoveItem flex">
                            <div class="removeItem flex" data-id="${product.id}">
                                <i class="fa-solid fa-trash"></i>
                                <p>REMOVE</p>
                            </div>
                            <div class="addMoreItem" data-id="${product.id}">
                                <button class ="minusBtn" ${product.quantity === 1 ? 'disabled' : ''}>
                                <i class="fa-solid fa-minus"></i></button>
                                <p>${product.quantity}</p>
                                <button><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                `;
                cartItemsDiv.innerHTML += itemHTML;
                totalPrice += product.price * product.quantity; // Update total
                displayCartCount()
            });
        }



        totalPriceDiv.innerText = `₦ ${totalPrice.toLocaleString()}`;
        document.querySelector('.checkoutBtn').innerText = ` CHECKOUT (₦ ${totalPrice.toLocaleString()})`
    }

    function displayCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelector('.cartText').innerText = `Cart(${totalItems})`
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.fa-trash')) {
            const productId = e.target.closest('.removeItem').dataset.id;
            removeCartItem(productId)
            alert(" Item  has been removed")
        }
        else if (e.target.closest('.addMoreItem')){
            const productId = e.target.closest('.addMoreItem').dataset.id
            if(e.target.closest('.fa-minus')){
                alert(" Item  has been updated")
                updateCartItemQuantity(productId, -1);

            }else if(e.target.closest('.fa-plus')){
                alert("product added successfully")
                updateCartItemQuantity(productId, 1)
            }
        }
});

    //
    


    // Function to update the item quantity
    function updateCartItemQuantity(productId, change) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += change; // Update quantity

            // Prevent quantity from going below 1
            if (existingItem.quantity < 1) {
                existingItem.quantity = 1; // or you can remove the item
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems(); // Refresh the display
            displayCartCount(); // Update item count in cart
        }
    }







    ///
    function removeCartItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId)
        localStorage.setItem('cart', JSON.stringify(cart))
        displayCartItems()
        displayCartCount();

    }





    // Call to display cart items
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // User is logged in, display cart items
        displayCartItems();
        displayCartCount()
    } else {
        // User is not logged in, hide the cart items section
        cartItemsDiv.innerHTML = '<p>Please log in to view your cart.</p>';
        emptyCartSection.style.display = 'block'; // Optionally show the empty cart section
        addedSection.style.display = 'none'; // Hide the added section
    }


    document.querySelector('.checkoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Simulate payment success
        alert('Proceed to make payment .');
    
        // Clear the cart from localStorage
        // localStorage.removeItem('cart');
    
        // // Simulate transaction record in localStorage
        const transaction = {
            id: Math.random().toString(36).substr(2, 9),
            date: new Date(),
            amount: calculateTotalAmount(),
            status: 'Successful'
        };
        localStorage.setItem('transactionRecord', JSON.stringify(transaction));
    
        // Redirect to order confirmation page
        window.location.href = '/checkout/checkout.html';
    });
    
    function calculateTotalAmount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    

    function logOutUser(){
        localStorage.removeItem('currentUser')
        localStorage.removeItem('cart')
        window.location.href= "/login.html"

    }
 document.querySelector('.logoutBtn').addEventListener('click', logoutUser);

});



