/* =========================================================
   ÉLÉA BEAUTY — V2
   Interactive Shop
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

/*
    IMPORTANT :

    Remplace ce numéro par le vrai numéro WhatsApp.

    Exemple :

    0612345678

    devient :

    212612345678
*/

const WHATSAPP_NUMBER = "212600000000";


/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [

    {
        id: 1,
        name: "Huile Glow Éclat",
        category: "Skincare",
        price: 129,
        oldPrice: 159,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=85",
        description:
            "Une huile légère pour nourrir la peau et lui apporter un éclat naturel."
    },

    {
        id: 2,
        name: "Masque Glow Rose",
        category: "Skincare",
        price: 99,
        oldPrice: 125,
        badge: "-20%",
        sale: true,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38a1c?auto=format&fit=crop&w=800&q=85",
        description:
            "Un masque douceur pour une peau fraîche, lumineuse et hydratée."
    },

    {
        id: 3,
        name: "Lip Oil Pink",
        category: "Makeup",
        price: 79,
        oldPrice: null,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85",
        description:
            "Une huile pour les lèvres avec une finition brillante et naturelle."
    },

    {
        id: 4,
        name: "Blush Soft Peach",
        category: "Makeup",
        price: 89,
        oldPrice: 110,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85",
        description:
            "Un blush délicat pour apporter une touche fraîche et naturelle au teint."
    },

    {
        id: 5,
        name: "Mascara Volume",
        category: "Makeup",
        price: 95,
        oldPrice: null,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9c0f6f?auto=format&fit=crop&w=800&q=85",
        description:
            "Un mascara effet volume pour des cils définis et intensément noirs."
    },

    {
        id: 6,
        name: "Hair Oil Repair",
        category: "Cheveux",
        price: 119,
        oldPrice: 145,
        badge: "-18%",
        sale: true,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
        description:
            "Une huile capillaire nourrissante pour des cheveux doux et brillants."
    },

    {
        id: 7,
        name: "Hair Mask Silk",
        category: "Cheveux",
        price: 109,
        oldPrice: null,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1527799820374-dcf8a06f0b7b?auto=format&fit=crop&w=800&q=85",
        description:
            "Un masque riche pour nourrir les longueurs et retrouver une chevelure douce."
    },

    {
        id: 8,
        name: "Nail Kit Nude",
        category: "Nails",
        price: 85,
        oldPrice: 105,
        badge: "-20%",
        sale: true,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85",
        description:
            "Le kit parfait pour une manucure nude élégante à la maison."
    },

    {
        id: 9,
        name: "Gloss Crystal",
        category: "Makeup",
        price: 69,
        oldPrice: null,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=800&q=85",
        description:
            "Un gloss transparent ultra brillant pour des lèvres effet miroir."
    },

    {
        id: 10,
        name: "Lunettes Bella",
        category: "Lunettes",
        price: 149,
        oldPrice: 179,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=85",
        description:
            "Une paire de lunettes tendance pour compléter tous tes looks."
    },

    {
        id: 11,
        name: "Bracelet Pearl",
        category: "Accessoires",
        price: 75,
        oldPrice: null,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85",
        description:
            "Un bracelet délicat inspiré des perles pour une touche élégante."
    },

    {
        id: 12,
        name: "Hair Clips Pearl",
        category: "Accessoires",
        price: 59,
        oldPrice: 75,
        badge: "-20%",
        sale: true,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85",
        description:
            "Des pinces élégantes pour accessoiriser tes coiffures au quotidien."
    },

    {
        id: 13,
        name: "Face Roller Rose",
        category: "Skincare",
        price: 89,
        oldPrice: null,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=85",
        description:
            "Un accessoire beauté idéal pour accompagner ta routine skincare."
    },

    {
        id: 14,
        name: "Sunset Sunglasses",
        category: "Lunettes",
        price: 139,
        oldPrice: 169,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85",
        description:
            "Des lunettes modernes et féminines pour un look affirmé."
    },

    {
        id: 15,
        name: "Body Oil Vanilla",
        category: "Skincare",
        price: 115,
        oldPrice: null,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=85",
        description:
            "Une huile corps délicatement parfumée pour une peau douce et satinée."
    },

    {
        id: 16,
        name: "Nail Polish Cherry",
        category: "Nails",
        price: 49,
        oldPrice: null,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=85",
        description:
            "Un vernis rouge cerise intense avec une finition brillante."
    }

];


