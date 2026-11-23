import type {
  FaqItem,
  FormulaIngredient,
  HowToStep,
  PolishShade,
  Product,
  WhyUsPillar,
} from '../types/store';

export const IMAGES = {
  banalingProduct: '/assets/aistudio/Gemini_Generated_Image_x169hox169hox169_db426bbe.jpg',
  banalingPricePhoto: '/assets/aistudio/Gemini_Generated_Image_21uaow21uaow21ua_6d749b6b.jpg',
  heroShoes: '/src/assets/images/hero_polish_showcase_1795410959288.jpg',
  creamJar: '/src/assets/images/product_cream_jar_1795410961009.jpg',
  brushKit: '/src/assets/images/product_brush_kit_1795410961212.jpg',
  craftBuffing: '/src/assets/images/craft_leather_buffing_1795410961823.jpg',
} as const;

export const POLISH_SHADES: PolishShade[] = [
  {
    id: 'obsidian',
    name: 'Charcoal Black',
    hex: '#161618',
    leatherPair: 'Black School Shoes, Office Oxfords & Formal Derbies',
    finishNote:
      'Activated coconut charcoal & banana peel extract restore scuffed black leather to a deep, natural sheen.',
    stockLabel: 'In Stock · Eco Batch',
  },
  {
    id: 'havana',
    name: 'Roasted Bark Brown',
    hex: '#3A2218',
    leatherPair: 'Dark Brown Loafers, Brogues & Work Boots',
    finishNote:
      'Toasted banana peel tannins and natural plant wax enrich dark brown uppers without harsh chemical dyes.',
    stockLabel: 'In Stock · Eco Batch',
  },
  {
    id: 'cognac',
    name: 'Warm Tan',
    hex: '#7C3E1D',
    leatherPair: 'Chestnut Derbies, Tan Leather & Daily Commuter Shoes',
    finishNote:
      'Gentle amber-toned conditioning wax revives faded tan leather while protecting against daily dust.',
    stockLabel: 'In Stock · Eco Batch',
  },
  {
    id: 'neutral',
    name: 'Raw Peel Clear',
    hex: '#DFD9CE',
    leatherPair: 'Multi-Tone Leather, Colored Sneakers & Bags',
    finishNote:
      'Unpigmented upcycled banana peel balm for clean nourishment and water resistance on any smooth leather color.',
    stockLabel: 'In Stock · Eco Batch',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'banaling-natural-polish',
    name: 'Banaling Natural Shoe Polish',
    subtitle: 'Upcycled Banana Peel & Charcoal',
    category: 'Eco Paste Tin',
    pricePhp: 55,
    volumeOrSpec: '75g Reusable Matte Tin',
    image: IMAGES.banalingPricePhoto,
    imageAlt:
      'Open matte black Banaling Natural Shoe Polish tin on light wood table beside a wooden horsehair brush and linen cloth',
    description:
      'Our everyday low-cost eco polish made from upcycled Philippine banana peels and activated charcoal. Conditions leather and restores deep shine without petroleum.',
    supportsShade: true,
  },
];

export const FORMULA_INGREDIENTS: FormulaIngredient[] = [
  {
    id: 'banana-peel',
    code: '01',
    name: 'Upcycled Banana Peel',
    origin: 'Mindanao & Laguna Fruit Co-ops',
    role: 'Natural Conditioning Base',
    benefit:
      'Rich in mild potassium esters and natural fruit waxes that soften creases and lift surface scuffs gently.',
    ecoMetric: '100% Upcycled Agricultural Peel',
  },
  {
    id: 'coconut-charcoal',
    code: '02',
    name: 'Activated Coconut Charcoal',
    origin: 'Quezon Province Coconut Husks',
    role: 'Breathable Deep Pigment',
    benefit:
      'Micro-milled carbon restores true rich darkness on school shoes and oxfords without harsh synthetic dyes or chemical odor.',
    ecoMetric: 'Zero Petroleum · Odor-Free',
  },
  {
    id: 'plant-wax',
    code: '03',
    name: 'Botanical Sealing Wax',
    origin: 'Local Plant & Rice Bran Extracts',
    role: 'Moisture & Dust Shield',
    benefit:
      'Locks moisture into the hide while beading away sudden Manila rain splashes so shoes stay cleaner longer.',
    ecoMetric: 'Biodegradable Natural Seal',
  },
  {
    id: 'matte-tin',
    code: '04',
    name: 'Reusable Aluminum Tin',
    origin: '75g Screw-Top Matte Canister',
    role: 'Zero Single-Use Plastic',
    benefit:
      'Durable travel-ready tin keeps paste fresh for months and easily recycles or reuses once your polish finishes.',
    ecoMetric: '₱55.00 Complete Tin',
  },
];

