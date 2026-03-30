# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ✅ What's Already Set Up

Your portfolio is **ready to use** right now! It includes:
- ✅ Modern, animated design
- ✅ Responsive (works on all devices)
- ✅ Support for **local files AND URLs** for videos and images
- ✅ `images/` folder ready for your screenshots
- ✅ `videos/` folder ready for your game demos
- ✅ Project modal system with video embedding

## 🎯 Three Things to Customize

### 1. Add Your Project Images

**You have 3 options:**

**Option A: Local Images (Recommended)**
```javascript
// In script.js
thumbnail: 'images/my-game-thumb.jpg',
images: ['images/screenshot1.jpg', 'images/screenshot2.jpg']
```

**Option B: External URLs**
```javascript
thumbnail: 'https://i.imgur.com/thumb.jpg',
images: ['https://i.imgur.com/shot1.jpg']
```

**Option C: Mix Both!**
```javascript
thumbnail: 'images/local-thumb.jpg',        // Local
images: [
    'images/local-shot.jpg',                // Local
    'https://imgur.com/online-shot.jpg'     // URL
]
```

### 2. Add Your Videos

**Same flexibility as images!**

**Local video:**
```javascript
videoUrl: 'videos/my-game-demo.mp4'
```

**YouTube video:**
```javascript
videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
```

### 3. Update Your Info

In `script.js`, update project details:
```javascript
const projects = {
    project1: {
        title: 'Your Game Name',
        description: 'Your game description...',
        features: ['Feature 1', 'Feature 2', ...],
        technologies: ['Unity', 'C#', ...],
        thumbnail: 'images/your-thumb.jpg',
        images: ['images/shot1.jpg', 'images/shot2.jpg'],
        videoUrl: 'videos/your-video.mp4',
        github: 'https://github.com/you/project',
        demo: 'https://your-game.itch.io'
    }
};
```

## 📁 Folder Structure

```
portfolio-website/
├── index.html              (Main page)
├── styles.css              (All styling)
├── script.js               (Project data & logic)
├── images/                 (Put screenshots here) ✨
│   ├── game1-thumb.jpg
│   ├── game1-screenshot1.jpg
│   └── game1-screenshot2.jpg
├── videos/                 (Put video files here) ✨
│   ├── game1-demo.mp4
│   └── game2-demo.mp4
├── README.md               (Full documentation)
├── CUSTOMIZATION-GUIDE.md  (How to customize)
└── VIDEO-SETUP-GUIDE.md    (Video & image guide)
```

## 🎨 File Naming Tips

**Good names:** ✅
- `cyera-endless-thumbnail.jpg`
- `zombie-game-screenshot1.jpg`
- `vr-project-demo.mp4`

**Bad names:** ❌
- `IMG_1234.jpg` (not descriptive)
- `Screenshot (1).png` (has spaces)
- `my game video.mp4` (has spaces)

## 🖼️ Image Recommendations

| Type | Size | Format | Max Size |
|------|------|--------|----------|
| Thumbnails | 600x400px | JPG/PNG | 200KB |
| Screenshots | 1920x1080px | JPG/PNG | 500KB |
| Videos | 1080p | MP4 | 50MB |

**Compress your images:** Use [TinyPNG.com](https://tinypng.com) to reduce file sizes!

## 🎬 Video Recommendations

**For Local Videos:**
- Format: MP4 (H.264)
- Resolution: 1080p or 720p
- Duration: 30-90 seconds
- Keep under 50MB

**For YouTube:**
- Upload to YouTube
- Set as Public or Unlisted
- Copy embed URL from Share → Embed

## ⚡ Quick Workflow

1. **Take screenshots** of your Unity projects
2. **Compress images** at TinyPNG.com
3. **Copy to** `images/` folder
4. **Record/edit video** of gameplay
5. **Copy to** `videos/` folder (or upload to YouTube)
6. **Update** `script.js` with your project details
7. **Open** `index.html` in browser to preview
8. **Deploy** to GitHub Pages, Netlify, or Vercel

## 🌐 Where to Host Images/Videos (If Not Local)

**Free Image Hosting:**
- [Imgur](https://imgur.com) - Easiest
- [Google Drive](https://drive.google.com) - Shareable links
- [Cloudinary](https://cloudinary.com) - Professional

**Video Hosting:**
- [YouTube](https://youtube.com) - Best option
- [Vimeo](https://vimeo.com) - Ad-free
- [Streamable](https://streamable.com) - Quick uploads

## 🆘 Common Questions

**Q: Can I use both local and URL images in the same project?**
**A:** Yes! Mix them however you want.

**Q: Do I need to update HTML if I update script.js?**
**A:** No, just update `script.js` - it's easier!

**Q: My image/video won't load!**
**A:** Check:
- File path is correct (no typos)
- File is in the right folder
- File name has no spaces
- Image format is JPG/PNG
- Video format is MP4

**Q: Images are too large/slow to load!**
**A:** Compress them at [TinyPNG.com](https://tinypng.com)

**Q: Can I add more than 4 projects?**
**A:** Yes! Just add more projects in `script.js` and duplicate the HTML structure.

## 📚 Need More Help?

- **Full guide:** See `README.md`
- **Customization:** See `CUSTOMIZATION-GUIDE.md`
- **Video/Image setup:** See `VIDEO-SETUP-GUIDE.md`

## 🎉 You're Ready!

1. Add your images to `images/` folder
2. Add your videos to `videos/` folder
3. Update `script.js` with your project info
4. Open `index.html` in your browser
5. Share your portfolio with the world! 🚀

**Pro tip:** Start with one project first, make sure it works, then add the rest!

