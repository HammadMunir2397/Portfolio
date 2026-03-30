📁 IMAGES FOLDER
================

Place your project screenshots and thumbnails here!

Folder Structure Example:
images/
├── project1-thumb.jpg          (Thumbnail for project card)
├── project1-screenshot1.jpg    (Detail screenshots)
├── project1-screenshot2.jpg
├── project2-thumb.jpg
└── ...

Image Types:
============

1. THUMBNAILS (for project cards on main page)
   - Recommended size: 600x400 pixels
   - Format: .jpg or .png
   - Example names: project1-thumb.jpg, cyera-thumbnail.jpg

2. SCREENSHOTS (for modal/detail view)
   - Recommended size: 1920x1080 or 1280x720 pixels
   - Format: .jpg or .png
   - Example names: project1-screenshot1.jpg, gameplay-shot.jpg

How to Use:
===========

METHOD 1: Update index.html directly
Find the <img> tag and change src:
<img src="images/your-thumbnail.jpg" alt="Project Name">

METHOD 2: Update script.js (Recommended)
In the projects object, update:

const projects = {
    project1: {
        title: 'Your Game',
        thumbnail: 'images/project1-thumb.jpg',  // ← Thumbnail
        images: [
            'images/project1-screenshot1.jpg',   // ← Screenshots
            'images/project1-screenshot2.jpg'
        ],
        // ... other properties
    }
};

Mixing Local and URL Images:
=============================

You can use BOTH local images and URLs!

thumbnail: 'images/local-thumb.jpg',        // Local file
images: [
    'images/screenshot1.jpg',                // Local file
    'https://imgur.com/abc123.jpg'           // External URL
]

Image Optimization Tips:
========================

Before adding images:
1. Resize to appropriate dimensions
2. Compress using tools like:
   - TinyPNG.com
   - Squoosh.app
   - Photoshop "Save for Web"
3. Use .jpg for photos (smaller size)
4. Use .png for graphics with transparency
5. Keep file sizes under 500KB for fast loading

Good file names: ✅
- cyera-thumbnail.jpg
- zombie-game-screenshot1.jpg
- vr-project-thumb.png

Bad file names: ❌
- IMG_1234.jpg
- Screenshot (1).png
- game image.jpg (spaces!)

Need help? See CUSTOMIZATION-GUIDE.md for more details!

