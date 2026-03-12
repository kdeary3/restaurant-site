// 10% OFF MODAL ON HOMEPAGE
document.addEventListener("DOMContentLoaded", function () {
    let modalItem = document.getElementById('exampleModal');
    let modal = new bootstrap.Modal(modalItem);
    modal.show();
});

// CALCULATES SPICE LEVEL TO SHOW # OF CHILI PEPPER EMOJIS
let spice_level = (level) => {
    let icon = '<i class="fa-solid fa-pepper-hot text-danger"></i> '; // FONT AWESOME chili pepper emoji
    return icon.repeat(level);
};

// DISPLAY MONEY
let money = new Intl.NumberFormat(
    "en-US",
    {style: "currency", currency: "USD"});

let pricing = {lunch: 19, dinner: 28.95, premium: 10}

let priceDisplay = `
    <p>Lunch (12pm to 3pm) ---------- ${money.format(pricing.lunch)} <br>
       Dinner (3pm to 11pm close) ---- ${money.format(pricing.dinner)} <br>
       <em>Add ${money.format(pricing.premium)} for the Premium Menu</em></p>
`;

document.getElementById('lunchDinnerPremiumPricing').innerHTML = priceDisplay;

// MENU ITEMS ARRAY
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

let menuContainer = document.getElementById('menu-container');

// Use .map() to turn each object into a string of HTML
let menuFunc = MENU_ITEMS.map(item => {
    return `
    <div class="col-md-4 col-sm-8">
        <div class="card h-100 shadow-sm">
            <img src="${item.item_image}.png" class="card-img-top" alt="${item.name}">
            <div class="card-body text-center">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="fw-bold text-danger">${item.price}</p>
                <p class="fw-bold text-danger">${item.spice_level}</p>
                <button onclick="addedToOrder('${item.name}')" class="btn btn-success">Add to Order</button>
            </div>
        </div>
    </div>
    `;
}).join(''); // join('') turns the array of strings into one long string

menuContainer.innerHTML = menuFunc;

function addedToOrder(name) {
    console.log(`Item Added: ${name}`);
}

let alertPlaceholder = document.getElementById('alert-placeholder');

let showAlert = (itemName) => {
    let wrapper = document.createElement('div');
    wrapper.style.pointerEvents = "auto";
    wrapper.style.width = "fit-content";
    wrapper.style.minWidth = "300px";

    wrapper.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-lg" role="alert">
           <i class="fa-solid fa-cart-shopping me-2"></i>
           A waiter will bring your ${itemName} shortly!
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    alertPlaceholder.append(wrapper);

    // AUTO-REMOVE AFTER 3 SECONDS
    setTimeout(() => {
        // Simple fade out effect before removing
        wrapper.classList.add('opacity-0');
        wrapper.style.transition = "opacity 0.5s ease";
        setTimeout(() => wrapper.remove(), 500);
    }, 3000);
};

menuContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-success")) {
        // Find the name of the item from the card
        let cardBody = event.target.closest(".card-body");
        let itemName = cardBody.querySelector(".card-title").innerText;

        // Trigger the alert!
        showAlert(itemName);

        console.log(`${itemName} added to order.`);
    }
});

const reservationContainer = document.getElementById('reservation-container');

reservationContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-success")) {
        showReservationAlert("Your table");
        console.log("Reservation submitted.");
    }
});

const showReservationAlert = (subject) => {
    const alertPlaceholder = document.getElementById('alert-placeholder');
    const wrapper = document.createElement('div');
    wrapper.style.pointerEvents = "auto";

    wrapper.innerHTML = `
        <div class="alert alert-primary alert-dismissible fade show shadow-lg" role="alert">
           <i class="fa-solid fa-calendar-check me-2"></i>
           Booking confirmed.
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    alertPlaceholder.append(wrapper);

    setTimeout(() => {
        wrapper.classList.add('opacity-0');
        wrapper.style.transition = "opacity 0.5s ease";
        setTimeout(() => wrapper.remove(), 500);
    }, 4000); // Reservations stay a bit longer (4 seconds)
};