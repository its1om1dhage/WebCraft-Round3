// EventVerse 2025 - Main JavaScript File
// Handles all interactive functionality and dynamic content

// ============================================
// GLOBAL STATE AND UTILITIES
// ============================================

// Current filtered and sorted events
let currentEvents = [...eventsData];

// Mobile menu state
let mobileMenuOpen = false;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize navigation
    initNavigation();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initHomePage();
            break;
        case 'events':
            initEventsPage();
            break;
        case 'schedule':
            initSchedulePage();
            break;
        case 'contact':
            initContactPage();
            break;
    }
    
    // Initialize modal functionality (available on all pages)
    initModal();
    
    // Apply URL parameters if any
    applyUrlParameters();
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    
    if (page === '' || page === 'index.html') return 'index';
    if (page === 'events.html') return 'events';
    if (page === 'schedule.html') return 'schedule';
    if (page === 'contact.html') return 'contact';
    
    return 'index';
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenuOpen && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                toggleMobileMenu();
            }
        });
    }
    
    // Keyboard navigation support
    setupKeyboardNavigation();
}

function toggleMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        navMenu.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
}

function setupKeyboardNavigation() {
    // Allow Escape key to close mobile menu and modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mobileMenuOpen) {
                toggleMobileMenu();
            }
            const modal = document.getElementById('event-modal');
            if (modal && modal.style.display !== 'none') {
                closeModal();
            }
        }
    });
}

// ============================================
// HOME PAGE
// ============================================

function initHomePage() {
    // Load featured events
    loadFeaturedEvents();
    
    // Animate stats counter
    animateStats();
    
    // Smooth scroll for hero CTA
    setupSmoothScroll();
}

function loadFeaturedEvents() {
    const container = document.getElementById('featured-events-container');
    if (!container) return;
    
    const featuredEvents = getFeaturedEvents().slice(0, 6);
    
    container.innerHTML = '';
    featuredEvents.forEach(event => {
        container.appendChild(createEventCard(event));
    });
}

function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
                observer.unobserve(stat);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#register') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// EVENTS PAGE
// ============================================

function initEventsPage() {
    // Initialize slider
    initEventsSlider();
    
    // Load all events initially
    currentEvents = [...eventsData];
    renderEvents(currentEvents);
    
    // Setup filters
    setupEventFilters();
    
    // Update event count
    updateEventCount(currentEvents.length);
}

function setupEventFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    const resetButton = document.getElementById('reset-filters');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
    
    if (searchInput) {
        // Debounce search input
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(applyFilters, 300);
        });
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', resetFilters);
    }
}

function applyFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    
    let filtered = [...eventsData];
    
    // Apply category filter
    if (categoryFilter && categoryFilter.value !== 'all') {
        filtered = getEventsByCategory(categoryFilter.value);
    }
    
    // Apply date filter
    if (dateFilter && dateFilter.value !== 'all') {
        filtered = filtered.filter(event => event.date === dateFilter.value);
    }
    
    // Apply search filter
    if (searchInput && searchInput.value.trim() !== '') {
        const query = searchInput.value.trim().toLowerCase();
        filtered = filtered.filter(event => 
            event.title.toLowerCase().includes(query) ||
            event.description.toLowerCase().includes(query) ||
            event.category.toLowerCase().includes(query)
        );
    }
    
    // Apply sorting
    if (sortFilter) {
        filtered = sortEvents(filtered, sortFilter.value);
    }
    
    currentEvents = filtered;
    renderEvents(currentEvents);
    updateEventCount(currentEvents.length);
}

function resetFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) categoryFilter.value = 'all';
    if (dateFilter) dateFilter.value = 'all';
    if (sortFilter) sortFilter.value = 'name';
    if (searchInput) searchInput.value = '';
    
    applyFilters();
}

function renderEvents(events) {
    const container = document.getElementById('events-container');
    const noResults = document.getElementById('no-results');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (events.length === 0) {
        if (noResults) {
            noResults.style.display = 'block';
        }
        return;
    }
    
    if (noResults) {
        noResults.style.display = 'none';
    }
    
    events.forEach(event => {
        container.appendChild(createEventCard(event));
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    
    card.innerHTML = `
        <div class="event-image">
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <span class="event-category">${event.category}</span>
        </div>
        <div class="event-content">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-meta">
                <span class="event-date">📅 ${formatDate(event.date)}</span>
                <span class="event-prize">🏆 ${event.prize}</span>
            </div>
        </div>
    `;
    
    // Make card clickable
    card.addEventListener('click', () => openEventModal(event.id));
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openEventModal(event.id);
        }
    });
    
    return card;
}

function updateEventCount(count) {
    const countElement = document.getElementById('event-count');
    if (countElement) {
        countElement.textContent = count;
    }
}

// ============================================
// SCHEDULE PAGE
// ============================================

function initSchedulePage() {
    // Setup day tabs
    setupDayTabs();
    
    // Load schedules for all days
    loadSchedule('2025-03-15', 'timeline-day1');
    loadSchedule('2025-03-16', 'timeline-day2');
    loadSchedule('2025-03-17', 'timeline-day3');
    loadSchedule('all', 'timeline-all');
}

function setupDayTabs() {
    const tabs = document.querySelectorAll('.day-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => switchDay(tab));
        tab.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                switchDay(tab);
            }
        });
    });
    
    // Arrow key navigation for tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && index > 0) {
                tabs[index - 1].focus();
                switchDay(tabs[index - 1]);
            } else if (e.key === 'ArrowRight' && index < tabs.length - 1) {
                tabs[index + 1].focus();
                switchDay(tabs[index + 1]);
            }
        });
    });
}

