# Spice Kraft — Premium Warm Foodie Restaurant Website

A stunning, production-ready, gourmet restaurant website for **Spice Kraft**, an acclaimed fine-dining destination in Ballygunge, Kolkata.

Built strictly with **HTML5**, **CSS3**, and **Vanilla JavaScript** — 0 frameworks, 0 external libraries, 100% lightweight and performant.

---

## 🍽️ About Spice Kraft

Spice Kraft is a celebrated contemporary dining destination in Ballygunge, Kolkata, bringing together Continental grills, slow-braised royal Kashmiri Mughlai curries, fragrant Asian wok creations, and fresh coastal seafood.

- **Address:** 54/1/2A, Hazra Road, near HDFC Bank, Dover Terrace, Ballygunge, Kolkata, West Bengal 700019, India
- **Phone:** `+91 98312 23311`
- **Reputation:** `4.5 / 5.0` on Google with over `8,900+ verified guest reviews`
- **Ambience:** Warm, comfortable, family-friendly contemporary dining with an artisanal cocktail bar

---

## 🎨 Design System: Gourmet Warm Foodie Theme

Redesigned specifically to evoke appetite, warmth, comfort, and culinary craftsmanship:

| Token                | Swatch / Role        | Hex Value                  | Purpose                                        |
| :------------------- | :------------------- | :------------------------- | :--------------------------------------------- |
| `--bg-primary`       | Cream Buttermilk     | `#FAF7F2`                  | Warm, inviting base canvas                     |
| `--bg-secondary`     | Warm Linen / Sand    | `#F3ECE2`                  | Subtle section differentiation                 |
| `--card-bg`          | Crisp White Surface  | `#FFFFFF`                  | Foodie card surfaces with soft ambient shadows |
| `--text-primary`     | Espresso Roast       | `#231C16`                  | High-contrast, easy-to-read typography         |
| `--text-secondary`   | Warm Roasted Umber   | `#5C5248`                  | Informative subtitles and descriptions         |
| `--accent-primary`   | Paprika / Terracotta | `#D9531E`                  | Appetizing call-to-action buttons & badges     |
| `--accent-secondary` | Turmeric / Honey     | `#E59819`                  | Review stars, highlighting & accents           |
| `--border-subtle`    | Warm Oat Border      | `rgba(160, 120, 80, 0.16)` | Elegant card and divider boundaries            |

### Typography Hierarchy

- **Editorial Headings:** `Playfair Display` (serif, elegant, warm gourmet character)
- **Body & UI Elements:** `Plus Jakarta Sans` / `Inter` (sans-serif, crisp, highly legible across mobile & retina screens)

---

## 🚀 Key Features

1. **Clean Floating Navigation:**
   - Translucent frosted glass effect on scroll (`backdrop-filter: blur(16px)`).
   - Clutter-free design with direct links to Signatures, Menu, Experience, Bar, Gallery, and Visit Us.
   - Quick "Reserve a Table" button on desktop & full-screen animated drawer on mobile.

2. **Gourmet Hero Showcase:**
   - Full-viewport appetizing visuals with subtle Ken Burns motion.
   - Live social proof card highlighting **4.5 ★ rating from 8,900+ Google foodies**.
   - Dual CTAs: _Explore Our Menu_ and _Reserve a Table_.

3. **Interactive Table Reservation Modal:**
   - One-click trigger from nav, hero, menu, floating action bar, and footer.
   - Date picker with minimum validation (today onward).
   - Time slot selection chips (Lunch & Dinner sittings).
   - Guest count stepper ($1$ to $12$ guests).
   - Seating preferences (_Main Dining Room_, _Cozy Booth_, _Bar Lounge_).
   - Automatic reference ID generator (`SK-XXXXXX`) and immediate booking confirmation screen.

4. **Dynamic 9-Category Culinary Menu:**
   - Starters, Main Course, Seafood, Asian, Mughlai, Continental, Desserts, Beverages, and Bar.
   - Smooth animated transitions on tab switch with dietary badges (`🌱 Pure Veg`, `🍗 Non-Veg`, `🐟 Seafood`).
   - Clean pricing disclaimer (_"Prices available upon table service menu"_).

5. **Signature Dish Showcase:**
   - Asymmetric food magazine layout highlighting Dajaj Chermoula, Shepherd's Pie, Amritsari Macchi, Mutton Gustaba, Saffron Basmati, Beer Battered Fish, Fried Ice Cream, and Jack Daniels Chocolate Mousse.
   - Smooth hover micro-interactions (`transform: translateY(-6px) scale(1.05)`).

6. **Masonry Gallery & Touch Lightbox:**
   - Responsive multi-column grid with smooth zoom on hover.
   - Fullscreen lightbox with keyboard controls (`Esc`, `←`, `→`), touch swipe support, and slide counter.

7. **Guest Reviews Carousel:**
   - Authentic Google review cards with 5-star ratings.
   - Responsive presentation ($3$ cards on desktop, $1$ card on mobile/tablet).
   - Auto-advance timer with pause-on-hover and touch swipe support.

8. **Location & Live Hours:**
   - Embedded Google Map with direct Ballygunge Hazra Road pinpoint.
   - Centralized schedule configuration with active day highlighting.
   - One-click "Get Directions" and direct telephone linking.

9. **Mobile Polish & Sticky Bottom Action Bar:**
   - Sticky bottom bar on mobile screens with quick tap triggers for **Call**, **Directions**, and **Reserve**.
   - Fully fluid responsive layout from $320\text{px}$ compact phones to ultrawide desktop monitors with $0\text{px}$ horizontal overflow.

---

## 📁 File Structure

```
TheSpiceCraft/
├── index.html              # Semantic HTML5 light-themed structure
├── css/
│   ├── style.css           # Warm foodie design tokens, card styles, and modal
│   ├── animations.css      # Keyframes, scroll reveals, and reduced-motion modes
│   └── responsive.css      # Fluid adaptations (1440px, 1024px, 768px, 480px)
├── js/
│   ├── main.js             # Core: loader, navbar scroll blur, cursor, config
│   ├── menu.js             # Centralized menu data & animated category filtering
│   ├── gallery.js          # Gallery interactions & fullscreen lightbox
│   ├── animations.js       # IntersectionObserver reveals & stat counter animations
│   ├── reservation.js      # Modal engine, stepper, seating, and confirmation flow
│   └── reviews.js          # Google reviews carousel, responsive sizing & touch swipe
└── README.md               # Documentation
```

---

## 💻 How to View & Preview

Simply open `index.html` in any modern web browser:

```powershell
# Double-click index.html or launch via Python / Node static server:
npx serve .
# or
python -m http.server 8000
```

Open `http://localhost:8000` to experience the website.
