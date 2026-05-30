# 🌟 Samsung The Wall Landing Page

A responsive React and Tailwind CSS implementation of the **Samsung The Wall** product landing page. Built based on Figma designs, utilizing custom brand typography, Framer Motion animations, and interactive technology showcase components.

---

## 📖 Overview

This project is a responsive UI modeled exactly after the Figma layouts for Samsung's premium **The Wall** series displays. It replicates the immersive design of Samsung's luxury displays, translating mockups into responsive, reusable components using modern React paradigms, clean semantic HTML, and custom styling.

---

## 🎯 Assignment Objective

The objective of this project was to recreate the Samsung The Wall landing page from the provided Figma design while maintaining:

- Responsive layouts
- Component reusability
- Clean code architecture
- Smooth animations
- Typography consistency
- Cross-device compatibility

---

## ✨ Features

*   **⚡ Responsive Hero Section**: A high-impact landscape backdrop displaying centered assets, vertical social sidebars, and optimized layout spacing that eliminates overlaps on mobile viewports.
*   **📱 Responsive Navigation**: A sticky white navbar featuring custom branding, optimized links utilizing SamsungOne Medium, and dedicated tablet-to-mobile navigation rules that prevent overlapping or compressed elements on portrait iPad dimensions.
*   **🔬 Technology Showcase**: Clean technology showcase mapping arrays introducing Black Seal, Ultra Chroma, AI Upscaling, and Quantum HDR technologies.
*   **🎛️ Interactive Technology Components**: Custom-coded scroll triggers via `IntersectionObserver` executing fades, color reveals, panel curtain sequences, and a gesture-controlled Quantum HDR comparison slider with responsive mouse and touch dragging.
*   **🏠 Application Showcase**: Spacious widescreen banners for "For Living" and "For Business" with linear text overlays, custom carousel indicator dot navigation, and responsive scaling.
*   **🖥️ Product Showcase**: Modular product showcase grids featuring alternate custom dividers and flat, borderless Action items.
*   **🧩 Explore Other Options Section**: Centered parent section holding asymmetrical card components aligned on precise title baselines using desktop-only top-padding offsets, and a shared center "Get Quote" button below both cards.
*   **♻️ Resale Section**: A flat flex layout layering display panels with custom negative margins and transparent edges.
*   **🌌 Greatness In Any Space Gallery**: A responsive 12-column CSS Grid showcasing architectural portfolios with double row-span column centers and hover scale transitions.
*   **✉️ Contact Form**: A dark glassmorphic card titled **"Message"** with detailed interactive states.
*   **🗂️ Footer Navigation**: Clean footer maps with expanding border underlines and Montserrat Medium navigation items.
*   **🎬 Framer Motion Animations**: Framer Motion animations, staggered fade-ups, translation lifts, and loading indicator sequences.
*   **✒️ Samsung Typography Integration**: Complete brand typography integration, mapping all elements to local custom fonts (`SamsungSharpSans`, `SamsungOne`, `Montserrat`) with proper weight parameters (`400`, `500`, `600`, `700`) inside `fonts.css`.
*   **✅ Form Validation**: Form validation with detailed error handling, active loading states, and success notifications.
*   **🌐 Multi-device Compatibility**: Cross-device support optimized for Desktop, Tablet (iPad Portrait), and Mobile viewports.

---

## 🛠️ Tech Stack

*   **React 19** - Component-driven UI development.
*   **Vite 8** - High-speed bundling and development environment.
*   **Tailwind CSS 4** - Utility-first styling framework.
*   **Framer Motion 11** - Hardware-accelerated animations and gesture handling.

---

## 📸 Screenshots

### Hero Section
![Hero](README/hero.png)

### Technology Section
![Technology](README/technology.png)

### Applications Section
![Applications](README/applications.png)

### Product Showcase
![Products](README/products.png)

### Resale Section
![Resale](README/resale.png)

### Contact Section
![Contact](README/contact.png)

---

## 🚀 Installation & Setup

Follow these steps to set up the project locally:

1. Clone the repository into your local machine.
2. Open your terminal in the project's root folder.
3. Install all dependencies:
   ```bash
   npm install
   ```
4. Run the development server locally:
   ```bash
   npm run dev
   ```
5. Build the production-ready distribution package:
   ```bash
   npm run build
   ```
6. Preview the compiled production build locally:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

A clean, modular directory structure keeping layout, styles, datasets, and elements organized:

```
samsung-tv/
├── README/                 # Contains screenshot visual assets
│   ├── hero.png
│   ├── technology.png
│   ├── applications.png
│   ├── products.png
│   ├── resale.png
│   └── contact.png
├── public/                 # Static public assets
└── src/
    ├── assets/             # Structured brand image directories
    │   ├── fonts/          # WOFF font files
    │   ├── hero/
    │   ├── video/
    │   ├── resale/
    │   └── space-gallery/
    ├── components/         # Reusable React components
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Features.jsx
    │   ├── VideoSection.jsx
    │   ├── TechnologySection.jsx
    │   ├── ApplicationSection.jsx
    │   ├── OptionCard.jsx
    │   ├── ProductCard.jsx
    │   ├── ExploreOptionCard.jsx
    │   ├── ExploreOptionsSection.jsx
    │   ├── ResaleDisplay.jsx
    │   ├── SpaceGallerySection.jsx
    │   ├── ContactSection.jsx
    │   └── FooterSection.jsx
    ├── data/               # Isolated data matrices
    │   ├── technologyData.js
    │   ├── applicationData.js
    │   └── exploreOptionsData.js
    ├── App.css
    ├── App.jsx             # Component sequence controller
    ├── fonts.css           # Custom brand @font-face rules
    ├── index.css           # Typography utilities & global styles
    └── main.jsx            # React root mount
```

---

## 📐 Responsive Design

This implementation has been fully optimized to render beautifully across all screen size tiers:
*   **Desktop ($\ge 1024px$)**: Full-fidelity widescreen alignments, 12-column grid visual galleries, and complete Navbar links with the Contact button.
*   **Tablet ($768px$ – $1023px$)**: Implements a dedicated portrait layout that resolves compressed links and overlaps on iPad resolutions, introducing collapsible hamburger drawer menus.
*   **Mobile ($< 768px$)**: Vertical column stacking, custom container paddings to prevent sidebar overlaps, and centered text alignments.

---

## 📝 Form Validation System

The **Contact Form** contains highly interactive form validation:
*   **Required Name**: Verifies that the user input is not empty, showing warning prompts on blur and submit.
*   **Required Email**: Ensures email fields are filled.
*   **Email Format Validation**: Evaluates character structures using regex rules to prevent invalid email submission.
*   **Required Message**: Blocks empty messages.
*   **Interactive Loading State**: Simulates server request latency (2000ms delay) during which inputs are disabled and the button state morphs from `Submit` to `Sending...`.
*   **Success State**: Clears inputs on successful delivery and presents a `Message Sent ✓` confirmation.

---

## 🏆 Final Result

Successfully recreated the Samsung The Wall landing page using React, Tailwind CSS and Framer Motion with:

- Responsive layouts
- Custom Samsung typography
- Reusable components
- Interactive animations
- Form validation
- Mobile, tablet and desktop support

---

## 🔒 Environment Variables

No environment variables are required for this project.

---

## 🛠️ Challenges Faced

- Implementing Samsung custom fonts
- Matching Figma layouts across screen sizes
- Creating responsive tablet navigation
- Building reusable technology showcase components
- Recreating image overlap effects
- Maintaining responsive behavior across desktop, tablet and mobile devices

---

## 🧑‍💻 Author

**Premjith P P**
