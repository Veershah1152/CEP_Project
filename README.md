# AccessAble Homepage

A modern, mobile-first homepage for AccessAble - an accessibility-focused app that helps wheelchair users and mobility-challenged individuals discover accessible public and private places with real-time information.

## 🎯 Project Overview

AccessAble empowers users with mobility challenges to navigate the world with confidence by providing:
- Real-time accessibility information
- Community-driven reviews and updates
- Wheelchair-friendly route planning
- Comprehensive accessibility ratings

## 🎨 Design Features

### Visual Style
- **Clean, modern UI** with high contrast design
- **Inclusive imagery** representing users of varying abilities
- **Easy-to-read fonts** (Inter typeface) with optimal sizing
- **Large tap targets** (minimum 44px) for easy interaction
- **Color scheme**: Primary blue (#1366D9), accessibility green (#22C55E), white backgrounds

### Layout Sections
1. **Hero Section** - Main tagline with clear CTAs
2. **Core Features** - Four key app features with icons
3. **User Testimonial** - Social proof from real users
4. **Trust Section** - Statistics and partner logos
5. **How It Works** - Step-by-step process flow
6. **Call to Action** - Email signup and app store links
7. **Footer** - Complete site navigation and links

## 📱 Responsive Design

### Mobile-First Approach
- Designed primarily for mobile devices (320px+)
- Progressive enhancement for larger screens
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

### Desktop Adaptations
- Grid layouts expand to multi-column on larger screens
- Hero section becomes two-column layout
- Navigation transforms from mobile hamburger to horizontal menu

## ♿ Accessibility Features (WCAG 2.2 AA Compliant)

### Color and Contrast
- All text meets WCAG AA contrast ratios (4.5:1 minimum)
- High contrast mode support via CSS media queries
- Color is never the only means of conveying information

### Keyboard Navigation
- Full keyboard accessibility with Tab navigation
- Focus indicators with 2px blue outline
- Skip link for screen readers to jump to main content
- Escape key closes mobile navigation

### Screen Reader Support
- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels and descriptions throughout
- Screen reader only text for additional context
- Live regions for dynamic content announcements

### Interactive Elements
- Minimum 44px touch target size
- Clear focus indicators
- Descriptive link text and button labels
- Form validation with accessible error messages

### Motion and Animation
- Respects `prefers-reduced-motion` setting
- Smooth scrolling can be disabled
- Subtle hover effects enhance usability

## 🛠 Technical Implementation

### HTML Features
- Semantic markup structure
- Progressive enhancement
- Meta tags for SEO and accessibility
- Proper heading hierarchy (h1-h4)

### CSS Features
- CSS Custom Properties for maintainable theming
- Mobile-first responsive design
- Grid and Flexbox layouts
- Accessibility-focused focus management
- Print styles included

### JavaScript Features
- Progressive enhancement (works without JS)
- Mobile navigation toggle with ARIA management
- Form validation and submission handling
- Smooth scrolling with header offset
- External link security (rel="noopener noreferrer")

## 📋 Files Structure

```
AccessAble Homepage/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This documentation
```

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open index.html** in a web browser
3. **No build process required** - pure HTML, CSS, and JavaScript

### Local Development
- Serve files through a local web server for best experience
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Validate HTML and CSS for compliance
- Test keyboard navigation thoroughly

## 🧪 Testing Checklist

### Accessibility Testing
- [ ] Screen reader compatibility (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- [ ] Color contrast validation (WebAIM Contrast Checker)
- [ ] Focus indicator visibility
- [ ] Skip link functionality

### Responsive Testing
- [ ] Mobile devices (320px - 768px)
- [ ] Tablets (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Touch interaction on mobile
- [ ] Navigation menu on small screens

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Considerations

- **Optimized images**: Using CSS gradients and emoji for visual elements
- **Efficient CSS**: Uses modern CSS features for minimal code
- **Font loading**: Google Fonts with preconnect for performance
- **JavaScript**: Minimal, efficient code with event delegation
- **No dependencies**: Pure vanilla JavaScript and CSS

## 🔧 Customization

### Colors
Update CSS custom properties in `:root` selector:
```css
:root {
    --primary-blue: #1366D9;
    --success-green: #22C55E;
    /* ... other color variables */
}
```

### Typography
Modify font family and sizes in CSS custom properties:
```css
:root {
    --font-family: 'Inter', sans-serif;
    --font-size-base: 1rem;
    /* ... other typography variables */
}
```

### Layout
Adjust spacing, breakpoints, and grid configurations in CSS custom properties.

## 📞 Support

For questions about implementation or accessibility features, please refer to:
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Accessibility Resources](https://webaim.org/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## 📄 License

This project is created as a design demonstration for AccessAble and follows web accessibility best practices.