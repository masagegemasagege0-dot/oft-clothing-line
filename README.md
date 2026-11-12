# OFT clothing line

Open `index.html` in a browser. No build step. Internet is needed only for Google Fonts.

## Replace the placeholder tees with your real clothes

1. Put your photos in `assets/shirts/` (PNG or WebP, **transparent background**, on a hanger, front view,
   same framing and size for every tee, ratio 5:6, 800px wide, hanger hook centred at the top).
2. Open `js/app.js`. At the top, edit the `SHIRTS` list: one line per tee.

       { name: "Black logo tee", img: "assets/shirts/black-logo.webp" },

   Add or remove lines freely. The line, hover and close-up update on their own.

## Colour change (tag buttons)

- **Default:** the tee photo is tinted with the tag colour. The wave rises from the hem to the collar and
  the fabric folds and prints stay visible. Best on plain, light or mid-tone tees. `BLEND` in `app.js`
  can be set to `"multiply"` for white tees.
- **Exact colours (recommended for the final shop):** add real photos of the same tee in each colour and
  list them in `variants`. The wave then reveals the real photo.

       { name: "Black logo tee", img: "assets/shirts/black-logo.webp",
         variants: { Moss: "assets/shirts/variants/black-logo-moss.webp",
                     White: "assets/shirts/variants/black-logo-white.webp" } }

  Colour names must match the `TAGS` list (Moss, White, Black, Sand). A colour with no variant for a tee is shown greyed out and cannot be clicked. `V("name")` lists all four colours; `V("name", "Moss", "Black")` lists only those.

## Other settings (top of `js/app.js`)

`TAGS` colour options, `SPEED` line speed, `INK_MS` colour-change time, `BLEND` tint style.

## Files

- `index.html` page, `css/style.css` look and hover, `js/app.js` behaviour and your tee list
- `assets/shirts/*.webp` the 10 tees, each on a transparent 800 x 960 (5:6) frame with the hanger hook centred at the top, so they all hang from the rope the same way
- `assets/shirts/variants/` pre-rendered Moss/White/Black/Sand version of every tee (what the wave reveals). Prints, labels and the hanger keep their own colours; only the fabric changes. Replace any of them with a real photo of the same tee in that colour (same name, same 800 x 960 frame) whenever you have one


## Added garments

The lineup now includes seven long-sleeve entries and one sleeveless tank top, shown under their own clothing-type filters. Three additional white long-sleeve designs (two full-length versions and one cropped version) have been added from the latest supplied photos.


## Keeping the line even

Every photo must be on the same 800 x 960 transparent frame: hook top at y=2, hook centred at x=400, hanger-to-hem height about 728px. The long sleeves and the tank were re-framed this way (originals kept in `assets/source-originals/`). A new photo that skips this will hang crooked or look oversized.


## Footer, customer care and search

- The site is a static HTML/CSS/JavaScript website; open `index.html` directly or host the folder as a static site.
- The footer includes the OFT story and the supplied black-and-white campaign photograph at `assets/images/about-us.png`.
- Customer Care links open detailed in-page guides for ordering, delivery, returns, sizing, garment care and FAQs. Review delivery and return details before publishing so they match your current operations.
- Use the Search button in the header (or `Ctrl/Cmd + K`) to search products, categories and customer-care pages.
