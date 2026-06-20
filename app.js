document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // DATA MODELS
  // ==========================================
  const venuesData = [
    {
      id: 'venue-1',
      name: 'Royal Palace Hall',
      location: 'Downtown',
      capacity: 600,
      price: 150000,
      rating: 4.9,
      reviews: 120,
      ac: 'Fully Air Conditioned',
      parking: '150 Cars',
      stage: '45ft x 22ft',
      seating: 'Theater, Banquet, Cluster',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1519225495810-7517c5a690b6?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'A grand luxury venue featuring royal architectural pillars, crystal chandeliers, and premium seating arrangements. Perfect for premium weddings and upscale corporate milestones.',
      availability: 'Available'
    },
    {
      id: 'venue-2',
      name: 'Grand Banquet',
      location: 'Uptown',
      capacity: 400,
      price: 110000,
      rating: 4.7,
      reviews: 95,
      ac: 'Fully Air Conditioned',
      parking: '100 Cars',
      stage: '35ft x 18ft',
      seating: 'Theater, Banquet',
      image: 'https://i.pinimg.com/736x/bf/05/93/bf05936ad7de5e817a0beebfb13b2980.jpg',
      gallery: [
        'https://images.unsplash.com/photo-1519225495810-7517c5a690b6?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'A sophisticated modern banquet hall equipped with dynamic color-wash lighting, high-fidelity sound layouts, and a dedicated culinary kitchen facility.',
      availability: 'Available'
    },
    {
      id: 'venue-3',
      name: 'Elite Convention Center',
      location: 'Westside',
      capacity: 1000,
      price: 250000,
      rating: 4.8,
      reviews: 140,
      ac: 'Centralized HVAC Air Conditioning',
      parking: '300 Cars & Valet Service',
      stage: '60ft x 25ft',
      seating: 'Theater, Banquet, Classroom Style',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1519225495810-7517c5a690b6?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'One of the city’s largest multi-purpose halls. Houses dual display screens, premium acoustic paneling, and massive parking spaces suitable for tradeshows and grand receptions.',
      availability: 'Available'
    },
    {
      id: 'venue-4',
      name: 'Garden Paradise Venue',
      location: 'Garden District',
      capacity: 350,
      price: 95000,
      rating: 4.6,
      reviews: 78,
      ac: 'Cooling Fans & Open Breeze (Non-AC)',
      parking: '60 Cars',
      stage: '30ft x 15ft',
      seating: 'Outdoor Banquet, Cluster',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1519225495810-7517c5a690b6?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'An enchanting open-air venue decorated with surrounding lush lawns, floral pergolas, and gorgeous romantic fairy light pathways.',
      availability: 'Booked'
    },
    {
      id: 'venue-5',
      name: 'Luxury Wedding Arena',
      location: 'Downtown',
      capacity: 800,
      price: 220000,
      rating: 4.9,
      reviews: 188,
      ac: 'Fully Air Conditioned',
      parking: '200 Cars',
      stage: '50ft x 24ft',
      seating: 'Theater, Banquet, Cluster',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'A stellar architectural venue configured with expansive red carpet aisles, gorgeous overhead drapings, and customizable luxury floral stages.',
      availability: 'Available'
    }
  ];

  // Active user selection state
  let currentSelection = {
    venue: venuesData[0],
    date: '',
    guests: 150,
    decor: {
      theme: 'Traditional',
      color: 'Red + Gold',
      flower: 'Roses',
      stage: 'Basic',
      price: 70000
    },
    catering: {
      selectedItems: [],
      pricePerPlate: 0,
      totalPrice: 0
    },
    alliedServices: []
  };

  // ==========================================
  // DARK / LIGHT THEME TOGGLE
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Set theme from local storage
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const moon = themeToggle.querySelector('.fa-moon');
    const sun = themeToggle.querySelector('.fa-sun');
    if (theme === 'dark') {
      moon.style.display = 'none';
      sun.style.display = 'block';
    } else {
      moon.style.display = 'block';
      sun.style.display = 'none';
    }
  }

  // ==========================================
  // RESPONSIVE MOBILE NAVIGATION
  // ==========================================
 const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

  

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    });
  });

  // Smooth scroll and active status
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================
  // HERO IMAGE CAROUSEL
  // ==========================================
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const slideInterval = 5000;

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(nextSlide, slideInterval);

  // ==========================================
  // HALL SEARCH & AVAILABILITY CHECKER
  // ==========================================
  const searchForm = document.getElementById('search-form');
  const searchResultDisplay = document.getElementById('search-result-display');
  const searchResultText = document.getElementById('search-result-text');
  const searchBookBtn = document.getElementById('search-book-btn');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = document.getElementById('search-location').value;
    const type = document.getElementById('search-event-type').value;
    const dateInput = document.getElementById('search-date').value;
    const guests = parseInt(document.getElementById('search-guests').value);

    // Save search details into state
    currentSelection.date = dateInput;
    currentSelection.guests = guests;
    document.getElementById('booking-confirm-date').value = dateInput;
    document.getElementById('booking-confirm-guests').value = guests;

    // Check if we have matching venues in location & capacity limits
    const matchedVenues = venuesData.filter(v => 
      v.location === location && v.capacity >= guests
    );

    searchResultDisplay.style.display = 'flex';
    searchResultDisplay.className = 'search-result'; // reset classes

    if (matchedVenues.length > 0) {
      // Find first available venue
      const available = matchedVenues.find(v => v.availability === 'Available');
      
      if (available) {
        searchResultDisplay.classList.add('available');
        searchResultText.innerHTML = `✓ <strong>${available.name}</strong> is available in ${location} on ${dateInput} for ${guests} guests!`;
        searchBookBtn.style.display = 'inline-block';
        searchBookBtn.onclick = () => {
          openVenueDetails(available);
        };
      } else {
        searchResultDisplay.classList.add('booked');
        searchResultText.innerHTML = `✗ Venues in ${location} matching ${guests} guests are already booked on ${dateInput}. Please test another date!`;
        searchBookBtn.style.display = 'none';
      }
    } else {
      searchResultDisplay.classList.add('booked');
      searchResultText.innerHTML = `✗ No venues found in ${location} supporting a capacity of ${guests} guests.`;
      searchBookBtn.style.display = 'none';
    }
  });

  // ==========================================
  // FEATURED VENUES RENDER & FILTERING
  // ==========================================
  const venuesGrid = document.getElementById('venues-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderVenues(filter = 'all') {
    venuesGrid.innerHTML = '';
    const filtered = filter === 'all' ? venuesData : venuesData.filter(v => v.location === filter);

    filtered.forEach(venue => {
      const card = document.createElement('div');
      card.className = 'glass-card venue-card';
      
      const badgeClass = venue.availability === 'Available' ? 'badge-available' : 'badge-booked';
      const statusIcon = venue.availability === 'Available' ? '✓' : '✗';
      
      card.innerHTML = `
        <div class="venue-img-wrapper">
          <img src="${venue.image}" alt="${venue.name}" class="venue-img">
          <span class="venue-badge ${badgeClass}">${statusIcon} ${venue.availability}</span>
        </div>
        <div class="venue-info">
          <div class="venue-meta">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">${venue.location}</span>
            <div class="venue-rating"><i class="fa-solid fa-star"></i> ${venue.rating} <span>(${venue.reviews})</span></div>
          </div>
          <h3 class="venue-title">${venue.name}</h3>
          <p class="venue-loc"><i class="fa-solid fa-location-dot"></i> City Center, ${venue.location}</p>
          <div class="venue-specs">
            <div class="spec-item"><i class="fa-solid fa-users"></i> Capacity: ${venue.capacity}</div>
            <div class="spec-item"><i class="fa-solid fa-indian-rupee-sign"></i> Base Rent: ₹${venue.price.toLocaleString('en-IN')}</div>
          </div>
          <div class="venue-actions">
            <button class="btn btn-secondary view-details-btn" data-id="${venue.id}">View Details</button>
            <button class="btn btn-primary book-now-btn" data-id="${venue.id}" ${venue.availability === 'Booked' ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>Book Now</button>
          </div>
        </div>
      `;
      venuesGrid.appendChild(card);
    });

    // Add event listeners to newly created buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const venue = venuesData.find(v => v.id === id);
        openVenueDetails(venue);
      });
    });

    document.querySelectorAll('.book-now-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const venue = venuesData.find(v => v.id === id);
        openVenueDetails(venue);
        document.getElementById('booking-confirm-date').focus();
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderVenues(e.target.getAttribute('data-filter'));
    });
  });

  // Initial render
  renderVenues();

  // ==========================================
  // VENUE DETAILS MODAL & SUMMARY LOGIC
  // ==========================================
  const modal = document.getElementById('venue-details-modal');
  const modalClose = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalLocText = document.getElementById('modal-location-text');
  const modalDesc = document.getElementById('modal-desc');
  const modalCapacity = document.getElementById('modal-capacity');
  const modalPrice = document.getElementById('modal-price');
  const modalAc = document.getElementById('modal-ac');
  const modalParking = document.getElementById('modal-parking');
  const modalStage = document.getElementById('modal-stage');
  const modalSeating = document.getElementById('modal-seating');
  const confirmGuestsInput = document.getElementById('booking-confirm-guests');
  const confirmDateInput = document.getElementById('booking-confirm-date');

  // Modal Gallery items
  const gal1 = document.getElementById('modal-gal-1');
  const gal2 = document.getElementById('modal-gal-2');
  const gal3 = document.getElementById('modal-gal-3');

  function openVenueDetails(venue) {
    currentSelection.venue = venue;
    
    modalImg.src = venue.image;
    modalTitle.textContent = venue.name;
    modalLocText.innerHTML = `<i class="fa-solid fa-location-dot"></i> City Center, ${venue.location}`;
    modalDesc.textContent = venue.description;
    modalCapacity.textContent = `${venue.capacity} Guests Max`;
    modalPrice.textContent = `₹${venue.price.toLocaleString('en-IN')}`;
    modalAc.textContent = venue.ac;
    modalParking.textContent = venue.parking;
    modalStage.textContent = venue.stage;
    modalSeating.textContent = venue.seating;

    // Load gallery
    gal1.src = venue.gallery[0];
    gal2.src = venue.gallery[1];
    gal3.src = venue.gallery[2];

    // Set initial confirm values from checker
    if (currentSelection.guests) {
      confirmGuestsInput.value = currentSelection.guests;
    } else {
      confirmGuestsInput.value = 150;
      currentSelection.guests = 150;
    }
    if (currentSelection.date) {
      confirmDateInput.value = currentSelection.date;
    }

    calculateModalSummary();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function calculateModalSummary() {
    const basePrice = currentSelection.venue.price;
    const tax = Math.round(basePrice * 0.18);
    const total = basePrice + tax;

    document.getElementById('summary-base-rent').textContent = `₹${basePrice.toLocaleString('en-IN')}`;
    document.getElementById('summary-taxes').textContent = `₹${tax.toLocaleString('en-IN')}`;
    document.getElementById('summary-grand-total').textContent = `₹${total.toLocaleString('en-IN')}`;
  }

  confirmGuestsInput.addEventListener('input', (e) => {
    currentSelection.guests = parseInt(e.target.value) || 0;
  });

  confirmDateInput.addEventListener('change', (e) => {
    currentSelection.date = e.target.value;
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Swap main modal photo with gallery thumbnails
  [gal1, gal2, gal3].forEach(img => {
    img.addEventListener('click', (e) => {
      modalImg.src = e.target.src;
    });
  });

  // ==========================================
  // DECORATION CONFIGURATOR
  // ==========================================
  const themeOpts = document.querySelectorAll('#theme-selector .option-card');
  const colorOpts = document.querySelectorAll('#color-selector .color-dot-opt');
  const flowerOpts = document.querySelectorAll('#flower-selector .option-card');
  const stageOpts = document.querySelectorAll('#stage-selector .option-card');
  
  const decoTotalPrice = document.getElementById('deco-total-price');
  const decoSummaryText = document.getElementById('deco-summary-text');
  const decoVisualPanel = document.getElementById('deco-visual-panel');
  const decoOverlay = document.getElementById('deco-overlay');

  // Decorative overlays colors mapping
  const colorOverlayMap = {
    'Red + Gold': 'rgba(220, 38, 38, 0.2)',
    'White + Gold': 'rgba(251, 191, 36, 0.15)',
    'Purple + Silver': 'rgba(124, 58, 237, 0.2)',
    'Pink + White': 'rgba(236, 72, 153, 0.2)',
    'Blue + White': 'rgba(59, 130, 246, 0.2)'
  };

  // Decorative backgrounds matching themes
  const themeBackgroundMap = {
    'Traditional': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    'Royal': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    'Floral': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    'Luxury': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    'Modern': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    'Custom': 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
  };

  function updateDecoPrice() {
    let price = 0;
    
    // Find active elements
    const activeTheme = document.querySelector('#theme-selector .option-card.active');
    const activeColor = document.querySelector('#color-selector .color-dot-opt.active');
    const activeFlower = document.querySelector('#flower-selector .option-card.active');
    const activeStage = document.querySelector('#stage-selector .option-card.active');

    price += parseInt(activeTheme.getAttribute('data-price'));
    price += parseInt(activeFlower.getAttribute('data-price'));
    price += parseInt(activeStage.getAttribute('data-price'));

    const themeVal = activeTheme.getAttribute('data-val');
    const colorVal = activeColor.getAttribute('data-val');
    const flowerVal = activeFlower.getAttribute('data-val');
    const stageVal = activeStage.getAttribute('data-val');

    // Save in state
    currentSelection.decor = {
      theme: themeVal,
      color: colorVal,
      flower: flowerVal,
      stage: stageVal,
      price: price
    };

    decoTotalPrice.textContent = `₹${price.toLocaleString('en-IN')}`;
    decoSummaryText.innerHTML = `<strong>${themeVal} Theme</strong> in <strong>${colorVal}</strong> featuring <strong>${flowerVal}</strong> & <strong>${stageVal} Stage Backdrop</strong>.`;
    
    // Visual changes
    decoOverlay.style.backgroundColor = colorOverlayMap[colorVal] || 'rgba(0,0,0,0.1)';
    decoVisualPanel.style.backgroundImage = `url('${themeBackgroundMap[themeVal]}')`;
  }

  // Setup click triggers
  setupSelectTrigger(themeOpts, updateDecoPrice);
  setupSelectTrigger(colorOpts, updateDecoPrice);
  setupSelectTrigger(flowerOpts, updateDecoPrice);
  setupSelectTrigger(stageOpts, updateDecoPrice);

  function setupSelectTrigger(elements, callback) {
    elements.forEach(el => {
      el.addEventListener('click', (e) => {
        const item = e.currentTarget;
        elements.forEach(opt => opt.classList.remove('active'));
        item.classList.add('active');
        callback();
      });
    });
  }

  // Initial call
  updateDecoPrice();

  // Apply decoration to invoice confirmation
  const applyDecoBtn = document.getElementById('apply-deco-btn');
  applyDecoBtn.addEventListener('click', () => {
    alert(`Applied! Decoration customizer set: ${currentSelection.decor.theme} - ${currentSelection.decor.color} (₹${currentSelection.decor.price.toLocaleString('en-IN')})`);
  });

  // ==========================================
  // CATERING DYNAMIC COST CALCULATOR
  // ==========================================
  const cateringGuestsSlider = document.getElementById('catering-guests');
  const cateringGuestsVal = document.getElementById('catering-guests-val');
  const cateringTotalDisplay = document.getElementById('catering-total-price');
  const caterInfoLabel = document.getElementById('cater-info-label');
  const applyCateringBtn = document.getElementById('apply-catering-btn');

  function calculateCatering() {
    const guests = parseInt(cateringGuestsSlider.value);
    cateringGuestsVal.textContent = guests;
    
    // Sum prices of checked menu items
    let plateCost = 0;
    const selectedList = [];
    const checkedItems = document.querySelectorAll('.menu-item input[type="checkbox"]:checked');
    
    checkedItems.forEach(box => {
      const parent = box.closest('.menu-item');
      parent.classList.add('selected');
      plateCost += parseInt(parent.getAttribute('data-price'));
      selectedList.push(box.value);
    });

    // Unselect parent for unchecked boxes
    document.querySelectorAll('.menu-item input[type="checkbox"]:not(:checked)').forEach(box => {
      box.closest('.menu-item').classList.remove('selected');
    });

    const totalCost = plateCost * guests;
    
    currentSelection.catering = {
      selectedItems: selectedList,
      pricePerPlate: plateCost,
      totalPrice: totalCost
    };

    cateringTotalDisplay.textContent = `₹${totalCost.toLocaleString('en-IN')}`;

    if (selectedList.length > 0) {
      caterInfoLabel.innerHTML = `<strong>₹${plateCost}</strong> per plate x <strong>${guests}</strong> guests.<br>${selectedList.slice(0, 3).join(', ')}${selectedList.length > 3 ? '...' : ''}`;
    } else {
      caterInfoLabel.textContent = 'Select at least one item from Veg/Non-Veg lists.';
      cateringTotalDisplay.textContent = '₹0';
    }
  }

  cateringGuestsSlider.addEventListener('input', calculateCatering);
  document.querySelectorAll('.menu-item input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', calculateCatering);
    // Allow clicking item block to check/uncheck
    box.closest('.menu-item').addEventListener('click', (e) => {
      if (e.target !== box) {
        box.checked = !box.checked;
        calculateCatering();
      }
    });
  });

  applyCateringBtn.addEventListener('click', () => {
    if (currentSelection.catering.selectedItems.length === 0) {
      alert('Please select at least one catering item before applying!');
      return;
    }
    alert(`Applied! Catering set for ${cateringGuestsSlider.value} guests at ₹${currentSelection.catering.pricePerPlate}/plate (Total: ₹${currentSelection.catering.totalPrice.toLocaleString('en-IN')})`);
  });

  // ==========================================
  // EVENT BUDGET CALCULATOR
  // ==========================================
  const budgetForm = document.getElementById('budget-plan-form');
  const budgetAlertBox = document.getElementById('budget-alert-box');

  budgetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetBudget = parseInt(document.getElementById('budget-amount').value) || 0;
    const guestsCount = parseInt(document.getElementById('budget-guests').value) || 0;
    const eventType = document.getElementById('budget-event-type').value;

    // Standard startup cost allocations template:
    // Hall (35%), Decor (15%), Catering (30%), Photo (12%), DJ (8%)
    const hallVal = Math.round(targetBudget * 0.35);
    const decorVal = Math.round(targetBudget * 0.15);
    const caterVal = Math.round(targetBudget * 0.30);
    const photoVal = Math.round(targetBudget * 0.12);
    const djVal = Math.round(targetBudget * 0.08);

    const totalAlloc = hallVal + decorVal + caterVal + photoVal + djVal;

    // Display values
    document.getElementById('budget-hall-cost').textContent = `₹${hallVal.toLocaleString('en-IN')}`;
    document.getElementById('budget-decor-cost').textContent = `₹${decorVal.toLocaleString('en-IN')}`;
    document.getElementById('budget-catering-cost').textContent = `₹${caterVal.toLocaleString('en-IN')}`;
    document.getElementById('budget-photo-cost').textContent = `₹${photoVal.toLocaleString('en-IN')}`;
    document.getElementById('budget-dj-cost').textContent = `₹${djVal.toLocaleString('en-IN')}`;
    document.getElementById('budget-total-alloc').textContent = `₹${totalAlloc.toLocaleString('en-IN')}`;

    // Animating the allocation bars
    animateBar('bar-hall', 35);
    animateBar('bar-decor', 15);
    animateBar('bar-catering', 30);
    animateBar('bar-photo', 12);
    animateBar('bar-dj', 8);

    // Check availability matching
    const standardHallPrice = currentSelection.venue ? currentSelection.venue.price : 150000;
    
    budgetAlertBox.style.display = 'block';
    if (hallVal >= standardHallPrice) {
      budgetAlertBox.className = 'budget-alert surplus';
      budgetAlertBox.innerHTML = `✓ Healthy Budget! Your allocated Hall Budget (₹${hallVal.toLocaleString('en-IN')}) is sufficient to book the <strong>${currentSelection.venue.name}</strong> (₹${standardHallPrice.toLocaleString('en-IN')}).`;
    } else {
      budgetAlertBox.className = 'budget-alert deficit';
      budgetAlertBox.innerHTML = `⚠ Tight Budget! Your allocated Hall Budget is ₹${hallVal.toLocaleString('en-IN')}, but the selected hall base rent is ₹${standardHallPrice.toLocaleString('en-IN')}. Consider upgrading your target capital or adjusting guest count.`;
    }
  });

  function animateBar(id, percent) {
    const bar = document.getElementById(id);
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = `${percent}%`;
    }, 100);
  }

  // ==========================================
  // ALLIED SERVICE PROVIDERS SELECTION
  // ==========================================
  const addServiceBtns = document.querySelectorAll('.add-service-btn');
  addServiceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.target.getAttribute('data-name');
      const price = parseInt(e.target.getAttribute('data-price'));

      const index = currentSelection.alliedServices.findIndex(s => s.name === name);
      if (index > -1) {
        // Remove service
        currentSelection.alliedServices.splice(index, 1);
        e.target.textContent = 'Book Service';
        e.target.classList.add('btn-outline');
        e.target.classList.remove('btn-primary');
      } else {
        // Add service
        currentSelection.alliedServices.push({ name, price });
        e.target.textContent = '✓ Added to Booking';
        e.target.classList.remove('btn-outline');
        e.target.classList.add('btn-primary');
      }
    });
  });

  // ==========================================
  // EVENT GALLERY LIGHTBOX
  // ==========================================
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-img');
      const h3 = item.querySelector('.gallery-hover-overlay h3').textContent;
      
      lightboxImg.src = img.src;
      lightboxCaption.textContent = h3;
      lightbox.classList.add('active');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // ==========================================
  // TESTIMONIALS AUTO-SLIDING CAROUSEL
  // ==========================================
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.carousel-dot');
  let activeTestimonial = 0;
  const testimonialInterval = 6000;

  function showTestimonial(index) {
    testimonialSlides.forEach(s => s.classList.remove('active'));
    testimonialDots.forEach(d => d.classList.remove('active'));

    testimonialSlides[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    activeTestimonial = index;
  }

  function nextTestimonial() {
    const nextIdx = (activeTestimonial + 1) % testimonialSlides.length;
    showTestimonial(nextIdx);
  }

  let testTimer = setInterval(nextTestimonial, testimonialInterval);

  testimonialDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      clearInterval(testTimer);
      const index = parseInt(e.target.getAttribute('data-index'));
      showTestimonial(index);
      testTimer = setInterval(nextTestimonial, testimonialInterval);
    });
  });

  // ==========================================
  // STATISTICS ANIMATED COUNTER
  // ==========================================
  const statsSection = document.getElementById('stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const countOptions = {
    threshold: 0.5
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-target'));
          animateCounter(num, target);
        });
        animated = true;
        observer.unobserve(statsSection);
      }
    });
  }, countOptions);

  statsObserver.observe(statsSection);

  function animateCounter(element, target) {
    let start = 0;
    const duration = 2000; // ms
    const stepTime = Math.abs(Math.floor(duration / target));
    
    // adjust steps for large numbers
    const increment = target > 1000 ? Math.ceil(target / 100) : 1;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target.toLocaleString('en-IN') + '+';
        clearInterval(timer);
      } else {
        element.textContent = start.toLocaleString('en-IN') + '+';
      }
    }, stepTime > 15 ? stepTime : 15);
  }

  // ==========================================
  // FAQ ACCORDION
  // ==========================================
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const parent = q.closest('.faq-item');
      
      // Close other accordions
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== parent) {
          item.classList.remove('active');
        }
      });

      parent.classList.toggle('active');
    });
  });

  // ==========================================
  // SCROLL REVEAL ANIMATIONS
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // BOOKING SUCCESS & RECEIPT DOWNLOAD
  // ==========================================
  const modalBookingForm = document.getElementById('modal-booking-form');
  const receiptModal = document.getElementById('receipt-modal');
  const receiptClose = document.getElementById('receipt-modal-close');
  const downloadReceiptBtn = document.getElementById('download-receipt-btn');
  const downloadInvoiceTrigger = document.getElementById('download-invoice-trigger');

  modalBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const dateVal = confirmDateInput.value;
    const guestsVal = confirmGuestsInput.value;
    
    if (!dateVal) {
      alert('Please select a valid booking date!');
      return;
    }

    // Capture states
    const invoiceId = `INV-${Math.floor(1000 + Math.random() * 9000)}-2026`;
    document.getElementById('invoice-id').textContent = invoiceId;
    document.getElementById('rec-venue').textContent = currentSelection.venue.name;
    document.getElementById('rec-date').textContent = new Date(dateVal).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('rec-guests').textContent = `${guestsVal} Guests`;

    // Decor Details
    document.getElementById('rec-decor').textContent = `${currentSelection.decor.theme} - ${currentSelection.decor.color} Stage: ${currentSelection.decor.stage}`;

    // Catering Details
    const cateringText = currentSelection.catering.selectedItems.length > 0 
      ? currentSelection.catering.selectedItems.join(', ') 
      : 'No catering requested';
    document.getElementById('rec-catering').textContent = cateringText;

    // Math calculation
    const baseRent = currentSelection.venue.price;
    const decorCost = currentSelection.decor.price;
    const caterCost = currentSelection.catering.totalPrice || 0;
    
    // Add services cost
    const servicesCost = currentSelection.alliedServices.reduce((sum, item) => sum + item.price, 0);

    const subtotal = baseRent + decorCost + caterCost + servicesCost;
    const tax = Math.round(subtotal * 0.18);
    const grandTotal = subtotal + tax;

    document.getElementById('rec-total').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    // Close venue details modal and open success modal
    modal.classList.remove('active');
    receiptModal.classList.add('active');

    // Show inline invoice receipt button on details box for reference
    downloadReceiptBtn.style.display = 'inline-block';
    
    // Setup detail receipt trigger
    downloadReceiptBtn.onclick = () => {
      receiptModal.classList.add('active');
    };
  });

  receiptClose.addEventListener('click', () => {
    receiptModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Receipts PDF/HTML Downloader
  downloadInvoiceTrigger.addEventListener('click', () => {
    const invoiceContent = document.getElementById('booking-invoice-card').outerHTML;
    const invoiceStyles = `
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; background: #f3f4f6; color: #111827; }
        .invoice-card { background: white; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 12px; border: 2px dashed #7c3aed; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        h4 { margin: 0 0 5px 0; color: #7c3aed; font-size: 1.4rem; }
        .paid-tag { background: #d1fae5; color: #065f46; padding: 4px 10px; border-radius: 99px; font-size: 0.8rem; font-weight: bold; }
        .row { display: flex; justify-content: space-between; border-bottom: 1px solid #e5e7eb; padding: 12px 0; }
        .footer-total { font-weight: bold; font-size: 1.25rem; color: #111827; margin-top: 20px; border-top: 2px solid #e5e7eb; padding-top: 15px; }
      </style>
    `;

    const htmlDoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Receipt - EventNest Booking</title>
        ${invoiceStyles}
      </head>
      <body>
        <div class="invoice-card">
          ${invoiceContent}
          <div style="margin-top: 30px; text-align: center; font-size: 0.8rem; color: #6b7280;">
            Thank you for booking with EventNest. Plan. Book. Celebrate.
          </div>
        </div>
      </body>
      </html>
    `;

    // Download file blob
    const blob = new Blob([htmlDoc], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EventNest_Receipt_${document.getElementById('invoice-id').textContent}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Booking receipt downloaded successfully! Open the HTML file to print/save as PDF.');
  });

  // ==========================================
  // AI EVENT PLANNING ASSISTANT CHATBOT
  // ==========================================
  const chatToggle = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chatbot-box');
  const closeChat = document.getElementById('close-chat');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');
  const suggestBtns = document.querySelectorAll('.chat-suggest-btn');

  chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('active');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });

  closeChat.addEventListener('click', () => {
    chatBox.classList.remove('active');
  });

  chatSend.addEventListener('click', () => {
    handleUserMessage();
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleUserMessage();
    }
  });

  // Handle Preset pill triggers
  suggestBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const query = e.target.getAttribute('data-query');
      addUserMessage(query);
      generateBotResponse(query);
    });
  });

  function handleUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    addUserMessage(text);
    chatInput.value = '';
    generateBotResponse(text);
  }

  function addUserMessage(message) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.textContent = message;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function generateBotResponse(userInput) {
    // Show bot typing bubble
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble bot';
    typingBubble.innerHTML = '<i class="fa-solid fa-ellipsis fa-bounce"></i> NestBot is planning...';
    chatMessages.appendChild(typingBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const query = userInput.toLowerCase();
    let reply = '';

    setTimeout(() => {
      // Remove typing indicator
      typingBubble.remove();

      // Rule based response
      if (query.includes('wedding') || query.includes('marriage')) {
        reply = `For standard weddings, we highly recommend the <strong>Royal Palace Hall</strong> (capacity up to 600) or the <strong>Luxury Wedding Arena</strong>. They both support beautiful custom floral drapes, staging, and have spacious parking spaces.`;
      } else if (query.includes('budget') || query.includes('calculator') || query.includes('money')) {
        reply = `Our Event Budget Planner allocates your total budget into: <strong>Hall Rent (35%)</strong>, <strong>Decorations (15%)</strong>, <strong>Catering (30%)</strong>, <strong>Photography (12%)</strong>, and <strong>DJ/Sound (8%)</strong>. Try adjusting figures in the Budget section!`;
      } else if (query.includes('ac') || query.includes('air conditioning')) {
        reply = `Most of our premium venues are fully air-conditioned, including <strong>Royal Palace Hall</strong>, <strong>Grand Banquet</strong>, and <strong>Elite Convention Center</strong>. <em>Garden Paradise</em> is our open-air garden lawn and uses natural wind cooling.`;
      } else if (query.includes('price') || query.includes('cost') || query.includes('how much')) {
        reply = `Halls start from ₹95,000 (Garden Paradise) up to ₹2,50,000 (Elite Convention Center). Our catering is charged per plate based on checked delicacies. You can configure decor themes (Traditional start at ₹45K) to view real costs!`;
      } else if (query.includes('capacity') || query.includes('guest') || query.includes('people')) {
        reply = `We can host events of any size! <strong>Garden Paradise</strong> is perfect for intimate gatherings up to 350, whereas the massive <strong>Elite Convention Center</strong> can seat up to 1000 guests in banquet layouts.`;
      } else if (query.includes('catering') || query.includes('food') || query.includes('menu')) {
        reply = `You can pick items from our Veg Menu (Paneer Masala: ₹180, Biryani: ₹200) and Non-Veg Menu (Chicken Biryani: ₹250, Mutton: ₹300). Adjust the catering slider to find the total plate charge.`;
      } else {
        reply = `That is a great question! EventNest helps you customize themes, catering plates, and service vendors. Let me know if you would like me to recommend a specific hall for your planned date!`;
      }

      const replyBubble = document.createElement('div');
      replyBubble.className = 'chat-bubble bot';
      replyBubble.innerHTML = reply;
      chatMessages.appendChild(replyBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }

  // ==========================================
  // CONTACT FORM SIMULATION
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for writing to EventNest! Our support coordinators will reach out to you within 2-4 hours with personalized rates.');
    contactForm.reset();
  });

});
