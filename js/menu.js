// menu.js - Menu data and dynamic rendering for Spice Kraft
// All menu data is centralized here for easy updates

const menuData = {
  starters: {
    label: "Starters",
    items: [
      {
        name: "Dajaj Chermoula",
        desc: "Herb-crusted chicken with North African spices, roasted vegetables",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Amritsari Macchi",
        desc: "Crispy battered fish with traditional Punjabi spices and mint chutney",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Paneer Tikka",
        desc: "Tandoor-grilled cottage cheese with aromatic spice marinade",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Chicken Satay",
        desc: "Grilled chicken skewers with peanut dipping sauce",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Mushroom Galouti",
        desc: "Melt-in-mouth mushroom kebabs with aromatic spices",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Thai Fish Cakes",
        desc: "Spiced fish cakes with sweet chili sauce and pickled cucumber",
        price: "Price on request",
        type: "non-veg",
      },
    ],
  },
  mains: {
    label: "Main Course",
    items: [
      {
        name: "Shepherd's Pie",
        desc: "Classic comfort elevated with premium minced lamb and creamy potato crust",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Mutton Gustaba",
        desc: "Slow-cooked mutton in rich yoghurt gravy with aromatic Kashmiri spices",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Chicken Stroganoff",
        desc: "Tender chicken in creamy mushroom sauce, served with buttered rice",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Paneer Lababdar",
        desc: "Cottage cheese in rich tomato and cashew gravy",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Lamb Shank",
        desc: "Slow-braised lamb shank with root vegetables and red wine jus",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Vegetable Wellington",
        desc: "Seasonal vegetables wrapped in puff pastry with mushroom duxelles",
        price: "Price on request",
        type: "veg",
      },
    ],
  },
  seafood: {
    label: "Seafood",
    items: [
      {
        name: "Beer Battered Fish",
        desc: "Golden crispy fish fillet with house-made tartar sauce and seasoned fries",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Prawn Malaikari",
        desc: "Creamy coconut prawn curry with Bengali spices",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Grilled Salmon",
        desc: "Atlantic salmon with lemon butter sauce and seasonal greens",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Fish Moilee",
        desc: "Delicate fish curry in coconut milk with curry leaves",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Tandoori Prawns",
        desc: "Jumbo prawns marinated in spiced yoghurt, cooked in tandoor",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Crab Thermidor",
        desc: "Classic preparation with mustard, egg yolk and brandy cream",
        price: "Price on request",
        type: "non-veg",
      },
    ],
  },
  asian: {
    label: "Asian",
    items: [
      {
        name: "Thai Green Curry",
        desc: "Aromatic green curry with bamboo shoots, Thai basil and jasmine rice",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Kung Pao Chicken",
        desc: "Wok-tossed chicken with peanuts, dried chili and Sichuan pepper",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Pad Thai",
        desc: "Stir-fried rice noodles with tofu, peanuts and tamarind sauce",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Dim Sum Platter",
        desc: "Assorted steamed and fried dumplings with dipping sauces",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Teriyaki Salmon",
        desc: "Glazed salmon with teriyaki sauce, steamed rice and miso soup",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Vegetable Tempura",
        desc: "Lightly battered seasonal vegetables with tentsuyu dipping sauce",
        price: "Price on request",
        type: "veg",
      },
    ],
  },
  mughlai: {
    label: "Mughlai",
    items: [
      {
        name: "Saffron Rice",
        desc: "Fragrant basmati rice infused with saffron and whole spices",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Chicken Biryani",
        desc: "Dum-cooked layered rice with marinated chicken and aromatic spices",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Mutton Rogan Josh",
        desc: "Slow-cooked mutton in Kashmiri chili and yoghurt gravy",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Dal Makhani",
        desc: "Black lentils slow-cooked overnight with butter and cream",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Lucknowi Kebab",
        desc: "Melt-in-mouth minced lamb kebabs with saffron and rose water",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Naan Basket",
        desc: "Assorted fresh breads from the tandoor — butter, garlic, cheese",
        price: "Price on request",
        type: "veg",
      },
    ],
  },
  continental: {
    label: "Continental",
    items: [
      {
        name: "Grilled Chicken Breast",
        desc: "Herb-marinated chicken with roasted potatoes and seasonal vegetables",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Mushroom Risotto",
        desc: "Creamy Arborio rice with wild mushrooms, parmesan and truffle oil",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Beef Tenderloin",
        desc: "Pan-seared beef with red wine reduction and gratin potatoes",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Pasta Aglio e Olio",
        desc: "Spaghetti with garlic, chili flakes, olive oil and fresh herbs",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Chicken Cordon Bleu",
        desc: "Stuffed chicken breast with ham and cheese, breadcrumb coating",
        price: "Price on request",
        type: "non-veg",
      },
      {
        name: "Caesar Salad",
        desc: "Crisp romaine, parmesan, croutons with classic Caesar dressing",
        price: "Price on request",
        type: "veg",
      },
    ],
  },
  desserts: {
    label: "Desserts",
    items: [
      {
        name: "Fried Ice Cream",
        desc: "Crispy coated vanilla ice cream with chocolate drizzle and berry compote",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Jack Daniels Mousse",
        desc: "Velvety chocolate mousse infused with Jack Daniels, topped with gold leaf",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Tiramisu",
        desc: "Classic Italian layered dessert with mascarpone and espresso",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Gulab Jamun",
        desc: "Warm milk dumplings in saffron-infused rose syrup",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Crème Brûlée",
        desc: "Classic French vanilla custard with caramelized sugar crust",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Phirni",
        desc: "Traditional chilled rice pudding with pistachios and rose water",
        price: "Price on request",
        type: "veg",
      },
    ],
  },
  beverages: {
    label: "Beverages",
    items: [
      {
        name: "Signature Iced Tea",
        desc: "House-brewed tea with seasonal fruits and herbs",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Fresh Lime Soda",
        desc: "Classic refresher — sweet, salt, or mixed",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Mango Lassi",
        desc: "Creamy yoghurt shake with Alphonso mango pulp",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Cold Coffee",
        desc: "Blended iced coffee with vanilla ice cream",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Virgin Mojito",
        desc: "Muddled mint and lime with soda and sugar syrup",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Masala Chai",
        desc: "Traditional Indian spiced tea brewed with fresh spices",
        price: "Price on request",
        type: "veg",
      },
    ],
  },
  bar: {
    label: "Bar",
    items: [
      {
        name: "Aampanna",
        desc: "A refreshing mango-based cocktail with Indian spices",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Curry Pata Shikanji",
        desc: "A bold fusion of curry leaf and traditional lemonade with vodka",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Hammer Jack",
        desc: "Smoky whiskey-based cocktail with citrus twist and bitters",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Classic Cosmopolitan",
        desc: "Vodka, cranberry, Cointreau and fresh lime juice",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Old Fashioned",
        desc: "Bourbon, Angostura bitters, sugar and orange peel",
        price: "Price on request",
        type: "veg",
      },
      {
        name: "Espresso Martini",
        desc: "Vodka, fresh espresso, coffee liqueur and vanilla syrup",
        price: "Price on request",
        type: "veg",
      },
    ],
  },
};

