# Valley Standard Homes static site

Public static website for Valley Standard Homes.

## Site files

- `index.html` - homepage content
- `styles.css` - site styling
- `site.js` - lightweight site behavior
- `areas/` - service-area pages
- `assets/` - images, icons, and logo files
- `CNAME` - custom domain for GitHub Pages
- `.nojekyll` - tells GitHub Pages to publish the static files as-is
- `robots.txt` and `sitemap.xml` - crawl and URL metadata

## Local preview

Run a static file server from the repository root, then open the local URL in a browser.

```sh
python3 -m http.server 4181
```

## Deploy

The site is designed to publish from the repository root with GitHub Pages.

1. In GitHub, go to **Settings > Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and **Folder** to `/root`.
4. Save and wait for GitHub Pages to publish.
5. Keep **Enforce HTTPS** enabled for the custom domain.

## Contact form

The contact form supports a configurable submission endpoint in `index.html`. If no endpoint is configured, it falls back to opening an email draft.
