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

        if (discountEmailForm) {
            discountEmailForm.addEventListener("submit", (event) => {
                event.preventDefault();

                let email = new FormData(discountEmailForm).get("email");
                console.log("Discount Email Captured:", email);

                let modalInstance = bootstrap.Modal.getInstance(discountModal);
                modalInstance.hide();
            });
        }

        let modal = new bootstrap.Modal(discountModal);
        modal.show();
        if (discountEmailForm) discountForm.reset();
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
            <p>Lunch (12pm to 3pm) — ${money.format(prices.lunch)} <br>
               Dinner (3pm to 11pm close) — ${money.format(prices.dinner)} <br>
               <em>Add ${money.format(prices.premium)} for the Premium Menu</em></p>
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
            name: "Cat Meat",
            description: "Questionable",
            price: `Premium <br>${money.format(9999.99)}`,
            category: "Cat",
            spice_level: spice_level(5),
            item_image: "/images/menu_item_images/img10"
        }
    ]

    if (menuContainer) {
        menuContainer.innerHTML = MENU_ITEMS.map(item => {
            // Determine numeric price for the data attribute
            let numericPrice = 0;
            if (item.price === "Regular") numericPrice = 19.95;
            else if (typeof item.price === "string" && item.price.includes("9999")) numericPrice = 9999.99;
            else if (item.name === "Boba") numericPrice = 6.99;
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
                    <button class="btn btn-success add-to-order" 
                        data-id="${item.id}" 
                        data-name="${item.name}" 
                        data-category="${item.price}"
                        data-price="${numericPrice}">
                        Add to Order
                    </button>
                </div>
            </div>
        </div>`;
        }).join('');

        menuContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("add-to-order")) {
                const btn = event.target;

                // Pull the data-attributes we just created
                const id = btn.getAttribute("data-id");
                const name = btn.getAttribute("data-name");
                const reg_or_prem = btn.getAttribute("data-category");
                const price = parseFloat(btn.getAttribute("data-price"));

                let cart = JSON.parse(localStorage.getItem("userCart")) || [];

                // Look for the specific ID in the current cart
                const existingItem = cart.find(item => item.id === id);

                if (existingItem) {
                    // If ID matches, just bump quantity
                    existingItem.quantity += 1;
                } else {
                    // If ID is unique, add it as a new line item
                    cart.push({ id, name, price, reg_or_prem, quantity: 1 });
                }

                localStorage.setItem("userCart", JSON.stringify(cart));
                showAlert(name);
            }
        });
    }
}

function displayCart() {
    const cartDisplay = document.getElementById('items-in-cart');
    if (!cartDisplay) return;

    const cart = JSON.parse(localStorage.getItem("userCart")) || [];

    if (cart.length === 0) {
        cartDisplay.innerHTML = '<li class="list-group-item">Your cart is empty</li>';
        return;
    }

    cartDisplay.innerHTML = cart.map((item, index) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.name} (x${item.quantity}) - ${item.reg_or_prem}
            <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>
        
        <p>Total Cost: $${(item.price * item.quantity).toFixed(2)}</p>
    `).join('');
}

// Handle Deleting Items
document.addEventListener('click', (event) => {
    if (event.target.closest('.remove-item')) {
        const index = event.target.closest('.remove-item').dataset.index;
        let cart = JSON.parse(localStorage.getItem("userCart")) || [];

        cart.splice(index, 1); // Remove the item
        localStorage.setItem("userCart", JSON.stringify(cart));
        displayCart(); // Refresh the UI
    }
});

// Run on load
displayCart();

// Clear cart
document.addEventListener("click", (event) => {
    if (event.target.closest(".clear-cart")) {
        if (confirm("Are you sure you want to empty your entire cart?")) {
            localStorage.removeItem("userCart");
            displayCart();
            console.log("Cart cleared by user.");
        }
    }
});

// waiter bringing food alert.
let showAlert = (itemName) => {
    let alertPlaceholder = document.getElementById('alert-placeholder');
    if (!alertPlaceholder) return;

    let orderPlacedAlert = document.createElement('div');
    orderPlacedAlert.style.cssText = "pointer-events: auto; width: fit-content; min-width: 300px;";
    orderPlacedAlert.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-lg" role="alert">
           <i class="fa-solid fa-cart-shopping me-2"></i>
           A waiter will bring your ${itemName} shortly!
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