# Johnny Block — Rarity Workshop

Total supply: **1,000**

| Tier | IDs | Supply | Share |
| --- | --- | ---: | ---: |
| Street Rare | #0001–#0700 | 700 | 70% |
| Elite Rare | #0701–#0950 | 250 | 25% |
| Genesis Legendary | #0951–#1000 | 50 | 5% |

## Production layer order

1. Background
2. Body
3. Outfit
4. Hair
5. Eyewear
6. Chain
7. Hand
8. Special
9. Effects

## How trait weights work

Asset filenames use `Trait Name#WEIGHT.png`. A larger weight makes that trait more common within the layer configuration that can select it.

Example working weights for discussion:

- Basic Tee#40.png
- Designer Jacket#15.png
- Blockchain Armor#4.png
- Golden Genesis Suit#1.png

These numbers are **relative weights**, not guaranteed final percentages.

## Rarity design worksheet

We will decide each category together before final generation.

| Category | Street direction | Elite direction | Genesis direction |
| --- | --- | --- | --- |
| Background | Green / city / Blockchain Heights | Electric blue + purple / Upper District | Black + gold / Golden Realm |
| Body | Core Johnny Block bases | Premium variants | Legendary variants |
| Outfit | Streetwear | Luxury / techwear | Exclusive legendary fits |
| Hair | Common + uncommon | Rare styles | Genesis-only styles |
| Eyewear | Street shades | Premium / neon | Legendary |
| Chain | Standard pendants | Diamond / premium | Genesis-only |
| Hand | Everyday accessories | Rare accessories | Legendary props |
| Special | Sparse | Rare | Strong exclusive traits |
| Effects | Light / none | Neon / aura | Gold / legendary aura |

## Rule

Do not generate the final 1,000 until enough aligned transparent PNG traits exist to create 1,000 unique DNA combinations. The engine's duplicate protection remains enabled.
