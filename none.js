<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/5e820e8517.js" crossorigin="anonymous"></script>



    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/BoxSection.css">
    <link rel="stylesheet" href="/appliances/appliances.css">
    <link rel="stylesheet" href="cartList.css">
    <link rel="stylesheet" href="/addToCart/addToCart.css">
</head>

<body>
    <header>
        <div class="flex paySell">
            <div class="flex sell">
                <img src="/assets/starJ.png" alt="jumia star" width="14px" height="14px" style="margin-top: 2px" />
                <a href="#" class="sellLink">Sell on Jumia</a>
            </div>
            <div class="flex jumiapay">
                <div style="display: flex">
                    <p style="font-weight: 700; font-size: 12px">JUMIA</p>
                    <img src="/assets/starJ.png" alt="" width="10px" height="10px" style="margin-top: 4px" />
                </div>
                <a href="#">PAY</a>
            </div>
        </div>

        <nav class="">
            <div class="nav flex">
                <!-- <div class="link" > -->
                <i class="fa-solid fa-bars"></i>
                <a href="/index.html" style="display: flex" class="jumialogo">
                    <p style="font-weight: 700; font-size: 30px">JUMIA</p>
                    <img src="/assets/starJ.png" alt="" width="24px" height="24px" style="margin-top: 10px" />
                </a>
                <!-- </div> -->

                <div class="flex formInpIcon">
                    <div class="flex searchInputing">
                        <div class="flex searchInput">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search products, brands and categories" class="Input" />
                        </div>

                        <button>SEARCH</button>
                    </div>
                    <div class="flex navIcons">
                        <a href="#" class="flex accountsDropDown ">
                            <i class="fa-regular fa-user"></i>
                            <p>Account</p>
                            <i class="fa-solid fa-caret-down" id="dropDownIcon"></i>
                        </a>

                        <a href="" class="flex help">
                            <i class="fa-regular fa-circle-question"></i>
                            <p>Help</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </a>
                        <a href="" class="flex">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>cart</p>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="sideBarLink">
            <ul class="">
                <!-- <li>
          <a href="">
            <img
              src="assets/cookingpot_121628.png"
              alt=""
              width="18px"
              height="18px"
              style="margin-top: 8px;"
            />
            Appliances
          </a>
        </li> -->
                <li>
                    <a href="/appliances/appliances.html"><i class="fa-solid fa-mobile-screen"></i> Appliances</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Phones & Tablets</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Health & Beauty</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Home & Office</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Electronics</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Fashion</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Supermarket</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Computing</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Baby Products</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-mobile-screen"></i> Gaming</a>
                </li>
            </ul>
            <p>Musical Insruments</p>
            <a href=""><i class="fa-solid fa-mobile-screen"></i> Other categories</a>
        </div>
        <div class="dropDownContent">
            <div class="dropDownSignDiv">
                <a href="/signIn/signIn.html" class="dropDownSign">SIGN IN</a>
            </div>
            <hr>
            <div class="dropDownlinkDiv">
                <a href="/signIn/signIn.html" class="flex dropDownLinks">
                    <i class="fa-regular fa-user"></i>
                    <p>My Account</p>
                </a>
                <a href="/signIn/signIn.html" class="flex dropDownLinks">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p> Orders</p>
                </a>
                <a href="/signIn/signIn.html" class="flex dropDownLinks">
                    <i class="fa-regular fa-heart"></i>
                    Saved Items
                </a>
            </div>
        </div>
    </header>

    <section class="cartSection boxTop">
        <div class="flex cartBox ">
            <img src="/assets/jumiaCart.668e6453.svg" alt="" srcset="">
            <p class="cart">Your cart is empty!</p>
            <p class="browse">Browse our categories and discover our best deals!</p>
            <a href="/index.html">START SHOPPING</a>
        </div>
    </section>

    <section class="boxTop ">
        <div class="added ">
            <div class="addedContent ">
                <h3 class="cartText">Cart (1)</h3>
                <div class="flex addedItemsSection  ">
                    <div>
                        <hr>
                        <div class="addedItemsDivDetails">
                            <div class="addedItemsDetailDiv">
                                <img src="/assets/jumiaAppliances.png" alt="">
                                <div class="addedItemsDetails">
                                    <a href="">Malta Guinness Can 330ml x24</a>
                                    <a class="seller" href="">Seller: <span>Jumia</span> </a>
                                    <a class="unitLeft" href="">Few units left</a>
                                    <!-- <a href="" class="express">JUMIA <span>EXPRESS</span></a> -->
                                </div>
                            </div>
                            <div class="addedItemPriceDiv">
                                <h3>N 9,000</h3>
                                <div class="flex">
                                    <p>12,000</p>
                                    <p class="addedItemDiscount">-25% </p>
                                </div>
                            </div>
                        </div>
                        <div class="addOrRemoveItem flex">
                            <div class="removeItem flex">
                                <i class="fa-solid fa-trash"></i>
                                <p>REMOVE</p>
                            </div>
                            <div class="addMoreItem">
                                <button> <i class="fa-solid fa-minus"></i></button>
                                <p>1</p>
                                <button><i class="fa-solid fa-plus"></i></button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="cartSummary">
                <div>
                    <h4 class="cartTextSum" >CART SUMMARY</h4>
                    <hr>
                    <div class="cartSummaryDivPad" style="display: flex; flex-direction: column; gap: 10px;">
                        <div class="SubtotalDiv">
                            <h5>Subtotal</h5>
                            <h3>₦ 361,560</h3>
                        </div>
                        <p class="deliveryText">Delivery fees not included yet.</p>
                    </div>
                    <hr>
                    <div class="cartSummaryDivPad">
                    <button class=" checkoutBtn">
                        CHECKOUT (₦ 361,560)
                    </button>
                    </div>
                    <p></p>
                </div>

                <div class="cartSummaryReturns cartSummaryDivPad">
                    <h4>Returns are easy</h4>
                    <p>Free return within 7 days for ALL eligible items </p>
                    <a href="">Details</a>
                </div>
            </div>
    </section>

    <script src="/script.js"></script>
    <script src="/addToCart/addToCart.js"></script>
    <script src="cartList.js"></script>
