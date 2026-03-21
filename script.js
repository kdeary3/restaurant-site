// Format money and spice levels
let money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

let spice_level = (level) => {
    let icon = '<i class="fa-solid fa-pepper-hot text-danger"></i> ';
    return icon.repeat(level);
};

// 10% off modal
document.addEventListener("DOMContentLoaded", function (){
    let discountModal = document.getElementById('discount-modal');
    if (discountModal) {
        let discountEmailForm = discountModal.querySelector('form');
        discountEmailForm.addEventListener("submit", (event)=> {
            event.preventDefault();
            let email = new FormData(discountEmailForm).get("email");
            console.log("Discount Email Captured:", email);
            discountEmailForm.reset();
            modal.hide();
        });
        let modal = new bootstrap.Modal(discountModal);
        modal.show();
    }
});

document.addEventListener("DOMContentLoaded", function (){
    let clearCart = document.getElementById('clear-cart');
    if (clearCart) {
        let discountEmailForm = clearCart.querySelector('form');
        discountEmailForm.addEventListener("submit", (event)=> {
            event.preventDefault();
            let email = new FormData(discountEmailForm).get("email");
            console.log("Discount Email Captured:", email);
            discountEmailForm.reset();
            modal.hide();
        });
        let modal = new bootstrap.Modal(clearCart);
        modal.show();
    }
});

// menu page
let menuContainer = document.getElementById('menu-container');
let pricingContainer = document.getElementById('lunchDinnerPremiumPricing');
let itemsOrderedArray = [] ;

