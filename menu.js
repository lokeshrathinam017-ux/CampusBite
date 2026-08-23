import { menuItems } from './menuItems.js';

const container = document.getElementById("menuCard");
//console.log(container);
//const menuCategory1 = document.getElemlassentsByCName("menuCategory");
//console.log(menuCategory1);
const menuCategory = document.querySelectorAll(".menuCategory");
//console.log(menuCategory);
//console.log([...menuCategory]);
const sortDropdown = document.getElementById("sortDropdown"); // <select> with options: default, priceLowHigh, priceHighLow, nameAZ
const allProductsCount = document.getElementById('allProductsCount');
// ---------- RENDER a whole list of products ----------
// Filter/sort just decide WHICH items to pass in.
function displayMenu(items) {
  container.innerHTML = '';
  if (items.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-400">No items found</p>`;
    return;
  }
  items.forEach((item) => {

    const card = document.createElement("div");
    card.className = "menuItem flex md:flex-row items-center md:mb-5 border border-[#efefef] rounded p-3 gap-3";
    card.id = `${item.id}`;

    card.innerHTML = `
    <div class="menuItem__image w-[80px] h-[80px] md:w-[120px] h-[120px] flex-shrink-0 overflow-hidden rounded mb-3 md:mb-0">
      <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain rounded-[16px]" />
    </div>
    <div class="menuItem__details flex flex-col md:ml-5">
      <h5 class="text-sm md:text-md font-medium mb-2">${item.name}</h5>
      <p class="text-#E9FAF5 mb-2 text-xs line-clamp-2">${item.desc}</p>
      <span class="text-[#FF5A4F] font-bold">₹${item.price}</span>
    </div>
    <button id="${item.id}"  class="addToCart md:self-end self-center border border-[#39C6A5] text-green-900 p-2 md:px-5 md:py-1 rounded text-xs hover:bg-[#39C6A5] hover:text-white cursor-pointer">
     <i class='fa-solid fa-plus'></i>
    </button>`;
   

    //console.log(item.name);
    container.append(card);
  });
  allProductsCount.innerHTML = `<span>(${items.length})</span>`;
}

// ---------- FILTER by selected categories ----------
function getSelectedCategories() {
  const allItems = [...menuCategory]; //Array.from
  // console.log(allItems);
  const selected = allItems.filter((item) => item.classList.contains("selected"));
  // console.log(selected);
  const categories = selected.map((item) => item.id);
  //const categories = selected.filter((item) => item.dataset.category);
  //console.log(categories);
  return categories;
}

function filterMenu(items, selectedCategories) {
  if (selectedCategories.length === 0) return items; // nothing selected = show all

  return items.filter((item) => item.category.some((cat) => selectedCategories.includes(cat)));
}

// ---------- SORT ----------
function sortMenu(items, sortType) {
  const sorted = [...items]; // never change the original array

  switch (sortType) {
    case "priceLowHigh":
      return sorted.sort((a, b) => a.price - b.price);
    case "priceHighLow":
      return sorted.sort((a, b) => b.price - a.price);
    case "nameAZ":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "nameZA":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sorted; // "default" = original order
  }
}

// ----------Combine filter + sort -----
function applyFiltersAndSort() {
  const selectedCategories = getSelectedCategories();
  // console.log(selectedCategories);
  const sortType = sortDropdown ? sortDropdown.value : "default";
  //console.log(sortType);
  let result = filterMenu(menuItems, selectedCategories);
  // console.log(result);
  result = sortMenu(result, sortType);
  //console.log(result);

  displayMenu(result);

}

// ---------- Event listeners ----------
menuCategory.forEach((cat) => {
  cat.addEventListener("click", () => {
    cat.classList.toggle("active");
    cat.classList.toggle("selected");
    cat.querySelector(".tick").classList.toggle("hidden");
    applyFiltersAndSort();
  });
});

if (sortDropdown) {
  sortDropdown.addEventListener("change", () => {
    applyFiltersAndSort();
  });
}

