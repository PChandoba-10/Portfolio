# Payal Chandoba — Portfolio

A static site (`index.html`, `style.css`, `script.js`) — no build step needed.

## 1. Add your photo permanently
Right now the photo slot lets you click and preview a photo in the browser, but that doesn't save when you reload or deploy.
To make it permanent:
1. Add your photo file to this folder, e.g. `photo.jpg`.
2. In `index.html`, find:
   ```html
   <div class="photo-slot" id="photo-slot">
     <span class="photo-placeholder-text">PHOTO<br>PC-01</span>
   </div>
   ```
   Replace it with:
   ```html
   <div class="photo-slot" id="photo-slot">
     <img src="photo.jpg" alt="Payal Chandoba">
   </div>
   ```

## 2. Add your real LinkedIn URL
In `index.html`, find:
```html
<a class="contact-item" href="#" id="linkedin-link" target="_blank" rel="noopener">
```
Replace `href="#"` with your actual LinkedIn profile URL.

## 3. (Optional) Add a downloadable resume button
Drop your resume PDF into this folder as `resume.pdf`, then add a button anywhere, e.g. in the hero:
```html
<a href="resume.pdf" class="btn btn-outline" download>Download resume</a>
```

## 4. Deploy to Vercel

**Option A — no command line, using the Vercel dashboard:**
1. Go to vercel.com and sign in (GitHub login is easiest).
2. Push this folder to a new GitHub repository (or drag-and-drop the folder if using Vercel's "Deploy" > "Browse all templates" > import flow — GitHub is more reliable).
3. In Vercel, click **Add New → Project**, import that GitHub repo.
4. Framework preset: choose **Other** (it's a static site, no build command needed).
5. Click **Deploy**. Vercel gives you a live `.vercel.app` URL in under a minute.

**Option B — command line (fastest if you're comfortable with a terminal):**
```bash
npm install -g vercel
cd portfolio
vercel
```
Follow the prompts (link/create a project, accept defaults). It deploys immediately and gives you a live URL. Run `vercel --prod` to push it to your permanent production URL.

## 5. Custom domain (optional)
In the Vercel project settings → Domains, you can attach a custom domain if you buy one later. The default `.vercel.app` URL works fine for job applications as-is.
