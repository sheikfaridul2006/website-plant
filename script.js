// ==========================================
// 1. PRODUCT DATABASE (20 Sample Plants)
// ==========================================
const PRODUCTS = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        category: "Indoor Plants",
        price: 45.00,
        rating: 4.8,
        reviewsCount: 124,
        size: "Medium",
        difficulty: "Easy",
        light: "Indirect Light",
        water: "Every 1-2 Weeks",
        temp: "18°C - 30°C",
        description: "Known as the 'Swiss Cheese Plant', the Monstera Deliciosa is famous for its iconic leaf fenestrations. It adds an instant tropical feel to any room and is highly adaptable to indoor environments.",
        featured: true,
        bestSeller: true,
        images: [
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 2,
        name: "Fiddle Leaf Fig",
        category: "Indoor Plants",
        price: 65.00,
        rating: 4.5,
        reviewsCount: 88,
        size: "Large",
        difficulty: "Medium",
        light: "Bright Filtered",
        water: "Weekly",
        temp: "16°C - 24°C",
        description: "With its dramatic, violin-shaped leaves and tall structure, the Fiddle Leaf Fig is the ultimate statement plant for modern design enthusiasts. It thrives with consistent care and plenty of light.",
        featured: true,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1508588883354-ee8b92b67a4e?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 3,
        name: "Snake Plant (Laurentii)",
        category: "Air Purifying Plants",
        price: 25.00,
        rating: 4.9,
        reviewsCount: 206,
        size: "Medium",
        difficulty: "Easy",
        light: "Low to Bright",
        water: "Every 2-3 Weeks",
        temp: "15°C - 27°C",
        description: "Virtually indestructible, the Snake Plant features upright, sword-like leaves with beautiful gold borders. It is one of the top air-purifying plants recommended by NASA, releasing oxygen even at night.",
        featured: false,
        bestSeller: true,
        images: [
            "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1620127812933-bfb1017194a7?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 4,
        name: "ZZ Plant",
        category: "Indoor Plants",
        price: 30.00,
        rating: 4.7,
        reviewsCount: 95,
        size: "Medium",
        difficulty: "Easy",
        light: "Low to Indirect",
        water: "Every 3 Weeks",
        temp: "15°C - 24°C",
        description: "The ZZ Plant boasts glossy, deep green leaves that look polished. Extremely drought-tolerant and resilient to low light conditions, it is perfect for office spaces and beginner gardeners.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 5,
        name: "Sweet Lavender",
        category: "Flowering Plants",
        price: 18.00,
        rating: 4.6,
        reviewsCount: 74,
        size: "Small",
        difficulty: "Medium",
        light: "Direct Sunlight",
        water: "Weekly",
        temp: "10°C - 21°C",
        description: "Highly aromatic and beautifully colored, French Lavender makes a perfect addition to sunny windowsills, patios, or outdoor gardens. Its soothing fragrance is widely celebrated for reducing stress.",
        featured: true,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1528826224414-758ffb3e17b3?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1507269862354-ad187553f4b5?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 6,
        name: "Japanese Maple Bonsai",
        category: "Bonsai",
        price: 120.00,
        rating: 4.9,
        reviewsCount: 42,
        size: "Small",
        difficulty: "Hard",
        light: "Bright Indirect",
        water: "Daily/As Needed",
        temp: "5°C - 25°C",
        description: "A masterpiece of horticulture. The Japanese Maple Bonsai showcases delicate, five-pointed leaves that shift from vibrant green to fiery orange-red in autumn. A focal point of Zen aesthetics.",
        featured: true,
        bestSeller: true,
        images: [
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1613143311198-c4e123457197?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 7,
        name: "Aloe Vera",
        category: "Succulents",
        price: 15.00,
        rating: 4.8,
        reviewsCount: 182,
        size: "Small",
        difficulty: "Easy",
        light: "Bright Direct",
        water: "Every 3 Weeks",
        temp: "15°C - 28°C",
        description: "Prized for its soothing, gel-filled stalks, Aloe Vera is both functional and beautiful. This thick-leaved succulent loves bright locations and requires minimal watering.",
        featured: false,
        bestSeller: true,
        images: [
            "https://images.unsplash.com/photo-1596547610065-adbc01804c8f?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1512428813824-f713c204f35e?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 8,
        name: "Echeveria Rosette",
        category: "Succulents",
        price: 12.00,
        rating: 4.4,
        reviewsCount: 63,
        size: "Small",
        difficulty: "Easy",
        light: "Bright Direct",
        water: "Every 2 Weeks",
        temp: "18°C - 27°C",
        description: "This geometric succulent forms tight rosettes with beautiful blue-gray and rose highlights. Ideal for dish gardens, terrariums, or sunny desktop spaces.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 9,
        name: "Peace Lily (Spathiphyllum)",
        category: "Air Purifying Plants",
        price: 35.00,
        rating: 4.7,
        reviewsCount: 119,
        size: "Medium",
        difficulty: "Medium",
        light: "Medium/Low Indirect",
        water: "Weekly",
        temp: "18°C - 26°C",
        description: "The Peace Lily is a stunning plant featuring glossy green leaves and elegant white blooms. It acts as an active air filter and will visibly 'droop' when it needs water, telling you exactly when it's thirsty.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 10,
        name: "Boston Fern",
        category: "Air Purifying Plants",
        price: 28.00,
        rating: 4.5,
        reviewsCount: 77,
        size: "Medium",
        difficulty: "Medium",
        light: "Bright Indirect",
        water: "Twice Weekly",
        temp: "16°C - 24°C",
        description: "Feathery, arching fronds make the Boston Fern a classic choice for hanging planters. It loves humidity, making it an excellent plant for well-lit bathrooms or kitchens.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 11,
        name: "English Ivy",
        category: "Outdoor Plants",
        price: 22.00,
        rating: 4.3,
        reviewsCount: 51,
        size: "Medium",
        difficulty: "Easy",
        light: "Medium to Bright",
        water: "Weekly",
        temp: "10°C - 22°C",
        description: "A fast-growing evergreen climbing vine with trailing foliage. English Ivy looks stunning trailing down from a bookshelf or climbing an outdoor trellis. It keeps air fresh and clean.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 12,
        name: "Moth Orchid (Phalaenopsis)",
        category: "Flowering Plants",
        price: 48.00,
        rating: 4.7,
        reviewsCount: 112,
        size: "Medium",
        difficulty: "Medium",
        light: "Indirect Sunlight",
        water: "Every 1-2 Weeks",
        temp: "18°C - 24°C",
        description: "Known for long-lasting, exotic blooms that resemble moths in flight, this Orchid adds refined elegance. Perfect for tabletops, and surprisingly simple to care for with proper draining.",
        featured: true,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 13,
        name: "Traditional Juniper Bonsai",
        category: "Bonsai",
        price: 85.00,
        rating: 4.8,
        reviewsCount: 39,
        size: "Small",
        difficulty: "Hard",
        light: "Full Outdoor Sun",
        water: "Daily/Checking Soil",
        temp: "5°C - 30°C",
        description: "The classic outdoor bonsai tree. This Juniper has a rugged trunk lines and scale-like foliage. It thrives outdoors and requires traditional clipping and wiring training techniques.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1613143311198-c4e123457197?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 14,
        name: "Ficus Retusa Bonsai",
        category: "Bonsai",
        price: 95.00,
        rating: 4.6,
        reviewsCount: 31,
        size: "Medium",
        difficulty: "Medium",
        light: "Bright Light",
        water: "Weekly",
        temp: "15°C - 28°C",
        description: "Also known as the 'Ginseng Ficus', this bonsai is perfect for beginners. It features a heavy, exposed bulbous root trunk topped by thick dark green oval leaves. Extremely forgiving of dry spells.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 15,
        name: "Red Anthurium",
        category: "Flowering Plants",
        price: 40.00,
        rating: 4.6,
        reviewsCount: 84,
        size: "Medium",
        difficulty: "Medium",
        light: "Bright Indirect",
        water: "Weekly",
        temp: "18°C - 28°C",
        description: "Featuring heart-shaped, waxy red spathes that bloom year-round, the Anthurium is a symbol of hospitality. It brings striking warmth and color contrast to desks and consoles.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 16,
        name: "Jade Plant (Crassula)",
        category: "Succulents",
        price: 20.00,
        rating: 4.7,
        reviewsCount: 142,
        size: "Small",
        difficulty: "Easy",
        light: "Bright Direct/Indirect",
        water: "Every 2-3 Weeks",
        temp: "15°C - 26°C",
        description: "Considered a symbol of good luck and prosperity. The Jade Plant features stout, woody stems and plump green leaves. It can grow into a miniature tree-like shape over time.",
        featured: false,
        bestSeller: true,
        images: [
            "https://images.unsplash.com/photo-1512428813824-f713c204f35e?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1596547610065-adbc01804c8f?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 17,
        name: "String of Pearls",
        category: "Succulents",
        price: 24.00,
        rating: 4.3,
        reviewsCount: 56,
        size: "Small",
        difficulty: "Medium",
        light: "Bright Indirect",
        water: "Every 2 Weeks",
        temp: "18°C - 26°C",
        description: "A fascinating hanging succulent with spherical, bead-like foliage. When draped over planters, it mimics cascades of pearls. Needs sharp drainage and careful watering.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 18,
        name: "Blue Hydrangea",
        category: "Outdoor Plants",
        price: 32.00,
        rating: 4.5,
        reviewsCount: 68,
        size: "Medium",
        difficulty: "Medium",
        light: "Morning Sun/Afternoon Shade",
        water: "Twice Weekly",
        temp: "12°C - 22°C",
        description: "Stunning deciduous shrub presenting enormous globes of blue flower clusters. Extremely popular for garden borders, moist soils, and garden container backdrops.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1507269862354-ad187553f4b5?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1528826224414-758ffb3e17b3?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 19,
        name: "Vibrant Bougainvillea",
        category: "Outdoor Plants",
        price: 38.00,
        rating: 4.8,
        reviewsCount: 71,
        size: "Large",
        difficulty: "Medium",
        light: "Full Direct Sun",
        water: "Weekly",
        temp: "18°C - 35°C",
        description: "This woody climbing vine is famous for its cascading blankets of electric magenta papery flower bracts. Loves heat, blooms repeatedly, and climbs aggressively along walls or fences.",
        featured: true,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1589244159943-460088ed5c92?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1507269862354-ad187553f4b5?auto=format&fit=crop&q=80&w=600"
        ]
    },
    {
        id: 20,
        name: "Spider Plant (Chlorophytum)",
        category: "Air Purifying Plants",
        price: 19.00,
        rating: 4.7,
        reviewsCount: 165,
        size: "Medium",
        difficulty: "Easy",
        light: "Indirect Light",
        water: "Weekly",
        temp: "13°C - 27°C",
        description: "Produces narrow, arching green and cream striped foliage. This fast-growing plant sends down dangling runners with miniature plantlets ('spiders') which can easily be clipped and replanted.",
        featured: false,
        bestSeller: false,
        images: [
            "https://images.unsplash.com/photo-1508588883354-ee8b92b67a4e?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600"
        ]
    }
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
const getCart = () => JSON.parse(localStorage.getItem("greennest_cart")) || [];
const saveCart = (cart) => {
    localStorage.setItem("greennest_cart", JSON.stringify(cart));
    updateBadges();
};

const getWishlist = () => JSON.parse(localStorage.getItem("greennest_wishlist")) || [];
const saveWishlist = (wishlist) => {
    localStorage.setItem("greennest_wishlist", JSON.stringify(wishlist));
    updateBadges();
};

const getTheme = () => localStorage.getItem("greennest_theme") || "light";
const saveTheme = (theme) => localStorage.setItem("greennest_theme", theme);

// Global Actions
const addToCart = (productId, qty = 1, showToastNotify = true) => {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += qty;
    } else {
        cart.push({ productId, quantity: qty });
    }
    
    saveCart(cart);
    
    if (showToastNotify) {
        const prod = PRODUCTS.find(p => p.id === productId);
        showToast(`<i class="fa-solid fa-cart-shopping"></i> Added <strong>${prod.name}</strong> to Cart!`);
    }
};

const toggleWishlist = (productId) => {
    let wishlist = getWishlist();
    const itemIndex = wishlist.indexOf(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    let added = false;
    
    if (itemIndex > -1) {
        wishlist.splice(itemIndex, 1);
        showToast(`<i class="fa-solid fa-heart-circle-minus"></i> Removed <strong>${prod.name}</strong> from Wishlist.`);
    } else {
        wishlist.push(productId);
        showToast(`<i class="fa-solid fa-heart"></i> Added <strong>${prod.name}</strong> to Wishlist!`);
        added = true;
    }
    
    saveWishlist(wishlist);
    return added;
};

// ==========================================
// 3. COMMON INTERFACE (Header, Footer, Menu, Toasts)
// ==========================================
const showToast = (message) => {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = message;
    container.appendChild(toast);
    
    // Automatically remove after 3.5s
    setTimeout(() => {
        toast.classList.add("removing");
        toast.addEventListener("animationend", () => toast.remove());
    }, 3500);
};

const updateBadges = () => {
    const cartCountBadge = document.getElementById("cart-count-badge");
    const wishlistCountBadge = document.getElementById("wishlist-count-badge");
    
    const cart = getCart();
    const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlist = getWishlist();
    
    if (cartCountBadge) {
        cartCountBadge.textContent = totalCartItems;
        cartCountBadge.style.display = totalCartItems > 0 ? "flex" : "none";
    }
    if (wishlistCountBadge) {
        wishlistCountBadge.textContent = wishlist.length;
        wishlistCountBadge.style.display = wishlist.length > 0 ? "flex" : "none";
    }
};

// Theme Toggle Initialization
const initTheme = () => {
    const currentTheme = getTheme();
    const themeBtnIcon = document.getElementById("theme-btn-icon");
    
    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeBtnIcon) {
            themeBtnIcon.className = "fa-solid fa-sun";
        }
    } else {
        document.body.classList.remove("dark-theme");
        if (themeBtnIcon) {
            themeBtnIcon.className = "fa-solid fa-moon";
        }
    }
    
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            saveTheme(isDark ? "dark" : "light");
            
            if (themeBtnIcon) {
                themeBtnIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
            }
            showToast(`<i class="fa-solid fa-circle-half-stroke"></i> Switched to ${isDark ? "Dark" : "Light"} Mode`);
        });
    }
};

