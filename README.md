Hiwa Nirvara - Luxury Villa Website (Glassmorphism PWA)
A high-performance, ultra-luxury real estate website built for Hiwa Nirvara (Narapally, Secunderabad). This project utilizes a custom Glassmorphism UI engine and a Vanilla JavaScript Virtual Router to deliver a premium, app-like experience without the overhead of heavy frontend frameworks.
✨ Key Features
 * 🎨 Premium Glassmorphism UI: Custom CSS engine using backdrop-filter, semi-transparent gradients, and depth-based layering to create a frosted glass aesthetic.
 * ⚡ Single Page Application (SPA) Architecture:
   * Custom Vanilla JS Router (route() function).
   * Instant page transitions with zero reload latency.
   * Full browser history support (Back/Forward buttons work natively).
 * 📱 Progressive Web App (PWA):
   * Installable on mobile devices (Add to Home Screen).
   * Offline capabilities via Service Worker caching.
   * Native-like feel with standalone display mode.
 * 🖼️ Interactive Gallery: Custom-built Lightbox with high-resolution image support and smooth zoom animations.
 * 📍 Dynamic Location: Static map integration with deep links to Google Maps.
 * 🚀 Performance Optimized: - Minimal DOM manipulation.
   * Lazy loading logic for images.
   * Tailwind CSS for utility-first responsive design.
🛠️ Tech Stack
 * Core: HTML5, CSS3, Vanilla JavaScript (ES6+)
 * Styling: Tailwind CSS (via CDN for portability) + Custom CSS Variables for Glass effects.
 * Icons: FontAwesome 6.
 * Fonts: Playfair Display (Headings) & Poppins (Body).
📂 File Structure
Although optimized into a single entry file for preview environments, the logical architecture is designed as follows:
/hiwa-nirvara/
│
├── index.html          # Main Application Shell (Contains all Views)
├── manifest.json       # PWA Configuration (App Name, Icons, Colors)
├── sw.js               # Service Worker (Caching & Offline Logic)
│
├── assets/             # (Optional) Local assets if de-coupling from CDN
│   ├── images/
│   └── icons/

🚀 Getting Started
Since this project uses Vanilla JS and no build tools (Webpack/Vite) are strictly required, you can run it immediately.
Prerequisites
 * A modern web browser (Chrome, Safari, Edge, Firefox).
 * A local development server (recommended for PWA features to work).
Installation
 * Clone the repository:
   git clone [https://github.com/yourusername/hiwa-nirvara.git](https://github.com/yourusername/hiwa-nirvara.git)
cd hiwa-nirvara

 * Run the project:
   You can use any static server. Examples:
   * VS Code: Install "Live Server" extension and click "Go Live".
   * Python: python -m http.server 8000
   * Node: npx serve .
 * Open in Browser:
   Navigate to http://localhost:8000.
🎨 Customization Guide
Changing the Color Theme
The entire Glassmorphism theme is controlled via CSS Variables in the <style> block of index.html:
:root {
    --bg-dark: #0f172a;       /* Main Background */
    --accent-gold: #d4af37;   /* Gold Highlights */
    --glass-bg: rgba(30, 41, 59, 0.4); /* Glass Opacity */
    --glass-blur: 16px;       /* Blur Intensity */
}

Adding New Pages
 * Create a new <section id="page-newname" class="page-section"> in index.html.
 * Add a link in the Navigation: <a href="#newname" onclick="route(event, 'newname')">.
 * The Router automatically handles the rest.
📱 PWA Testing
 * Open Chrome DevTools -> Application Tab.
 * Check "Manifest" to see if manifest.json is loaded.
 * Check "Service Workers" to see if sw.js is registered.
 * On mobile, open the site and select "Add to Home Screen".
📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.
Designed & Developed for Hiwa Nirvara Luxury Villas.
