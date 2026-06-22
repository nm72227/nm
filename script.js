/**
 * ==========================================================================
 * TOUQAS FOODS EMBEDDED ENGINE SYSTEM OPERATIONAL CONTRACT 
 * ==========================================================================
 */

// COMPANY METADATA DIRECT CONFIGURATION
const SYSTEM_CONFIG = {
    WHATSAPP_PRIMARY_DESTINATION: "923079308372", // Format without symbols
    DELIVERY_FEE_PKR: 150,
    LOYALTY_POINT_REWARD_SPEND_MIN: 200, // 1 Point per 200 PKR
    LOYALTY_POINT_PKR_VALUE: 10,         // 1 Point = 10 PKR
    LOYALTY_MIN_REDEMPTION_THRESHOLD: 100
};

// 16. COMPREHENSIVE REUSABLE DATA STRUCTURE MENU ARRAYS
const TOUQAS_MENU_DATABASE = [
    // A) SIGNATURE MOMOS
    { id: "momo-1", name: "Chicken Steamed Momos", category: "signature-momos", price: 650, badge: "Best Seller", desc: "Hand-folded dumplings packed with juicy minced chicken seasoning and aromatic spices.", img: "momo-steamed.jpg" },
    { id: "momo-2", name: "Chicken Fried Momos", category: "signature-momos", price: 700, badge: "Hot", desc: "Crisp golden outer skin yielding to savory chicken distribution fillings.", img: "momo-fried.jpg" },
    { id: "momo-3", name: "Cheese Momos", category: "signature-momos", price: 850, badge: "Premium", desc: "Decadent melting mozzarella cheese blend loaded into hot tender chicken casings.", img: "momo-cheese.jpg" },
    { id: "momo-4", name: "Tandoori Momos", category: "signature-momos", price: 780, badge: "Smoked", desc: "Char-grilled clay oven momos marinated in deep traditional spiced yogurt marinades.", img: "momo-tandoori.jpg" },
    { id: "momo-5", name: "Beef Momos", category: "signature-momos", price: 890, badge: "Chef Special", desc: "Hearty, slow-cooked premium beef mince with fresh scallions and cilantro infusions.", img: "momo-beef.jpg" },
    { id: "momo-6", name: "Schezwan Momos", category: "signature-momos", price: 750, badge: "Spicy", desc: "Tossed inside high-flame woks loaded with blazing hot garlic Schezwan sauce formulas.", img: "momo-schezwan.jpg" },
    { id: "momo-7", name: "Jhol Momos", category: "signature-momos", price: 800, badge: "Trending", desc: "Steamed units served swimming inside a signature cold spiced tomato-peanut soup broth.", img: "momo-jhol.jpg" },
    { id: "momo-8", name: "Veg Momos", category: "signature-momos", price: 550, badge: "Healthy", desc: "Finely shredded garden fresh cabbage, carrots, and mushrooms crisp profiles.", img: "momo-veg.jpg" },

    // B) PREMIUM BURGERS
    { id: "brg-1", name: "Classic Beef Burger", category: "premium-burgers", price: 750, badge: "Classic", desc: "Smash-grilled 100% prime beef patty layered with burger sauce on brioche.", img: "brg-classic.jpg" },
    { id: "brg-2", name: "Double Beef Burger", category: "premium-burgers", price: 1150, badge: "Monster Stack", desc: "Two premium heavy smash patties double stacked with double cheddar melt cheese layers.", img: "brg-double.jpg" },
    { id: "brg-3", name: "Cheese Beef Burger", category: "premium-burgers", price: 850, badge: "Cheesy", desc: "Juicy beef patty injected with cheddar cream sauce variables and sweet pickles.", img: "brg-cheese.jpg" },
    { id: "brg-4", name: "Signature Burger", category: "premium-burgers", price: 950, badge: "Exclusive", desc: "Premium house-cut meat slice topped with crisp onion rings, secret recipe Touqas glazes.", img: "brg-sig.jpg" },

    // C) LOADED FRIES
    { id: "fr-1", name: "Regular Fries", category: "loaded-fries", price: 300, badge: "Crisp", desc: "Perfect golden straight cut potatoes sprinkled with sea salt flakes.", img: "fr-reg.jpg" },
    { id: "fr-2", name: "Masala Fries", category: "loaded-fries", price: 350, badge: "Spicy Local", desc: "Tossed uniformly in hot local red chili spice formulas and lime zest hints.", img: "fr-masala.jpg" },
    { id: "fr-3", name: "Cheese Fries", category: "loaded-fries", price: 500, badge: "Melting", desc: "Drowned thoroughly under hot fluid rich cheese cheddar sauce streams.", img: "fr-cheese.jpg" },
    { id: "fr-4", name: "Loaded Fries", category: "loaded-fries", price: 750, badge: "Heavy Weight", desc: "Crisp base fries stacked under pulled chicken bits, jalapeños, olives, and premium sauces.", img: "fr-loaded.jpg" },

    // D) PIZZA LINE
    { id: "pz-1", name: "Chicken Tikka Pizza", category: "pizza-line", price: 1250, badge: "Local Favorite", desc: "Spiced tandoori tikka chunks, red onions, and hand-stretched cheese crust layers.", img: "pz-tikka.jpg" },
    { id: "pz-2", name: "Fajita Pizza", category: "pizza-line", price: 1250, badge: "Classic", desc: "Smoked fajita chicken matrix accompanied by colorful bell peppers and sweet corn.", img: "pz-fajita.jpg" },
    { id: "pz-3", name: "Cheese Lover Pizza", category: "pizza-line", price: 1100, badge: "Pure Cheese", desc: "Thick layer blend of premium dynamic mozzarella, cheddar, and parmesan blankets.", img: "pz-cheese.jpg" },
    { id: "pz-4", name: "Kabab Crust Pizza", category: "pizza-line", price: 1550, badge: "Stuffed Edge", desc: "Outer perimeter crust rings fully stuffed with tender charcoal seekh kabab loops.", img: "pz-kabab.jpg" },
    { id: "pz-5", name: "Special Touqas Pizza", category: "pizza-line", price: 1700, badge: "Luxury Chef", desc: "Loaded supreme matrix displaying every meat signature, mushrooms, and double layers.", img: "pz-special.jpg" },

    // E) INJECTED BROAST
    { id: "brst-1", name: "Single Piece Broast", category: "injected-broast", price: 400, badge: "Snack Piece", desc: "Deep pressure fried chicken quarter saturated uniformly with inside spice liquids.", img: "brst-single.jpg" },
    { id: "brst-2", name: "Full Broast Meal", category: "injected-broast", price: 1450, badge: "Family Box", desc: "4 golden pressure crunch pieces served with dinner rolls, premium garlic mayo dip, fries.", img: "brst-full.jpg" },
    { id: "brst-3", name: "Spicy Injected Broast", category: "injected-broast", price: 450, badge: "Extreme Hot", desc: "Core saturation level vector utilizing ghost pepper infused spice liquids.", img: "brst-spicy.jpg" },

    // F) COMBO DEALS
    { id: "cmb-1", name: "Burger + Fries + Drink", category: "combo-deals", price: 990, badge: "Solo Winner", desc: "Classic Burger, matching standard side line fries, and 350ml cold drink can.", img: "cmb-1.jpg" },
    { id: "cmb-2", name: "Pizza Slice Combo", category: "combo-deals", price: 650, badge: "Quick Lunch", desc: "Giant deep pan premium pizza slice, regular crispy masala fries, and a soft drink.", img: "cmb-2.jpg" },
    { id: "cmb-3", name: "Momos + Drink Combo", category: "combo-deals", price: 790, badge: "Momo Mania", desc: "6 pieces of Chicken Steamed Momos served alongside an icy mint margarita glass.", img: "cmb-3.jpg" },
    { id: "cmb-4", name: "Family Combo", category: "combo-deals", price: 3490, badge: "Mega Pack", desc: "1 Large Pizza, 2 Classic Burgers, 1 Full Broast Meal, and a 1.5 Litre Soft Drink.", img: "cmb-4.jpg" },
    { id: "cmb-5", name: "Friends Combo", category: "combo-deals", price: 2100, badge: "Hangout Pack", desc: "12 Mixed variety Momos, 2 Loaded Fries arrays, and 3 individual cold coffees.", img: "cmb-5.jpg" },
    { id: "cmb-6", name: "Broast Combo", category: "combo-deals", price: 950, badge: "Crunch Pack", desc: "2 Pieces of injected broast, large portion fries, garlic buns, and carbonated drink.", img: "cmb-6.jpg" },

    // G) DRINKS
    { id: "drk-1", name: "Soft Drinks", category: "drinks", price: 120, badge: "Chilled", desc: "Selection of cold carbonated choice cans (Pepsi, Coke, Sprite).", img: "drk-soft.jpg" },
    { id: "drk-2", name: "Mineral Water", category: "drinks", price: 80, badge: "Pure", desc: "Premium purified clean bottled drinking water.", img: "drk-water.jpg" },
    { id: "drk-3", name: "Mint Margarita", category: "drinks", price: 280, badge: "Fresh", desc: "Crushed fresh mint leaves, lemon blends, blended ice crystal fields.", img: "drk-mint.jpg" },
    { id: "drk-4", name: "Fresh Lime", category: "drinks", price: 180, badge: "Zesty", desc: "Chilled clear soda splash combined with fresh lime extractions.", img: "drk-lime.jpg" },
    { id: "drk-5", name: "Cold Coffee", category: "drinks", price: 450, badge: "Creamy", desc: "Espresso shots whipped thick with sweet ice cream and chocolate syrups.", img: "drk-coffee.jpg" }
];

