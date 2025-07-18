# husvalou – TypeScript + React site

This project is the new version of **husvalou** built from scratch with TypeScript, React 18 and Vite.

## Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Structure

```
├── index.html           # Vite entry
├── src/
│   ├── main.tsx         # React root render
│   ├── App.tsx          # Router & pages
│   ├── components/      # Re-usable UI parts
│   └── pages/           # Home & Projects pages
├── css/style.css        # Global design system (original aesthetic)
├── images/              # Assets
```

## Pages

* **Home** — landing with hero, animated background and socials.
* **Projects** — showcase and Discord invite.

The former *Contact* page has been removed per redesign.