function switchDay(selectedTab) {
    // Update tabs
    const tabs = document.querySelectorAll('.day-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
    });
    
    selectedTab.classList.add('active');
    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.setAttribute('tabindex', '0');
    
    // Update panels
    const panels = document.querySelectorAll('.timeline-panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
        panel.setAttribute('hidden', '');
    });
    
    const targetPanel = document.getElementById(selectedTab.getAttribute('aria-controls'));
    if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.removeAttribute('hidden');
    }
}

function loadSchedule(date, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let events;
    if (date === 'all') {
        events = sortEvents([...eventsData], 'date');
    } else {
        events = sortEvents(getEventsByDate(date), 'date');
    }
    
    container.innerHTML = '';
    
    if (events.length === 0) {
        container.innerHTML = '<p class="no-events">No events scheduled for this day.</p>';
        return;
    }
    
    events.forEach(event => {
        container.appendChild(createTimelineItem(event));
    });
}

function createTimelineItem(event) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('tabindex', '0');
    
    const endTimeDisplay = event.endTime ? ` - ${formatTime(event.endTime)}` : '';
    
    item.innerHTML = `
        <div class="timeline-time">${formatTime(event.time)}${endTimeDisplay}</div>
        <h3 class="timeline-event-title">${event.title}</h3>
        <span class="timeline-event-category">${event.category}</span>
        <p class="timeline-event-venue">📍 ${event.venue}</p>
    `;
    
    item.addEventListener('click', () => openEventModal(event.id));
    item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openEventModal(event.id);
        }
    });
    
    return item;
}

// ============================================
// CONTACT PAGE
// ============================================

function initContactPage() {
    // Setup registration form
    setupRegistrationForm();
    
    // Scroll to registration if hash is present
    if (window.location.hash === '#register') {
        setTimeout(() => {
            const registerSection = document.getElementById('register');
            if (registerSection) {
                registerSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

function setupRegistrationForm() {
    const form = document.getElementById('registration-form');
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    field.classList.remove('error');
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Specific validation based on field type
    if (field.value.trim() && field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    if (field.value.trim() && field.type === 'tel') {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid 10-digit phone number';
        }
    }
    
    if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
        isValid = false;
        errorMessage = 'You must agree to the terms and conditions';
    }
    
    if (field.tagName === 'SELECT' && field.hasAttribute('multiple') && field.hasAttribute('required')) {
        const selectedOptions = Array.from(field.selectedOptions);
        if (selectedOptions.length === 0) {
            isValid = false;
            errorMessage = 'Please select at least one event';
        }
    }
    
    // Display error if invalid
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
    }
    
    return isValid;
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isFormValid = true;
    
    // Validate all fields
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        // Focus first error field
        const firstError = form.querySelector('.error');
        if (firstError) {
            firstError.focus();
        }
        return;
    }
    
    // Form is valid - show success message
    showSuccessMessage();
}

function showSuccessMessage() {
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');
    
    if (form && successMessage) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Announce to screen readers
        successMessage.setAttribute('role', 'alert');
        successMessage.setAttribute('aria-live', 'polite');
    }
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

function initModal() {
    const modal = document.getElementById('event-modal');
    if (!modal) return;
    
    const closeButton = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
    
    // Trap focus in modal
    modal.addEventListener('keydown', trapModalFocus);
}

function openEventModal(eventId) {
    const event = getEventById(eventId);
    if (!event) return;
    
    const modal = document.getElementById('event-modal');
    if (!modal) return;
    
    // Populate modal content
    document.getElementById('modal-title').textContent = event.title;
    document.querySelector('.modal-event-category').textContent = event.category;
    
    const modalImg = document.getElementById('modal-event-img');
    modalImg.src = event.image;
    modalImg.alt = event.title;
    
    const dateTime = `${formatDate(event.date)}, ${formatTime(event.time)}`;
    document.getElementById('modal-event-datetime').textContent = dateTime;
    document.getElementById('modal-event-venue').textContent = event.venue;
    document.getElementById('modal-event-prize').textContent = event.prize;
    
    const description = event.fullDescription || event.description;
    document.getElementById('modal-event-desc').textContent = description;
    
    // Populate rules
    const rulesContainer = document.getElementById('modal-event-rules');
    if (event.rules && event.rules.length > 0) {
        const rulesList = document.createElement('ul');
        event.rules.forEach(rule => {
            const li = document.createElement('li');
            li.textContent = rule;
            rulesList.appendChild(li);
        });
        rulesContainer.innerHTML = '';
        rulesContainer.appendChild(rulesList);
    } else {
        rulesContainer.innerHTML = '<p>Rules will be announced soon.</p>';
    }
    
    // Populate contact
    document.getElementById('modal-event-contact').textContent = event.contact;
    
    // Show modal
    modal.style.display = 'flex';
    
    // Focus on close button for accessibility
    setTimeout(() => {
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.focus();
        }
    }, 100);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('event-modal');
    if (!modal) return;
    
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function trapModalFocus(e) {
    const modal = document.getElementById('event-modal');
    if (!modal || modal.style.display === 'none') return;
    
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }
}

// ============================================
// URL PARAMETERS
// ============================================

function applyUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category && document.getElementById('category-filter')) {
        document.getElementById('category-filter').value = category;
        applyFilters();
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Announce to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// ACCESSIBILITY - Screen Reader Only Class
// ============================================

// Add CSS for screen reader only content
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

// ============================================
// EVENTS PAGE SLIDER
// ============================================

function initEventsSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;

    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Button events
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-play slider
    let autoPlayInterval = setInterval(nextSlide, 4000);

    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        sliderContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 4000);
        });
    }
}

