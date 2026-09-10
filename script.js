/* =========================================================
   LÉA BEAUTY
   Main JavaScript
   ========================================================= */


/* ================= CONFIGURATION ================= */

/*
   IMPORTANT :

   Remplace ce numéro par le vrai WhatsApp de la boutique.

   Exemple :
   0612345678

   devient :
   212612345678
*/

const WHATSAPP_NUMBER = "212600000000";


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Lip Oil Glow",
        category: "Maquillage",
        price: 89,
        oldPrice: 109,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85",
        description:
            "Une huile à lèvres légère qui apporte une jolie brillance et une sensation confortable."
    },

    {
        id: 2,
        name: "Rose Face Mask",
        category: "Skincare",
        price: 119,
        oldPrice: 149,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=85",
        description:
            "Un masque visage doux pour prendre soin de votre peau et lui apporter une sensation de fraîcheur."
    },

    {
        id: 3,
        name: "Hair Repair Oil",
        category: "Cheveux",
        price: 99,
        oldPrice: 129,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
        description:
            "Une huile pensée pour nourrir les cheveux et leur apporter douceur et brillance."
    },

    {
        id: 4,
        name: "Soft Blush",
        category: "Maquillage",
        price: 79,
        oldPrice: null,
        badge: "",
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=85",
        description:
            "Un blush doux et facile à appliquer pour obtenir un teint frais et naturel."
    },

    {
        id: 5,
        name: "Nail Set Nude",
        category: "Nails",
        price: 129,
        oldPrice: 159,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85",
        description:
            "Un joli set nude pour créer une manucure élégante et minimaliste."
    },

    {
        id: 6,
        name: "Hydra Serum",
        category: "Skincare",
        price: 149,
        oldPrice: 179,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85",
        description:
            "Un sérum hydratant léger idéal pour compléter votre routine quotidienne."
    },

    {
        id: 7,
        name: "Silky Hair Mask",
        category: "Cheveux",
        price: 109,
        oldPrice: 139,
        badge: "",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=85",
        description:
            "Un masque cheveux crémeux pour une routine soin agréable et nourrissante."
    },

    {
        id: 8,
        name: "Minimal Sunglasses",
        category: "Accessoires",
        price: 159,
        oldPrice: 199,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85",
        description:
            "Des lunettes élégantes au design minimaliste pour compléter vos looks."
    },

    {
        id: 9,
        name: "Gloss Nude",
        category: "Maquillage",
        price: 69,
        oldPrice: null,
        badge: "",
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=85",
        description:
            "Un gloss nude brillant pour un look naturel et élégant."
    },

    {
        id: 10,
        name: "Hair Elixir",
        category: "Cheveux",
        price: 139,
        oldPrice: 169,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85",
        description:
            "Un élixir léger pour accompagner votre routine capillaire."
    },

    {
        id: 11,
        name: "Pearl Hair Clip",
        category: "Accessoires",
        price: 49,
        oldPrice: null,
        badge: "",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85",
        description:
            "Une pince élégante avec une finition délicate pour accessoiriser vos coiffures."
    },

    {
        id: 12,
        name: "French Manicure Set",
        category: "Nails",
        price: 99,
        oldPrice: 119,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=85",
        description:
            "Tout le nécessaire pour créer une manucure chic et intemporelle."
    }

];


/* ================= STATE ================= */

let cart = JSON.parse(localStorage.getItem("leaBeautyCart")) || [];

let currentFilter = "Tous";

let searchTerm = "";

let modalProduct = null;

let modalQuantity = 1;


/* ================= DOM ================= */

const productsGrid =
    document.getElementById("productsGrid");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const cartItems =
    document.getElementById("cartItems");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartBtn =
    document.getElementById("cartBtn");

const closeCart =
    document.getElementById("closeCart");

const toast =
    document.getElementById("toast");

const productModal =
    document.getElementById("productModal");


/* ================= FORMAT PRICE ================= */

function formatPrice(price) {

    return price
        .toLocaleString("fr-FR")
        .replace(/\s/g, " ") + " DH";

}


/* ================= DISPLAY PRODUCTS ================= */

function getFilteredProducts() {

    return products.filter(product => {

        const categoryMatch =
            currentFilter === "Tous" ||
            product.category === currentFilter;

        const searchMatch =
            product.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            product.category
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;

    });

}


