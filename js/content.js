/* =====================================================================
   STORE TEXT: customer care guides and legal policies (shown in the pop-up from the footer)
   Shared by index.html and about.html. The header search reads this file too.
   ===================================================================== */
window.OFT_CONTENT = (() => {
const { WHATSAPP, EMAIL } = window.OFT_DATA;

const POLICIES = {
  terms: { title: "Terms & Conditions", intro: "These draft terms explain the basis on which OFT presents products and accepts customer enquiries and orders. Please review and customise the operational details before launch.", sections: [
    ["1. About OFT", "OFT is a clothing label based in Nairobi, Kenya. References to “we”, “us” or “our” mean OFT; “you” means a visitor or customer."],
    ["2. Product information", "We aim to show product colours, descriptions, sizes and prices as accurately as possible. Screen settings and photographic lighting can affect how colours appear. Product availability may change, and an item shown online is not guaranteed to be in stock until we confirm your order."],
    ["3. Orders and confirmation", "Orders and enquiries are currently handled through WhatsApp. Sending an enquiry or order request is not acceptance by OFT. An order is accepted only after we confirm the item, selected colour/size, total price, delivery arrangement and payment instructions in writing."],
    ["4. Prices and payment", "Displayed prices are quoted in Kenyan shillings unless stated otherwise. Any USD or EUR display is an estimate and the final amount will be confirmed in KES. Delivery charges, where applicable, will be disclosed before you commit. Do not send payment to an account or number that has not been confirmed through OFT’s official contact channels."],
    ["5. Changes and cancellations", "Contact us as soon as possible if you need to change or cancel a request. We will try to help, but changes may not be possible once an order has been prepared or handed to a delivery provider. Any cancellation, return or refund will be handled under the applicable policy and mandatory law."],
    ["6. Use of this website", "You agree not to misuse the website, interfere with its operation, attempt unauthorised access, submit false information or use its content for unlawful purposes."],
    ["7. Intellectual property", "Website text, branding, logos, product photography and original creative material belong to OFT or their respective rights holders. You may not reproduce or commercially use them without prior written permission."],
    ["8. Liability", "Nothing in these terms limits a right or remedy that cannot lawfully be limited. To the extent permitted by law, OFT is not responsible for indirect loss arising from temporary website interruption, third-party network failures or events outside our reasonable control."],
    ["9. Privacy", "We handle personal information in accordance with our Privacy Policy and applicable Kenyan data-protection law. Please read that policy for details about the information used to process enquiries and orders."],
    ["10. Governing law and updates", "These terms are governed by the laws of Kenya. We may update them by publishing a revised version on this website. The version in force when an order is confirmed will apply to that order, subject to applicable law."]
  ]},
  shipping: { title: "Shipping Policy", intro: "This is a working draft. Delivery areas, fees, timelines and available methods should be confirmed with OFT before an order is paid for.", sections: [
    ["1. Delivery areas", "OFT is based in Nairobi, Kenya. Delivery within Nairobi, to other parts of Kenya and to destinations outside Kenya may be available depending on the destination and courier coverage. Ask us to confirm service to your location before placing an order."],
    ["2. Processing time", "Orders are prepared after the order details and payment arrangements have been confirmed. Preparation time can vary with stock availability, order volume, weekends and public holidays. We will communicate the expected dispatch or handover date when confirming your order."],
    ["3. Delivery estimates", "Any delivery date or timeframe provided is an estimate, not a guaranteed arrival date, unless we expressly confirm otherwise in writing. Courier delays, weather, public holidays, security restrictions and incorrect address details may affect delivery."],
    ["4. Delivery fees and payment", "The delivery fee, delivery method and any applicable additional charges will be communicated and agreed with you before payment is completed. For international deliveries, customs duties, import taxes or clearance charges may be payable by the recipient unless we expressly agree otherwise."],
    ["5. Address and contact details", "Please provide a complete delivery address, a working phone number and any useful directions. You are responsible for checking these details in the order confirmation and telling us promptly if they are incorrect."],
    ["6. Receiving your order", "Please check the parcel and items as soon as reasonably possible after delivery. If the parcel appears damaged, incomplete or incorrect, contact us promptly with your order details and clear photographs of the packaging and items."],
    ["7. Missed or failed delivery", "If a delivery cannot be completed because the recipient is unavailable, the address is inaccurate or the courier cannot reach the recipient, a re-delivery or return fee may apply. We will explain any additional charge and obtain your agreement before arranging a paid re-delivery."],
    ["8. Delays, loss or tracking", "Where tracking is available, we will share the tracking details. If a parcel is delayed or appears lost, contact us so we can follow up with the delivery provider. We will work with you to resolve confirmed delivery issues fairly and in line with applicable law."],
    ["9. Changes to delivery", "Contact us immediately if you need to change the delivery address or instructions. Changes cannot be guaranteed after dispatch and may cause extra charges or delays."],
    ["10. Questions", "For a delivery update or shipping quote, contact OFT through the WhatsApp or email details shown on this website. Please include your name and order reference, if available."]
  ]},
  returns: { title: "Returns & Refunds", intro: "This draft is intended to set out a fair process. Final return windows and any product-specific exclusions should be reviewed and confirmed by OFT before publication.", sections: [
    ["1. Contact us first", "If an item is incorrect, faulty, damaged or not what you ordered, contact us as soon as possible after receiving it. Include your order details, a description of the issue and clear photographs where relevant. Please do not send an item back before we provide return instructions."],
    ["2. Incorrect, damaged or faulty items", "We will review the issue and, where appropriate, arrange a replacement, repair, refund or another remedy in accordance with applicable consumer law. We may ask for reasonable evidence to understand the issue."],
    ["3. Change of mind", "If you simply change your mind, contact us before returning the item. Whether a change-of-mind return can be accepted will depend on the item’s condition, hygiene considerations and the return terms confirmed at purchase. Statutory consumer rights are not affected."],
    ["4. Condition of returned items", "Unless the item is faulty or incorrect, please keep it unworn, unwashed, undamaged and with original tags and packaging where possible. Items showing wear, washing, alterations or damage caused after delivery may not qualify for a voluntary change-of-mind return."],
    ["5. Refunds", "Where a refund is approved, we will confirm the amount and method with you. Processing time may depend on the payment provider or financial institution. Original delivery charges and return shipping costs will be handled as required by law and as communicated when the return is approved."],
    ["6. Exchanges", "Exchanges depend on stock availability. If the requested replacement is unavailable, we will discuss an appropriate alternative or refund where applicable."],
    ["7. Return shipping", "If the item is confirmed to be faulty, damaged on arrival or incorrectly supplied, we will explain the return or collection arrangement. For other approved returns, responsibility for return delivery costs will be confirmed before you send the item."],
    ["8. How to reach us", "Start a return request using the WhatsApp or email contact details on this website. Include your order reference and the reason for the request."]
  ]},
  privacy: { title: "Privacy Policy", intro: "OFT respects your privacy. This draft describes the personal information that may be used when you browse, enquire about or order our products.", sections: [
    ["1. Information we may collect", "Depending on how you interact with us, we may receive your name, phone number, email address, delivery address, order details, messages and information you choose to share. Basic technical information may also be collected by hosting or security services."],
    ["2. How we use information", "We use information to respond to enquiries, confirm and fulfil orders, arrange delivery, provide customer support, maintain business records, protect the website and meet legal obligations. We will not use your contact details for unrelated marketing without an appropriate lawful basis or consent where required."],
    ["3. Sharing information", "We may share the minimum information needed with service providers such as couriers, payment providers, website hosting providers and professional advisers, or where disclosure is required by law. We do not sell personal information."],
    ["4. Retention and security", "We keep information only for as long as reasonably necessary for the purposes described or as required by law. We use reasonable safeguards, but no online transmission or storage system can be guaranteed completely secure."],
    ["5. Your rights", "Subject to applicable law, you may have rights to request access to, correction or deletion of your personal information, object to or restrict certain processing, or withdraw consent where processing relies on consent. You may also have the right to complain to the relevant data-protection authority."],
    ["6. Contact", "For privacy requests or questions, contact OFT using the email address shown on this website. We may need to verify your request before acting on it."],
    ["7. Legal framework and changes", "We aim to handle personal data in line with the Kenya Data Protection Act, 2019 and applicable regulations. We may update this policy by publishing a revised version here."]
  ]},
  cookies: { title: "Cookie Policy", intro: "This draft explains cookies and similar technologies that may be used by the website or its service providers.", sections: [
    ["1. What cookies are", "Cookies are small files stored on your device. Similar technologies may remember preferences, support security or help a website function."],
    ["2. How they may be used", "Essential technologies may be needed for core website operation, security and remembering settings. If analytics, advertising or other non-essential cookies are added, this policy should be updated to identify them and explain how visitors can manage their choices."],
    ["3. Third-party services", "Embedded content, fonts, analytics or other external services may process technical information under their own policies. The current site loads web fonts from Google Fonts; your browser may contact Google to retrieve those font files."],
    ["4. Managing cookies", "You can manage or delete cookies through your browser settings. Blocking essential cookies or similar technologies may affect how parts of a website work."],
    ["5. Updates", "We may update this policy when the website’s technology changes. Please check this page for the current version."]
  ]}
};

/* =====================================================================
   CUSTOMER CARE (footer > Customer care). Edit the wording freely.
   A section is  [ "Heading", body ]  where body is one of:
     "text"                      a paragraph (simple HTML such as <b> or <a> is allowed)
     { ul: [..] } / { ol: [..] } a bullet / numbered list
     { table: { head: [..], rows: [[..],[..]] }, note: "optional" }
     { cta: { msg: "WhatsApp message", label: "Button text" } }   WhatsApp + email buttons
     [ part, part, ... ]         several of the above in a row
   accordion:true shows each section as a question that opens and closes (FAQs).
   kw = extra search words for the header search.
   ===================================================================== */
const PHONE = "+" + WHATSAPP;
const CARE = {
  order: { title: "How to order", kw: "buy purchase place order whatsapp pay payment checkout confirm bulk wholesale hours",
    intro: "Ordering from OFT is simple and personal. You choose your piece here, we confirm everything with you on WhatsApp, and nothing is final until we have confirmed it with you in writing.",
    sections: [
      ["1. Find your piece", [
        "Use the two dropdowns at the top of the page to filter by clothing type (T-shirts, long sleeves, tank tops, jorts) and by category (Everyday, Streetwear, Smart casual, Outdoor). A type with no pieces yet shows a coming-soon note.",
        "Know what you want already? Press the Search button at the top and type a name, a colour or a word like “jorts”.",
        "Click any piece to see it up close, read its description and see its price."]],
      ["2. Choose colour and quantity", [
        "On a piece’s page, tap a colour tag (Moss, White, Black or Sand) to see the piece in that colour. A tag that is greyed out is not available for that piece.",
        "Set your quantity and choose KES, USD or EUR to see the price. USD and EUR are estimates; the final amount is always confirmed in Kenyan shillings (KES)."]],
      ["3. Send your order on WhatsApp", [
        "Press <b>Order on WhatsApp</b>. A message is written for you with the piece, colour, quantity and total. Before you send it, add:",
        { ul: ["Your size (see the <a href=\"#\" data-policy=\"size\">Size guide</a>)", "Your full name", "Your delivery area or address and a phone number we can reach you on", "Anything else we should know, such as a gift or a date you need it by"] }]],
      ["4. We confirm everything with you", "We reply to confirm availability, the colour and size, the total price in KES, how the order will reach you and how to pay. An order is accepted only once we have confirmed these details in writing. Sending a message is a request, not a completed order."],
      ["5. Pay safely", "We will tell you exactly how to pay. Only pay to the number or account we give you through OFT’s official WhatsApp (" + PHONE + ") or email (" + EMAIL + "). If a payment request looks different from what we confirmed, stop and check with us first."],
      ["6. Receive your order", "Once the details and payment are confirmed, we prepare your order and tell you the expected dispatch or handover date. See <a href=\"#\" data-policy=\"delivery\">Delivery and returns</a> for what to check when it arrives."],
      ["Changes and cancellations", "Need to change or cancel something? Message us as soon as possible. We will help where we can, but changes may not be possible once an order has been prepared or handed to a courier."],
      ["Ordering for a team or to resell", "Ordering in bulk, for a team or an event, or to resell? Message us on WhatsApp and tell us what you have in mind, and we will come back to you about wholesale."],
      ["Opening hours", "Monday to Saturday, 9am to 6pm (EAT). We usually reply within the hour during these hours; messages sent outside them are answered when we are back."],
      ["Need a hand?", { cta: { msg: "Hi OFT! I need help placing an order.", label: "Ask us on WhatsApp" } }]
    ] },

  delivery: { title: "Delivery & returns", kw: "shipping courier dispatch parcel tracking refund exchange return damaged faulty wrong item arrive late lost fee cost",
    intro: "What to expect once your order is confirmed, and what to do if something is not right. This is a plain-language summary; the full policies are linked at the bottom.",
    sections: [
      ["Where we deliver", "We are based in Nairobi, Kenya. Depending on courier coverage, we may be able to deliver within Nairobi, to other parts of Kenya and to some places outside Kenya. Tell us your location when you order and we will confirm what is possible before you pay."],
      ["Delivery cost and timing", [
        "The delivery method, the fee and the estimated timeframe are agreed with you before you pay. A delivery estimate is not a guaranteed arrival date, because courier delays, weather, public holidays and incorrect address details can all affect delivery.",
        "For deliveries outside Kenya, customs duties, import taxes or clearance charges may be payable by the person receiving the parcel unless we agree otherwise with you."]],
      ["How your order is prepared", { ol: ["We confirm the details and payment arrangements with you.", "We prepare and check your piece. Preparation time depends on stock, how busy we are, weekends and public holidays.", "We tell you the expected dispatch or handover date.", "Your order is handed to a courier or to you. Where tracking is available, we share it."] }],
      ["Give us a delivery address that works", [
        { ul: ["A complete address with a nearby landmark if you can", "A working phone number the courier can call", "Someone available to receive the parcel"] },
        "If a delivery fails because nobody was available or the address was wrong, a re-delivery or return fee may apply. We will explain any extra charge and agree it with you first."]],
      ["When it arrives", "Please check the parcel and your items as soon as you reasonably can. If something is damaged, incomplete or not what you ordered, message us promptly with your order details and clear photos of the packaging and the item."],
      ["Late or lost parcels", "If your parcel is late or seems lost, contact us. We will follow up with the delivery provider and work with you to fix confirmed delivery problems fairly."],
      ["Returns: contact us first", [
        "Please message us before sending anything back, and do not post or send an item until we give you return instructions. Include your name, your order details, what is wrong and clear photos where it helps."]],
      ["Faulty, damaged or incorrect items", "We will look into it and, where appropriate, arrange a replacement, a repair, a refund or another remedy in line with consumer law. We may ask for reasonable evidence so we can understand the problem."],
      ["Changed your mind?", "Contact us before returning anything. Whether a change-of-mind return is possible depends on the item’s condition and the terms confirmed when you ordered. Please keep the item unworn, unwashed and undamaged, with its tags and packaging where possible. Your statutory consumer rights are not affected."],
      ["Refunds and exchanges", "If a refund is approved, we confirm the amount and the method with you; processing time can depend on your payment provider. Exchanges depend on stock. If the replacement you want is not available, we will talk through an alternative or a refund."],
      ["Read the full policies", ["The full details are in our <a href=\"#\" data-policy=\"shipping\">Shipping policy</a> and our <a href=\"#\" data-policy=\"returns\">Returns and refunds policy</a>.", { cta: { msg: "Hi OFT! I have a question about delivery or a return.", label: "Ask us on WhatsApp" } }]]
    ] },

  size: { title: "Size guide", kw: "sizing measurements measure fit chart chest waist hip length small medium large xl xxl jorts tee",
    intro: "Find your fit before you order. The numbers below are approximate and can vary slightly between pieces and batches. If you are between sizes, send us your usual size and your height on WhatsApp and we will help you choose.",
    sections: [
      ["How to measure yourself", { ol: [
        "<b>Chest:</b> wrap a soft tape around the fullest part of your chest, under your arms, keeping it level and snug but not tight.",
        "<b>Waist:</b> measure around your natural waist, the narrowest part of your torso (use this for jorts).",
        "<b>Hip:</b> measure around the fullest part of your hips.",
        "<b>Garment length:</b> lay a tee you already like flat and measure from the top of the shoulder seam to the hem. Compare it with the table."] }],
      ["T-shirts, long sleeves and tank tops", [
        { table: { head: ["Size", "Your chest (cm)", "Garment length (cm)"], rows: [["S", "88 – 94", "68"], ["M", "94 – 100", "70"], ["L", "100 – 106", "72"], ["XL", "106 – 112", "74"], ["XXL", "112 – 118", "76"]] },
          note: "Cropped long sleeves are shorter in the body than the length shown." }]],
      ["Jorts", [
        { table: { head: ["Size", "Your waist (cm)", "Your hip (cm)"], rows: [["S", "71 – 76", "91 – 96"], ["M", "76 – 81", "96 – 101"], ["L", "81 – 86", "101 – 106"], ["XL", "86 – 91", "106 – 111"]] },
          note: "Our jorts have a wide leg, so choose your size by your waist and hip." }]],
      ["Between two sizes?", { ul: ["Like a relaxed fit? Go up a size.", "Like it closer to the body? Stay with your measured size.", "Still unsure? Send your usual size and height and we will recommend one."] }],
      ["Need help choosing?", { cta: { msg: "Hi OFT! Can you help me choose a size? My usual size is ___ and my height is ___.", label: "Ask about sizing on WhatsApp" } }]
    ] },

  care: { title: "Care guide", kw: "wash washing laundry iron ironing dry drying stain bleach shrink fade print cotton clean store",
    intro: "Good pieces last when they are looked after. Follow the label on your garment first; where the label says nothing else, this is how we recommend caring for OFT tees, long sleeves, tank tops and jorts.",
    sections: [
      ["Before the first wear", "Wash a new piece on its own the first time, especially in Black, Moss or other deep colours, so any loose dye cannot touch your lighter clothes."],
      ["Washing", { ul: [
        "Turn the piece inside out to protect the print.",
        "Wash in cool water (around 30°C) on a gentle cycle, or by hand, which is the gentlest.",
        "Use a mild detergent. Avoid bleach, and go easy on fabric softener.",
        "Wash dark and light pieces separately."] }],
      ["Drying", { ul: [
        "Dry flat or on a hanger, in the shade. Strong sunshine fades colour.",
        "Avoid hot tumble drying; heat can shrink the fabric and crack prints.",
        "Do not wring or twist the piece. Press out extra water gently."] }],
      ["Ironing", "If you need to iron, turn the piece inside out and use low to medium heat. Never iron directly over printed artwork, such as the Wear the City skyline. A steamer works well too."],
      ["Looking after prints", "Printed artwork lasts longest when the piece is washed inside out in cool water, never scrubbed, and never picked at or stretched while it is wet."],
      ["Stains", { ul: [
        "Treat a stain as soon as you can.",
        "Blot, do not rub, then dab with a little mild soap and cool water.",
        "Test any stain remover on a hidden spot first, and keep bleach away from coloured pieces."] }],
      ["Jorts", "Wash jorts inside out in cool water. Wash them separately for the first few washes, as contrast stitching and darker camo shades can release colour."],
      ["Storing", "Fold tees, long sleeves and tanks, or hang them on a wide hanger, so the shoulders keep their shape. Store dry and out of direct sun, and never put away a damp piece."],
      ["Questions about a piece?", { cta: { msg: "Hi OFT! I have a question about caring for my piece.", label: "Ask us on WhatsApp" } }]
    ] },

  faq: { title: "FAQs", accordion: true, kw: "questions help answers frequently asked",
    intro: "Quick answers to the questions we get most often.",
    sections: [
      ["How do I place an order?", "Orders are placed over WhatsApp. Pick a piece, press Order on WhatsApp and send the message that opens. We then confirm the details with you. See <a href=\"#\" data-policy=\"order\">How to order</a> for each step."],
      ["Can I pay by card or check out on the website?", "Not at the moment. This website does not take payments itself. After you message us we confirm your order and send payment instructions in writing. Only pay to details confirmed through OFT’s official channels."],
      ["Which currencies do you show?", "Prices are in Kenyan shillings (KES). USD and EUR amounts are approximate conversions, and the final amount is confirmed in KES."],
      ["How do I know if a colour is available?", "Open the piece and look at the colour tags. A greyed-out tag means that colour is not available for that piece. Screens and lighting can change how a colour looks, so ask us if the exact shade matters to you."],
      ["Is a piece in stock if it is on the website?", "Availability can change. A piece shown online is not guaranteed to be in stock until we confirm your order."],
      ["What size should I order?", "Use the <a href=\"#\" data-policy=\"size\">Size guide</a> to compare your measurements. If you are unsure, send us your usual size and height on WhatsApp and we will recommend one."],
      ["Do you deliver, and what does it cost?", "Delivery depends on where you are. We confirm the method, the fee and the timeframe with you before you pay. See <a href=\"#\" data-policy=\"delivery\">Delivery and returns</a>."],
      ["How long will my order take?", "We prepare your order after the details and payment arrangements are confirmed, then tell you the expected dispatch or handover date. Delivery dates are estimates, not guarantees."],
      ["Can I return or exchange something?", "Please contact us before sending anything back. We will tell you how to proceed and whether a return, exchange or refund applies. The details are in <a href=\"#\" data-policy=\"delivery\">Delivery and returns</a> and the <a href=\"#\" data-policy=\"returns\">Returns and refunds policy</a>."],
      ["My item arrived damaged or is not what I ordered.", "We are sorry about that. Message us promptly with your order details and clear photos of the packaging and the item, and we will put it right in line with consumer law."],
      ["Can I change or cancel my order?", "Message us as soon as possible. We will try to help, but changes may not be possible once your order has been prepared or handed to a courier."],
      ["How should I wash my OFT pieces?", "Inside out, in cool water on a gentle cycle, and dry in the shade. The full advice is in the <a href=\"#\" data-policy=\"care\">Care guide</a>."],
      ["Do you do wholesale or bulk orders?", "Yes, tell us what you have in mind. Message us on WhatsApp (" + PHONE + ") and we will come back to you."],
      ["Where can I buy OFT?", "Here on this website through WhatsApp, and through our social channels and in-person experiences. Follow us on Instagram, TikTok, YouTube or Facebook, or join our WhatsApp channel, to hear about new drops."],
      ["How can I contact OFT?", "WhatsApp: " + PHONE + ". Email: " + EMAIL + ". We are in Nairobi, Kenya, and reachable Monday to Saturday, 9am to 6pm (EAT)."],
      ["How is my personal information used?", "We use it to answer your enquiries, confirm and deliver orders and keep our business records, and we handle it in line with the Kenya Data Protection Act, 2019. Read the <a href=\"#\" data-policy=\"privacy\">Privacy policy</a> for the details."]
    ] }
};
const CARE_ORDER = ["order", "delivery", "size", "care", "faq"];

/* Pages the header search can open (about.html section ids) */
const ABOUT = [
  { title: "About OFT", sub: "Our story", href: "about.html", text: "Outfit For Today OFT created from a simple question: what am I wearing today? what you wear today should represent who you are right now" },
  { title: "The beginning", sub: "About OFT", href: "about.html#story", text: "bridge the gap between style and everyday life authentic wearable fashion identity mood confidence self-expression logo signature artwork hangers silhouettes movement" },
  { title: "Why OFT started", sub: "About OFT", href: "about.html#why", text: "real not forced stand out without copying trends represent everyday people build connection youth culture timeless" },
  { title: "Mission, vision and purpose", sub: "About OFT", href: "about.html#foundation", text: "our foundation stylish high-quality everyday wear empowers self-expression recognized lifestyle fashion brand originality authenticity cultural relevance" },
  { title: "What makes OFT different", sub: "About OFT", href: "about.html#different", text: "unique imagery everyday wear with meaning designs rooted in culture not trend cycles every piece tells a story identity not hype" },
  { title: "Where we are headed", sub: "About OFT", href: "about.html#headed", text: "sold through social media and in-person experiences growth larger collections drops brand collaborations expanded online presence future public showcases fashion events global recognition" }
];

return { POLICIES, CARE, CARE_ORDER, ABOUT };
})();
