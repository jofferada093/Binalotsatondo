const products = [
    {
        id: 1,
        image: 'redvelvet.jpg',
        title: 'Red Velvet Crinkles',
        price: 120,
    },
    {
        id: 2,
        image: 'lecheflan.jpg',
        title: 'Leche Flan',
        price: 130,
    },
    {
        id: 3,
        image: 'Oreo.jpg',
        title: 'Oreo Float',
        price: 130,
    },
    {
        id: 4,
        image: 'mangofloat.jpg',
        title: 'Mango Float',
        price: 150,
    },
    {
        id: 5,
        image: "dumaguete.jpg",
        title: 'Dumaguete Butter',
        price: 360,
    },
    {
        id: 6,
        image: 'sansrival.jpg',
        title: 'Dumaguete Sansrival',
        price: 450,
    },
    {
        id: 7,
        image: 'silvanas.jpg',
        title: 'Grandas Silvanas',
        price: 310,
    },
    {
        id: 8,
        image: 'grandassansrival.jpg',
        title: 'Grandas Sansrival',
        price: 360,
    },
    {
        id: 9,
        image: 'firstbaker.jpg',
        title: 'First Baker Silvanas',
        price: 300,
    },
];

// Rendering products
document.getElementById('root').innerHTML = products.map((item) => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='image' src='${image}' alt='${title}' />
            </div>   
            <div class='bottom'>
                <p>${title}</p>
                <h2>PHP${price}.00</h2>
                <button onclick='addToCart(${item.id})'>Add to cart</button>
            </div>
        </div>`;
}).join('');

// Cart
let cart = [];

function addToCart(id) {
    const selectedItem = products.find(item => item.id === id);
    cart.push(selectedItem);
    displayCart(cart);
}

function displayCart() {
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            const { id, image, title, price } = item;
            return `
                <div class="cart-item">
                    <div class="row">
                        <img src="${image}" alt="${title}">
                        <h3>${title}</h3>
                        <p>PHP${price}</p>
                        <button onclick="removeItem(${id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`;
        }).join('');

        const totalAmount = cart.reduce((total, item) => total + item.price, 0);
        document.getElementById('total').textContent = `PHP ${totalAmount.toFixed(2)}`;
        document.getElementById('count').textContent = cart.length;
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id); // Filter out the item with the given id
    displayCart(); // Update the cart display after removing the item
}

// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var openCheckoutBtn = document.getElementById("openCheckoutBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
openCheckoutBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
