# EventVerse 2025 - Tech Fest Event Portal

![EventVerse Logo](https://via.placeholder.com/800x200/0a0a1a/00f0ff?text=EventVerse+2025)

## 🚀 Project Overview

**EventVerse** is a dynamic and responsive event information website for a college tech fest. The portal serves as the central hub for all fest-related information, designed with a modern cyberpunk aesthetic to maximize participant engagement and reduce organizational friction.

### Live Demo
🔗 [View Live Site](#) <!-- Add your deployment URL here -->

### Repository
📦 [GitHub Repository](https://github.com/its1om1dhage/WebCraft-Round3)

---

## ✨ Features

### Core Functionality

#### 1. **Home Page & Hero Section**
- Stunning cyberpunk-themed hero section with animated elements
- High-impact visual design with floating particles and grid overlay
- Clear Call-to-Action buttons for exploring events and viewing schedules
- Fest introduction highlighting theme, dates, and main attractions
- Animated statistics counter showing fest highlights
- Featured events showcase

#### 2. **Events Catalog**
- Comprehensive listing of all tech fest events (20+ events)
- **Advanced Filtering:**
  - Category filter (Technical, Cultural, Gaming, Workshops)
  - Date filter (Day 1, Day 2, Day 3)
  - Real-time search functionality
- **Sorting Options:**
  - Sort by Name (A-Z)
  - Sort by Date & Time
  - Sort by Prize Pool
- Interactive event cards with hover effects
- Event categories: Technical, Cultural, Gaming, Workshops

#### 3. **Detailed Event View (Modal)**
- Click any event card to open detailed modal
- Complete event information:
  - Full description and rules
  - Prize pool information
  - Date, time, and venue
  - Specific registration link
  - Contact person details
- Keyboard accessible (Escape to close, Tab navigation)
- Click outside to close functionality

#### 4. **Interactive Schedule Page**
- Day-wise tabbed schedule layout
- Interactive timeline visualization
- Filter events by day (Day 1, Day 2, Day 3, All Days)
- Chronological event display
- Click timeline items to view event details
- Keyboard navigation support (Arrow keys)

#### 5. **Contact & Registration**
- Contact information with organizer details
- Embedded Google Maps for location
- **Complete Registration Form with:**
  - Client-side validation
  - Real-time error messages
  - Email format validation
  - Phone number validation (10 digits)
  - Required field checks
  - Multiple event selection
  - Success message on submission
- Accessible form with ARIA labels

---

## 🎨 Design Theme

### Cyberpunk UI / Digital Frontier Aesthetic

**Color Palette:**
- Primary: Cyan (`#00f0ff`) - High-tech glow
- Secondary: Magenta (`#ff00ff`) - Energy and innovation
- Accent: Yellow (`#ffff00`) - Highlights and warnings
- Background: Dark navy (`#0a0a1a`) - Deep space feel
- Text: White/Light gray - High contrast for readability

**Visual Elements:**
- Animated grid overlay background
- Floating particles effect
- Glitch text animations on headings
- Neon glow effects on interactive elements
- Card-based layouts with hover effects
- Smooth transitions and animations

---

## 🛠️ Technologies Used

### Allowed Technologies (As per requirements)
- **HTML5** - Semantic markup
- **CSS3** - Custom styling (no frameworks used)
- **Vanilla JavaScript** - All interactive functionality
- **No Frameworks** - Pure HTML/CSS/JS (React, Vue, Angular not used)
- **No Backend** - Fully client-side application
- **No UI Toolkits** - Custom components only

### Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

---

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance

#### Keyboard Navigation
- Full keyboard support throughout the site
- Tab navigation for all interactive elements
- Escape key to close modals and menus
- Arrow key navigation for schedule tabs
- Enter/Space to activate buttons and links
- Skip-to-content link for screen readers

#### Screen Reader Support
- Proper HTML5 semantic elements (`<nav>`, `<section>`, `<article>`)
- ARIA labels and roles where needed
- `aria-current` for active navigation
- `aria-expanded` for mobile menu state
- `aria-selected` for tab states
- `aria-live` regions for dynamic content
- `aria-describedby` for form error messages
- Alt text for all images

#### Visual Accessibility
- High contrast color scheme (Cyberpunk theme with 4.5:1+ contrast ratio)
- Readable font sizes (minimum 16px base)
- Focus indicators on all interactive elements
- No content relies solely on color
- Responsive text sizing with `clamp()`
- `prefers-reduced-motion` support for animations

#### Form Accessibility
- Clear labels for all form inputs
- Real-time validation with error messages
- Required field indicators
- Help text for complex inputs
- Error announcements for screen readers

---

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

### Mobile Features
- Hamburger menu navigation
- Touch-friendly button sizes (min 44px)
- Optimized layouts for small screens
- Stacked grid layouts on mobile
- Readable typography at all sizes
- Fast load times with optimized images

---

## 📂 Project Structure

```
WebCraft-Round3/
│
├── index.html              # Home page with hero section
├── events.html             # Events catalog with filters
├── schedule.html           # Interactive schedule timeline
├── contact.html            # Contact & registration page
│
├── css/
│   └── main.css           # All styling (1500+ lines)
│
├── js/
│   ├── events-data.js     # Event data structure (20 events)
│   └── main.js            # All JavaScript functionality
│
└── README.md              # Project documentation
```

---

## 🎯 Core Features Implementation

### 1. Event Filtering & Sorting
```javascript
// Filter by category, date, and search query
// Sort by name, date, or prize pool
// Real-time updates with debounced search
```

### 2. Interactive Modal System
```javascript
// Click event cards to view details
// Keyboard accessible (Esc to close)
// Focus trap for accessibility
// Dynamic content population
```

### 3. Form Validation
```javascript
// Client-side validation
// Real-time error messages
// Email and phone format validation
// Required field checks
// Success message on valid submission
```

### 4. Responsive Navigation
```javascript
// Mobile hamburger menu
// Smooth scroll for anchor links
// Keyboard navigation support
// Active page indicators
```

---

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/its1om1dhage/WebCraft-Round3.git
   cd WebCraft-Round3
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **View the site**
   - Navigate to `http://localhost:8000` (or the port shown)

### No Build Process Required
This is a static website - no compilation, bundling, or build steps needed!

---

## 🎨 Event Categories

### Technical Events (8 events)
- Code Hackathon - ₹1,00,000
- Robotics Challenge - ₹75,000
- Web Development Competition - ₹50,000
- Cyber Security CTF - ₹60,000
- Mobile App Development - ₹45,000
- Data Science Challenge - ₹55,000
- UI/UX Design Challenge - ₹40,000

### Gaming Events (4 events)
- BGMI Tournament - ₹80,000
- Valorant Championship - ₹70,000
- FIFA Tournament - ₹40,000
- Chess Championship - ₹35,000

### Cultural Events (4 events)
- Tech Talk Show - ₹30,000
- Tech Drama Competition - ₹40,000
- DJ Night - Free Entry
- Photography Contest - ₹25,000

### Workshops (4 events)
- AI/ML Workshop
- Blockchain Workshop
- UI/UX Design Workshop
- Cloud Computing Workshop
- IoT Workshop

**Total Prize Pool: ₹5,00,000+**

---

## 📊 Event Information Included

Each event contains:
- ✅ Title and Category
- ✅ Date, Time, and Venue
- ✅ Prize Pool Information
- ✅ Short and Full Descriptions
- ✅ Detailed Rules and Regulations
- ✅ Contact Person Details
- ✅ Registration Link
- ✅ Event Image

---

## 🎯 User Experience Goals

### Quick Information Access
- Reduce decision fatigue with clear navigation
- Consolidated event information in one place
- Fast filtering and search functionality

### Clarity & Accessibility
- High contrast design for readability
- Clear presentation of dates, rules, and locations
- Accessible to all users including those with disabilities

### Engagement & Value
- Showcase prize pools prominently
- Featured events highlighting main attractions
- Interactive elements to maintain interest

### Process Efficiency
- Quick registration process
- Immediate feedback on form submission
- Easy navigation between pages

---

## 🔍 Code Quality

### Best Practices
- ✅ Clean, readable, and well-structured code
- ✅ Consistent naming conventions
- ✅ Comprehensive code comments
- ✅ Modular JavaScript functions
- ✅ CSS organized by sections
- ✅ Semantic HTML throughout
- ✅ No inline styles or scripts
- ✅ Proper indentation and formatting

### Performance
- ✅ Optimized images (using placeholders)
- ✅ Minimal DOM manipulation
- ✅ Debounced search input
- ✅ Lazy loading for images
- ✅ Efficient event listeners
- ✅ CSS animations with GPU acceleration

---

## 🌐 Deployment Guide

### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select main branch as source
4. Save and wait for deployment
5. Access at: `https://its1om1dhage.github.io/WebCraft-Round3/`

### Netlify
1. Connect GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/`
4. Deploy!

### Vercel
1. Import GitHub repository
2. Framework Preset: Other
3. Deploy!

---

## 📝 Event Schedule

### Day 1 - March 15, 2025
- Code Hackathon (09:00 - 18:00)
- AI/ML Workshop (14:00 - 17:00)
- Mobile App Development (11:00 - 17:00)
- BGMI Tournament (10:00 - 18:00)
- Chess Championship (09:00 - 17:00)
- Photography Contest (08:00 - 18:00)
- UI/UX Design Workshop (10:00 - 13:00)
- UI/UX Design Challenge (13:00 - 18:00)

### Day 2 - March 16, 2025
- Robotics Challenge (10:00 - 16:00)
- Web Development Competition (09:00 - 15:00)
- Valorant Championship (11:00 - 19:00)
- Tech Talk Show (15:00 - 18:00)
- Blockchain Workshop (10:00 - 13:00)
- IoT Workshop (14:00 - 17:00)

### Day 3 - March 17, 2025
- Cyber Security CTF (10:00 - 16:00)
- FIFA Tournament (10:00 - 16:00)
- Tech Drama Competition (14:00 - 18:00)
- DJ Night (19:00 - 23:00)
- Cloud Computing Workshop (09:00 - 12:00)
- Data Science Challenge (09:00 - 15:00)

---

## 👥 Key Organizers

- **Dr. Rajesh Kumar** - Event Coordinator
  - 📧 rajesh.kumar@eventverse.edu
  - 📞 +91 98765 43211

- **Priya Sharma** - Technical Events Head
  - 📧 priya.sharma@eventverse.edu
  - 📞 +91 98765 43212

- **Amit Patel** - Registration & Logistics
  - 📧 amit.patel@eventverse.edu
  - 📞 +91 98765 43213

---

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Advanced HTML5 semantic markup
- ✅ Complex CSS layouts and animations
- ✅ Vanilla JavaScript DOM manipulation
- ✅ Event handling and delegation
- ✅ Form validation techniques
- ✅ Accessibility best practices (WCAG 2.1)
- ✅ Responsive web design
- ✅ User experience optimization
- ✅ Code organization and documentation

---

## 📈 Innovation & Effort

### Unique Features
- **Custom cyberpunk theme** with neon glow effects
- **Animated particle system** for visual appeal
- **Interactive timeline** for schedule visualization
- **Advanced filtering** with multiple parameters
- **Real-time search** with debouncing
- **Modal system** with focus trapping
- **Keyboard navigation** throughout
- **Form validation** with immediate feedback

### Technical Challenges Solved
- Complex event filtering and sorting logic
- Accessible modal with focus management
- Responsive design across all devices
- Smooth animations with performance optimization
- Dynamic content rendering without frameworks

---

## 📜 License

This project is created for educational purposes as part of the WebCraft Round 3 competition.

---

## 🙏 Acknowledgments

- Created for **WebCraft Round 3** competition
- Designed with ❤️ by **Omid Hage**
- Inspired by modern tech fest aesthetics
- Built with accessibility in mind

---

## 📞 Contact

For any queries regarding the project:

- **Developer**: Omid Hage
- **GitHub**: [@its1om1dhage](https://github.com/its1om1dhage)
- **Repository**: [WebCraft-Round3](https://github.com/its1om1dhage/WebCraft-Round3)

---

## 🎉 Fest Information

**EventVerse 2025**
- 📅 March 15-17, 2025
- 📍 Tech Campus Arena, Innovation Street
- 🏆 ₹5 Lakhs+ Prize Pool
- 👥 5000+ Expected Participants
- 🎯 50+ Events
- 🌟 30+ Industry Experts

---

**Built with passion for innovation. Join us at EventVerse 2025! ⚡**