// Page Loader Control
const initLoader = () => {
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 400); // minor fade-out delay
        });
    }
};

// Sticky Header & Scroll Top Icon
const initScrollBehavior = () => {
    const navbar = document.querySelector(".navbar");
    const scrollTopBtn = document.getElementById("scroll-top");
    
    window.addEventListener("scroll", () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
        
        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        }
    });
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
};

// Mobile Navigation Panel
const initMobileNav = () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            
            const isOpen = navMenu.classList.contains("active");
            menuToggle.className = isOpen ? "fa-solid fa-xmark mobile-toggle" : "fa-solid fa-bars mobile-toggle";
        });
        
        // Close menu if links are clicked
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.className = "fa-solid fa-bars mobile-toggle";
            });
        });
    }
};

// Render Stars Utility
const renderStarsHTML = (rating) => {
    let starsHTML = "";
    const roundedRating = Math.round(rating * 2) / 2; // nearest 0.5
    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            starsHTML += '<i class="fa-solid fa-star"></i>';
        } else if (i - 0.5 === roundedRating) {
            starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            starsHTML += '<i class="fa-regular fa-star"></i>';
        }
    }
    return starsHTML;
};

// Card HTML Builder
const buildProductCardHTML = (prod, isWishlistMode = false) => {
    const wishlist = getWishlist();
    const isWishlisted = wishlist.includes(prod.id);
    
    if (isWishlistMode) {
        return `
            <div class="product-card glass-card" data-id="${prod.id}">
                <div class="wishlist-remove-icon" onclick="removeWishlistItem(${prod.id})">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
                <div class="product-image-container">
                    <img src="${prod.images[0]}" alt="${prod.name}" class="product-img" loading="lazy">
                    <div class="product-badge">${prod.category}</div>
                </div>
                <div class="product-info">
                    <span class="product-cat">${prod.size} Size | ${prod.difficulty} Care</span>
                    <h3 class="product-title"><a href="product.html?id=${prod.id}">${prod.name}</a></h3>
                    <div class="product-rating">
                        ${renderStarsHTML(prod.rating)}
                        <span>(${prod.reviewsCount})</span>
                    </div>
                    <div class="product-footer">
                        <span class="product-price">$${prod.price.toFixed(2)}</span>
                    </div>
                    <button class="btn btn-primary wishlist-action-btn" onclick="wishlistMoveToCart(${prod.id})">
                        <i class="fa-solid fa-cart-shopping"></i> Move to Cart
                    </button>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="product-card glass-card" data-id="${prod.id}">
            <div class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="handleWishlistToggle(event, ${prod.id})">
                <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
            </div>
            <div class="product-image-container">
                <img src="${prod.images[0]}" alt="${prod.name}" class="product-img" loading="lazy">
                ${prod.bestSeller ? '<div class="product-badge">Best Seller</div>' : ''}
            </div>
            <div class="product-info">
                <span class="product-cat">${prod.category}</span>
                <h3 class="product-title"><a href="product.html?id=${prod.id}">${prod.name}</a></h3>
                <div class="product-rating">
                    ${renderStarsHTML(prod.rating)}
                    <span>(${prod.reviewsCount})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${prod.price.toFixed(2)}</span>
                    <div class="quick-add-btn" onclick="addToCart(${prod.id}, 1, true)" title="Add to Cart">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// Handles clicking wishlist badge on generic cards
const handleWishlistToggle = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const btn = e.currentTarget;
    const isAdded = toggleWishlist(id);
    
    if (isAdded) {
        btn.classList.add("active");
        btn.querySelector("i").className = "fa-solid fa-heart";
    } else {
        btn.classList.remove("active");
        btn.querySelector("i").className = "fa-regular fa-heart";
    }
};

// ==========================================
// 4. PAGES-SPECIFIC FUNCTIONALITY
// ==========================================

// --- PAGE: HOME PAGE ---
const initHomePage = () => {
    const bestSellersGrid = document.getElementById("best-sellers-grid");
    
    // Load Best Sellers (Top 4 rated best sellers)
    if (bestSellersGrid) {
        const bestSellers = PRODUCTS.filter(p => p.bestSeller).slice(0, 4);
        bestSellersGrid.innerHTML = bestSellers.map(p => buildProductCardHTML(p)).join("");
    }
    
    // Testimonials Slider
    const slides = document.querySelectorAll(".testimonial-slide");
    const dotsContainer = document.getElementById("slider-dots");
    const prevBtn = document.getElementById("slider-prev");
    const nextBtn = document.getElementById("slider-next");
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideTimer;
        
        // Render dots
        if (dotsContainer) {
            dotsContainer.innerHTML = Array.from(slides).map((_, i) => 
                `<div class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
            ).join("");
        }
        
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove("active"));
            const dots = document.querySelectorAll(".slider-dot");
            dots.forEach(dot => dot.classList.remove("active"));
            
            // Adjust bounds
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;
            
            slides[currentSlide].classList.add("active");
            if (dots[currentSlide]) dots[currentSlide].classList.add("active");
            resetTimer();
        };
        
        const nextSlide = () => showSlide(currentSlide + 1);
        const prevSlide = () => showSlide(currentSlide - 1);
        
        const resetTimer = () => {
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, 5000); // 5 sec rotate
        };
        
        if (prevBtn) prevBtn.addEventListener("click", prevSlide);
        if (nextBtn) nextBtn.addEventListener("click", nextSlide);
        
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("slider-dot")) {
                const index = parseInt(e.target.getAttribute("data-index"));
                showSlide(index);
            }
        });
        
        resetTimer();
    }
    
    // Animated Counters
    const counterItems = document.querySelectorAll(".counter-val");
    if (counterItems.length > 0) {
        const countOptions = { threshold: 0.5, rootMargin: "0px" };
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute("data-target"));
                    const suffix = counter.getAttribute("data-suffix") || "";
                    let start = 0;
                    const duration = 1500; // 1.5s
                    const increment = target / (duration / 16); // ~60fps
                    
                    const updateCount = () => {
                        start += increment;
                        if (start < target) {
                            counter.textContent = Math.floor(start).toLocaleString() + suffix;
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.textContent = target.toLocaleString() + suffix;
                        }
                    };
                    
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, countOptions);
        
        counterItems.forEach(item => counterObserver.observe(item));
    }
    
    // Newsletter Submit
    const newsForm = document.getElementById("newsletter-form");
    if (newsForm) {
        newsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = newsForm.querySelector("input[type='email']");
            if (emailInput.value.trim()) {
                showToast(`<i class="fa-solid fa-envelope-open-text"></i> Thanks for subscribing, <strong>${emailInput.value}</strong>! Check your inbox soon.`);
                emailInput.value = "";
            }
        });
    }
};

