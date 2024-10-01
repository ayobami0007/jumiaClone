document.addEventListener('DOMContentLoaded', () => {
    // const savedItemCount = localStorage.getItem('cartItemCount');/
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    // let itemCount = savedItemCount ? parseInt(savedItemCount) : 1;
    let itemCount = 1;


    // Elements
    const cartButton = document.querySelector(".addToCartBtn");
    const addMoreItems = document.querySelector(".addMoreItems");
    const minusButton = document.querySelector(".fa-minus");
    const plusButton = document.querySelector(".fa-plus");

    // Display selected product
    function displaySelectedProduct() {
        if (selectedProduct) {
            document.getElementById('cartImage')    .src = selectedProduct.image || '';
            document.getElementById('productName').innerText = selectedProduct.name;
            document.getElementById('productPrice').innerText = `₦ ${selectedProduct.price}`;
            document.getElementById('productOldPrice').innerText = `₦ ${selectedProduct.oldPrice}`;
            document.getElementById('productDiscount').innerText = selectedProduct.discount;
            document.getElementById('itemsLeft').innerText = `${selectedProduct.itemsLeft} items left`;
        } else {
            console.error("No product selected");
        }
    }

    // Update and save item count
    function updateItemCount() {
        addMoreItems.querySelectorAll('p')[0].textContent = itemCount;
        addMoreItems.querySelectorAll('p')[1].textContent = `(${itemCount} item(s) added)`;
       
        
    }

    // Add product to cart
    function addToCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const product = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            image: selectedProduct.image,
            price: parseFloat(selectedProduct.price),
            oldPrice: parseFloat(selectedProduct.oldPrice),
            discount: selectedProduct.discount,
            itemsLeft: parseInt(selectedProduct.itemsLeft),
            quantity: itemCount
        };

        // Check if product already exists in cart
        let existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += itemCount;  // Increment quantity
        } else {
            cart.push(product);  // Add new product to cart
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to your cart!`);
        cartButton.classList.add('remove');
        addMoreItems.classList.add('active');
    }

// Update the quantity of the product in the cart
function updateCartQuantity(newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.id === selectedProduct.id);

    if (existingItem) {
        existingItem.quantity = newQuantity; // Update quantity
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}


    // Check if product is already in the cart

    function checkProductInCart(){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingItem = cart.find(item => item.id === selectedProduct.id);

        if (existingItem){
            itemCount = existingItem.quantity
            cartButton.classList.add('remove');
            addMoreItems.classList.add('active')
            updateItemCount()
        }
    }

    // Quantity buttons logic
    plusButton.addEventListener('click', () => {
        itemCount++;
        updateItemCount();
        updateCartQuantity(itemCount); 
        alert("product added successfully")
    });

    minusButton.addEventListener('click', () => {
        if (itemCount > 1) {
            itemCount--;
            updateItemCount();
            updateCartQuantity(itemCount); 
            alert(" Item  has been updated")
           
        } else {
            removeProductFromCart()
            addMoreItems.classList.remove('active');
            cartButton.classList.remove('remove');
            itemCount = 1;
            updateCartQuantity(itemCount); 
           
        }
    });

    function removeProductFromCart(productId){
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        cart = cart.filter(item => item.id !== selectedProduct.id);
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    // Add-to-cart button logic
    cartButton.addEventListener('click', () => {
        // cartButton.classList.add('remove');
        // addMoreItems.classList.add('active');     
        addToCart();  // Only adds product to cart, doesn't display cart items here

        console.log('Cart button classes:', cartButton.classList);
console.log('Add More Items classes:', addMoreItems.classList);

    });

    // Load saved cart state on page load
    // if (savedItemCount) {
    //     cartButton.classList.remove('remove');
    //     addMoreItems.classList.remove('active');
    //     updateItemCount();
    // }
    checkProductInCart();
    displaySelectedProduct();  // Show selected product on page load
});