/* =========================================================
   STATE
   ========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("eleaCart")
    ) || [];

let favorites =
    JSON.parse(
        localStorage.getItem("eleaFavorites")
    ) || [];

let currentFilter = "all";

let currentSearch = "";

let displayedProducts = 8;

let currentProduct = null;

let modalQuantity = 1;

let sortAsc = false;


/* =========================================================
   DOM
   ========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const productsEmpty =
    document.getElementById("productsEmpty");

const cartDrawer =
    document.getElementById("cartDrawer");

const drawerOverlay =
    document.getElementById("drawerOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const favoriteCount =
    document.getElementById("favoriteCount");

const productModal =
    document.getElementById("productModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalPrice =
    document.getElementById("modalPrice");

const modalOldPrice =
    document.getElementById("modalOldPrice");

const modalBadge =
    document.getElementById("modalBadge");

const modalDescription =
    document.getElementById("modalDescription");

const modalQuantityEl =
    document.getElementById("modalQuantity");

const toast =
    document.getElementById("toast");


/* =========================================================
   FORMAT PRICE
   ========================================================= */

function formatPrice(price) {

    return `${price.toLocaleString("fr-FR")} DH`;

}


/* =========================================================
   SAVE
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "eleaCart",
        JSON.stringify(cart)
    );

}


function saveFavorites() {

    localStorage.setItem(
        "eleaFavorites",
        JSON.stringify(favorites)
    );

}


/* =========================================================
   PRODUCTS FILTER
   ========================================================= */

