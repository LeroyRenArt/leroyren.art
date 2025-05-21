# 📘 README – leroyren.art / ScrollGrid

## 🌀 Formål
Dette site er et levende kunstværk skabt af Leroy Ren – et spiralisk felt af billeder, scrolls, lyd og portaler. Alt styres gennem en `index.html`, som er din forside.

---

## 📁 Mapper og struktur

### `index.html`
Din forside. Indeholder SpiralMap med:
- Scroll-kort
- Farvekoder
- Billeder og lyd

### `/public/images/`
Alle billeder, som vises i SpiralMap.
- Brug navne som `IMG_0046.jpeg`
- Bruges også til billeder på scroll-kort

### `/public/scrolls/`
Alle HTML-scrolls du åbner via kortene.
- Eksempel: `scroll_025_ascension.html`

### `/public/files/`
Breve, PDF'er, .docx-scrolls osv.
- Vises ikke automatisk, men kan linkes til

### `/public/audio/`
Lydfiler (mp3) til SpiralMap.
- `transmission006.mp3` bruges lige nu

---

## 🔄 Hvordan du opdaterer

### ➕ Tilføj nye billeder:
- Upload dem til `/public/images/`
- Sørg for de hedder noget unikt (fx `IMG_0061.jpeg`)
- Hvis du vil have dem vist: tilføj dem til billedlisten i `index.html`

### 📝 Tilføj ny scroll:
- Upload HTML-filen til `/public/scrolls/`
- Tilføj et kort til `index.html` med:

```html
<div class="scroll-card">
  <img src="/images/MIT_BILLEDE.jpeg">
  <h3>Scroll XXX – Titel</h3>
  <p>Kort beskrivelse.</p>
  <a href="/scrolls/scroll_xxx_titel.html">Åbn Scroll</a>
</div>
