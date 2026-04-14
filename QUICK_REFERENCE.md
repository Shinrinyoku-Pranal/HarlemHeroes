# Harlem Heroes Website - Quick Reference

## 🎨 Color Palette Reference

### Primary Colors
- **Deep Brown (#3d2817)** - Main headers, navigation, dark elements
- **Warm Brown (#5c3d2e)** - Gradients, backgrounds
- **Cream (#faf8f3)** - Light backgrounds, text on dark
- **Warm Gold (#f4d4a8)** - Buttons, accents, hover states

### Secondary Colors
- **Warm Taupe (#f0e8dd)** - Card backgrounds, lighter sections
- **Medium Brown (#6d4c41)** - Body text, secondary text
- **Dark Brown (#5c4033)** - Links, emphasis

### Usage Examples
- **Headers**: #3d2817
- **Navigation Bar**: Linear gradient from #3d2817 to #5c3d2e
- **Buttons**: Background #8b5a3c, hover #a67c52
- **Body Text**: #5c4033 or #6d4c41
- **Accents/Links**: #f4d4a8 or #8b5a3c

## 📁 File Organization

```
PodcastWebsite/
├── index.html                    # Main file - all content
├── styles.css                    # Styling - organized by section
├── script.js                     # JavaScript functionality
├── Harlem Heroes Podcast.mp3     # Audio file
├── LH1.jpeg through lh8.jpeg     # Gallery images
├── README.md                     # Original documentation
├── CHANGELOG.md                  # Update log
└── QUICK_REFERENCE.md            # This file
```

## 🔗 Navigation Structure

### Main Sections
1. **Home** (#home) - Hero section with CTA
2. **About** (#about) - Episode overview with cards
3. **Gallery** (#gallery) - Image slideshow with controls
4. **Listen** (#podcast) - Audio player
5. **Script** (#script) - Full episode transcript
6. **Team** (#team) - Creator information

### Navigation Links
```html
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#gallery">Gallery</a>
<a href="#podcast">Listen</a>
<a href="#script">Script</a>
<a href="#team">Team</a>
```

## 🖼️ Gallery Images

### Files & Order
1. LH1.jpeg - "The Harlem Renaissance - A cultural awakening"
2. LH2.jpeg - "Jazz and blues flourished in Harlem's vibrant nightlife"
3. LH3 - "Langston Hughes and the literary voices of the era"
4. LH4.jpg - "The spirit of artistic innovation and expression"
5. LH6.jpeg - "Harlem streets alive with cultural transformation"
6. LH7.jpeg - "Musicians and performers shaped the sound of America"
7. lh8.jpeg - "Black artists asserting dignity and humanity"

### Gallery Controls
- **Buttons**: Previous/Next navigation
- **Dots**: Click any dot to jump to that slide
- **Keyboard**: Arrow keys (← →) to navigate
- **Auto-advance**: 8 seconds per slide when in viewport

## 📝 Script Section Organization

### Main Sections
1. **Introduction** - Welcome and episode overview
2. **Background** - Historical context of Harlem Renaissance
3. **Langston Hughes** - Biography and significance
4. **Jazz and Blues Influence** - How music shaped poetry
5. **Example Poetry Reading** - "The Weary Blues" analysis
6. **Cultural and Global Impact** - Legacy and influence
7. **Conclusion** - Summary and closing thoughts

### Styling Classes
- `.script-intro` - Opening section
- `.script-section-content` - Main sections
- `.script-conclusion` - Closing section
- `.script-section-divider` - Visual separator lines
- `.poetry-block` - Quoted poetry sections

## 🎬 JavaScript Functions

### Gallery Functions
```javascript
nextImage()              // Move to next slide
previousImage()          // Move to previous slide
currentImage(n)          // Jump to slide n
showImage(n)            // Internal function to display slide
isGalleryInView()       // Check if gallery visible
```

### Scroll Functions
```javascript
// Smooth scrolling handled by native browser + event listeners
// Active link highlighting on scroll
// Intersection Observer for animations
```

## 🔧 Customization Guide

### To Change Colors
Edit the color values in `styles.css`:
1. Find the color hex code
2. Replace all instances throughout the file
3. Update both regular and hover states

### To Add New Gallery Image
1. Add new `<div class="slide fade">` block in HTML
2. Add corresponding `<span class="dot">` in dots container
3. Add `<img>` and `<caption>` tags with content
4. JavaScript will automatically adapt

### To Edit Navigation
Update the `<ul class="nav-links">` section in `index.html`:
```html
<li><a href="#section-id">Section Name</a></li>
```

### To Change Script Content
Edit the `.script-intro`, `.script-section-content`, or `.script-conclusion` divs
- Keep the structure intact
- Maintain semantic heading hierarchy
- Use `.script-section-divider` for breaks

## 📱 Responsive Breakpoints

### Mobile (≤ 480px)
- Single column layouts
- Smaller font sizes
- Adjusted padding/margins
- Simplified navigation

### Tablet (481px - 768px)
- Two column layouts where applicable
- Medium font sizes
- Moderate spacing

### Desktop (> 768px)
- Multi-column layouts
- Full-size typography
- Standard spacing

## 🎵 Audio Player Notes

- Uses HTML5 native controls
- No external player library
- Supports: play, pause, timeline, volume
- File: `Harlem Heroes Podcast.mp3`
- Format: Standard MP3 audio

## ♿ Accessibility Features

- Semantic HTML5 structure
- WCAG color contrast compliance
- Keyboard navigation (Tab, Arrow keys)
- Screen reader friendly
- Readable font sizes (min 1rem)
- Proper heading hierarchy (H1, H2, H3)
- Image alt text on all images

## 🚀 Performance Tips

- Uses no external CSS libraries
- No JavaScript frameworks (vanilla JS)
- Optimized image files (local storage)
- Smooth 60fps animations
- Lazy loading of animations
- Efficient selectors in JavaScript

## 🐛 Common Issues & Fixes

### Gallery not advancing
- Check `script.js` is loaded
- Verify slide count matches dots
- Check browser console for errors

### Colors not displaying
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check CSS file is linked

### Audio not playing
- Verify file path: `Harlem Heroes Podcast.mp3`
- Check file exists in root directory
- Verify MIME type is audio/mpeg

### Responsive design issues
- Check viewport meta tag in HTML head
- Verify media queries in CSS
- Test on actual devices

## 📚 Documentation Files

- **README.md** - Full feature documentation
- **CHANGELOG.md** - Update history and changes
- **QUICK_REFERENCE.md** - This file

---

**Last Updated:** April 2026
**Version:** 2.0 (Harlem Renaissance Design)