function renderProducts() {

    const filtered =
        getFilteredProducts();

    if (!filtered.length) {

        productsGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:70px 20px;
            ">
                <h3 style="
                    font-family:'Playfair Display',serif;
                    font-size:30px;
                    font-weight:500;
                ">
                    Aucun produit trouvé
                </h3>

                <p style="
                    margin-top:10px;
                    color:#766765;
                    font-size:12px;
                ">
                    Essayez une autre recherche.
                </p>
            </div>
        `;

        return;
    }


    productsGrid.innerHTML =
        filtered.map(product => {

            const isFavorite =
                getFavorites().includes(product.id);

            return `

                <article
                    class="product-card"
                    data-id="${product.id}"
                >

                    <div class="product-image">

                        ${
                            product.badge
                            ?
                            `<span class="product-badge">
                                ${product.badge}
                            </span>`
                            :
                            ""
                        }

                        <button
                            class="favorite ${isFavorite ? "active" : ""}"
                            data-favorite="${product.id}"
                        >
                            ${isFavorite ? "♥" : "♡"}
                        </button>


                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >


                        <div class="product-actions">

                            <button
                                class="quick-view"
                                data-view="${product.id}"
                            >
                                APERÇU RAPIDE
                            </button>

                        </div>

                    </div>


                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <div class="product-bottom">

                        <div class="product-price">

                            ${formatPrice(product.price)}

                            ${
                                product.oldPrice
                                ?
                                `
                                <span class="product-old-price">
                                    ${formatPrice(product.oldPrice)}
                                </span>
                                `
                                :
                                ""
                            }

                        </div>


                        <button
                            class="add-product"
                            data-add="${product.id}"
                            title="Ajouter au panier"
                        >
                            +
                        </button>

                    </div>

                </article>
            `;

        }).join("");


    attachProductEvents();

}


/* ================= PRODUCT EVENTS ================= */

function attachProductEvents() {

    document
        .querySelectorAll("[data-add]")
        .forEach(button => {

            button.addEventListener("click", event => {

                const id =
                    Number(event.currentTarget.dataset.add);

                addToCart(id);

            });

        });


    document
        .querySelectorAll("[data-view]")
        .forEach(button => {

            button.addEventListener("click", event => {

                const id =
                    Number(event.currentTarget.dataset.view);

                openProductModal(id);

            });

        });


    document
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener("click", event => {

                const id =
                    Number(event.currentTarget.dataset.favorite);

                toggleFavorite(id);

            });

        });

}


/* ================= CART ================= */

function saveCart() {

    localStorage.setItem(
        "leaBeautyCart",
        JSON.stringify(cart)
    );

}


function addToCart(id, quantity = 1) {

    const product =
        products.find(item => item.id === id);

    if (!product) return;


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            id: id,
            quantity: quantity
        });

    }


    saveCart();

    renderCart();

    showToast(
        `${product.name} ajouté au panier ✓`
    );

}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    renderCart();

}


function updateCartQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveCart();

    renderCart();

}


function getCartCount() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

}


function getCartTotal() {

    return cart.reduce((total, item) => {

        const product =
            products.find(
                product => product.id === item.id
            );

        return total +
            (product
                ? product.price * item.quantity
                : 0);

    }, 0);

}


/* ================= RENDER CART ================= */

function renderCart() {

    const count =
        getCartCount();

    const total =
        getCartTotal();


    cartCount.textContent =
        count;

    cartTotal.textContent =
        formatPrice(total);


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <span>♡</span>

                <h4>
                    Votre panier est vide
                </h4>

                <p>
                    Découvrez nos produits et ajoutez
                    vos favoris à votre panier.
                </p>

            </div>
        `;

        return;
    }


    cartItems.innerHTML = cart.map(item => {

        const product =
            products.find(
                product => product.id === item.id
            );

        if (!product) return "";


        return `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="cart-item-info">

                    <h4>
                        ${product.name}
                    </h4>

                    <span>
                        ${formatPrice(product.price)}
                    </span>


                    <div class="cart-quantity">

                        <button
                            data-cart-minus="${product.id}"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            data-cart-plus="${product.id}"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove-item"
                        data-remove="${product.id}"
                    >
                        Supprimer
                    </button>

                </div>


                <div class="cart-item-price">

                    ${formatPrice(
                        product.price *
                        item.quantity
                    )}

                </div>

            </div>

        `;

    }).join("");


    document
        .querySelectorAll("[data-cart-minus]")
        .forEach(button => {

            button.addEventListener("click", () => {

                updateCartQuantity(
                    Number(button.dataset.cartMinus),
                    -1
                );

            });

        });


    document
        .querySelectorAll("[data-cart-plus]")
        .forEach(button => {

            button.addEventListener("click", () => {

                updateCartQuantity(
                    Number(button.dataset.cartPlus),
                    1
                );

            });

        });


    document
        .querySelectorAll("[data-remove]")
        .forEach(button => {

            button.addEventListener("click", () => {

                removeFromCart(
                    Number(button.dataset.remove)
                );

            });

        });

}


/* ================= OPEN CART ================= */

function openCart() {

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCartPanel() {

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


cartBtn.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartPanel
);


cartOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            cartOverlay
        ) {

            closeCartPanel();

        }

    }
);


