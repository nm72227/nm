```javascript
/* ==========================================================
   TOUQAS FOODS
   script.js
   PART 3A

   FEATURES INCLUDED
   -----------------
   ✓ Loader
   ✓ AOS Initialization
   ✓ Mobile Menu
   ✓ Smooth Scroll
   ✓ Active Navbar Links
   ✓ Back To Top Button
   ✓ Structured Menu Data
   ✓ Dynamic Menu Rendering
   ✓ Category Filtering
   ✓ WhatsApp Order Buttons

   WhatsApp Number:
   03079308372
   International Format:
   923079308372

   NEXT:
   Part 3B = Cart System
========================================================== */

/* ==========================================================
   GLOBAL VARIABLES
========================================================== */

const WHATSAPP_NUMBER = "923079308372";

const menuGrid = document.getElementById("menuGrid");
const tabButtons = document.querySelectorAll(".tab-btn");

/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }, 1000);
    }

});

/* ==========================================================
   AOS ANIMATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 900,
            once: true,
            offset: 80

        });
    }

});

/* ==========================================================
   MOBILE MENU
========================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });
}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/* ==========================================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================================== */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active-link");

        }

    });

});

/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================================================
   MENU DATA
========================================================== */

/*
   IMAGE PLACEHOLDERS

   Replace later with your own images:

   images/momos/chicken-steamed.jpg
   images/burgers/classic-beef.jpg
   images/pizza/tikka.jpg
   etc.
*/

const menuItems = [

    /* ======================================================
       MOMOS
    ====================================================== */

    {
        id: 1,
        name: "Chicken Steamed Momos",
        category: "momos",
        price: 650,
        image: "images/menu/chicken-steamed-momos.jpg",
        description:
            "Soft steamed dumplings stuffed with juicy chicken filling.",
        badge: "Best Seller",
        availability: true
    },

    {
        id: 2,
        name: "Chicken Fried Momos",
        category: "momos",
        price: 750,
        image: "images/menu/chicken-fried-momos.jpg",
        description:
            "Crispy fried momos with signature dipping sauce.",
        badge: "Popular",
        availability: true
    },

    {
        id: 3,
        name: "Cheese Momos",
        category: "momos",
        price: 850,
        image: "images/menu/cheese-momos.jpg",
        description:
            "Cheesy and creamy filling with delicious flavor.",
        badge: "Cheesy",
        availability: true
    },

    {
        id: 4,
        name: "Tandoori Momos",
        category: "momos",
        price: 950,
        image: "images/menu/tandoori-momos.jpg",
        description:
            "Char-grilled tandoori style momos with spices.",
        badge: "Signature",
        availability: true
    },

    {
        id: 5,
        name: "Beef Momos",
        category: "momos",
        price: 850,
        image: "images/menu/beef-momos.jpg",
        description:
            "Tender beef filling wrapped in handmade dumplings.",
        badge: "Premium",
        availability: true
    },

    {
        id: 6,
        name: "Schezwan Momos",
        category: "momos",
        price: 900,
        image: "images/menu/schezwan-momos.jpg",
        description:
            "Spicy schezwan flavor for heat lovers.",
        badge: "Spicy",
        availability: true
    },

    {
        id: 7,
        name: "Jhol Momos",
        category: "momos",
        price: 950,
        image: "images/menu/jhol-momos.jpg",
        description:
            "Nepalese style momos served in flavorful soup.",
        badge: "Special",
        availability: true
    },

    {
        id: 8,
        name: "Veg Momos",
        category: "momos",
        price: 550,
        image: "images/menu/veg-momos.jpg",
        description:
            "Fresh vegetable filling with authentic taste.",
        badge: "Veg",
        availability: true
    },

    /* ======================================================
       BURGERS
    ====================================================== */

    {
        id: 9,
        name: "Classic Beef Burger",
        category: "burgers",
        price: 650,
        image: "images/menu/classic-beef-burger.jpg",
        description:
            "Juicy beef patty with lettuce and signature sauce.",
        badge: "Classic",
        availability: true
    },

    {
        id: 10,
        name: "Double Beef Burger",
        category: "burgers",
        price: 950,
        image: "images/menu/double-beef-burger.jpg",
        description:
            "Double beef patties for extra satisfaction.",
        badge: "Double",
        availability: true
    },

    {
        id: 11,
        name: "Cheese Beef Burger",
        category: "burgers",
        price: 850,
        image: "images/menu/cheese-beef-burger.jpg",
        description:
            "Loaded with premium cheese and beef.",
        badge: "Cheese",
        availability: true
    },

    {
        id: 12,
        name: "Signature Burger",
        category: "burgers",
        price: 1100,
        image: "images/menu/signature-burger.jpg",
        description:
            "The ultimate Touqas Foods burger experience.",
        badge: "Signature",
        availability: true
    },

    /* ======================================================
       FRIES
    ====================================================== */

    {
        id: 13,
        name: "Regular Fries",
        category: "fries",
        price: 250,
        image: "images/menu/regular-fries.jpg",
        description:
            "Golden crispy fries served fresh.",
        badge: "Fresh",
        availability: true
    },

    {
        id: 14,
        name: "Masala Fries",
        category: "fries",
        price: 350,
        image: "images/menu/masala-fries.jpg",
        description:
            "Seasoned fries with special masala blend.",
        badge: "Spicy",
        availability: true
    },

    {
        id: 15,
        name: "Cheese Fries",
        category: "fries",
        price: 550,
        image: "images/menu/cheese-fries.jpg",
        description:
            "Loaded with creamy melted cheese.",
        badge: "Cheesy",
        availability: true
    },

    {
        id: 16,
        name: "Loaded Fries",
        category: "fries",
        price: 750,
        image: "images/menu/loaded-fries.jpg",
        description:
            "Premium toppings and sauces over crispy fries.",
        badge: "Best Seller",
        availability: true
    },

    /* ======================================================
       PIZZA
    ====================================================== */

    {
        id: 17,
        name: "Chicken Tikka Pizza",
        category: "pizza",
        price: 1400,
        image: "images/menu/chicken-tikka-pizza.jpg",
        description:
            "Pakistani favorite topped with chicken tikka.",
        badge: "Popular",
        availability: true
    },

    {
        id: 18,
        name: "Fajita Pizza",
        category: "pizza",
        price: 1450,
        image: "images/menu/fajita-pizza.jpg",
        description:
            "Smoky fajita flavor with premium toppings.",
        badge: "Hot",
        availability: true
    },

    {
        id: 19,
        name: "Cheese Lover Pizza",
        category: "pizza",
        price: 1550,
        image: "images/menu/cheese-lover-pizza.jpg",
        description:
            "Extra cheese for ultimate indulgence.",
        badge: "Cheese",
        availability: true
    },

    {
        id: 20,
        name: "Kabab Crust Pizza",
        category: "pizza",
        price: 1650,
        image: "images/menu/kabab-crust-pizza.jpg",
        description:
            "Stuffed crust and delicious kabab topping.",
        badge: "Premium",
        availability: true
    },

    {
        id: 21,
        name: "Special Touqas Pizza",
        category: "pizza",
        price: 1850,
        image: "images/menu/special-touqas-pizza.jpg",
        description:
            "House special pizza loaded with flavor.",
        badge: "Signature",
        availability: true
    }

];

/* ==========================================================
   RENDER MENU
========================================================== */

function renderMenu(category = "all") {

    if (!menuGrid) return;

    let filteredItems = menuItems;

    if (category !== "all") {

        filteredItems =
            menuItems.filter(
                item => item.category === category
            );
    }

    menuGrid.innerHTML = "";

    filteredItems.forEach(item => {

        menuGrid.innerHTML += `

        <div class="menu-card"
             data-aos="fade-up">

            <div class="menu-image">

                <img
                    src="${item.image}"
                    alt="${item.name}">

                <span class="food-badge">
                    ${item.badge}
                </span>

            </div>

            <div class="menu-content">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="food-price">

                    <span>
                        PKR ${item.price}
                    </span>

                </div>

                <div class="menu-actions">

                    <button
                        class="add-cart-btn"
                        data-id="${item.id}">

                        Add To Cart

                    </button>

                    <a
                      class="whatsapp-btn"
                      target="_blank"
                      href="${generateWhatsAppLink(item)}">

                        WhatsApp Order

                    </a>

                </div>

            </div>

        </div>

        `;
    });

}

/* ==========================================================
   WHATSAPP MESSAGE
========================================================== */

function generateWhatsAppLink(item) {

    const message =

`Hello TOUQAS FOODS,