</body>

</html>







// const cartButton = document.querySelector(".addToCartBtn")
// const addMoreItems = document.querySelector(".addMoreItems")
// const minusButton = document.querySelector(".fa-minus")
// const plusButton = document.querySelector(".fa-plus")
// let itemCount = 1;



// document.addEventListener('DOMContentLoaded', function() {
//     const savedItemCount = localStorage.getItem('cartItemCount');
//     if (savedItemCount) {
//         itemCount = parseInt(savedItemCount);
//         cartButton.classList.add('remove');
//         addMoreItems.classList.add('active');
//         updateItemCount();
//     }
// });




// cartButton.addEventListener('click', function (e) {
//     cartButton.classList.add('remove');
//     addMoreItems.classList.add('active')
//     saveItemCount()
// })

// plusButton.addEventListener('click', function (e) {
//     itemCount++;
//     updateItemCount()
//     saveItemCount();
// })

// minusButton.addEventListener('click', function (e) {
//     if (itemCount > 1) {
//         itemCount--;
//         updateItemCount()
//         saveItemCount();      
//     } else {
//         addMoreItems.classList.remove('active');
//         cartButton.classList.remove('remove')
//         itemCount = 1;
//         localStorage.removeItem('cartItemCount'); // Reset cart state in local storage
//     }
// });

// function updateItemCount(){
//     addMoreItems.querySelectorAll('p')[0].textContent = itemCount;
//     addMoreItems.querySelectorAll('p')[1].textContent = `(${itemCount} item(s) added)`
// }