if (menuContainer || pricingContainer) {
    let prices = { lunch: 19.95, dinner: 28.95, premium: 10.00 };

    if (pricingContainer) {
        pricingContainer.innerHTML = `
            <p>Lunch (12pm to 3pm) — ${money.format(prices.lunch)} / person <br>
               Dinner (3pm to 11pm close) — ${money.format(prices.dinner)} / person <br>
               <em>Add ${money.format(prices.premium)} / person for the Premium Menu</em></p>
        `;
    }

// menu items info array
    let MENU_ITEMS = [
        {
            id: 1,
            name: "Premium Steak",
            description: "Top Sirlion",
            price: "Premium",
            category: "Beef",
            spice_level: spice_level(1),
            item_image: "/images/menu_item_images/img1"
        },
        {
            id: 2,
            name: "Spicy Pork Bulgogi",
            description: "Marinated Spicy Pork (Thinly Sliced)",
            price: "Regular",
            category: "Pork",
            spice_level: spice_level(3),
            item_image: "/images/menu_item_images/img2"
        },
        {
            id: 3,
            name: "Beef Bulgogi",
            description: "Marinated Prime Chuck Roll (Thinly Sliced)",
            price: "Regular",
            category: "Beef",
            spice_level: spice_level(1),
            item_image: "/images/menu_item_images/img3"
        },
        {
            id: 4,
            name: "Garlic Chicken",
            description: "Marinated Rich Garlic Sauce",
            price: "Regular",
            category: "Chicken",
            spice_level: spice_level(2),
            item_image: "/images/menu_item_images/img4"
        },
        {
            id: 5,
            name: "Boba",
            description: "Milk Tea, Strawberry Slush, or Jasmine Green Tea",
            price: `Not Included <br> ${money.format(6.99)}`,
            category: "Drink",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img5"
        },
        {
            id: 6,
            name: "K-Gochujang Beef Belly",
            description: "Beef Belly with a Korean Spicy Sauce",
            price: "Regular",
            category: "Beef",
            spice_level: spice_level(4),
            item_image: "/images/menu_item_images/img6"
        },
        {
            id: 7,
            name: "Chadol",
            description: "Premium Angus Brisket (thinly sliced)",
            price: "Premium",
            category: "Beef",
            spice_level: spice_level(1),
            item_image: "/images/menu_item_images/img7"
        },
        {
            id: 8,
            name: "Galbi Short Ribs",
            description: "Premium Marbling Center Cut Ribs",
            price: "Premium",
            category: "Beef",
            spice_level: spice_level(1),
            item_image: "/images/menu_item_images/img8"
        },
        {
            id: 9,
            name: "Honey Soy Chicken",
            description: "Chicken with a sweet and savory sauce",
            price: "Regular",
            category: "Chicken",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img9"
        },
        {
            id: 10,
            name: "Nook Gan Sal",
            description: "Marinated prime chuck roll",
            price: "Regular",
            category: "Beef",
            spice_level: spice_level(1),
            item_image: "/images/menu_item_images/img10"
        },
        {
            id: 11,
            name: "Daechang",
            description: "Large ox intestine marinated with a sweet teriyaki sauce",
            price: "Regular",
            category: "Beef",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img11"
        },
        {
            id: 12,
            name: "Calamari Steak",
            description: "Calamari steak with green tea salt sprinkle",
            price: "Premium",
            category: "Seafood",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img12"
        },
        {
            id: 13,
            name: "Cheese Tonkatsu",
            description: "Deep fried cheese pork cutlet served with a side of tonkatsu sauce",
            price: `Not Included <br> ${money.format(5.99)}`,
            category: "Pork",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img13"
        },
        {
            id: 14,
            name: "Hotteok",
            description: "Korean sweet pancake topped with powdered sugar",
            price: `Not Included <br> ${money.format(1.99)}`,
            category: "Dessert",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img14"
        },
        {
            id: 15,
            name: "Tteokbokki",
            description: "Fried rice cake sticks with fish and a sweet & spicy sauce",
            price: `Not Included <br> ${money.format(1.99)}`,
            category: "Seafood",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img15"
        },
        {
            id: 16,
            name: "Cajun Jumbo Shrimp",
            description: "Big ahh shrimp",
            price: `Premium`,
            category: "Seafood",
            spice_level: spice_level(3),
            item_image: "/images/menu_item_images/img16"
        },
        {
            id: 17,
            name: "Samgyubsal",
            description: "Pork belly marinated with a bold & zesty sauce",
            price: "Regular",
            category: "Pork",
            spice_level: spice_level(2),
            item_image: "/images/menu_item_images/img17"
        },
        {
            id: 18,
            name: "Hangjungsal",
            description: "Signature pork cheek",
            price: "Regular",
            category: "Pork",
            spice_level: spice_level(1),
            item_image: "/images/menu_item_images/img18"
        },
        {
            id: 19,
            name: "Premium Wagyu",
            description: "Intensely marbled, premium beef known for its buttery, tender texture and rich umami flavor that melts in the mouth",
            price: "Premium",
            category: "Beef",
            spice_level: spice_level(0),
            item_image: "/images/menu_item_images/img19"
        },
        {
            id: 20,
            name: "Cat Meat",
            description: "Questionable",
            price: `Not Included <br> ${money.format(9999.99)}`,
            category: "Cat",
            spice_level: spice_level(5),
            item_image: "/images/menu_item_images/img20"
        }
    ]

    if (menuContainer) {
        function renderMenu(filter = "all") {
            const menuContainer = document.getElementById('menu-container');
            if (!menuContainer) return;

            // 1. Filter the data first
            const filteredItems = MENU_ITEMS.filter(item => {
                if (filter === "all") return true;
                return item.price.includes(filter);
            });

            // 2. Map the filtered items to HTML
            menuContainer.innerHTML = filteredItems.map(item => {
                let numericPrice = 0;
                if (item.price.includes("Regular")) numericPrice = 19.95;
                else if (item.name === "Boba") numericPrice = 6.99;
                else if (item.name === "Cat Meat") numericPrice = 9999.99;
                else numericPrice = 28.95;

                return `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">  
                <img src="${item.item_image}.png" class="card-img-top" alt="${item.name}">
                    <div class="card-body text-center">
                    <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="fw-bold text-danger">${item.price}</p>
                        <p>${item.spice_level}</p>

                    <div class="input-group mb-3">
                        <span class="input-group-text">Qty</span>
                        <select class="form-select item-qty" id="qty-${item.id}">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                <button class="btn btn-success add-to-order"
                        data-id="${item.id}"
                        data-name="${item.name}"
                        data-category="${item.price}"
                        data-price="${numericPrice}">
                    Add to Cart
                </button>
            </div>
            </div>
            </div>`;
            }).join('');
        }


        document.getElementById('category-filter')?.addEventListener('change', (e) => {
            renderMenu(e.target.value);
        });

        renderMenu();

        menuContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("add-to-order")) {
                const btn = event.target;

                const cardBody = btn.closest('.card-body');
                let qtySelect = cardBody.querySelector('.item-qty');
                let quantityToAdd = parseInt(qtySelect.value);
                let id = btn.getAttribute("data-id");
                let name = btn.getAttribute("data-name");
                let reg_or_prem = btn.getAttribute("data-category");
                let price = parseFloat(btn.getAttribute("data-price"));

                let cart = JSON.parse(localStorage.getItem("userCart")) || [];

                // Look for the specific ID in the current cart
                const existingItem = cart.find(item => item.id === id);

                if (existingItem) {
                    // If ID matches, just bump quantity
                    existingItem.quantity += quantityToAdd;
                } else {
                    // If ID is unique, add it as a new line item
                    cart.push({ id, name, price, reg_or_prem, quantity: quantityToAdd });
                }

                localStorage.setItem("userCart", JSON.stringify(cart));
                showAlert(name, quantityToAdd);
            }
        });
    }
}