I want to place an order.

Item: ${item.name}
Price: PKR ${item.price}

Please confirm availability.

Thank you.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ==========================================================
   CATEGORY FILTERING
========================================================== */

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category =
            button.dataset.category;

        renderMenu(category);

    });

});

/* ==========================================================
   INITIAL MENU LOAD
========================================================== */

renderMenu();

/* ==========================================================
   FUTURE MENU ITEMS

   PART 3B WILL ADD:

   - Broast
   - Combos
   - Drinks
   - Cart Logic
   - LocalStorage
   - Cart Drawer
========================================================== */

/* ==========================================================
   FUTURE BUSINESS DATA MODEL
========================================================== */

const loyaltyRules = {

    pointsPerSpend: 200,

    pointValue: 10,

    minimumRedemption: 100

};

const membershipTiers = {

    silver: {

        discount: 5,
        loyaltyMultiplier: 1
    },

    gold: {

        discount: 5,
        loyaltyMultiplier: 2
    },

    platinum: {

        discount: 10,
        loyaltyMultiplier: 3
    }

};

/* ==========================================================
   END PART 3A
========================================================== */
```
```javascript
/* ==========================================================
   TOUQAS FOODS
   script.js
   PART 3B

   CART SYSTEM
   ----------------------------------------
   ✓ Add To Cart
   ✓ Cart Drawer Open / Close
   ✓ Quantity Increase
   ✓ Quantity Decrease
   ✓ Remove Item
   ✓ Empty Cart
   ✓ Live Cart Count
   ✓ Live Cart Total
   ✓ LocalStorage Persistence
   ✓ Order Summary Generation

   ADD BELOW PART 3A
========================================================== */

