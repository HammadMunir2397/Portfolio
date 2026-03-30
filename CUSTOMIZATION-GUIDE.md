# Quick Customization Guide

This guide shows you exactly what to change to personalize your portfolio.

## 🎯 Quick Start Checklist

### 1. Replace Project Images (5 minutes)

The portfolio supports **BOTH local images and URLs**! You can use either or mix them.

Create an `images` folder and add your screenshots:

```
portfolio-website/
├── images/
│   ├── project1-thumb.jpg          (Thumbnail for card)
│   ├── project1-screenshot1.jpg    (Detail screenshots)
│   ├── project1-screenshot2.jpg
│   ├── project2-thumb.jpg
│   └── ...
```

**Option A: Update in HTML directly (Quick)**

In `index.html` (around line 186):
```html
<!-- For LOCAL images: -->
<img src="images/project1-thumb.jpg" alt="Your Project Name">

<!-- For URL images: -->
<img src="https://i.imgur.com/your-image.jpg" alt="Your Project Name">
```

**Option B: Update in script.js (Recommended)**

In `script.js`, update the `thumbnail` and `images` properties:
```javascript
const projects = {
    project1: {
        // Thumbnail (shown on main page)
        thumbnail: 'images/cyera-thumb.jpg',  // Local file
        // OR use URL: thumbnail: 'https://imgur.com/abc123.jpg',
        
        // Screenshots (shown in modal)
        images: [
            'images/cyera-screenshot1.jpg',    // Local
            'images/cyera-screenshot2.jpg',    // Local
            // OR mix: 'https://imgur.com/xyz.jpg'
        ],
    }
};
```

### 2. Add Your Project Videos (10 minutes)

**Option A: YouTube (Recommended)**
1. Upload video to YouTube
2. Click Share → Embed → Copy the URL
3. In `script.js` (line 75+), update:

```javascript
videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
```

**Option B: Local Video Files**
1. Create a `videos` folder in your portfolio-website directory
2. Add your video files (`.mp4`, `.webm`, or `.ogg` format)
3. In `script.js`, update the videoUrl with the local path:

```javascript
videoUrl: 'videos/my-game-demo.mp4'  // ← Local video path
```

The portfolio will automatically detect if it's a YouTube URL or local file and display it correctly!

### 3. Update Project Details (15 minutes)

**In `script.js` (starting at line 75):**

```javascript
const projects = {
    project1: {
        title: 'Zombie Survival Game',  // ← Your game title
        description: 'A thrilling survival horror game...',  // ← Your description
        features: [
            'Advanced zombie AI',  // ← Your features
            'Procedural weapon generation',
            'Day/night cycle',
            'Crafting system'
        ],
        technologies: ['Unity', 'C#', 'HDRP', 'Bolt'],  // ← Your tech stack
        images: [
            'images/zombie-game-1.jpg',  // ← Your screenshots
            'images/zombie-game-2.jpg'
        ],
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',  // ← Your video
        github: 'https://github.com/yourusername/zombie-game',  // ← Your repo
        demo: 'https://your-game.itch.io'  // ← Your demo link
    },
    // Copy and paste for more projects
};
```

### 4. Update Social Links (2 minutes)

**In `index.html` (lines 50-62 and 320-332):**

```html
<!-- Email -->
<a href="mailto:hammadmunir.ai@gmail.com">  <!-- ← Change to your email -->

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/hammad-munir-a84096164/">  <!-- ← Your LinkedIn -->

<!-- GitHub (if you have one) -->
<a href="https://github.com/yourusername">  <!-- ← Your GitHub -->

<!-- Add more: -->
<a href="https://yourportfolio.itch.io" class="social-link">
    <i class="fab fa-itch-io"></i>
</a>
```

### 5. Personalize About Section (5 minutes)

**In `index.html` (lines 90-110):**

```html
<p class="about-description">
    I'm a Unity Game Developer with expertise in C#...  <!-- ← Your bio -->
</p>

<div class="info-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Lahore, Pakistan</span>  <!-- ← Your location -->
</div>

<div class="info-item">
    <i class="fas fa-graduation-cap"></i>
    <span>Bachelor's in Software Engineering</span>  <!-- ← Your education -->
</div>
```

### 6. Customize Skills (3 minutes)

**In `index.html` (lines 140-200):**

Add or modify skill cards:

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-unity"></i>  <!-- ← Choose icon from fontawesome.com -->
    </div>
    <h3>Unity Development</h3>  <!-- ← Skill name -->
    <p>Expert in Unity engine...</p>  <!-- ← Description -->
</div>
```

## 🎨 Change Colors

**In `styles.css` (lines 1-10):**

```css
:root {
    --primary-color: #6366f1;     /* Purple - try #ff6b6b for red */
    --secondary-color: #8b5cf6;   /* Try #4ecdc4 for teal */
    --accent-color: #ec4899;      /* Try #ffe66d for yellow */
}
```

**Color Scheme Ideas:**
- **Blue Theme**: #2196f3, #03a9f4, #00bcd4
- **Green Theme**: #4caf50, #8bc34a, #cddc39
- **Orange Theme**: #ff9800, #ff5722, #ffeb3b
- **Red Theme**: #f44336, #e91e63, #ff5252

## 📊 Add Project Statistics (Optional)

**In `index.html`, add after the About section:**

```html
<section class="stats">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
            </div>
            <div class="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
            </div>
            <div class="stat-item">
                <h3>50K+</h3>
                <p>Downloads</p>
            </div>
        </div>
    </div>
