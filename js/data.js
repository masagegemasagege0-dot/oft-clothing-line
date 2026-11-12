/* =====================================================================
   EDIT THIS FILE: your tees, prices, contacts and links
   (shared by index.html and about.html; the line animation settings stay in app.js)
   type/cats : clothing type (dropdown) and categories (chips) each piece belongs to
   price     : in KES.  RATES = KES per 1 USD / 1 EUR (update when you want prices to match the market)
   variants  : (optional) real photos of the tee in each tag colour, see README
   ===================================================================== */
window.OFT_DATA = (() => {
const WHATSAPP = "254757806940";            // your WhatsApp number, country code first, no + or spaces
const EMAIL    = "hello@oft.co.ke";
const RATES    = { KES: 1, USD: 129, EUR: 150 };
const SOCIAL   = {
  Instagram: "https://www.instagram.com/outfit_for_today___?cplk=cXphb2ppczQ1ZmRu&utm_source=qr",
  Facebook: "https://facebook.com/",
  TikTok: "https://www.tiktok.com/@_oftee?_r=1&_t=ZS-9BL2fVl4nLB",
  YouTube: "https://youtube.com/@outfitfortodayke?si=qRWC3ekjMgG0Gvnf",
  WhatsApp: "https://whatsapp.com/channel/0029VamDtHa9Bb5uCDjKM30N"
};
const SOCIAL_LABEL = { WhatsApp: "Follow the OUTFIT FOR TODAY. channel on WhatsApp" };   // tooltip + screen-reader text
const TYPES = ["Jorts", "T-shirts", "Long sleeves", "Tank tops", "Hoodies", "Shorts", "Caps"];          // types with no pieces show a "coming soon" note
const CATS  = ["All", "Everyday", "Streetwear", "Smart casual", "Outdoor"];
const V = (n, ...cols) => Object.fromEntries((cols.length ? cols : ["Moss", "White", "Black", "Sand"]).map(c => [c, `assets/shirts/variants/${n}-${c.toLowerCase()}.webp`]));   // V("name") = every colour; V("name", "Moss", "Black") = only those, the other tags are disabled
const SHIRTS = [
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-white.webp", variants: V("skyline-white"), type: "T-shirts", cats: ["Everyday", "Streetwear"], price: 1000,
    desc: "White tee with the Nairobi skyline in red and “Wear the City” beneath it, on the back." },
  { name: "THE FLOWSTATE", img: "assets/shirts/wave-black.webp", variants: V("wave-black"), type: "T-shirts", cats: ["Streetwear"], price: 1000,
    desc: "Black tee with “Wear the City” lettering in white, flowing in a wave across the chest and over the shoulders." },
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-orange.webp", variants: V("skyline-orange"), type: "T-shirts", cats: ["Streetwear", "Outdoor"], price: 1000,
    desc: "Orange tee with the Nairobi skyline in black and “Wear the City” beneath it, on the back." },
  { name: "47 white tee", img: "assets/shirts/47-white.webp", variants: V("47-white"), type: "T-shirts", cats: ["Everyday", "Streetwear"], price: 1800,
    desc: "Crisp white with a small hanger mark on the chest, a bold 47 and a quiet detail on the sleeve. Understated, with something to say." },
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-forest.webp", variants: V("skyline-forest"), type: "T-shirts", cats: ["Outdoor", "Everyday"], price: 1000,
    desc: "Forest green tee with the Nairobi skyline in black and “Wear the City” beneath it, on the back." },
  { name: "47 black tee", img: "assets/shirts/47-black.webp", variants: V("47-black"), type: "T-shirts", cats: ["Streetwear", "Smart casual"], price: 1800,
    desc: "Black with a small hanger mark on the chest, a bold 47 and a detail on the sleeve. Dress it up under a jacket or wear it on its own." },
  { name: "THE FLOWSTATE", img: "assets/shirts/wave-white.webp", variants: V("wave-white"), type: "T-shirts", cats: ["Streetwear", "Everyday"], price: 1000,
    desc: "White tee with “Wear the City” lettering in red, flowing in a wave across the chest and over the shoulders." },
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-cream.webp", variants: V("skyline-cream"), type: "T-shirts", cats: ["Everyday", "Smart casual"], price: 1000,
    desc: "Cream tee with the Nairobi skyline in black and “Wear the City” beneath it, on the back." },
  { name: "THE OFT 47 JERSEY", img: "assets/shirts/47-outline-black.webp", variants: V("47-outline-black"), type: "T-shirts", cats: ["Streetwear"], price: 1800,
    desc: "Black tee with a large white outline of Nairobi County and a bold 47 across the back." },
  { name: "Sleeve band tee", img: "assets/shirts/band-black.webp", variants: V("band-black"), type: "T-shirts", cats: ["Streetwear", "Smart casual"], price: 1000,
    desc: "Plain black up front with a printed band wrapped around the sleeve. Minimal at first glance, with a detail you notice later." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-hanger-black.webp", variants: { Black: "assets/shirts/long-sleeve-hanger-black.webp" }, type: "Long sleeves", cats: ["Everyday", "Streetwear"], price: 1500,
    desc: "Black long sleeve with a small OFT hanger mark on the chest and vertical artwork down both sleeves." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-hanger-white.webp", variants: { White: "assets/shirts/long-sleeve-hanger-white.webp" }, type: "Long sleeves", cats: ["Everyday", "Streetwear"], price: 1500,
    desc: "White long sleeve with a small OFT hanger mark on the chest and vertical artwork down both sleeves." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-crop-black.webp", variants: { Black: "assets/shirts/long-sleeve-crop-black.webp" }, type: "Long sleeves", cats: ["Streetwear"], price: 1500,
    desc: "Black cropped long sleeve with a small OFT hanger mark on the chest and vertical artwork down both sleeves." },
  { name: "07F long sleeve", img: "assets/shirts/long-sleeve-07f-black.webp", variants: { Black: "assets/shirts/long-sleeve-07f-black.webp" }, type: "Long sleeves", cats: ["Streetwear", "Everyday"], price: 1500,
    desc: "A black long-sleeve top with a compact 07F chest graphic and a hanger detail at the cuff." },
  { name: "WTC TANKTOP", img: "assets/shirts/tank-city-white.webp", variants: { White: "assets/shirts/tank-city-white.webp" }, type: "Tank tops", cats: ["Streetwear", "Outdoor"], price: 1800,
    desc: "White sleeveless top with “The City Wear” in red, flowing in a wave across the chest." },
  { name: "LON-CAM-RANGER JORTS", img: "assets/shirts/jorts-camo-black.webp", variants: { Black: "assets/shirts/jorts-camo-black.webp" }, type: "Jorts", cats: ["Streetwear", "Outdoor"], price: 2500,
    desc: "Wide-leg camo jorts in charcoal and black, with contrast stitching and angled panel seams." },
  { name: "LON-CAM-RANGER JORTS", img: "assets/shirts/jorts-camo-purple.webp", variants: {}, type: "Jorts", cats: ["Streetwear", "Outdoor"], price: 2500,
    desc: "Wide-leg camo jorts in purple-grey with white flecks and contrast stitching." }
];
const TAGS = [
  { c: "#5b6b3a", n: "Moss" }, { c: "#f3f3f1", n: "White", light: 1 },
  { c: "#141414", n: "Black" }, { c: "#d9cdb4", n: "Sand", light: 1 }
];
return { WHATSAPP, EMAIL, RATES, SOCIAL, SOCIAL_LABEL, TYPES, CATS, SHIRTS, TAGS };
})();