/* ==========================================================
   CART STATE
========================================================== */

let cart = JSON.parse(
    localStorage.getItem("touqas_cart")
) || [];

/* ==========================================================
   CART ELEMENTS
========================================================== */

const cartDrawer =
    document.getElementById("cartDrawer");

const cartBtn =
    document.getElementById("cartBtn");

const closeCart =
    document.getElementById("closeCart");

const cartItemsContainer =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const orderSummary =
    document.getElementById("orderSummary");

/* ==========================================================
   OPTIONAL OVERLAY
========================================================== */

let cartOverlay =
    document.querySelector(".cart-overlay");

if (!cartOverlay) {

    cartOverlay =
        document.createElement("div");

    cartOverlay.className =
        "cart-overlay";

    document.body.appendChild(
        cartOverlay
    );
}

/* ==========================================================
   SAVE CART
========================================================== */

function saveCart() {

    localStorage.setItem(
        "touqas_cart",
        JSON.stringify(cart)
    );

}

/* ==========================================================
   FIND MENU ITEM
========================================================== */

function getMenuItem(id) {

    return menuItems.find(
        item => item.id === Number(id)
    );

}

/* ==========================================================
   ADD TO CART
========================================================== */

function addToCart(id) {

    const item =
        getMenuItem(id);

    if (!item) return;

    const existingItem =
        cart.find(
            cartItem =>
            cartItem.id === item.id
        );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1

        });

    }

    saveCart();

    updateCartUI();

    showToast(
        `${item.name} added to cart`
    );
}