// --- PAGE: SHOP PAGE ---
let activeCategoryFilter = "All";
let activePriceMax = 150;
let activeSearchQuery = "";
let activeSortOption = "featured";

const initShopPage = () => {
    const shopProductGrid = document.getElementById("shop-product-grid");
    const searchInput = document.getElementById("shop-search");
    const priceSlider = document.getElementById("price-slider");
    const priceLimitVal = document.getElementById("price-limit-val");
    const sortSelect = document.getElementById("sort-select");
    const totalResultsSpan = document.getElementById("total-results-count");
    
    // Parse category query parameter e.g. ?cat=indoor
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("cat");
    if (catParam) {
        const catMap = {
            "indoor": "Indoor Plants",
            "outdoor": "Outdoor Plants",
            "succulent": "Succulents",
            "bonsai": "Bonsai",
            "flowering": "Flowering Plants",
            "air-purifying": "Air Purifying Plants"
        };
        if (catMap[catParam]) {
            activeCategoryFilter = catMap[catParam];
            document.querySelectorAll(".filter-checkbox-label").forEach(label => {
                if (label.getAttribute("data-category") === activeCategoryFilter) {
                    label.classList.add("active");
                } else {
                    label.classList.remove("active");
                }
            });
        }
    }
    
    // Sidebar toggle (Mobile)
    const mobileFilterOpenBtn = document.getElementById("mobile-filter-toggle");
    const filterSidebar = document.getElementById("filter-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const mobileFilterCloseBtn = document.getElementById("mobile-filter-close");
    
    if (mobileFilterOpenBtn && filterSidebar && sidebarOverlay) {
        mobileFilterOpenBtn.addEventListener("click", () => {
            filterSidebar.classList.add("active");
            sidebarOverlay.classList.add("active");
        });
        
        const closeSidebar = () => {
            filterSidebar.classList.remove("active");
            sidebarOverlay.classList.remove("active");
        };
        
        sidebarOverlay.addEventListener("click", closeSidebar);
        if (mobileFilterCloseBtn) {
            mobileFilterCloseBtn.addEventListener("click", closeSidebar);
        }
    }
    
    // Count items per category dynamically to inject in filter labels
    PRODUCTS.forEach(p => {
        const catClean = p.category;
    });
    
    const renderFilteredProducts = () => {
        let list = [...PRODUCTS];
        
        // 1. Search Query Filter
        if (activeSearchQuery.trim() !== "") {
            const query = activeSearchQuery.toLowerCase().trim();
            list = list.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
        }
        
        // 2. Category Filter
        if (activeCategoryFilter !== "All") {
            list = list.filter(p => p.category === activeCategoryFilter);
        }
        
        // 3. Price Filter
        list = list.filter(p => p.price <= activePriceMax);
        
        // 4. Sort selection
        if (activeSortOption === "price-low") {
            list.sort((a, b) => a.price - b.price);
        } else if (activeSortOption === "price-high") {
            list.sort((a, b) => b.price - a.price);
        } else if (activeSortOption === "rating") {
            list.sort((a, b) => b.rating - a.rating);
        } else if (activeSortOption === "alphabetical") {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            // Default "featured" - Best sellers / Featured first
            list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
        
        // Render
        if (totalResultsSpan) {
            totalResultsSpan.textContent = list.length;
        }
        
        if (shopProductGrid) {
            if (list.length === 0) {
                shopProductGrid.innerHTML = `
                    <div class="no-products-msg">
                        <i class="fa-solid fa-leaf"></i>
                        <h3>No Plants Found</h3>
                        <p>Try refining your search term or adjusting the price filter.</p>
                    </div>
                `;
            } else {
                shopProductGrid.innerHTML = list.map(p => buildProductCardHTML(p)).join("");
            }
        }
    };
    
    // Category click handler
    document.querySelectorAll(".filter-checkbox-label").forEach(label => {
        label.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll(".filter-checkbox-label").forEach(l => l.classList.remove("active"));
            
            label.classList.add("active");
            activeCategoryFilter = label.getAttribute("data-category");
            renderFilteredProducts();
        });
    });
    
    // Search handler
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            activeSearchQuery = e.target.value;
            renderFilteredProducts();
        });
    }
    
    // Price range slider handler
    if (priceSlider) {
        priceSlider.addEventListener("input", (e) => {
            activePriceMax = parseFloat(e.target.value);
            if (priceLimitVal) {
                priceLimitVal.textContent = `$${activePriceMax}`;
            }
            renderFilteredProducts();
        });
    }
    
    // Sort dropdown handler
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            activeSortOption = e.target.value;
            renderFilteredProducts();
        });
    }
    
    // Render on boot
    renderFilteredProducts();
};

