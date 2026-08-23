const menuItems = [
  // ---------------- VEG ----------------
  {
    id: "1",
    name: "Classic Veg Burger",
    desc: "Grilled paneer, veggies, mayo wrapped in tortilla",
    price: 129,
    image: "./menuimages/1Classic_Veg_Burger.jpg",
    category: ['Bestsellers','Burgers','Veg']
  },
  {
    id: "2",
    name: "Paneer Tikka Wrap",
    desc: "Spiced paneer tikka wrapped with veggies and mint chutney",
    price: 149,
    image: "./menuimages/2Paneer_Tikka_Wrap.jpg",
    category: ['Bestsellers','Veg']
  },
  {
    id: "3",
    name: "Veg Loaded Fries",
    desc: "Crispy fries topped with cheese, corn and jalapenos",
    price: 119,
    image: "./menuimages/3Veg_Loaded_Fries.jpg",
    category: ['Bestsellers','Veg']
  },
  {
    id: "4",
    name: "Farmhouse Veg Pizza",
    desc: "Loaded with bell peppers, onion, corn and olives",
    price: 199,
    image: "./menuimages/4Farmhouse_Veg_Pizza.jpg",
    category: ['Bestsellers','Veg']
  },
  {
    id: "5",
    name: "Veg Momos",
    desc: "Steamed dumplings stuffed with cabbage and carrot",
    price: 99,
    image: "./menuimages/5Veg_Momos.jpg",
    category: ['Bestsellers','Veg']
  },
 
  // ---------------- NON-VEG ----------------
  {
    id: "9",
    name: "Cheesey Chicken Burger",
    desc: "Grilled chicken, cheese, veggies, mayo wrapped in tortilla",
    price: 129,
    image: "./menuimages/6Cheesey_Chicken_Burger.jpg",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "10",
    name: "Chicken Tikka Wrap",
    desc: "Spicy chicken tikka wrapped with onions and mint chutney",
    price: 159,
    image: "./menuimages/7Chicken_Tikka_Wrap.jpg",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "11",
    name: "Peri Peri Chicken Wings",
    desc: "Crispy chicken wings tossed in peri peri sauce",
    price: 179,
    image: "./menuimages/8Peri_Peri_Chicken_Wings.jpg",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "12",
    name: "Egg Bhurji Sandwich",
    desc: "Spiced scrambled egg sandwich with butter toast",
    price: 99,
    image: "./menuimages/9Egg_Bhurji_Sandwich.jpg",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "13",
    name: "Chicken Momos",
    desc: "Steamed dumplings stuffed with minced chicken",
    price: 129,
    image: "./menuimages/10Chicken_Momos.jpg",
    category: ['Bestsellers','Non-Veg']
  },
 
  // ---------------- BURGERS ----------------
  {
    id: "17",
    name: "Double Patty Burger",
    desc: "Two grilled patties, double cheese and special sauce",
    price: 179,
    image: "./menuimages/11Double_Patty_Burger.jpg",
    category: ['Bestsellers','Burgers', 'Veg']
  },
  {
    id: "18",
    name: "Mushroom Swiss Burger",
    desc: "Sauteed mushrooms with swiss cheese and garlic mayo",
    price: 149,
    image: "./menuimages/12Mushroom_Swiss_Burger.jpg",
    category: ['Bestsellers','Burgers', 'Veg']
  },
  {
    id: "19",
    name: "Spicy Chicken Burger",
    desc: "Crispy fried chicken patty with spicy mayo and lettuce",
    price: 159,
    image: "./menuimages/13Spicy_Chicken_Burger.jpg",
    category: ['Bestsellers','Burgers', 'Non-Veg']
  },
  {
    id: "20",
    name: "BBQ Bacon Burger",
    desc: "Smoky BBQ sauce, crispy bacon and cheddar cheese",
    price: 189,
    image: "./menuimages/14BBQ_Bacon_Burger.jpg",
    category: ['Bestsellers','Burgers', 'Non-Veg']
  },
  {
    id: "21",
    name: "Aloo Tikki Burger",
    desc: "Crispy spiced potato patty with tangy chutneys",
    price: 99,
    image: "./menuimages/15Aloo_Tikki_Burger.jpg",
    category: ['Bestsellers','Burgers', 'Veg']
  },
 
  // ---------------- FRIES ----------------
  {
    id: "23",
    name: "Peri Peri Fries",
    desc: "Crispy fries tossed in peri peri sauce",
    price: 99,
    image: "./menuimages/16Peri_Peri_Fries.jpg",
    category: ['Bestsellers','Fries']
  },
  {
    id: "24",
    name: "Classic Salted Fries",
    desc: "Golden fries with a pinch of salt",
    price: 79,
    image: "./menuimages/17Classic_Salted_Fries.jpg",
    category: ['Bestsellers','Fries']
  },
  {
    id: "25",
    name: "Cheese Loaded Fries",
    desc: "Fries topped with melted cheese and herbs",
    price: 119,
    image: "./menuimages/18Cheese_Loaded_Fries.jpg",
    category: ['Bestsellers','Fries']
  },
  {
    id: "26",
    name: "Masala Fries",
    desc: "Fries tossed in tangy Indian masala spice mix",
    price: 89,
    image: "./menuimages/19Masala_Fries.jpg",
    category: ['Bestsellers','Fries']
  },
  {
    id: "27",
    name: "Piri Piri Wedges",
    desc: "Thick-cut potato wedges with piri piri seasoning",
    price: 109,
    image: "./menuimages/20Piri_Piri_Wedges.jpg",
    category: ['Bestsellers','Fries']
  },
 
  // ---------------- DRINKS ----------------
  {
    id: "29",
    name: "Cold Coffee",
    desc: "Chilled coffee with ice cream and chocolate",
    price: 89,
    image: "./menuimages/21Cold_Coffee.jpg",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "30",
    name: "Oreo Milkshake",
    desc: "Creamy milkshake blended with Oreo cookies",
    price: 109,
    image: "./menuimages/22Oreo_Milkshake.jpg",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "31",
    name: "Fresh Lime Soda",
    desc: "Refreshing lime soda, sweet or salted",
    price: 59,
    image: "./menuimages/23Fresh_Lime_Soda.jpg",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "32",
    name: "Chocolate Milkshake",
    desc: "Rich chocolate shake topped with whipped cream",
    price: 99,
    image: "./menuimages/24Chocolate_Milkshake.jpg",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "33",
    name: "Mango Smoothie",
    desc: "Thick smoothie blended with fresh mango pulp",
    price: 99,
    image: "./menuimages/25Mango_Smoothie.jpg",
    category: ['Bestsellers','Drinks']
  },
 
  // ---------------- COMBOS ----------------
  {
    id: "36",
    name: "Burger Combo",
    desc: "Any burger + fries + soft drink",
    price: 249,
    image: "./menuimages/26Burger_Combo.jpg",
    category: ['Bestsellers','Combos']
  },
  {
    id: "37",
    name: "Family Feast Combo",
    desc: "2 burgers + fries + 2 drinks",
    price: 449,
    image: "./menuimages/27Family_Feast_Combo.jpg",
    category: ['Bestsellers','Combos']
  },
  {
    id: "38",
    name: "Wrap Combo",
    desc: "Any wrap + fries",
    price: 199,
    image: "./menuimages/28Wrap_Combo.jpg",
    category: ['Bestsellers','Combos']
  },
  {
    id: "39",
    name: "Student Special Combo",
    desc: "Burger + fries + drink at a budget-friendly price",
    price: 179,
    image: "./menuimages/29Student_Special_Combo.jpg",
    category: ['Bestsellers','Combos']
  },
  {
    id: "40",
    name: "Momos & Drink Combo",
    desc: "Any momos plate + soft drink",
    price: 159,
    image: "./menuimages/30Momos_Drink_Combo.jpg",
    category: ['Bestsellers','Combos']
  },
];

export { menuItems };