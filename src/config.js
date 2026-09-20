const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// JOHNNY BLOCK — BLOCKCHAIN HEIGHTS
const namePrefix = "Johnny Block";
const description =
  "Johnny Block — Blockchain Heights. A 1,000-piece generative collection built across Street Rare, Elite Rare, and Genesis Legendary districts.";
const baseUri = "ipfs://REPLACE_AFTER_UPLOAD";

const solanaMetadata = {
  symbol: "JBLK",
  seller_fee_basis_points: 500,
  external_url: "",
  creators: [],
};

/*
  COLLECTION SUPPLY
  #0001-#0700  Street Rare        700
  #0701-#0950  Elite Rare         250
  #0951-#1000  Genesis Legendary   50

  We are intentionally keeping ONE editable rarity plan while artwork is built.
  Trait weights are controlled by filenames: Trait Name#WEIGHT.png
*/
const tierLayers = (tier) => [
  { name: `${tier} Background`, options: { displayName: "Background" } },
  { name: `${tier} Body`, options: { displayName: "Body" } },
  { name: `${tier} Outfit`, options: { displayName: "Outfit" } },
  { name: `${tier} Hair`, options: { displayName: "Hair" } },
  { name: `${tier} Eyewear`, options: { displayName: "Eyewear" } },
  { name: `${tier} Chain`, options: { displayName: "Chain" } },
  { name: `${tier} Hand`, options: { displayName: "Hand" } },
  { name: `${tier} Special`, options: { displayName: "Special" } },
  { name: `${tier} Effects`, options: { displayName: "Effects" } },
];

const streetLayers = tierLayers("Street");
const eliteLayers = tierLayers("Elite");
const genesisLayers = tierLayers("Genesis");

// Exact tier ID ranges are enforced by separate layer configurations.
// Preview mode generates four examples from each tier: 1-4, 5-8, 9-12.
const layerConfigurations = process.env.JB_PREVIEW
  ? [
      { growEditionSizeTo: 4, layersOrder: streetLayers },
      { growEditionSizeTo: 8, layersOrder: eliteLayers },
      { growEditionSizeTo: 12, layersOrder: genesisLayers },
    ]
  : [
      { growEditionSizeTo: 700, layersOrder: streetLayers },
      { growEditionSizeTo: 950, layersOrder: eliteLayers },
      { growEditionSizeTo: 1000, layersOrder: genesisLayers },
    ];

const shuffleLayerConfigurations = false;
const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: true,
};

const gif = { export: false, repeat: 0, quality: 100, delay: 500 };

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = { ratio: 2 / 128 };

// Artwork should supply the actual tier backgrounds.
const background = {
  generate: false,
  brightness: "100%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  universe: "Blockchain Heights",
  collection_size: 1000,
};

const rarityDelimiter = "#";
const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 250,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC",
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