function displayCart() {
    const cartDisplay = document.getElementById('items-in-cart');
    if (!cartDisplay) return;

    const cart = JSON.parse(localStorage.getItem("userCart")) || [];

    if (cart.length === 0) {
        cartDisplay.innerHTML = '<li class="list-group-item text-muted text-center py-3">Your cart is empty</li>';
        // Hide the cost summary if the cart is empty
        const costContainer = document.getElementById('customer-cost');
        if (costContainer) costContainer.innerHTML = "";
        return;
    }

    cartDisplay.innerHTML = cart.map((item, index) => {
        // 1. Calculate the cost for "Not Included" items ONLY
        let displayPrice = "";

        if (item.reg_or_prem.includes("Not Included")) {
            const lineItemTotal = item.price * item.quantity;
            displayPrice =
                `
                <span class="badge bg-danger">Not Included</span>
                ${money.format(lineItemTotal)}
                `
        } else if (item.reg_or_prem.includes("Premium")) {
            displayPrice = `
                <span class="badge bg-info text-dark">Included</span>
                <span class="badge bg-warning text-dark">Premium</span>
                `;
        }
        else {
            displayPrice = `<span class="badge bg-info text-dark">Included</span>`;
        }

        return `
            <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                <div class="text-start flex-grow-1">
                    <div class="fw-bold mb-0">${item.name}</div>
                    <div class="text-muted small">(x${item.quantity}) | ${item.reg_or_prem}</div>
                </div>
                
                <div class="d-flex align-items-center gap-3">
                    <div class="text-end">
                        <div class="fw-bold">${displayPrice}</div>
                    </div>
                    
                    <button class="btn btn-outline-danger btn-sm remove-item" 
                            data-index="${index}" 
                            title="Remove Item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </li>
        `;
    }).join('');

    // 2. ALWAYS refresh the bottom total whenever the cart is rendered
    displayCustomerCost();
}

function displayCustomerCost() {
    const displayContainer = document.getElementById('customer-cost');
    if (!displayContainer) return;

    // 1. Snag the current party size BEFORE we wipe the HTML
    const currentPartyInput = document.getElementById('party-size');
    const savedPartySize = currentPartyInput ? currentPartyInput.value : "1";

    const totals = calculateOrderSubtotal();
    const taxRate = 0.0825;
    const taxAmount = totals.subtotal * taxRate;
    const grandTotal = totals.subtotal + taxAmount;
    // let premium = `<span className="badge bg-warning text-dark">Premium</span>`
    // let regular = `<span className="badge bg-primary">Regular</span>`

    displayContainer.innerHTML = `
        <br>
        <div class="card p-3 shadow-sm border-0 bg-light">
            <h6 class="fw-bold mb-3 text-center">Order Summary</h6>
            
            <div class="input-group mb-3">
                <span class="input-group-text">Party Size</span>
                <select class="form-select" id="party-size">
                    ${[1,2,3,4,5,6,7,8].map(num =>
        `<option value="${num}" ${savedPartySize == num ? 'selected' : ''}>${num}</option>`
    ).join('')}
                </select>
            </div>
            
            <div class="d-flex justify-content-between mb-1">
                <span>${totals.regOrPrem} Menu (${money.format(totals.rateUsed)}/person):</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>${money.format(totals.partyTotal)}</span>
            </div>
            
            <div class="d-flex justify-content-between mb-1">
                <span>Add-ons (Cat Meat, Boba, etc.):</span>
                <span>${money.format(totals.addonsTotal)}</span>
            </div>
            
            <div class="d-flex justify-content-between mb-1">
                <span>Tax (8.25%):</span>
                <span>${money.format(taxAmount)}</span>
            </div>
            
            <hr>
            
            <div class="d-flex justify-content-between fw-bold text-success fs-5">
                <span>Total:</span>
                <span>${money.format(grandTotal)}</span>
            </div>
        </div>
    `;

    // 2. CRITICAL: Re-attach the listener to the NEWLY created element
    document.getElementById('party-size').addEventListener('change', () => {
        displayCustomerCost();
    });
}