/* ==========================================================
   REMOVE ITEM
========================================================== */

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== Number(id)
    );

    saveCart();

    updateCartUI();

    generateOrderSummary();

}

/* ==========================================================
   INCREASE QTY
========================================================== */

function increaseQuantity(id) {

    const item = cart.find(
        item => item.id === Number(id)
    );

    if (!item) return;

    item.quantity++;

    saveCart();

    updateCartUI();

    generateOrderSummary();

}

/* ==========================================================
   DECREASE QTY
========================================================== */

function decreaseQuantity(id) {

    const item = cart.find(
        item => item.id === Number(id)
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;
    }

    saveCart();

    updateCartUI();

    generateOrderSummary();

}

/* ==========================================================
   EMPTY CART
========================================================== */

function emptyCart() {

    cart = [];

    saveCart();

    updateCartUI();

    generateOrderSummary();

    showToast(
        "Cart emptied"
    );
}

/* ==========================================================
   CALCULATE TOTAL
========================================================== */

function calculateCartTotal() {

    return cart.reduce(

        (total, item) =>

            total +
            item.price *
            item.quantity,

        0

    );

}

/* ==========================================================
   CALCULATE ITEM COUNT
========================================================== */

function calculateItemCount() {

    return cart.reduce(

        (total, item) =>

            total +
            item.quantity,

        0

    );

}

/* ==========================================================
   UPDATE CART UI
========================================================== */

