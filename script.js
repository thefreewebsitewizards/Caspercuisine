const menuData = {
  burgers: {
    title: '🍔 Burgers',
    groups: [
      {
        name: 'Beef Burgers',
        items: [
          {
            id: 'monster-beef',
            name: 'Monster Beef',
            price: 999,
            desc: '2 beef patties, 2 cheese slices, iceberg lettuce, tomato, onions, BBQ sauce, mustard, tangy sauce, mayo',
            img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: 'flamez-special-beef',
            name: 'Flamez Special',
            price: 1349,
            desc: '2 smashed beef patties, onions, iceberg, American cheese, 2 cheese slices',
            img: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: 'triple-beef',
            name: 'Triple Beef',
            price: 1199,
            desc: '3 beef patties, 2 yellow cheese slices, iceberg, tomato, onions, tangy sauce, mayo',
            img: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
        ],
      },
      {
        name: 'Chicken Burgers',
        items: [
          { id: 'chicken-jalapeno', name: 'Chicken Jalapeno', price: 595, desc: 'Crispy chicken fillet, jalapeños, creamy mayo, iceberg', img: 'https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { id: 'saloon', name: 'Saloon', price: 595, desc: 'Classic crispy chicken burger with lettuce and house sauce', img: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { id: 'bandit', name: 'Bandit', price: 595, desc: 'Spicy fried chicken, pickles, cheese, and smoky sauce', img: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { id: 'appachi', name: 'Appachi', price: 595, desc: 'Juicy grilled chicken with tangy sauce and fresh veggies', img: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        ],
      },
      {
        name: 'Crispy / Thai Chicken',
        items: [
          { id: 'the-zing', name: 'The Zing (Mild / Wild)', price: 450, desc: 'Signature Zing fillet coated in spicy batter', img: 'https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { id: 'rooster', name: 'Rooster', price: 495, desc: 'Crispy chicken fillet with house seasoning', img: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { id: 'double-rooster', name: 'Double Rooster', price: 695, desc: 'Double crispy chicken stack with creamy mayo', img: 'https://images.pexels.com/photos/14602336/pexels-photo-14602336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { id: 'mighty-zing', name: 'Mighty Zing', price: 695, desc: 'Extra-large Zing fillet with spicy glaze', img: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-unhealthy-fast-food-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        ],
      },
    ],
  },

  pizza: {
    title: '🍕 Pizzas',
    sizes: ['Small', 'Medium', 'Large'],
    items: [
      { id: 'tikka', name: 'Tikka', prices: { Small: 550, Medium: 1150, Large: 1700 }, img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'fajita', name: 'Fajita', prices: { Small: 550, Medium: 1150, Large: 1700 }, img: 'https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'malai-boti', name: 'Malai Boti', prices: { Small: 600, Medium: 1200, Large: 1700 }, img: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'supreme', name: 'Supreme', prices: { Small: 600, Medium: 1200, Large: 1750 }, img: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'chicken-delight', name: 'Chicken Delight', prices: { Small: 600, Medium: 1200, Large: 1750 }, img: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'all-the-meat', name: 'All The Meat', prices: { Small: 650, Medium: 1250, Large: 1800 }, img: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'crown-crust', name: 'Crown Crust', prices: { Small: 500, Medium: 1300, Large: 1900 }, img: 'https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'cheese-lover', name: 'Cheese Lover', prices: { Small: 560, Medium: 999, Large: 1450 }, img: 'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'don-calzone', name: 'Don Calzone', prices: { Small: 600, Medium: 1200, Large: 1750 }, img: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'flamez-special-pizza', name: 'FLAMEZ Special', prices: { Small: 1150, Medium: 1300, Large: 1900 }, img: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 'family-pizza', name: 'Family Pizza (Any Flavor)', prices: { Family: 2400 }, img: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ],
    upgrades: [
      { id: 'stuffed-crust', name: 'Stuffed Crust', note: '(M +150 | L +195)' },
      { id: 'cheesy-bite', name: 'Cheesy Bite', note: '(M +195 | L +295)' },
    ],
  },

  wraps: { title: '🌯 Wraps', items: [
    { id: 'arabic-wrap', name: 'Arabic Wrap', price: 450, desc: 'Arabic-style wrap with tangy garlic sauce', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'kentucky-wrap', name: 'Kentucky Wrap', price: 450, desc: 'Fried chicken wrap with creamy dressing', img: 'https://images.pexels.com/photos/6419732/pexels-photo-6419732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'mexican-roll', name: 'Mexican Roll Wrap', price: 650, desc: 'Mexican-spiced chicken wrapped with veggies', img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  friedChicken: { title: '🍗 Fried Chicken (Cluck)', items: [
    { id: 'fc-1pc', name: '1 pc', price: 250, desc: 'Crispy fried chicken', img: 'https://images.pexels.com/photos/13999230/pexels-photo-13999230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'fc-3pc', name: '3 pcs', price: 750, desc: 'Perfect for a quick meal', img: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'fc-6pc', name: '6 pcs', price: 1450, desc: 'Share with friends', img: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'fc-9pc', name: '9 pcs', price: 2200, desc: 'Family bucket', img: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  wings: { title: '🍗 Wings', items: [
    { id: 'crispy-wings', name: 'Crispy Wings (5 pcs)', price: 350, desc: 'Crispy coated wings', img: 'https://images.pexels.com/photos/105994/pexels-photo-105994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'bbq-wings', name: 'BBQ Wings (5 pcs)', price: 350, desc: 'Sticky BBQ glaze', img: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'oven-baked-wings', name: 'Oven Baked Wings (5 pcs)', price: 450, desc: 'Roasted and tender', img: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  fries: { title: '🍟 Fries', items: [
    { id: 'plain-fries', name: 'Plain Fries', price: 295, desc: 'Classic salted fries', img: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'masala-fries', name: 'Masala Fries', price: 450, desc: 'Spiced masala seasoning', img: 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'loaded-fries', name: 'Loaded Fries', price: 695, desc: 'Topped with cheese and sauces', img: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'holi-fries', name: 'Holi Fries', price: 695, desc: 'Rainbow of flavors and spices', img: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  steaks: { title: '🥩 Steaks', items: [
    { id: 'mushroom-creamy', name: 'Mushroom Creamy', price: 1400, desc: 'Served with mashed potato & sautéed vegetables', img: 'https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'black-pepper', name: 'Black Pepper', price: 1400, desc: 'Served with mashed potato & sautéed vegetables', img: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'tarragon', name: 'Tarragon', price: 1350, desc: 'Served with mashed potato & sautéed vegetables', img: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'mexican-steak', name: 'Mexican', price: 1450, desc: 'Served with mashed potato & sautéed vegetables', img: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  pasta: { title: '🍝 Pasta', items: [
    { id: 'fettuccine-alfredo', name: 'Fettuccine Alfredo', price: 950, desc: 'Creamy Alfredo with parmesan', img: 'https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'crunchy-pasta', name: 'Crunchy Pasta', price: 850, desc: 'Crispy topping with rich sauce', img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  others: { title: '🐟 Others', items: [
    { id: 'fish-and-chips', name: 'Fish & Chips (3 pcs)', price: 695, desc: 'Battered fish with fries', img: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'nuggets', name: 'Nuggets (6 pcs)', price: 395, desc: 'Golden chicken nuggets', img: 'https://images.pexels.com/photos/6732553/pexels-photo-6732553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  drinks: { title: '🥤 Drinks', items: [
    { id: 'regular-drink', name: 'Regular', price: 95, desc: 'Soft drink', img: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: '1-litre', name: '1 Liter', price: 180, desc: 'Soft drink 1L', img: 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: '1_5-litre', name: '1.5 Litre', price: 230, desc: 'Soft drink 1.5L', img: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'water-s', name: 'Water (Small)', price: 70, desc: 'Mineral water', img: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'water-l', name: 'Water (Large)', price: 120, desc: 'Mineral water', img: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'mint-margarita', name: 'Mint Margarita', price: 299, desc: 'Refreshing mint drink', img: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},

  addons: { title: '➕ Add-Ons', items: [
    { id: 'garlic-mayo', name: 'Garlic Mayo Dip', price: 70, desc: 'Creamy garlic dip', img: 'https://images.pexels.com/photos/5620877/pexels-photo-5620877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'bang-bang', name: 'Bang Bang Dip', price: 100, desc: 'Spicy creamy dip', img: 'https://images.pexels.com/photos/4061433/pexels-photo-4061433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'tangy', name: 'Tangy Dip', price: 100, desc: 'Zesty tangy sauce', img: 'https://images.pexels.com/photos/4061433/pexels-photo-4061433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'cheese-slice', name: 'Cheese Slice', price: 100, desc: 'Add cheese slice', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]},
};

function handleContactForm(form) {
  const fd = new FormData(form);
  const name = fd.get('name');
  const phone = fd.get('phone');
  const email = fd.get('email') || '';
  const message = fd.get('message');

  // Simulate a successful form submission
  console.log('Form submitted:', { name, phone, email, message });
  return Promise.resolve();
}

    // Utility
    const formatPKR = (n) => `PKR ${n.toLocaleString('en-PK')}`;

    // Menu Data (exact from provided text)
    

    // Render helpers
    const grid = document.getElementById('menu-grid');
    const filters = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search');

    function cardTemplate(item, { isPizza = false, sizes = null } = {}) {
      const priceLabel = isPizza ? (Object.keys(item.prices || {})[0] || null) : null;
      const displayPrice = isPizza && priceLabel ? item.prices[priceLabel] : item.price;
      const img = item.img;
      return `
      <div class="group relative flex flex-col rounded-lg bg-white/5 border border-white/5 overflow-hidden hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
        <div class="relative h-48 w-full overflow-hidden">
          <img src="${img}" alt="${item.name}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        </div>
        <div class="flex flex-1 flex-col p-5">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-white text-lg font-bold leading-tight">${item.name}</h3>
            <span class="text-primary font-bold text-lg">${formatPKR(displayPrice)}</span>
          </div>
          <p class="text-gray-400 text-sm mb-4 flex-grow">${item.desc || ''}</p>
          ${isPizza ? pizzaSizePicker(item) : ''}
          <button data-id="${item.id}" class="add-btn w-full h-10 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark text-white font-bold text-sm transition-colors flex items-center justify-center gap-2">
            Add to Order <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
          </button>
        </div>
      </div>`;
    }

    function pizzaSizePicker(item) {
      const sizes = Object.keys(item.prices);
      return `
        <div class="flex flex-wrap gap-2 mb-3">
          ${sizes.map(s => `<button data-pizza="${item.id}" data-size="${s}" class="size-btn h-8 px-3 rounded-full bg-white/10 text-white text-xs border border-white/10 hover:bg-primary hover:text-[#122118]">${s} - ${formatPKR(item.prices[s])}</button>`).join('')}
        </div>
      `;
    }

    function render(filter = 'all', q = '') {
      grid.innerHTML = '';
      const ql = q.trim().toLowerCase();
      const sections = [];

      const pushSection = (title, items, { isPizza = false } = {}) => {
        const filtered = items.filter(i => i.name.toLowerCase().includes(ql));
        if (!filtered.length) return;
        grid.insertAdjacentHTML('beforeend', `<div class="col-span-full"><h4 class="text-xl font-bold mt-8 mb-4 text-white">${title}</h4></div>`);
        filtered.forEach(i => grid.insertAdjacentHTML('beforeend', cardTemplate(i, { isPizza })));
      };

      const allGroups = [
        { key: 'burgers', title: menuData.burgers.title, items: menuData.burgers.groups.flatMap(g => g.items) },
        { key: 'pizza', title: menuData.pizza.title, items: menuData.pizza.items, isPizza: true },
        { key: 'wraps', title: menuData.wraps.title, items: menuData.wraps.items },
        { key: 'friedChicken', title: menuData.friedChicken.title, items: menuData.friedChicken.items },
        { key: 'wings', title: menuData.wings.title, items: menuData.wings.items },
        { key: 'fries', title: menuData.fries.title, items: menuData.fries.items },
        { key: 'steaks', title: menuData.steaks.title, items: menuData.steaks.items },
        { key: 'pasta', title: menuData.pasta.title, items: menuData.pasta.items },
        { key: 'others', title: menuData.others.title, items: menuData.others.items },
        { key: 'drinks', title: menuData.drinks.title, items: menuData.drinks.items },
        { key: 'addons', title: menuData.addons.title, items: menuData.addons.items },
      ];

      if (filter === 'all') {
        allGroups.forEach(g => pushSection(g.title, g.items, { isPizza: g.key === 'pizza' }));
      } else {
        const group = allGroups.find(g => g.key === filter);
        if (group) {
          pushSection(group.title, group.items, { isPizza: group.key === 'pizza' });
        }
      }

      if (!grid.children.length) {
        grid.insertAdjacentHTML('beforeend', `<p class=\"text-gray-400\">No items match your search.</p>`);
      }
    }

    // Cart system
    const cart = [];
    const cartDrawer = document.getElementById('cart-drawer');
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartBadge = document.getElementById('cart-badge');

    function cartAdd({ id, name, price, size = null }) {
      const key = id + (size ? `-${size}` : '');
      const existing = cart.find(i => i.key === key);
      if (existing) existing.qty += 1; else cart.push({ key, id, name, price, size, qty: 1 });
      updateCartUI();
    }

    function cartRemove(key) {
      const idx = cart.findIndex(i => i.key === key);
      if (idx > -1) cart.splice(idx, 1);
      updateCartUI();
    }

    function updateCartUI() {
      cartItems.innerHTML = cart.map(i => `
        <div class=\"flex items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-lg p-3\">
          <div>
            <p class=\"text-sm font-bold\">${i.name}${i.size ? ` (${i.size})` : ''}</p>
            <p class=\"text-xs text-gray-400\">${formatPKR(i.price)} x ${i.qty}</p>
          </div>
          <div class=\"flex items-center gap-2\">
            <button data-key=\"${i.key}\" class=\"decrease h-8 w-8 rounded bg-white/10 text-white\">-</button>
            <button data-key=\"${i.key}\" class=\"increase h-8 w-8 rounded bg-white/10 text-white\">+</button>
            <button data-key=\"${i.key}\" class=\"remove h-8 w-8 rounded bg-primary text-[#122118]\"><span class=\"material-symbols-outlined\">delete</span></button>
          </div>
        </div>
      `).join('');
      const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
      cartSubtotal.textContent = formatPKR(subtotal);
      const count = cart.reduce((s, i) => s + i.qty, 0);
      if (count > 0) { cartBadge.textContent = count; cartBadge.classList.remove('hidden'); } else { cartBadge.classList.add('hidden'); }
    }

    // Event delegation for cart quantity
    cartItems.addEventListener('click', (e) => {
      const key = e.target.dataset.key || e.target.closest('button')?.dataset.key;
      if (!key) return;
      if (e.target.classList.contains('increase')) {
        const item = cart.find(i => i.key === key); if (item) { item.qty += 1; updateCartUI(); }
      } else if (e.target.classList.contains('decrease')) {
        const item = cart.find(i => i.key === key); if (item && item.qty > 1) { item.qty -= 1; updateCartUI(); }
      } else if (e.target.classList.contains('remove')) {
        cartRemove(key);
      }
    });

    // Open/Close cart
    openCartBtn.addEventListener('click', () => { cartDrawer.classList.remove('hidden'); });
    document.getElementById('close-cart').addEventListener('click', () => { cartDrawer.classList.add('hidden'); });

    document.getElementById('checkout').addEventListener('click', () => {
      const summary = cart.map(i => `${i.qty}x ${i.name}${i.size ? ` (${i.size})` : ''} - ${formatPKR(i.price * i.qty)}`).join('\n');
      const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
      alert(`Order Summary:\n\n${summary}\n\nTotal: ${formatPKR(total)}`);
    });

    // Global clicks: add to cart and pizza sizes
    document.addEventListener('click', (e) => {
      if (e.target.closest('.add-btn')) {
        const btn = e.target.closest('.add-btn');
        const id = btn.dataset.id;
        // find item
        const allItems = [
          ...menuData.burgers.groups.flatMap(g => g.items),
          ...menuData.wraps.items,
          ...menuData.friedChicken.items,
          ...menuData.wings.items,
          ...menuData.fries.items,
          ...menuData.steaks.items,
          ...menuData.pasta.items,
          ...menuData.others.items,
          ...menuData.drinks.items,
          ...menuData.addons.items,
          ...menuData.pizza.items,
        ];
        const found = allItems.find(i => i.id === id);
        if (!found) return;
        // if pizza, pick first size by default
        let size = null, price = found.price;
        if (found.prices) {
          size = Object.keys(found.prices)[0];
          price = found.prices[size];
        }
        cartAdd({ id: found.id, name: found.name, price, size });
      }

      if (e.target.closest('.size-btn')) {
        const b = e.target.closest('.size-btn');
        const id = b.dataset.pizza; const size = b.dataset.size;
        const found = menuData.pizza.items.find(i => i.id === id);
        if (!found) return;
        cartAdd({ id: found.id, name: found.name, price: found.prices[size], size });
      }
    });

    // Filters
    filters.forEach(f => f.addEventListener('click', () => {
      filters.forEach(x => {
        x.classList.remove('bg-primary', 'text-background-dark', 'shadow-[0_0_15px_rgba(54,226,123,0.3)]');
        x.classList.add('bg-white/5', 'text-gray-400', 'hover:bg-white/10', 'border', 'border-white/5', 'group');
      });
      f.classList.remove('bg-white/5', 'text-gray-400', 'hover:bg-white/10', 'border', 'border-white/5', 'group');
      f.classList.add('bg-primary', 'text-background-dark', 'shadow-[0_0_15px_rgba(54,226,123,0.3)]');
      render(f.dataset.filter, searchInput.value);
    }));

    // Search
    searchInput.addEventListener('input', () => {
      const activeEl = Array.from(filters).find(f => f.classList.contains('bg-primary'));
      const active = activeEl ? activeEl.dataset.filter : 'all';
      render(active, searchInput.value);
    });

    // Initial render
    render('all');

    // Smooth scroll from banner button to grid
    document.getElementById('scroll-menu').addEventListener('click', () => {
      document.querySelector('#menu-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Start Order opens cart
    document.getElementById('start-order').addEventListener('click', () => {
      cartDrawer.classList.remove('hidden');
    });

    // Directions
    document.getElementById('btn-directions').addEventListener('click', () => {
      window.open('https://www.google.com/maps/search/?api=1&query=FLAMEZ+PWD+Road+Islamabad', '_blank');
    });

    // Mobile drawer
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    document.getElementById('close-mobile').addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    mobileBtn.addEventListener('click', () => mobileDrawer.classList.remove('hidden'));

    // Contact form -> mailto
    // Contact form -> mailto
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      handleContactForm(e.target).then(() => {
        document.getElementById('contact-status').classList.remove('hidden');
      });
    });

    // Smooth scroll for all internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Nav link highlighting on scroll
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
      let index = sections.length;

      while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
      
      navLinks.forEach((link) => {
        link.classList.remove('text-primary', 'font-bold');
        link.classList.add('text-gray-200', 'font-medium');
      });

      const activeLink = document.querySelector(`nav a[href="#${sections[index].id}"]`);
      if (activeLink) {
        activeLink.classList.add('text-primary', 'font-bold');
        activeLink.classList.remove('text-gray-200', 'font-medium');
      }
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call