/* ================= WHATSAPP ================= */

document
    .getElementById("whatsappOrder")
    .addEventListener("click", () => {

        if (!cart.length) {

            showToast(
                "Votre panier est vide"
            );

            return;
        }


        let message =
            "Bonjour, je souhaite commander :%0A%0A";


        cart.forEach(item => {

            const product =
                products.find(
                    product => product.id === item.id
                );

            if (!product) return;


            message +=
                `• ${product.name} x${item.quantity} — ${formatPrice(product.price * item.quantity)}%0A`;

        });


        message +=
            `%0A*Total : ${formatPrice(getCartTotal())}*`;

        message +=
            "%0A%0ABonjour, pouvez-vous me confirmer la disponibilité et les détails de livraison ?";


        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


        window.open(
            url,
            "_blank"
        );

    });


/* ================= FAVORITES ================= */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem(
            "leaBeautyFavorites"
        )
    ) || [];

}


function saveFavorites(favorites) {

    localStorage.setItem(
        "leaBeautyFavorites",
        JSON.stringify(favorites)
    );

}


function toggleFavorite(id) {

    let favorites =
        getFavorites();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Retiré des favoris"
        );

    } else {

        favorites.push(id);

        showToast(
            "Ajouté aux favoris ♥"
        );

    }


    saveFavorites(favorites);

    renderProducts();

}


/* ================= FILTERS ================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );


            button.classList.add("active");


            currentFilter =
                button.dataset.filter;


            renderProducts();

        });

    });


/* ================= CATEGORIES ================= */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category;


            currentFilter =
                category;


            document
                .querySelectorAll(".filter")
                .forEach(filter => {

                    filter.classList.toggle(
                        "active",
                        filter.dataset.filter === category
                    );

                });


            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });


            renderProducts();

        });

    });


/* ================= PRODUCT MODAL ================= */

function openProductModal(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    modalProduct =
        product;

    modalQuantity = 1;


    document
        .getElementById("modalImage")
        .src = product.image;


    document
        .getElementById("modalImage")
        .alt = product.name;


    document
        .getElementById("modalCategory")
        .textContent = product.category;


    document
        .getElementById("modalName")
        .textContent = product.name;


    document
        .getElementById("modalPrice")
        .textContent =
            formatPrice(product.price);


    document
        .getElementById("modalDescription")
        .textContent =
            product.description;


    document
        .getElementById("modalQuantity")
        .textContent =
            modalQuantity;


    productModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeProductModal() {

    productModal.classList.remove("active");

    document.body.style.overflow = "";

    modalProduct = null;

}


document
    .getElementById("modalClose")
    .addEventListener(
        "click",
        closeProductModal
    );


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            productModal
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

                document
                    .getElementById("modalQuantity")
                    .textContent =
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

            document
                .getElementById("modalQuantity")
                .textContent =
                modalQuantity;

        }
    );


document
    .getElementById("modalAdd")
    .addEventListener(
        "click",
        () => {

            if (!modalProduct) return;


            addToCart(
                modalProduct.id,
                modalQuantity
            );


            closeProductModal();

        }
    );


/* ================= SEARCH ================= */

const searchOverlay =
    document.getElementById(
        "searchOverlay"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        () => {

            searchOverlay.classList.add(
                "active"
            );

            setTimeout(
                () => searchInput.focus(),
                200
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

    searchOverlay.classList.remove(
        "active"
    );

}


searchOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            searchOverlay
        ) {

            closeSearch();

        }

    }
);


searchInput.addEventListener(
    "input",
    event => {

        searchTerm =
            event.target.value;

        currentFilter =
            "Tous";

        renderProducts();

    }
);


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* ================= SHOW MORE ================= */

let showAll = false;


document
    .getElementById("showMore")
    .addEventListener(
        "click",
        () => {

            showAll = !showAll;


            const cards =
                document.querySelectorAll(
                    ".product-card"
                );


            cards.forEach(
                card => {
                    card.style.display =
                        showAll
                        ? "block"
                        : "";
                }
            );


            document
                .getElementById(
                    "showMore"
                )
                .textContent =
                    showAll
                    ? "Afficher moins"
                    : "Voir plus de produits";

        }
    );


/* ================= NEWSLETTER ================= */

document
    .getElementById("newsletterForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            document
                .getElementById(
                    "newsletterMessage"
                )
                .textContent =
                    "Merci ! Vous êtes maintenant inscrit(e) ✨";


            event.target.reset();

        }
    );


/* ================= TOAST ================= */

let toastTimeout;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* ================= SCROLL REVEAL ================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
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
            observer.observe(element)
    );


/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeSearch();

            closeCartPanel();

            closeProductModal();

        }

    }
);


/* ================= INIT ================= */

renderProducts();

renderCart();