function calculateOrderSubtotal() {
    const cart = JSON.parse(localStorage.getItem("userCart")) || [];
    const partyInput = document.getElementById('party-size');

    const partySize = partyInput ? parseInt(partyInput.value) || 1 : 1;

    const hasPremiumItem = cart.some(item => item.reg_or_prem.includes("Premium"));

    const ratePerPerson = hasPremiumItem ? 38.95 : 28.95;
    const regOrPrem = hasPremiumItem ? "Premium" : "Regular";

    let partyBaseCost = partySize * ratePerPerson;
    let addonsCost = 0;

    cart.forEach(item => {
        if (item.reg_or_prem.includes("Not Included")) {
            addonsCost += (item.price * item.quantity);
        }
    });

    return {
        regOrPrem,
        rateUsed: ratePerPerson,
        partyTotal: partyBaseCost,
        addonsTotal: addonsCost,
        subtotal: partyBaseCost + addonsCost
    };
}


// Handle Deleting Items
document.addEventListener('click', (event) => {
    if (event.target.closest('.remove-item')) {
        const index = event.target.closest('.remove-item').dataset.index;
        let cart = JSON.parse(localStorage.getItem("userCart")) || [];

        cart.splice(index, 1);
        localStorage.setItem("userCart", JSON.stringify(cart));
        displayCart(); // Refresh the UI
        displayCustomerCost();
    }
});

// Run on load
displayCart();
displayCustomerCost()

// Menu cancel order or clear cart
document.addEventListener("click", (event) => {
    // --- HANDLE CANCEL ---
    if (event.target.classList.contains("confirm-clear")) {
        localStorage.removeItem("userCart");

        const body = document.getElementById('cancel-modal-body');
        const footer = document.getElementById('cancel-modal-footer');

        body.innerHTML = `
            <div class="text-center py-3">
                <i class="fa-solid fa-circle-check text-success fs-1 mb-3"></i>
                <h4>Order Cancelled.</h4>
                <p>Going back to the menu.</p>
            </div>
        `;

        // Hide the buttons so they can't click twice
        footer.style.display = "none";

        // 3. Wait 2 seconds so they can read it, then redirect
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 2500);

    }

    // --- HANDLE CHECKOUT ---
    if (event.target.classList.contains("confirm-checkout")) {
        // 1. Clear the cart data
        localStorage.removeItem("userCart");

        // 2. Change the UI inside the modal to say Thank You
        const body = document.getElementById('checkout-modal-body');
        const footer = document.getElementById('checkout-modal-footer');

        body.innerHTML = `
            <div class="text-center py-3">
                <i class="fa-solid fa-circle-check text-success fs-1 mb-3"></i>
                <h4>Thank you!</h4>
                <p>A waiter will bring your items shortly. <br>
                Going back to the menu.</p>

            </div>
        `;

        // Hide the buttons so they can't click twice
        footer.style.display = "none";

        // 3. Wait 2 seconds so they can read it, then redirect
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 2500);
    }
});

