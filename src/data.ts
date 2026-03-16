export interface Prompt {
  id: number;
  phase: string;
  title: string;
  description: string;
  promptText: string;
}

export const phases = [
  "Foundation",
  "Design System",
  "Homepage",
  "Inner Pages",
  "Store & Cart",
  "CRO",
  "SEO & Performance",
  "QA & Launch"
];

export const prompts: Prompt[] = [
  // Phase 1: Foundation
  {
    id: 1,
    phase: "Foundation",
    title: "Project Setup & Routing",
    description: "Initialize the React application with Vite, set up React Router for navigation, and configure the basic folder structure.",
    promptText: "Set up a new React application using Vite. Configure React Router with the following routes: Home (/), Shop (/shop), Product Detail (/product/:id), Cart (/cart), Checkout (/checkout), and About Us (/about). Create placeholder components for each route. Ensure the folder structure follows best practices (e.g., src/components, src/pages, src/hooks, src/utils)."
  },
  {
    id: 2,
    phase: "Foundation",
    title: "Brand Tokens & Tailwind Config",
    description: "Configure Tailwind CSS with Amul's brand colors, typography, and spacing.",
    promptText: "Update the tailwind.config.js file to include Amul's brand identity. Add custom colors: Amul Red (#E31837), Amul Blue (#0056A4), Cream (#FFFDD0), and pure white/black. Set up typography using a clean sans-serif font like 'Inter' for body text and a bold display font for headings. Define custom spacing and border-radius tokens to match a modern FMCG aesthetic."
  },
  {
    id: 3,
    phase: "Foundation",
    title: "Global Navigation (Mega Menu)",
    description: "Build a responsive header with a mega menu for product categories.",
    promptText: "Create a responsive Header component. On desktop, implement a mega menu that displays categories (Milk, Butter, Cheese, Ice Cream, Beverages) with sub-items and featured product images. Include a search bar, user account icon, and a cart icon with a badge showing the number of items. On mobile, implement a hamburger menu with an off-canvas drawer for navigation."
  },
  {
    id: 4,
    phase: "Foundation",
    title: "Global Footer & Legal Links",
    description: "Design a comprehensive footer with links, newsletter signup, and social icons.",
    promptText: "Build a comprehensive Footer component. Include columns for 'Know Us' (About, Heritage), 'Categories' (Milk, Butter, etc.), 'Support' (Contact, FAQs), and 'Legal' (Privacy Policy, T&C). Add a newsletter subscription input field. Include social media icons (Facebook, Twitter, Instagram, YouTube) and FSSAI license information at the bottom."
  },

  // Phase 2: Design System
  {
    id: 5,
    phase: "Design System",
    title: "Core UI Components",
    description: "Develop reusable UI components like buttons, inputs, and cards.",
    promptText: "Create a set of reusable UI components in a 'components/ui' folder. Build a Button component with variants (primary, secondary, outline, ghost) and sizes. Build an Input component with error states and labels. Create a Card component for products with consistent padding, shadows, and hover effects. Ensure all components are fully accessible (a11y) and responsive."
  },
  {
    id: 6,
    phase: "Design System",
    title: "Indian UX Patterns",
    description: "Implement India-specific UI elements like veg/non-veg badges and ₹ formatting.",
    promptText: "Implement utility functions and UI components specific to the Indian market. Create a 'VegBadge' component (green square with a green dot) and a 'NonVegBadge' (brown square with a brown dot) as per FSSAI guidelines. Create a currency formatter utility that formats numbers to Indian Rupees (₹) using the Indian numbering system (lakhs and crores)."
  },
  {
    id: 7,
    phase: "Design System",
    title: "Animations & Transitions",
    description: "Add smooth animations using Framer Motion for page transitions and micro-interactions.",
    promptText: "Integrate 'motion' (Framer Motion) for UI animations. Create a 'FadeIn' wrapper component for scroll animations. Implement smooth page transitions between routes. Add micro-interactions to buttons (scale down on tap) and product cards (slight lift and shadow increase on hover)."
  },
  {
    id: 8,
    phase: "Design System",
    title: "Global Modals & Toasts",
    description: "Set up a global state management system for modals, toasts, and a WhatsApp CTA.",
    promptText: "Implement a global Toast notification system for success/error messages (e.g., 'Added to cart'). Create a reusable Modal component with a backdrop blur. Add a floating WhatsApp CTA button in the bottom right corner that opens a chat with Amul customer support, ensuring it doesn't overlap with the cookie consent banner."
  },

  // Phase 3: Homepage
  {
    id: 9,
    phase: "Homepage",
    title: "Hero Carousel",
    description: "Build a dynamic, responsive hero slider for promotions and new launches.",
    promptText: "Create a Hero Carousel component for the homepage. It should auto-play, support touch swiping on mobile, and have pagination dots and navigation arrows. The slides should feature high-quality images of Amul products (e.g., new ice cream flavors, milk subscriptions) with bold headlines and 'Shop Now' call-to-action buttons."
  },
  {
    id: 10,
    phase: "Homepage",
    title: "Category Grid",
    description: "Design a visually appealing grid showcasing main product categories.",
    promptText: "Build a 'Shop by Category' section. Display a responsive grid of categories (Milk, Butter, Cheese, Ice Cream, Chocolates, Beverages). Each category card should have a high-quality cutout image of the product, a subtle background color, and the category name. On hover, the image should scale up slightly."
  },
  {
    id: 11,
    phase: "Homepage",
    title: "Bestsellers Slider",
    description: "Implement a horizontal scrolling list of top-selling products.",
    promptText: "Create a 'Bestsellers' section featuring a horizontal scrolling product slider. Each product card should display the product image, veg badge, title, weight/volume, price (formatted in ₹), and an 'Add to Cart' button. Include a 'Bestseller' tag on the top left of the cards."
  },
  {
    id: 12,
    phase: "Homepage",
    title: "Trust & Social Proof",
    description: "Highlight Amul's heritage, the Amul Girl campaigns, and quality assurances.",
    promptText: "Design a 'Taste of India' section that highlights Amul's heritage. Include a masonry grid or slider of recent 'Amul Girl' topical ads. Add a banner highlighting quality assurances: '100% Vegetarian', 'FSSAI Approved', 'Sourced from 3.6 Million Farmers', and 'No Preservatives' with relevant SVG icons."
  },

  // Phase 4: Inner Pages
  {
    id: 13,
    phase: "Inner Pages",
    title: "Product Listing Page (PLP)",
    description: "Build the category page with a product grid, sorting, and sidebar filters.",
    promptText: "Develop the Product Listing Page (PLP). Create a sidebar with filters for Category, Price Range, Diet (Veg/Sugar-free), and Pack Size. Implement a sorting dropdown (Price: Low to High, Popularity, Newest). Display the products in a responsive grid. Ensure the filters update the product list dynamically without a full page reload."
  },
  {
    id: 14,
    phase: "Inner Pages",
    title: "Product Detail Page (PDP)",
    description: "Design a high-converting PDP with image galleries, nutrition facts, and add-to-cart.",
    promptText: "Build the Product Detail Page (PDP). Include a sticky image gallery on the left with thumbnails and zoom functionality. On the right, display the product title, veg badge, price, short description, and a quantity selector. Add an 'Add to Cart' and 'Buy Now' button. Below, include accordions for 'Description', 'Ingredients & Nutrition Facts', and 'Storage Instructions'."
  },
  {
    id: 15,
    phase: "Inner Pages",
    title: "The Amul Story",
    description: "Create an engaging 'About Us' page detailing the cooperative model.",
    promptText: "Design 'The Amul Story' page. Use a storytelling layout with alternating text and image blocks. Highlight the history of the Gujarat Cooperative Milk Marketing Federation (GCMMF), the White Revolution led by Dr. Verghese Kurien, and the impact on millions of farmers. Use timeline components and large, emotive photography."
  },
  {
    id: 16,
    phase: "Inner Pages",
    title: "Store/Dealer Locator",
    description: "Implement a map-based locator for physical Amul Parlours.",
    promptText: "Build an 'Amul Parlour Locator' page. Integrate a map interface (using a library like Leaflet or Google Maps API placeholder). Add a search bar for users to enter their PIN code or city. Display a list of nearby stores on the left and their locations as pins on the map. Include store hours and directions buttons."
  },

  // Phase 5: Store & Cart
  {
    id: 17,
    phase: "Store & Cart",
    title: "Shopping Cart Drawer",
    description: "Create a slide-out cart drawer for quick access and modifications.",
    promptText: "Implement a slide-out Cart Drawer that opens when the cart icon is clicked. Display a list of added items with their image, title, price, and a quantity increment/decrement control. Show the subtotal, estimated delivery fee, and a 'Proceed to Checkout' button. Include an 'Empty Cart' state with a 'Continue Shopping' link."
  },
  {
    id: 18,
    phase: "Store & Cart",
    title: "Checkout Flow",
    description: "Build a multi-step checkout process including address and delivery slots.",
    promptText: "Develop a multi-step Checkout page. Step 1: Login/Guest Checkout. Step 2: Shipping Address (with fields for PIN code, Flat/House No., Street, City, State). Step 3: Delivery Slot selection (Date and Time options). Step 4: Order Summary. Ensure form validation is robust and user-friendly."
  },
  {
    id: 19,
    phase: "Store & Cart",
    title: "Payment Integration UI",
    description: "Design the payment selection interface featuring UPI, Cards, and Net Banking.",
    promptText: "Create the Payment Selection UI. Design a clean accordion or tabbed interface for payment methods: UPI (with a QR code option and VPA input), Credit/Debit Cards (with secure input fields), Net Banking, and Cash on Delivery (COD). Add trust badges (e.g., '100% Secure Payments', 'Razorpay Secure')."
  },
  {
    id: 20,
    phase: "Store & Cart",
    title: "User Account Dashboard",
    description: "Build a dashboard for users to manage orders, addresses, and subscriptions.",
    promptText: "Develop the User Account Dashboard. Include a sidebar navigation with tabs: 'My Orders', 'Manage Addresses', 'Milk Subscriptions', and 'Profile Settings'. In the 'My Orders' section, display a list of past orders with status badges (Processing, Shipped, Delivered) and a 'Track Order' button that opens a timeline modal."
  },

  // Phase 6: CRO
  {
    id: 21,
    phase: "CRO",
    title: "Promotional Offer Banners",
    description: "Implement dynamic announcement bars and promotional marquees.",
    promptText: "Add a global Announcement Bar at the very top of the site for urgent messages (e.g., 'Free delivery on orders above ₹500'). Create a scrolling Marquee component to highlight ongoing festival offers (e.g., 'Diwali Special: 10% off on Ghee'). Ensure these banners can be easily dismissed by the user."
  },
  {
    id: 22,
    phase: "CRO",
    title: "Exit Intent Popups",
    description: "Design a popup that triggers when a user is about to leave the site.",
    promptText: "Implement an Exit Intent Popup logic. When the user's cursor moves towards the browser tab to close it, trigger a modal offering a special discount code (e.g., 'Wait! Get 5% off your first order'). Include an email input field to capture leads and a clear 'No thanks' close button."
  },
  {
    id: 23,
    phase: "CRO",
    title: "Advanced Search System",
    description: "Build a robust search bar with autocomplete and typo tolerance.",
    promptText: "Enhance the global search bar. Implement an autocomplete dropdown that shows suggested products, categories, and recent searches as the user types. Include small product thumbnails and prices in the suggestions. Ensure the search logic handles common typos (e.g., 'chese' -> 'cheese', 'buter' -> 'butter')."
  },
  {
    id: 24,
    phase: "CRO",
    title: "Newsletter & Email Capture",
    description: "Create engaging newsletter signup forms across the site.",
    promptText: "Design a dedicated Newsletter Signup section to be placed above the footer. Use a compelling headline like 'Get the latest Amul recipes and offers'. Include an input field for the email address and a 'Subscribe' button. Add a subtle success animation when the user subscribes."
  },

  // Phase 7: SEO & Performance
  {
    id: 25,
    phase: "SEO & Performance",
    title: "Dynamic Meta Tags & Structured Data",
    description: "Set up SEO metadata and JSON-LD for rich search results.",
    promptText: "Implement a system for dynamic meta tags (title, description, Open Graph images) using a library like React Helmet. Add JSON-LD structured data to the Product Detail Pages (Product schema with price, availability, and reviews) and the Homepage (Organization schema) to improve Google Search visibility."
  },
  {
    id: 26,
    phase: "SEO & Performance",
    title: "Image Optimization & Lazy Loading",
    description: "Ensure all images are optimized for fast loading.",
    promptText: "Implement native lazy loading (loading='lazy') for all images below the fold. Set up an Image component that automatically serves WebP formats and provides responsive `srcSet` attributes based on device screen size. Add blurred placeholders for images while they load."
  },
  {
    id: 27,
    phase: "SEO & Performance",
    title: "3G Network Optimizations",
    description: "Optimize the experience for users on slower mobile networks in India.",
    promptText: "Implement Skeleton Loaders for all major UI components (Product Cards, Hero Banner, Cart Items) to improve perceived performance on slow networks. Ensure critical CSS is loaded first and defer non-essential JavaScript. Optimize bundle sizes by implementing code splitting for different routes."
  },
  {
    id: 28,
    phase: "SEO & Performance",
    title: "Accessibility (a11y) Improvements",
    description: "Ensure the website is usable by everyone, including those with disabilities.",
    promptText: "Audit and improve website accessibility. Ensure all interactive elements have appropriate ARIA roles and labels. Verify that the entire website can be navigated using only a keyboard. Check color contrast ratios to ensure text is readable against backgrounds, especially for the Amul Blue and Red brand colors."
  },

  // Phase 8: QA & Launch
  {
    id: 29,
    phase: "QA & Launch",
    title: "Unit Testing Setup",
    description: "Configure Jest and React Testing Library for component testing.",
    promptText: "Set up a testing environment using Vitest (or Jest) and React Testing Library. Write unit tests for critical utility functions (like the currency formatter) and core UI components (Button, Input). Write a test to ensure the Veg/Non-Veg badge renders correctly based on props."
  },
  {
    id: 30,
    phase: "QA & Launch",
    title: "E2E Testing Setup",
    description: "Implement end-to-end tests for critical user flows using Playwright.",
    promptText: "Configure Playwright for End-to-End (E2E) testing. Write a test script that simulates a user journey: searching for a product, adding it to the cart, proceeding to checkout, and filling out the shipping address. Ensure the test runs successfully across Chromium, Firefox, and WebKit."
  },
  {
    id: 31,
    phase: "QA & Launch",
    title: "Analytics Integration",
    description: "Set up Google Analytics 4 and Meta Pixel for tracking conversions.",
    promptText: "Integrate Google Analytics 4 (GA4) and Meta Pixel. Create utility functions to track key e-commerce events: 'view_item' (on PDP), 'add_to_cart', 'begin_checkout', and 'purchase'. Ensure user privacy is respected by implementing a cookie consent banner before tracking begins."
  },
  {
    id: 32,
    phase: "QA & Launch",
    title: "Pre-launch Checklist & Error Boundaries",
    description: "Finalize the app with error handling and a launch checklist.",
    promptText: "Implement React Error Boundaries to catch JavaScript errors anywhere in the component tree and display a friendly fallback UI (e.g., 'Oops! Something went wrong. Return to Homepage'). Create a custom 404 Not Found page featuring the Amul Girl. Review the console for any warnings or errors before final deployment."
  }
];
