// Sample Data
const restaurants = [
   
    {
        id: 2,
        name: "McDonald's",
        cuisine: "Chinese",
        rating: 4.4,
        deliveryTime: "30-40 min",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/2f068dfd-4cfd-4833-8c6d-a20f5cf709ff_532693.JPG",
        menu: [
              
            {id: 202, name: "Veg Supreme McMuffin", category: "Beverage", price: 130, description: "", image: "https://tse4.mm.bing.net/th/id/OIP.hXA9gBWdAwp0lXVjwjWA_QAAAA?pid=Api&P=0&h=220"},
            {id: 203, name: "Cold Coffee Frappe", category: "Drink", price: 160, description: "Rich, creamy and irresistible cold coffee, created by blending a double shot of espresso, ice cream & milk", image: "https://tse3.mm.bing.net/th/id/OIP.jKoNoEewUypp1J1KrNo2PAHaFb?pid=Api&P=0&h=220"},
            {id: 204, name: "Large EVM McVeggie Xplode", category: "Beverage", price: 320, description: "", image: "https://tse2.mm.bing.net/th/id/OIP.HCPs4fMupcNMjvFN-DHlWQAAAA?pid=Api&P=0&h=220"}
        ]
    },
    {
        id: 3,
        name: "The Hazelnut Factory",
        cuisine: "Bakery",
        rating: 4.3,
        deliveryTime: "20-30 min",
        image: "https://b.zmtcdn.com/data/pictures/8/20082918/570003deffc654c3d5e7eb8b20390812.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        menu: [
            {id: 301, name: "The Hazelnut Factory Frappe", category: "Drink", price: 240, description: "Creamy and refreshing blend of coffee, milk & ice cream served chilled ", image: "https://tse2.mm.bing.net/th/id/OIP.2-H2hSLsYHl_tgL3qfW4DQHaE7?pid=Api&P=0&h=220"},
            {id: 302, name: "Eggless Fresh fruit Pastry", category: "Dessert", price: 90, description: "Elevate your taste buds with layers of light, fluffy pastry adorned with a medley of fresh, vibrant fruits, offering a refreshing burst of sweetness and natural goodness in every delightful bite.", image: "https://tse1.mm.bing.net/th/id/OIP.B0yrpZmeTSEzztlrsgzJ6wHaE8?pid=Api&P=0&h=220"},
            {id: 303, name: "Fusion Sweet Box", category: "Appetizer", price: 650, description: "Cashew Tiramisu+Lotus Biscoff Burfi+Cranberry Delight+Paan of Nawabs+Rose Pistachio Cake+Mango Kaju Cake+Crunchy Oreo", image: "https://tse3.mm.bing.net/th/id/OIP.F_TNrjs5agTUPaZ4y0xQxQHaHa?pid=Api&P=0&h=220"},
            {id: 304, name: "Eggless Red Velvet Cake", category: "Beverage", price: 680, description: "", image: "https://b.zmtcdn.com/data/dish_photos/c26/37a3547aac1c3615cc7865351608ac26.jpg?fit=around|130:130&crop=130:130;*,*"}
        ]
    },
    {
        id: 4,
        name: "The Penthouse At Home Sweet Home",
        cuisine: "Continental",
        rating: 4.5,
        deliveryTime: "25-35 min",
        image: "https://tse3.mm.bing.net/th/id/OIP.d-7ZPjqdekNOuBSNJxmx6gHaE8?pid=Api&P=0&h=220",
        menu: [
            {id: 401, name: "Chicken Tikka Pizza", category: "Main Course", price: 380, description: "With Jalapeno Relish", image: "https://tse2.mm.bing.net/th/id/OIP.D1W94c-QoUwDeY5oxb42ewHaEz?pid=Api&P=0&h=220"},
            {id: 402, name: "Mutton Nihari", category: "Main Course", price: 320, description: "Presenting slow cooked mutton nihari in a perfect blend of spices to soothe your taste buds.", image: "https://tse1.mm.bing.net/th/id/OIP.aFYyNATFfA26CVWP1AfRmwHaFj?pid=Api&P=0&h=220"},
            {id: 403, name: "Belgian Chocolate Shake", category: "Drink", price: 250, description: "Made with smooth Belgian dark chocolate and British milk", image: "https://tse2.mm.bing.net/th/id/OIP.RU21aZn6WmesBWl7BrNdogHaHC?pid=Api&P=0&h=220"},
            {id: 404, name: "Gooey Chocolate Brownie With Vanilla Ice-Cream", category: "Dessert", price: 180, description: "Rich chocolate brownies topped with vanilla ice cream & drenched in hot fudge in a hot cast iron skillet is crazy amazing", image: "https://tse4.mm.bing.net/th/id/OIP.vGcFr3qmDniwjw1VCOwRkAHaEK?pid=Api&P=0&h=220"}
        ]
    }