function getFilteredProducts() {

    let result =
        products.filter(product => {

            const categoryMatch =
                currentFilter === "all" ||
                product.category === currentFilter;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        currentSearch.toLowerCase()
                    ) ||
                product.category
                    .toLowerCase()
                    .includes(
                        currentSearch.toLowerCase()
                    );

            return categoryMatch && searchMatch;

        });


    if (sortAsc) {

        result.sort(
            (a,b) =>
                a.price - b.price
        );

    } else {

        result.sort(
            (a,b) =>
                b.id - a.id
        );

    }

    return result;

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

    const filtered =
        getFilteredProducts();

    const visible =
        filtered.slice(
            0,
            displayedProducts
        );

    productsGrid.innerHTML = "";

    if (!filtered.length) {

        productsEmpty.classList.add("show");

        document.getElementById(
            "productResult"
        ).textContent =
            "Aucun résultat.";

        return;

    }

    productsEmpty.classList.remove("show");

    document.getElementById(
        "productResult"
    ).textContent =
        `${filtered.length} produits disponibles`;

    visible.forEach(
        (product,index) => {

            const isFavorite =
                favorites.includes(product.id);

            const card =
                document.createElement("article");

            card.className =
                "product-card";

            card.style.animationDelay =
                `${index * 0.06}s`;


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    ${
                        product.badge
                        ?
                        `<span class="product-badge ${product.sale ? "sale" : ""}">
                            ${product.badge}
                        </span>`
                        :
                        ""
                    }

                    <div class="product-actions">

                        <button
                            class="product-action favorite ${isFavorite ? "active" : ""}"
                            data-favorite="${product.id}"
                            aria-label="Favoris"
                        >

                            <svg viewBox="0 0 24 24">
                                <path d="M20.8 8.9c0 5.4-8.8 10.1-8.8 10.1S3.2 14.3 3.2 8.9A5 5 0 0 1 12 5.6a5 5 0 0 1 8.8 3.3Z"></path>
                            </svg>

                        </button>


                        <button
                            class="product-action quick-view"
                            data-quick="${product.id}"
                            aria-label="Voir le produit"
                        >

                            <svg viewBox="0 0 24 24">
                                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path>
                                <circle cx="12" cy="12" r="2.5"></circle>
                            </svg>

                        </button>

                    </div>

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h3 class="product-title">
                        ${product.name}
                    </h3>

                    <div class="product-rating">
                        ★★★★★
                        <span>4.9</span>
                    </div>

                    <div class="product-price">

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                        ${
                            product.oldPrice
                            ?
                            `<del>
                                ${formatPrice(product.oldPrice)}
                            </del>`
                            :
                            ""
                        }

                    </div>


                    <button
                        class="product-add"
                        data-add="${product.id}"
                    >
                        Ajouter au panier
                    </button>

                </div>

            `;


            productsGrid.appendChild(card);

        }
    );


    updateLoadMoreButton(
        filtered.length
    );

}


/* =========================================================
   LOAD MORE
   ========================================================= */

function updateLoadMoreButton(total) {

    const button =
        document.getElementById("loadMore");

    if (displayedProducts >= total) {

        button.style.display = "none";

    } else {

        button.style.display = "inline-flex";

    }

}


document
    .getElementById("loadMore")
    .addEventListener(
        "click",
        () => {

            displayedProducts += 4;

            renderProducts();

        }
    );


/* =========================================================
   FILTERS
   ========================================================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentFilter =
                    button.dataset.filter;

                displayedProducts = 8;

                renderProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            }
        );

    });


/* =========================================================
   CATEGORY CLICK
   ========================================================= */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const category =
                    card.dataset.category;

                currentFilter = category;

                displayedProducts = 8;

                document
                    .querySelectorAll(".filter")
                    .forEach(btn => {

                        btn.classList.toggle(
                            "active",
                            btn.dataset.filter === category
                        );

                    });

                renderProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================================
   SORT
   ========================================================= */

document
    .getElementById("sortBtn")
    .addEventListener(
        "click",
        () => {

            sortAsc = !sortAsc;

            renderProducts();

            showToast(
                "Tri des produits",
                sortAsc
                    ? "Prix croissant"
                    : "Nouveautés"
            );

        }
    );


/* =========================================================
   PRODUCT ACTIONS
   ========================================================= */

productsGrid.addEventListener(
    "click",
    event => {

        const addButton =
            event.target.closest("[data-add]");

        const favoriteButton =
            event.target.closest("[data-favorite]");

        const quickButton =
            event.target.closest("[data-quick]");


        if (addButton) {

            addToCart(
                Number(addButton.dataset.add)
            );

        }


        if (favoriteButton) {

            toggleFavorite(
                Number(
                    favoriteButton.dataset.favorite
                )
            );

        }


        if (quickButton) {

            openProductModal(
                Number(
                    quickButton.dataset.quick
                )
            );

        }

    }
);


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id) {

    const index =
        favorites.indexOf(id);

    if (index === -1) {

        favorites.push(id);

        showToast(
            "Ajouté aux favoris",
            "Produit enregistré ♥"
        );

    } else {

        favorites.splice(index,1);

        showToast(
            "Retiré des favoris",
            "Produit retiré des favoris."
        );

    }

    saveFavorites();

    updateCounters();

    renderProducts();

}


document
    .getElementById("favoriteBtn")
    .addEventListener(
        "click",
        () => {

            currentSearch = "";

            const favoriteProducts =
                products.filter(
                    p =>
                        favorites.includes(p.id)
                );

            if (!favoriteProducts.length) {

                showToast(
                    "Tes favoris",
                    "Aucun produit dans tes favoris."
                );

                return;

            }

            currentFilter = "all";

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.toggle(
                        "active",
                        btn.dataset.filter === "all"
                    )
                );

            productsGrid.innerHTML = "";

            favoriteProducts.forEach(
                (product,index) => {

                    const card =
                        document.createElement("article");

                    card.className =
                        "product-card";

                    card.innerHTML = `

                        <div class="product-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                            <span class="product-badge">
                                FAVORI
                            </span>

                        </div>

                        <div class="product-info">

                            <span class="product-category">
                                ${product.category}
                            </span>

                            <h3 class="product-title">
                                ${product.name}
                            </h3>

                            <div class="product-price">
                                <strong>
                                    ${formatPrice(product.price)}
                                </strong>
                            </div>

                            <button
                                class="product-add"
                                data-add="${product.id}"
                            >
                                Ajouter au panier
                            </button>

                        </div>

                    `;

                    productsGrid.appendChild(card);

                }
            );

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================================
   CART
   ========================================================= */

function addToCart(id, quantity = 1) {

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            id,
            quantity
        });

    }


    saveCart();

    updateCart();

    showToast(
        "Ajouté au panier",
        product.name
    );


    animateCartButton();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    updateCart();

}


function changeCartQuantity(id, amount) {

    const item =
        cart.find(
            item => item.id === id
        );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    updateCart();

}


function getCartTotal() {

    return cart.reduce(
        (total,item) => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            return total +
                (
                    product
                    ? product.price * item.quantity
                    : 0
                );

        },
        0
    );

}


function getCartCount() {

    return cart.reduce(
        (total,item) =>
            total + item.quantity,
        0
    );

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    const count =
        getCartCount();

    cartCount.textContent =
        count;

    favoriteCount.textContent =
        favorites.length;

    cartCount.classList.toggle(
        "show",
        count > 0
    );

    favoriteCount.classList.toggle(
        "show",
        favorites.length > 0
    );


    cartTotal.textContent =
        formatPrice(
            getCartTotal()
        );


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    ♡
                </div>

                <h4>
                    Ton panier est vide
                </h4>

                <p>
                    Ajoute quelques produits pour commencer.
                </p>

                <a
                    href="#products"
                    class="btn btn-outline close-cart-link"
                >
                    Découvrir
                </a>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );

        if (!product) return;


        const element =
            document.createElement("div");

        element.className =
            "cart-item";


        element.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <span>
                    ${product.category}
                </span>

                <div class="cart-item-price">
                    ${formatPrice(product.price * item.quantity)}
                </div>

                <div class="cart-quantity">

                    <button
                        data-minus="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-plus="${product.id}"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                data-remove="${product.id}"
                aria-label="Supprimer"
            >
                ×
            </button>

        `;


        cartItems.appendChild(element);

    });

}


