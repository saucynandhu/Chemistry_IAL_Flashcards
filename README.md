# 🧪 Organic Chemistry Flashcards

A lightweight, single-file flashcard web app for A-Level organic chemistry — no frameworks, no build step, no dependencies. Just open the HTML file and study.

**[→ Live site](https://your-username.github.io/your-repo-name)** ← update this link after you deploy

---

## What's inside

52 cards covering the core organic reaction pathways:

| Category | Cards |
|---|---|
| Aliphatic reactions | 29 |
| Aromatic reactions | 9 |
| Grignard reactions | 5 |
| Functional group tests | 9 |

Topics include: alkene addition, alcohol oxidation, halogenoalkane substitution/elimination, esterification, acyl chloride reactions, Friedel-Crafts, nitration, diazotisation, Grignard synthesis, Tollens'/Fehling's/2,4-DNP tests, and more.

---

## Features

- **Flip cards** — click/tap to reveal the answer
- **Score tracking** — mark each card as ✓ knew it or ✗ missed it
- **Results screen** — see your percentage at the end of each deck
- **Category filter** — study one topic at a time or all at once
- **Shuffle** — randomise the deck order
- **Keyboard shortcuts** — see below
- **Works offline** — one HTML file, no server needed (loads Google Fonts if online)

### Keyboard shortcuts

| Key | Action |
|---|---|
| `Space` or `Enter` | Flip card |
| `→` | Next card |
| `←` | Previous card |
| `K` | Mark as knew it (after flipping) |
| `M` | Mark as missed it (after flipping) |

---

## Hosting on GitHub Pages (step by step)

1. **Create a new GitHub repository** — name it anything, e.g. `chem-flashcards`

2. **Upload the files** — drag `index.html` (rename `chem_flashcards.html` to `index.html`) and this `README.md` into the repo

3. **Enable GitHub Pages**:
   - Go to your repo → **Settings** → **Pages**
   - Under *Source*, select **Deploy from a branch**
   - Set branch to `main`, folder to `/ (root)`
   - Click **Save**

4. **Wait ~60 seconds**, then your site will be live at:
   ```
   https://your-username.github.io/your-repo-name
   ```

5. **Update the link** at the top of this README with your actual URL

> **Rename the file:** GitHub Pages looks for `index.html` by default. If you keep the file named `chem_flashcards.html`, your URL will be `.../chem_flashcards.html` — renaming to `index.html` gives you the cleaner root URL.

---

## File structure

```
your-repo/
├── index.html      ← the entire app (renamed from chem_flashcards.html)
└── README.md       ← this file
```

Everything — HTML, CSS, and JavaScript — lives in `index.html`. No npm, no build tools, nothing to install.

---

## Adding or editing cards

All cards are defined in the `CARDS` array near the bottom of `index.html`. Each card looks like this:

```js
{
  cat: "aliphatic",       // "aliphatic" | "aromatic" | "grignard" | "test"
  q:   "Alkene → Alkane", // the question (front of card)
  a:   "H₂, Ni catalyst, ~150°C", // the answer (back of card)
  detail: "Mechanism: catalytic hydrogenation" // extra detail shown below answer
}
```

Just add a new object to the array following the same format and it'll show up automatically in the right category.

---

## Credits

Content based on N Goalby / [chemrevise.org](https://chemrevise.org) A-Level Chemistry notes.  
Built with vanilla HTML, CSS, and JS. Font: [DM Sans + DM Mono](https://fonts.google.com) via Google Fonts.
