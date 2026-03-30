# Video & Image Setup Guide 🎥🖼️

This guide shows you how to add videos AND images to your portfolio. Both support **local files** and **URLs**!

## Quick Setup for Local Videos

### Step 1: Create Videos Folder

1. In your `portfolio-website` folder, create a new folder called `videos`
2. Your structure should look like:

```
portfolio-website/
├── index.html
├── styles.css
├── script.js
├── videos/           ← Create this folder
│   └── (your video files go here)
```

### Step 2: Copy Your Video Files

Copy your game demo videos into the `videos` folder:

```
portfolio-website/
├── videos/
│   ├── WebGame.mp4
│   ├── game-demo-2.mp4
│   ├── game-demo-3.mp4
│   └── game-demo-4.mp4
```

**Supported formats:**
- `.mp4` (H.264) - **Recommended** (works in all browsers)
- `.webm` - Good for web
- `.ogg` - Alternative format

### Step 3: Update script.js

Open `script.js` and find the `projects` object (around line 79). Update the `videoUrl`:

```javascript
const projects = {
    project1: {
        title: 'Cyera Endless Webgl',
        description: 'Your game description...',
        features: [...],
        technologies: [...],
        images: [...],
        
        // Use the relative path to your video
        videoUrl: 'videos/WebGame.mp4',  // ← Just like this!
        
        github: '#',
        demo: '#'
    },
    project2: {
        // ... other project
        videoUrl: 'videos/game-demo-2.mp4',  // Another local video
    }
};
```

### Step 4: Test It!

1. Open `index.html` in your browser
2. Click on a project card
3. The modal should open with your video playing!

---

## Setup for Local Images 🖼️

Images work **exactly like videos** - you can use local files or URLs!

### Step 1: Create Images Folder

1. In your `portfolio-website` folder, create an `images` folder (already created!)
2. Your structure should look like:

```
portfolio-website/
├── images/           ← Put your screenshots here
│   ├── project1-thumb.jpg
│   ├── project1-screenshot1.jpg
│   └── ...
├── videos/
├── index.html
└── ...
```

### Step 2: Add Your Images

Copy your game screenshots and thumbnails to the `images` folder:

```
portfolio-website/
├── images/
│   ├── cyera-thumbnail.jpg        (For project card)
│   ├── cyera-screenshot1.jpg      (For modal)
│   ├── cyera-screenshot2.jpg
│   ├── game2-thumbnail.jpg
│   └── ...
```

**Recommended sizes:**
- **Thumbnails**: 600x400 pixels (shown on main page)
- **Screenshots**: 1920x1080 or 1280x720 pixels (shown in modal)

### Step 3: Update script.js

Open `script.js` and find the `projects` object (around line 79). Update:

```javascript
const projects = {
    project1: {
        title: 'Cyera Endless',
        
        // Thumbnail for project card (local or URL)
        thumbnail: 'images/cyera-thumbnail.jpg',
        
        // Screenshots for modal (local or URLs)
        images: [
            'images/cyera-screenshot1.jpg',
            'images/cyera-screenshot2.jpg'
        ],
        
        // Video (local or URL)
        videoUrl: 'videos/WebGame.mp4',
    }
};
```

### Step 4: Update HTML (Optional)

If you want to update thumbnails directly in HTML:

In `index.html` (around line 186):
```html
<img src="images/cyera-thumbnail.jpg" alt="Cyera Endless">
```

---

## Using YouTube Videos Instead

If you prefer to host videos on YouTube (saves space and loads faster):

### Step 1: Upload to YouTube

1. Upload your game demo to YouTube
2. You can set it as:
   - **Public** - Anyone can find it
   - **Unlisted** - Only people with the link can watch
   - **Private** - Won't work for portfolio

### Step 2: Get Embed Link

1. Go to your video on YouTube
2. Click the **Share** button
3. Click **Embed**
4. Copy the URL from the `src="..."` part

Example: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Step 3: Update script.js

```javascript
const projects = {
    project1: {
        title: 'My Game',
        // ... other properties
        
        // Use YouTube embed URL
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        
        github: '#',
        demo: '#'
    }
};
```

---

## Mixing Videos AND Images (Local + URLs)