// waiter bringing food alert.
let showAlert = (itemName, itemQty) => {
    let alertPlaceholder = document.getElementById('alert-placeholder');
    if (!alertPlaceholder) return;

    let orderPlacedAlert = document.createElement('div');
    orderPlacedAlert.style.cssText = "pointer-events: auto; width: fit-content; min-width: 300px;";
    orderPlacedAlert.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-lg" role="alert">
           <i class="fa-solid fa-cart-shopping me-2"></i>
           ${itemName} (x${itemQty}) added to cart!
           <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    alertPlaceholder.append(orderPlacedAlert);
    console.log(`Customer ordered: ${itemName}`)

    setTimeout(() => {
        orderPlacedAlert.classList.add('opacity-0');
        setTimeout(() => orderPlacedAlert.remove(), 500);
    }, 3000);
};

// reservations
let reservationForm = document.getElementById('res-form');
if (reservationForm) {
    reservationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // pull in data from reservation submission
        let kbbqReservationForm = new FormData(reservationForm);
        let name = kbbqReservationForm.get("name") ;
        let email = kbbqReservationForm.get("email") ;
        let party_size = kbbqReservationForm.get("party_size") ;
        let party_size_int = parseInt(party_size) ;
        let date = kbbqReservationForm.get("date") ;
        let reservation_time = kbbqReservationForm.get("reservation_time") ;
        let seating_preference = kbbqReservationForm.get("seating_preference") ;
        let dietary_restrictions = kbbqReservationForm.get("dietary_restrictions") ;
        let newsletter = kbbqReservationForm.get("newsletter") ;

        // push errors for invalid inputs.
        let errors = [] ;

        // errors for required empty fields
        if (!name || name.length === 0) errors.push("Name cannot be empty.") ;
        if (!email) errors.push("Please enter a valid email.") ;
        if (!date || date === "") errors.push("Please select a valid date.") ;
        if (!reservation_time) errors.push("Please select reservation time.") ;
        if (isNaN(party_size_int)) errors.push("Enter a party size between 1 and 8.")

        // errors for incorrect lengths
        if (name.length > 20) errors.push("Name is too long. 20 characters or less") ;
        if (party_size_int > 8 || party_size_int < 1) errors.push("Enter a party size between 1 and 8.")
        if (dietary_restrictions.length > 40) errors.push("Dietary restrictions must be 40 characters or less.") ;

        // errors for date in the past / invalid
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let userInputDate = new Date(date);
        if (userInputDate < today) errors.push("Please select a future date. This isn't Back to the Future");

        // errors for a reservation time outside of restaurant hours or not 30 minute increments
        let [hours, minutes] = reservation_time.split(':').map(Number);
        if (hours < 15 && hours !== 0) { // 15 is 3pm, midnight is 0.
            errors.push("Dinner reservations are only available between 3:00 PM and Midnight.");
        }
        let halfHourOrHour = minutes % 30 ;
        if (halfHourOrHour !== 0) {
            errors.push("Pick a time :00 or :30");
        }

        // if errors array is greater than 0, show errors.
        if (errors.length > 0) showStatusAlert(errors[0], "danger");
        // else (no errors) create a JS object and console.log + show confirmation alert + reset form.
        else {
            let reservationData = {
                name: name,
                email: email,
                party_size: party_size_int,
                date: date,
                time: reservation_time,
                seating_preference: seating_preference,
                dietary_restrictions: dietary_restrictions,
                newsletter: newsletter
            };

            console.log("Javascript Object (Reservation) Created:", reservationData);
            showStatusAlert(`Confirmed for ${name}!`, "primary");
            reservationForm.reset();
        }
    });
}

function showStatusAlert(message, type) {
    let alertPlaceholder = document.getElementById('alert-placeholder');
    if (!alertPlaceholder) return;

    let alertDiv = document.createElement('div');
    alertDiv.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show shadow-lg" role="alert">
            <!--I included a ternary to determine alert type-->
           ${type === 'danger' ? '<strong>Error:</strong> ' : ''}${message}
           <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    alertPlaceholder.append(alertDiv);

    setTimeout(() => {
        alertDiv.classList.add('opacity-0');
        alertDiv.style.transition = "opacity 0.5s ease";
        setTimeout(() => alertDiv.remove(), 500);
    }, 4000);
}