cartItems.addEventListener(
    "click",
    event => {

        const minus =
            event.target.closest("[data-minus]");

        const plus =
            event.target.closest("[data-plus]");

        const remove =
            event.target.closest("[data-remove]");


        if (minus) {

            changeCartQuantity(
                Number(minus.dataset.minus),
                -1
            );

        }

        if (plus) {

            changeCartQuantity(
                Number(plus.dataset.plus),
                1
            );

        }

        if (remove) {

            removeFromCart(
                Number(remove.dataset.remove)
            );

        }

    }
);


/* =========================================================
   CART OPEN/CLOSE
   ========================================================= */

function openCart() {

    cartDrawer.classList.add("open");

    drawerOverlay.classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeCart() {

    cartDrawer.classList.remove("open");

    drawerOverlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCart
    );

document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );

drawerOverlay.addEventListener(
    "click",
    closeCart
);


document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                ".close-cart-link"
            )
        ) {

            closeCart();

        }

    }
);


/* =========================================================
   WHATSAPP ORDER
   ========================================================= */

document
    .getElementById("whatsappOrder")
    .addEventListener(
        "click",
        () => {

            if (!cart.length) {

                showToast(
                    "Panier vide",
                    "Ajoute un produit avant de commander."
                );

                return;

            }


            let message =
                "Bonjour Éléa Beauty 👋\n\n";

            message +=
                "Je souhaite commander :\n\n";


            cart.forEach(item => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                if (!product) return;

                message +=
                    `• ${product.name} x${item.quantity} — ${formatPrice(product.price * item.quantity)}\n`;

            });


            message +=
                `\nTotal : ${formatPrice(getCartTotal())}`;

            message +=
                "\n\nMerci 💗";


            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


            window.open(
                url,
                "_blank"
            );

        }
    );


/* =========================================================
   QUICK VIEW
   ========================================================= */

function openProductModal(id) {

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;


    currentProduct =
        product;

    modalQuantity = 1;


    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalTitle.textContent =
        product.name;

    modalCategory.textContent =
        product.category;

    modalPrice.textContent =
        formatPrice(product.price);

    modalDescription.textContent =
        product.description;

    modalQuantityEl.textContent =
        modalQuantity;


    modalBadge.textContent =
        product.badge || "";

    modalBadge.style.display =
        product.badge
            ? "block"
            : "none";


    if (product.oldPrice) {

        modalOldPrice.textContent =
            formatPrice(product.oldPrice);

        modalOldPrice.style.display =
            "inline";

    } else {

        modalOldPrice.style.display =
            "none";

    }


    productModal.classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeProductModal() {

    productModal.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeProductModal
    );


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target === productModal
        ) {

            closeProductModal();

        }

    }
);