,
    {
        id: 5,
        name: "Roastery Coffee House",
        cuisine: "Italian",
        rating: 4.5,
        deliveryTime: "25-35 min",
        image: "https://i.pinimg.com/736x/3f/cd/85/3fcd853d8cbe68995723e71ba794fc42.jpg",
        menu: [
            {id: 501, name: "Mini Non-Veg Club Sandwich", category: "Main Course", price: 280, description: "", image: "https://i.pinimg.com/1200x/68/e3/38/68e338eec52dcdfd021ff5005e100c2e.jpg"},
            {id: 502, name: "Iced Latte.", category: "Main Course", price: 120, description: "Espresso + Milk + Condensed Milk + Ice", image: "https://i.pinimg.com/736x/e2/a0/7c/e2a07c33f6bd6b4ba6344b99b84e2ef4.jpg"},
            {id: 503, name: "Plain French Fries", category: "Appetizer", price: 150, description: "Salt sprinkled fries", image: "https://i.pinimg.com/736x/89/64/4a/89644a4cae37b8a2479f409baa572221.jpg"},
            {id: 504, name: "Chicken Nachos Salsa", category: "Appetizert", price: 380, description: "Our homemade salsa served with baked corn nachos and chicken", image: "https://tse2.mm.bing.net/th/id/OIP.6JYx0c9fUNcNYpn3gMXPkgHaHa?pid=Api&P=0&h=220"},
            {id: 505, name:"Chicken Choice In Paprika Sauce", category: "Main Course" , price:120 , description:"Marinated Chicken Strips With Seasonal Exotic Vegetables And Cooked In Your Choice Of Sauce Served With Mexican Rice [ Or] Mashed Potatoes",image:"https://b.zmtcdn.com/data/dish_photos/9a4/906b83a0eb56cd54cedddf8f2f70a9a4.png?fit=around|130:130&crop=130:130;*,*"}
        ]
    },


     {
        id: 6,
        name: "Hazratganj SOCIAL",
        cuisine: "Continental",
        rating: 4.2,
        deliveryTime: "25-35 min",
        image: "https://b.zmtcdn.com/data/pictures/7/21353607/3cfb2cf67eb3810697cb30693c84d8ea.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        menu: [
            {id: 601, name: "Classic Mac N Cheese Pasta", category: "Appetizer", price: 280, description: "Comfort dish with zero drama, just molten cheese and pasta.", image: "https://tse1.mm.bing.net/th/id/OIP.sfyPFmaqSpGJuruNkMtY-wHaE8?pid=Api&P=0&h=220"},
            {id: 602, name: "Butter Chicken Biryani", category: "Main Course", price: 420, description: "A Lovechild Of Two Legends Served With Raita And Fr Yums.", image: "https://tse4.mm.bing.net/th/id/OIP.k1LV9vR2RHr4xqkNH_zg6QHaFj?pid=Api&P=0&h=220"},
            {id: 603, name: "Tandoori Momos Chicken", category: "Appetizer", price: 260, description: "Coated with masala and finished in the tandoor.", image: "https://tse3.mm.bing.net/th/id/OIP.w_bxJBlyIBURFukNyAlOagHaE8?pid=Api&P=0&h=220"},
            {id: 604, name: "Basque Cheesecake", category: "Dessert", price: 380, description: "Creamy Basque Cheesecake Crowned With Berr Y Compote To Create The Sweetest Scandal.", image: "https://tse1.mm.bing.net/th/id/OIP.RHv2YkUSussud1MKgqyQ4gHaJQ?pid=Api&P=0&h=220"}
           
        ]
    },


 {
        id: 7,
        name: "Starbucks coffee",
        cuisine: "Italian",
        rating: 4.6,
        deliveryTime: "25-35 min",
        image: "https://i.pinimg.com/736x/a4/9d/31/a49d31538f2742a017c998c783f8b3d1.jpg",
        menu: [
            {id: 701, name: "Cocoa Cappuccino", category: "Drink", price: 280, description: "Crafted with premium espresso, steamed milk, velvety foam, and a touch of bittersweet cocoa for a chocolaty twist! ", image: "https://i.pinimg.com/736x/b3/02/07/b3020720caef3e806115c550dc77ce03.jpg"},
            {id: 702, name: "Tofu Spinach Croissant Sandwich", category: "Appetizer", price: 420, description: "Scrambled tofu & spinach with Cheddar cheese & feta spread encased in a buttery & herbed croissant for a savory delight.", image: "https://i.pinimg.com/1200x/6f/0a/60/6f0a60142604a83057554b19e5ffdd13.jpg"},
            {id: 703, name: "Cappuccino", category: "Drink", price: 260, description: "Espresso brewed with the world's top 3% Arabica beans, steamed milk, and velvety foam. Handcrafted by our skilled baristas with care.", image: "https://i.pinimg.com/736x/72/8e/9c/728e9c11428e939f8e4414803fb3d916.jpg"},
            {id: 704, name: "Signature Hot Chocolate", category: "Drink", price: 270, description: "Experience pure comfort in a cup. A caffeine-free delight created from the Starbuck's signature hot chocolate powder. ", image:"https://i.pinimg.com/1200x/fe/74/f8/fe74f82e9eb922b7ec2964371f12e5d1.jpg"}
           
        ]
    },



    {
        id: 1,
        name: "Tunday Kababi",
        cuisine: "Indian",
        rating: 4.6,
        deliveryTime: "25-35 min",
        image: "https://tse2.mm.bing.net/th/id/OIP.LqiSmC28nhfOtLAG-X8JRAHaEi?pid=Api&P=0&h=220",
        menu: [
            {id: 101, name: "Mutton Tunday Galawati Kabab", category: "Main Course", price: 100, description: "Mutton being marinated with spices and herbs. ", image:"https://tse1.mm.bing.net/th/id/OIP.lclQz9dkdSVQYGsXXn6JsQHaEK?pid=Api&P=0&h=220"},
            {id: 102, name: "Chicken Biryani", category: "Main Course", price: 120, description: "Famous chicken biryani , rice,chicken ", image: "https://tse4.mm.bing.net/th/id/OIP.RJWKV3nU4f7ocvpXTYhuBwHaEo?pid=Api&P=0&h=220"},
            {id: 103, name: "Butter Chicken", category: "Main course", price: 250, description: "Succulent chicken cooked in a smokey Indian spiced gravy, topped with butter and cream for an enriching taste.", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/8/27c7f142-1606-4b5a-8058-e51b31ab0460_b9bf1664-d91b-44d4-85c2-6379f82137d3.jpeg"},
            {id: 104, name: "Mughlai Paratha", category: "Main course", price: 15, description: "Melt-in-your-mouth Indian bread filled with flavorful vegetarian goodness - a delightful treat for the taste buds!", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/13/8266ae58-9701-4253-bdf4-774364a038f1_4f4cc46a-7d22-4bae-ae04-93dc23223528.jpg"}
        ]
    },

];

// App State
let cart = [];
let currentRestaurant = null;
let currentView = 'restaurant-list';

// DOM Elements
const restaurantsList = document.getElementById('restaurant-list');
const restaurantMenu = document.getElementById('restaurant-menu');
const cartView = document.getElementById('cart-view');
const checkoutView = document.getElementById('checkout-view');
const cartSidebar = document.getElementById('cart-sidebar');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    renderRestaurants();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSearch();
    });

    // Cuisine filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterRestaurants(this.dataset.cuisine);
        });
    });

    // Menu category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterMenuItems(this.dataset.category);
        });
    });

    // Cart functionality
    document.getElementById('cart-btn').addEventListener('click', toggleCartSidebar);
    document.getElementById('close-cart').addEventListener('click', toggleCartSidebar);
    document.getElementById('view-cart').addEventListener('click', showCartView);
    document.getElementById('checkout-btn').addEventListener('click', showCheckoutView);

    // Navigation
    document.getElementById('back-btn').addEventListener('click', showRestaurantList);

    // Checkout form
    document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
}

