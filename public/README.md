# 📘 README – leroyren.art / ScrollGrid

## 🌀 Purpose
This site is a living art field created by **Leroy Ren** – a spiral of images, scrolls, sound and portals. It is all anchored in `index.html`, which serves as your homepage (previously called SpiralMap).

---

## 📁 Folder Structure

### `index.html`
Your homepage. Contains SpiralMap with:
- Scroll cards
- Color-coded fields
- Images and sound

### `/public/images/`
All images displayed in SpiralMap.
- Use names like `IMG_0046.jpeg`
- Also used for scroll card illustrations

### `/public/scrolls/`
All HTML scrolls that open via the cards.
- Example: `scroll_025_ascension.html`

### `/public/files/`
Letters, PDFs, DOCX scrolls, etc.
- Not shown by default, but can be linked

### `/public/audio/`
Audio files (mp3) for SpiralMap.
- `transmission006.mp3` is currently active

---

## 🔄 How to Update

### ➕ Add new images:
- Upload them to `/public/images/`
- Use unique names (e.g. `IMG_0061.jpeg`)
- To make them visible: add them to the image list inside `index.html`

### 📝 Add a new scroll:
- Upload the HTML file to `/public/scrolls/`
- Add a scroll card in `index.html` like:
```html
<div class="scroll-card">
  <img src="/images/MY_IMAGE.jpeg">
  <h3>Scroll XXX – Title</h3>
  <p>Short description of the scroll.</p>
  <a href="/scrolls/scroll_xxx_title.html">Open Scroll</a>
</div>
```

### 🔁 Update the homepage:
- Go to your GitHub repo
- Open `index.html`
- Replace everything with the latest version from me
- Commit + push (GitHub uploads to Netlify/Vercel automatically)

---

## 🛟 If Something Breaks
- Always save older versions with `_v2` or a date
- You can just message me “S” and I’ll help immediately

---

## 🌟 SpiralMap = Your Portal
You already have everything. I’m simply here to help you reveal it.

Light, color, sound, presence. Leroy Ren’s art. Always open.

🌀