// function saveItemCount() {
//     localStorage.setItem('cartItemCount', itemCount);
// }










    document.addEventListener('DOMContentLoaded', () => {
        // let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
        // Display cart items
        function displayCartItem() {
            // if (cart.length === 0) {
            //     // document.querySelector('.cart-message').textContent = 'Your cart is empty.';
            //     return;
            // }

            // const selectedProduct = cart[cart.length - 1]; // Get the last ad   ded product
            if (selectedProduct) {
                document.getElementById('cartImage').src = selectedProduct.image || '';
                document.getElementById('productName').innerText = selectedProduct.name;
                document.getElementById('productPrice').innerText = `₦ ${selectedProduct.price}`;
                document.getElementById('productOldPrice').innerText = `₦ ${selectedProduct.oldPrice}`;
                document.getElementById('productDiscount').innerText = selectedProduct.discount;
                document.getElementById('itemsLeft').innerText = `${selectedProduct.itemsLeft} items left`;
                console.log('Selected product:', selectedProduct);
            }

            else {
                console.error("No product selected");
            }
        }
        displayCartItem(); 

        // Add product to cart
        function addToCart(selectedProduct) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let existingItem = cart.find(item => item.id === product.id);

            if (existingItem) {
                // Increment quantity if product already exists in the cart
                existingItem.quantity += product.quantity;
                // Add new product to the cart
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
            console.log('Cart updated:', cart); // Log for debugging
            alert(`${product.name} has been added to your cart!`);
        }

        // Handle add to cart button click
        document.querySelector('.addToCartBtn').addEventListener('click', () => {
            let quantity = parseInt(document.querySelector('.addMoreItems p').innerText) || 1; // Get quantity from DOM
            // const product = {
            //     id: 1, // Use a unique ID for the product
            //     name: document.getElementById('productName').innerText,
            //     image: document.getElementById('cartImage').src,
            //     price: parseFloat(document.getElementById('productPrice').innerText.replace('₦', '').replace(',', '')),
            //     oldPrice: parseFloat(document.getElementById('productOldPrice').innerText.replace('₦', '').replace(',', '')),
            //     discount: document.getElementById('productDiscount').innerText,
            //     itemsLeft: parseInt(document.getElementById('itemsLeft').innerText.split(' ')[0]),
            //     quantity: quantity // Use the updated quantity
            // };

            const product = {
                id: selectedProduct.id, // Use the unique ID from selectedProduct
                name: selectedProduct.name,
                image: selectedProduct.image,
                price: parseFloat(selectedProduct.price),
                oldPrice: parseFloat(selectedProduct.oldPrice),
                discount: selectedProduct.discount,
                itemsLeft: parseInt(selectedProduct.itemsLeft),
                quantity: quantity // Use the updated quantity
            };  

            addToCart(product); // Add product to cart
        });

        displayCartItem(); // Call to display the last added item
    });

    // Add to Cart button and quantity update logic
    const cartButton = document.querySelector(".addToCartBtn");
    const addMoreItems = document.querySelector(".addMoreItems");
    const minusButton = document.querySelector(".fa-minus");
    const plusButton = document.querySelector(".fa-plus");
    let itemCount = 1;

    // document.addEventListener('DOMContentLoaded', function () {
        const savedItemCount = localStorage.getItem('cartItemCount');
        if (savedItemCount) {
            itemCount = parseInt(savedItemCount);
            cartButton.classList.add('remove');
            addMoreItems.classList.add('active');
            updateItemCount();
        }
    // });

    cartButton.addEventListener('click', function () {
        cartButton.classList.add('remove');
        addMoreItems.classList.add('active');
        saveItemCount();
    });

    plusButton.addEventListener('click', function () {
        itemCount++;
        updateItemCount();
        saveItemCount();
    });

    minusButton.addEventListener('click', function () {
        if (itemCount > 1) {
            itemCount--;
            updateItemCount();
            saveItemCount();
        } else {
            addMoreItems.classList.remove('active');
            cartButton.classList.remove('remove');
            itemCount = 1;
            localStorage.removeItem('cartItemCount'); // Reset cart state in local storage
        }
    });

    function updateItemCount() {
        addMoreItems.querySelectorAll('p')[0].textContent = itemCount;
        addMoreItems.querySelectorAll('p')[1].textContent = `(${itemCount} item(s) added)`;
    }

    function saveItemCount() {
        localStorage.setItem('cartItemCount', itemCount);
    }
































    document.addEventListener('DOMContentLoaded', () => {
        // let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
        // Display cart items
        function displayCartItem() {
            // if (cart.length === 0) {
            //     // document.querySelector('.cart-message').textContent = 'Your cart is empty.';
            //     return;
            // }

            // const selectedProduct = cart[cart.length - 1]; // Get the last ad   ded product
            if (selectedProduct) {
                document.getElementById('cartImage').src = selectedProduct.image || '';
                document.getElementById('productName').innerText = selectedProduct.name;
                document.getElementById('productPrice').innerText = `₦ ${selectedProduct.price}`;
                document.getElementById('productOldPrice').innerText = `₦ ${selectedProduct.oldPrice}`;
                document.getElementById('productDiscount').innerText = selectedProduct.discount;
                document.getElementById('itemsLeft').innerText = `${selectedProduct.itemsLeft} items left`;
                console.log('Selected product:', selectedProduct);
            }

            else {
                console.error("No product selected");
            }
        }
        displayCartItem(); 

        // Add product to cart
        function addToCart(selectedProduct) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let existingItem = cart.find(item => item.id === product.id);

            if (existingItem) {
                // Increment quantity if product already exists in the cart
                existingItem.quantity += product.quantity;
                // Add new product to the cart
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
            console.log('Cart updated:', cart); // Log for debugging
            alert(`${product.name} has been added to your cart!`);
        }

        // Handle add to cart button click
        document.querySelector('.addToCartBtn').addEventListener('click', () => {
            let quantity = parseInt(document.querySelector('.addMoreItems p').innerText) || 1; // Get quantity from DOM
            // const product = {
            //     id: 1, // Use a unique ID for the product
            //     name: document.getElementById('productName').innerText,
            //     image: document.getElementById('cartImage').src,
            //     price: parseFloat(document.getElementById('productPrice').innerText.replace('₦', '').replace(',', '')),
            //     oldPrice: parseFloat(document.getElementById('productOldPrice').innerText.replace('₦', '').replace(',', '')),
            //     discount: document.getElementById('productDiscount').innerText,
            //     itemsLeft: parseInt(document.getElementById('itemsLeft').innerText.split(' ')[0]),
            //     quantity: quantity // Use the updated quantity
            // };

            const product = {
                id: selectedProduct.id, // Use the unique ID from selectedProduct
                name: selectedProduct.name,
                image: selectedProduct.image,
                price: parseFloat(selectedProduct.price),
                oldPrice: parseFloat(selectedProduct.oldPrice),
                discount: selectedProduct.discount,
                itemsLeft: parseInt(selectedProduct.itemsLeft),
                quantity: quantity // Use the updated quantity
            };  

            addToCart(product); // Add product to cart
        });

        displayCartItem(); // Call to display the last added item
    });

    // Add to Cart button and quantity update logic
    const cartButton = document.querySelector(".addToCartBtn");
    const addMoreItems = document.querySelector(".addMoreItems");
    const minusButton = document.querySelector(".fa-minus");
    const plusButton = document.querySelector(".fa-plus");
    let itemCount = 1;

    // document.addEventListener('DOMContentLoaded', function () {
        const savedItemCount = localStorage.getItem('cartItemCount');
        if (savedItemCount) {
            itemCount = parseInt(savedItemCount);
            cartButton.classList.add('remove');
            addMoreItems.classList.add('active');
            updateItemCount();
        }
    // });

    cartButton.addEventListener('click', function () {
        cartButton.classList.add('remove');
        addMoreItems.classList.add('active');
        saveItemCount();
    });

    plusButton.addEventListener('click', function () {
        itemCount++;
        updateItemCount();
        saveItemCount();
    });

    minusButton.addEventListener('click', function () {
        if (itemCount > 1) {
            itemCount--;
            updateItemCount();
            saveItemCount();
        } else {
            addMoreItems.classList.remove('active');
            cartButton.classList.remove('remove');
            itemCount = 1;
            localStorage.removeItem('cartItemCount'); // Reset cart state in local storage
        }
    });

    function updateItemCount() {
        addMoreItems.querySelectorAll('p')[0].textContent = itemCount;
        addMoreItems.querySelectorAll('p')[1].textContent = `(${itemCount} item(s) added)`;
    }

    function saveItemCount() {
        localStorage.setItem('cartItemCount', itemCount);
    }









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
                            <div class="addMoreItem">
                                <button><i class="fa-solid fa-minus"></i></button>
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

function displayCartCount(){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelector('.cartText').innerText = `Cart(${totalItems})`
    }

document.addEventListener('click', (e) => {
    if(e.target.closest('.fa-trash')) {
        const productId = e.target.closest('.removeItem').dataset.id;
        removeCartItem(productId)
    }
}); 

//
document.addEventListener('click', (e) => {
    const addMoreItem = e.target.closest('.addMoreItem');
    if (addMoreItem) {
        const productId = addMoreItem.dataset.id;
        if (e.target.closest('.fa-minus')) {
            updateCartItemQuantity(productId, -1); // Decrease quantity
        } else if (e.target.closest('.fa-plus')) {
            updateCartItemQuantity(productId, 1); // Increase quantity
        }
    }
});


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
function removeCartItem(productId){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
    displayCartItems()
    displayCartCount();
 
}




    
    // Call to display cart items
    const     currentUser = JSON.parse(localStorage.getItem('currentUser'));

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



    
});