const UPCOMING_DISHES_DATABASE = [
    { name: "Korean Wings", desc: "Glazed in extra sticky sweet honey-gochujang pastes." },
    { name: "Pasta Bowls", desc: "Rich white alfredo sheets baked with parmesan caps." },
    { name: "Loaded Shawarma Fries", desc: "Middle eastern chicken shreds overlaid on fries." },
    { name: "Special Wraps", desc: "Flatbread matrices packing crispy broast strip lines." },
    { name: "Dessert Cups", desc: "Layers of velvety dark chocolate ganache cake structures." }
];

const CATEGORY_MAP = {
    "all": "All Matrix Items",
    "signature-momos": "Signature Momos",
    "premium-burgers": "Premium Burgers",
    "loaded-fries": "Loaded Fries",
    "pizza-line": "Pizza Line",
    "injected-broast": "Injected Broast",
    "combo-deals": "Combo Deals",
    "drinks": "Beverages"
};

// INTERNAL MEMORY ENGINE CLIENT APP STATES
let APPLICATION_SHOPPING_CART = [];
let CURRENT_ACTIVE_CATEGORY = "all";
let ACTIVE_APPLIED_LOYALTY_DISCOUNT = 0;

/**
 * CORE EXECUTION ANCHOR ON DOM CONTENT READY
 */