function renderMenuItems(category) {
  const container = document.getElementById("menu-items");
  if (!container) return;

  // Clear current items
  container.innerHTML = "";

  const categoryData = menuData[category];
  if (!categoryData || !categoryData.items) return;

  // Render new items
  categoryData.items.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.className = "menu-item";
    const typeLabel = item.type === "veg" ? "Vegetarian" : "Non-Vegetarian";

    itemEl.innerHTML = `
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <span class="menu-item-badge ${item.type}" role="img" aria-label="${typeLabel}" title="${typeLabel}"></span>
                    <h4 class="menu-item-name">${item.name}</h4>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
            </div>
            <span class="menu-item-price">${item.price}</span>
        `;

    container.appendChild(itemEl);

    // Stagger fade-in
    setTimeout(
      () => {
        itemEl.classList.add("visible");
      },
      50 + index * 50,
    );
  });
}

function initMenu() {
  const categoryBtns = document.querySelectorAll(".menu-category-btn");
  const container = document.getElementById("menu-items");

  if (!categoryBtns.length || !container) return;

  // Set active category and render initially
  let currentCategory = categoryBtns[0].getAttribute("data-category");
  categoryBtns.forEach((btn, idx) => {
    btn.setAttribute("aria-pressed", idx === 0 ? "true" : "false");
  });
  categoryBtns[0].classList.add("active");
  renderMenuItems(currentCategory);

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;

      // Remove active from all buttons
      categoryBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      // Add active to clicked button
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      const category = btn.getAttribute("data-category");

      // Fade out current items
      const currentItems = container.querySelectorAll(".menu-item");
      currentItems.forEach((item) => item.classList.remove("visible"));

      // Wait for fade out transition, then render new items
      setTimeout(() => {
        renderMenuItems(category);
      }, 300);
    });
  });
}

document.addEventListener("DOMContentLoaded", initMenu);