// Render Functions
function renderRestaurants(restaurantsToShow = restaurants) {
    const grid = document.getElementById('restaurants-grid');
    grid.innerHTML = restaurantsToShow.map(restaurant => `
        <div class="restaurant-card" onclick="showRestaurantMenu(${restaurant.id})">
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="restaurant-info">
                <h4>${restaurant.name}</h4>
                <p>${restaurant.deliveryTime}</p>
                <div class="restaurant-details">
                    <span class="cuisine-tag">${restaurant.cuisine}</span>
                    <span class="rating">⭐ ${restaurant.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderRestaurantHeader(restaurant) {
    document.getElementById('restaurant-header').innerHTML = `
        <h3>${restaurant.name}</h3>
        <div class="restaurant-meta">
            <span class="cuisine-tag">${restaurant.cuisine}</span>
            <span class="rating">⭐ ${restaurant.rating}</span>
            <span>🕒 ${restaurant.deliveryTime}</span>
        </div>
    `;
}

function renderMenuItems(items = currentRestaurant?.menu || []) {
    const container = document.getElementById('menu-items');
    container.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-info">
                <h5>${item.name}</h5>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const sidebarCartItems = document.getElementById('sidebar-cart-items');
    
    const cartHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <h5>${item.name}</h5>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>Qty: ${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <span class="price">₹${item.price * item.quantity}</span>
            </div>
        </div>
    `).join('');

    cartItems.innerHTML = cartHTML;
    sidebarCartItems.innerHTML = cartHTML;
    
    updateCartTotal();
    updateCartCount();
}