document
    .getElementById("modalMinus")
    .addEventListener(
        "click",
        () => {

            if (modalQuantity > 1) {

                modalQuantity--;

                modalQuantityEl.textContent =
                    modalQuantity;

            }

        }
    );


document
    .getElementById("modalPlus")
    .addEventListener(
        "click",
        () => {

            modalQuantity++;

            modalQuantityEl.textContent =
                modalQuantity;

        }
    );


document
    .getElementById("modalAdd")
    .addEventListener(
        "click",
        () => {

            if (!currentProduct) return;

            addToCart(
                currentProduct.id,
                modalQuantity
            );

            closeProductModal();

        }
    );


document
    .getElementById("modalWhatsApp")
    .addEventListener(
        "click",
        () => {

            if (!currentProduct) return;


            const message =
                `Bonjour Éléa Beauty 👋\n\nJe souhaite commander :\n\n• ${currentProduct.name} x${modalQuantity} — ${formatPrice(currentProduct.price * modalQuantity)}\n\nMerci 💗`;


            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


            window.open(
                url,
                "_blank"
            );

        }
    );


/* =========================================================
   SEARCH
   ========================================================= */

const searchOverlay =
    document.getElementById("searchOverlay");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        () => {

            searchOverlay.classList.add("show");

            document.body.classList.add("no-scroll");

            setTimeout(
                () =>
                    searchInput.focus(),
                300
            );

        }
    );


document
    .getElementById("closeSearch")
    .addEventListener(
        "click",
        closeSearch
    );