// ---------- Initial load ----------
applyFiltersAndSort();






// Get cart items
//const addToCartBtn = document.querySelectorAll('.addToCart');
const cartCountSpan = document.getElementById('cartCountSpan');
let cartCount = 0;
container.addEventListener('click', (event) => {
  const btn = event.target.closest('.addToCart');// to find current add button clicked
  //console.log(btn);
  btn.classList.toggle("item-added");
  if (btn.classList.contains("item-added")) {
    //console.log(cartCountSpan);
    cartCountSpan.classList.remove('hidden');
    btn.classList.add('item-added', 'text-[#FF5A4F]', 'border-[#FF5A4F]', 'hover:bg-[#FF5A4F]', 'hover:text-white');
    btn.classList.remove('text-green-900', 'border-[#39C6A5]', 'hover:bg-[#39C6A5]');
    btn.innerHTML = "<i class='fa-regular fa-trash-can'></i>";
    cartCount = cartCount + 1;
    cartCountSpan.textContent = `${cartCount}`;
  } else {
    btn.classList.remove('item-added', 'text-[#FF5A4F]', 'border-[#FF5A4F]', 'hover:bg-[#FF5A4F]', 'hover:text-white');
    btn.classList.add('text-green-900', 'border-[#39C6A5]', 'hover:bg-[#39C6A5]', 'hover:text-white');
    btn.innerHTML = "<i class='fa-solid fa-plus'></i>";
    cartCount = cartCount - 1;
    if (cartCount > 0) {
      cartCountSpan.textContent = `${cartCount}`;
    } else {
      cartCountSpan.textContent = '';
      cartCountSpan.classList.add('hidden');
    }
  }

});

// Pass cart items to cart.html page
const viewCart = document.getElementById('viewCart');
const addToCart = document.querySelectorAll('.addToCart');

viewCart.addEventListener('click', () => {
  const addedItems = [...addToCart].filter((cartItem) => cartItem.classList.contains('item-added'));
  const cartItemIds = addedItems.map((item) => item.id);
  localStorage.setItem('cartIds', JSON.stringify(cartItemIds));
  window.location.href = "cart.html";
})


//Mob filter and sort activity

const mobFilter = document.getElementById('mobFilter');
const mobSort = document.getElementById('mobSort');
const menuCategoriesDiv = document.getElementById('menuCategories');
const menuCategoryList = document.querySelectorAll('.menuCategory');
const selectList = document.getElementById('sortDropdown');
const menuSortByDiv = document.getElementById('menuSortBy');
const filterClose = document.getElementById('filterClose');
const sortClose = document.getElementById('sortClose');
const filterApply = document.getElementById('filterApply');
const filterClear = document.getElementById('filterClear');
const sortApply = document.getElementById('sortApply');
const sortClear = document.getElementById('sortClear');
const ticks = document.querySelectorAll('.tick');

mobFilter.addEventListener('click', () => {
  menuCategoriesDiv.classList.toggle('hidden');
  menuSortByDiv.classList.add('hidden');
})
mobSort.addEventListener('click', () => {
  menuSortByDiv.classList.toggle('hidden');
  menuCategoriesDiv.classList.add('hidden');
})

filterClose.addEventListener('click', () => {
  menuCategoriesDiv.classList.toggle('hidden');
})
sortClose.addEventListener('click', () => {
  menuSortByDiv.classList.toggle('hidden');
})
//filter close activity
filterClear.addEventListener('click', () => {
  menuCategoryList.forEach((list) => {
    list.classList.remove('selected');
    ticks.forEach((t) => {
      t.classList.add('hidden');
      // console.log(t);
    });
  })

})
//filter apply activity
filterApply.addEventListener('click', () => {
  menuCategoriesDiv.classList.toggle('hidden');
});

//sort close activity
sortClear.addEventListener('click', () => {
  selectList.value = 'default';
})

//sort apply activity
sortApply.addEventListener('click', () => {
  menuSortByDiv.classList.toggle('hidden');
});