function updateCartUI() {

    if (
        !cartItemsContainer ||
        !cartCount ||
        !cartTotal
    ) return;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                <h3>Your Cart Is Empty</h3>

                <p>
                    Add delicious food items
                    to get started.
                </p>

            </div>

        `;

    } else {

        cart.forEach(item => {

            cartItemsContainer.innerHTML += `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}">

                    <div
                        class="cart-item-details">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            PKR ${item.price}
                        </p>

                        <div
                         class="cart-item-controls">

                            <button
                              class="qty-btn decrease-btn"
                              data-id="${item.id}">
                              -
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                              class="qty-btn increase-btn"
                              data-id="${item.id}">
                              +
                            </button>

                            <button
                              class="remove-btn"
                              data-id="${item.id}">

                              Remove

                            </button>

                        </div>

                    </div>

                </div>

            `;
        });

        cartItemsContainer.innerHTML += `

            <button
                id="emptyCartBtn"
                class="btn btn-secondary"
                style="width:100%;margin-top:15px;">

                Empty Cart

            </button>

        `;
    }

    cartCount.textContent =
        calculateItemCount();

    cartTotal.textContent =
        `PKR ${calculateCartTotal()}`;

    attachCartEvents();

}

/* ==========================================================
   ATTACH CART EVENTS
========================================================== */

function attachCartEvents() {

    document
        .querySelectorAll(".increase-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    increaseQuantity(
                        button.dataset.id
                    );

                }
            );

        });

    document
        .querySelectorAll(".decrease-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    decreaseQuantity(
                        button.dataset.id
                    );

                }
            );

        });

    document
        .querySelectorAll(".remove-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        button.dataset.id
                    );

                }
            );

        });

    const emptyCartBtn =
        document.getElementById(
            "emptyCartBtn"
        );

    if (emptyCartBtn) {

        emptyCartBtn.addEventListener(
            "click",
            emptyCart
        );

    }

}

/* ==========================================================
   ADD TO CART BUTTON EVENTS
========================================================== */

function attachMenuCartButtons() {

    document
        .querySelectorAll(".add-cart-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addToCart(
                        button.dataset.id
                    );

                }
            );

        });

}

/* ==========================================================
   PATCH RENDER MENU

   IMPORTANT:
   Call after menu rendering
========================================================== */

const originalRenderMenu =
    renderMenu;

renderMenu = function(category = "all") {

    originalRenderMenu(category);

    attachMenuCartButtons();

};

/* ==========================================================
   RELOAD MENU WITH EVENTS
========================================================== */

renderMenu();

/* ==========================================================
   OPEN CART
========================================================== */

function openCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.add(
        "active"
    );

    cartOverlay.classList.add(
        "active"
    );

}

/* ==========================================================
   CLOSE CART
========================================================== */

function closeCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove(
        "active"
    );

    cartOverlay.classList.remove(
        "active"
    );

}

/* ==========================================================
   CART BUTTONS
========================================================== */

if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        openCartDrawer
    );

}

if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

}

cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);

/* ==========================================================
   ORDER SUMMARY
========================================================== */

function generateOrderSummary() {

    if (!orderSummary) return;

    if (cart.length === 0) {

        orderSummary.innerHTML = `

            <div class="order-summary-title">
                Order Summary
            </div>

            <p>
                No items in cart.
            </p>

        `;

        return;
    }

    let html = `

        <div class="order-summary-title">
            Order Summary
        </div>

    `;

    cart.forEach(item => {

        html += `

            <div class="summary-row">

                <span>
                    ${item.name}
                    x ${item.quantity}
                </span>

                <span>
                    PKR
                    ${
                        item.price *
                        item.quantity
                    }
                </span>

            </div>

        `;
    });

    html += `

        <div
            class="summary-row summary-total">

            <span>Total</span>

            <span>
                PKR ${calculateCartTotal()}
            </span>

        </div>

    `;

    orderSummary.innerHTML = html;

}

/* ==========================================================
   CHECKOUT BUTTON
========================================================== */

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        () => {

            if (
                cart.length === 0
            ) {

                showToast(
                    "Your cart is empty"
                );

                return;
            }

            generateOrderSummary();

            const checkoutModal =
                document.getElementById(
                    "checkoutModal"
                );

            if (
                checkoutModal
            ) {

                checkoutModal.classList.add(
                    "active"
                );

            }

        }
    );

}

/* ==========================================================
   INITIAL LOAD
========================================================== */

updateCartUI();

generateOrderSummary();

/* ==========================================================
   TOAST NOTIFICATION
========================================================== */

function showToast(message) {

    let toast =
        document.querySelector(
            ".toast"
        );

    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.className =
            "toast";

        document.body.appendChild(
            toast
        );
    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 3000);

}

/* ==========================================================
   FUTURE READY
========================================================== */

/*

Part 3C will add:

✓ Checkout Form Processing

✓ WhatsApp Checkout Order

✓ EmailJS Submission

✓ Google Sheets Submission

✓ Loyalty Points Engine

✓ Membership Logic

✓ Birthday Rewards

✓ JazzCash Integration Structure

✓ Easypaisa Integration Structure

✓ Card Payment Placeholder

✓ Backend API Structure

✓ Admin Dashboard Ready Models

*/

```
/* ==========================================================
   TOUQAS FOODS
   script.js
   PART 3C

   CHECKOUT + BUSINESS LOGIC
   ----------------------------------------
   ✓ Checkout Form Processing
   ✓ WhatsApp Order Submission
   ✓ EmailJS Integration Ready
   ✓ Google Sheets Integration Ready
   ✓ Loyalty Points System
   ✓ Membership Logic
   ✓ Birthday Rewards Logic
   ✓ Payment Gateway Architecture
   ✓ Backend Ready Data Models
========================================================== */

/* ==========================================================
   CHECKOUT ELEMENTS
========================================================== */

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckoutBtn =
    document.getElementById("closeCheckout");

const checkoutForm =
    document.getElementById("checkoutForm");

const placeOrderBtn =
    document.getElementById("placeOrderBtn");

/* ==========================================================
   CLOSE CHECKOUT
========================================================== */

if (closeCheckoutBtn) {

    closeCheckoutBtn.addEventListener(
        "click",
        () => {

            checkoutModal.classList.remove(
                "active"
            );

        }
    );
}