export const WHY_US_PILLARS: WhyUsPillar[] = [
  {
    number: '01',
    title: 'Upcycled Banana Peel Formula',
    summary: 'Turns agricultural fruit waste into rich leather nutrition.',
    detail:
      'Banana peels are naturally packed with potassium, mild fruit waxes, and tannins that soften dry leather fibers and lift everyday scuffs—100% biodegradable.',
  },
  {
    number: '02',
    title: 'Activated Charcoal Pigment',
    summary: 'Deep natural color with zero harsh petroleum dyes.',
    detail:
      'Finely milled coconut-shell charcoal delivers rich, breathable black coverage that masks scratches cleanly without toxic solvent fumes or silicone buildup.',
  },
  {
    number: '03',
    title: 'Low-Cost Everyday Value (₱55)',
    summary: 'Premium shoe care priced for students, commuters, and families.',
    detail:
      'By sourcing local banana peels and local coconut charcoal in the Philippines, we cut out expensive imported chemicals and keep every tin at just ₱55.',
  },
  {
    number: '04',
    title: 'Plastic-Free Reusable Tins',
    summary: 'Built to shed Manila rain and refill endlessly.',
    detail:
      'Packaged in recyclable matte aluminum tins with zero single-use plastic sponges, formulated to bead away light rain splashes on daily walks.',
  },
];

export const HOW_TO_STEPS: HowToStep[] = [
  {
    stepNumber: '01',
    title: 'Brush Off Dust',
    duration: '1 min',
    toolUsed: 'Horsehair Brush or Dry Cloth',
    motion: 'Brisk straight sweeps',
    pasteAmount: 'None (dry prep)',
    instruction:
      'Wipe away street dust, mud, and grit from the upper and welt seams using a dry cloth or horsehair brush so the surface is clean before applying Banaling.',
    proTip: 'Keeping a clean surface prevents trapped grit from scratching smooth leather.',
  },
  {
    stepNumber: '02',
    title: 'Apply Banana Peel & Charcoal Paste',
    duration: '2 mins',
    toolUsed: 'Banaling Natural Polish + Cloth',
    motion: 'Gentle circular massage',
    pasteAmount: 'Pea-sized dab per shoe',
    instruction:
      'Dab a small amount of Banaling Natural Shoe Polish onto a soft cotton cloth and massage evenly over the toe cap, heel, and scuffed creases in gentle circles.',
    proTip: 'A single thin swipe goes a long way—one ₱55 tin covers dozens of shines.',
  },
  {
    stepNumber: '03',
    title: 'Buff to a Natural Luster',
    duration: '3 mins',
    toolUsed: 'Horsehair Brush + Linen Cloth',
    motion: 'Rapid side-to-side friction',
    pasteAmount: '1 drop water (optional)',
    instruction:
      'Let the banana peel oils soak in for two minutes, then briskly buff with your brush or linen cloth. Friction activates the natural plant waxes into a clean, lasting shine.',
    proTip: 'Add one tiny drop of water to your cloth on the toe cap for an extra crisp gloss.',
  },
  {
    stepNumber: '04',
    title: 'Air Dry & Wear',
    duration: '2 mins',
    toolUsed: 'Open-Air Rest (No Tool)',
    motion: 'Light final cloth pass',
    pasteAmount: 'Seal tin lid tightly',
    instruction:
      'Allow your shoes two minutes to set. Your leather is now conditioned, protected from light moisture, and ready for school, office, or daily commute.',
    proTip: 'Snap the reusable Banaling tin lid shut tightly to keep the natural paste fresh.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Product & Leather',
    question: 'Is Banaling really made from banana peels and charcoal?',
    answer:
      'Yes. Banaling blends dehydrated, upcycled banana peel extracts—rich in natural waxes and potassium—with finely milled coconut-shell charcoal and plant oils. It contains zero harsh petroleum solvents or synthetic silicones.',
  },
  {
    id: 'faq-2',
    category: 'Product & Leather',
    question: 'What shoes work best with Banaling Natural Shoe Polish?',
    answer:
      'Banaling works great on black school shoes, office leather oxfords, loafers, boots, and synthetic leather footwear. Avoid applying paste polish to suede or fabric uppers.',
  },
  {
    id: 'faq-3',
    category: 'Application',
    question: 'Why is Banaling so affordable compared to imported polishes?',
    answer:
      'We source upcycled banana peels and locally produced coconut charcoal right here in the Philippines, eliminating import tariffs and expensive synthetic additives so a full 75g tin costs only ₱55.00.',
  },
  {
    id: 'faq-4',
    category: 'Application',
    question: 'Will the charcoal stain my socks or rub off easily?',
    answer:
      'No. Once buffed into the leather for 1–2 minutes, the plant waxes bind the fine charcoal pigment into the hide and dry clean to the touch without transferring onto trousers or socks.',
  },
  {
    id: 'faq-5',
    category: 'Shipping & PHP Payment',
    question: 'Are all prices exclusively in Philippine Pesos (₱) and what payments do you accept?',
    answer:
      'Yes, all Banaling prices are strictly in Philippine Pesos (₱). We accept GCash, Maya, local bank transfer (BPI / BDO / UnionBank), and Cash on Delivery (COD) nationwide.',
  },
  {
    id: 'faq-6',
    category: 'Shipping & PHP Payment',
    question: 'How much is delivery and how do I qualify for free shipping?',
    answer:
      'Flat-rate shipping is only ₱45.00 within Metro Manila and provincial hubs (1–4 business days). Orders of ₱275.00 or more—such as five tins of Banaling polish—get automatic free shipping.',
  },
];

export const FREE_SHIPPING_THRESHOLD_PHP = 275;
export const STANDARD_SHIPPING_PHP = 45;
