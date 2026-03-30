# Portfolio Website - Hammad Munir

A modern, animated, and responsive portfolio website designed specifically for showcasing Unity game development projects.

## 🎮 Features

- **Modern Design**: Clean, aesthetic interface with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Animated Elements**: Smooth scroll animations, hover effects, and transitions
- **Project Showcase**: Dedicated section for displaying Unity projects with images and videos
- **Modal System**: Detailed project views with embedded videos and screenshots
- **Contact Form**: Ready-to-integrate contact form
- **Social Links**: Quick access to email, LinkedIn, and other social profiles
- **Skills Display**: Showcase your technical expertise
- **Easy Customization**: Well-organized code for easy modifications

## 📁 File Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🚀 Getting Started

### 1. Open the Website

Simply open `index.html` in your web browser:
- Double-click the `index.html` file
- Or right-click and select "Open with" → Your preferred browser

### 2. Customize Your Content

#### Update Personal Information

In `index.html`, search and replace:
- Your name (currently: "Hammad Munir")
- Your title/role
- About section text
- Location and education details
- Social media links

#### Add Your Projects

In `script.js`, find the `projects` object (around line 75) and customize:

```javascript
const projects = {
    project1: {
        title: 'Your Project Name',
        description: 'Project description here',
        features: [
            'Feature 1',
            'Feature 2',
            // Add more features
        ],
        technologies: ['Unity', 'C#', 'etc'],
        images: [
            'path/to/your/image1.jpg',
            'path/to/your/image2.jpg'
        ],
        videoUrl: 'https://youtube.com/embed/YOUR_VIDEO_ID',
        github: 'https://github.com/yourusername/project',
        demo: 'https://your-demo-link.com'
    },
    // Add more projects...
};
```

#### Add Project Images

The portfolio supports **both local images and external URLs**!

**Method 1: Using Local Images**

1. Create an `images` folder (already created!)
2. Add your project screenshots and thumbnails
3. Update in `script.js`:

```javascript
const projects = {
    project1: {
        thumbnail: 'images/project1-thumb.jpg',     // Thumbnail for card
        images: [
            'images/project1-screenshot1.jpg',      // Detail screenshots
            'images/project1-screenshot2.jpg'
        ]
    }
};
```

**Method 2: Using External URLs**

```javascript
const projects = {
    project1: {
        thumbnail: 'https://i.imgur.com/thumb.jpg',
        images: [
            'https://i.imgur.com/screenshot1.jpg',
            'https://i.imgur.com/screenshot2.jpg'
        ]
    }
};
```

**Method 3: Mix Both!**

```javascript
thumbnail: 'images/local-thumb.jpg',           // Local
images: [
    'images/screenshot1.jpg',                  // Local
    'https://imgur.com/screenshot2.jpg'        // URL
]
```

#### Update Thumbnails in HTML (Alternative)

You can also update thumbnails directly in `index.html`:

```html
<!-- Local image -->
<img src="images/your-project-thumbnail.jpg" alt="Project Name">

<!-- OR URL image -->
<img src="https://i.imgur.com/your-image.jpg" alt="Project Name">
```

### 3. Customize Colors

In `styles.css`, you can change the color scheme by modifying the CSS variables at the top:

```css
:root {
    --primary-color: #6366f1;     /* Main purple */
    --secondary-color: #8b5cf6;   /* Secondary purple */
    --accent-color: #ec4899;      /* Pink accent */
    /* Change these to your preferred colors */
}
```

## 🎬 Adding Project Videos

The portfolio **automatically detects** whether you're using YouTube or local videos!

### Option 1: YouTube Videos (Recommended for smaller file sizes)

1. Upload your game demo to YouTube
2. Get the embed link:
   - Click "Share" on your video
   - Click "Embed"
   - Copy the URL from `src="..."`
3. Add to your project in `script.js`:
   ```javascript
   videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
   ```

### Option 2: Local Videos (Best for offline viewing)

1. Create a `videos` folder in your portfolio-website directory:
   ```
   portfolio-website/
   ├── videos/
   │   ├── game-demo-1.mp4
   │   ├── game-demo-2.mp4
   │   └── ...
   ```

2. Add your video files (supports `.mp4`, `.webm`, `.ogg`)

3. Update the project in `script.js`:
   ```javascript
   videoUrl: 'videos/your-game-demo.mp4'
   ```

**Note:** The portfolio will automatically show YouTube videos in an iframe and local videos in an HTML5 video player with controls!

## 📧 Contact Form Integration

The contact form is ready but needs a backend service. Here are popular options:

### Option 1: EmailJS (Recommended - Free)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add EmailJS library to `index.html` (before closing `</body>`):
   ```html
   <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
   ```
4. Update the form handler in `script.js`:
   ```javascript
   emailjs.init("YOUR_USER_ID");
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData);
   ```

### Option 2: FormSpree

1. Sign up at [FormSpree](https://formspree.io/)
2. Update the form in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 3: Netlify Forms (if hosting on Netlify)

Add `netlify` attribute to the form:
```html
<form name="contact" method="POST" data-netlify="true">
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your files
3. Go to Settings → Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your portfolio folder
3. Get your live URL instantly

### Option 3: Vercel (Free)

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## 🎨 Customization Tips

### Adding More Skills

In `index.html`, find the skills section and add more skill cards:

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Skill Name</h3>
    <p>Skill description</p>
</div>
```

### Changing Fonts

Add Google Fonts to `index.html` head:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Update in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adding More Sections

Copy any existing section structure and modify the content:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add a navigation link!

## 📱 Social Media Icons

Find more icons at [Font Awesome](https://fontawesome.com/icons):

```html
<i class="fab fa-twitter"></i>      <!-- Twitter -->
<i class="fab fa-instagram"></i>    <!-- Instagram -->
<i class="fab fa-youtube"></i>      <!-- YouTube -->
<i class="fab fa-github"></i>       <!-- GitHub -->
<i class="fab fa-itch-io"></i>      <!-- Itch.io -->
```

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Use forward slashes: `images/photo.jpg` (not `images\photo.jpg`)
- Ensure image files are in the correct folder

### Animations Not Working
- Make sure JavaScript is enabled
- Check browser console for errors (F12)
- Clear browser cache

### Form Not Submitting
- Integrate with a form service (see Contact Form Integration)
- Check console for JavaScript errors

## 📝 To-Do List

- [ ] Replace placeholder images with your actual project screenshots
- [ ] Add your real project videos
- [ ] Update all project descriptions
- [ ] Add your social media links
- [ ] Integrate contact form with EmailJS or FormSpree
- [ ] Test on different browsers and devices
- [ ] Deploy to a hosting service
- [ ] Add Google Analytics (optional)
- [ ] Create a custom favicon

## 💡 Tips for Best Results

1. **High-Quality Images**: Use high-resolution screenshots (1920x1080 or higher)
2. **Short Videos**: Keep demo videos under 2-3 minutes
3. **Concise Descriptions**: Keep project descriptions clear and engaging
4. **Regular Updates**: Keep your portfolio updated with new projects
5. **Mobile Testing**: Always test on mobile devices
6. **Performance**: Optimize images (use tools like TinyPNG)

## 📞 Need Help?

If you need help customizing the portfolio:
- Check the code comments for guidance
- Search for specific elements by their class names
- Test changes in the browser's developer tools first

## 🎉 You're All Set!

Your portfolio is ready to showcase your amazing Unity projects! Remember to:
- Keep it updated
- Share it on LinkedIn and other platforms
- Include it in your resume
- Send it to potential employers or clients

Good luck with your game development journey! 🚀🎮