You can use **any combination** of local files and URLs:

```javascript
const projects = {
    project1: {
        title: 'Game 1',
        thumbnail: 'images/local-thumb.jpg',              // Local image
        images: [
            'images/screenshot1.jpg',                     // Local image
            'https://imgur.com/abc.jpg'                   // URL image
        ],
        videoUrl: 'videos/local-video.mp4',              // Local video
    },
    project2: {
        title: 'Game 2',
        thumbnail: 'https://i.imgur.com/thumb.jpg',      // URL image
        images: [
            'https://imgur.com/xyz.jpg',                  // URL image
            'images/local-screenshot.jpg'                 // Local image
        ],
        videoUrl: 'https://www.youtube.com/embed/abc',   // YouTube video
    }
};
```

The portfolio **automatically detects** which type and displays it correctly! ✨

**Benefits of mixing:**
- Use URLs for images hosted elsewhere (Imgur, Google Drive, etc.)
- Use local files for private/unpublished content
- YouTube for public demos, local videos for exclusive content

---

## Optimizing Video Files

For best performance with local videos:

### Recommended Settings:
- **Resolution:** 1920x1080 (1080p) or 1280x720 (720p)
- **Frame Rate:** 30 fps (or 60 fps for fast-paced games)
- **Bitrate:** 5-10 Mbps for 1080p, 2.5-5 Mbps for 720p
- **Format:** MP4 (H.264 codec)
- **Duration:** 30-90 seconds (keep it short!)
- **File Size:** Try to keep under 50MB

### How to Compress Videos:

**Using HandBrake (Free):**
1. Download from [handbrake.fr](https://handbrake.fr/)
2. Load your video
3. Choose "Fast 1080p30" or "Fast 720p30" preset
4. Click "Start Encode"

**Using FFmpeg (Command Line):**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
```

**Using Online Tools:**
- [Clipchamp](https://clipchamp.com/)
- [CloudConvert](https://cloudconvert.com/)
- [FreeConvert](https://www.freeconvert.com/video-compressor)

---

## Troubleshooting

### Video Not Playing?

1. **Check the file path:**
   ```javascript
   // Wrong:
   videoUrl: 'D:\\Fiverr Data\\Cyera Videos\\WebGame.mp4'
   
   // Correct:
   videoUrl: 'videos/WebGame.mp4'
   ```

2. **Check the file format:**
   - Make sure it's `.mp4` with H.264 codec
   - Avoid `.avi`, `.mov`, `.mkv` (convert to MP4 first)

3. **Check the file exists:**
   - Open your browser's Developer Tools (F12)
   - Go to Console tab
   - Look for 404 errors

### Video Shows but Won't Load?

1. **File might be too large** - Try compressing it
2. **Wrong codec** - Convert to H.264 MP4
3. **Path has spaces** - Rename file to remove spaces:
   ```
   Bad:  "My Game Demo.mp4"
   Good: "my-game-demo.mp4" or "MyGameDemo.mp4"
   ```

### Video Quality is Poor?

- Increase bitrate when exporting
- Use higher resolution source
- Try different compression settings

---

## Example: Your Cyera Endless Project

Based on your current setup, here's what you should do:

### Option 1: Move to Videos Folder (Recommended)

1. Create `portfolio-website/videos/` folder
2. Copy `WebGame.mp4` to this folder
3. Update `script.js`:
   ```javascript
   videoUrl: 'videos/WebGame.mp4',
   ```

### Option 2: Upload to YouTube

1. Upload `WebGame.mp4` to YouTube
2. Get the embed link
3. Update `script.js`:
   ```javascript
   videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
   ```

### Current Issue Fixed ✅

I've already fixed the syntax error in your `script.js`. The original:
```javascript
videoUrl: '"D:\\Fiverr Data\\Cyera Videos\\WebGame.mp4"',  // ❌ Wrong
```

Has been changed to:
```javascript
videoUrl: 'videos/WebGame.mp4',  // ✅ Correct
```

Just copy your video to the `videos` folder and it will work!

---

## Need More Help?

Check these other guides:
- `README.md` - Complete portfolio documentation
- `CUSTOMIZATION-GUIDE.md` - Quick customization reference

Happy portfolio building! 🚀