document.addEventListener("DOMContentLoaded", () => {
    initializeUINavigationInteractions();
    renderMenuCategoryTabs();
    renderFoodMenuCards();
    renderUpcomingDishesSection();
});

/**
 * UI INTERACTIONS / SCROLLS / OVERLAYS CONTROLLERS
 */
function initializeUINavigationInteractions() {
    const hamburger = document.getElementById("hamburgerMenu");
    const navLinks = document.getElementById("navLinks");
    const cartTrigger = document.getElementById("cartTrigger");
    const cartDrawer = document.getElementById("cartDrawer");
    const closeCart = document.getElementById("closeCart");
    const cartOverlay = document.getElementById("cartOverlay");
    const backToTopBtn = document.getElementById("backToTopBtn");
    const clearCartBtn = document.getElementById("clearCartBtn");
    const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");
    const backToMenuBtn = document.getElementById("backToMenuBtn");
    const placeOrderFinalBtn = document.getElementById("placeOrderFinalBtn");
    const applyLoyaltyBtn = document.getElementById("applyLoyaltyBtn");

    // Hamburger Mobile Opening Toggles
    hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));
    
    // Close mobile nav when link clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
            e.target.classList.add("active");
            navLinks.classList.remove("active");
        });
    });

    // Cart Panel Triggers
    cartTrigger.addEventListener("click", () => cartDrawer.classList.add("active"));
    closeCart.addEventListener("click", () => cartDrawer.classList.remove("active"));
    cartOverlay.addEventListener("click", () => cartDrawer.classList.remove("active"));

    // Back to top appearance threshold monitoring
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Cart Core Actions Hooks
    clearCartBtn.addEventListener("click", () => {
        APPLICATION_SHOPPING_CART = [];
        syncCartStateToUserInterface();
    });

    proceedToCheckoutBtn.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        document.getElementById("checkout").classList.remove("hidden");
        document.getElementById("checkout").scrollIntoView({ behavior: "smooth" });
    });

    backToMenuBtn.addEventListener("click", () => {
        document.getElementById("checkout").classList.add("hidden");
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    });

    // Loyalty Redemption Application Hook
    applyLoyaltyBtn.addEventListener("click", executeLoyaltyLedgerValidation);

    // Final Process Launch
    placeOrderFinalBtn.addEventListener("click", processingECommerceCheckoutTransmission);
}