window.addEventListener("click", (e) => {

    if (e.target === checkoutModal) {

        checkoutModal.classList.remove(
            "active"
        );

    }

});

/* ==========================================================
   CUSTOMER PROFILE MODEL
========================================================== */

/*
   Future Database Structure

   customers collection/table

   {
      id,
      fullName,
      phone,
      whatsapp,
      email,
      address,
      city,

      membershipTier,

      loyaltyPoints,

      totalPointsEarned,

      totalPointsRedeemed,

      birthday,

      birthdayRewardUsed,

      monthlyDrinkUsed,

      monthlyMomosUsed,

      createdAt
   }
*/

class CustomerProfile {

    constructor(data) {

        this.fullName =
            data.fullName || "";

        this.phone =
            data.phone || "";

        this.whatsapp =
            data.whatsapp || "";

        this.email =
            data.email || "";

        this.membershipTier =
            data.membershipTier || "silver";

        this.loyaltyPoints =
            data.loyaltyPoints || 0;

        this.totalPointsEarned =
            data.totalPointsEarned || 0;

        this.totalPointsRedeemed =
            data.totalPointsRedeemed || 0;
    }
}

/* ==========================================================
   MEMBERSHIP BENEFITS
========================================================== */

const membershipBenefits = {

    silver: {

        cardPrice: 1200,

        discount: 5,

        loyaltyMultiplier: 1,

        birthdayDiscount: 20
    },

    gold: {

        cardPrice: 2500,

        discount: 5,

        loyaltyMultiplier: 2,

        birthdayDiscount: 30,

        monthlyFreeDrink: true
    },

    platinum: {

        cardPrice: 4000,

        discount: 10,

        loyaltyMultiplier: 3,

        birthdayDiscount: 40,

        monthlyFreeDrink: true,

        monthlyFreeMomos: true,

        priorityService: true
    }

};

/* ==========================================================
   LOYALTY POINTS ENGINE
========================================================== */

/*
   RULES

   Spend PKR 200
   Earn 1 Point

   1 Point = PKR 10

   Minimum Redemption = 100 Points
*/

function calculatePointsEarned(orderAmount) {

    return Math.floor(
        orderAmount / 200
    );

}

function calculateRedeemValue(points) {

    return points * 10;

}

function canRedeem(points) {

    return points >= 100;

}

/* ==========================================================
   APPLY MEMBERSHIP DISCOUNT
========================================================== */

function applyMembershipDiscount(
    amount,
    tier = "silver"
) {

    const discount =
        membershipBenefits[tier]
            ?.discount || 0;

    return amount -
        (
            amount *
            discount
        ) / 100;
}

/* ==========================================================
   BIRTHDAY REWARD CHECK
========================================================== */

function isBirthdayMonth(
    birthdayDate
) {

    if (!birthdayDate)
        return false;

    const today =
        new Date();

    const birthday =
        new Date(
            birthdayDate
        );

    return (
        today.getMonth() ===
        birthday.getMonth()
    );

}

/* ==========================================================
   ORDER MODEL
========================================================== */

/*
   Future Order Table

   {
      orderId,
      customerId,

      items:[ ],

      subtotal,
      discount,
      total,

      paymentMethod,
      paymentStatus,

      orderType,

      loyaltyPointsEarned,

      createdAt
   }
*/

function createOrderObject(
    formData
) {

    const subtotal =
        calculateCartTotal();

    return {

        orderId:
            "TF-" +
            Date.now(),

        business:
            "TOUQAS FOODS",

        customer: {

            fullName:
                formData.fullName,

            phone:
                formData.phone,

            whatsapp:
                formData.whatsapp,

            email:
                formData.email,

            address:
                formData.address,

            city:
                formData.city

        },

        orderType:
            formData.orderType,

        paymentMethod:
            formData.paymentMethod,

        notes:
            formData.notes,

        items: cart,

        subtotal,

        loyaltyPointsEarned:
            calculatePointsEarned(
                subtotal
            ),

        createdAt:
            new Date()
                .toISOString()
    };

}