// Cart Functions
function addToCart(itemId) {
    const menuItem = currentRestaurant.menu.find(item => item.id === itemId);
    if (!menuItem) return;

    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...menuItem,
            quantity: 1
        });
    }
    
    renderCart();
    showCartSidebar();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
}

function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        renderCart();
    }
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = total;
    document.getElementById('sidebar-total').textContent = total;
    document.getElementById('checkout-total').textContent = total;
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// View Management
function showView(viewName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(viewName).classList.remove('hidden');
    currentView = viewName;
}

function showRestaurantList() {
    showView('restaurant-list');
    currentRestaurant = null;
}

function showRestaurantMenu(restaurantId) {
    currentRestaurant = restaurants.find(r => r.id === restaurantId);
    if (!currentRestaurant) return;
    
    renderRestaurantHeader(currentRestaurant);
    renderMenuItems();
    showView('restaurant-menu');
}

function showCartView() {
    renderCart();
    showView('cart-view');
    hideCartSidebar();
}

function showCheckoutView() {
    showView('checkout-view');
}

// Cart Sidebar
function toggleCartSidebar() {
    cartSidebar.classList.toggle('hidden');
}

function showCartSidebar() {
    cartSidebar.classList.remove('hidden');
}

function hideCartSidebar() {
    cartSidebar.classList.add('hidden');
}

// Filter Functions
function filterRestaurants(cuisine) {
    const filtered = cuisine === 'all' ? restaurants : restaurants.filter(r => r.cuisine === cuisine);
    renderRestaurants(filtered);
}

function filterMenuItems(category) {
    if (!currentRestaurant) return;
    const filtered = category === 'all' ? currentRestaurant.menu : currentRestaurant.menu.filter(item => item.category === category);
    renderMenuItems(filtered);
}

// Search Function
function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    if (!query) {
        renderRestaurants();
        return;
    }
    
    const filtered = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.cuisine.toLowerCase().includes(query) ||
        restaurant.menu.some(item => item.name.toLowerCase().includes(query))
    );
    
    renderRestaurants(filtered);
}

// Checkout Function
function handleCheckout(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const formData = new FormData(e.target);
    const orderData = {
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        customer: {
            name: formData.get('name'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            payment: formData.get('payment')
        }
    };
    
    // Simulate order processing
    alert(`Order placed successfully! 
    
Order Total: ₹${orderData.total}
Delivery Address: ${orderData.customer.address}
Payment Method: ${orderData.customer.payment}

Your food will be delivered in 30-45 minutes.`);
    
    // Reset cart and return to restaurant list
    cart = [];
    renderCart();
    showRestaurantList();
}