/**
 * DYNAMIC DOM GENERATION: CATEGORIES TAB INTERFACE
 */
function renderMenuCategoryTabs() {
    const container = document.getElementById("menuCategoriesContainer");
    container.innerHTML = "";
    
    Object.keys(CATEGORY_MAP).forEach(key => {
        const btn = document.createElement("button");
        btn.className = `category-tab ${key === CURRENT_ACTIVE_CATEGORY ? 'active' : ''}`;
        btn.textContent = CATEGORY_MAP[key];
        btn.setAttribute("data-cat-id", key);
        
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            btn.classList.add("active");
            CURRENT_ACTIVE_CATEGORY = key;
            renderFoodMenuCards();
        });
        
        container.appendChild(btn);
    });
}

/**
 * DYNAMIC DOM GENERATION: PRODUCTS AND MENU GRID CARDS ENGINE
 */
function renderFoodMenuCards() {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";
    
    const filteredDataset = CURRENT_ACTIVE_CATEGORY === "all" 
        ? TOUQAS_MENU_DATABASE 
        : TOUQAS_MENU_DATABASE.filter(item => item.category === CURRENT_ACTIVE_CATEGORY);
        
    filteredDataset.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            <div class="product-img-box">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop'">
                ${item.badge ? `<span class="product-tag-badge">${item.badge}</span>` : ''}
            </div>
            <div class="product-card-body">
                <h3>${item.name}</h3>
                <p class="product-desc">${item.desc}</p>
                <div class="product-price-row">
                    <span class="price-lbl">Price Level</span>
                    <span class="price-val">PKR ${item.price}</span>
                </div>
                <div class="product-action-btns">
                    <button class="btn-add-cart" onclick="executeAddToCartRoutine('${item.id}')"><i class="fa-solid fa-cart-plus"></i> Add Basket</button>
                    <a class="btn-wa-direct" target="_blank" href="https://wa.me/${SYSTEM_CONFIG.WHATSAPP_PRIMARY_DESTINATION}?text=${encodeURIComponent(`Salam! I want to order single item directly: ${item.name} (Qty: 1) from Touqas Foods.`)}">
                        <i class="fa-brands fa-whatsapp"></i> Quick Buy
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/**
 * DYNAMIC DOM GENERATION: UPCOMING PIPELINE CARD BLOCKS
 */
function renderUpcomingDishesSection() {
    const targetGrid = document.getElementById("upcomingGrid");
    targetGrid.innerHTML = "";
    
    UPCOMING_DISHES_DATABASE.forEach(item => {
        const itemBox = document.createElement("div");
        itemBox.className = "upcoming-card";
        itemBox.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <span class="coming-soon-badge"><i class="fa-solid fa-flask"></i> R&D Lab Phase</span>
        `;
        targetGrid.appendChild(itemBox);
    });
}

/**
 * BACKEND COMPLIANT ENGINE: STATE SYNCHRONIZATION AND BASKET MANIPULATIONS
 */
window.executeAddToCartRoutine = function(itemId) {
    const matchingProduct = TOUQAS_MENU_DATABASE.find(p => p.id === itemId);
    if (!matchingProduct) return;
    
    const duplicateBasketEntry = APPLICATION_SHOPPING_CART.find(entry => entry.product.id === itemId);
    if (duplicateBasketEntry) {
        duplicateBasketEntry.quantity += 1;
    } else {
        APPLICATION_SHOPPING_CART.push({ product: matchingProduct, quantity: 1 });
    }
    
    syncCartStateToUserInterface();
    triggerMiniToastNotification(`${matchingProduct.name} attached to shopping basket.`);
};

function modifyCartItemQuantity(itemId, adjustmentVector) {
    const targetedEntry = APPLICATION_SHOPPING_CART.find(entry => entry.product.id === itemId);
    if (!targetedEntry) return;
    
    targetedEntry.quantity += adjustmentVector;
    if (targetedEntry.quantity <= 0) {
        APPLICATION_SHOPPING_CART = APPLICATION_SHOPPING_CART.filter(entry => entry.product.id !== itemId);
    }
    
    syncCartStateToUserInterface();
}

window.deleteItemEntirelyFromBasket = function(itemId) {
    APPLICATION_SHOPPING_CART = APPLICATION_SHOPPING_CART.filter(entry => entry.product.id !== itemId);
    syncCartStateToUserInterface();
};

/**
 * CALCULATIONS RE-COMPILER ENGINE MATRIX
 */
function syncCartStateToUserInterface() {
    // 1. Navbar Count Badges Refresh
    const totalItemsCount = APPLICATION_SHOPPING_CART.reduce((sum, entry) => sum + entry.quantity, 0);
    document.getElementById("cartBadge").textContent = totalItemsCount;
    
    // 2. Clear out container layers and loop re-inject items
    const cartContainer = document.getElementById("cartItemsContainer");
    cartContainer.innerHTML = "";
    
    let subtotalAccumulator = 0;
    
    APPLICATION_SHOPPING_CART.forEach(entry => {
        const itemCostTotal = entry.product.price * entry.quantity;
        subtotalAccumulator += itemCostTotal;
        
        const rowNode = document.createElement("div");
        rowNode.className = "cart-item";
        rowNode.innerHTML = `
            <img src="${entry.product.img}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop'">
            <div class="cart-item-details">
                <h4>${entry.product.name}</h4>
                <div class="cart-item-price">PKR ${entry.product.price}</div>
                <div class="cart-qty-controls">
                    <button onclick="modifyCartItemQuantity('${entry.product.id}', -1)">-</button>
                    <span>${entry.quantity}</span>
                    <button onclick="modifyCartItemQuantity('${entry.product.id}', 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="deleteItemEntirelyFromBasket('${entry.product.id}')"><i class="fa-solid fa-trash-can"></i></button>
        `;
        cartContainer.appendChild(rowNode);
    });
    
    if (APPLICATION_SHOPPING_CART.length === 0) {
        cartContainer.innerHTML = `<p style='text-align:center; padding:40px; color:var(--muted-gray); font-size:13px;'>Your active basket is currently empty.</p>`;
        document.getElementById("proceedToCheckoutBtn").disabled = true;
    } else {
        document.getElementById("proceedToCheckoutBtn").disabled = false;
    }
    
    // Display updates variables matching numeric changes
    document.getElementById("cartSubtotal").textContent = `PKR ${subtotalAccumulator}`;
    
    // Synchronize to Checkout form block spaces if visible
    recalculateCheckoutScreenCalculations(subtotalAccumulator);
}

function recalculateCheckoutScreenCalculations(grossSubtotal) {
    const listDeck = document.getElementById("summaryItemsList");
    listDeck.innerHTML = "";
    
    APPLICATION_SHOPPING_CART.forEach(entry => {
        const node = document.createElement("div");
        node.className = "summary-row-item";
        node.innerHTML = `<span>${entry.product.name} (x${entry.quantity})</span><span>PKR ${entry.product.price * entry.quantity}</span>`;
        listDeck.appendChild(node);
    });
    
    const delivery = grossSubtotal > 0 ? SYSTEM_CONFIG.DELIVERY_FEE_PKR : 0;
    const finalNetPayable = grossSubtotal + delivery - ACTIVE_APPLIED_LOYALTY_DISCOUNT;
    
    document.getElementById("sumSubtotal").textContent = `PKR ${grossSubtotal}`;
    document.getElementById("sumDelivery").textContent = `PKR ${delivery}`;
    document.getElementById("sumTotal").textContent = `PKR ${finalNetPayable < 0 ? 0 : finalNetPayable}`;
}

/**
 * LOYALTY LEDGER BALANCING INTERACTION ENGINE
 */
function executeLoyaltyLedgerValidation() {
    const ptsInput = document.getElementById("redeemPointsInput").value;
    const feedback = document.getElementById("loyaltyFeedback");
    const parsedPointsVal = parseInt(ptsInput);
    
    if (isNaN(parsedPointsVal) || parsedPointsVal < SYSTEM_CONFIG.LOYALTY_MIN_REDEMPTION_THRESHOLD) {
        feedback.className = "loyalty-feedback-msg text-orange";
        feedback.textContent = `Rejected: Minimum redemption eligibility boundary is ${SYSTEM_CONFIG.LOYALTY_MIN_REDEMPTION_THRESHOLD} points.`;
        return;
    }
    
    // Hardcoded simulation calculation for pure frontend validation structure mapping
    ACTIVE_APPLIED_LOYALTY_DISCOUNT = parsedPointsVal * (SYSTEM_CONFIG.LOYALTY_POINT_PKR_VALUE / 10);
    
    feedback.className = "loyalty-feedback-msg text-success";
    feedback.textContent = `Verified! Membership points applied successfully. Discount: PKR ${ACTIVE_APPLIED_LOYALTY_DISCOUNT}`;
    
    document.getElementById("loyaltyDeductionRow").classList.remove("hidden");
    document.getElementById("sumLoyaltyDiscount").textContent = `-PKR ${ACTIVE_APPLIED_LOYALTY_DISCOUNT}`;
    
    // Recalculate calculations with current cart balance state tracking
    const standardSub = APPLICATION_SHOPPING_CART.reduce((sum, entry) => sum + (entry.product.price * entry.quantity), 0);
    recalculateCheckoutScreenCalculations(standardSub);
}

/**
 * HIGH CONVERSION INTERACTIVE CHECKOUT & UNIFIED ORDER HANDLER SYSTEM
 */
function processingECommerceCheckoutTransmission() {
    const formNode = document.getElementById("checkoutForm");
    
    // Run default validations checks on browser fields elements level
    if (!formNode.checkValidity()) {
        formNode.reportValidity();
        return;
    }
    
    // Compile inputs records variables
    const orderDataMeta = {
        fullName: document.getElementById("custName").value,
        phone: document.getElementById("custPhone").value,
        whatsapp: document.getElementById("custWhatsApp").value,
        email: document.getElementById("custEmail").value || "N/A",
        address: document.getElementById("custAddress").value,
        city: document.getElementById("custCity").value,
        orderType: document.getElementById("orderType").value,
        notes: document.getElementById("orderNotes").value || "None",
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        cartItems: APPLICATION_SHOPPING_CART,
        grossAmount: APPLICATION_SHOPPING_CART.reduce((s, e) => s + (e.product.price * e.quantity), 0),
        loyaltyDiscount: ACTIVE_APPLIED_LOYALTY_DISCOUNT
    };
    
    orderDataMeta.finalNetPayable = orderDataMeta.grossAmount + SYSTEM_CONFIG.DELIVERY_FEE_PKR - orderDataMeta.loyaltyDiscount;
    
    // Generate human readable ledger receipts block strings text
    let textReceiptTemplate = `⚡ *NEW ONLINE ORDER ORDERED - TOUQAS FOODS* ⚡\n`;
    textReceiptTemplate += `------------------------------------\n`;
    textReceiptTemplate += `*Client Name:* ${orderDataMeta.fullName}\n`;
    textReceiptTemplate += `*Phone Contact:* ${orderDataMeta.phone}\n`;
    textReceiptTemplate += `*WhatsApp Coordinates:* ${orderDataMeta.whatsapp}\n`;
    textReceiptTemplate += `*Destination City:* ${orderDataMeta.city}\n`;
    textReceiptTemplate += `*Address Stack:* ${orderDataMeta.address}\n`;
    textReceiptTemplate += `*Execution Mode:* ${orderDataMeta.orderType}\n`;
    textReceiptTemplate += `*Payment Routing:* ${orderDataMeta.paymentMethod}\n`;
    textReceiptTemplate += `*Kitchen Instructions:* ${orderDataMeta.notes}\n\n`;
    
    textReceiptTemplate += `🛒 *ORDERED CULINARY MATRIX:* \n`;
    orderDataMeta.cartItems.forEach((entry, i) => {
        textReceiptTemplate += `${i+1}. ${entry.product.name} [x${entry.quantity}] -> PKR ${entry.product.price * entry.quantity}\n`;
    });
    
    textReceiptTemplate += `\n------------------------------------\n`;
    textReceiptTemplate += `*Gross Subtotal:* PKR ${orderDataMeta.grossAmount}\n`;
    textReceiptTemplate += `*Delivery Overhead:* PKR ${SYSTEM_CONFIG.DELIVERY_FEE_PKR}\n`;
    if(orderDataMeta.loyaltyDiscount > 0) {
        textReceiptTemplate += `*Loyalty Applied Deduction:* -PKR ${orderDataMeta.loyaltyDiscount}\n`;
    }
    textReceiptTemplate += `*⭐ TOTAL PAYABLE NET BALANCE:* PKR ${orderDataMeta.finalNetPayable}\n\n`;
    textReceiptTemplate += `_Order routed securely via Touqas Core System Client UI Engine. Please confirm preparation windows._`;

    // OPTION A Execution Implementation: Instant secure WhatsApp routing dispatch
    const compiledWhatsAppURL = `https://wa.me/${SYSTEM_CONFIG.WHATSAPP_PRIMARY_DESTINATION}?text=${encodeURIComponent(textReceiptTemplate)}`;
    
    // DEV BACKEND SYSTEMS CONNECTIONS INTEGRATION NOTICE STACK TRIGGER HOOKS
    console.log("SYSTEM ENGINE CAPTURED COMPLETE ORDER METADATA STRUCTURE:", orderDataMeta);
    /* ====================================================================
       DEVELOPER BACKEND CONNECTIONS WEBHOOK HOOKS NOTE:
       ====================================================================
       To switch tracking execution lines into API sheets loops, wrap your calls here:
       
       // Option B Hook (EmailJS Integration Pipeline Line):
       emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", orderDataMeta);
       
       // Option C Hook (Google Sheets Automation Apps Script Endpoints):
       fetch("YOUR_APPS_SCRIPT_WEBHOOK_URL", { method: "POST", body: JSON.stringify(orderDataMeta) });
       ====================================================================
    */

    // Direct user terminal flow routing paths out execution parameters safely
    alert("Order data generated compiled successfully! Launching safe system link transition pipeline directly into Touqas Foods core verification channel.");
    window.open(compiledWhatsAppURL, "_blank");
    
    // Clear localized data variables
    APPLICATION_SHOPPING_CART = [];
    ACTIVE_APPLIED_LOYALTY_DISCOUNT = 0;
    syncCartStateToUserInterface();
    document.getElementById("checkout").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * UI HELPER INTERACTION NOTIFICATION BOX TOAST UTILITY
 */
function triggerMiniToastNotification(messageString) {
    const toastNode = document.createElement("div");
    toastNode.style.position = "fixed";
    toastNode.style.bottom = "30px";
    toastNode.style.left = "30px";
    toastNode.style.backgroundColor = "var(--dark-charcoal)";
    toastNode.style.color = "var(--bg-cream)";
    toastNode.style.padding = "14px 24px";
    toastNode.style.borderRadius = "8px";
    toastNode.style.fontSize = "13px";
    toastNode.style.fontWeight = "700";
    toastNode.style.zIndex = "3000";
    toastNode.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    toastNode.style.borderLeft = "4px solid var(--accent-orange)";
    toastNode.textContent = messageString;
    
    document.body.appendChild(toastNode);
    setTimeout(() => {
        toastNode.style.transform = "translateY(20px)";
        toastNode.style.opacity = "0";
        toastNode.style.transition = "all 0.4s ease";
        setTimeout(() => toastNode.remove(), 400);
    }, 3000);
}