function closeSearch() {

    searchOverlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


searchInput.addEventListener(
    "input",
    () => {

        const value =
            searchInput.value
                .trim()
                .toLowerCase();


        if (!value) {

            searchResults.innerHTML = "";

            return;

        }


        const results =
            products
                .filter(product =>
                    product.name
                        .toLowerCase()
                        .includes(value) ||
                    product.category
                        .toLowerCase()
                        .includes(value)
                )
                .slice(0,6);


        searchResults.innerHTML = "";


        if (!results.length) {

            searchResults.innerHTML = `

                <div>
                    Aucun produit trouvé.
                </div>

            `;

            return;

        }


        results.forEach(product => {

            const result =
                document.createElement("div");

            result.className =
                "search-result";


            result.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <h4>
                        ${product.name}
                    </h4>

                    <span>
                        ${formatPrice(product.price)}
                    </span>

                </div>

            `;


            result.addEventListener(
                "click",
                () => {

                    closeSearch();

                    openProductModal(
                        product.id
                    );

                }
            );


            searchResults.appendChild(
                result
            );

        });

    }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        closeSearch();

        closeCart();

        closeProductModal();

    }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuBtn =
    document.getElementById(
        "mobileMenuBtn"
    );

const nav =
    document.getElementById("nav");


mobileMenuBtn.addEventListener(
    "click",
    () => {

        nav.classList.toggle("open");

    }
);


nav.querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================================================
   HEADER SCROLL
   ========================================================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        element =>
            revealObserver.observe(
                element
            )
    );


/* =========================================================
   COUNTERS
   ========================================================= */

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) return;


                    const element =
                        entry.target;

                    const target =
                        Number(
                            element.dataset.counter
                        );

                    let current = 0;

                    const duration = 1400;

                    const start =
                        performance.now();


                    function animate(time) {

                        const progress =
                            Math.min(
                                (time - start) /
                                duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        current =
                            Math.floor(
                                target * eased
                            );


                        element.textContent =
                            current +
                            (
                                target >= 100
                                    ? "+"
                                    : ""
                            );


                        if (progress < 1) {

                            requestAnimationFrame(
                                animate
                            );

                        }

                    }


                    requestAnimationFrame(
                        animate
                    );


                    counterObserver.unobserve(
                        element
                    );

                }
            );

        },
        {
            threshold: .7
        }
    );


document
    .querySelectorAll("[data-counter]")
    .forEach(
        element =>
            counterObserver.observe(
                element
            )
    );


/* =========================================================
   COUNTDOWN
   ========================================================= */

let countdownTarget =
    Date.now() +
    (
        2 * 24 * 60 * 60 * 1000
    ) +
    (
        14 * 60 * 60 * 1000
    );


function updateCountdown() {

    const difference =
        countdownTarget -
        Date.now();


    if (difference <= 0) {

        countdownTarget =
            Date.now() +
            48 * 60 * 60 * 1000;

        return;

    }


    const days =
        Math.floor(
            difference /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const hours =
        Math.floor(
            difference /
            (
                1000 *
                60 *
                60
            )
        ) % 24;


    const minutes =
        Math.floor(
            difference /
            (
                1000 *
                60
            )
        ) % 60;


    const seconds =
        Math.floor(
            difference / 1000
        ) % 60;


    document.getElementById("days")
        .textContent =
        String(days).padStart(2,"0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2,"0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2,"0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2,"0");

}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();


/* =========================================================
   NEWSLETTER
   ========================================================= */

document
    .getElementById("newsletterForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();

            showToast(
                "Bienvenue 💗",
                "Tu es maintenant inscrite."
            );

            event.target.reset();

        }
    );


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(title,text) {

    document.getElementById(
        "toastTitle"
    ).textContent =
        title;

    document.getElementById(
        "toastText"
    ).textContent =
        text;


    toast.classList.add("show");


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =========================================================
   CART BUTTON ANIMATION
   ========================================================= */

function animateCartButton() {

    const button =
        document.getElementById(
            "cartBtn"
        );


    button.animate(
        [
            {
                transform:
                    "scale(1)"
            },
            {
                transform:
                    "scale(1.25) rotate(-8deg)"
            },
            {
                transform:
                    "scale(1) rotate(0)"
            }
        ],
        {
            duration: 500
        }
    );

}


/* =========================================================
   MAGNETIC BUTTON EFFECT
   ========================================================= */

document
    .querySelectorAll(".btn, .whatsapp-order")
    .forEach(button => {

        button.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 800
                ) return;


                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(${x * .08}px, ${y * .08}px)`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


/* =========================================================
   3D PRODUCT EFFECT
   ========================================================= */

productsGrid.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 900
        ) return;


        const card =
            event.target.closest(
                ".product-card"
            );

        if (!card) return;


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left;

        const y =
            event.clientY -
            rect.top;


        const rotateY =
            ((x / rect.width) - .5) * 5;

        const rotateX =
            ((y / rect.height) - .5) * -5;


        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }
);


productsGrid.addEventListener(
    "mouseleave",
    event => {

        const card =
            event.target.closest(
                ".product-card"
            );

        if (card) {

            card.style.transform =
                "";

        }

    },
    true
);


/* =========================================================
   CURSOR
   ========================================================= */

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );

const cursorRing =
    document.querySelector(
        ".cursor-ring"
    );


if (
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            cursorDot.style.left =
                `${event.clientX}px`;

            cursorDot.style.top =
                `${event.clientY}px`;


            cursorRing.style.left =
                `${event.clientX}px`;

            cursorRing.style.top =
                `${event.clientY}px`;

        }
    );


    document.addEventListener(
        "mouseover",
        event => {

            if (
                event.target.closest(
                    "button,a,.product-card"
                )
            ) {

                cursorRing.classList.add(
                    "active"
                );

            } else {

                cursorRing.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   HERO PARALLAX
   ========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const heroVisual =
            document.querySelector(
                ".hero-visual"
            );

        if (
            !heroVisual ||
            window.innerWidth < 800
        ) return;


        const scroll =
            window.scrollY;


        heroVisual.style.transform =
            `translateY(${scroll * .08}px)`;

    },
    {
        passive: true
    }
);


/* =========================================================
   LOADER
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document
                    .getElementById("loader")
                    .classList
                    .add("hidden");

            },
            700
        );

    }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

renderProducts();

updateCart();
