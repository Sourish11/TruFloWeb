# TruFlo Design System Documentation

## Overview
This document outlines the comprehensive design system for TruFlo, including design tokens, component specifications, accessibility guidelines, and implementation notes.

## Design Tokens

### Colors
- **Primary**: #6A0DAD (Purple) - Main brand color for CTAs and key elements
- **Primary Light**: #B380FF (Accent Lilac) - For hover states and secondary elements
- **Success**: #A3FFB7 - For positive feedback and success states
- **Error**: #FF6F6F - For error states and warnings
- **Warning**: #FFD93D - For caution and warning states
- **Neutrals**: 50-950 scale for text, backgrounds, and borders

### Typography
- **Display Font**: Clash Display - For headlines and hero text
- **Body Font**: Inter - For body text and UI elements
- **Font Sizes**: 12px to 72px with responsive scaling
- **Line Heights**: 1.2 (tight), 1.5 (normal), 1.625 (relaxed)

### Spacing
- **Base Unit**: 4px
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
- **Section Padding**: 96px (desktop), 64px (tablet), 48px (mobile)

### Breakpoints
- **Mobile**: 390px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Max Width**: 1280px container

## Component Specifications

### Buttons
- **Primary**: Purple background, white text, medium shadow
- **Secondary**: White background, purple text, purple border
- **Sizes**: sm (32px), md (40px), lg (48px), xl (56px)
- **States**: Default, hover, active, disabled, loading
- **Accessibility**: Focus rings, ARIA labels, keyboard navigation

### Inputs
- **Base**: White background, neutral border, rounded corners
- **States**: Default, focus, error, disabled
- **Icons**: Left and right icon support
- **Labels**: Above input with proper association
- **Error Handling**: Red border, error message below

### Cards
- **Background**: White with subtle shadow
- **Border Radius**: 16px (large), 12px (medium)
- **Padding**: 32px (large), 24px (medium), 16px (small)
- **Hover**: Elevated shadow, subtle scale transform

## Layout System

### Grid
- **Container**: Max-width 1280px, centered with padding
- **Columns**: 12-column grid system
- **Gaps**: 24px (desktop), 16px (mobile)
- **Responsive**: Fluid columns with breakpoint adjustments

### Sections
- **Hero**: Full viewport height, centered content
- **Content**: Consistent vertical rhythm with 96px spacing
- **Max Width**: 70ch for body text readability

## Accessibility Guidelines

### WCAG Compliance
- **Level**: AA compliance minimum
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Focus Management**: Visible focus indicators on all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML

### Implementation
- **Focus Rings**: 2px solid primary color with 2px offset
- **Skip Links**: For main content navigation
- **Alt Text**: Descriptive text for all images
- **Form Labels**: Properly associated with inputs

## Performance Guidelines

### Loading Performance
- **LCP Target**: < 2 seconds
- **Image Optimization**: WebP format, lazy loading, responsive images
- **Font Loading**: Font-display: swap for web fonts
- **Critical CSS**: Inline critical styles, defer non-critical

### Bundle Optimization
- **Code Splitting**: Route-based splitting
- **Tree Shaking**: Remove unused code
- **Compression**: Gzip/Brotli compression
- **Caching**: Proper cache headers for static assets

## Animation Guidelines

### Principles
- **Purpose**: Enhance UX, provide feedback, guide attention
- **Duration**: 150ms (fast), 250ms (normal), 350ms (slow)
- **Easing**: ease-in-out for most transitions
- **Reduced Motion**: Respect prefers-reduced-motion setting

### Common Animations
- **Fade In**: 0.6s ease-out for content reveals
- **Slide Up**: 0.8s ease-out for section entrances
- **Hover Effects**: 0.2s transitions for interactive elements
- **Loading States**: Subtle pulse or spinner animations

## Responsive Design

### Mobile-First Approach
- **Base Styles**: Mobile (390px) as default
- **Progressive Enhancement**: Add complexity for larger screens
- **Touch Targets**: Minimum 44px for interactive elements
- **Viewport**: Proper viewport meta tag

### Breakpoint Strategy
- **Content-First**: Break when content needs it, not at arbitrary sizes
- **Flexible Layouts**: Use flexbox and grid for adaptive layouts
- **Fluid Typography**: Responsive font sizes using clamp()

## Brand Guidelines

### Voice & Tone
- **Motivating**: Encouraging and empowering language
- **Friendly**: Approachable and conversational
- **Gamified**: Playful elements without being childish
- **Authentic**: Honest about challenges and solutions

### Visual Style
- **Modern**: Clean, contemporary design
- **Energetic**: Dynamic gradients and animations
- **Professional**: Polished and trustworthy appearance
- **Inclusive**: Accessible and welcoming to all users

## Implementation Notes

### CSS Architecture
- **Design Tokens**: CSS custom properties for consistency
- **Utility Classes**: Common patterns as reusable classes
- **Component Styles**: Scoped styles for components
- **Responsive Utilities**: Breakpoint-specific utilities

### React Components
- **Composition**: Flexible, composable component API
- **Props**: Consistent prop naming and types
- **Accessibility**: Built-in accessibility features
- **Performance**: Optimized for rendering performance

### File Organization
```
src/
├── styles/
│   ├── design-tokens.css
│   └── globals.css
├── components/
│   ├── ui/
│   └── sections/
└── pages/
```

## Testing Guidelines

### Visual Testing
- **Cross-Browser**: Chrome, Firefox, Safari, Edge
- **Device Testing**: Mobile, tablet, desktop viewports
- **Accessibility Testing**: Screen readers, keyboard navigation
- **Performance Testing**: Lighthouse audits

### Quality Assurance
- **Design Review**: Match designs pixel-perfect
- **Content Review**: Proper typography and spacing
- **Interaction Review**: Smooth animations and transitions
- **Accessibility Review**: WCAG compliance verification

## Maintenance

### Regular Updates
- **Design Token Updates**: Centralized token management
- **Component Updates**: Backward-compatible improvements
- **Documentation**: Keep docs in sync with implementation
- **Performance Monitoring**: Regular performance audits

### Version Control
- **Semantic Versioning**: Major.minor.patch for design system
- **Change Log**: Document all changes and breaking changes
- **Migration Guides**: Help developers upgrade versions