// --- PAGE: PRODUCT DETAILS PAGE ---
const initProductDetailsPage = () => {
    // Get product ID from URL query string ?id=X
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const product = PRODUCTS.find(p => p.id === id);
    
    const detailsContainer = document.getElementById("product-details-container");
    const relatedContainer = document.getElementById("related-products-grid");
    
    if (!product) {
        if (detailsContainer) {
            detailsContainer.innerHTML = `
                <div class="empty-cart-state" style="grid-column: 1/-1;">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <h2>Plant Not Found</h2>
                    <p>We couldn't locate the requested green friend. It may have been cataloged under a different name.</p>
                    <a href="shop.html" class="btn btn-primary"><i class="fa-solid fa-arrow-left"></i> Return to Shop</a>
                </div>
            `;
        }
        return;
    }
    
    // Inject Details page values
    if (detailsContainer) {
        // Build gallery HTML
        const thumbsHTML = product.images.map((imgUrl, i) => `
            <button class="thumbnail-btn ${i === 0 ? 'active' : ''}" onclick="switchDetailImage(this, '${imgUrl}')">
                <img src="${imgUrl}" alt="${product.name} alternate view">
            </button>
        `).join("");
        
        detailsContainer.innerHTML = `
            <div class="product-details-grid">
                <!-- Left: Galleries -->
                <div class="gallery-container">
                    <div class="main-image-viewport glass-card">
                        <img id="main-product-image" src="${product.images[0]}" alt="${product.name} principal photo">
                    </div>
                    <div class="gallery-thumbnails">
                        ${thumbsHTML}
                    </div>
                </div>
                
                <!-- Right: Information -->
                <div class="details-info">
                    <span class="details-cat">${product.category}</span>
                    <h1 class="details-title">${product.name}</h1>
                    
                    <div class="details-rating-row">
                        <div class="details-stars">
                            ${renderStarsHTML(product.rating)}
                        </div>
                        <span class="details-reviews-count">(${product.reviewsCount} customer reviews)</span>
                    </div>
                    
                    <div class="details-price">$${product.price.toFixed(2)}</div>
                    
                    <div class="details-meta-tags">
                        <span class="meta-tag"><i class="fa-solid fa-layer-group"></i> Size: ${product.size}</span>
                        <span class="meta-tag"><i class="fa-solid fa-seedling"></i> Care: ${product.difficulty}</span>
                    </div>
                    
                    <p class="details-desc">${product.description}</p>
                    
                    <!-- Care instructions card -->
                    <div class="care-instructions-card glass-card">
                        <h4 style="margin-bottom:15px; font-weight:600;"><i class="fa-solid fa-heart-pulse" style="color:var(--accent); margin-right:8px;"></i> Care Guide</h4>
                        <div class="care-grid">
                            <div class="care-item">
                                <i class="fa-solid fa-droplet"></i>
                                <span class="label">Water</span>
                                <span class="value">${product.water}</span>
                            </div>
                            <div class="care-item">
                                <i class="fa-solid fa-sun"></i>
                                <span class="label">Light</span>
                                <span class="value">${product.light}</span>
                            </div>
                            <div class="care-item">
                                <i class="fa-solid fa-temperature-half"></i>
                                <span class="label">Temp</span>
                                <span class="value">${product.temp}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Action row -->
                    <div class="actions-row">
                        <div class="quantity-selector">
                            <div class="qty-btn" id="qty-decrement"><i class="fa-solid fa-minus"></i></div>
                            <div class="qty-value" id="qty-count-val">1</div>
                            <div class="qty-btn" id="qty-increment"><i class="fa-solid fa-plus"></i></div>
                        </div>
                        <button class="btn btn-primary add-cart-large" id="add-to-cart-action">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="btn btn-secondary btn-icon" id="add-to-wishlist-action" title="Save to Wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Bottom: Details Tabs -->
            <div class="details-tabs">
                <div class="tabs-nav">
                    <div class="tab-btn active" data-tab="tab-care">Care Details</div>
                    <div class="tab-btn" data-tab="tab-reviews">Reviews (${product.reviewsCount})</div>
                </div>
                
                <div class="tab-panel active" id="tab-care">
                    <p style="margin-bottom:15px;">To keep your <strong>${product.name}</strong> thriving, ensure the ambient room temperature is maintained between <strong>${product.temp}</strong>. Provide <strong>${product.light}</strong> and follow a watering schedule of approximately <strong>${product.water}</strong>, allowing the top soil to dry out between waterings.</p>
                    <p>Avoid placing this plant near artificial heaters, drafty air conditioning vents, or direct freezing breezes during cold seasons. Wipe the leaves periodically with a damp, soft cloth to remove dust buildup, ensuring optimal photosynthesis.</p>
                </div>
                
                <div class="tab-panel" id="tab-reviews">
                    <div class="reviews-list">
                        <div class="review-item">
                            <div class="review-header">
                                <div class="review-user-info">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Sarah K." class="review-user-avatar">
                                    <div>
                                        <h5 class="review-user-name">Sarah K.</h5>
                                        <div class="details-stars">${renderStarsHTML(5)}</div>
                                    </div>
                                </div>
                                <span class="review-date">May 15, 2026</span>
                            </div>
                            <p class="review-text">Absolutely thrilled with my Monstera! It arrived in immaculate condition, packaged with extreme care. Two weeks in, and I already see a fresh leaf uncurling. GreenNest is now my go-to for quality house plants.</p>
                        </div>
                        <div class="review-item">
                            <div class="review-header">
                                <div class="review-user-info">
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Marcus T." class="review-user-avatar">
                                    <div>
                                        <h5 class="review-user-name">Marcus T.</h5>
                                        <div class="details-stars">${renderStarsHTML(4.5)}</div>
                                    </div>
                                </div>
                                <span class="review-date">April 28, 2026</span>
                            </div>
                            <p class="review-text">Beautiful plant with rich, lush foliage. It is slightly smaller than expected but looks very healthy and has adapted perfectly to my living room corner. Highly recommended.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Wire image gallery switcher helper to window scope for inline onclick
        window.switchDetailImage = (btn, url) => {
            document.getElementById("main-product-image").src = url;
            document.querySelectorAll(".thumbnail-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        };
        
        // Wire tabs toggle
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
                document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
                
                btn.classList.add("active");
                const targetTab = btn.getAttribute("data-tab");
                document.getElementById(targetTab).classList.add("active");
            });
        });
        
        // Quantity Controls
        let detailQty = 1;
        const qtyVal = document.getElementById("qty-count-val");
        const decBtn = document.getElementById("qty-decrement");
        const incBtn = document.getElementById("qty-increment");
        
        if (decBtn && incBtn && qtyVal) {
            decBtn.addEventListener("click", () => {
                if (detailQty > 1) {
                    detailQty--;
                    qtyVal.textContent = detailQty;
                }
            });
            incBtn.addEventListener("click", () => {
                detailQty++;
                qtyVal.textContent = detailQty;
            });
        }
        
        // Cart / Wishlist Actions
        const addCartAction = document.getElementById("add-to-cart-action");
        const addWishlistAction = document.getElementById("add-to-wishlist-action");
        
        if (addCartAction) {
            addCartAction.addEventListener("click", () => {
                addToCart(product.id, detailQty, true);
                detailQty = 1; // reset quantity
                if (qtyVal) qtyVal.textContent = 1;
            });
        }
        
        const updateDetailsWishlistBtn = () => {
            const wishlist = getWishlist();
            const isWishlisted = wishlist.includes(product.id);
            if (addWishlistAction) {
                if (isWishlisted) {
                    addWishlistAction.innerHTML = '<i class="fa-solid fa-heart"></i>';
                    addWishlistAction.style.color = '#e63946';
                    addWishlistAction.style.backgroundColor = '#ffe5ec';
                    addWishlistAction.style.borderColor = '#ffe5ec';
                } else {
                    addWishlistAction.innerHTML = '<i class="fa-regular fa-heart"></i>';
                    addWishlistAction.style.color = 'var(--text-muted)';
                    addWishlistAction.style.backgroundColor = 'var(--bg-surface)';
                    addWishlistAction.style.borderColor = 'var(--border-color)';
                }
            }
        };
        
        if (addWishlistAction) {
            updateDetailsWishlistBtn();
            addWishlistAction.addEventListener("click", () => {
                toggleWishlist(product.id);
                updateDetailsWishlistBtn();
            });
        }
    }
    
    // Load Related Products (same category, excluding current)
    if (relatedContainer) {
        const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        if (related.length > 0) {
            relatedContainer.innerHTML = related.map(p => buildProductCardHTML(p)).join("");
        } else {
            // grab 4 generic ones
            const genericList = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
            relatedContainer.innerHTML = genericList.map(p => buildProductCardHTML(p)).join("");
        }
    }
};

// --- PAGE: CART PAGE ---
let activeCouponDiscount = 0; // percentage or fixed subtraction
let activeCouponType = "percent"; // or fixed
let activeCouponCodeApplied = "";

const initCartPage = () => {
    renderCart();
};

const renderCart = () => {
    const cartList = document.getElementById("cart-items-list");
    const summarySubtotal = document.getElementById("summary-subtotal");
    const summaryShipping = document.getElementById("summary-shipping");
    const summaryDiscountRow = document.getElementById("summary-discount-row");
    const summaryDiscountVal = document.getElementById("summary-discount-val");
    const summaryTax = document.getElementById("summary-tax");
    const summaryTotal = document.getElementById("summary-total");
    
    const cart = getCart();
    
    if (cart.length === 0) {
        if (cartList) {
            cartList.innerHTML = `
                <div class="empty-cart-state">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <h2>Your Shopping Cart is Empty</h2>
                    <p>It looks like you haven't added any plant babies to your cart yet.</p>
                    <a href="shop.html" class="btn btn-primary"><i class="fa-solid fa-leaf"></i> Browse Plants</a>
                </div>
            `;
        }
        
        // Hide order summary details
        if (summarySubtotal) summarySubtotal.textContent = "$0.00";
        if (summaryShipping) summaryShipping.textContent = "$0.00";
        if (summaryTax) summaryTax.textContent = "$0.00";
        if (summaryTotal) summaryTotal.textContent = "$0.00";
        if (summaryDiscountRow) summaryDiscountRow.style.display = "none";
        return;
    }
    
    let subtotal = 0;
    
    if (cartList) {
        cartList.innerHTML = cart.map(item => {
            const prod = PRODUCTS.find(p => p.id === item.productId);
            if (!prod) return "";
            
            const itemSubtotal = prod.price * item.quantity;
            subtotal += itemSubtotal;
            
            return `
                <div class="cart-item-row glass-card">
                    <img src="${prod.images[0]}" alt="${prod.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <span class="cart-item-category">${prod.category}</span>
                        <h3 class="cart-item-title"><a href="product.html?id=${prod.id}">${prod.name}</a></h3>
                        <span class="cart-item-price">$${prod.price.toFixed(2)}</span>
                    </div>
                    
                    <div class="cart-qty-ctrl">
                        <div class="cart-qty-btn" onclick="adjustCartQty(${prod.id}, -1)"><i class="fa-solid fa-minus"></i></div>
                        <div class="cart-qty-val">${item.quantity}</div>
                        <div class="cart-qty-btn" onclick="adjustCartQty(${prod.id}, 1)"><i class="fa-solid fa-plus"></i></div>
                    </div>
                    
                    <div class="cart-item-subtotal">$${itemSubtotal.toFixed(2)}</div>
                    
                    <div class="cart-item-remove" onclick="removeCartItem(${prod.id})" title="Remove item">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            `;
        }).join("");
    }
    
    // Subtotal math
    const shipping = 10.00; // Flat shipping rate
    let discount = 0;
    
    if (activeCouponCodeApplied !== "") {
        if (activeCouponType === "percent") {
            discount = subtotal * activeCouponDiscount;
        } else {
            discount = activeCouponDiscount;
        }
        
        if (summaryDiscountRow && summaryDiscountVal) {
            summaryDiscountRow.style.display = "flex";
            summaryDiscountVal.textContent = `-$${discount.toFixed(2)}`;
        }
    } else {
        if (summaryDiscountRow) summaryDiscountRow.style.display = "none";
    }
    
    const taxableSubtotal = Math.max(0, subtotal - discount);
    const tax = taxableSubtotal * 0.08; // 8% sales tax
    const total = taxableSubtotal + shipping + tax;
    
    if (summarySubtotal) summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (summaryShipping) summaryShipping.textContent = `$${shipping.toFixed(2)}`;
    if (summaryTax) summaryTax.textContent = `$${tax.toFixed(2)}`;
    if (summaryTotal) summaryTotal.textContent = `$${total.toFixed(2)}`;
};

// Adjust quantities from Cart GUI
window.adjustCartQty = (id, delta) => {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === id);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
            const prod = PRODUCTS.find(p => p.id === id);
            showToast(`<i class="fa-solid fa-trash-can"></i> Removed <strong>${prod.name}</strong> from Cart.`);
        }
        saveCart(cart);
        renderCart();
    }
};

window.removeCartItem = (id) => {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === id);
    if (itemIndex > -1) {
        const prod = PRODUCTS.find(p => p.id === id);
        cart.splice(itemIndex, 1);
        saveCart(cart);
        showToast(`<i class="fa-solid fa-trash-can"></i> Removed <strong>${prod.name}</strong> from Cart.`);
        renderCart();
    }
};

// Coupon Validation Actions
const applyCoupon = () => {
    const couponInput = document.getElementById("coupon-code");
    if (!couponInput) return;
    
    const code = couponInput.value.trim().toUpperCase();
    
    if (code === "NESTGROW15") {
        activeCouponDiscount = 0.15; // 15% discount
        activeCouponType = "percent";
        activeCouponCodeApplied = code;
        showToast(`<i class="fa-solid fa-tag"></i> Coupon <strong>${code}</strong> (15% OFF) applied successfully!`);
    } else if (code === "GREENSPRING") {
        activeCouponDiscount = 10.00; // $10 off
        activeCouponType = "fixed";
        activeCouponCodeApplied = code;
        showToast(`<i class="fa-solid fa-tag"></i> Coupon <strong>${code}</strong> ($10 OFF) applied successfully!`);
    } else if (code === "") {
        showToast(`<i class="fa-solid fa-circle-exclamation"></i> Please enter a promo code.`);
        return;
    } else {
        showToast(`<i class="fa-solid fa-circle-xmark"></i> Invalid coupon code. Try <strong>NESTGROW15</strong> or <strong>GREENSPRING</strong>`);
        couponInput.value = "";
        return;
    }
    
    renderCart();
};

const initCartCouponAction = () => {
    const couponBtn = document.getElementById("btn-apply-coupon");
    if (couponBtn) {
        couponBtn.addEventListener("click", applyCoupon);
    }
    
    // Checkout trigger Modal popup
    const checkoutBtn = document.getElementById("btn-proceed-checkout");
    const checkoutModal = document.getElementById("checkout-success-modal");
    
    if (checkoutBtn && checkoutModal) {
        checkoutBtn.addEventListener("click", () => {
            checkoutModal.classList.add("active");
            
            // Clear cart upon ordering
            saveCart([]);
        });
    }
    
    const modalClose = document.getElementById("modal-close");
    const modalCloseBtn = document.getElementById("modal-btn-close");
    
    const closeCheckoutModal = () => {
        if (checkoutModal) {
            checkoutModal.classList.remove("active");
            window.location.href = "index.html"; // Redirect to home
        }
    };
    
    if (modalClose) modalClose.addEventListener("click", closeCheckoutModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeCheckoutModal);
};

// --- PAGE: WISHLIST PAGE ---
const initWishlistPage = () => {
    renderWishlist();
};

const renderWishlist = () => {
    const wishlistGrid = document.getElementById("wishlist-grid");
    const wishlist = getWishlist();
    
    if (wishlist.length === 0) {
        if (wishlistGrid) {
            wishlistGrid.innerHTML = `
                <div class="empty-cart-state" style="grid-column: 1 / -1;">
                    <i class="fa-regular fa-heart"></i>
                    <h2>Your Wishlist is Empty</h2>
                    <p>Save your favorite green plants here for quick access later.</p>
                    <a href="shop.html" class="btn btn-primary"><i class="fa-solid fa-leaf"></i> Browse Plants</a>
                </div>
            `;
        }
        return;
    }
    
    if (wishlistGrid) {
        const items = wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(p => p !== undefined);
        wishlistGrid.innerHTML = items.map(p => buildProductCardHTML(p, true)).join("");
    }
};

window.removeWishlistItem = (id) => {
    let wishlist = getWishlist();
    const index = wishlist.indexOf(id);
    
    if (index > -1) {
        const prod = PRODUCTS.find(p => p.id === id);
        wishlist.splice(index, 1);
        saveWishlist(wishlist);
        showToast(`<i class="fa-solid fa-heart-circle-minus"></i> Removed <strong>${prod.name}</strong> from Wishlist.`);
        renderWishlist();
    }
};

window.wishlistMoveToCart = (id) => {
    // Add to cart
    addToCart(id, 1, false);
    
    // Remove from wishlist
    let wishlist = getWishlist();
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        saveWishlist(wishlist);
    }
    
    const prod = PRODUCTS.find(p => p.id === id);
    showToast(`<i class="fa-solid fa-truck-ramp-box"></i> Moved <strong>${prod.name}</strong> to Cart!`);
    
    renderWishlist();
};

// --- PAGE: CONTACT PAGE ---
const initContactPage = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const subject = document.getElementById("contact-subject").value.trim();
            const msg = document.getElementById("contact-message").value.trim();
            
            if (name && email && subject && msg) {
                // Show dynamic checkout mock success
                const contactModal = document.getElementById("contact-success-modal");
                if (contactModal) {
                    contactModal.classList.add("active");
                } else {
                    showToast(`<i class="fa-solid fa-check"></i> Thank you <strong>${name}</strong>! Your message was submitted.`);
                    contactForm.reset();
                }
            } else {
                showToast(`<i class="fa-solid fa-triangle-exclamation"></i> Please fill out all required fields.`);
            }
        });
        
        const contactModal = document.getElementById("contact-success-modal");
        const contactClose = document.getElementById("contact-modal-close");
        const contactCloseBtn = document.getElementById("contact-modal-btn-close");
        
        const closeContactModal = () => {
            if (contactModal) {
                contactModal.classList.remove("active");
                contactForm.reset();
            }
        };
        
        if (contactClose) contactClose.addEventListener("click", closeContactModal);
        if (contactCloseBtn) contactCloseBtn.addEventListener("click", closeContactModal);
    }
};

// ==========================================
// 5. GLOBAL LAUNCH CONTROL
// ==========================================
const initApp = () => {
    initLoader();
    initTheme();
    updateBadges();
    initScrollBehavior();
    initMobileNav();
    
    // Page router triggers
    const path = window.location.pathname;
    
    if (document.getElementById("best-sellers-grid") || path.endsWith("index.html") || path === "/" || path.endsWith("/")) {
        initHomePage();
    }
    
    if (document.getElementById("shop-product-grid")) {
        initShopPage();
    }
    
    if (document.getElementById("product-details-container")) {
        initProductDetailsPage();
    }
    
    if (document.getElementById("cart-items-list")) {
        initCartPage();
        initCartCouponAction();
    }
    
    if (document.getElementById("wishlist-grid")) {
        initWishlistPage();
    }
    
    if (document.getElementById("contact-form")) {
        initContactPage();
    }
};

document.addEventListener("DOMContentLoaded", initApp);