/* ==========================================================
   WHATSAPP ORDER FORMAT
========================================================== */

function generateWhatsAppOrder(
    order
) {

    let message =

`🍔 TOUQAS FOODS ORDER

Order ID:
${order.orderId}

Customer:
${order.customer.fullName}

Phone:
${order.customer.phone}

WhatsApp:
${order.customer.whatsapp}

Email:
${order.customer.email}

Address:
${order.customer.address}

City:
${order.customer.city}

Order Type:
${order.orderType}

Payment:
${order.paymentMethod}

--------------------------------
ITEMS
--------------------------------
`;

    order.items.forEach(item => {

        message +=

`${item.name}
Qty: ${item.quantity}
PKR ${item.price * item.quantity}

`;

    });

    message +=

`--------------------------------

TOTAL:
PKR ${order.subtotal}

LOYALTY POINTS EARNED:
${order.loyaltyPointsEarned}

Notes:
${order.notes || "N/A"}

Thank You ❤️`;

    return message;
}

/* ==========================================================
   SEND TO WHATSAPP
========================================================== */

function sendOrderToWhatsApp(
    order
) {

    const whatsappMessage =
        generateWhatsAppOrder(
            order
        );

    const whatsappURL =

`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
)}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}

/* ==========================================================
   EMAILJS PLACEHOLDER
========================================================== */

/*
   STEP 1

   Add EmailJS CDN

   STEP 2

   emailjs.init("YOUR_PUBLIC_KEY");

   STEP 3

   emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      order
   )

*/

function sendOrderByEmail(
    order
) {

    console.log(
        "EMAIL ORDER",
        order
    );

    /*
    emailjs.send(
       "service_xxx",
       "template_xxx",
       order
    )
    */
}

/* ==========================================================
   GOOGLE SHEETS PLACEHOLDER
========================================================== */

/*

1. Create Google Sheet

2. Create Apps Script

3. Deploy As Web App

4. Get Web App URL

*/

const GOOGLE_SHEETS_ENDPOINT =
    "YOUR_GOOGLE_APPS_SCRIPT_URL";

async function sendOrderToGoogleSheets(
    order
) {

    try {

        /*
        await fetch(
          GOOGLE_SHEETS_ENDPOINT,
          {
            method:"POST",
            body:JSON.stringify(order)
          }
        );
        */

        console.log(
            "Google Sheets Ready",
            order
        );

    } catch (error) {

        console.error(
            error
        );

    }

}

/* ==========================================================
   PAYMENT GATEWAY ARCHITECTURE
========================================================== */

/*

PAYMENT METHODS

1. COD

2. BANK TRANSFER

3. EASYPAISA

4. JAZZCASH

5. CARD

*/

/* ==========================================================
   JAZZCASH STRUCTURE
========================================================== */

function initiateJazzCashPayment(
    order
) {

    console.log(
        "JazzCash API Placeholder",
        order
    );

    /*
       Backend Endpoint

       POST
       /api/payment/jazzcash

       return paymentURL

       redirect customer
    */
}

/* ==========================================================
   EASYPAISA STRUCTURE
========================================================== */

function initiateEasypaisaPayment(
    order
) {

    console.log(
        "Easypaisa API Placeholder",
        order
    );

}

/* ==========================================================
   CARD PAYMENT STRUCTURE
========================================================== */

function initiateCardPayment(
    order
) {

    console.log(
        "Card Gateway Placeholder",
        order
    );

}

/* ==========================================================
   PAYMENT SUCCESS HANDLER
========================================================== */

function handlePaymentSuccess(
    order
) {

    console.log(
        "Payment Success",
        order
    );

    /*
      update payment status

      store order

      award points

      notify customer
    */
}

/* ==========================================================
   PAYMENT FAILED
========================================================== */

function handlePaymentFailure(
    order
) {

    console.log(
        "Payment Failed",
        order
    );

}

/* ==========================================================
   GET FORM DATA
========================================================== */

function collectCheckoutData() {

    return {

        fullName:
            document.getElementById(
                "fullName"
            )?.value || "",

        phone:
            document.getElementById(
                "phone"
            )?.value || "",

        whatsapp:
            document.getElementById(
                "whatsapp"
            )?.value || "",

        email:
            document.getElementById(
                "email"
            )?.value || "",

        address:
            document.getElementById(
                "address"
            )?.value || "",

        city:
            document.getElementById(
                "city"
            )?.value || "",

        notes:
            document.getElementById(
                "notes"
            )?.value || "",

        orderType:
            document.querySelector(
                'input[name="orderType"]:checked'
            )?.value || "Delivery",

        paymentMethod:
            document.querySelector(
                'input[name="paymentMethod"]:checked'
            )?.value || "COD"
    };

}

/* ==========================================================
   PLACE ORDER
========================================================== */

if (placeOrderBtn) {

    placeOrderBtn.addEventListener(
        "click",
        async (e) => {

            e.preventDefault();

            if (
                cart.length === 0
            ) {

                showToast(
                    "Cart is empty"
                );

                return;
            }

            const formData =
                collectCheckoutData();

            if (
                !formData.fullName ||
                !formData.phone
            ) {

                showToast(
                    "Please complete required fields"
                );

                return;
            }

            const order =
                createOrderObject(
                    formData
                );

            /* Save */

            sendOrderByEmail(
                order
            );

            sendOrderToGoogleSheets(
                order
            );

            /* WhatsApp */

            sendOrderToWhatsApp(
                order
            );

            /* Payment Logic */

            switch (
                formData.paymentMethod
            ) {

                case "JazzCash":

                    initiateJazzCashPayment(
                        order
                    );

                    break;

                case "Easypaisa":

                    initiateEasypaisaPayment(
                        order
                    );

                    break;

                case "Card":

                    initiateCardPayment(
                        order
                    );

                    break;
            }

            showToast(
                "Order Submitted Successfully"
            );

            /* Clear Cart */

            cart = [];

            saveCart();

            updateCartUI();

            generateOrderSummary();

            checkoutModal.classList.remove(
                "active"
            );

        }
    );

}

/* ==========================================================
   MEMBERSHIP CARD BUTTONS
========================================================== */

document
    .querySelectorAll(
        ".membership-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                window.open(
                    "https://forms.gle/kYvsGN6gHzu9Yvcv9",
                    "_blank"
                );

            }
        );

    });

/* ==========================================================
   MONTHLY BENEFITS MODEL
========================================================== */

/*
Silver

- 5% Discount
- 1 Point Multiplier

Gold

- Monthly Free Drink

Platinum

- Monthly Free Drink
- Monthly Free Momos
- Priority Service

Store In Customer Record:

{
   monthlyDrinkUsed:false,
   monthlyMomosUsed:false,
   birthdayRewardUsed:false
}
*/

/* ==========================================================
   ADMIN PANEL READY NOTES
========================================================== */

/*

Future Admin Dashboard

Modules:

1 Orders

2 Customers

3 Loyalty

4 Membership

5 Payments

6 Inventory

7 Reports

8 Delivery Tracking

Suggested Backend:

Node.js
Express
MongoDB

OR

Laravel
MySQL

OR

Firebase

*/

/* ==========================================================
   INVENTORY READY MODEL
========================================================== */

/*

{
   productId,
   productName,
   stock,
   minimumStock,
   category,
   supplier
}

*/

/* ==========================================================
   SALES REPORT READY MODEL
========================================================== */

/*

Daily Sales

Weekly Sales

Monthly Sales

Top Selling Item

Customer Lifetime Value

Loyalty Redemption

Membership Conversion

*/

/* ==========================================================
   END OF TOUQAS FOODS
   SCRIPT.JS
========================================================== */