</section>
```

**Then add styling in `styles.css`:**

```css
.stats {
    background: var(--dark-card);
    padding: 4rem 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
}

.stat-item h3 {
    font-size: 3rem;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.stat-item p {
    color: var(--text-muted);
}
```

## 🔗 Add More Navigation Links

**In `index.html` (lines 20-30):**

```html
<ul class="nav-menu" id="nav-menu">
    <li><a href="#home" class="nav-link">Home</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#skills" class="nav-link">Skills</a></li>
    <li><a href="#projects" class="nav-link">Projects</a></li>
    <li><a href="#testimonials" class="nav-link">Testimonials</a></li>  <!-- ← New -->
    <li><a href="#blog" class="nav-link">Blog</a></li>  <!-- ← New -->
    <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

## 🖼️ Image Optimization Tips

Before adding images to your portfolio:

### Image Sizes:
- **Thumbnails** (project cards): 600x400 pixels
- **Screenshots** (modal detail): 1920x1080 or 1280x720 pixels
- **Max file size**: 500KB each for fast loading

### Optimization Steps:

1. **Resize** your images first:
   - Use Photoshop, GIMP, or online tools
   - Windows: Right-click → Edit with Photos → Resize
   - Mac: Preview → Tools → Adjust Size

2. **Compress** without losing quality:
   - [TinyPNG.com](https://tinypng.com) - Easiest
   - [Squoosh.app](https://squoosh.app) - Advanced
   - Photoshop: File → Export → Save for Web

3. **Choose the right format**:
   - `.jpg` - Best for photos/screenshots (smaller file size)
   - `.png` - Best for graphics with transparency
   - `.webp` - Modern format (even smaller, good browser support)

4. **Name files properly**:
   ```
   Good: ✅
   - cyera-game-thumbnail.jpg
   - zombie-gameplay-screenshot1.jpg
   - vr-project-main.png
   
   Bad: ❌
   - IMG_1234.jpg (not descriptive)
   - Screenshot (1).png (has spaces)
   - game image.jpg (has spaces)
   ```

### Quick Compression Guide:

**Using TinyPNG:**
1. Go to [tinypng.com](https://tinypng.com)
2. Drop up to 20 images
3. Download compressed versions
4. Save 50-70% file size!

**Using Squoosh (Advanced):**
1. Go to [squoosh.app](https://squoosh.app)
2. Drop one image
3. Choose format (WebP or JPG)
4. Adjust quality slider (75-85 is usually good)
5. Download

## 🎥 Video Tips

1. **Length**: 30-90 seconds per demo
2. **Quality**: 1080p minimum
3. **Format**: MP4 (H.264) for best compatibility
4. **Size**: Under 50MB for local videos
5. **Content**: 
   - Show best features first
   - Include gameplay footage
   - Add text overlays explaining features
   - Background music (optional)

## 📝 Writing Great Project Descriptions

**Template:**

```
[Game Name] is a [genre] game featuring [main feature]. 
Built with [tech stack], it showcases [what you learned/achieved].
Players can [main gameplay loop] while [secondary features].
```

**Example:**

```
Zombie Apocalypse is a survival horror game featuring advanced AI 
and procedural generation. Built with Unity and C#, it showcases 
my expertise in game systems and optimization. Players must survive 
waves of intelligent zombies while crafting weapons and building 
shelters.
```

## 🚀 Before Publishing Checklist

- [ ] All placeholder images replaced
- [ ] All project videos added
- [ ] All links tested (click each one!)
- [ ] Contact form integrated (EmailJS or FormSpree)
- [ ] Tested on mobile device
- [ ] Tested on different browsers (Chrome, Firefox, Safari)
- [ ] Grammar and spelling checked
- [ ] Resume link working
- [ ] Social media links updated
- [ ] All projects have descriptions
- [ ] Footer copyright year is current
- [ ] Page loads quickly (under 3 seconds)

## 🎓 Advanced Customizations

### Add a Blog Section

Create a `blog` folder with markdown files, then use a static site generator or:

```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <div class="blog-grid">
            <article class="blog-card">
                <img src="images/blog-post-1.jpg" alt="Blog Post">
                <h3>How I Built My First Unity Game</h3>
                <p>Date: November 2024</p>
                <a href="blog/post-1.html" class="btn btn-primary">Read More</a>
            </article>
        </div>
    </div>
</section>
```

### Add Testimonials

```html
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2 class="section-title">Testimonials</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p>"Hammad created an amazing game for our company..."</p>
                <h4>- Client Name, Company</h4>
            </div>
        </div>
    </div>
</section>
```

### Add Google Analytics

1. Get tracking code from [Google Analytics](https://analytics.google.com)
2. Add before closing `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🆘 Common Issues

**Q: My changes aren't showing up**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)

**Q: Images are broken**
- Check file path spelling
- Make sure file extension matches (.jpg vs .JPG)
- Verify file is in correct folder

**Q: Video won't play**
- Check YouTube URL format
- Make sure video is public
- Test embed link separately

**Q: Site looks broken on mobile**
- Don't modify CSS breakpoints
- Test in browser's mobile view (F12 → Toggle Device Toolbar)

## 💡 Pro Tips

1. **Update Regularly**: Add new projects every few months
2. **Show Process**: Include development screenshots
3. **Be Specific**: "Reduced load time by 40%" not "Made it faster"
4. **Stay Current**: Update technologies you're learning
5. **Get Feedback**: Ask fellow developers to review it
6. **A/B Test**: Try different project descriptions

---

**Need more help?** Check the main README.md file or refer to the code comments in each file.

Happy customizing! 🎨✨

