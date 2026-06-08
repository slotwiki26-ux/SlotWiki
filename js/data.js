// SlotWiki Data — all content pulled from provider source data
// Merged from hacksaw_slots and Final Hacksaw Slot upload code spreadsheets

const PROVIDERS = [
  {
    id: "hacksaw",
    name: "Hacksaw Gaming",
    slug: "hacksaw",
    website: "https://www.hacksawgaming.com",
    logo: "https://www-live.hacksawgaming.com/casino_thumbnails/2274_logo_Logo_800width.png",
    score: "9.2",
    description:
      "Hacksaw Gaming is an innovative slots and scratch card provider known for high-energy gameplay, bold visual design, and player-first mechanics. Founded in 2018, they have quickly built a reputation for delivering cinematic slot experiences with features like DuelReels, LootLine wins, and Hold & Win mechanics. Every game pushes the boundary between storytelling and gameplay.",
    featured: true,
  },
  {
    id: "pushgaming",
    name: "Push Gaming",
    slug: "pushgaming",
    website: "https://www.pushgaming.com",
    logo: null,
    score: "9.3",
    description:
      "Push Gaming is a UK-based slot developer renowned for genre-defining originals like Jammin' Jars, Razor Shark, and Fat Rabbit. Founded in 2010, they are celebrated for cluster pays grids, escalating multiplier mechanics, and a distinct visual identity that spans everything from fruit cascades to deep-sea adventures. Their Push Bet feature and innovative volatility design keep players coming back for more.",
    featured: true,
  },
  {
    id: "pragmatic",
    name: "Pragmatic Play",
    slug: "pragmatic",
    website: "https://www.pragmaticplay.com",
    logo: null,
    score: "9.4",
    description:
      "Pragmatic Play is one of the world's leading content providers to the iGaming industry, delivering top-quality products across slots, live casino, bingo, and more. Known for iconic titles like Sweet Bonanza, Gates of Olympus, Big Bass Bonanza and Starlight Princess, Pragmatic consistently sets the standard for player engagement and innovative mechanics including Megaways, tumble features, and multiplier wilds.",
    featured: true,
  },
];

// TAG_RULES: [display tag, [...keywords checked against lower-cased name+tagline]]
const TAG_RULES = [
  ["Horror", ["hell", "cursed", "demon", "undead", "evil", "crypt", "nightmare", "beast", "vampire", "devil", "darkness", "twisted", "six six", "666"]],
  ["Greek Mythology", ["zeus", "athena", "hercules", "medusa", "ares", "olympus", "gorgon", "perseus", "horus"]],
  ["Egypt", ["egypt", "pharaoh", "nile", "pyramid", "scarab", "sand and ashes", "wings of horus", "desert"]],
  ["Pirates", ["pirate", "ship", "sail", "anne bonny", "galleon", "davy jones", "bounty"]],
  ["Fantasy", ["dragon", "princess", "magic", "wizard", "enchanted", "spirit", "fairy", "sorcerer", "myth", "legend", "phoenix"]],
  ["Wild West", ["cowboy", "west", "outlaw", "gunslinger", "duel", "bandit", "saddle", "quick draw", "sheriff"]],
  ["Norse", ["viking", "norse", "ymir", "ragnarok", "stormborn", "valhalla", "thor"]],
  ["Underwater", ["ocean", "sea", "fish", "deep", "octopus", "atlantis", "marlin", "aqua", "breath"]],
  ["Animals", ["tiger", "bunny", "toad", "octopus", "hound", "monkey", "pig", "piggy", "banana", "dragon"]],
  ["Food & Sweets", ["candy", "food", "donut", "cheese", "banana", "jelly", "munch", "truck", "slice"]],
  ["Sci-Fi", ["space", "laser", "galaxy", "planet", "alien", "steampunk", "steam", "airship"]],
  ["Roman", ["rome", "roman", "gladiator", "caesar", "legion"]],
  ["Asian", ["shaolin", "toshi", "aiko", "tai the toad", "wind spirit", "martial"]],
  ["Christmas", ["santa", "christmas", "xmas", "festive"]],
  ["Crime & Heist", ["crime", "heist", "crew", "miami", "mafia", "gang", "cop"]],
  ["Clowns", ["clown", "circus", "klown", "funhouse"]],
  ["Rodents", ["mouse", "rat", "cheese", "rodent", "trap", "get the cheese"]],
  ["Fishing", ["marlin", "fishing", "reel in", "catch", "angler", "fisherman", "cast"]],
  ["Luxury", ["luxe", "luxury", "vip", "opulence", "champagne", "tux"]],
  ["Combat", ["fighter", "fight", "battle", "warrior", "combat", "arena", "gladiator", "slayer", "kill", "slay"]],
  ["Gems & Jewels", ["gem", "jewel", "diamond", "crystal", "ruby", "sapphire", "emerald"]],
  ["Megaways", ["megaways"]],
  ["Bonanza", ["bonanza"]],
  ["Aztec", ["aztec", "inca", "mayan"]],
  ["Irish", ["irish", "clover", "leprechaun", "shamrock"]],
  ["Wolf & Wildlife", ["wolf", "bear", "wildebeest", "stampede", "safari", "savannah"]],
  ["Zombie", ["zombie", "undead", "ghoul", "dead"]],
  ["Magic & Spells", ["magic", "witch", "spell", "wizard", "genie", "potion", "mystic"]],
];

function getTags(slot) {
  const hay = (slot.name + " " + slot.tagline).toLowerCase();
  return TAG_RULES.filter(([, kws]) => kws.some((kw) => hay.includes(kw))).map(([tag]) => tag);
}

// Merge of both spreadsheets. Slots with game_id have CDN thumbnails.
// thumbnail_url null = no image available (newer unreleased titles)
const RAW_SLOTS = [
  // — With game IDs (CDN images available) —
  { game_id: 2274, name: "Red Rascal", slug: "red-rascal", rtp: "96.34%", max_win: "15,000x", release_date: "May 21st 2026", tagline: "GET READY TO RIOT! Is this a portal to hell or just the devil's playground? It's hard to tell because a devilish rascal has taken over this funhouse. Full of evil clowns, where even the rides run wild. He's been let loose and is ready to burn it all down. But in his defence, the moon is full and he was left unsupervised.", bonus_buy_rtps: ["94.29%", "92.26%", "86.35%"], features: [], bonus_games: [], featured: true },
  { game_id: 2213, name: "Rise of Fortuna", slug: "rise-of-fortuna", rtp: null, max_win: null, release_date: null, tagline: "They Call her the Lady of Luck! Fortuna Wheels spin with additive and multiplicative multipliers while the Cash Prize Bar collects your rewards.", features: [{title:"FORTUNA WHEELS",description:"Regular, Super and Epic Fortuna Wheels are triggered when a Fortuna symbol lands on the grid."},{title:"CASH PRIZE BAR",description:"The Cash Prize Bar collects values from each Wheel and rewards a final cash prize as a multiple of your bet."}], bonus_games: [{title:"LUCKY CHARM",description:"Land 3 FS scatter symbols — 10 free spins with higher Fortuna Wheel chance."},{title:"SHE WHO SPINS",description:"Land 4 FS scatter symbols — 10 free spins where all Fortuna Wheels are Super or Epic."},{title:"GOLDEN GODDESS",description:"Land 5 FS scatter symbols — unlimited free spins where all Fortuna Wheels are Epic."}], featured: true },
  { game_id: 2243, name: "Sand and Ashes", slug: "sand-and-ashes", rtp: "96.27%", max_win: "10,000x", release_date: "May 14th 2026", tagline: "Defend the Nile — Claim the Glory! With the heart of a lion, the warden of the sands has one mission left before going to eternal rest. A threat to the realm is revealing itself on the horizon.", bonus_buy_rtps: ["94.07%", "96.10%", "95.60%"], features: [{title:"WILD SCARAB MULTIPLIERS",description:"Wild Scarab Multipliers trigger a respin with a multiplier value of up to 200x. Respins continue until no new Wilds land."},{title:"FIRESTORMS AND SANDSTORMS",description:"During respins a Firestorm increases all Wild Multipliers, while a Sandstorm nudges all symbols one reel to the left."}], bonus_games: [{title:"FREE SPINS",description:"Land 3 Scatter Bonus symbols — 10 free spins locked in the active round type."}], featured: true },
  { game_id: 2219, name: "Munchy Milo", slug: "munchy-milo", rtp: null, max_win: null, release_date: null, tagline: "READY, SET, MUNCH! Meet Milo — the most eccentric, candy-obsessed slot character this side of Candy Land! He's bouncing off the walls literally as he devours every sweet treat in sight.", features: [], bonus_games: [{title:"LIFT OFF LUCK",description:"Keeps base game mechanics with increased Jolt Frame chances."},{title:"GRAVITY GROOVE",description:"Wild symbols with multipliers become Sticky until bonus end."},{title:"GOING BANANAS",description:"1 Jolt Frame guaranteed on every spin!"}], featured: false },
  { game_id: 2296, name: "3 Cursed Chests: Hold & Win", slug: "3-cursed-chests-hold-win", rtp: "96.30%", max_win: "2,500x", release_date: "May 28th 2026", tagline: "Set sail with Anne Bonny and her ship! Cursed be the gold, a fortune long foretold. When the tides turn, the sails will burn.", bonus_buy_rtps: ["94.37%", "92.30%", "86.29%"], features: [], bonus_games: [{title:"GHOSTLY GALLOWS",description:"Trigger the Cursed FS and land FS + a FS Upgrade symbol for 7–15 free spins where landing a Pot symbol guarantees the matching Chest activates."}], featured: true },
  { game_id: 2258, name: "Magic Piggy OG", slug: "magic-piggy-og", rtp: "96.20%", max_win: "2,500x", release_date: "May 5th 2026", tagline: "Feel the Piggy Power! Prepare to be enchanted by the magic of pigs with an OG grid!", features: [], bonus_games: [], featured: true },
  { game_id: 2195, name: "Le Bunny", slug: "le-bunny", rtp: null, max_win: null, release_date: null, tagline: "Smokey is back and the master of disguise keeps living up to his name!", features: [], bonus_games: [], featured: false },
  { game_id: 2234, name: "Power of Ten", slug: "power-of-ten", rtp: null, max_win: null, release_date: null, tagline: "Step into the salon and enter the exciting world of Power of Ten — where ten power wheels spin up multiplied fortunes.", features: [{title:"WHOPPING WHEELS",description:"Activate with 4 FS scatters — Power Wheels become sticky and build multipliers across the bonus."}], bonus_games: [], featured: false },
  { game_id: 2185, name: "Epic Bullets and Bounty", slug: "epic-bullets-and-bounty", rtp: null, max_win: null, release_date: null, tagline: "Saddle up and ride out — the most epic bounty hunt in the Wild West starts now.", features: [], bonus_games: [], featured: false },
  { game_id: 2082, name: "Dynasty of Death", slug: "dynasty-of-death", rtp: null, max_win: null, release_date: null, tagline: "Join the King and Queen of the Underworld as they go head-to-head in a dynasty battle for the ages.", features: [], bonus_games: [], featured: false },
  { game_id: 2108, name: "Marlin Masters Atlantis", slug: "marlin-masters-atlantis", rtp: null, max_win: null, release_date: null, tagline: "Take a deep breath and reel in the big one — the lost city of Atlantis is teeming with legendary catches.", features: [], bonus_games: [], featured: false },
  { game_id: 2115, name: "Pray for Six", slug: "pray-for-six", rtp: null, max_win: null, release_date: null, tagline: "It looks like someone left Hell's nursery gates open — and the chaos has spilled onto the reels.", features: [], bonus_games: [], featured: false },
  { game_id: 2143, name: "Dark Spiral", slug: "dark-spiral", rtp: null, max_win: null, release_date: null, tagline: "The girls scream within, as their reflections smile on from the outside. Descend into the Dark Spiral.", features: [], bonus_games: [], featured: false },
  { game_id: 2077, name: "Zeus Ze Zecond", slug: "zeus-ze-zecond", rtp: null, max_win: null, release_date: null, tagline: "Stand with the god of gods in Zeus Ze Zecond! Lightning bolts and divine multipliers return for round two.", features: [], bonus_games: [], featured: false },
  { game_id: 2148, name: "Eternal Duel", slug: "eternal-duel", rtp: null, max_win: null, release_date: null, tagline: "Two Brothers. Two Realms. One Destiny. The eternal duel has begun across the reels of fate.", features: [], bonus_games: [], featured: false },
  { game_id: 2229, name: "Le Digger", slug: "le-digger", rtp: null, max_win: null, release_date: null, tagline: "RAIDER OF RICHES — Le Digger is armed with a pickaxe and an unquenchable thirst for buried treasure.", features: [], bonus_games: [], featured: false },
  { game_id: 2190, name: "Dusk Princess", slug: "dusk-princess", rtp: null, max_win: null, release_date: null, tagline: "Princess Luna, keeper of shadows, draped in twilight silk, guides the constellations to their nocturnal home. Max win of 10,000×.", features: [], bonus_games: [], featured: false },
  { game_id: 2019, name: "Circle of Life", slug: "circle-of-life", rtp: null, max_win: null, release_date: null, tagline: "In the Circle of Life we fall, we fade, and we flower again. The eternal cycle spins on.", features: [], bonus_games: [], featured: false },
  { game_id: 1971, name: "Toshi Ways Club", slug: "toshi-ways-club", rtp: null, max_win: null, release_date: null, tagline: "Hack your way into Toshi Ways Club — the most exclusive members-only slot in the universe.", features: [], bonus_games: [], featured: false },
  { game_id: 2000, name: "Deal With Death", slug: "deal-with-death", rtp: null, max_win: null, release_date: null, tagline: "Deal With Death Itself. In the ultimate gamble, can you outwit the Grim Reaper?", features: [], bonus_games: [], featured: false },
  { game_id: 1965, name: "Le Santa", slug: "le-santa", rtp: null, max_win: null, release_date: null, tagline: "When Smokey Stole Christmas — Le Santa brings a sack full of wild spins and festive multipliers.", features: [], bonus_games: [], featured: false },
  { game_id: 1977, name: "Army of Ares", slug: "army-of-ares", rtp: null, max_win: null, release_date: null, tagline: "He's here — Ares, the god of war. March into battle and conquer the reels for legendary war spoils.", features: [], bonus_games: [], featured: false },
  { game_id: 2138, name: "Superstar Sevens", slug: "superstar-sevens", rtp: null, max_win: null, release_date: null, tagline: "Lightning Strikes! Lucky 7s shine brighter than ever in this superstar edition.", features: [], bonus_games: [], featured: false },
  { game_id: 1871, name: "Steamrunners", slug: "steamrunners", rtp: null, max_win: null, release_date: null, tagline: "The skies belong to us! The Steamrunners own the air — fierce, fearless, and wired for rebellion across floating steampunk cities.", features: [], bonus_games: [], featured: false },
  { game_id: 2062, name: "Hot Ross", slug: "hot-ross", rtp: null, max_win: null, release_date: null, tagline: "This just got real hot! Hot Ross is turning up the heat on the reels with scorching wilds and blazing bonuses.", features: [], bonus_games: [], featured: false },
  { game_id: 1914, name: "Sun Princess", slug: "sun-princess", rtp: null, max_win: null, release_date: null, tagline: "Sail the solar rays in Sun Princess — a radiant goddess of the sun reigns over the golden reels.", features: [], bonus_games: [], featured: false },
  { game_id: 1803, name: "The Count", slug: "the-count", rtp: null, max_win: null, release_date: null, tagline: "Welcome to The Count's castle — where the night is alive and the creatures are not!", features: [], bonus_games: [], featured: false },
  { game_id: 2004, name: "Donny and Danny", slug: "donny-and-danny", rtp: null, max_win: null, release_date: null, tagline: "Behind this curtain, witness something you've never seen before — Donny and Danny, the ultimate dynamic duo.", features: [], bonus_games: [], featured: false },
  { game_id: 1938, name: "Spear of Athena", slug: "spear-of-athena", rtp: null, max_win: null, release_date: null, tagline: "Goddess of Wisdom and War — Athena has chosen you to wield her legendary spear and claim the divine spoils of Olympus.", features: [], bonus_games: [], featured: false },
  { game_id: 2057, name: "Le Fisherman", slug: "le-fisherman", rtp: null, max_win: null, release_date: null, tagline: "Smokey on the water — Le Fisherman has found the perfect spot and is ready to reel in the catch of a lifetime.", features: [], bonus_games: [], featured: false },
  { game_id: 1924, name: "Le Cowboy", slug: "le-cowboy", rtp: null, max_win: null, release_date: null, tagline: "The Bandit has entered his Cowboy era — saddle up with Smokey Le Cowboy and ride into the sunset for riches.", features: [], bonus_games: [], featured: false },
  { game_id: 1830, name: "Le Zeus", slug: "le-zeus", rtp: null, max_win: null, release_date: null, tagline: "Armed with lightning — Le Zeus brings all the power of Mount Olympus to the reels.", features: [], bonus_games: [], featured: false },
  { game_id: 1875, name: "Stormborn", slug: "stormborn", rtp: null, max_win: null, release_date: null, tagline: "Step into the myth — Stormborn, a warrior forged in the fires of lightning and thunder, rides the storm to legendary treasure.", features: [], bonus_games: [], featured: false },
  { game_id: 1744, name: "Tiger Legends", slug: "tiger-legends", rtp: null, max_win: null, release_date: null, tagline: "Enter a world of ancient combat! Four fierce warriors rise in a land where legends are carved into stone and destinies forged in the dojo.", features: [], bonus_games: [], featured: false },
  { game_id: 1928, name: "Bash Bros", slug: "bash-bros", rtp: null, max_win: null, release_date: null, tagline: "THE BASHING BROS are here to smash, crash, and bash their way through the reels.", features: [], bonus_games: [], featured: false },
  { game_id: 1981, name: "Smoking Dragon", slug: "smoking-dragon", rtp: null, max_win: null, release_date: null, tagline: "Awakened from his long slumber, the Smoking Dragon has taken back the skies — and the treasure with it.", features: [], bonus_games: [], featured: false },
  { game_id: 1867, name: "Chaos Crew 3", slug: "chaos-crew-3", rtp: null, max_win: null, release_date: null, tagline: "The Chaos Crew is back — and they're more chaotic than ever for their third outing.", features: [], bonus_games: [], featured: false },
  { game_id: 1787, name: "Le King", slug: "le-king", rtp: null, max_win: null, release_date: null, tagline: "Smokey's back, and this time, he's playing for keeps! All hail Le King — ruler of the reels.", features: [], bonus_games: [], featured: false },
  { game_id: 1897, name: "The Luxe", slug: "the-luxe", rtp: null, max_win: null, release_date: null, tagline: "Welcome to The Luxe — where fortune wears a tux. Designer wins, VIP bonuses, and champagne jackpots await.", features: [], bonus_games: [], featured: false },
  { game_id: 1946, name: "Jaws of Justice", slug: "jaws-of-justice", rtp: null, max_win: null, release_date: null, tagline: "Conquer the cosmos — Jaws of Justice, where justice has teeth and the criminal jackpot is yours to crack open.", features: [], bonus_games: [], featured: false },
  { game_id: 1799, name: "Bullets and Bounty", slug: "bullets-and-bounty", rtp: null, max_win: null, release_date: null, tagline: "Quick draw shootout! Saddle up and ride out with Quick Draw Kate in Bullets and Bounty. Max win up to 20,000×.", features: [], bonus_games: [], featured: false },
  { game_id: 1824, name: "Miami Mayhem", slug: "miami-mayhem", rtp: null, max_win: null, release_date: null, tagline: "Team up for the score of a lifetime! Sun, sand, and slot machines — Miami Mayhem where the neon never stops burning.", features: [], bonus_games: [], featured: false },
  { game_id: 1783, name: "Booze Bash", slug: "booze-bash", rtp: null, max_win: null, release_date: null, tagline: "Sweet Taste of Mischief! The Booze Bash is the wildest party in slot history — drinks flowing, music pumping.", features: [], bonus_games: [], featured: false },
  { game_id: 1756, name: "Aiko and the Wind Spirit", slug: "aiko-and-the-wind-spirit", rtp: null, max_win: null, release_date: null, tagline: "Guided by the whispering wind — young Aiko soars through enchanted lands with the Wind Spirit at her side.", features: [], bonus_games: [], featured: false },
  { game_id: 1791, name: "Invictus", slug: "invictus", rtp: null, max_win: null, release_date: null, tagline: "No mercy — only eternal glory. The spirit of Invictus cannot be broken. Face the reels with the heart of a champion.", features: [], bonus_games: [], featured: false },
  { game_id: 1229, name: "Freds Food Truck", slug: "freds-food-truck", rtp: null, max_win: null, release_date: null, tagline: "The orders are in — Fred's Food Truck is ready to spin! The most legendary food truck in the land serves up wins.", features: [], bonus_games: [], featured: false },
  { game_id: 1891, name: "The Wildwood Curse", slug: "the-wildwood-curse", rtp: null, max_win: null, release_date: null, tagline: "Three went into the woods. None came back the same. Beware the Wildwood Curse.", features: [], bonus_games: [], featured: false },
  { game_id: 1740, name: "Eye of Medusa", slug: "eye-of-medusa", rtp: null, max_win: null, release_date: null, tagline: "Perseus, sword in hand, stepped into the shadowy lair of Medusa. Eye of Medusa invites you on this mythic quest. Max win 10,000×.", features: [], bonus_games: [], featured: false },
  { game_id: 1811, name: "Marlin Masters: The Big Haul", slug: "marlin-masters-the-big-haul", rtp: null, max_win: null, release_date: null, tagline: "The elusive Marlin has been spotted off the coast — will today be the day you reel in the Big Haul? Max win 10,000×.", features: [], bonus_games: [], featured: false },
  { game_id: 1817, name: "Rainbow Princess", slug: "rainbow-princess", rtp: null, max_win: null, release_date: null, tagline: "Born from stardust and empowered by gems — the Rainbow Princess rules over a magical realm of colour and fortune.", features: [], bonus_games: [], featured: false },
  // — No game IDs (unreleased / not yet on CDN) —
  { game_id: 1760, name: "Ultimate Slot Of America", slug: "ultimate-slot-of-america", rtp: null, max_win: null, release_date: null, tagline: "Stars, stripes, and spinning reels — this is the slot that embodies the spirit of America. Big wins, big dreams, the ultimate jackpot.", features: [], bonus_games: [], featured: false },
  { game_id: 1752, name: "Spinman", slug: "spinman", rtp: null, max_win: null, release_date: null, tagline: "In a world where only spins can save humanity, one hero rises. Spinman — the reel superhero you never knew you needed.", features: [], bonus_games: [], featured: false },
  { game_id: 1736, name: "Pray For Three", slug: "pray-for-three", rtp: null, max_win: null, release_date: null, tagline: "Three is the magic number! All it takes is three lucky symbols to change your fortune forever. Get on your knees and pray for three.", features: [], bonus_games: [], featured: false },
  { game_id: 1685, name: "Danny Dollar", slug: "danny-dollar", rtp: null, max_win: null, release_date: null, tagline: "Meet Danny Dollar — the most cash-obsessed character in the slots universe. He's rolling in it, and he wants to share.", features: [], bonus_games: [], featured: false },
  { game_id: 1732, name: "Rad Maxx", slug: "rad-maxx", rtp: null, max_win: null, release_date: null, tagline: "Radical to the MAXX! Rad Maxx is the totally tubular slot cranking up the volume on wins.", features: [], bonus_games: [], featured: false },
  { game_id: 1728, name: "Reign Of Rome", slug: "reign-of-rome", rtp: null, max_win: null, release_date: null, tagline: "All roads lead to Rome — and to riches! The Roman Empire is at its height and the spoils of conquest await.", features: [], bonus_games: [], featured: false },
  { game_id: 1715, name: "Fighter Pit", slug: "fighter-pit", rtp: null, max_win: null, release_date: null, tagline: "The arena is ready, the crowd is roaring, and the prize money is waiting. Step into the Fighter Pit and battle for the championship purse.", features: [], bonus_games: [], featured: false },
  { game_id: 1711, name: "Wishbringer", slug: "wishbringer", rtp: null, max_win: null, release_date: null, tagline: "The legendary Wishbringer has the power to grant any desire. Spin the reels, make your wish, and let the magic do the rest.", features: [], bonus_games: [], featured: false },
  { game_id: 1460, name: "Life And Death", slug: "life-and-death", rtp: null, max_win: null, release_date: null, tagline: "In the timeless struggle between life and death, fortune favours the brave. Spin the reels of fate.", features: [], bonus_games: [], featured: false },
  { game_id: 1430, name: "Dorks Of The Deep", slug: "dorks-of-the-deep", rtp: null, max_win: null, release_date: null, tagline: "Don't let their goofy looks fool you — the Dorks of the Deep are sitting on a treasure trove under the sea.", features: [], bonus_games: [], featured: false },
  { game_id: 1697, name: "Strength Of Hercules", slug: "strength-of-hercules", rtp: null, max_win: null, release_date: null, tagline: "With the strength of a god behind every spin, the labours of fortune are yours to conquer alongside the legendary Hercules.", features: [], bonus_games: [], featured: false },
  { game_id: 1666, name: "Hounds Of Hell", slug: "hounds-of-hell", rtp: null, max_win: null, release_date: null, tagline: "The fearsome hounds of the underworld have been unleashed upon the reels. Run with the pack for infernal riches.", features: [], bonus_games: [], featured: false },
  { game_id: 1693, name: "Frkn Bananas", slug: "frkn-bananas", rtp: null, max_win: null, release_date: null, tagline: "This game is FRKN BANANAS! A fruit-fuelled frenzy where the wilds go wild and the bonuses go even wilder.", features: [], bonus_games: [], featured: false },
  { game_id: 1681, name: "Marlin Masters", slug: "marlin-masters", rtp: null, max_win: null, release_date: null, tagline: "Master the open seas! The Marlin Masters are legendary anglers chasing the greatest catch in the ocean.", features: [], bonus_games: [], featured: false },
  { game_id: 1675, name: "Phoenix Duelreels", slug: "phoenix-duelreels", rtp: null, max_win: null, release_date: null, tagline: "Rise from the ashes and duel! The phoenix rises and the DuelReels spin in this mythical battle for fortune.", features: [], bonus_games: [], featured: false },
  { game_id: 1689, name: "Le Viking", slug: "le-viking", rtp: null, max_win: null, release_date: null, tagline: "The most daring Norse warrior has set sail for riches. Pillage the reels, plunder the bonuses, and sail home victorious.", features: [], bonus_games: [], featured: false },
  { game_id: 1438, name: "Klowns", slug: "klowns", rtp: null, max_win: null, release_date: null, tagline: "These Klowns mean business! The big top has come to town — but these aren't ordinary clowns. They're here for your jackpot.", features: [], bonus_games: [], featured: false },
  { game_id: 1640, name: "Fire My Laser", slug: "fire-my-laser", rtp: null, max_win: null, release_date: null, tagline: "In a sci-fi universe of lasers and neon, the trigger-happy hero is locked and loaded. Fire your laser at the reels.", features: [], bonus_games: [], featured: false },
  { game_id: 1608, name: "Donut Division", slug: "donut-division", rtp: null, max_win: null, release_date: null, tagline: "Reporting for duty — and donuts! The Donut Division is on a mission to deliver wins with a side of sprinkles.", features: [], bonus_games: [], featured: false },
  { game_id: 1554, name: "Shaolin Master", slug: "shaolin-master", rtp: null, max_win: null, release_date: null, tagline: "An ancient warrior of unparalleled skill has mastered both the martial arts and the reels. Follow the path of enlightenment.", features: [], bonus_games: [], featured: false },
  { game_id: 1558, name: "Snow Slingers", slug: "snow-slingers", rtp: null, max_win: null, release_date: null, tagline: "The Snow Slingers are locked in the greatest snowball fight the world has ever seen. Sling your way to winter wins.", features: [], bonus_games: [], featured: false },
  { game_id: 1620, name: "Duel At Dawn", slug: "duel-at-dawn", rtp: null, max_win: null, release_date: null, tagline: "As the first light breaks, two gunslingers face each other across the dusty street. Only one walks away with the prize.", features: [], bonus_games: [], featured: false },
  { game_id: 1612, name: "Wings Of Horus", slug: "wings-of-horus", rtp: null, max_win: null, release_date: null, tagline: "Horus spreads his mighty wings over the Egyptian reels. Under his divine gaze, pharaonic treasures are yours to claim.", features: [], bonus_games: [], featured: false },
  { game_id: 1616, name: "Rise Of Ymir", slug: "rise-of-ymir", rtp: null, max_win: null, release_date: null, tagline: "From the ancient frost and fire of Norse mythology, the primordial giant Ymir rises to shake the world.", features: [], bonus_games: [], featured: false },
  { game_id: 1580, name: "Get The Cheese", slug: "get-the-cheese", rtp: null, max_win: null, release_date: null, tagline: "In a world full of traps and obstacles, one brave mouse is on a mission to get the cheese. Navigate the reels — grab the prize!", features: [], bonus_games: [], featured: false },
  { game_id: 1602, name: "Cloud Princess", slug: "cloud-princess", rtp: null, max_win: null, release_date: null, tagline: "High above the world, the Cloud Princess reigns over a sky kingdom of incredible riches. Ascend to her realm.", features: [], bonus_games: [], featured: false },
  { game_id: 1562, name: "Le Pharaoh", slug: "le-pharaoh", rtp: null, max_win: null, release_date: null, tagline: "Le Pharaoh commands the sands of time and the riches of the Nile. Enter his domain and discover the treasures buried beneath the pyramids.", features: [], bonus_games: [], featured: false },
  { game_id: 1570, name: "Evil Eyes", slug: "evil-eyes", rtp: null, max_win: null, release_date: null, tagline: "Ancient and all-seeing, the Evil Eyes watch your every spin. Under their mysterious gaze, cursed gold and dark fortune await.", features: [], bonus_games: [], featured: false },
  { game_id: 1584, name: "Octo Attack", slug: "octo-attack", rtp: null, max_win: null, release_date: null, tagline: "Eight arms, infinite wins! The mighty octopus has launched its attack on the reels, tentacles slapping wilds into place.", features: [], bonus_games: [], featured: false },
  { game_id: 1530, name: "Donny Dough", slug: "donny-dough", rtp: null, max_win: null, release_date: null, tagline: "From humble beginnings to high-rolling wins — Donny Dough is the rags-to-riches story of the slot world.", features: [], bonus_games: [], featured: false },
  { game_id: 1360, name: "Dragons Domain", slug: "dragons-domain", rtp: null, max_win: null, release_date: null, tagline: "In the darkest mountain, a fearsome dragon guards its hoard of gold. Brave the fire and claim what the dragon has been keeping from you.", features: [], bonus_games: [], featured: false },
  { game_id: 1534, name: "Sixsixsix", slug: "sixsixsix", rtp: null, max_win: null, release_date: null, tagline: "666 is the most feared and fabled number in existence. Spin the number of the beast and unleash diabolical riches.", features: [], bonus_games: [], featured: false },
  { game_id: 1478, name: "Tai The Toad", slug: "tai-the-toad", rtp: null, max_win: null, release_date: null, tagline: "Tai the Toad is small but mighty, hopping through lily pads and lucky symbols to bring you the biggest wins in the pond.", features: [], bonus_games: [], featured: false },
  { game_id: 1514, name: "Twisted Lab", slug: "twisted-lab", rtp: null, max_win: null, release_date: null, tagline: "Deep in a secret underground facility, a deranged scientist is conducting experiments on the reels with explosive results.", features: [], bonus_games: [], featured: false },
  { game_id: 1508, name: "Ze Zeus", slug: "ze-zeus", rtp: null, max_win: null, release_date: null, tagline: "Ze Zeus has spoken! The king of the gods descends from Mount Olympus to electrify the reels with divine jackpots.", features: [], bonus_games: [], featured: false },
  { game_id: 1434, name: "Cursed Crypt", slug: "cursed-crypt", rtp: null, max_win: null, release_date: null, tagline: "An ancient burial chamber holds a terrible curse — and unimaginable treasure. Only those brave enough to spin can break the curse.", features: [], bonus_games: [], featured: false },
  { game_id: 1482, name: "Slayers Inc", slug: "slayers-inc", rtp: null, max_win: "15,000x", release_date: null, tagline: "Monster hunting is big business! Slayers Inc. is the most elite monster-slaying outfit in the world. Slay the beasts, collect the bounty.", volatility: "5/5", features: [], bonus_games: [], featured: false },
  { game_id: 1452, name: "Jelly Slice", slug: "jelly-slice", rtp: null, max_win: "10,000x", release_date: null, tagline: "Slice through the reels for sweet wins! Jelly Slice is the most deliciously satisfying slot around.", volatility: "3/5", features: [], bonus_games: [], featured: false },
  { game_id: 1494, name: "Keep Em", slug: "keep-em", rtp: null, max_win: "10,000x", release_date: null, tagline: "Keep Em if you've got em! Hold your winners, spin the rest, and build the ultimate winning combination.", volatility: "3/5", features: [], bonus_games: [], featured: false },
  { game_id: 1490, name: "Divine Drop", slug: "divine-drop", rtp: null, max_win: "10,000x", release_date: null, tagline: "The Divine is dropping in! Sacred symbols rain down from the heavens in a cascade of divine fortune.", volatility: "3/5", features: [], bonus_games: [], featured: false },

  // ── Push Gaming ─────────────────────────────────────────────────────────
  {"name": "Jammin' Jars", "slug": "jammin-jars", "pg": true, "rtp": "96.83%", "rtp_reduced": "94.25%", "volatility": "High", "max_win": "19,998.5x", "bonus_buy": true, "tagline": "Join us on the dancefloor and get into the groove with Jammin' Jars!", "thumbnail_url": "images/push_gaming/jammin-jars.jpg", "hero_url": "images/push_gaming/jammin-jars_hero.jpg", "features": [{"title": "CASCADE", "description": "An 8x8 grid where colourful fruits and Jam Jars cascade onto the grid. Match 5 or more to win. Winning symbols are removed and new ones drop in, enabling chain wins."}, {"title": "JAM JARS (WILD & SCATTER)", "description": "The Jam Jar acts as both wild and scatter. Each has a multiplier starting at 1x applied to every win it contributes to. Land 3 or more anywhere on the reels to trigger Free Games."}, {"title": "FREE GAMES", "description": "Triggered by 3+ Jam Jar scatter symbols. Jam Jars dance across the grid with growing multipliers for the duration of the feature."}, {"title": "RAINBOW FEATURE", "description": "Triggered randomly after any non-winning cascade. Brings massive colossal fruit symbols to the dancefloor which can burst into big wins."}]},
  {"name": "Jammin' Jars 2", "slug": "jammin-jars-2", "pg": true, "rtp": "96.40%", "rtp_reduced": "94.40%", "volatility": "High", "max_win": "50,000x", "bonus_buy": false, "tagline": "Get down to the fruity dancefloor once again and rave to the rhythm with the coolest DJ around!", "thumbnail_url": "images/push_gaming/jammin-jars-2.jpg", "hero_url": "images/push_gaming/jammin-jars-2_hero.jpg", "features": [{"title": "COLLECTABLE GOLD VINYL", "description": "Match 5 or more fruits in a cluster for wins. Gold Vinyl symbols land and fill a meter next to the DJ. Reach MAX level for a chance to trigger the Giga Jar feature."}, {"title": "INSTANT PRIZES", "description": "Available in both Base Game and Free Spins, going up to 1000x. Land 5 or more adjacent Instant Prizes to form a paying cluster (blue tiles turn purple)."}, {"title": "FRUIT BLAST", "description": "Randomly triggered. The Giga Jar DJ fires 1-3 shots of giant fruits that burst and form a cluster of the same kind, followed by win payouts."}, {"title": "FREE SPINS", "description": "Triggered by 3 or more Wild Jar symbols. Awards 6 Free Spins. Jam Jars and their growing multipliers remain throughout."}, {"title": "GIGA JAR FEATURE", "description": "Triggered when the meter reaches MAX. A 2x2, 3x3 or 4x4 Instant Prize Block Giga Jar lands. 8 Giga Spins are awarded. Wild Jar multipliers increase with wins. Reactivates up to 6 levels, multiplier growing from 1x to 50x."}]},
  {"name": "Giga Jar", "slug": "giga-jar", "pg": true, "rtp": "96.48%", "rtp_reduced": "94.45%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "The DJ with the coldest beats returns with their own game!", "thumbnail_url": "images/push_gaming/giga-jar.jpg", "hero_url": "images/push_gaming/giga-jar_hero.jpg", "features": [{"title": "CLUSTER PAYS & CASCADES", "description": "7x7 grid. Match 5+ adjacent identical symbols to win. Winning symbols are removed and remaining symbols collapse downward. New symbols fill vacant spaces."}, {"title": "WILD JAR SYMBOL", "description": "Substitutes for all paying symbols. Starts at 1x multiplier, increasing by 1 with each win it contributes to, then jumps to an adjacent space. Multipliers can reach up to 50x."}, {"title": "INSTANT PRIZES", "description": "Bet multipliers ranging 1x-1000x. Pay out when landing in a cluster of 5 or more. Wild Jar multiplier applies if present in the cluster."}, {"title": "SNOWBALL FEATURE", "description": "After two winning cascades, may randomly trigger on the next non-winning cascade. Adds 1-2 Giant Paying Symbols (2x2, 3x3 or 4x4) to the grid, which burst into 1x1 versions."}, {"title": "ICE BREAKER FEATURE", "description": "After two winning cascades, may randomly trigger on the next non-winning cascade. Removes 1-3 types of paying symbols to create space for new clusters."}, {"title": "GIGA JAR FEATURE", "description": "Triggered once all three Wild Jar Symbols are in play and three more cascades fill the meter. A 2x2 Wild Giga Jar lands, activating for 3 cascades before going dormant. Reactivates through 6 levels (1x to 50x). Ante Bet option to start with first Wild Jar pre-filled."}]},
  {"name": "Razor Shark", "slug": "razor-shark", "pg": true, "rtp": "96.70%", "rtp_reduced": "94.06%", "volatility": "High", "max_win": "50,000x", "bonus_buy": false, "tagline": "Grab your swimming gear and get ready to dive into deep sea treasures with Razor Shark!", "thumbnail_url": "images/push_gaming/razor-shark.jpg", "hero_url": "images/push_gaming/razor-shark_hero.jpg", "features": [{"title": "MYSTERY STACKS", "description": "Mystery stacks appear in stacks of 4 and can land anywhere on the reels, triggering the Nudge and Reveal feature."}, {"title": "RAZOR REVEAL", "description": "Triggered when Golden Shark symbols appear. Transforms mystery symbols into mini-reels that award instant bet multipliers ranging 1x-2,500x, as well as scatter symbols."}, {"title": "SCATTERS & FREE GAMES", "description": "Land 3+ scatter symbols to trigger Free Games. Additional scatters enhance the feature with more free spins."}, {"title": "FREE GAMES - NUDGING MYSTERY STACKS", "description": "Reels 2 and 4 fill with mystery symbols that nudge down 1 position each spin, applying an increasing win multiplier with every nudge. Entering with extra scatters causes mystery stacks to nudge upward."}]},
  {"name": "Razor Ways", "slug": "razor-ways", "pg": true, "rtp": "96.36%", "rtp_reduced": "94.32%", "volatility": "Medium-High", "max_win": "25,000x", "bonus_buy": false, "tagline": "Experience Razor like never before…", "thumbnail_url": "images/push_gaming/razor-ways.jpg", "hero_url": "images/push_gaming/razor-ways_hero.jpg", "features": [{"title": "EXPANDING ROWS", "description": "3 rows always active at the bottom with 3 locked rows above. Each cascade or Instant Prize win expands the grid by 1 row, unlocking up to 46,656 ways to pay. Resets at the start of each new game round."}, {"title": "EXPANDING WILD SYMBOL", "description": "Revealed by Mystery Symbols or landing directly. In Base Game: expands to cover unlocked rows. In Free Spins: unlocks locked rows and covers the whole reel. Can carry a multiplier of x1, x2, x3 or x5."}, {"title": "CONVERTER INTO WILD SYMBOL", "description": "Lands or is revealed by Mystery Symbols. Spins through paying symbols on unlocked rows; when it lands on one, all symbols of that type are converted into Wilds (including the Converter itself)."}, {"title": "MYSTERY SYMBOLS & RAZOR REVEAL", "description": "Mystery Symbols land in both Base Game and Free Spins. Razor Reveal triggers when Mystery Symbols land on 3+ consecutive reels or randomly. Awards Instant Prizes, Multipliers, Collectors, Converters, Scatters and Golden Shark Symbols."}, {"title": "FREE SPINS FEATURE", "description": "Reel layout and starting Total Multiplier determined by number of Scatters. Glowing Mystery Symbols fill a Multiplier Level meter (5 to advance). Total Multiplier applies to all wins."}, {"title": "PUSH BET", "description": "Mystery Symbols Push Bet (+200% bet): guarantees 2 Mystery Symbols on unlocked rows per base spin. Scatter Push Bet (+40% bet): increases chance of Scatter Symbol. Combined Push Bet (+300% bet): both effects active."}]},
  {"name": "Razor Returns", "slug": "razor-returns", "pg": true, "rtp": "96.55%", "rtp_reduced": "94.49%", "volatility": "High", "max_win": "100,000x", "bonus_buy": true, "tagline": "Dare to descend deeper than ever before...", "thumbnail_url": "images/push_gaming/razor-returns.jpg", "hero_url": "images/push_gaming/razor-returns_hero.jpg", "features": [{"title": "FEATURE - PUSH BET", "description": "Enabling Push Bet mode raises your Base Bet by 10%, increasing the likelihood of triggering the Free Spins Feature. You can activate or deactivate Push Bet mode by toggling the switch above the available bets. The switch is displayed in green when active and in grey when inactive. To disable the Push Bet, turn off autoplay if it's enabled, and then switch off the Push Bet at the end of a game round."}, {"title": "BASE GAME - WILD SHARK, SCATTER & MYSTERY SYMBOLS", "description": "One of the main changes from the original Razor Shark is that you can land additional scatters, and start the Free Spins with the higher initial multiplier. The Torpedo Symbol is a Scatter Symbol. Landing 3 or more Torpedo Symbols anywhere on the reels during Base Game or Razor Reveal Feature will trigger the Free Spins Feature."}, {"title": "BASE GAME - NUDGE & REVEAL FEATURE", "description": "The Nudge & Reveal Feature reveals Paying Symbols, Wild Shark Symbol, or Golden Shark Symbols when triggered by Mystery Symbols. If Paying Symbols are revealed, existing winlines are paid. Mystery Symbols nudge down by 1 position and the remaining reels spin until there are no more Mystery Symbols."}, {"title": "BASE GAME - RAZOR REVEAL FEATURE", "description": "If the Mystery Symbol reveals a Golden Shark Symbol in either the Base Game or Free Spins Feature, the Razor Reveal Feature is triggered. Each position with a Golden Shark Symbol will spin through various prizes, including Instant Prize Symbols, Multiplier Symbols, Collector Symbols, Converter Symbols, Nudge Up Symbols, and Torpedo Symbols."}, {"title": "BONUS GAME - FREE SPINS", "description": "When 3 or more Torpedo Symbols land anywhere, the Free Spins Feature is triggered, even during the Razor Reveal Feature. During the Free Spins Feature, Mystery Symbols fill reels 2 and 4, and for every spin, they will nudge down by 1 position, increasing the Total Multiplier by 1."}, {"title": "BONUS GAME - MULTIPLIER, COLLECTOR, CONVERTER & NUDGE UP SYMBOLS", "description": "During the Razor Reveal Feature, there are special symbols that can land on the reels: The Multiplier Symbol multiplies the value of Instant Prize Symbols and Collector Symbols by its value before being removed from the reels. The Collector Symbol collects all Instant Prize Symbols and transforms into an Instant Prize Symbol before disappearing. The Converter Symbol converts all Paying symbols of the same type into Golden Shark Symbols. The Nudge Up Symbol only lands in the Free Spins Feature and nudges the Mystery Stacks up by one position."}, {"title": "FEATURE - BONUS BUY", "description": "Purchase one of various Bonus Buy options to enter the Free Spins Bonus Game with 3, 4, 5 or a random amount of Torpedo Scatter Symbols. Razor Returns features a standalone Bonus Buy option to activate an entire screen of Razor Reveal Symbols."}]},
  {"name": "Big Bamboo", "slug": "big-bamboo", "pg": true, "rtp": "96.13%", "rtp_reduced": "94.13%", "volatility": "High", "max_win": "50,000x", "bonus_buy": true, "tagline": "Delve into a zen-like experience, with a twist!", "thumbnail_url": "images/push_gaming/big-bamboo.jpg", "hero_url": "images/push_gaming/big-bamboo_hero.jpg", "features": [{"title": "GAMBLE SCATTER SYMBOL & FEATURE", "description": "Special symbol appearing on reels 2, 3 & 4. When it lands, different results spin through inside the symbol's position including mystery stacks, golden bamboo or free spin features."}, {"title": "GAMBLE FEATURE & WHEEL", "description": "During Free Spins, option to gamble awarded spins on a Gamble Wheel for a better Free Spins option. Advanced state shows dots indicating where low symbols can be converted to Mystery Stacks, Golden Bamboo or Free Spins."}, {"title": "MYSTERY STACK FEATURE", "description": "Can appear in Base Game and Free Spins anywhere on the reels. Reveals Wild Symbols, Paying Symbols or the Golden Bamboo Symbol."}, {"title": "GOLDEN BAMBOO FEATURE", "description": "Awards 1 respin with possible symbols including Instant Prizes up to 5,000x, Multiplier Symbols up to 10x, Scatter Symbols, Gamble Scatter Symbols or Collector Symbols."}, {"title": "FREE SPINS FEATURE", "description": "Triggered by Gamble Scatter in Base Game or landing on a Free Spins prize during Golden Bamboo. Awards free spins plus Symbol Conversions — the more low-paying symbols converted into bamboo, the greater the outcomes."}]},
  {"name": "Big Bamboo 2", "slug": "big-bamboo-2", "pg": true, "rtp": "96.36%", "rtp_reduced": "94.47%", "volatility": "High", "max_win": "75,000x", "bonus_buy": false, "tagline": "The next chapter in the Bamboo Series, featuring redefined mechanics, breathtaking visuals, and an enriched journey to fortune!", "thumbnail_url": "images/push_gaming/big-bamboo-2.jpg", "hero_url": "images/push_gaming/big-bamboo-2_hero.jpg", "features": [{"title": "MYSTERY BAMBOO SYMBOLS", "description": "Reveal symbol landing anywhere in Base Game and Free Games. Opens to reveal Paying Symbols, Wild Symbols or Golden Bamboo Symbols after the reels land."}, {"title": "GOLDEN BAMBOO FEATURE", "description": "Triggered when Mystery Bamboo reveals Golden Bamboo Symbols. Can land Instant Prize, Multiplier, Collector, Lucky Bamboo and Bonus Symbols."}, {"title": "LUCKY BAMBOO FEATURE", "description": "Starts with 3 spins resetting each time a Golden Bamboo Symbol lands. Creates Bronze/Silver/Gold/Diamond frames that filter Instant Prize reveals by minimum value (Bronze: all values; Diamond: 1000x+). At end, all frames spin for their prize range."}, {"title": "FREE SPINS PROGRESSION", "description": "Low Symbol Meter fills with each Bonus or Extra Spin Symbol. Every 4 symbols upgrades to next level, converting 1 Low Symbol type to Mystery Bamboo, awarding an Instant Prize Multiplier and extra spins. Frames created by Golden Bamboo are persistent throughout the feature."}, {"title": "GAMBLE FEATURE", "description": "When Free Spins trigger, option to gamble awarded spins type on the Gamble Wheel for a better Free Spins type."}]},
  {"name": "Fat Rabbit", "slug": "fat-rabbit", "pg": true, "rtp": "96.45%", "rtp_reduced": "94.15%", "volatility": "High", "max_win": "3,844x", "bonus_buy": true, "tagline": "Join us on the farm where juicy carrots will lead to some Fat wins!", "thumbnail_url": "images/push_gaming/fat-rabbit.jpg", "hero_url": "images/push_gaming/fat-rabbit_hero.jpg", "features": [{"title": "FREE GAMES", "description": "Triggered by landing a Rabbit symbol with a Wild Carrot symbol. The rabbit collects all Wild Carrot symbols landing on the reels, adding to the Carrot Meter and growing bigger, awarding extra free spins and larger wins."}, {"title": "HARVEST FEATURE", "description": "Triggered randomly — a farmer driving a tractor ploughs through the reels, unearthing several Wild Carrot symbols."}]},
  {"name": "Fat Santa", "slug": "fat-santa", "pg": true, "rtp": "96.45%", "rtp_reduced": "94.15%", "volatility": "Medium-High", "max_win": "3,844x", "bonus_buy": true, "tagline": "Fat Santa is on his way so keep your eyes peeled for his sleigh!", "thumbnail_url": "images/push_gaming/fat-santa.jpg", "hero_url": "images/push_gaming/fat-santa_hero.jpg", "features": [{"title": "SLEIGH FEATURE", "description": "Triggered randomly while the reels are spinning. Santa appears on his sleigh and may leave behind Wild Christmas Pies on the reels, which can lead to wins."}, {"title": "FREE SPINS", "description": "Triggered when Santa appears with one or more Christmas Pies. Collecting Wild Christmas Pies feeds Santa — the more he eats, the more he grows, awarding additional free spins and bigger wins."}, {"title": "BUY FEATURE", "description": "Allows direct entry into the Free Spins feature."}]},
  {"name": "Fat Banker", "slug": "fat-banker", "pg": true, "rtp": "96.43%", "rtp_reduced": "94.45%", "volatility": "High", "max_win": "25,000x", "bonus_buy": true, "tagline": "Travel back to the 1920's and watch our greedy Fat Banker fatten up his pockets!", "thumbnail_url": "images/push_gaming/fat-banker.jpg", "hero_url": "images/push_gaming/fat-banker_hero.jpg", "features": [{"title": "BULLION SYMBOLS & MULTIPLIERS", "description": "Bullion Symbols and Multipliers land in Base Game and Fortune Link Feature. Bet multipliers up to 100x. Multipliers can multiply the value of all Bullion Symbols on the grid."}, {"title": "RED CAR FEATURE", "description": "Randomly triggered in Base Game when certain symbols land. Adds Wild Money Bags (with or without Multipliers), Bullion Symbols or Silver Safe Symbol to the reels."}, {"title": "GOLD CAR FEATURE", "description": "Triggered randomly during Fortune Link and Fat Banker Free Spins when no spins remain. Adds Wild Money Bags or random Instant Prize Symbols to the reels."}, {"title": "FORTUNE LINK FEATURE", "description": "All Bullion and Multiplier Symbols from Base Game are collected. Starts with 2 Free Spins; every new Bullion or Multiplier Symbol resets the counter."}, {"title": "FAT BANKER FREE SPINS FEATURE", "description": "Triggered when Wild Money Bag lands alongside Fat Banker Symbol. Fat Banker moves to collect Wild Money Bags, filling a progress meter. Each level-up grows the Fat Banker and awards additional Free Spins."}]},
  {"name": "Fat Drac", "slug": "fat-drac", "pg": true, "rtp": "96.57%", "rtp_reduced": "94.05%", "volatility": "High", "max_win": "50,000x", "bonus_buy": false, "tagline": "Sink your teeth into Fat Drac!", "thumbnail_url": "images/push_gaming/fat-drac.jpg", "hero_url": "images/push_gaming/fat-drac_hero.jpg", "features": [{"title": "FAT DRAC SYMBOL", "description": "Both a Reveal and Scatter symbol. When it lands, can reveal a paying symbol or a Bat symbol. If a Bat is revealed, it flies to an Instant Prize Bubble for a payout. If Fat Drac lands with 1+ Goblet symbols, triggers Free Games directly."}, {"title": "INSTANT PRIZE BUBBLES", "description": "Available in Base Game and Free Games. Bet multipliers up to 50,000x. 7 bubbles shown outside the grid, nudging 1 position with every spin."}, {"title": "FREE GAMES", "description": "Triggered when Fat Drac lands with at least 1 Goblet symbol. Fat Drac collects Goblets, grows in size per level, and awards additional free spins at each level."}, {"title": "FAT BAT", "description": "Randomly triggered in Base Game. The Fat Bat sits on the reels and collects all Instant Prize Bubbles displayed, awarding a combined win."}, {"title": "COFFIN SYMBOL", "description": "Triggers a Pick Feature in both Base Game and Free Games. Base Game: pick to reveal bats (up to 5) that fly toward Instant Prize Bubbles. Free Games: prizes include Free Spins, Goblet Symbols or more bats."}]},
  {"name": "Wild Swarm", "slug": "wild-swarm", "pg": true, "rtp": "97.03%", "rtp_reduced": "94.67%", "volatility": "Medium-High", "max_win": "3,069x", "bonus_buy": false, "tagline": "Everyone's abuzz with excitement and a Swarm could start at any moment!", "thumbnail_url": "images/push_gaming/wild-swarm.jpg", "hero_url": "images/push_gaming/wild-swarm_hero.jpg", "features": [{"title": "FREE GAMES", "description": "Land 3 or more Hive symbols to trigger up to 15 free spins where Wild symbols are sticky."}, {"title": "INSTANT PRIZES (PICK FEATURE)", "description": "Land the Chest symbol to trigger the pick feature revealing hidden prizes including free spins, Swarm Boost or instant Swarm Mode."}, {"title": "SWARM MODE", "description": "Collect bees to boost the hive meter and trigger frantic Swarm Mode with endless sticky wilds and massive win potential."}]},
  {"name": "Wild Swarm 2", "slug": "wild-swarm-2", "pg": true, "rtp": "96.67%", "rtp_reduced": "94.67%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Head back to the hive in Wild Swarm 2!", "thumbnail_url": "images/push_gaming/wild-swarm-2.jpg", "hero_url": "images/push_gaming/wild-swarm-2_hero.jpg", "features": [{"title": "SWARM MODE FEATURE", "description": "Triggered by Hive explosion or Chest Prize. This feature begins with 10 automatic Free Spins and Reel Multipliers set above each reel (Reel 1 has a 2x Multiplier, Reel 2 has 3x, Reel 4 has 6x and Reel 5 has 8x.) A guaranteed stack of Sticky Wild Symbols land on a random reel before the first spin."}, {"title": "WILD SYMBOLS", "description": "Wild Honey and Sticky Wild Symbols substitute for Paying symbols, except Scatter and Chest Symbols. Sticky Wilds appear in Free Games and Swarm Mode, sticking until the feature ends."}, {"title": "COLLECTABLE BEES", "description": "Bee Symbols in the Base Game fill the Hive and leave Wild Honey Symbols. Worker Bees add 1 segment to the Hive meter, Queen Bees add 5. When the Hive reaches level 5, any Bee Symbol may trigger an explosion, initiating the Swarm Mode Feature. The Queen Bee has an elevated likelihood of triggering Swarm Mode."}, {"title": "CHEST FEATURE", "description": "This feature can be triggered in the Base Game, Free Spins, and Swarm Mode. Choose from 5 Hidden Chest Prizes, including Bet Multipliers, Free Spins, Swarm Boost, and Instant Swarm Mode."}, {"title": "BASE GAME CHEST FEATURE PRIZES", "description": "Bet Multiplier Prizes range from 2x to 1000x. The Free Spins Prize triggers Free Spins, adding 3 to 5 Sticky Wild Symbols. Swarm Boost instantly raises the level of the Hive meter. Instant Swarm Mode triggers Swarm Mode."}, {"title": "FREE SPINS & SWARM MODE CHEST FEATURE PRIZES", "description": "In both features, Chest Prizes include Bet Multipliers, Extra Spins, and Sticky Wilds Reel. Extra Spins Prize values range from 1 to 6. The Sticky Wilds Reel Prize fills a reel with Sticky Wild Symbols during the feature."}, {"title": "SCATTER SYMBOL", "description": "The Hive Symbol is a Scatter Symbol that triggers Free Spins with 3 or more land anywhere on the reels. 3 Hives award 7 spins with 3 Sticky Wild Symbols. 4 Hives award 8 spins with 4 Sticky Wilds. 5 Hives award 10 spins with 5 Sticky Wilds."}, {"title": "FREE SPINS FEATURE", "description": "Sticky Wilds exclusively appear in Free Spins and Swarm Mode. Once landed, they persist until the feature ends. Reel Multipliers, placed above reels 2 and 4, are 2x and 4x, respectively. Filling a reel with Sticky Wilds applies the Reel Multiplier to each Sticky Wild below, and also rewards 1 Extra Spin. Sticky Wild Multipliers accumulate for enhanced effects."}]},
  {"name": "Mystery Museum", "slug": "mystery-museum", "pg": true, "rtp": "96.58%", "rtp_reduced": "94.01%", "volatility": "High", "max_win": "17,500x", "bonus_buy": false, "tagline": "Uncover the secrets of the past by venturing through the Mystery Museum", "thumbnail_url": "images/push_gaming/mystery-museum.jpg", "hero_url": "images/push_gaming/mystery-museum_hero.jpg", "features": [{"title": "POWER GAMBLE™", "description": "Triggered by wins of more than 2x. Choose between three gamble options to progress toward Free Games or collect a larger cash win. Reach the top to collect at least 100x."}, {"title": "SCATTER & WILD SYMBOLS", "description": "Land 3 or more Samurai symbols anywhere on the reels to trigger the Free Games feature."}, {"title": "FREE GAMES", "description": "8-12 free spins. Mystery Stacks are sticky during the feature and only reveal when there is a chance of a win."}, {"title": "NUDGE & REVEAL MYSTERY STACKS", "description": "Triggered when 3+ Mystery Stacks appear anywhere on the reels. Nudges stacks for potentially greater wins."}]},
  {"name": "Joker Troupe", "slug": "joker-troupe", "pg": true, "rtp": "96.68%", "rtp_reduced": "94.40%", "volatility": "High", "max_win": "25,367x", "bonus_buy": false, "tagline": "Get ready to feel the heat with Joker Troupe!", "thumbnail_url": "images/push_gaming/joker-troupe.jpg", "hero_url": "images/push_gaming/joker-troupe_hero.jpg", "features": [{"title": "BASE GAME", "description": "A 4x3 slot with 10 paylines and three coloured Joker scatter symbols — red, blue and green. Landing 3 of the same colour triggers its respective feature."}, {"title": "BLUE JOKER - HAT FEATURE", "description": "Each Hat or Red Joker symbol sticks to the reels and resets spins to 3. Every 3 that land unlock an additional row, giving more multipliers. Landing 3 Red Jokers during this bonus leads straight into the Red Joker feature."}, {"title": "GREEN JOKER WHEEL", "description": "A generous wheel with coin wins and two booster segments containing multipliers (up to x100) and Red Jokers. Wins continue until the same coin win segment lands twice. Hit the same booster 3 times to jump to the Red Joker feature."}, {"title": "RED JOKER HYPERMODE™", "description": "Land 3 Red Jokers to trigger 20 seconds of Hypermode™ Free Spins — an industry first. Spin frequency increases with every Red Joker that lands, filling a meter that resets the timer to 10 seconds when full."}]},
  {"name": "Tiki Tumble", "slug": "tiki-tumble", "pg": true, "rtp": "96.49%", "rtp_reduced": "94.36%", "volatility": "High", "max_win": "18,278x", "bonus_buy": true, "tagline": "Explorers and thrill seekers, rejoice! Find the Tiki totem gods and bask in their powers", "thumbnail_url": "images/push_gaming/tiki-tumble.jpg", "hero_url": "images/push_gaming/tiki-tumble_hero.jpg", "features": [{"title": "NUDGING WILDS", "description": "Triggered when Wild symbols appear in the top 3 positions on one or more reels before a spin. Stacks of wilds nudge down the reels, shifting for potential wins on each spin."}, {"title": "TIKI BONUS", "description": "Triggered by landing Gold Mask scatter symbols. Full wild stacks appear on reels 2 and 4."}, {"title": "UNLIMITED FREE GAMES & MULTIPLIERS", "description": "Land 3+ Gold Mask symbols to enter Free Games. Wilds continuously nudge with free respins awarded, and an infinite multiplier potential builds with every nudge."}]},
  {"name": "Fire Hopper", "slug": "fire-hopper", "pg": true, "rtp": "96.30%", "rtp_reduced": "94.50%", "volatility": "High", "max_win": "50,000x", "bonus_buy": true, "tagline": "Get ready to meet a mighty Fire Frog!", "thumbnail_url": "images/push_gaming/fire-hopper.jpg", "hero_url": "images/push_gaming/fire-hopper_hero.jpg", "features": [{"title": "LEAPING FROG - FIREFLY SYMBOLS", "description": "When a Frog Symbol lands near a Firefly Symbol, the Frog leaps to it leaving behind a Wild Golden Frog. Each leap increases the Frog's multiplier by 1. Default starting multiplier is 1x."}, {"title": "LEAPING FROG - INSTANT PRIZES", "description": "When the Frog lands near an Instant Prize Symbol, it leaps to collect it, leaving a Wild Golden Frog. The Instant Prize is awarded instantly multiplied by the Frog's current multiplier."}, {"title": "INSTANT PRIZES", "description": "Bet multipliers up to 1,000x that the Frog can leap to and collect."}, {"title": "FREE GAMES", "description": "Triggered when a Bonus Firefly Scatter lands alongside the Wild Fire Frog. Awards 7 Free Spins. Frog remains on grid throughout, accumulating and keeping its multiplier. Wild Golden Frogs left behind cascade off each spin."}]},
  {"name": "Dragon Hopper", "slug": "dragon-hopper", "pg": true, "rtp": "96.33%", "rtp_reduced": "94.39%", "volatility": "Medium-High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Witness the mystic marvels of Dragon Hopper!", "thumbnail_url": "images/push_gaming/dragon-hopper.jpg", "hero_url": "images/push_gaming/dragon-hopper_hero.jpg", "features": [{"title": "WILD DRAGON SYMBOL", "description": "Wild Multiplier substituting for all symbols except Fire Cloud and Scatter. Lands with multipliers of x1, x2, x3, x4, x5 or x10."}, {"title": "DRAGON FEATURE", "description": "When Dragon jumps to a Fire Cloud Symbol, its multiplier increases by +1. Collects all Fire Cloud Symbols in view before a new cascade. Each jump leaves a Golden Dragon Symbol with the multiplier it held before jumping."}, {"title": "INSTANT PRIZE SYMBOLS", "description": "Bet multipliers available in Base Game and Free Spins. Pay out in a cluster of 5+. Wild Dragon multiplier applies if present in the cluster."}, {"title": "MYSTIC FLARE FEATURE", "description": "Randomly triggered after any non-winning cascade in Base Game. Adds 1-2 Mystic Symbols (2x2, 3x3 or 4x4) to the grid revealing Paying Symbols, Instant Prizes, Dragon Symbol or the Scatter Symbol."}, {"title": "FREE SPINS FEATURE", "description": "Triggered by 3+ Scatter Symbols. Dragon Symbols, Golden Dragon Symbols, Fire Cloud Symbols and Instant Prizes from Base Game carry over into the feature."}, {"title": "BUBBLE FEATURE", "description": "Bubble Symbol appears randomly with values 1-500x, in stacks of up to 5. Moves up the grid 1 position per spin (straight or diagonal). Can be applied to Fire Cloud, Golden Dragon and Instant Prize Symbols."}]},
  {"name": "Dinopolis", "slug": "dinopolis", "pg": true, "rtp": "96.40%", "rtp_reduced": "93.95%", "volatility": "High", "max_win": "50,000x", "bonus_buy": true, "tagline": "Get down to the hippest casino around with the most roarsome guests you'll ever meet!", "thumbnail_url": "images/push_gaming/dinopolis.jpg", "hero_url": "images/push_gaming/dinopolis_hero.jpg", "features": [{"title": "DINO COINS & WILD MULTIPLIERS", "description": "Dino Coins land on reels 1 and 5 (up to 1000x). Wild Multipliers land on remaining reels. Form 3-of-a-kind or better for wins."}, {"title": "DINO BONUS - PICK FEATURE & PROGRESSIVE FREE SPINS", "description": "Land 3 scatters on reels 2, 3 and 4. Choose 2 cards — one is a feature prize, the other awards a number of Free Spins."}, {"title": "DINO BONUS - RETRIGGER", "description": "Dino Collector Coins fill a meter beside the reels. Collect 5 to advance to the next level (5 total), each offering better pick features."}, {"title": "DINO BONUS - GOLDEN CARD", "description": "Rare card that awards 2 extra feature prize picks followed by a random number of Free Spins. Appears only once per Dino Bonus."}, {"title": "DINO BONUS - STICKY STACK WILD CARD", "description": "Lands with a multiplier up to 7x (boosted by single or all-reel Multiplier Booster cards). Sticky Stack covers the entire reel and remains for the full Dino Bonus feature."}]},
  {"name": "Bison Battle", "slug": "bison-battle", "pg": true, "rtp": "96.40%", "rtp_reduced": "94.18%", "volatility": "High", "max_win": "50,000x", "bonus_buy": true, "tagline": "Stand back! A bison clash is about to take place.", "thumbnail_url": "images/push_gaming/bison-battle.jpg", "hero_url": "images/push_gaming/bison-battle_hero.jpg", "features": [{"title": "BISON CLASH", "description": "Triggered when Red Bison Symbol with an Instant Prize appears on the same row as a Multiplier. Both Red Bisons clash and the Instant Prize value is multiplied by the Multiplier value."}, {"title": "ICE PARK FEATURE (FREE SPINS)", "description": "Triggered when Blue and Red Bison (with Multiplier) appear on the same row. Starts with 3 Free Spins. Red Bison Walking Symbols (up to 10x) land on reels 1 & 5; Bison Coin Symbols (up to 2,500x) land on reels 2-4 as sticky prizes. Every landed symbol resets Free Spins. Win up to 50,000x."}, {"title": "GREEN VALLEY FEATURE (FREE SPINS)", "description": "Triggered when Green and Red Bison (with Multiplier) appear on the same row. 8 Free Spins. Red Bison Walking Symbols multiply Sticky Wild Symbols on the same row and award additional Free Spins. Win up to 50,000x."}]},
  {"name": "Triple Rampage", "slug": "triple-rampage", "pg": true, "rtp": "96.23%", "rtp_reduced": "94.25%", "volatility": "Medium", "max_win": "5,400x", "bonus_buy": false, "tagline": "Power up and claim the throne as king of the Kaijus in Triple Rampage!", "thumbnail_url": "images/push_gaming/triple-rampage.jpg", "hero_url": "images/push_gaming/triple-rampage_hero.jpg", "features": [{"title": "MAX MAYHEM FREE SPINS", "description": "Activating all 3 Kaiju from the base game will award 10 Free Spins and trigger all features at once."}, {"title": "3 POTS MECHANIC", "description": "Above the reels are 3 Kaiju; each Kaiju has its own free spins game. Collecting matching Token Symbols may cause the Kaiju to react, grow or trigger its respective free spins game."}, {"title": "INSTANT PRIZES", "description": "Instant Prizes can appear on all reels. When a Collector Symbol lands on reels 1 and/or 6, all visible Instant Prize Symbols will be collected and awarded to the player."}, {"title": "FIXED JACKPOTS", "description": "Triple Rampage features four fixed jackpots: the Mini, Minor, Major and Mega jackpot. The Collector Symbol will collect any visible Jackpot symbols on the reels and award to the player the matching jackpot prize."}, {"title": "STICKY PRIZES", "description": "Instant Prize Symbols/Jackpot Symbols can become sticky after a spin and will remain on the reels until collected. A Collector Symbol on reels 1 and 6 will collect the symbol and award the prize value to the player."}, {"title": "MEGA REELS FREE SPINS", "description": "Activating the Blue Kaiju triggers the Mega Reels Free Spins Feature. This feature expands the reels to 6 rows, increasing the ways to win to 46,656."}, {"title": "POWER COLLECTOR FREE SPINS", "description": "Activating the Red Kaiju will trigger the Power Collector Free Spins Feature. During this feature, when a Collector Symbol lands on reels 1 and/or 6, it will nudge down one row for each Free Spin."}, {"title": "KAIJU CASH FREE SPINS", "description": "Activating the Green Kaiju will trigger Kaiju Cash Free Spins. Extra Instant Prizes will be added to all reels."}, {"title": "COMBO FREE SPINS", "description": "There are seven combinations of Free Spins in Triple Rampage. During an ongoing Free Spins Feature, other Kaiju and their respective Features can be activated simultaneously."}]},
  {"name": "Retro Tapes", "slug": "retro-tapes", "pg": true, "rtp": "96.47%", "rtp_reduced": "94.46%", "volatility": "High", "max_win": "10,000x", "bonus_buy": true, "tagline": "Get ready to dance to Retro Tapes!", "thumbnail_url": "images/push_gaming/retro-tapes.jpg", "hero_url": "images/push_gaming/retro-tapes_hero.jpg", "features": [{"title": "CLUSTER LINKS FEATURE", "description": "Retro Tapes breaks the slots mould with Cluster Link, Push Gaming’s latest exclusive Feature. Land five or more tapes in a cluster for instant wins! You can also land Wild Tape Symbols that multiply any cluster wins they’re involved in. Chain cluster wins together with a Wild Tape Symbol to keep increasing the multiplier. Cluster Links gets really exciting in the Top Charts Bonus Game. Build larger clusters by linking Wild Tapes with Wild Multipliers and Magnets to create huge value cluster wins!"}, {"title": "BASE GAME - TAPES & INSTANT PRIZE", "description": "Tapes will collect once they form a cluster of 5 or more identical tapes. Once collected, any clusters will spin off and leave space for new tapes to fall in, with the potential to create new clusters. Tape clusters of 5 or more can vary in payout value from 0.1x – 1000x. Instant Prize Symbols are bet multipliers that pay out once a cluster of 5 or more is formed. Instant Prize Symbols can have any of the following values: 1x, 2x, 5x, 10x, 25x, 50x, 100x, 250x, 500x and 1000x!"}, {"title": "BASE GAME - WILD TAPE SYMBOLS", "description": "The Wild Tape Symbol substitutes for all other symbols except the Magnet and Wild Multiplier Symbols and will land on the reel with 1x multiplier. Each cluster win that the Wild Multiplier Symbol is involved in will increase the multiplier by +1. The Wild Tape Symbol will spin off when there are no more cluster wins. The Wild Tape Symbol is also a Scatter Symbol, meaning three or more landing anywhere on the reel at the same time will trigger the Free Games Feature."}, {"title": "WILD MULTIPLIER SYMBOL", "description": "The Wild Multiplier Symbol is available during both the Base Game and Top Charts Feature. Wild Multiplier Symbols will distribute their multiplier value to every present Wild Tape Symbol, after which it will transform into an Instant Prize Symbol of random value."}, {"title": "MAGNET FEATURE", "description": "The Magnet Symbol will randomly pick one type of Paying Symbol and attract everyone present on the reels into a cluster. If the Magnet Symbol chooses an Instant Prize with 4 or more Symbols present on the reels, it will form a cluster. Once a cluster is created, the Magnet Symbol will transform into the paying symbol or an Instant Prize Symbol of a random value. During the Top Charts Feature the Magnet Symbol gains additional features. Landing a Magnet Symbol in the Bonus Game will attract all Instant Prize Symbols that aren’t locked within a random range. The Magnet Symbol will then transform into a random Instant Prize for a cluster win."}, {"title": "TOP CHART FEATURE", "description": "When the Top Charts Feature is triggered, all Wild Tape and Instant Prize Symbols will stay in place. From there, each Free Spin will land randomly on one of the following Symbols: Blank Space, Wild Tape, Wild Multiplier, Instant Prize, Magnet, Extra Spin. Any Instant Prize Symbols that land will remain on the reels until the end of the feature, at which point they will be evaluated. All clusters will collect!"}]},
  {"name": "Generous Jack", "slug": "generous-jack", "pg": true, "rtp": "96.23%", "rtp_reduced": "94.36%", "volatility": "High", "max_win": "10,000x", "bonus_buy": true, "tagline": "Come one, come all! Generous Jack has a seat for you at his table!", "thumbnail_url": "images/push_gaming/generous-jack.jpg", "hero_url": "images/push_gaming/generous-jack_hero.jpg", "features": [{"title": "FEATURE - PUSH-UP", "description": "Increase your stake at a fixed cost per game round to open up more rows for each spin. Pay 5x bet amount to unlock the second row, 20x for three rows and 50x for all four rows. Push-Up opens up big potential wins along with more chances to land Jack Symbols and activate the Free Spins Bonus Game!"}, {"title": "BASE GAME - NUMBER CHIPS AND DUDS", "description": "Rounds will begin with only the bottom reel unlocked. Avoid Duds and land Chips in any open reels to claim their Instant Prize value, which ranges from 0-9x. Landing two or more numbers side by side in a row will combine them, making huge combo wins!"}, {"title": "BASE GAME - JACK SYMBOLS AND EXPANDING REELS", "description": "Jack Symbols can land on the reels randomly. Every round where a Jack Symbol lands, one more reel will be unlocked. The first row has three slots for Chips and Duds, progressing to row two, with four slots, row three with five and row four with six. Every Jack Symbol landed within a spin and any respins triggered will contribute randomly to the Free Spins meter."}, {"title": "BONUS GAME - FREE SPINS", "description": "The Free Spins meter will be filled randomly by landing Jack Symbols. Filling all three of the first level will grant three Free Spins, with the potential to fill up to five, seven or ten free spins if filled totally including the slots below. The Bonus Game will then play similarly to the base game, without the Jack Symbols. The whole reel is open in the Bonus Game, maximising win potential as Duds and Chips fall into place. All Chips will remain on the reel until the Free Spins end, where the final multiplier will apply to any single and combo numbers individually."}]},
  {"name": "Tricky Treats", "slug": "tricky-treats", "pg": true, "rtp": "96.32%", "rtp_reduced": "94.38%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Will you get a sweet treat or a tasty trick?", "thumbnail_url": "images/push_gaming/tricky-treats.jpg", "hero_url": "images/push_gaming/tricky-treats_hero.jpg", "features": [{"title": "CLUSTER LINK FEATURE", "description": "Triggered by landing 3 or more Wild Symbols. Base Game Wilds and Instant Prizes stick and carry into Free Spins. Awards based on Wilds landed: 3 Wilds = 6 Free Spins 4 Wilds = 8 Free Spins 5 Wilds = 10 Free Spins 6 Wilds = 12 Free Spins During Free Spins, each empty position may land: Wild Symbol Wild Multiplier Symbol Instant Prize Symbol Collector Symbol Instant Prize Multiplier Symbol Extra Spin Symbol Blank Symbol"}, {"title": "WILD SYMBOL", "description": "Acts as both a Wild and a Scatter. Substitutes for all non-special symbols. Landing 3 or more triggers the Free Spins Feature. Each Wild starts with a 1x multiplier. When part of a cluster win, its multiplier increases by +1 per win."}, {"title": "WILD MULTIPLIER SYMBOL", "description": "Appears in Base Game and Free Spins. Has a multiplier: 1x, 2x, 3x, or 5x. Distributes its value to all Wilds in view. Then transforms into an Instant Prize Symbol with a random value."}, {"title": "INSTANT PRIZES", "description": "Symbols with bet multiplier values: 1x, 2x, 5x, 10x, 25x, 50x, 100x, 250x, 500x, 1000x Forming a cluster of 5 or more triggers a win. Instant Prize Multiplier Symbol: Appears in both Base Game and Free Spins. Has multiplier values: 2x, 3x, 5x, or 10x. Multiplies all Instant Prizes in view, then turns into a random Instant Prize Symbol."}, {"title": "COLLECTOR SYMBOL", "description": "Gathers symbols to create a cluster win. In the Base Game: Picks one type of Paying Symbol from the grid and pulls 4 to 9 of them around its position. Can also attract Wilds or Instant Prizes. Then transforms into either a Paying Symbol or an Instant Prize Symbol with a random value. In the Bonus Game: Picks a random set of non-clustering symbols (of any type) from the grid. Still pulls them into a cluster and can include Wilds and Instant Prizes."}]},
  {"name": "Mad Blast", "slug": "mad-blast", "pg": true, "rtp": "96.34%", "rtp_reduced": "94.30%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Boost, blast, and upgrade your way to building the ultimate winning bot!", "thumbnail_url": "images/push_gaming/mad-blast.jpg", "hero_url": "images/push_gaming/mad-blast_hero.jpg", "features": [{"title": "PUSH BET", "description": "Push-Up mode provides an option to increase the chance of triggering the Free Spins Feature by 207% for 2x increase of the Base Bet."}, {"title": "TOTAL MULTIPLIER METER", "description": "Doubles with every winning cascade up to x2048, and resets after a non-winning cascade. In Free Spins, the starting multiplier is based on the Scatters amount."}, {"title": "MULTIPLIER BOOST SYMBOL", "description": "This non-paying symbol increases the Total Multiplier by 1-5 steps when it lands with a win. Appears in both Base Game and Free Spins."}, {"title": "EXTRA LIFE SYMBOL", "description": "Triggers on a losing cascade, clearing all symbols except Scatters, Multiplier Boosts, and the most common symbol type on the grid."}, {"title": "FREE SPINS FEATURE", "description": "Trigger with 3-5 Mad Heads for 8-12 Free Spins and a starting multiplier of x2-x8. Gain +1 spin for each Mad Head during the feature."}, {"title": "MULTIPLIER STRIKE OUT FEATURE", "description": "After 3 consecutive wins in Free Spins, the last multiplier step is removed from the list for added challenge."}]},
  {"name": "Blaze of Ra", "slug": "blaze-ra", "pg": true, "rtp": "96.40%", "rtp_reduced": "94.18%", "volatility": null, "max_win": "2,049x", "bonus_buy": false, "tagline": "Harness the fiery force of Ra to produce blazingly hot wins!", "thumbnail_url": "images/push_gaming/blaze-ra.jpg", "hero_url": "images/push_gaming/blaze-ra_hero.jpg", "features": [{"title": "FREE GAMES", "description": "Here, the first, third, and fifth reels will always be filled with Wild Ra symbols. If one or more Scarab symbols land anywhere on the reels, additional free games are awarded."}, {"title": "NUDGING WILDS", "description": "Land one or more wild symbols in the top two positions of one or more reels to trigger the nudging wilds feature. These reels nudge down by two positions, keeping Ra on the reels for better chances of wins."}, {"title": "SCATTER SYMBOLS", "description": "Land 3 or more Scarabs anywhere to trigger the free games. Each landed Scarab reveals a number which is the amount of free spins that you will receive."}]},
  {"name": "Razor Shark Jackpots", "slug": "razor-shark-jackpots", "pg": true, "rtp": "96.38%", "rtp_reduced": "94.30%", "volatility": "Medium", "max_win": "11,007.70x", "bonus_buy": false, "tagline": "Descend into shark-infested waters where every spin could strike gold — it's Razor Shark Jackpots!", "thumbnail_url": "images/push_gaming/razor-shark-jackpots.jpg", "hero_url": "images/push_gaming/razor-shark-jackpots_hero.jpg", "features": [{"title": "JACKPOT FEATURE", "description": "The Jackpot Feature is activated when the Shark Pot above the reels activates. JACKPOT PRIZES There are 5 different kinds of Jackpot Prizes. The amount of tokens required to be awarded each Jackpot are as follows: Mini Jackpot - 4 Tokens Minor Jackpot - 4 Tokens Maxi Jackpot - 4 Tokens Major Jackpot - 4 Tokens Mega Jackpot - 6 Tokens The values of these are based on the selected Base Bet, and the values available are: Mini Jackpot - x10 Minor Jackpot - x25 Maxi Jackpot - x50 Major Jackpot - x500 Mega Jackpot - x5000"}, {"title": "NUDGE & REVEAL FEATURE", "description": "When the Nudge & Reveal Feature triggers, the Mystery Symbols will open and can reveal the following: Paying Symbols. Golden Mystery Symbols."}, {"title": "RAZOR REVEAL FEATURE", "description": "When the Mystery Symbol reveals the Golden Mystery Symbol, the Razor Reveal Feature is triggered. Each position containing a Golden Mystery Symbol will spin through different prizes. During the Razor Reveal Feature , the following Symbols can land: Instant Prize Symbols Bonus Symbols Nudge Up Symbol"}, {"title": "FREE GAMES FEATURE", "description": "When 3 or more Scatter Symbols land anywhere, the Free Games Feature is triggered. This can happen with Scatter Symbols landing on the reels on any given spin or through the Razor Reveal Feature."}]},
  {"name": "RetroVerse", "slug": "retroverse", "pg": true, "rtp": "96.24%", "rtp_reduced": "94.37%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Get ready to plug into the next dimension of cluster pays... RetroVerse is here!", "thumbnail_url": "images/push_gaming/retroverse.jpg", "hero_url": "images/push_gaming/retroverse_hero.jpg", "features": [{"title": "MULTIPLICATOR FEATURE", "description": "When the Multiplicator Symbol appears, it multiplies the values of all adjacent Instant Prize and Collector Symbols. After the feature ends, the Multiplicator Symbol transforms into a random Instant Prize Symbol."}, {"title": "WILD SYMBOL", "description": "When a Wild Symbol contributes to a Cluster Win, the symbol will remain stuck in the same position. The Wild Symbol will spin off the grid when there are no more cluster wins. When the Wild Symbol participates in 1 or more cluster wins, its multiplier increases by 1. When a Wild Symbol contributes to a Cluster Win, the multiplier from that symbol will be applied to the win. If more than one Wild Symbol contributes to the same Cluster, multipliers from each Wild Symbol will be applied to the Cluster Win one after the other."}, {"title": "WILD MYSTERY SYMBOL - BASE GAME", "description": "The Wild Mystery Symbol in the Base Game has 3 levels to achieve. Its levels are determined by the number of cluster wins it participates in. When all levels are achieved, the Wild Mystery Symbol can reveal: Wild Symbol with initial multiplier: x2, x3, x4, x5, x6, x7, x8, x9, x10 Scatter Symbol Magnet Symbol If the maximum number of Scatter Symbols is achieved on the grid, the Wild Mystery can reveal an Instant Prize Symbol: x25, x50, x100, x250, x500."}, {"title": "MAGNET SYMBOL", "description": "The Magnet Symbol randomly selects one type of Paying Symbols, and attracts all matching symbols from across the grid to its position, creating a cluster win. The Magnet Symbol can attract Instant Prize Symbols when at least 4 of them are in view, creating a cluster. The Magnet Symbol can attract the Wild Symbol and the Wild Mystery Symbol, along with Paying Symbols or Instant Prize Symbols."}, {"title": "LIGHT GUN SYMBOL", "description": "The Light Gun Symbol can randomly remove 2 Paying Symbols types from the grid. The Light Gun Symbol can only remove regular Paying Symbols."}, {"title": "FREE SPINS", "description": "When 3 or more Scatter Symbols land anywhere on the reels, the Free Spins Feature is triggered. During the Feature, each empty symbol position will spin through to land on one of the following symbols: Wild Symbol with multiplier: x1, x2, x3, x4, x5, x6, x7, x8, x9 and x10 Wild Mystery Symbol Instant Prize Symbols Magnet Symbol Extra Spin Symbol Blank Symbol Each Instant Prize Symbol that lands will remain in its position throughout the Feature. All Instant Prize Symbol Clusters are evaluated at the end of the Feature."}, {"title": "WILD MYSTERY SYMBOL - FREE SPINS", "description": "In the Free Spins Feature, the Wild Mystery Symbol will only open if the win cluster contains the number of Instant Prize Symbols and Collector Symbols indicated on the Wild Mystery Symbol. When the right number of Instant Prize Symbols is reached, the Wild Mystery Symbol shall reveal one of the following: Instant Prize Symbol with high value: x25, x50, x100, x250, x500 Wild Symbol with initial multiplier: x2, x3, x4, x5, x6, x7, x8, x9, x10 Magnet Symbol Multiplicator Symbol Collector Symbol"}, {"title": "COLLECTOR FEATURE", "description": "When the Collector Symbol shows up in a cluster, it collects all of the values from the Instant Prize Symbols within that cluster. All Instant Prize Symbols are removed from the reels when collected."}]},
  {"name": "Wild Swarm 3 Chocolate Eggs", "slug": "wild-swarm-3-chocolate-eggs", "pg": true, "rtp": "96.48%", "rtp_reduced": "94.33%", "volatility": "Low", "max_win": "23902.8x", "bonus_buy": false, "tagline": "The hive is back and it's loaded!", "thumbnail_url": "images/push_gaming/wild-swarm-3-chocolate-eggs.jpg", "hero_url": "images/push_gaming/wild-swarm-3-chocolate-eggs_hero.jpg", "features": [{"title": "QUEEN BUNNY BEE - FREE SPINS", "description": "The Queen Bunny Bee Symbol may land during any Egg Feature or combination of Features. Upon landing, it adds a random number of Sticky Wild Symbols to the reels, ranging from 1 to 4. The Queen Bunny Bee Symbol itself functions as a standard Sticky Wild."}, {"title": "WILD SYMBOLS", "description": "Wild Honey and Sticky Wilds substitute for all Paying Symbols (except Chest Symbols). Sticky Wilds appear only in Free Spins and remain in place until the feature ends."}, {"title": "COLLECTIBLE BEES", "description": "When a Wild Honey Symbol lands in the Base Game, it may include a Collectible Bee: Red Bunny Bee → Collected by Jackpot Egg (chance to trigger Jackpot Egg Feature) Green Bunny Bee → Collected by Multiplier Egg (chance to trigger Multiplier Egg Feature) Yellow Bunny Bee → Collected by Sticky Egg (chance to trigger Sticky Egg Feature) Queen Bunny Bee → Collected by a random Egg (higher chance to trigger a Feature)"}, {"title": "WHEEL FEATURE - BASE GAME", "description": "Triggered when a Chest Symbol lands. A segmented wheel spins to award one of the following: Base Game Wheel Prizes:Bet Multipliers: x2, x3, x4, x5, x7, x8, x9, x15, x30, x45, x60, x75, x90, x125, x150, x200, x250 Jackpots: Mini, Minor, Maxi, Mega, Grand Feature Triggers: Jackpot + Multiplier Eggs Jackpot + Sticky Eggs Multiplier + Sticky Eggs Jackpot + Multiplier + Sticky Eggs Random Egg Feature (guaranteed trigger of a singular or combination)"}, {"title": "WHEEL FEATURE – FREE SPINS", "description": "Prizes available during any Free Spins Feature: Extra Free Spins: +2, +3, +4, +5 Sticky Wilds Reel: Fills any Reel with Sticky Wilds Jackpot Tokens: 2–5 of the same type (only during Jackpot Egg or its combinations) Jackpots: Mini, Minor, Maxi, Mega, Grand Bet Multipliers (same as in the base game)"}, {"title": "JACKPOTS", "description": "Available via Wheel or Jackpot Egg Features (or any combination including them). Jackpot values (Bet Multipliers): Mini – x10 Minor – x25 Maxi – x50 Mega – x100 Grand – x1000"}, {"title": "FREE SPINS FEATURES", "description": "Triggered when a Collectible Bee enters an Egg (chance-based). Awards 7 Free Spins per trigger. 1 Extra Spin is granted when a reel is filled with Sticky Wilds."}, {"title": "JACKPOT EGG FEATURE", "description": "Sticky Wilds land with Jackpot Tokens. Tokens fill respective Jackpot Meters: Mini = 2 Tokens Minor = 3 Tokens Maxi = 4 Tokens Mega = 5 Tokens Grand = 6 Tokens When filled, the Jackpot is awarded, and the meter resets. Jackpots can be won multiple times."}, {"title": "MULTIPLIER EGG FEATURE", "description": "Reel Multipliers are placed above reels 2, 3, and 4: Reel 2 = x2 Reel 3 = x4 Reel 4 = x8 When a reel is filled with Sticky Wilds, each Sticky Wild beneath receives that reel’s multiplier. Sticky Wild Multipliers are additive."}, {"title": "STICKY EGG FEATURE", "description": "Before the first Free Spin, 4 Sticky Wilds land randomly on the reels."}, {"title": "COMBO EGG FEATURES", "description": "Free Spins Features can be triggered when any combination of Collectible Bees is collected or via the Wheel Feature. Any combination of 2 Egg Features will award 10 Free Spins. A combination of all 3 Egg Features will award 12 Free Spins."}]},
  {"name": "Wild Swarm Triple Hive", "slug": "wild-swarm-triple-hive", "pg": true, "rtp": "96.48%", "rtp_reduced": "94.33%", "volatility": "Medium", "max_win": "23902.8x", "bonus_buy": false, "tagline": "Get ready for triple the thrill in Wild Swarm Triple Hive!", "thumbnail_url": "images/push_gaming/wild-swarm-triple-hive.jpg", "hero_url": "images/push_gaming/wild-swarm-triple-hive_hero.jpg", "features": [{"title": "QUEEN BEE (FREE SPINS)", "description": "The Queen Bee Symbol may land during any Hive Feature or combination of Features. Upon landing, it adds a random number of Sticky Wild Symbols to the reels, ranging from 1 to 4. The Queen Bee Symbol itself functions as a standard Sticky Wild."}, {"title": "WILD SYMBOLS", "description": "Wild Honey and Sticky Wilds substitute for all Paying Symbols (except Chest Symbols). Sticky Wilds appear only in Free Spins and remain in place until the feature ends."}, {"title": "COLLECTIBLE BEES (BASE GAME ONLY)", "description": "When a Wild Honey Symbol lands, it may include a Collectible Bee: Red Knight Bee → Collected by Jackpot Hive (chance to trigger Jackpot Hive Feature) Green Knight Bee → Collected by Multiplier Hive (chance to trigger Multiplier Hive Feature) Yellow Knight Bee → Collected by Sticky Hive (chance to trigger Sticky Hive Feature) Queen Bee → Collected by a random Hive (higher chance to trigger a Feature)"}, {"title": "WHEEL FEATURE – BASE GAME", "description": "Triggered when a Chest Symbol lands. A segmented wheel spins to award one of the following: Base Game Wheel Prizes:Bet Multipliers: x2, x3, x4, x5, x7, x8, x9, x15, x30, x45, x60, x75, x90, x125, x150, x200, x250 Jackpots: Mini, Minor, Maxi, Mega, Grand Feature Triggers: Jackpot + Multiplier Hive Jackpot + Sticky Hive Multiplier + Sticky Hive Jackpot + Multiplier + Sticky Hive Random Hive Feature (guaranteed trigger of a singular or combination)"}, {"title": "WHEEL FEATURE – FREE SPINS", "description": "Prizes available during any Free Spins Feature: Extra Free Spins: +2, +3, +4, +5 Sticky Wilds Reel: Fills any Reel with Sticky Wilds Jackpot Tokens: 2–5 of the same type (only during Jackpot Hive or its combinations) Jackpots: Mini, Minor, Maxi, Mega, Grand Bet Multipliers (same as in the base game)"}, {"title": "JACKPOTS", "description": "Available via Wheel or Jackpot Hive Features (or any combination including them). Jackpot values (Bet Multipliers): Mini – x10 Minor – x25 Maxi – x50 Mega – x100 Grand – x1000"}, {"title": "FREE SPINS FEATURES", "description": "Triggered when a Collectible Bee enters a Hive (chance-based). Awards 7 Free Spins per trigger. 1 Extra Spin is granted when a reel is filled with Sticky Wilds."}, {"title": "JACKPOT HIVE FEATURE", "description": "Sticky Wilds land with Jackpot Tokens. Tokens fill respective Jackpot Meters: Mini = 2 Tokens Minor = 3 Tokens Maxi = 4 Tokens Mega = 5 Tokens Grand = 6 Tokens When filled, the Jackpot is awarded, and the meter resets. Jackpots can be won multiple times."}, {"title": "MULTIPLIER HIVE FEATURE", "description": "Reel Multipliers are placed above reels 2, 3, and 4: Reel 2 = x2 Reel 3 = x4 Reel 4 = x8 When a reel is filled with Sticky Wilds, each Sticky Wild beneath receives that reel’s multiplier. Sticky Wild Multipliers are additive."}, {"title": "STICKY HIVE FEATURE", "description": "Before the first Free Spin, 4 Sticky Wilds land randomly on the reels."}, {"title": "COMBO HIVE FEATURES", "description": "Free Spins Features can be triggered when any combination of Collectible Bees is collected or via the Wheel Feature. Any combination of 2 Hive Features will award 10 Free Spins. A combination of all 3 Hive Features will award 12 Free Spins."}]},
  {"name": "Sea of Spirits", "slug": "sea-spirits", "pg": true, "rtp": "96.36%", "rtp_reduced": "94.28%", "volatility": "High", "max_win": "25,000x", "bonus_buy": true, "tagline": "Will you sail into treasure or be swept away by the tide? Every spin is an adventure in Sea of Spirits!", "thumbnail_url": "images/push_gaming/sea-spirits.jpg", "hero_url": "images/push_gaming/sea-spirits_hero.jpg", "features": [{"title": "SUPER BONUS FEATURE", "description": "The Super Bonus Feature is triggered when 2 Bonus Symbols and 1 Super Bonus Symbol land anywhere on the reels, awarding 8 Super Bonus Spins. ​​ During the first spin, 3 or more Frames with varying tier levels are added to the reels."}, {"title": "WIN WAYS - BASE GAME", "description": "A symbol win is awarded when a number of instances of the same symbol appear on adjacent reels, starting from the leftmost reels."}, {"title": "FRAMES", "description": "Frames are special overlays that can appear on top of any symbol. Frames can appear randomly on a reel position during any spin. Frames can be populated by Activator Symbols. Only Bronze Frames are available during the Base Game. Once all wins are evaluated and the spin button is pressed, the Frames remain on the reels and nudge down by one position as the reels spin for the next round. During Free Spins, Frames are sticky for the duration and can be upgraded."}, {"title": "ACTIVATOR SYMBOLS", "description": "Activator Symbols are special symbols that can land. Activator Symbols are only activated after initial winning combinations are evaluated. The following Activator Symbols can land: Symbol Sync Activator; Coin Activator; Wild Activator; When activated, Activator Symbols transform all Frame instances on the reels to reveal their corresponding prize. When an Activator Symbol lands in a position without a Frame, the Activator Symbol will leave behind a Frame for the next spin."}, {"title": "COIN REVEAL FEATURE", "description": "During the Coin Reveal Feature, each position spins through different prizes, and the following symbols can land: Instant Prize Symbols; Multiplier Symbols; Collector Symbols; Bonus Symbol (Base Game only); Super Bonus Symbol (Base Game only); Upgrader Symbol (Bonus Buy only); At the end of the Coin Reveal Feature, all wins are evaluated based on the total value of the Instant Prize Symbols and Collector Symbols multiplied by the player’s Base Bet."}, {"title": "BONUS FEATURE", "description": "The Bonus Feature is triggered when 3 Bonus Symbols land anywhere on the reels, awarding 5 Bonus Spins. ​​ During the first spin, 3 or more Bronze Frames are added to the reels."}]},
  {"name": "Happy Bamboo", "slug": "happy-bamboo", "pg": true, "rtp": "96.31%", "rtp_reduced": "94.23%", "volatility": "Medium", "max_win": "6,060x", "bonus_buy": false, "tagline": "Return to the zen forest for an experience like no other!", "thumbnail_url": "images/push_gaming/happy-bamboo.jpg", "hero_url": "images/push_gaming/happy-bamboo_hero.jpg", "features": [{"title": "HOLD AND RESPIN FEATURE", "description": "9 slots spin and land on one of the following: Mystery Bamboo Symbol Dud Symbols Landing a Mystery Symbol will lock the symbol in place on the reels and allow Respins to continue on the rest of the reels. At least one win line is always guaranteed. Mystery Bamboo Symbols open to reveal either: Wild Symbol Paying Symbol Golden Mystery Bamboo Symbol The sequence ends when no Mystery Symbols land or all slots are filled."}, {"title": "MYSTERY BAMBOO REVEAL", "description": "During the Base Game and Hold and Respin Feature, Mystery Bamboo Symbol can reveal the following: Wild Symbols Paying Symbols Golden Bamboo Symbol"}, {"title": "GOLDEN MYSTERY BAMBOO REVEAL", "description": "During the Base Game and Hold and Respin Feature, the Golden Mystery Bamboo Symbol can reveal the following: Coin Symbols Collector Symbols Multiplier Symbols Mystery Jackpot Symbols."}, {"title": "HOLD AND RESPIN FEATURE - TRIGGER", "description": "Collecting a Golden Coin in the Panda Pot has a chance to trigger this feature. Once activated, a multiplier wheel spins through the following multipliers: 2x, 3x, 4x, 5x, 10x Once a multiplier lands, the Hold And Respin Feature Begins."}]},
  {"name": "Bamboo Ways", "slug": "bamboo-ways", "pg": true, "rtp": "96.30%", "rtp_reduced": "94.42%", "volatility": "High", "max_win": "25,000x", "bonus_buy": true, "tagline": "The Bamboo Series returns with a twist in Bamboo Ways!", "thumbnail_url": "images/push_gaming/bamboo-ways.jpg", "hero_url": "images/push_gaming/bamboo-ways_hero.jpg", "features": [{"title": "FREE SPINS FEATURE", "description": "Triggered by Scatters. The number of triggering Scatters determines: The starting layout The initial multiplier The number of low symbols removed Collect 4 Scatters during Free Spins to level up. The multiplier applies to Golden Bamboo Feature rewards."}, {"title": "EXPANDING ROWS", "description": "The game starts with 3 active bottom rows and 3 locked top rows. Each cascade or Instant Prize win unlocks 1 additional row. The reels reset to the initial layout at the start of each round."}, {"title": "EXPANDING WILD SYMBOL", "description": "Can land directly or be revealed from Mystery Symbols. Expands to cover all unlocked rows in both the Base Game and Free Spins. May come with a multiplier: x2, x3, or x5."}, {"title": "CONVERTER INTO WILDS SYMBOL", "description": "Appears directly or via Mystery Symbols. Spins through Paying symbols on the unlocked rows. When a paying symbol lands, all symbols of that type — including the Converter itself — turn into Wilds."}, {"title": "SCATTER SYMBOLS", "description": "Landing 3 or more Scatters triggers the Free Spins Feature."}, {"title": "MYSTERY SYMBOLS", "description": "Can appear anywhere in the Base Game or Free Spins. Mystery Symbols can reveal one of the following: Paying Symbols Wild Symbols Expanding Wild Symbols Converter into Wild Symbols Expander Symbols Golden Bamboo Symbols Newly landed Mystery Symbols during the same round reveal different prizes than the initial ones — unless they reveal Golden Bamboo Symbols."}, {"title": "EXPANDER SYMBOL", "description": "Revealed from Mystery Symbols. Expands the Mystery Symbols in a random direction to fill rows or unlocked areas. The symbol that triggered the expansion then transforms to match the other revealed Mystery Symbols."}, {"title": "GOLDEN BAMBOO FEATURE", "description": "Triggered when a Mystery Symbol reveals a Golden Bamboo Symbol. During the feature, the following prizes can appear: Instant Prize Symbols Multiplier Symbols Collector Symbols Converter Symbols Scatter Symbols Row Unlocker Symbol (Bonus Buy only) The feature continues until no new Mystery Symbols cascade."}]},
  {"name": "Tarot Treasures", "slug": "tarot-treasures", "pg": true, "rtp": "96.39%", "rtp_reduced": "94.33%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Step into the spellbinding world of Tarot Treasures!", "thumbnail_url": "images/push_gaming/tarot-treasures.jpg", "hero_url": "images/push_gaming/tarot-treasures_hero.jpg", "features": [{"title": "CASCADE FEATURE - FREE SPINS", "description": "When a cascade occurs, the Cascade metre is filled by 1. When the 5 spaces have been filled, the Feature is triggered. Once a cascade trail is filled, a range of cards are displayed, showcasing up to 4 different Feature options. Each card has an upgraded value in Free Spins. One Card is randomly selected and will award an upgrade."}, {"title": "HOT ZONES", "description": "Hot Zones can land anywhere on the reel set. Any symbols that land in a Hot Zone are split in two, increasing the number of ways to win. With every spin, the Hot Zones move down one position. They always appear in stacks of four."}, {"title": "CASCADE FEATURE - BASE GAME", "description": "During Base Game, when a cascade occurs, the Cascade metre is filled by 1. When 3 consecutive cascades have occurred and the spaces have been filled, the Cascade Feature is triggered. Once 3 consecutive cascades have occurred, 4 categories of cards are displayed showcasing a variety of different Feature options. One Card is randomly selected and will award an upgrade."}, {"title": "FREE SPINS TRIGGER", "description": "The Free Spins Feature is triggered when 3 Scatters land in the Base Game, awarding a total of 8 Free Spins. Any subsequent Scatters that land will add one Spin each. +1 Scatters are the only available Scatters during Free Spins. Every Scatter adds one to the total number of Free Spins retriggered."}, {"title": "CASCADE FEATURE - UPGRADES", "description": "Extra Wilds - The number of Wilds that can land is 3, 5, 7 and 10. If a win occurs, the cascading sequence continues. Extra Hot Zones - 1 or more Stacks of 4 Hot Zones are placed on the reels and activated immediately. Win Multiplier - The Win Multipliers available are x3, x5, x10, x25. This Win Multiplier will apply to the total win from the last cascading sequence. Free Spins Trigger - An additional 1, 2, 3, 4, 5 or 6 scatters can be awarded to award or enhance entry into Free Spins."}, {"title": "FREE SPINS", "description": "At the start of the Free Spins feature, the Hot Zones initially land on reels 2 and 5. Free Spins can be retriggered through the Cascade feature, or by landing +1 Scatters, each +1 Scatter awards an extra spin."}]},
  {"name": "Masked Mayhem", "slug": "masked-mayhem", "pg": true, "rtp": "96.29%", "rtp_reduced": "94.31%", "volatility": "Medium", "max_win": "10,231x", "bonus_buy": false, "tagline": "Luchadores, ready?? FIGHT!", "thumbnail_url": "images/push_gaming/masked-mayhem.jpg", "hero_url": "images/push_gaming/masked-mayhem_hero.jpg", "features": [{"title": "JACKPOT SYMBOLS", "description": "The Jackpot Symbols can only land during the Free Spins Feature. The Jackpot Symbols are collected by the Win Zone. Mini Jackpot - x10 Minor Jackpot - x50 Major Jackpot - x250 Mega Jackpot - x1,000 Grand Jackpot - x2,500 The Jackpots are only paid out when enough symbols have been collected towards the Jackpot UI."}, {"title": "BASE GAME", "description": "The Win Zone is an overlay that can appear in any size ranging from 2x2 to 5x5. If any Instant Prizes land in the Win Zone, they will be paid out. Instant Prizes range in value: x0.2, x0.5, x1, x2, x3, x5, x10, x20 x50, x100, x250, x500, x1000."}, {"title": "BONUS SYMBOL", "description": "When 3 or more Bonus Symbols land, the Free Spins Feature will be triggered. 3 Bonus Symbols trigger 6 Free Spins 4 Bonus Symbols trigger 8 Free Spins 5 Bonus Symbols trigger 10 Free Spins"}, {"title": "FREE SPINS FEATURE - PROGRESSION", "description": "Starting on level 1, progress through 4 unique levels by collecting Bonus Symbols. Level 1 - 2x2 Win Zone Level 2 - 3x3 Win Zone, 2x Multiplier + 4 Free Spins Level 3 - 4x4 Win Zone, 3x Multiplier + 3 Free Spins Level 4 - 5x5 Win Zone, 5x Multiplier + 2 Free Spins"}, {"title": "FREE SPINS FEATURE - WIN ZONE", "description": "The Win Zone is persistent during the Free Spins and starts as a stationary 2x2 until any Bonus Symbols land, which it will move towards. Instant Prize Symbols and Jackpot Symbols that land in the Win Zone are collected. The Win Zone also collects any new Instant Prizes or Jackpot Symbols it passes through or lands on. The Instant Prize values available during Free Spins are: x1, x2, x3, x5, x10, x20 x50, x100, x250, x500, x1000"}]},
  {"name": "10 Cash Bisons", "slug": "10-cash-bisons", "pg": true, "rtp": "96.29%", "rtp_reduced": "94.37%", "volatility": "Medium", "max_win": "5168x", "bonus_buy": false, "tagline": "Return to the Great Plains in 10 Cash Bisons!", "thumbnail_url": "images/push_gaming/10-cash-bisons.jpg", "hero_url": "images/push_gaming/10-cash-bisons_hero.jpg", "features": [{"title": "PUSH-UP", "description": "Push-Up mode provides an option to increase the initial grid size in the Base Game. Playing with Push-Up modes, awards the higher wins and enhanced chance of entering the Bonus. 5x4 reel set = 2.5x of the Base Bet. RTP 96.29% 5x5 reel set = 5x of the Base Bet. RTP 96.29% When the Free Spins Feature is triggered, the active rows from the Base Game will be transferred into the Bonus Round."}, {"title": "BISON CASH COLLECT", "description": "The Collector Symbol only appears on reels 1 and 5. The Collector Symbol collects any visible Instant Prize values from Regular Bison Symbols."}, {"title": "JACKPOT BISON SYMBOLS", "description": "The Collector Symbol will also collect any visible Jackpot Bison Symbols, awarding the respective Jackpot value. There are 4 types of Jackpot Bison Symbols, and their values are: Mega - x2000 Instant Win; Major - x250 Instant Win; Minor - x50 Instant Win; Mini - x15 Instant Win."}, {"title": "BISON SYMBOLS", "description": "Landing 4 or more Bison Symbols anywhere on the reels will award an Instant Prize Win. The size of the Instant Prize Win is relative to the number of Bison Symbols that have landed on the reels: 10 Bison Symbols - x1000 Instant Win; 9 Bison Symbols - x500 Instant Win; 8 Bison Symbols - x100 Instant Win; 7 Bison Symbols - x25 Instant Win; 6 Bison Symbols - x10 Instant Win; 5 Bison Symbols - x5 Instant Win; 4 Bison Symbols - x2 Instant Win."}, {"title": "PROGRESSIVE BONUS GAME - TRIGGER", "description": "When 3 or more Scatter Symbols land anywhere, the Free Spins Feature is triggered. Landing 3 Scatter Symbols will award 8 Free Spins. Landing 4 Scatter Symbols will award 10 Free Spins. Landing 5 Scatter Symbols will award 12 Free Spins."}, {"title": "PROGRESSIVE BONUS GAME - FREE SPINS", "description": "During the Free Spins Feature, the Scatter Symbols that have landed on the reels fill up to the Locked row meter. Each Locked row meter requires 4 Scatter Symbol collections. Each unlocked row will award extra Free Spins. The first unlocked row awards 3 extra Free Spins; The second and third unlocked rows award 2 extra Free Spins; The fourth unlocked row awards 1 extra Free Spin."}]},
  {"name": "Fire Pig Push Ways", "slug": "fire-pig-push-ways", "pg": true, "rtp": "96.27%", "rtp_reduced": "94.37%", "volatility": "Medium", "max_win": "4,941x", "bonus_buy": false, "tagline": "Turn up the heat and get ready to celebrate in Fire Pig Push Ways!", "thumbnail_url": "images/push_gaming/fire-pig-push-ways.jpg", "hero_url": "images/push_gaming/fire-pig-push-ways_hero.jpg", "features": [{"title": "FREE SPINS FEATURE", "description": "During Free Spins, a Progression Meter tracks the Fire Pig Multiplier. Each Fire Pig collected adds one increment, and every 4 increments increases the multiplier and awards extra spins. Hot Zones can appear in Free Spins, with two stacks starting on reels 2 and 5."}, {"title": "FIRE PIG SYMBOLS", "description": "Fire Pig Symbols may land on reels 1 and 6. Cash Symbols and Jackpot Symbols may land on reels 2-5. If these land simultaneously, the Fire Pig will collect the Instant Prizes attached. The Fire Pig may appear with a multiplier, multiplying the collected amount."}, {"title": "CASH SYMBOLS & JACKPOT SYMBOLS", "description": "The Instant Prizes are attached to Cash Symbols, the Jackpot Symbols have values attached, and the values available are as follows: 1x, 2x, 5x, 10x, 25x, and 100x. The Jackpot values available are: Mini (x10) Minor (x25) Major (x100) Mega (x500) Grand (x2,000)"}, {"title": "HOT ZONES", "description": "Hot Zones are stacks of 4 that can land anywhere on the reels where no Hot Zone is present. As symbols spin beneath them, those in the Hot Zones split into two, increasing the number of winning ways."}, {"title": "BONUS SYMBOLS", "description": "Landing 3 or more Bonus Symbols triggers the Free Spins Feature. The more Bonus Symbols you land, the more free spins you receive and the higher the starting Fire Pig Symbol Multiplier. 3–5 Bonus Symbols: 10–12 spins, x1 multiplier 6–7 Bonus Symbols: 12–13 spins, x2 multiplier 8–9 Bonus Symbols: 13–14 spins, x3 multiplier 10–11 Bonus Symbols: 14–15 spins, x5 multiplier 12 Bonus Symbols: 15 spins, x10 multiplier"}]},
  {"name": "Power Paws", "slug": "power-paws", "pg": true, "rtp": "96.25%", "rtp_reduced": "94.32%", "volatility": "Medium", "max_win": "6500x", "bonus_buy": false, "tagline": "Assemble a feline superteam on the hunt for heroic wins!", "thumbnail_url": "images/push_gaming/power-paws.jpg", "hero_url": "images/push_gaming/power-paws_hero.jpg", "features": [{"title": "MULTIPLIER INCREASER SYMBOL", "description": "Increases total win multiplier by the symbol's value. Remains on the grid after activation."}, {"title": "PROGRESSION METER", "description": "Tracks round progress. Winning Symbols fill the meter across 4 levels, each unlocking a feature when no clusters or features remain. Resets after each spin."}, {"title": "METER CHARGER SYMBOL", "description": "Appears at levels 0–3. Adds +5 points to the Progression Meter. Leaves a random Paying Symbol behind."}, {"title": "RANDOM FEATURE", "description": "Triggers at level 0 when no winning clusters are present. Adds 5–10 Wild Symbols randomly to the grid."}, {"title": "POWER MYSTERIES FEATURE", "description": "Adds 5–10 Mystery Symbols randomly. Mystery Symbols reveal Paying or Wild Symbols."}, {"title": "POWER COLOSSALS FEATURE", "description": "Adds 1–2 Colossal Mystery Symbols (sizes: 2x2, 3x3, or 4x4). Reveals Paying or Wild Symbols."}, {"title": "POWER NUDGE FEATURE", "description": "A 2x2 Colossal Nudging Mystery Symbol appears at the top. Starts with a x1 win multiplier, increasing by +1 with each nudge. Respins occur while the symbol is on the grid. Symbol nudges down 1 row per spin. Each spin reveals a new prize: - Mid/High Paying Symbols - Wild Symbols - Colossal Instant Prize Symbols"}, {"title": "POWER WILDS FEATURE", "description": "Adds 5–10 Wild Symbols randomly to the grid."}, {"title": "INSTANT PRIZES", "description": "Revealable from the Colossal Symbol. Values: x10, x25, x50, x100, x250, x500, x1000. Minimum prize value scales with Colossal Symbol size."}, {"title": "EXPANDER SYMBOL", "description": "Increases Colossal Symbol size by +1x1. Remains on the grid after activation."}]},
  {"name": "Fish 'n' Nudge Big Catch", "slug": "fish-n-nudge-big-catch", "pg": true, "rtp": "96.46%", "rtp_reduced": "94.27%", "volatility": "Low", "max_win": "3094x", "bonus_buy": false, "tagline": "Return to the high seas and reel in Big Wins with Fish 'n' Nudge Big Catch!", "thumbnail_url": "images/push_gaming/fish-n-nudge-big-catch.jpg", "hero_url": "images/push_gaming/fish-n-nudge-big-catch_hero.jpg", "features": [{"title": "BOAT SYMBOL", "description": "In the Free Spins Feature, the Boat Symbol acts as a special symbol to add and lock Net Symbols."}, {"title": "FISH SYMBOL", "description": "The Instant Prize value attached to the Fish Symbol is awarded when the Fish Symbol lands in a Net Symbol. During the Base Game, matching a minimum 3 of a kind consecutively from the leftmost reel will award line wins."}, {"title": "NET SYMBOL", "description": "The Net Symbol is an overlay symbol that lands on a reel in a vertical stack of four, nudging down one space on every spin. Landing Fish Symbols in a Net pays instantly."}, {"title": "FISHERMAN SYMBOL", "description": "The Fisherman Symbol is both a Wild Symbol and a Collector Symbol. Land the Fisherman Symbol inside a Net to collect all visible Instant Prizes."}, {"title": "FREE SPINS", "description": "Land 3 or more Bonus Symbols to trigger the Free Spins Feature. Free Spins begin with a Multiplier Meter and Lock Meter above each reel, and Net Symbols locked in place. Spins are unlimited and continue until no Net Symbols remain on the reels. Catch Fish Symbols for big wins, and land special symbols to enhance Free Spins."}, {"title": "BOOST SYMBOL", "description": "The Boost Symbol is only available during the Free Spins Feature. The Boost Symbol increases the reel multiplier in the Multiplier Meter above the reel by 1 step."}]},
  {"name": "Fish 'n' Nudge", "slug": "fish-n-nudge", "pg": true, "rtp": "96.40%", "rtp_reduced": "94.38%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Reel in Big Wins with Fish 'n' Nudge!", "thumbnail_url": "images/push_gaming/fish-n-nudge.jpg", "hero_url": "images/push_gaming/fish-n-nudge_hero.jpg", "features": [{"title": "FREE SPINS", "description": "Land 3 or more Bonus Symbols to trigger the Free Spins Feature. Start with unlimited Free Spins, a multiplier counter, and Net Symbols on the reels. Each respin increases the multiplier by +1. Free Spins continue until there are no Net Symbols remaining on the reels."}, {"title": "NET SYMBOL", "description": "The Net Symbol is an overlay symbol that lands on a reel in a vertical stack of four, nudging down one space on every spin. Landing Fish Symbols in a Net pays instantly."}, {"title": "FISHERMAN SYMBOL", "description": "The Fisherman Symbol is both a Wild Symbol and a Collector Symbol. Land the Fisherman Symbol inside a Net to collect all visible Instant Prizes."}]},
  {"name": "Iron Phoenix", "slug": "iron-phoenix", "pg": true, "rtp": "96.24%", "rtp_reduced": "94.01%", "volatility": "Low", "max_win": "12,242.10x", "bonus_buy": false, "tagline": "Rise from the ashes and claim your fortune!", "thumbnail_url": "images/push_gaming/iron-phoenix.jpg", "hero_url": "images/push_gaming/iron-phoenix_hero.jpg", "features": [{"title": "FREE SPINS", "description": "The behavior of the 3 Phoenix reels is exactly the same as the base game, except that only 1 Phoenix symbol on the Freespin reels is required to award the associated Phoenix reel. Any inactive Phoenix reels continue spinning slowly during the main base game reel spin."}, {"title": "BASE GAME", "description": "Any combination of three or more matching symbols will award a win, provided they appear anywhere on adjacent reels, starting from the leftmost reel. An additional wide single reel (Phoenix reel) is situated above the base reels."}, {"title": "PHOENIX REEL", "description": "Cash Values, Jackpots and Scatters are available as Prizes on the Phoenix Reel. Phoenix Symbols can land on reels 2, 3 and 4. When three Phoenix Symbols land, the Phoenix reel will award the prize that is displayed."}, {"title": "FREE SPINS TRIGGER", "description": "Free Games is awarded by landing 3 or more Scatters anywhere in the reels. Scatters and Phoenix Symbols cannot land on the same reel at the same time. When Free Spins are awarded, the single Phoenix reel becomes 3 adjacent Phoenix reels."}]},
  {"name": "Fang City", "slug": "fang-city", "pg": true, "rtp": "96.33%", "rtp_reduced": "94.37%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "The night is alive with mystery and fortune!", "thumbnail_url": "images/push_gaming/fang-city.jpg", "hero_url": "images/push_gaming/fang-city_hero.jpg", "features": [{"title": "PERSISTENT MULTIPLIER", "description": "During the Free Spins Feature, when a Multiplier Symbol lands with a win, the Multiplier is collected towards the Multiplier UI, where the Multiplier will be persistent. It will be inactive during rounds when there are no new Multipliers, but when a Multiplier is collected it will be added again and multiply any wins."}, {"title": "INSTANT PRIZES", "description": "When 7 Moon Symbols land anywhere on the reels, the Instant Prizes attached are awarded. Possible Instant Prize values include: x1, x2, x5, x10, x25, x50, x100, x250, x500 & x1000"}, {"title": "MYSTERY REVEAL FEATURE", "description": "When 7 Moon Symbols of any kind land (Instant Prizes & Mystery Moon Symbol), and at least one of them is a Mystery Moon Symbol, the Mystery Reveal Feature is triggered. The Mystery Moon Symbol can reveal any of the following: Collector Symbol Converter Symbol Moon Multiplier Symbol High Value Symbol Max Win Symbol"}, {"title": "FREE SPINS FEATURE", "description": "When 3 or more Bonus Symbols land, the corresponding Free Spins Feature will be triggered: 3 Bonus Symbols - 8 Free Spins with a starting multiplier of x1 4 Bonus Symbols - 8 Free Spins with a starting multiplier of x2 5 Bonus Symbols - 8 Free Spins with a starting multiplier of x5 6 Bonus Symbols - 8 Free Spins with a starting multiplier of x10"}]},
  {"name": "Henry The Ape", "slug": "henry-ape", "pg": true, "rtp": "96.44%", "rtp_reduced": "94.40%", "volatility": "High", "max_win": "61499.9x", "bonus_buy": false, "tagline": "Drop Fat Stacks with the King of the Mic!", "thumbnail_url": "images/push_gaming/henry-ape.jpg", "hero_url": "images/push_gaming/henry-ape_hero.jpg", "features": [{"title": "PROGRESSIVE FREE SPINS", "description": "During the feature, a Bonus Meter is placed above the reels. On all reels, the Super High Symbol can land or nudge with a Gold Disk, which will be collected into the Bonus Meter. For every 4 Gold Disks collected, additional Free Spins will be awarded, and a symbol will transform into the Super High Symbol across all reels."}, {"title": "SUPER HIGH SYMBOLS", "description": "Super High Symbols can land in nudging stacks on reels 2, 3, 4 and 5, paying 2 of a kind. Any visible Super High Symbols on Nudging Reels will continue to nudge until they have exited the reel."}, {"title": "DROP THE WIN", "description": "The Drop the Win Feature has a chance to activate at the end of a non-winning spin during the Base Game. When triggered, Super High Symbols or Wild Symbols can be added to the reels, completing a winning combination."}, {"title": "REWIND", "description": "The Rewind Feature has a chance to activate after a non-winning spin in the Base Game, re-spinning the reels to form a winning combination."}, {"title": "FAT STACKS", "description": "During the Base Game and Free Spins, 1 to 2 stacks of the Super High Paying Symbol can be randomly added to reels 2, 3, 4 or 5 on a non-winning spin. During Free Spins, stacks of the Super High Paying Symbol have a chance to land with Gold Disks."}, {"title": "MULTIPLIER WILDS", "description": "Wilds in a winning combination have a chance to reveal a multiplier. Multiplier values are additive (5x + 3x = 8x win multiplier) Max revealed multiplier: 10x In Free Spins, Wilds always punch out a multiplier."}, {"title": "FREE SPINS TRIGGER", "description": "3 or more bonus symbols trigger free spins. 4-6 scatters starts player at higher level in Free Spins 6 scatters unlocks all progression"}]},
  {"name": "Regal Knights", "slug": "regal-knights", "pg": true, "rtp": "96.22%", "rtp_reduced": "94.25%", "volatility": "Low", "max_win": "4,897.8x", "bonus_buy": true, "tagline": "Journey back to mediaeval times for the tournament of the century!", "thumbnail_url": "images/push_gaming/regal-knights.jpg", "hero_url": "images/push_gaming/regal-knights_hero.jpg", "features": [{"title": "BONUS BUY", "description": "The Free Spins Feature can be purchased. The following option is available: Random Scatters."}, {"title": "MYSTERY SYMBOLS", "description": "Mystery Symbols may land anywhere on the reels during the Base Game and Free Spins. Mystery Symbols will reveal all of the same symbol from the following possibilities: Wild Symbols Paying Symbols Golden Mystery Symbol"}, {"title": "GOLDEN MYSTERY SYMBOL", "description": "When the Mystery Symbol reveals a Golden Mystery Symbol, the Golden Feature is triggered and 1 Respin is awarded. Each position containing a Golden Mystery Symbol will spin through different prizes: Instant Prize Symbols Multiplier Symbols Scatter Symbols Collector Symbols"}, {"title": "SCATTER SYMBOL", "description": "The Scatter Symbol can land on any reel. Landing 3 or more Scatter Symbols will trigger the Free Spins Feature: 3 Scatters award 8 Free Spins. 4 Scatters award 8 Free Spins - Free Spins Feature triggers with 1 Low Symbol converted to Mystery Stack Symbol. 5 Scatters award 8 Free Spins - Free Spins Feature triggers with 2 Low Symbols converted to Mystery Stack Symbol."}, {"title": "PROGRESSIVE FREE SPINS FEATURE", "description": "During Free Spins, when a Scatter Symbol lands on any of the reels or in the Golden Feature, it will be collected on the Low Symbols meter next to the reels. When 4 Scatters are collected towards a Low Symbol, that Low Symbol will be converted into Mystery Symbols on the reels for the following spins."}, {"title": "PUSH BET", "description": "Activating Push Bet will increase your Base Bet by 50% for a higher chance of triggering the Free Spins Feature."}]},
  {"name": "Olympus Unleashed", "slug": "olympus-unleashed", "pg": true, "rtp": "96.32%", "rtp_reduced": "94.36%", "volatility": "Low", "max_win": "2,340x", "bonus_buy": false, "tagline": "Harness the power of the gods in Olympus Unleashed!", "thumbnail_url": "images/push_gaming/olympus-unleashed.jpg", "hero_url": "images/push_gaming/olympus-unleashed_hero.jpg", "features": [{"title": "ADDITIONAL ROW FEATURE", "description": "Unleashed Feature only: Adds a row of High Paying Symbols to the bottom of the grid. Up to 3 rows can be added per Unleashed Feature. Grid reverts to 5 rows after the feature ends."}, {"title": "WILD SYMBOL", "description": "Lands with a multiplier of x2, x3, or x5. Multipliers add when multiple Wilds are part of the same win line."}, {"title": "POWER-UP SYMBOL", "description": "Availability: Appears in the Base Game and Unleashed Feature. Function: Spins through Feature Symbols. Base Game Feature Symbols: Expand Surround Upgrade Unleashed Feature Symbols: Expand Surround Upgrade Shift Additional Row"}, {"title": "EXPAND FEATURE", "description": "Base Game: Converts all symbols on the reel into matching High Paying Symbols, except Wilds. On the first reel, it can override Wild Symbols. Unleashed Feature: Fills all unoccupied positions on the reel with High Paying Symbols."}, {"title": "SURROUND FEATURE", "description": "Base Game: Converts surrounding symbols into matching High Paying Symbols, except Wilds. Unleashed Feature: Fills surrounding unoccupied positions with High Paying Symbols."}, {"title": "UPGRADE FEATURE", "description": "Base Game: Up to 2 upgrades per High Paying Symbol. Enhances the payout value of the active High Paying Symbol. Unleashed Feature: Up to 2 upgrades per High Paying Symbol. Each payout level is visually distinct, with values in the in-game paytable."}, {"title": "UNLEASHED FEATURE", "description": "Triggered by either matching five High Paying Symbols or landing the Expand Symbol on the first reel. Mechanics: Locked High Paying and Wild Symbols transfer to the feature. Spins land one of the following: High Paying, Wild, Power-Up, or Blank Symbols. Non-blank symbols lock in place. Spin Counter: Starts with 3 spins. Resets for each non-blank symbol that lands. Ends when no spins remain."}, {"title": "SHIFT FEATURE", "description": "Unleashed Feature only: Moves all reel symbols one position to the left."}]},
  {"name": "3 Magic Pots", "slug": "3-magic-pots", "pg": true, "rtp": "96.23%", "rtp_reduced": "94.25%", "volatility": "Medium", "max_win": "5,992.10x", "bonus_buy": false, "tagline": "Embark on a whimsical journey through the realm of 3 Magic Pots!", "thumbnail_url": "images/push_gaming/3-magic-pots.jpg", "hero_url": "images/push_gaming/3-magic-pots_hero.jpg", "features": [{"title": "MAX MAGIC FREE SPINS", "description": "Activating all 3 Magic Pots from the base game will award 10 Free Spins and trigger all features at once."}, {"title": "INSTANT PRIZES", "description": "Instant Prizes can appear on all reels. When a Collector Symbol lands on reels 1 and/or 6, all visible Instant Prize Symbols will be collected and awarded to the player."}, {"title": "FIXED JACKPOTS", "description": "3 Magic Pots features four fixed jackpots: the Mini, Minor, Major and Mega jackpot. The Collector Symbol will collect any visible Jackpot symbols on the reels and award to the player the matching jackpot prize."}, {"title": "STICKY PRIZES", "description": "Instant Prize Symbols & Jackpot Symbols can become sticky after a spin, remaining on the reels until collected. A Collector Symbol on reels 1 and 6 will collect the symbol and award the prize value to the player."}, {"title": "MAGIC REELS FREE SPINS", "description": "Activating the Blue Magic Pot triggers the Magic Reels Free Spins Feature. This feature expands the reels to 6 rows, increasing the ways to win to 46,656."}, {"title": "ENCHANTED COLLECTOR FREE SPINS", "description": "Activating the Pink Magic Pot will trigger the Enchanted Collector Free Spins Feature. During this feature, when a Collector Symbol lands on reels 1 and/or 6, it will nudge down one row for each Free Spin."}, {"title": "CASH FRENZY FREE SPINS", "description": "Activating the Green Magic Pot will trigger Cash Frenzy Free Spins. Extra Instant Prizes will be added to all reels."}, {"title": "COMBO FREE SPINS", "description": "There are seven combinations of Free Spins in 3 Magic Pots. During an ongoing Free Spins Feature, other Magic Pots and their respective Features can be activated simultaneously."}]},
  {"name": "10 Pharaohs", "slug": "10-pharaohs", "pg": true, "rtp": "96.46%", "rtp_reduced": "96.31%", "volatility": "Medium", "max_win": "10,663.6x", "bonus_buy": false, "tagline": "Brave the Pharaoh's tomb and unveil big wins!", "thumbnail_url": "images/push_gaming/10-pharaohs.jpg", "hero_url": "images/push_gaming/10-pharaohs_hero.jpg", "features": [{"title": "PUSH-UP", "description": "Expand the base game grid for a better chance at bigger wins and Bonus entry: 5x4 grid = 2.5x Base Bet, RTP 96.46% 5x5 grid = 5x Base Bet, RTP 96.31% Unlocked rows in the Base Game carry over into the Bonus."}, {"title": "PHARAOH SYMBOLS", "description": "Land 4 or more Pharaoh Symbols anywhere on the reels to trigger an Instant Prize Win, with payouts scaling based on the number of Pharaoh Symbols: 10 Pharaohs = x1000 9 Pharaohs = x500 8 Pharaohs = x100 7 Pharaohs = x25 6 Pharaohs = x10 5 Pharaohs = x5 4 Pharaohs = x2"}, {"title": "JACKPOT PHARAOH SYMBOLS", "description": "When a Jackpot Pharaoh lands with at least 3 other Pharaoh Symbols, it triggers a Jackpot Instant Win on top of the regular Pharaoh win. There are 4 types: Mega = x5000 Major = x500 Minor = x50 Mini = x15"}, {"title": "PROGRESSIVE BONUS GAME", "description": "Land 3 or more Scarab Symbols to activate Free Spins: 3 Scarabs = 8 Free Spins 4 Scarabs = 10 Free Spins 5 Scarabs = 12 Free Spins Collect Scarab Symbols during Free Spins to unlock rows and earn extra spins."}]},
  {"name": "Candy Blast", "slug": "candy-blast", "pg": true, "rtp": "96.34%", "rtp_reduced": "94.30%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Join the sweetest slot adventure in Candy Blast!", "thumbnail_url": "images/push_gaming/candy-blast.jpg", "hero_url": "images/push_gaming/candy-blast_hero.jpg", "features": [{"title": "MULTIPLIER STRIKE OUT FEATURE", "description": "After 3 consecutive winning cascades during the Free Spins Feature, the Multiplier Strike Out Feature will be triggered and the last active Total Multiplier step will be deleted from the Total Multiplier list."}, {"title": "TOTAL MULTIPLIER METER", "description": "The Total Multiplier is always present throughout the game and applies to each winning combination. For every winning cascade, the Total Multiplier doubles in value. The Total Multiplier resets after a non-winning cascade."}, {"title": "MULTIPLIER BOOST SYMBOL", "description": "The Multiplier Boost Symbol is a non-paying symbol that is available during the Base Game and Free Spins Feature. The Multiplier Boost Symbol will activate with any winning combination."}, {"title": "EXTRA LIFE SYMBOL", "description": "The Extra Life Symbol is a non-paying symbol. The Extra Life Symbol is available during the Base Game and the Free Spins Feature. The Extra Life Symbol only activates on a non-winning cascade."}, {"title": "FREE SPINS FEATURE", "description": "The initial Total Multiplier and initial Free Spins value depends on the amount of Rainbow Cupcake Symbols that triggered the Feature: 3 = 8 Free Spins and the initial Total Multiplier x2 4 = 10 Free Spins and the initial Total Multiplier x4 5 = 12 Free Spins and the initial Total Multiplier x8 Each Rainbow Cupcake Symbol that lands during the Free Spins Feature will award 1 additional Free Spin before the next Free Spin starts."}]},
  {"name": "Big Bite Push Ways", "slug": "big-bite-push-ways", "pg": true, "rtp": "96.27%", "rtp_reduced": "94.37%", "volatility": "Low", "max_win": "4,941x", "bonus_buy": false, "tagline": "Brave the icy depths and chase massive wins with Big Bite Push Ways!", "thumbnail_url": "images/push_gaming/big-bite-push-ways.jpg", "hero_url": "images/push_gaming/big-bite-push-ways_hero.jpg", "features": [{"title": "FREE SPINS FEATURE", "description": "Progression Meter boosts the Orca Multiplier by landing Orcas (4 needed per level). Reaching a new level grants extra spins and higher multipliers. Hot Zones start on reels 2 and 5."}, {"title": "ORCA SYMBOLS", "description": "Orca Symbols can only land on reels 1 and 6, collecting prizes from Fish and Jackpot Symbols that can only land on reels 2-5. Orca Symbols can also have multipliers of up to x10 to boost collected rewards."}, {"title": "FISH SYMBOLS & JACKPOT SYMBOLS", "description": "Fish Symbols can offer Instant Prizes with the following values: 1x, 2x, 5x, 10x, 25x, 100x of your bet. Jackpot Symbols include the following values: Mini: x10 Minor: x25 Major: x100 Mega: x500 Grand: x2,000"}, {"title": "HOT ZONES", "description": "Hot Zones can land anywhere on the reels and come in stacks of 4. While symbols spin under a Hot Zone, they become split. Symbols that land inside the Hot Zones will remain split into 2 symbols in their current position. Any symbols that cascade and land in a Hot Zone will become split. They nudge down on each spin. Split symbols that cascade outside of a Hot Zone remain split."}, {"title": "BONUS SYMBOLS", "description": "Land 3+ Bonus Symbols to trigger Free Spins: 3 Symbols: 10 spins, x1 multiplier 4–5 Symbols: Up to 12 spins, x1 multiplier 6–7 Symbols: Up to 13 spins, x2 multiplier 8–9 Symbols: Up to 14 spins, x3 multiplier 10–12 Symbols: Up to 15 spins, x5–x10 multiplier"}]},
  {"name": "Big Bite", "slug": "big-bite", "pg": true, "rtp": "96.33%", "rtp_reduced": "94.24%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Brave the ice and reel in a huge win with Big Bite!", "thumbnail_url": "images/push_gaming/big-bite.jpg", "hero_url": "images/push_gaming/big-bite_hero.jpg", "features": [{"title": "FREE SPINS FEATURE", "description": "During Free Spins Feature, a 5x6 grid will appear with the same rules for Orcas, Fish and Jackpot as during the Base Game. A Progression Meter for the Orcas’ Multiplier will be visible. Four increments are needed to reach a new level, and each landed Orca will award one increment. When a new level is reached, additional Free Spins are awarded as well as the Multiplier."}, {"title": "ORCA SYMBOLS", "description": "Orca Symbols may land on reels 1 and 5. Fish Symbols and Jackpot Symbols may land on reels 2-4. If these land simultaneously, the Orca will collect the Instant Prizes attached."}, {"title": "FISH SYMBOLS & JACKPOT SYMBOLS", "description": "The Fish Symbols come attached with Instant Prizes, ranging in value from 1x to 1000x. The Jackpot values available are: Mini (x15) Minor (x75) Major (x350) Mega (x1,500) Grand (x10,000)"}, {"title": "BONUS SYMBOLS", "description": "When 3 or more Bonus Symbols land, the Free Spins Feature is triggered: 3 Bonus Symbols will trigger 10 Free Spins in the Free Spins Feature 4 Bonus Symbols will trigger 10 Free Spins in the Free Spins Feature with a starting x3 Multiplier 5 Bonus Symbols will trigger 10 Free Spins in the Free Spins Feature with a starting x10 Multiplier"}]},
  {"name": "Power Vault", "slug": "power-vault", "pg": true, "rtp": "96.41%", "rtp_reduced": "94.38%", "volatility": "Low", "max_win": "4112x", "bonus_buy": false, "tagline": "Venture into the Power Vault and hunt for riches!", "thumbnail_url": "images/push_gaming/power-vault.jpg", "hero_url": "images/push_gaming/power-vault_hero.jpg", "features": [{"title": "ENHANCER REELS", "description": "Above each reel, Addition or Multiplier Symbols can land: Addition Symbols: Add to values below. Multiplier Symbols: Multiply values below."}, {"title": "INSTANT PRIZES", "description": "Coins and Jackpots appear on reels 1 and 3, offering exciting rewards: Coin values: x1, x2, x3, x5, x8, x10, x12, x20, x25 Jackpot values: Mini (x15), Minor (x50), Mega (x100), Grand (x1000)"}, {"title": "COLLECTION & BONUS GAME TRIGGER", "description": "Landing Instant Prizes on reel 1 or 3 and a Vault Collector on reel 2 collects the prizes. Bonus Game Trigger: Land Instant Prizes on reels 1 & 3 and a Vault Collector on reel 2—carrying current prizes into the Bonus Game!"}, {"title": "VAULT FEATURE", "description": "Coins landing on the reels are collected into a vault above. As coins stack, the vault grows, creating anticipation. The vault can randomly burst, adding extra prizes and triggering the Bonus Game!"}, {"title": "BONUS GAME", "description": "Starts with 3 spins shown on the Diamond UI: Dynamic Spins: Landing Instant Prizes resets the spins to 3. Sticky Collector: Begins with a Collector on reel 2; up to 3 Collectors can appear. Game Over: Ends after 3 empty spins."}]},
  {"name": "Mystery of the Nile", "slug": "mystery-nile", "pg": true, "rtp": "96.35%", "rtp_reduced": "94.36%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Deep beneath the Nile, a new Mystery emerges...", "thumbnail_url": "images/push_gaming/mystery-nile.jpg", "hero_url": "images/push_gaming/mystery-nile_hero.jpg", "features": [{"title": "FREE SPINS - PROGRESSION", "description": "During Free Spins, new Mystery Stacks nudge to fill their reel and stay for the feature's duration. The Pharaoh Reveal Feature remains active, revealing Mystery Stacks when 3+ are present. Each time Expanding Mystery Symbols match, their multiplier doubles, up to a max of x128 per symbol."}, {"title": "NUDGE AND REVEAL", "description": "During the Base Game, when 3 or more Mystery Stack Symbols land anywhere on the Reels, the Nudge and Reveal Feature will be triggered. When the Mystery Stack Symbols reveal a normal paying symbol, all Mystery Stack positions will convert to the selected symbol and wins are paid! This feature guarantees a payout! Any wins from this feature are paid out across all 10 lines."}, {"title": "GOLDEN PHARAOH SYMBOL", "description": "This feature is triggered when the Mystery Stack Symbols reveal the Golden Pharaoh Symbol. All Mystery Stack positions will reveal different prizes. The following prizes can land: Instant Prize Symbols Bonus Symbols (Base Game) Multiplier Symbols Collector Symbols"}, {"title": "PHARAOH REVEAL FEATURE", "description": "During the Base Game, this feature can be triggered on any spin, and guarantees a minimum of 2 or more Mystery Stack Symbols. Mystery Stack Symbols will land golden + trigger the Pharaoh Reveal Feature in the positions they land. If 3 or more Mystery Stack Symbols land, the Nudge and Reveal will be triggered after the Pharaoh Reveal Feature is evaluated."}, {"title": "FREE SPINS - TRIGGER", "description": "This feature is triggered when 3 or more Bonus Symbols land: 3 Bonus Symbols - awards 8 Free Spins 4 Bonus Symbols - awards 10 Free Spins 5 Bonus Symbols - awards 12 Free Spins"}, {"title": "BONUS POPUP", "description": "This feature appears on the Free Spins Trigger and reveals the number of triggering Free Spins, awarding up to 3 Mystery Stacks upon entering Free Spins. Any Mystery Stacks awarded from the Bonus Popup will be placed on the initial spin of the Free Spins Feature."}]},
  {"name": "10 Flaming Bisons", "slug": "10-flaming-bisons", "pg": true, "rtp": "96.46%", "rtp_reduced": "96.31%", "volatility": "Medium", "max_win": "5,602x", "bonus_buy": false, "tagline": "Experience the untamed wilds of the Great Plains in 10 Flaming Bisons!", "thumbnail_url": "images/push_gaming/10-flaming-bisons.jpg", "hero_url": "images/push_gaming/10-flaming-bisons_hero.jpg", "features": [{"title": "PUSH-UP", "description": "Expand the base game grid for a better chance at bigger wins and Bonus entry: 5x4 grid = 2.5x Base Bet, RTP 96.46% 5x5 grid = 5x Base Bet, RTP 96.31% Unlocked rows in the Base Game carry over into the Bonus."}, {"title": "BISON SYMBOLS", "description": "Land 4 or more Bison Symbols anywhere on the reels to trigger an Instant Prize Win, with payouts scaling based on the number of Bison Symbols: 10 Bisons = x1000 9 Bisons = x500 8 Bisons = x100 7 Bisons = x25 6 Bisons = x10 5 Bisons = x5 4 Bisons = x2"}, {"title": "JACKPOT BISON SYMBOLS", "description": "When a Jackpot Bison lands with at least 3 other Bison Symbols, it triggers a Jackpot Instant Win on top of the regular Bison win. There are 4 types: Mega = x5000 Major = x500 Minor = x50 Mini = x15"}, {"title": "PROGRESSIVE BONUS GAME", "description": "Land 3 or more Totem Symbols to activate Free Spins: 3 Totems = 8 Free Spins 4 Totems = 10 Free Spins 5 Totems = 12 Free Spins Collect Totem Symbols during Free Spins to unlock rows and earn extra spins."}]},
  {"name": "Jaguar Drop", "slug": "jaguar-drop", "pg": true, "rtp": "96.31%", "rtp_reduced": "94.39%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Brave the deepest jungles in search of ancient riches in Jaguar Drop!", "thumbnail_url": "images/push_gaming/jaguar-drop.jpg", "hero_url": "images/push_gaming/jaguar-drop_hero.jpg", "features": [{"title": "COLLECTOR SYMBOL", "description": "When a Collector symbol lands on the reels it totals the values of all complete rows and assigns itself that value. It then becomes a Coin symbol and is no longer a Collector."}, {"title": "CLUSTER WINS", "description": "During the Base Game a series of Low, Mid, High and Wild Symbols can land. Landing six or more Matching Symbols anywhere on the reels will award the following prizes. These symbols are then destroyed, bringing cascades of new symbols."}, {"title": "SECOND CHANCE FEATURE", "description": "If there are 4 or 5 coins on the reels during base game, the game offers an opportunity to enter the ‘Second Chance’ feature. All non-coin symbols are removed from the reels and a random amount of coins land, offering the chance to get into the Free Drops feature."}, {"title": "FREE DROP FEATURE", "description": "When 6 or more Coin Symbols land within the Base Game, the Free Drop Feature is triggered. Coins triggering the Free Drop feature remain on the reels throughout the feature. The Free Drop feature begins with six lives, each drop depletes one life. When a row is complete with coins, the life meter resets to six."}, {"title": "HEART SYMBOL", "description": "During Free Drops landing a Heart symbol awards the player an Extra Life. If the Free Drop count reaches zero and an Extra Life is active the player's Free Drop count resets to 6, the Extra Life is then removed."}, {"title": "BOOST SYMBOL", "description": "When a boost symbol lands, a 3x3 grid appears .Each segment of the grid displays a multiplier. When a coin lands in this area, the coin value is multiplied. Multiplier amounts are increased if Boost Symbol grids are overlapping."}]},
  {"name": "Cats of Olympuss", "slug": "cats-olympuss", "pg": true, "rtp": "96.31%", "rtp_reduced": "94.26%", "volatility": "Medium", "max_win": "13,194x", "bonus_buy": true, "tagline": "Join the pantheon of divine felines in Cats of Olympuss!", "thumbnail_url": "images/push_gaming/cats-olympuss.jpg", "hero_url": "images/push_gaming/cats-olympuss_hero.jpg", "features": [{"title": "PUSH BET", "description": "Activating Push Bet mode will increase your base bet by 20% for a higher chance of landing the Shield Symbol and triggering the Free Spins Feature."}, {"title": "COIN & WILD SYMBOLS", "description": "During the Base and Free Spins Feature, Coins Symbols may land. Coin wins are paid left to right. Landing at least a three of a kind combination of Coins and Wild symbols will award a win."}, {"title": "PROGRESSIVE FREE SPINS FEATURE", "description": "When you get 3 or more Scatter Symbols on reels 2, 3, or 4, you trigger the Free Spins Feature: 3 Scatters give you 2 card picks: a Spins Picker Card and an Upgrade Card 4 Scatters give you 3 card picks: a Spins Picker Card and 2 Upgrade Cards 5 Scatters give you 4 card picks: a Spins Picker Card and 3 Upgrade Cards 6 Scatters give you 5 card picks: a Spins Picker Card and 4 Upgrade Cards"}, {"title": "BONUS BUY", "description": "Purchase the Free Spins Feature using Bonus Buy. The following options are available: 3 Bonus Symbols 4 Bonus Symbols Random Bonus Symbols"}]},
  {"name": "Big Bam-book", "slug": "big-bam-book", "pg": true, "rtp": "96.31%", "rtp_reduced": "94.42%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Discover the secrets of Big Bam-Book!", "thumbnail_url": "images/push_gaming/big-bam-book.jpg", "hero_url": "images/push_gaming/big-bam-book_hero.jpg", "features": [{"title": "PROGRESSIVE FREE SPINS FEATURE", "description": "During the Free Spins Feature, Scatter Symbols can land anywhere on the reels and are collected into the multiplier meter. The Free Spins Feature multiplier only applies to any Instant Prize wins."}, {"title": "MYSTERY REVEAL", "description": "During the Base Game and Free Spins Feature, Mystery Bamboo Symbols can either reveal a paying symbol or Golden Mystery Bamboo Symbols."}, {"title": "INSTANT PRIZE WINS", "description": "During the Base Game, the Golden Mystery Bamboo Symbols can reveal Scatter Symbols. During the Golden Mystery Bamboo Feature, each Golden Mystery Bamboo reel can land a Scatter Symbol once per reel."}]},
  {"name": "The Grand Show", "slug": "grand-show", "pg": true, "rtp": "96.28%", "rtp_reduced": "94.35%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Round up, round up, welcome to The Grand Show!", "thumbnail_url": "images/push_gaming/grand-show.jpg", "hero_url": "images/push_gaming/grand-show_hero.jpg", "features": [{"title": "PUSH BET", "description": "Increases Base Bet by 40% (Free Spins Push Bet) or 60% (Bonus Push Bet) for higher chances of triggering the features."}, {"title": "BASE GAME", "description": "Land the Collector Symbol to collect Instant Prizes and Jackpot Symbols. Land the Super High Paying Symbol to maximise win value."}, {"title": "INSTANT PRIZES & JACKPOT SYMBOLS", "description": "Instant Prizes are now presented as Cash Values ranging from: x1, x2, x5, x10, x25, x100, x250, x500, x1000. Jackpots available: Mini (x10), Minor (x100), Major (x500), Mega (x1000), Grand (x10,000)."}, {"title": "COLLECTOR SYMBOL", "description": "The Collector Symbol can only land on reel 1 and will collect anything that lands on the same reel or consecutively after it. Reels will turn red when collecting consecutively."}, {"title": "FREE SPINS FEATURE", "description": "Triggered by landing 3+ Scatter Symbols, the Free Spins Feature uses the same reel UI, but with higher chances of Instant Prizes, Jackpots and triggering the Bonus Feature."}, {"title": "BONUS FEATURE", "description": "Triggered by Top Hat Symbols landing on reels 1 and 5. Carries over any simultaneous prizes, enhancing potential winnings. The Bonus Feature is set on a 5x8 reel set with a multiplier UI on the rightmost reel. The spinning bottom row pushes prizes upward; awarding a Max Win if all four reels are filled."}, {"title": "BONUS FEATURE - SYMBOLS", "description": "During the Bonus Feature, the following symbols are available on reels 1-4: Instant Prizes Jackpot Symbols Nudge Up The following symbols are available on reel 5: Nudge All Boost Re-trigger"}]},
  {"name": "Retro Sweets", "slug": "retro-sweets", "pg": true, "rtp": "96.49%", "rtp_reduced": "94.42%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Get ready for a sugar rush in Retro Sweets!", "thumbnail_url": "images/push_gaming/retro-sweets.jpg", "hero_url": "images/push_gaming/retro-sweets_hero.jpg", "features": [{"title": "PUSH BET", "description": "Guarantee landing 1 or 2 Wild Candy Symbols on each base spin by increasing your bet by 2x and 4x respectively, increasing the possibility for cluster wins and the chances of triggering the Bonus Game!"}, {"title": "WILD CANDY SYMBOL", "description": "This Scatter Symbol substitutes for all other symbols, except for Special Symbols. When three or more land anywhere on the reels, the Free Spins Feature is triggered. Every Wild Candy Symbol has a multiplier associated with it, with its initial value starting at 1x. Every time the Wild Candy Symbol takes part in 1 or more cluster wins, its multiplier value increases by one."}, {"title": "WILD MULTIPLIER SYMBOL", "description": "This Symbol has a multiplier value attached to it, either 1x, 2x, 3x or 5x. The Wild Multiplier Symbol distributes its multiplier value to all Wild Candy Symbols in view. After distribution, this symbol transforms into a random Instant Prize Symbol."}, {"title": "INSTANT PRIZES & MULTIPLIER SYMBOL", "description": "Instant Prizes are bet multipliers that can range in value from 1x to 1000x. When these Symbols form a cluster of 5 or more it will pay out a win. When an Instant Prize Multiplier Symbol lands it will multiply all Instant Prize Symbols in view by its value, then transform into an Instant Prize Symbol of random value. This symbol can land with a value of 2x, 5x or 10x."}, {"title": "SWEET COLLECTOR SYMBOL", "description": "This Symbol picks a Paying Symbol at random and attracts all Symbols of the same kind, creating a cluster win. The Sweet Collector Symbol can attract Wild Candy Symbols, Paying Symbols and Instant Prizes!"}, {"title": "FREE SPINS FEATURE", "description": "This Feature is triggered when 3 or more Wild Candy Symbols land anywhere on reels. The Free Spins Feature can begin with various rewards relating to the amount of Wild Candy Symbols Landed."}]},
  {"name": "DJ Cat", "slug": "dj-cat", "pg": true, "rtp": "96.32%", "rtp_reduced": "94.03%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Light up the dancefloor with DJ Cat!", "thumbnail_url": "images/push_gaming/dj-cat.jpg", "hero_url": "images/push_gaming/dj-cat_hero.jpg", "features": [{"title": "PUSH UP", "description": "Activating Push Up will open up more active rows for a greater chance of landing more VIP Symbol’s and greater wins."}, {"title": "CD SYMBOLS", "description": "CD Symbols are Bet Multipliers. Landing CD’s on any active row will award a Bet Multiplier. Landing numbered CD’s next to each other from left to right will award the win as a two or more digit prize."}, {"title": "VIP SYMBOLS", "description": "VIP Symbols can land on any reel. Any VIP Symbols that land on an active reel will contribute one increment to that row’s Multiplier Meter. Double VIP Symbols increase the Multiplier Meter by two increments."}, {"title": "ARROW SYMBOLS", "description": "Arrow Symbols can land on any reel. Each active Arrow Symbol increases the reel height by one. Landing multiple arrow symbols will increase the reel height by the amount landed."}, {"title": "MULTIPLIER METER", "description": "The Multiplier Meter awards multipliers of up to 100x. Each of the five Multiplier Meters have higher value multipliers further up the reels. Unlock higher value meters using the Arrow Symbols for the best chance of winning big!"}]},
  {"name": "DJ Fox", "slug": "dj-fox", "pg": true, "rtp": "96.28%", "rtp_reduced": "94.31%", "volatility": null, "max_win": "10,000x", "bonus_buy": false, "tagline": "Get hype and hit the dancefloor with DJ Fox!", "thumbnail_url": "images/push_gaming/dj-fox.jpg", "hero_url": "images/push_gaming/dj-fox_hero.jpg", "features": [{"title": "PUSH-UP", "description": "Activating Push Up will open up more active rows for a greater chance of landing more VIP Symbol’s and greater wins!"}, {"title": "VINYL SYMBOL", "description": "Vinyl Symbols are Bet Multipliers, the number on the Vinyl corresponds to the Bet Multiplier awarded. Landing consecutive Vinyls left to right on the same reel will award the win as a combined two or three digit prize. Combine Vinyl Symbols to create big wins!"}, {"title": "VIP SYMBOL", "description": "Landing a VIP Symbol on an active reel will increase the reel height by one. Once the reel has expanded, all visible VIP Symbols will be collected into the Multiplier Meter and the reels will respin. Chaining VIP Symbols together can open up the entire reel, leaving room for even bigger wins!"}, {"title": "MULTIPLIER METER", "description": "The Multiplier Meter awards multipliers of up to 20x. Landing three VIP Symbols will take the Meter to 2x, with every new VIP Symbol increasing the multiplier value. The Multiplier Meter can lock randomly, retaining your progression for the next paid spin. Landing a Vinyl Symbol with a high level on the Meter can make for massive wins!"}]},
  {"name": "Samurai's Katana", "slug": "samurais-katana", "pg": true, "rtp": "96.40%", "rtp_reduced": "94.31%", "volatility": "High", "max_win": "10,000x", "bonus_buy": false, "tagline": "Will you cut down the competition and take home a big bounty?", "thumbnail_url": "images/push_gaming/samurais-katana.jpg", "hero_url": "images/push_gaming/samurais-katana_hero.jpg", "features": [{"title": "FREE SPINS FEATURE", "description": "Free Spins start with Wild-filled reels 2 and 4, and a corresponding starting multiplier. Wild Stacks nudge down, filling the Multiplier Level meter, unlocking levels with values of x1, x3, x5, x10, x25, and x100. The Multiplier applies to all wins during the feature."}, {"title": "WILD SYMBOLS & WILD STACKS", "description": "Wild Symbols substitute for all other paying symbols except for Scatter Symbols, Gamble Scatter Symbols and Instant Prize Symbols. Land 3 for a 1x multiplier, 4 for 5x and 5 for 30x. Wild Stacks are a stack of 4 Wild Symbols. Both Wild Symbols and Wild Stacks can land on reels 2, 3, and 4 in the Base Game. In Free Spins, both can land on any reel."}, {"title": "INSTANT PRIZE SYMBOLS", "description": "Instant Prizes are bet multipliers which land on reels 1 and 5. On reel 1, they trigger when Wilds also land on reels 2 and 3. On reel 5, they trigger when Wilds land on reels 3 and 4. Instant Prizes pay once per appearance and range from 1x to 1000x."}, {"title": "NUDGING WILDS FEATURE", "description": "Triggered by a Wild Stack landing on a reels, the Nudging Wilds Feature shifts the Wild Stack position incrementally until all Wild Symbols are removed, while the remaining reels spin as normal."}, {"title": "SCATTER & GAMBLE SCATTER SYMBOLS", "description": "Scatter Symbols can only land on reel 1, while the Gamble Scatter can only land on reel 5. Gamble Scatters trigger a feature that spins through various Free Spin prizes with the potential to land any of the following multipliers: x1, x3, x5, x10, x25."}, {"title": "GAMBLE FEATURE", "description": "After triggering Free Spins, players can gamble their prize for a chance at higher rewards. The Gamble Wheel presents segments with options greater than the initial prize, No Prize Segments, and Wild Stacks Segments. If the Gamble Wheel lands on a Base Game Wild Stack, play will resume in the Base Game with the addition of 1-3 guaranteed Wild Stacks present on the reels, depending on the prize landed."}]},
  {"name": "Shamrock Saints", "slug": "shamrock-saints", "pg": true, "rtp": "96.30%", "rtp_reduced": "94.46%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Meet the nasty sprites who've taken over the tavern!", "thumbnail_url": "images/push_gaming/shamrock-saints.jpg", "hero_url": "images/push_gaming/shamrock-saints_hero.jpg", "features": [{"title": "SHAMROCK MODE", "description": "Shamrock Mode is activated either when the Golden Pot bursts open or by picking an Instant Shamrock Mode Prize during the Base Game Chest Feature. The Shamrock Mode initiates a Free Spins Feature with the added bonus of a 10x starting Total Multiplier and Mystery Stacks nudged up in three positions. When the Feature ends, a new Golden Pot appears above the reels, with a random initial level of 2, 3, or 4 and partly filled by 40-60%."}, {"title": "TOKENS", "description": "Any Tokens landed in the base game will be collected into the Golden Pot. Once the Golden Pot has reached its maximum level of five, any more tokens that land have the possibility to explode the Golden Pot and trigger Shamrock Mode."}, {"title": "NUDGE & REVEAL FEATURE", "description": "Mystery Symbols land anywhere on the reels in stacks of 4, both in the base and bonus games. Landing Mystery Symbols activates the Nudge & Reveal Feature, causing the Mystery Symbols to open and reveal either Paying Symbols, Wild Symbols or Golden Leprechaun Symbols."}, {"title": "LEPRECHAUN REVEAL FEATURE", "description": "This feature is triggered when a Mystery Symbol reveals a Golden Leprechaun Symbol. All Leprechaun Reveal Symbols will spin through various prizes, including Instant Prize Symbols, Multiplier Symbols, Collector Symbols, Chest Symbols, Scatter Symbols."}, {"title": "CHEST FEATURE", "description": "This feature is triggered when landing a chest symbol on reel 3, or during the Leprechaun Reveal Feature. Five Hidden Chest Prizes are presented to pick from, choosing one will reveal all of the potential prizes and award the one selected."}, {"title": "FREE SPINS FEATURE", "description": "When the Free Spins feature begins, reels 2 and 4 are filled with Mystery Symbols. For every spin, the Mystery Symbols will nudge down by one position, causing the Total Multiplier to increase by 1. The Total Multiplier applies to all wins at the end of each spin. Free Spins continue until the last Mystery Symbol is nudged off the reels."}]},
  {"name": "Hearts Highway", "slug": "hearts-highway", "pg": true, "rtp": "96.44%", "rtp_reduced": "94.49%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Will you hit big on Hearts Highway?", "thumbnail_url": "images/push_gaming/hearts-highway.jpg", "hero_url": "images/push_gaming/hearts-highway_hero.jpg", "features": [{"title": "PUSH BET", "description": "Activating Push Bet mode will increase your base bet by 20% for a higher chance of landing the Shield Symbol and triggering the Free Spins Feature."}, {"title": "INSTANT WINS", "description": "Heart Symbols may land during the Base and Free Spins Feature, with 4 or more awarding various prizes, ranging from 2x bet amount to 10000x."}, {"title": "SLOT MACHINE FEATURE", "description": "Landing a Slot Machine Symbol either Reel 1 or 5 will trigger the Slot Machine Feature. The Slot Machine Feature can award up to an additional 3 Hearts. Landing Symbols on both Reel 1 and 5 will trigger the Heart Slot Feature, which can award up to an additional 10 Hearts."}, {"title": "PROGRESSIVE FREE SPINS FEATURE", "description": "This feature is triggered when 3 or more Scatter Symbols land anywhere. During Free Spins, landing Golden Hearts unlocks the meter above the associated reel. When 3 Golden Hearts are unlocked the reel below is filled with Hearts for the remainder of the feature and an additional Free Spin is awarded."}]},
  {"name": "Boss Bear", "slug": "boss-bear", "pg": true, "rtp": "96.47%", "rtp_reduced": "94.35%", "volatility": "High", "max_win": "25,000x", "bonus_buy": false, "tagline": "Delve into the animal underground to meet the baddest panda in town!", "thumbnail_url": "images/push_gaming/boss-bear.jpg", "hero_url": "images/push_gaming/boss-bear_hero.jpg", "features": [{"title": "GAMBLE FEATURE", "description": "Even with the lowest amount of Scatter Symbols landed, the Gamble Feature can convert to a higher potential amount of Free Spins and Low Symbols converted than landing all 5 Scatter Symbols available in the Base Game!"}, {"title": "PANDA SYMBOL", "description": "A Super High Paying symbol. It is the only symbol in Boss Bear to pay on 2 of a kind, both in the base game and free spins feature!"}, {"title": "REVEAL SYMBOL", "description": "These \"green waves'' enter the reels in stacks and reveal random paying symbols. It is possible to land the Panda Symbol, resulting in big wins!"}, {"title": "GOLDEN REVEAL SYMBOL", "description": "Landing three stacks of Reveal Symbols next to one another transforms them to Golden Reveal Symbols, automatically triggering the Coin Feature! Any more stacks that land on the reel at the same time will be Golden Reveal Symbols."}, {"title": "NUDGE SYMBOL", "description": "Landing a Nudge Symbol will cover the length of the reel it landed on with Golden Reveal Symbols, including where the Nudge Symbol appeared. Each Golden Reveal Symbol will spin through and reveal random paying symbols."}, {"title": "COIN FEATURE", "description": "Once the Golden Reveal stacks are present on the reels, the Coin Feature will activate. All Golden Reveal symbols on the reel will reveal Coins ranging in value from 1x to 5000x!"}, {"title": "FREE SPINS BONUS GAME", "description": "Landing three or more Scatter Symbols will trigger the Bonus Game. Use Free Spins to land Reveal and Golden Reveal symbols. Landing Scatter Symbols will contribute to a meter that converts a Low Paying Symbol to a Reveal Symbol. Each Low Symbol converted adds a multiplier on any coins landed, progressing to 3x, 5x and 10x for each new Low Symbol converted!"}]},
  {"name": "Goat Getter", "slug": "goat-getter", "pg": true, "rtp": "96.40%", "rtp_reduced": "94.39%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Scale the summit and bring home big wins in Goat Getter!", "thumbnail_url": "images/push_gaming/goat-getter.jpg", "hero_url": "images/push_gaming/goat-getter_hero.jpg", "features": [{"title": "BONUS GAME - GAMBLE FEATURE", "description": "During the Base Game, the Gamble Feature is triggered after the last Bonus Symbol determines the number of Free Spins won. When the Gamble Feature is triggered, the Gamble Wheel is presented with possible Free Spins Prize segments that are better than the one that was won on the Bonus Symbol and segments with No Prize."}, {"title": "BASE GAME - INSTANT PRIZES", "description": "The Coin Pot symbols are symbols that have an Instant Prize value attached to them. Landing 10 or more Coin Pot Symbol will pay the instant prize value."}, {"title": "BASE GAME - COIN DROP FEATURE", "description": "This feature is triggered when 6 or more Coin Pot Symbols land on the screen and no further wins are available. Mystery Boxes fall in from the top, and may reveal either a Coin Pot Symbol, Bonus Symbol or Dud Symbol."}, {"title": "BONUS GAME - FREE SPINS", "description": "The Free Games Feature is triggered by landing 3 or more Bonus Symbols during the Base Game. Landing the Goat Symbol collects all Instant Prizes from any Coin Pots in view and adds an increment to the progression meter. Collect 5 Goat Symbols to reach a new level and gain an additional Free Spin."}]},
  {"name": "Rat King", "slug": "rat-king", "pg": true, "rtp": "96.30%", "rtp_reduced": "94.32%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Get retro with Rat King!", "thumbnail_url": "images/push_gaming/rat-king.jpg", "hero_url": "images/push_gaming/rat-king_hero.jpg", "features": [{"title": "BONUS GAME -  FREE SPINS FEATURE", "description": "During the Free Spins Feature, collecting a Rat King Symbol awards three additional Free Spins. Collecting a Star Symbol will add its multiplier amount to the multiplier counter. At the end of each spin when a multiplier is collected, the total sum of the multiplier counter will apply to the amount won in the current spin."}, {"title": "BASE GAME - COLLECTION BOXES", "description": "The Collection Boxes can be found at the bottom of the grid. When a Star Multiplier Symbol lands in a Collection Box it is collected and added to the multiplier to the right of the grid during that game round."}, {"title": "BASE GAME - STAR SYMBOL", "description": "The Star Symbol has a multiplier value attached to it. When collected, the respective multiplier value will be added to the multiplier counter. Every Star Symbol collected within a game round will accumulate on the multiplier counter and multiply the total win for that game round."}, {"title": "BASE GAME - RAT KING SYMBOL", "description": "The Rat King Symbol is a scatter symbol. Landing a Rat King Symbol in the Collection Box will contribute to the Free Spins metre to the left of the grid. Collecting three or more Rat King Symbols will trigger the Free Spins Feature."}]},
  {"name": "Crystal Catcher", "slug": "crystal-catcher", "pg": true, "rtp": "96.30%", "rtp_reduced": "94.30%", "volatility": "Medium", "max_win": "5,000x", "bonus_buy": false, "tagline": "Get ready to delve deep for big wins in Crystal Catcher!", "thumbnail_url": "images/push_gaming/crystal-catcher.jpg", "hero_url": "images/push_gaming/crystal-catcher_hero.jpg", "features": [{"title": "BONUS GAME - FREE SPINS", "description": "The Bonus Game triggers when the Wild Beetle lands on the reels with a non-paying Bonus Symbol. Once activated, the Free Spins Feature will lower the reels into lava and grant 7 free spins for the chance to win big! Any Wild Beetle Symbols present when the Bonus Game is triggered will move to any Crystal Symbols or Instant Prize Symbols, collecting cluster wins along the way."}, {"title": "BASE GAME - INSTANT PRIZE AND CRYSTAL SYMBOLS", "description": "Six types of base Crystal Symbols can be found on the reels, ranging from 0.20 to 100 Instant Prize value. Wins can only be triggered when a cluster of five or more crystals of the same colour are connected on the reels. The Wild Beetle Symbol can also appear on the reels and will activate its multiplier value when it flies to any special Crystal, Bonus, or Instant Prize Symbols. The Wild Beetle leaves behind a copy of itself each time it jumps, equal to the value of the Wild Beetle before jumping."}, {"title": "BASE GAME - CLUSTER PAYS", "description": "Land five or more Crystal Symbols in a cluster for instant wins! Each colour Crystal Symbol holds a different instant prize value, ranging from the lower value green, blue and purple crystals, to the pink, orange and the highest value red crystal!"}, {"title": "BASE GAME - CRYSTAL CATCHER FEATURE", "description": "When the Wild Beetle Symbol lands on the reel with any Crystal, Bonus or Instant Prize Symbols, the Crystal Catcher Feature Activates. The Wild Beetle Symbol will fly to every Crystal Symbol on the reel, leaving behind a Gold Beetle Symbol with the same multiplier value. Every time the Wild Beetle moves to a new crystal, its multiplier increases by one."}]},
  {"name": "10 Swords", "slug": "10-swords", "pg": true, "rtp": "96.41%", "rtp_reduced": "94.41%", "volatility": "Medium", "max_win": "5,000x", "bonus_buy": true, "tagline": "Prepare yourself for battle! Will you wield the 10 Swords?", "thumbnail_url": "images/push_gaming/10-swords.jpg", "hero_url": "images/push_gaming/10-swords_hero.jpg", "features": [{"title": "FEATURE - ANTE BET", "description": "Use the Ante Bet toggle to increase the chance of landing Shield Scatter Symbols and activating the Free Spins Bonus Game. Ante Bet costs 20% of the base bet and does not contribute to the bet. Ante Bet cannot be used in conjunction with Bonus Buy."}, {"title": "BASE GAME - SWORD SYMBOLS & PROGRESSIVE METER", "description": "The progressive meter will grant instant wins when 4-10 Sword Symbols land on a single spin. Landing Sword Symbols can pay out from the minimum of 2x for 4 swords to 5000x for the max of 10."}, {"title": "BASE GAME - WILD SYMBOLS", "description": "The Eagle Symbol is a Wild Symbol that substitutes for all other symbols bar the Shield and Sword Symbols. Land between 3, 4 or 5 Eagle Symbols in a line for wins of 5x, 15x and 40x respectively."}, {"title": "BASE GAME - SHIELD SYMBOLS & BONUS TRIGGER", "description": "Landing 3 or more Shield Symbols will activate the Free Spins Bonus Game. Landing 3 Shield Symbols awards 8 Free Spins. Landing 4 awards 10 Free Spins and 2 Low Symbols converted to Sword Symbols in the Bonus Game. Landing all 5 awards 12 Free Spins and all 4 Low Symbols converted to Sword Symbols in the Bonus Game."}, {"title": "BONUS GAME - FREE SPINS", "description": "During the Bonus Game, each Free Spin has a chance to land Sword Symbols, contributing to the same Progressive meter from the base game. Landing Shield Symbols in the Bonus Game will contribute to substituting a low symbol for a Sword Symbol. Landing 4 will substitute a Low Symbol, with the chance to land up to 16 Shield Symbols and substitute all 4 Low Symbols for Sword Symbols. Every Low Symbol substituted will increase the chance of landing Sword Symbols and grant +4, +3, +3, and +2 Free Spins respectively."}, {"title": "FEATURE - BONUS BUY", "description": "Use Bonus Buy to purchase automatic entry to the Free Spins Bonus Game with a random amount of Shield Symbols for the cost of 50x base bet. Bonus Buy cannot be used in conjunction with Ante Bet."}]},
  {"name": "Dino P.D.", "slug": "dino-pd", "pg": true, "rtp": "96.38%", "rtp_reduced": "96.50%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": true, "tagline": "Dino P.D. are on patrol searching for big wins!", "thumbnail_url": "images/push_gaming/dino-pd.jpg", "hero_url": "images/push_gaming/dino-pd_hero.jpg", "features": [{"title": "FEATURE - ANTE BET", "description": "Use the Ante Bet toggle to increase the chance of landing two Scatter Symbols and the Gamble Scatter, activating the Free Spins Bonus Game. Ante Bet costs 20% of the base bet and does not contribute to the bet."}, {"title": "BASE GAME - DINO COIN AND WILD SYMBOLS", "description": "Dino P.D. Paying Symbols and Wild Symbols range in value from 0.20x - 250x. It is also possible to land Dino Coins, which range in value from 1x - 1000x and pay when at least 5 Dino Coins of any value are in view. Wild Symbols can appear, substituting for all other Paying Symbols bar the Dino Coin, Scatter and Gamble Scatter symbols."}, {"title": "BASE GAME - SCATTER SYMBOL AND GAMBLE FEATURE", "description": "A Scatter Symbol can only land on reels 1 and 3, with the Gamble Scatter Symbol only able to land on reel 5. When all three land in combination the Gamble Scatter will spin through either Bronze, Silver or Gold Free Spins."}, {"title": "BONUS GAME - FREE SPINS FEATURE", "description": "Land Dino Coin and Dino Coin Collector Symbols. Collector Symbols behave the same as Dino Coin Symbols, with the added function of contributing to the Low Symbol meter. Landing four Dino Coin Collectors will fill a Low Symbol, enhance the overall multiplier and grant more free spins. It is possible to convert four Low Symbols, granting 2x, 3x, 5x and 10x for each new level obtained."}, {"title": "FEATURE - BONUS BUY", "description": "Use Bonus Buy to purchase automatic entry to the Free Spins Bonus Game, with awards ranging from: Random amount of Free Spins and Converted Low Symbols. 8-10 Free Spins, 0-1 Low Symbols converted. 8-10 Free Spins, 2-3 Low Symbols converted. 8-10 Free Spins, 4 Low Symbols converted."}]},
  {"name": "Mystery Mission - To The Moon", "slug": "mystery-mission-moon", "pg": true, "rtp": "96.25%", "rtp_reduced": "94.25%", "volatility": "High", "max_win": "10,000x", "bonus_buy": true, "tagline": "The Mystery Series continues, and this time, we are rocketing to the moon!", "thumbnail_url": "images/push_gaming/mystery-mission-moon.jpg", "hero_url": "images/push_gaming/mystery-mission-moon_hero.jpg", "features": [{"title": "ANTE BET TOGGLE", "description": "Use the Ante Bet toggle to increase your chances of entering the Free Spins Bonus Game! Simply pay to switch on the Ante Bet Toggle and your spins will automatically have a higher chance of activating the Bonus Game. Please note that bet amount and Ante Bet Toggle are independent, paying to unlock Ante Bet will not contribute to your bet amount."}, {"title": "BASE GAME - NUDGE & REVEAL", "description": "In Mystery Mission – To The Moon, you can land Mystery Stacks that will nudge to fill the reel if three or more appear at once. Mystery Stacks will then reveal a random Instant Win Symbol that will fill the entire Mystery Stack. Landing 3 or more Mystery Stacks can make for huge wins!"}, {"title": "BASE GAME - WILD MOON SYMBOL & FREE SPINS", "description": "Landing three or more Moon Symbols will trigger the Free Spins Bonus game! Whereas Mystery Museum had a total of 5 Wild Scatter Symbols that could land at one time, Mystery Mission – To The Moon has 6, meaning you can win up to 14 Free Spins in the Bonus Game!"}, {"title": "BONUS GAME - FREE SPINS", "description": "Landing a Mystery Stack in the Bonus Game will grant you a bonus Free Spin. This retrigger is yet another new feature in the Mystery Series!"}]},
  {"name": "Deadly 5", "slug": "deadly-5", "pg": true, "rtp": "96.39%", "rtp_reduced": "94.35%", "volatility": "Medium", "max_win": "5,000x", "bonus_buy": true, "tagline": "Head back to the American frontier and prepare to face the Deadly 5!", "thumbnail_url": "images/push_gaming/deadly-5.jpg", "hero_url": "images/push_gaming/deadly-5_hero.jpg", "features": [{"title": "SHERIFF’S BONUS FEATURE", "description": "At the beginning of Sheriff's Bonus Feature, the Sheriff Wild Symbol will appear on reel 5 and remain throughout the feature. On the remaining 4 reels, the aim is to match the outlaws to their respective Wanted Posters. If the image at the top of the reel matches with the Wanted Character symbol on the reel below, the Expanding Symbols Feature will be triggered with the potential for huge wins!"}, {"title": "BASE GAME - SHERIFF’S BADGE", "description": "During the Base Game and the Free Spins Feature, the Sheriff’s Badge and Safe Symbols can be found on all reels. Sheriff’s Badge is a Wild Symbol that substitutes for all symbols except the Safe Symbol."}, {"title": "BASE GAME - SAFE SCATTER", "description": "The Safe Symbol is a Scatter Symbol, landing 3-5 Safe Symbols will activate the Sheriff's Bonus Free Game Feature and Instant Wins! 3 Scatters will award 10 Free Spins and 3x Instant Win. 4 Scatters Will Award 15 Free Spins and 10x Instant Win. Landing 5 Scatters will award 20 Free Spins and 50x Instant Win!"}]},
  {"name": "Mad Cars", "slug": "mad-cars", "pg": true, "rtp": "96.39%", "rtp_reduced": "94.44%", "volatility": "High", "max_win": "25,000x", "bonus_buy": true, "tagline": "Start your engines and buckle up, it's time to drive Mad Cars!", "thumbnail_url": "images/push_gaming/mad-cars.jpg", "hero_url": "images/push_gaming/mad-cars_hero.jpg", "features": [{"title": "MAD RACE FEATURE", "description": "Mad Race Feature may be triggered after the last spin of the Mad Bonus Game. All cars start their engines; if the feature triggers all Instant Prize Cars will finish simultaneously and pay out all of their values."}, {"title": "BASE GAME - INSTANT PRIZE CAR SYMBOLS & MULTIPLIERS", "description": "Instant Prize Car Symbols are Bet Multipliers that can go up to 100x and even higher when combined with the Boost Reel! In order to collect an instant prize, the Symbol needs to exceed the top of the reel. After one Instant Prize Car car reaches the top of the reel, all other Instant Prize Car Symbols will spin-off. If multiple cars finish the race at the same time, every Instant Prize that finishes will be collected!"}, {"title": "BOOST REEL", "description": "During the Base Game, Instant Prize Car Symbols and Scatter Symbols can be found on all reels. The Boost Reel provides random boosts that, when aligned with a car on the reel below, will give them a Multiplier to increase the Instant Prize or movement boost to raise their position on the reel."}, {"title": "SCATTER SYMBOLS", "description": "Scatter Symbols behave as regular Instant Prize Car Symbols with a fixed Instant Prize Value of 10x, but cannot be multiplied by the Boost Reel and can only receive movement boosters. Finishing the race with a Scatter Symbol car will trigger the Mad Bonus Feature!"}, {"title": "MAD BONUS FEATURE", "description": "This is triggered once a Scatter Symbol exceeds the top of the reel. This feature begins with seven free spins where all Instant Prize Cars have the opportunity to finish without the others spinning-off. After an Instant Prize Car reaches the top it will be immediately replaced by a new one at the bottom of the reel on the same spin. Every time a car reaches the top of the reel, one extra spin is added to the free spin counter."}]},
  {"name": "10 Santa's Reindeers", "slug": "10-santas-reindeers", "pg": true, "rtp": "96.26%", "rtp_reduced": "94.47%", "volatility": "Medium", "max_win": "5,602.2x", "bonus_buy": false, "tagline": "Join Santa and sleigh the reels in 10 Santa's Reindeers!", "thumbnail_url": "images/push_gaming/10-santas-reindeers.jpg", "hero_url": "images/push_gaming/10-santas-reindeers_hero.jpg", "features": [{"title": "PUSH-UP", "description": "Push-Up mode provides an option to increase the initial grid size in the Base Game. Playing with Push-Up modes, awards the higher wins and enhanced chance of entering the Bonus Game."}, {"title": "REINDEER SYMBOLS", "description": "Landing 4 or more Reindeer Symbols anywhere on the reels will award an Instant Prize Win, relative to the number of Reindeer Symbols landed: 10 = x1000 Instant Win 9 = x500 Instant Win 8 = x100 Instant Win 7 = x25 Instant Win 6 = x10 Instant Win 5 = x5 Instant Win 4 = x2 Instant Win"}, {"title": "JACKPOT REINDEER SYMBOLS", "description": "When a Jackpot Reindeer Symbol lands alongside at least 3 other Reindeers, regardless of whether it is a Jackpot or Standard Reindeer Symbol, the Jackpot Reindeer Symbol Instant Prize Win will be awarded, ranging in value: Mega = x5000 Instant Win Major = x500 Instant Win Minor = x50 Instant Win Mini = x15 Instant Win"}, {"title": "BONUS GAME TRIGGER", "description": "When 3 or more Bell Symbols land anywhere, the Free Spins Feature is triggered: 3 = 8 Free Spins 4 = 10 Free Spins 5 = 12 Free Spins"}, {"title": "PROGRESSIVE BONUS GAME", "description": "During the Free Spins Feature, the Bell Symbols that have landed on the reels fill up to the Locked row meter. Each Locked row meter requires 4 Bell Symbol collections. Each unlocked row will award extra Free Spins: First Row = 3 extra Free Spins Second Row = 2 extra Free Spins Fourth Row = 1 extra Free Spins"}]},
  {"name": "Santa Hopper", "slug": "santa-hopper", "pg": true, "rtp": "96.35%", "rtp_reduced": "94.35%", "volatility": "Medium", "max_win": "10,000x", "bonus_buy": false, "tagline": "Venture to a Christmas wonderland for an experience like no other!", "thumbnail_url": "images/push_gaming/santa-hopper.jpg", "hero_url": "images/push_gaming/santa-hopper_hero.jpg", "features": [{"title": "BUBBLE FEATURE", "description": "The Bubble Symbol appears randomly on the grid with one of the following values: 1, 2, 5, 10, 25, 50, 100 and 500. The Bubble Symbol can land on its own or in stacks up to 5. The symbol or symbols will move up one place on the grid with each spin, either straight up or diagonally. The Bubble Symbol can be applied to the Chimney Symbol, Santa Symbol and Instant Prize Symbol."}, {"title": "WILD SANTA SYMBOL", "description": "The Santa Symbol is a Wild Multiplier Symbol that substitutes for all Symbols except the Chimney Symbols and the Scatter Symbols. The Santa Symbol will land with one of the following multipliers: x1, x2, x3, x4, x5 and x10."}, {"title": "SANTA FEATURE", "description": "When the Santa Symbol jumps to a Chimney Symbol, the multiplier for the Santa Symbol increases by +1. The Santa Symbol will collect all Chimney Symbols in view before a new cascade begins. Each jump will leave a Golden Present Symbol with the respective multiplier it had before jumping."}, {"title": "INSTANT PRIZE SYMBOL", "description": "Instant Prize Symbols are bet multipliers that can land in the Base Game and Free Spins Feature. When an Instant Prize Symbol lands in a minimum cluster of 5 Instant Prize Symbols it will pay out. When a Wild Symbol is a part of an Instant Prize Symbols win, the total win from the Instant Prize Symbols is multiplied by the Wild multiplier value. Instant Prize Symbols range in value: x1, x2, x5, x10, x25, x50, x100, x250, x500, x1000."}, {"title": "JINGLE DROP FEATURE", "description": "During the Base Game, the Jingle Drop Feature is randomly triggered after any non-winning collapse or cascade. When triggered, 1 to 2 Mystic Symbols are added randomly to the game grid. Mystic Symbols sizes are: 2x2 = 4 symbols, 3x3 = 9 symbols and 4x4 = 16 symbols. Mystic Symbols can reveal a grid of either Paying Symbols, Instant Prize Symbols, Santa Symbol or the Scatter Symbol."}, {"title": "FREE SPINS FEATURE", "description": "When 3 or more Scatter Symbols land anywhere on a grid, Free Games Feature will be triggered. Any Santa Symbol, Golden Present Symbols, Chimney Symbol and Instant Prizes from the Base Game stay in place and carry over to the Free Games Feature."}, {"title": "FREE SPINS CLUSTER LINK", "description": "During the Feature each empty symbol position will spin through to land on one of the following symbols: Chimney Symbol; Instant Prize Symbol; Extra Spin Symbol; Blank Symbol."}]},
  {"name": "Santa's Vault", "slug": "santas-vault", "pg": true, "rtp": "96.37%", "rtp_reduced": "94.38%", "volatility": "Low", "max_win": "8118x", "bonus_buy": false, "tagline": "Embark on a festive journey to Santa's Vault!", "thumbnail_url": "images/push_gaming/santas-vault.jpg", "hero_url": "images/push_gaming/santas-vault_hero.jpg", "features": [{"title": "ENHANCER REELS", "description": "Above each reel, Addition or Multiplier Symbols can land: Addition Symbols: Add to values below. Multiplier Symbols: Multiply values below."}, {"title": "INSTANT PRIZES", "description": "Coins and Jackpots appear on reels 1 and 3, offering exciting rewards: Coin values: x1, x2, x3, x5, x8, x10, x12, x20, x25 Jackpot values: Mini (x15), Minor (x50), Mega (x100), Grand (x1000)"}, {"title": "COLLECTION & BONUS GAME TRIGGER", "description": "Landing Instant Prizes on reel 1 or 3 and a Vault Collector on reel 2 collects the prizes. Bonus Game Trigger: Land Instant Prizes on reels 1 & 3 and a Vault Collector on reel 2—carrying current prizes into the Bonus Game!"}, {"title": "VAULT FEATURE", "description": "Coins landing on the reels are collected into a vault above. As coins stack, the vault grows, creating anticipation. The vault can randomly burst, adding extra prizes and triggering the Bonus Game!"}, {"title": "BONUS GAME", "description": "Starts with 3 spins shown on the Diamond UI: Dynamic Spins: Landing Instant Prizes resets the spins to 3. Sticky Collector: Begins with a Collector on reel 2; up to 3 Collectors can appear. Game Over: Ends after 3 empty spins."}]},
  {"name": "Red Hot Multipliers", "slug": "red-hot-multipliers", "pg": true, "rtp": "96.22%", "rtp_reduced": "94.23%", "volatility": "Low", "max_win": "2500x", "bonus_buy": false, "tagline": "Turn up the heat with Red Hot Multipliers", "thumbnail_url": "images/push_gaming/red-hot-multipliers.jpg", "hero_url": "images/push_gaming/red-hot-multipliers_hero.jpg", "features": [{"title": "HOT MULTIPLIERS", "description": "On each spin, up to 3 random symbols can receive a Hot Multiplier. A winning combination with a multiplied symbol will apply the displayed multiplier to the symbol win. The value of the multipliers can be: 2x, 3x, 5x, 10x or 20x"}]},
  {"name": "The Great Banker", "slug": "great-banker", "pg": true, "rtp": "96.31%", "rtp_reduced": "94.21%", "volatility": "Medium", "max_win": "10317.6x", "bonus_buy": false, "tagline": "Everyone's Favourite Financier is back and bigger than ever in The Great Banker!", "thumbnail_url": "images/push_gaming/great-banker.jpg", "hero_url": "images/push_gaming/great-banker_hero.jpg", "features": [{"title": "SAFE SYMBOL", "description": "The Safe Symbol is a non-paying symbol that only activates after the Free Spins Feature round ends. The Safe Symbol, when activated, awards a full retrigger of the Free Spins Feature."}, {"title": "BANKER SYMBOL", "description": "The Banker Symbol is a Collector symbol that only appears on reel 5 during the Base Game. When a Banker Symbol lands alongside one or more Coin Symbols, it will collect the Coin Symbol values."}, {"title": "WHEEL FEATURE", "description": "The Wheel is present above the reels during the Base Game. When a Coin Symbol lands in the Base Game, it will be collected into the Wheel. Collecting any Coin Symbol provides a chance to activate the Wheel Feature. The Wheel Prizes include: Jackpot prizes - Mini, Minor, Major, Mega; Jackpot prizes x2 - Mini, Minor, Major, Mega; 3 Scatter Free Spins; 4 Scatter Free Spins; 5 Scatter Free Spins; The Great Banker Free Spins; Fat Money Free Spins."}, {"title": "FREE SPINS FEATURE", "description": "The Free Spins Feature starts with 3 spins, and each time a new symbol lands on the unlocked rows, the spin count resets to 3. During the Free Spins Feature, only Coin, Jackpot, Banker, The Great Banker, Multiplier, The Great Multiplier, Safe, and Blank Symbols can spin through."}, {"title": "MULTIPLIER SYMBOLS", "description": "Multiplier Symbols multiply Bet Multiplier values from the existing Coin Symbols, Jackpot Symbols, and Bankers. Multiplier values are: x2, x3, x4. Once the Multiplier Symbol is applied, the Symbol deactivates and spins off on the next spin. The Multiplier Symbol multiplies Bet Multiplier values on unlocked rows in the surrounding 3x3 area. The Great Multiplier Symbol multiplies all Bet Multiplier values from unlocked rows."}]},
  {"name": "Bait 'n' Bank", "slug": "bait-n-bank", "pg": true, "rtp": "96.37%", "rtp_reduced": "94.38%", "volatility": "Low", "max_win": "8118x", "bonus_buy": false, "tagline": "Cast your line for a catch full of prizes in Bait 'n' Bank!", "thumbnail_url": "images/push_gaming/bait-n-bank.jpg", "hero_url": "images/push_gaming/bait-n-bank_hero.jpg", "features": [{"title": "ENHANCER REELS", "description": "Above each reel, Addition or Multiplier Symbols can land: Addition Symbols: Add to values below. Multiplier Symbols: Multiply values below."}, {"title": "INSTANT PRIZES", "description": "Coins and Jackpots appear on reels 1 and 3, offering exciting rewards: Coin values: x1, x2, x3, x5, x8, x10, x12, x20, x25 Jackpot values: Mini (x15), Minor (x50), Mega (x100), Grand (x500)"}, {"title": "COLLECTION & BONUS GAME TRIGGER", "description": "Landing Instant Prizes on reel 1 or 3 and a Chest Collector on reel 2 collects the prizes. Bonus Game Trigger: Land Instant Prizes on reels 1 & 3 and a Chest Collector on reel 2—carrying current prizes into the Bonus Game!"}, {"title": "CHEST FEATURE", "description": "Coins landing on the reels are collected into a chest above. As coins stack, the chest grows, creating anticipation. The chest can randomly burst, adding extra prizes and triggering the Bonus Game!"}, {"title": "BONUS GAME", "description": "Starts with 3 spins shown on the Diamond UI: Dynamic Spins: Landing Instant Prizes resets the spins to 3. Sticky Collector: Begins with a Collector on reel 2; up to 3 Collectors can appear. Game Over: Ends after 3 empty spins."}]},
  {"name": "Diamond Supernova 5", "slug": "diamond-supernova-5", "pg": true, "rtp": "96.34%", "rtp_reduced": "94.27%", "volatility": "Low", "max_win": "1040x", "bonus_buy": false, "tagline": "Shoot for the stars in Diamond Supernova 5!", "thumbnail_url": "images/push_gaming/diamond-supernova-5.jpg", "hero_url": "images/push_gaming/diamond-supernova-5_hero.jpg", "features": [{"title": "MIXED SCATTER PRIZE", "description": "Landing any combination of Scatter Symbols on reels 1, 3 and 5 will award a Mixed Scatter prize of x5."}, {"title": "SCATTER SYMBOLS", "description": "Scatter Symbols can appear exclusively on reels 1, 3 and 5. There are 3 types of Scatter Symbols, each with a respective prize. Landing 3 matching Scatter Symbols grants the corresponding prize value. 3 Blue Scatters award x25 the bet 3 Red Scatters award x100 the bet 3 Gold Scatters award x1000 the bet"}]},
  {"name": "Diamond Supernova 20", "slug": "diamond-supernova-20", "pg": true, "rtp": "96.33%", "rtp_reduced": "94.22%", "volatility": "Low", "max_win": "1016.2x", "bonus_buy": false, "tagline": "Shoot for the stars in Diamond Supernova 20!", "thumbnail_url": "images/push_gaming/diamond-supernova-20.jpg", "hero_url": "images/push_gaming/diamond-supernova-20_hero.jpg", "features": [{"title": "MIXED SCATTER PRIZE", "description": "Landing any combination of Scatter Symbols on reels 1, 3 and 5 will award a Mixed Scatter prize of x5."}, {"title": "SCATTER SYMBOLS", "description": "Scatter Symbols can appear exclusively on reels 1, 3 and 5. There are 3 types of Scatter Symbols, each with a respective prize. Landing 3 matching Scatter Symbols grants the corresponding prize value. 3 Blue Scatters award x25 the bet 3 Red Scatters award x100 the bet 3 Gold Scatters award x1000 the bet"}]},
  {"name": "Diamond Supernova 40", "slug": "diamond-supernova-40", "pg": true, "rtp": "96.32%", "rtp_reduced": "94.23%", "volatility": "Low", "max_win": "1014.2x", "bonus_buy": false, "tagline": "Shoot for the stars in Diamond Supernova 40!", "thumbnail_url": "images/push_gaming/diamond-supernova-40.jpg", "hero_url": "images/push_gaming/diamond-supernova-40_hero.jpg", "features": [{"title": "MIXED SCATTER PRIZE", "description": "Landing any combination of Scatter Symbols on reels 1, 3 and 5 will award a Mixed Scatter prize of x5."}, {"title": "SCATTER SYMBOLS", "description": "Scatter Symbols can appear exclusively on reels 1, 3 and 5. There are 3 types of Scatter Symbols, each with a respective prize. Landing 3 matching Scatter Symbols grants the corresponding prize value. 3 Blue Scatters award x25 the bet 3 Red Scatters award x100 the bet 3 Gold Scatters award x1000 the bet"}]},
  {"name": "Diamond Supernova 100", "slug": "diamond-supernova-100", "pg": true, "rtp": "96.33%", "rtp_reduced": "94.29%", "volatility": "Low", "max_win": "1006.3x", "bonus_buy": false, "tagline": "Shoot for the stars in Diamond Supernova 100!", "thumbnail_url": "images/push_gaming/diamond-supernova-100.jpg", "hero_url": "images/push_gaming/diamond-supernova-100_hero.jpg", "features": [{"title": "MIXED SCATTER PRIZE", "description": "Landing any combination of Scatter Symbols on reels 1, 3 and 5 will award a Mixed Scatter prize of x5."}, {"title": "SCATTER SYMBOLS", "description": "Scatter Symbols can appear exclusively on reels 1, 3 and 5. There are 3 types of Scatter Symbols, each with a respective prize. Landing 3 matching Scatter Symbols grants the corresponding prize value. 3 Blue Scatters award x25 the bet 3 Red Scatters award x100 the bet 3 Gold Scatters award x1000 the bet"}]},
  {"name": "Vegas Vault", "slug": "vegas-vault", "pg": true, "rtp": "96.36%", "rtp_reduced": "94.33%", "volatility": "Low", "max_win": "8,976x", "bonus_buy": false, "tagline": "Step into the neon-lit heart of the strip for a classic slot experience with a modern twist... it's Vegas Vault!", "thumbnail_url": "images/push_gaming/vegas-vault.jpg", "hero_url": "images/push_gaming/vegas-vault_hero.jpg", "features": [{"title": "BONUS GAME - FULL FRID", "description": "Filling all 15 positions during the Bonus Game awards the Grand Jackpot. This is in addition to the locked values on the reels. A counter next to the Grand Jackpot will show how many positions are required to achieve the Grand Jackpot."}, {"title": "SECOND CHANCE FEATURE", "description": "The Second Chance Feature occurs randomly. When triggered, a symbol is nudged (up or down) onto the Win line to create the Bonus Game trigger condition."}, {"title": "BONUS GAME", "description": "The Bonus Game is triggered when an Instant Prize Symbol or Jackpot Symbol lands on reels 1 and 3 of the middle row, and the Vault Symbol lands on reel 2 of the middle row. The Bonus Game Feature starts with 3 spins. The spins reset back to 3 when an Instant Prize Symbol, Jackpot Symbol, or Key Symbol lands. During the Bonus Game, Instant Prize and Jackpot symbols lock in place. If a Multiplier lands on an active Enhancer Reel, the Multiplier is added to one or more reels in the column directly beneath. If a Split Symbol lands on an active Enhancer Reel, one or more reels in the column directly beneath are split into 2 positions."}, {"title": "BONUS GAME - ENHANCES APPLIED AND WIN AWARDED", "description": "The Bonus Game ends when no new symbols have landed for 3 spins in a row on the main reels. Multipliers are then activated, and all the Instant Prize and Jackpot Values are collected into the Vault. A Multiplier is applied to both values on a split reel. This rule also applies to a Split Vault. The winnings are then paid out"}]},
  {"name": "Diamonds 4 The Win", "slug": "diamonds-4-win", "pg": true, "rtp": "96.38%", "rtp_reduced": "94.39%", "volatility": "Low", "max_win": "823x", "bonus_buy": false, "tagline": "Unlock the vault in Diamonds 4 The Win, a classic 3-reel slot with 5 paylines", "thumbnail_url": "images/push_gaming/diamonds-4-win.jpg", "hero_url": "images/push_gaming/diamonds-4-win_hero.jpg", "features": [{"title": "SUPER DIAMOND RESPIN", "description": "Upon activating the Vault, a Diamond Wild will be added to the central reel position. The Diamond added to the central reel position will have a random multiplier assigned. Any win created from the central Diamond will be multiplied by the multiplier value. The value of the multiplier can be: x2, x3, x5 or x10."}, {"title": "DIAMOND RESPIN", "description": "If a Diamond Wild lands in the central reel position, the Diamond Respins Feature will activate. Any Wild Diamond that lands during this feature will continue the Diamond Respins Feature. On a spin with no landed Diamonds, the Feature ends and the total win is evaluated."}]},

  // ── Pragmatic Play ────────────────────────────────────────────────────────
  // Popular (★)
  { pp: true, name: "Sweet Bonanza 2500", slug: "sweet-bonanza-2500", rtp: "96.52%", tagline: "Tumbling sweets, massive multipliers and wins up to 2,500× — the sweetest slot in the universe gets even bigger.", featured: true },
  { pp: true, name: "Sugar Rush Super Scatter", slug: "sugar-rush-super-scatter", rtp: "96.58%", tagline: "A candy-coated chaos of tumbling symbols and escalating multipliers. Sugar Rush Super Scatter turns every spin into a confectionery explosion.", featured: true },
  { pp: true, name: "Gates of Hades", slug: "gates-of-hades", rtp: "96.52%", tagline: "The gates of the underworld swing open — face Hades himself on a grid packed with multiplier wilds and divine fury.", featured: true },
  { pp: true, name: "Big Bass Bonanza 1000", slug: "big-bass-bonanza-1000", rtp: "96.51%", tagline: "The legendary fishing slot returns — cast your line for money fish worth up to 1,000× in the most famous bass hunt in slots.", featured: true },
  { pp: true, name: "Starlight Princess Super Scatter", slug: "starlight-princess-super-scatter", rtp: "96.50%", tagline: "An anime princess rules the starlit reels with scatter pays, glowing multipliers and Super Scatter mayhem.", featured: true },
  { pp: true, name: "5 Lions Megaways 2", slug: "5-lions-megaways-2", rtp: "96.50%", tagline: "Five majestic lions roar across Megaways reels in this electrifying sequel packed with free spins and multipliers.", featured: false },
  { pp: true, name: "5 Lions Reborn", slug: "5-lions-reborn", rtp: "96.50%", tagline: "The lions are reborn — reborn reels, reborn power, and the same legendary free spins that made the original iconic.", featured: false },
  { pp: true, name: "Bandit Megaways", slug: "bandit-megaways", rtp: "96.55%", tagline: "The Bandit is back with a Megaways engine. Up to 117,649 ways to win in this high-variance outlaw adventure.", featured: false },
  { pp: true, name: "Big Bass Bonanza 3 Reeler", slug: "big-bass-bonanza-3-reeler", rtp: "96.50%", tagline: "Three reels. One mission. Catch the biggest bass of your life in this stripped-back fishing classic.", featured: false },
  { pp: true, name: "Big Bass Boxing Bonus Round", slug: "big-bass-boxing-bonus-round", rtp: "96.50%", tagline: "The bass is lacing up its gloves — Big Bass Boxing combines fishy fortune with knockout bonus rounds.", featured: false },
  { pp: true, name: "Big Bass Christmas - Frozen Lake", slug: "big-bass-christmas-frozen-lake", rtp: "96.07%", tagline: "Ice fishing with festive flair — drill through the Frozen Lake to uncover Christmas bass worth big prizes.", featured: false },
  { pp: true, name: "Big Bass Football Bonanza", slug: "big-bass-football-bonanza", rtp: "96.50%", tagline: "Football and fishing collide in the ultimate sports mashup. Score goals and reel in money fish for a bonanza payout.", featured: false },
  { pp: true, name: "Big Bass Halloween 3", slug: "big-bass-halloween-3", rtp: "96.50%", tagline: "The bass gets spooky for Halloween — three rounds of haunted fishing, pumpkin wilds and monstrous money fish.", featured: false },
  { pp: true, name: "Big Bass Raceday Repeat", slug: "big-bass-raceday-repeat", rtp: "96.51%", tagline: "The races are on and the bass are running — Raceday Repeat brings retrigger-packed free spins to the track.", featured: false },
  { pp: true, name: "Big Bass Reel Repeat", slug: "big-bass-reel-repeat", rtp: "96.51%", tagline: "Reel it in, again and again — Reel Repeat's retriggering free spins keep the bass biting and the multipliers climbing.", featured: false },
  { pp: true, name: "Big Bass Return to the Races", slug: "big-bass-return-to-the-races", rtp: "96.07%", tagline: "The fish are back at the racetrack — collect money fish, trigger bonus rounds and race your way to big wins.", featured: false },
  { pp: true, name: "Big Bass Splash 1000", slug: "big-bass-splash-1000", rtp: "96.52%", tagline: "Make a splash for up to 1,000× — the Big Bass Splash series dives deeper with bigger money fish than ever.", featured: false },
  { pp: true, name: "Big Bass Trophy Catch", slug: "big-bass-trophy-catch", rtp: "96.50%", tagline: "Hunt the trophy bass — a legendary catch that could multiply your winnings beyond belief in this fan-favourite series.", featured: false },
  { pp: true, name: "Bigger Bass Splash", slug: "bigger-bass-splash", rtp: "96.50%", tagline: "Go bigger, splash harder — Bigger Bass Splash turns up the volume on multiplier money fish and bonus chaos.", featured: false },
  { pp: true, name: "Chilli Heat Spicy Spins", slug: "chilli-heat-spicy-spins", rtp: "96.58%", tagline: "Turn up the heat with Spicy Spins — blazing chilli wilds and scorching multipliers make every spin sizzle.", featured: false },
  { pp: true, name: "Fortune of Olympus", slug: "fortune-of-olympus", rtp: "96.55%", tagline: "The gods of Olympus bestow divine fortune — multiplier orbs, cluster wins and the power of the cosmos on every spin.", featured: false },
  { pp: true, name: "Joker's Jewels Cash", slug: "jokers-jewels-cash", rtp: "96.51%", tagline: "The classic Joker gets a Cash upgrade — jewel-studded reels with a cash collect mechanic for instant gem-powered prizes.", featured: false },
  { pp: true, name: "Joker's Jewels Hold & Spin", slug: "jokers-jewels-hold-spin", rtp: "96.52%", tagline: "Joker's Jewels meets Hold & Spin — lock your precious gems and spin for the full collection of dazzling cash prizes.", featured: false },
  { pp: true, name: "Mahjong Wins Super Scatter", slug: "mahjong-wins-super-scatter", rtp: "96.50%", tagline: "Ancient tiles meet modern wins — Mahjong Wins Super Scatter brings Eastern elegance to scatter-pays mayhem.", featured: false },
  { pp: true, name: "Sweet Bonanza Super Scatter", slug: "sweet-bonanza-super-scatter", rtp: "96.51%", tagline: "Sweet Bonanza reimagined with Super Scatter mechanics — land scatters anywhere and trigger multiplier-packed free spins.", featured: false },
  { pp: true, name: "The Big Dog House", slug: "the-big-dog-house", rtp: "96.53%", tagline: "The dogs are running the show — The Big Dog House brings canine chaos with sticky wilds and raining multipliers.", featured: false },
  { pp: true, name: "The Dog House - Royal Hunt", slug: "the-dog-house-royal-hunt", rtp: "96.50%", tagline: "The royal pack is on the hunt — sticky wilds, paw multipliers and a kennel full of bonus features await.", featured: false },
  { pp: true, name: "Wild West Gold Blazing Bounty", slug: "wild-west-gold-blazing-bounty", rtp: "96.48%", tagline: "The Wild West is ablaze with gold — ride into a blazing bounty of sticky wilds and money symbols.", featured: false },
  { pp: true, name: "Wolf Gold 4 Pack", slug: "wolf-gold-4-pack", rtp: "96.51%", tagline: "The wolf pack returns four times stronger — Wolf Gold 4 Pack multiplies the howling wins of the legendary original.", featured: false },
  { pp: true, name: "Zeus vs Hades - Gods of War 250", slug: "zeus-vs-hades-gods-of-war-250", rtp: "96.56%", tagline: "The ultimate divine duel — Zeus and Hades clash across 250 ways to win in this epic gods-of-war showdown.", featured: false },
  { pp: true, name: "Zombie School Megaways", slug: "zombie-school-megaways", rtp: "96.55%", tagline: "School's out — for the undead. Zombie School Megaways serves up horror-themed Megaways carnage with cascading reels.", featured: false },
  // Non-popular
  { pp: true, name: "3 Magic Eggs", slug: "3-magic-eggs", rtp: "96.51%", tagline: "Three enchanted eggs hold the secret to fortune — crack them open for magical multipliers and spellbound free spins.", featured: false },
  { pp: true, name: "777 Rush", slug: "777-rush", rtp: "96.50%", tagline: "Classic lucky sevens with a modern rush — fast-paced retro reels charged with electric wilds and rush multipliers.", featured: false },
  { pp: true, name: "Alien Invaders", slug: "alien-invaders", rtp: "96.50%", tagline: "The alien fleet has arrived — defend the reels or surrender to cosmic wins in this sci-fi invasion slot.", featured: false },
  { pp: true, name: "Anaconda Gold", slug: "anaconda-gold", rtp: "96.54%", tagline: "The golden anaconda coils around the reels — strike with expanding wilds and golden multipliers deep in the jungle.", featured: false },
  { pp: true, name: "Ancient Island Megaways", slug: "ancient-island-megaways", rtp: "96.55%", tagline: "A lost island of ancient civilisation unlocks Megaways fortune — cascading symbols and temple scatter wins await.", featured: false },
  { pp: true, name: "Argonauts", slug: "argonauts", rtp: "96.47%", tagline: "Join Jason and the Argonauts on their mythical quest for the Golden Fleece across the wine-dark seas.", featured: false },
  { pp: true, name: "Aztec Gems Megaways", slug: "aztec-gems-megaways", rtp: "96.58%", tagline: "The treasures of the Aztec empire glitter across Megaways reels — gem multipliers and temple bonuses await.", featured: false },
  { pp: true, name: "Aztec Smash", slug: "aztec-smash", rtp: "96.52%", tagline: "Smash through ancient Aztec stone for cascading riches — every tumble reveals more treasures from a lost civilisation.", featured: false },
  { pp: true, name: "Bee Keeper", slug: "bee-keeper", rtp: "96.51%", tagline: "Tend the hive and harvest honey wins — the Bee Keeper slots buzz with sticky wilds and sweet multipliers.", featured: false },
  { pp: true, name: "Bigger Barn House Bonanza", slug: "bigger-barn-house-bonanza", rtp: "96.50%", tagline: "The barn is bigger and the wins are bolder — Bigger Barn House Bonanza brings farm-fresh cascading riches.", featured: false },
  { pp: true, name: "Bingo Mania", slug: "bingo-mania", rtp: "96.51%", tagline: "Bingo meets slots in a manic collision of numbers, wilds and bonus balls that pay out in slot-style fashion.", featured: false },
  { pp: true, name: "Blitz Super Wheel", slug: "blitz-super-wheel", rtp: "96.52%", tagline: "Spin the Super Wheel at lightning speed — blitz through multiplier segments for instant jackpot-style prizes.", featured: false },
  { pp: true, name: "Bloody Dawn", slug: "bloody-dawn", rtp: "96.50%", tagline: "As dawn breaks red, dark forces stir — Bloody Dawn is a gothic horror slot of crimson wilds and cursed free spins.", featured: false },
  { pp: true, name: "Book of Monsters", slug: "book-of-monsters", rtp: "96.50%", tagline: "Open the forbidden Book of Monsters — each page reveals a terrifying expanding symbol and monstrous free spins.", featured: false },
  { pp: true, name: "Bounty Hunter", slug: "bounty-hunter", rtp: "96.51%", tagline: "Track down the most wanted outlaws in the west — Bounty Hunter rewards your pursuit with stacked wilds and cash prizes.", featured: false },
  { pp: true, name: "Brick House Bonanza", slug: "brick-house-bonanza", rtp: "96.50%", tagline: "Build your way to fortune brick by brick — Brick House Bonanza rewards every layer with cascading multiplier wins.", featured: false },
  { pp: true, name: "Caishen's Cash Pots", slug: "caishens-cash-pots", rtp: "96.49%", tagline: "The Chinese god of prosperity fills his golden pots — Caishen's Cash Pots overflows with Hold & Spin riches.", featured: false },
  { pp: true, name: "Candy Rush", slug: "candy-rush", rtp: "96.58%", tagline: "Rush through a world of pure sugar — Candy Rush delivers tumbling sweet symbols and cascading multiplier madness.", featured: false },
  { pp: true, name: "Captain Kraken Megaways", slug: "captain-kraken-megaways", rtp: "96.55%", tagline: "The legendary sea beast meets Megaways — Captain Kraken tentacles its way through up to 200,704 ways to win.", featured: false },
  { pp: true, name: "Cash Surge", slug: "cash-surge", rtp: "96.52%", tagline: "Cash is surging — a Hold & Spin mechanic floods the reels with money symbols for a tidal wave of prizes.", featured: false },
  { pp: true, name: "Chests of Cai Shen 2", slug: "chests-of-cai-shen-2", rtp: "96.50%", tagline: "Unlock the second chest of the prosperity god — more gold, more wilds and bigger jackpot prizes inside.", featured: false },
  { pp: true, name: "Club Tropicana - Happy Hour", slug: "club-tropicana-happy-hour", rtp: "96.50%", tagline: "It's always happy hour at Club Tropicana — cocktail wilds, neon multipliers and sun-soaked free spins all night.", featured: false },
  { pp: true, name: "Code of Cairo", slug: "code-of-cairo", rtp: "96.51%", tagline: "Crack the ancient code of Cairo — hieroglyph expanding symbols, scatter picks and Egyptian free spins await.", featured: false },
  { pp: true, name: "CULT", slug: "cult", rtp: "96.51%", tagline: "A darkly compelling slot with a cult following — mysterious symbols, ritual wilds and a devout free spins ceremony.", featured: false },
  { pp: true, name: "Cyberheist City", slug: "cyberheist-city", rtp: "96.50%", tagline: "Hack the neon city and pull off the ultimate digital heist — cyberpunk wilds and glitching multipliers await the bold.", featured: false },
  { pp: true, name: "Dino Drop", slug: "dino-drop", rtp: "96.47%", tagline: "Prehistoric giants drop onto the reels — Dino Drop crashes massive stacked symbols into cascading prize combos.", featured: false },
  { pp: true, name: "DJ Neko", slug: "dj-neko", rtp: "96.50%", tagline: "The cat DJ drops the beat — DJ Neko spins lucky symbols with rhythm-powered wilds and music-fuelled free spins.", featured: false },
  { pp: true, name: "Dragon King Hot Pots", slug: "dragon-king-hot-pots", rtp: "96.54%", tagline: "The Dragon King stirs his hot pots of fortune — Hold & Spin action with sizzling cash prizes inside every pot.", featured: false },
  { pp: true, name: "Dragon Pots Megaways", slug: "dragon-pots-megaways", rtp: "96.58%", tagline: "Dragon-guarded pots of gold across Megaways reels — fiery cascades and pot-filling bonuses fuel the fortune.", featured: false },
  { pp: true, name: "Dragon Tiger Fortunes", slug: "dragon-tiger-fortunes", rtp: "96.54%", tagline: "Ancient rivals Dragon and Tiger battle across the reels — their clash unleashes fortune multipliers and wilds.", featured: false },
  { pp: true, name: "Dragon's Gate - Bonus Choice", slug: "dragons-gate-bonus-choice", rtp: "96.50%", tagline: "Stand at the Dragon's Gate and choose your bonus path — each door leads to different free spins and multiplier power.", featured: false },
  { pp: true, name: "Duel of Night & Day", slug: "duel-of-night-day", rtp: "96.47%", tagline: "Light and darkness clash across split reels — the Duel of Night & Day awards double features and dual multipliers.", featured: false },
  { pp: true, name: "Emerald King - Wheel of Wealth", slug: "emerald-king-wheel-of-wealth", rtp: "96.53%", tagline: "The Emerald King spins his Wheel of Wealth — Irish charm, golden coins and a jackpot wheel of fortune.", featured: false },
  { pp: true, name: "Emotiwins", slug: "emotiwins", rtp: "96.50%", tagline: "Expressive emoji symbols pack big emotional reactions — Emotiwins turns feelings into wilds, multipliers and bonuses.", featured: false },
  { pp: true, name: "Escape the Pyramid - Fire & Ice", slug: "escape-the-pyramid-fire-ice", rtp: "96.50%", tagline: "Navigate blazing fire and frozen ice corridors inside an ancient pyramid to escape with its legendary treasure.", featured: false },
  { pp: true, name: "Eye of Spartacus", slug: "eye-of-spartacus", rtp: "96.42%", tagline: "The eye of the gladiator never blinks — Spartacus watches the arena with expanding wilds and battle-bonus spins.", featured: false },
  { pp: true, name: "Fiesta Fortune", slug: "fiesta-fortune", rtp: null, tagline: "The fiesta never stops — colourful Día de los Muertos symbols and festive multipliers light up every spin.", featured: false },
  { pp: true, name: "Finger Lick'n Free Spins", slug: "finger-lickn-free-spins", rtp: "96.55%", tagline: "So good you'll lick your fingers — stacked food symbols and finger-lick'n free spins make every reel delicious.", featured: false },
  { pp: true, name: "Fire Stampede 2", slug: "fire-stampede-2", rtp: "96.51%", tagline: "The blazing herd returns — Fire Stampede 2 thunders across the savannah with flaming wilds and stampede free spins.", featured: false },
  { pp: true, name: "Fire Stampede Ultimate", slug: "fire-stampede-ultimate", rtp: "96.45%", tagline: "The ultimate stampede has arrived — the fiercest, most volatile version of the beloved Fire Stampede series.", featured: false },
  { pp: true, name: "Floating Dragon - Year of the Snake", slug: "floating-dragon-year-of-the-snake", rtp: null, tagline: "In the Year of the Snake, the Floating Dragon soars — celestial multipliers and lunar wilds bless every spin.", featured: false },
  { pp: true, name: "Floating Dragon Wild Horses", slug: "floating-dragon-wild-horses", rtp: "96.50%", tagline: "Wild horses ride with the Floating Dragon across mystical Eastern reels packed with expanding wilds.", featured: false },
  { pp: true, name: "Fonzo's Feline Fortunes", slug: "fonzos-feline-fortunes", rtp: "96.52%", tagline: "Fonzo the lucky cat is loaded with feline fortune — paws of gold, cat wilds and purr-fect multiplier prizes.", featured: false },
  { pp: true, name: "Fortune of Aztec", slug: "fortune-of-aztec", rtp: "96.50%", tagline: "The Aztec civilisation built its empire on gold — Fortune of Aztec unearths temple treasures with tumbling riches.", featured: false },
  { pp: true, name: "Frightening Frankie", slug: "frightening-frankie", rtp: "96.53%", tagline: "Frankie's the most frightening thing on the reels — a monster of multipliers with electrifying free spins.", featured: false },
  { pp: true, name: "Gem Fire Fortune", slug: "gem-fire-fortune", rtp: "96.50%", tagline: "Gems forged in fire hold unimaginable fortune — blazing crystal symbols cascade for multiplied jewel prizes.", featured: false },
  { pp: true, name: "Gem Trio", slug: "gem-trio", rtp: "96.53%", tagline: "Three legendary gems align for triple the treasure — ruby, sapphire and emerald combine for gem-powered big wins.", featured: false },
  { pp: true, name: "Genie's Gem Bonanza", slug: "genies-gem-bonanza", rtp: "96.50%", tagline: "Your wish is the genie's command — wish for gems, wilds or multipliers in this magical gem bonanza slot.", featured: false },
  { pp: true, name: "Gold Party 2 - After Hours", slug: "gold-party-2-after-hours", rtp: "96.55%", tagline: "The gold party keeps going after hours — neon wilds, money rains and VIP multipliers light up the after-dark reels.", featured: false },
  { pp: true, name: "Great Ghosts!", slug: "great-ghosts", rtp: "96.50%", tagline: "These ghosts are great — friendly spectres haunt the reels with ghostly wilds and spooky free spins galore.", featured: false },
  { pp: true, name: "Greedy Fortune Pig", slug: "greedy-fortune-pig", rtp: "96.50%", tagline: "The fortune pig can't stop collecting coins — Greedy Fortune Pig's Hold & Spin fills every cell with lucky cash.", featured: false },
  { pp: true, name: "Hammerstorm", slug: "hammerstorm", rtp: "96.50%", tagline: "A storm of hammer blows smashes the reels — Norse-inspired wilds crash down for thunderous multiplied wins.", featured: false },
  { pp: true, name: "Happy Dragon", slug: "happy-dragon", rtp: "96.50%", tagline: "The happiest dragon in the east dances across golden reels — joyful wilds and lucky scatters spread dragon fortune.", featured: false },
  { pp: true, name: "Happy Nets", slug: "happy-nets", rtp: "96.50%", tagline: "Cast your net wide and catch happiness — Happy Nets reels in stacked wilds and cascading net-full prize combos.", featured: false },
  { pp: true, name: "Haunted Crypt", slug: "haunted-crypt", rtp: "96.51%", tagline: "Deep in the haunted crypt, the dead stir — spine-chilling wilds and crypt scatter free spins guard the golden coffins.", featured: false },
  { pp: true, name: "Heartbreakers", slug: "heartbreakers", rtp: "96.53%", tagline: "Love can be dangerous — Heartbreakers deals out wild hearts, multiplier arrows and bonus rounds you won't forget.", featured: false },
  { pp: true, name: "Hot Tuna", slug: "hot-tuna", rtp: "96.53%", tagline: "This tuna is sizzling hot — ocean-fresh symbols, blazing wilds and a reel full of seared multiplier fish.", featured: false },
  { pp: true, name: "Hundreds and Thousands", slug: "hundreds-and-thousands", rtp: "96.52%", tagline: "Sprinkled with luck — Hundreds and Thousands showers colourful candy wins across tumbling reels.", featured: false },
  { pp: true, name: "Ice Mints", slug: "ice-mints", rtp: "96.50%", tagline: "Cool, crisp and refreshing — Ice Mints delivers icy wilds and frosty free spins in a minty-fresh slot experience.", featured: false },
  { pp: true, name: "Idol Pop Fever", slug: "idol-pop-fever", rtp: "96.50%", tagline: "The stage is yours — Idol Pop Fever brings K-pop energy with stage-time multipliers and fan-frenzy free spins.", featured: false },
  { pp: true, name: "Inca Queen", slug: "inca-queen", rtp: "96.55%", tagline: "The Inca Queen reigns over golden temples — ancient multipliers and royal free spins rule these South American reels.", featured: false },
  { pp: true, name: "Irish Crown", slug: "irish-crown", rtp: "96.52%", tagline: "The Crown of Ireland brings shamrock luck — four-leaf wilds, golden pots and rainbow multipliers for Irish fortune.", featured: false },
  { pp: true, name: "Jackpot Blaze", slug: "jackpot-blaze", rtp: "96.56%", tagline: "The jackpot is blazing — a fiery Hold & Spin mechanic heats up with every round until the infernal jackpot ignites.", featured: false },
  { pp: true, name: "Jelly Candy", slug: "jelly-candy", rtp: "96.52%", tagline: "Sweet, wobbly and full of prizes — Jelly Candy wobbles multiplier symbols into cascading sugar-coated wins.", featured: false },
  { pp: true, name: "Jelly Express", slug: "jelly-express", rtp: "96.50%", tagline: "All aboard the Jelly Express — this train of tumbling sweets rushes through multiplier stations on its way to big prizes.", featured: false },
  { pp: true, name: "John Hunter and Galileo's Secrets", slug: "john-hunter-and-galileos-secrets", rtp: "96.50%", tagline: "Explorer John Hunter uncovers the secrets of Galileo — astronomy-themed expanding symbols and constellation free spins.", featured: false },
  { pp: true, name: "Jumbo Safari", slug: "jumbo-safari", rtp: null, tagline: "A jumbo adventure across the African savannah — safari wildlife wilds and stampede free spins on every spin.", featured: false },
  { pp: true, name: "Knights vs Barbarians", slug: "knights-vs-barbarians", rtp: "96.51%", tagline: "An epic medieval clash — armoured knights and savage barbarians battle it out for war chest multipliers.", featured: false },
  { pp: true, name: "Launch to Riches", slug: "launch-to-riches", rtp: "96.52%", tagline: "3, 2, 1 — launch to riches! A rocket-fuelled space slot that blasts through multiplier orbits to stellar jackpots.", featured: false },
  { pp: true, name: "Lava Balls", slug: "lava-balls", rtp: "96.50%", tagline: "Volcanic lava balls roll across fiery reels — each eruption creates cascading molten multipliers in this hot slot.", featured: false },
  { pp: true, name: "Lobster House", slug: "lobster-house", rtp: "96.51%", tagline: "Crack open the lobster and find the treasure — seafood-stacked reels with a pinchy Hold & Spin mechanic.", featured: false },
  { pp: true, name: "Lucky Dice", slug: "lucky-dice", rtp: "96.53%", tagline: "Roll the lucky dice — every tumble reveals new multipliers in this high-stakes dice-meets-slot action.", featured: false },
  { pp: true, name: "Lucky Dog", slug: "lucky-dog", rtp: "96.50%", tagline: "Every dog has his day — and Lucky Dog's day involves stacked wilds, bone scatters and a jackpot-sized walkies.", featured: false },
  { pp: true, name: "Lucky Fortune Tree", slug: "lucky-fortune-tree", rtp: "96.50%", tagline: "Shake the Lucky Fortune Tree and watch golden coins fall — each branch holds a different multiplier treasure.", featured: false },
  { pp: true, name: "Lucky Monkey", slug: "lucky-monkey", rtp: "96.50%", tagline: "The luckiest monkey swings through golden reels — playful wilds and banana-powered scatters shower prizes.", featured: false },
  { pp: true, name: "Lucky Mouse", slug: "lucky-mouse", rtp: "96.57%", tagline: "The luckiest mouse in the world scurries across fortunate reels — tiny but mighty, with massive multiplier cheese.", featured: false },
  { pp: true, name: "Lucky Ox", slug: "lucky-ox", rtp: "96.55%", tagline: "The mighty ox brings strength and fortune — Lucky Ox charges through stacked wilds and prosperous free spins.", featured: false },
  { pp: true, name: "Lucky Panda", slug: "lucky-panda", rtp: "96.50%", tagline: "The bamboo-munching lucky panda rolls through golden reels — cuddly but loaded with wild fortune.", featured: false },
  { pp: true, name: "Lucky Phoenix", slug: "lucky-phoenix", rtp: "96.50%", tagline: "The Phoenix rises from ashes into blazing fortune — rebirth wilds and fire-scattered multipliers fill every spin.", featured: false },
  { pp: true, name: "Lucky Tiger", slug: "lucky-tiger", rtp: "96.50%", tagline: "The tiger is the luckiest predator — prowl through stacked wild symbols and pounce on tiger-powered jackpot wins.", featured: false },
  { pp: true, name: "Lucky Tiger 1000", slug: "lucky-tiger-1000", rtp: "96.50%", tagline: "The Lucky Tiger hunts for 1,000× — the most powerful predator in slots prowls for the ultimate jackpot.", featured: false },
  { pp: true, name: "Lucky Tiger Gold", slug: "lucky-tiger-gold", rtp: "96.50%", tagline: "Golden stripes and golden wins — Lucky Tiger Gold is the most luxurious tiger hunt in slot history.", featured: false },
  { pp: true, name: "Lucky's Wild Pub", slug: "luckys-wild-pub", rtp: "96.50%", tagline: "Pull up a stool at Lucky's Wild Pub — the bar where wilds flow as freely as the drinks and everyone wins.", featured: false },
  { pp: true, name: "Lucky's Wild Pub 2", slug: "luckys-wild-pub-2", rtp: "96.50%", tagline: "Last orders at Lucky's Wild Pub 2 — even wilder than the original with a double round of multiplier bonuses.", featured: false },
  { pp: true, name: "Majestic Express - Gold Run", slug: "majestic-express-gold-run", rtp: "96.50%", tagline: "The gold train is running — board the Majestic Express for a cross-country journey packed with golden multipliers.", featured: false },
  { pp: true, name: "Master Gems", slug: "master-gems", rtp: "96.46%", tagline: "Master the art of gems — precision cascades and jewel multipliers reward the most skilful gem collectors.", featured: false },
  { pp: true, name: "Mermaid's Treasure Trove", slug: "mermaids-treasure-trove", rtp: "96.54%", tagline: "Dive into the mermaid's hidden trove — ocean pearls, coral wilds and deep-sea multipliers fill every chest.", featured: false },
  { pp: true, name: "Mining Rush", slug: "mining-rush", rtp: "96.56%", tagline: "Strike it rich in the gold rush — dynamite wilds blast through rocky reels to uncover gleaming ore multipliers.", featured: false },
  { pp: true, name: "Money Stacks Megaways", slug: "money-stacks-megaways", rtp: "96.52%", tagline: "Stack your money across Megaways reels — cascading cash symbols tumble for an avalanche of stacked prizes.", featured: false },
  { pp: true, name: "Mr Null's Wicked Wares", slug: "mr-nulls-wicked-wares", rtp: "96.49%", tagline: "Shop at Mr Null's Wicked Wares for cursed multipliers, hexed wilds and a bonus aisle full of dark surprises.", featured: false },
  { pp: true, name: "Mummy's Jewels", slug: "mummys-jewels", rtp: "96.50%", tagline: "Unwrap the mummy and claim its jewels — ancient Egyptian gems, expanding wilds and sarcophagus free spins.", featured: false },
  { pp: true, name: "Mummy's Jewels 100", slug: "mummys-jewels-100", rtp: "96.50%", tagline: "100× the jewels of the mummy — a turbo-charged version loaded with 100-pay Egyptian gem mechanics.", featured: false },
  { pp: true, name: "Mystic Wishes", slug: "mystic-wishes", rtp: "96.50%", tagline: "Make your mystic wish and let the magic unfold — enchanted wilds and wish-granted multipliers deliver your fortune.", featured: false },
  { pp: true, name: "Olympus Wins", slug: "olympus-wins", rtp: "96.50%", tagline: "The gods of Olympus unite for divine wins — cluster pays and multiplier lightning bolts rain down from the mountain.", featured: false },
  { pp: true, name: "Oracle of Gold", slug: "oracle-of-gold", rtp: "96.55%", tagline: "Consult the Oracle of Gold — divine prophecies translate into multiplier wilds and golden free spin revelations.", featured: false },
  { pp: true, name: "Pandemic Rising", slug: "pandemic-rising", rtp: "96.51%", tagline: "The outbreak spreads across the reels — Pandemic Rising's viral multipliers infect every symbol for chain reaction wins.", featured: false },
  { pp: true, name: "Peppe's Pepperoni Pizza Plaza", slug: "peppes-pepperoni-pizza-plaza", rtp: "96.55%", tagline: "Order up at Peppe's — the pizzeria where every slice is a wild, every topping is a multiplier and free spins are on the house.", featured: false },
  { pp: true, name: "Pig Farm", slug: "pig-farm", rtp: "96.00%", tagline: "Down on the pig farm, fortune grows — oink your way through muddy wilds and farm-fresh scatter bonuses.", featured: false },
  { pp: true, name: "Plushie Wins", slug: "plushie-wins", rtp: "96.84%", tagline: "The cutest slot ever made — Plushie Wins stuffs the reels with adorable toy wilds and the highest RTP on this page.", featured: false },
  { pp: true, name: "Raging Waterfall Megaways", slug: "raging-waterfall-megaways", rtp: "96.50%", tagline: "Cascade like a raging waterfall — Megaways power fuels an endless tumble of wins down the mountain's face.", featured: false },
  { pp: true, name: "Ratinho Sortudo", slug: "ratinho-sortudo", rtp: null, tagline: "The lucky little rat scurries through Brazilian fortune — colourful wilds and rodent luck power every spin.", featured: false },
  { pp: true, name: "Resurrecting Riches", slug: "resurrecting-riches", rtp: "96.50%", tagline: "From the grave come riches — Resurrecting Riches raises multiplied wins from the dead in this gothic bonus slot.", featured: false },
  { pp: true, name: "Ride The Lightning", slug: "ride-the-lightning", rtp: "96.50%", tagline: "Grab the lightning bolt and ride it to fortune — electric wilds and thunderbolt multipliers supercharge every spin.", featured: false },
  { pp: true, name: "Rolling in Treasures", slug: "rolling-in-treasures", rtp: "96.50%", tagline: "Roll, tumble and cascade your way to treasure — every drop reveals a new layer of multiplied prize potential.", featured: false },
  { pp: true, name: "Sanatorium Secrets", slug: "sanatorium-secrets", rtp: "96.47%", tagline: "The secrets of the abandoned sanatorium are yours to uncover — haunted wilds and asylum free spins tell a dark tale.", featured: false },
  { pp: true, name: "Santa's Slay", slug: "santas-slay", rtp: "96.53%", tagline: "Santa is on his sleigh and he's slaying — festive wilds, gift multipliers and a Christmas free spins massacre.", featured: false },
  { pp: true, name: "Savannah Legend", slug: "savannah-legend", rtp: "96.50%", tagline: "A legendary predator stalks the golden savannah — wildlife wilds and sunset scatter bonuses define this African epic.", featured: false },
  { pp: true, name: "Sleeping Dragon", slug: "sleeping-dragon", rtp: null, tagline: "The dragon sleeps but its gold does not — awaken expanding wilds and fire-scatter bonuses in this dormant giant.", featured: false },
  { pp: true, name: "Snow Party", slug: "snow-party", rtp: "96.50%", tagline: "The snow party never stops — icy wilds, snowflake scatters and a winter free spins festival for frosty big wins.", featured: false },
  { pp: true, name: "Spellmaster", slug: "spellmaster", rtp: "96.50%", tagline: "Master the ancient spells — each incantation transforms symbols into multiplied wilds in this arcane bonus slot.", featured: false },
  { pp: true, name: "Starlight Wins", slug: "starlight-wins", rtp: "96.50%", tagline: "Under a canopy of stars, fortune twinkles — Starlight Wins delivers constellation cluster pays and celestial multipliers.", featured: false },
  { pp: true, name: "Steamin' Reels", slug: "steamin-reels", rtp: "96.53%", tagline: "Full steam ahead — steampunk cogs, brass wilds and industrial multipliers drive this Victorian treasure machine.", featured: false },
  { pp: true, name: "Super Gummy Strike", slug: "super-gummy-strike", rtp: "96.47%", tagline: "Strike through layers of gummy candy for super wins — tumbling jelly symbols and strike multipliers deliver sweet chaos.", featured: false },
  { pp: true, name: "Super Tiki Strike", slug: "super-tiki-strike", rtp: "96.50%", tagline: "Island vibes and Tiki power collide — Super Tiki Strike brings tropical scatters and multiplied island wins.", featured: false },
  { pp: true, name: "Sweet Burst", slug: "sweet-burst", rtp: "96.50%", tagline: "The sweetness bursts in every direction — cascading candy wilds and burst multipliers send sugar wins flying.", featured: false },
  { pp: true, name: "Sweet Craze", slug: "sweet-craze", rtp: "97.54%", tagline: "The craziest sweet slot ever made with the highest RTP of the collection — 97.54% of sugary multiplied madness.", featured: false },
  { pp: true, name: "Sweet Rush Bonanza", slug: "sweet-rush-bonanza", rtp: "96.50%", tagline: "Rush through a bonanza of sweets — tumbling candy clusters and cascading multipliers create a non-stop sugar storm.", featured: false },
  { pp: true, name: "Temple Guardians", slug: "temple-guardians", rtp: "96.53%", tagline: "Ancient warriors guard a forgotten temple — awaken them with scatters for multiplied warrior free spins.", featured: false },
  { pp: true, name: "Touro Sortudo", slug: "touro-sortudo", rtp: null, tagline: "The lucky bull charges through Brazilian fortune with festive wilds and a bold Hold & Spin mechanic.", featured: false },
  { pp: true, name: "Treasures of Osiris", slug: "treasures-of-osiris", rtp: "96.52%", tagline: "Osiris guards the most sacred treasures of Egypt — unveil them with golden expanding wilds and pyramid free spins.", featured: false },
  { pp: true, name: "Triple Pot Diamond", slug: "triple-pot-diamond", rtp: "96.57%", tagline: "Three pots, one diamond, infinite fortune — Triple Pot Diamond fills every pot for a glittering jackpot-style climax.", featured: false },
  { pp: true, name: "Triple Pot Gold", slug: "triple-pot-gold", rtp: "96.02%", tagline: "Three golden pots overflow with classic Hold & Spin prizes — the original, the iconic, the timeless.", featured: false },
  { pp: true, name: "Triple Pot Plinko - Hercules", slug: "triple-pot-plinko-hercules", rtp: "96.55%", tagline: "Drop the ball with Hercules' strength — Plinko-style action fills three pots with Herculean multiplied prizes.", featured: false },
  { pp: true, name: "Tut's Treasure Tower", slug: "tuts-treasure-tower", rtp: "96.51%", tagline: "Climb Tutankhamun's treasure tower floor by floor — each level reveals more gold and more powerful free spins.", featured: false },
  { pp: true, name: "Volcano Goddess", slug: "volcano-goddess", rtp: "96.49%", tagline: "The Volcano Goddess commands fire and fortune — lava wilds and erupting multipliers flow from her island throne.", featured: false },
  { pp: true, name: "Waves of Poseidon", slug: "waves-of-poseidon", rtp: "96.55%", tagline: "The god of the seas unleashes crashing waves of fortune — Poseidon's trident splits reels for tidal multipliers.", featured: false },
  { pp: true, name: "Wealthy Frog", slug: "wealthy-frog", rtp: "96.50%", tagline: "The wealthiest frog in the pond hops through golden lily pads — each jump lands on a multiplied cash prize.", featured: false },
  { pp: true, name: "Wheel of Happiness", slug: "wheel-of-happiness", rtp: "96.47%", tagline: "Spin the Wheel of Happiness and land on joy — multipliers, free spins and jackpots share equal real estate.", featured: false },
  { pp: true, name: "Wild Skullz", slug: "wild-skullz", rtp: "96.44%", tagline: "Skull symbols stack for danger and reward — Wild Skullz is a bone-rattling slot of stacked wilds and skull scatters.", featured: false },
  { pp: true, name: "Wild Wild Joker", slug: "wild-wild-joker", rtp: "96.49%", tagline: "The wildest joker in the west — this outlaw joker multiplies every win and triggers the most chaotic free spins.", featured: false },
  { pp: true, name: "Wild Wild Pearls", slug: "wild-wild-pearls", rtp: "96.46%", tagline: "Pearl divers discover a ocean of wild wins — Wild Wild Pearls shines with lustrous multipliers and deep-sea bonuses.", featured: false },
  { pp: true, name: "Wild Wild Riches Returns", slug: "wild-wild-riches-returns", rtp: "96.50%", tagline: "The riches are back and wilder than ever — Irish wilds, coin collecting and Hold & Spin returns for more fortune.", featured: false },
  { pp: true, name: "Wild Wildebeest Wins", slug: "wild-wildebeest-wins", rtp: "96.45%", tagline: "The great wildebeest migration stampedes across the reels — herd wilds and savannah scatters thunder to big wins.", featured: false },
  { pp: true, name: "Wisdom of Athena 1000 Xmas", slug: "wisdom-of-athena-1000-xmas", rtp: "96.00%", tagline: "The goddess of wisdom brings a festive gift — 1,000× Christmas multipliers blessed by Athena's divine intel.", featured: false },
  { pp: true, name: "Witch Heart Megaways", slug: "witch-heart-megaways", rtp: null, tagline: "A witch's heart beats through Megaways reels — dark magic, potion wilds and hexed free spins across 117,649 ways.", featured: false },
  { pp: true, name: "You Can Piggy Bank On It", slug: "you-can-piggy-bank-on-it", rtp: "96.53%", tagline: "Smash the piggy bank for guaranteed fortune — every spin fills the pig with cash prizes ready to be collected.", featured: false },
  { pp: true, name: "Zeus vs Typhon", slug: "zeus-vs-typhon", rtp: "96.49%", tagline: "The king of the gods faces the mightiest monster — Zeus battles Typhon across lightning-charged multiplier reels.", featured: false },
];

// RTP + Volatility lookup for Hacksaw slots (sourced from Final Hacksaw Slot upload code.xlsx)
const HACKSAW_RTP = {
  "Red Rascal":                        { rtp: "96.34%", volatility: "High" },
  "Rise of Fortuna":                   { rtp: "96.28%", volatility: "Medium" },
  "Sand and Ashes":                    { rtp: "96.27%", volatility: "Medium" },
  "Munchy Milo":                       { rtp: "96.31%", volatility: "Medium" },
  "3 Cursed Chests: Hold & Win":       { rtp: "96.30%", volatility: "Medium" },
  "Le Bunny":                          { rtp: "96.25%", volatility: "Low" },
  "Power of Ten":                      { rtp: "96.31%", volatility: "Medium" },
  "Dynasty of Death":                  { rtp: "96.32%", volatility: "High" },
  "Marlin Masters Atlantis":           { rtp: "96.30%", volatility: "Medium" },
  "Magic Piggy OG":                    { rtp: "96.33%", volatility: "Medium" },
  "Pray for Six":                      { rtp: "96.34%", volatility: "High" },
  "Dark Spiral":                       { rtp: "96.35%", volatility: "High" },
  "Epic Bullets and Bounty":           { rtp: "96.36%", volatility: "High" },
  "Zeus Ze Zecond":                    { rtp: "96.28%", volatility: "Medium" },
  "Eternal Duel":                      { rtp: "96.42%", volatility: "High" },
  "Le Digger":                         { rtp: "96.30%", volatility: "Medium" },
  "Dusk Princess":                     { rtp: "96.27%", volatility: "Medium" },
  "Circle of Life":                    { rtp: "96.29%", volatility: "Medium" },
  "Toshi Ways Club":                   { rtp: "96.33%", volatility: "High" },
  "Deal With Death":                   { rtp: "96.35%", volatility: "High" },
  "Le Santa":                          { rtp: "96.14%", volatility: "Medium" },
  "Army of Ares":                      { rtp: "96.26%", volatility: "High" },
  "Superstar Sevens":                  { rtp: "96.37%", volatility: "Medium" },
  "Steamrunners":                      { rtp: "96.32%", volatility: "Medium" },
  "Hot Ross":                          { rtp: "96.32%", volatility: "High" },
  "Sun Princess":                      { rtp: "96.29%", volatility: "Medium" },
  "The Count":                         { rtp: "96.36%", volatility: "Medium-High" },
  "Donny and Danny":                   { rtp: "96.29%", volatility: "Medium" },
  "Spear of Athena":                   { rtp: "96.20%", volatility: "Medium" },
  "Le Fisherman":                      { rtp: "96.33%", volatility: "Low" },
  "Le Cowboy":                         { rtp: "96.28%", volatility: "Medium" },
  "Le Zeus":                           { rtp: "96.26%", volatility: "Medium" },
  "Stormborn":                         { rtp: "96.27%", volatility: "High" },
  "Tiger Legends":                     { rtp: "96.30%", volatility: "Medium" },
  "Bash Bros":                         { rtp: "96.26%", volatility: "Low" },
  "Smoking Dragon":                    { rtp: "96.30%", volatility: "Low" },
  "Chaos Crew 3":                      { rtp: "96.18%", volatility: "Very High" },
  "Le King":                           { rtp: "96.14%", volatility: "Medium" },
  "The Luxe":                          { rtp: "96.33%", volatility: "Very High" },
  "Jaws of Justice":                   { rtp: "96.20%", volatility: "High" },
  "Bullets and Bounty":                { rtp: "96.27%", volatility: "Low" },
  "Miami Mayhem":                      { rtp: "96.35%", volatility: "High" },
  "Booze Bash":                        { rtp: "96.31%", volatility: "High" },
  "Aiko and the Wind Spirit":          { rtp: "96.29%", volatility: "Medium" },
  "Invictus":                          { rtp: "96.24%", volatility: "Medium-High" },
  "Freds Food Truck":                  { rtp: "96.33%", volatility: "Medium" },
  "The Wildwood Curse":                { rtp: "96.30%", volatility: "Medium" },
  "Eye of Medusa":                     { rtp: "96.20%", volatility: "Medium" },
  "Marlin Masters: The Big Haul":      { rtp: "96.28%", volatility: "Medium" },
  "Rainbow Princess":                  { rtp: "96.36%", volatility: "Medium" },
  "Ultimate Slot Of America":          { rtp: "96.35%", volatility: "Medium" },
  "Spinman":                           { rtp: "96.23%", volatility: "Medium" },
  "Pray For Three":                    { rtp: "96.33%", volatility: "High" },
  "Danny Dollar":                      { rtp: "96.21%", volatility: "High" },
  "Rad Maxx":                          { rtp: "96.32%", volatility: "High" },
  "Reign Of Rome":                     { rtp: "96.27%", volatility: "High" },
  "Fighter Pit":                       { rtp: "96.30%", volatility: "High" },
  "Wishbringer":                       { rtp: "96.33%", volatility: "Medium" },
  "Life And Death":                    { rtp: "96.36%", volatility: "High" },
  "Dorks Of The Deep":                 { rtp: "96.20%", volatility: "Medium" },
  "Strength Of Hercules":              { rtp: "96.31%", volatility: "Medium" },
  "Hounds Of Hell":                    { rtp: "96.27%", volatility: "High" },
  "Frkn Bananas":                      { rtp: "96.31%", volatility: "High" },
  "Marlin Masters":                    { rtp: "96.24%", volatility: "Medium" },
  "Phoenix Duelreels":                 { rtp: "96.27%", volatility: "Medium" },
  "Le Viking":                         { rtp: "96.32%", volatility: "Medium" },
  "Klowns":                            { rtp: "96.26%", volatility: "Medium" },
  "Fire My Laser":                     { rtp: "96.31%", volatility: "Medium" },
  "Donut Division":                    { rtp: "96.30%", volatility: "Medium" },
  "Shaolin Master":                    { rtp: "96.31%", volatility: "Medium" },
  "Snow Slingers":                     { rtp: "96.27%", volatility: "Medium" },
  "Duel At Dawn":                      { rtp: "96.30%", volatility: "High" },
  "Wings Of Horus":                    { rtp: "96.33%", volatility: "High" },
  "Rise Of Ymir":                      { rtp: "96.31%", volatility: "High" },
  "Get The Cheese":                    { rtp: "96.31%", volatility: "Medium" },
  "Cloud Princess":                    { rtp: "96.24%", volatility: "Medium" },
  "Le Pharaoh":                        { rtp: "96.18%", volatility: "Medium" },
  "Evil Eyes":                         { rtp: "96.24%", volatility: "Medium-High" },
  "Octo Attack":                       { rtp: "96.23%", volatility: "High" },
  "Donny Dough":                       { rtp: "96.23%", volatility: "Medium" },
  "Dragons Domain":                    { rtp: "96.31%", volatility: "High" },
  "Sixsixsix":                         { rtp: "96.15%", volatility: "Very High" },
  "Tai The Toad":                      { rtp: "96.21%", volatility: "Medium" },
  "Twisted Lab":                       { rtp: "96.20%", volatility: "High" },
  "Ze Zeus":                           { rtp: "96.22%", volatility: "Medium" },
  "Cursed Crypt":                      { rtp: "96.22%", volatility: "High" },
  "Slayers Inc":                       { rtp: "96.28%", volatility: "Very High" },
  "Jelly Slice":                       { rtp: "96.24%", volatility: "Medium" },
  "Keep Em":                           { rtp: "96.27%", volatility: "Medium" },
  "Divine Drop":                       { rtp: "96.25%", volatility: "Medium" },
};

// Pragmatic Play hero images (1200x630) — sourced from pragmaticplay.com WP media API
// 34/168 found automatically; remainder to be added manually
const PP_HERO = {
  "Sweet Bonanza 2500": "https://www.pragmaticplay.com/wp-content/uploads/2026/04/Sweet-Bonanza-2500_1200x630_EN.jpg",
  "Sugar Rush Super Scatter": "https://www.pragmaticplay.com/wp-content/uploads/2026/01/Sugar-Rush-Super-Scatter_1200x630_EN.jpg",
  "Gates of Hades": "https://www.pragmaticplay.com/wp-content/uploads/2025/11/Gates-of-Hades_1200x630_EN.jpg",
  "Big Bass Bonanza 1000": "https://www.pragmaticplay.com/wp-content/uploads/2025/04/Big-Bass-Bonanza-1000_1200x630_EN.jpg",
  "Starlight Princess Super Scatter": "https://www.pragmaticplay.com/wp-content/uploads/2025/10/Starlight-Princess-Super-Scatter_1200x630_EN.jpg",
  "Bandit Megaways": "https://www.pragmaticplay.com/wp-content/uploads/2025/04/Bandit-Megaways_1200x630_EN-1.jpg",
  "Big Bass Boxing Bonus Round": "https://www.pragmaticplay.com/wp-content/uploads/2025/06/Big-Bass-Boxing-Bonus-Round_1200x630_EN.jpg",
  "Big Bass Football Bonanza": "https://www.pragmaticplay.com/wp-content/uploads/2026/05/Big-Bass-Football-Bonanza_1200x630_EN.jpg",
  "Big Bass Reel Repeat": "https://www.pragmaticplay.com/wp-content/uploads/2025/09/Big-Bass-Reel-Repeat_1200x630_EN.jpg",
  "Big Bass Splash 1000": "https://www.pragmaticplay.com/wp-content/uploads/2025/12/Big-Bass-Splash-1000_1200x630_EN.jpg",
  "Big Bass Trophy Catch": "https://www.pragmaticplay.com/wp-content/uploads/2026/04/Big-Bass-Trophy-Catch_1200x630_EN.jpg",
  "Fortune of Olympus": "https://www.pragmaticplay.com/wp-content/uploads/2025/12/Fortune-of-Olympus_1200x630_EN.jpg",
  "Joker's Jewels Hold & Spin": "https://www.pragmaticplay.com/wp-content/uploads/2025/12/Jokers-Jewels-Hold-Spin_1200x630_EN.jpg",
  "Mahjong Wins Super Scatter": "https://www.pragmaticplay.com/wp-content/uploads/2025/05/Mahjong-Wins-Super-Scatter_1200x630_EN.jpg",
  "Sweet Bonanza Super Scatter": "https://www.pragmaticplay.com/wp-content/uploads/2025/09/Sweet-Bonanza-Super-Scatter_1200x630_EN.jpg",
  "Wild West Gold Blazing Bounty": "https://www.pragmaticplay.com/wp-content/uploads/2025/06/Wild-West-Gold-Blazing-Bounty_1200x630_EN.jpg",
  "Zombie School Megaways": "https://www.pragmaticplay.com/wp-content/uploads/2025/09/Zombie-School-Megaways_1200x630_EN.jpg",
  "Aztec Smash": "https://www.pragmaticplay.com/wp-content/uploads/2025/01/Aztec-Smash_1200x630_EN-1.jpg",
  "Book of Monsters": "https://www.pragmaticplay.com/wp-content/uploads/2025/03/Book-of-Monsters_1200x630_EN.jpg",
  "Candy Rush": "https://www.pragmaticplay.com/wp-content/uploads/2026/05/Candy-Rush_1200x630_EN.jpg",
  "Cyberheist City": "https://www.pragmaticplay.com/wp-content/uploads/2026/02/Cyberheist-City_1200x630_EN.jpg",
  "Gem Fire Fortune": "https://www.pragmaticplay.com/wp-content/uploads/2025/09/Gem-Fire-Fortune_1200x630_EN.jpg",
  "Jackpot Blaze": "https://www.pragmaticplay.com/wp-content/uploads/2025/09/Jackpot-Blaze_1200x630_EN.jpg",
  "Jelly Express": "https://www.pragmaticplay.com/wp-content/uploads/2026/03/Jelly-Express_1200x630_EN.jpg",
  "Mining Rush": "https://www.pragmaticplay.com/wp-content/uploads/2024/12/Mining-Rush_1200x630_EN.jpg",
  "Money Stacks Megaways": "https://www.pragmaticplay.com/wp-content/uploads/2024/12/Money-Stacks-Megaways_1200x630_EN.jpg",
  "Oracle of Gold": "https://www.pragmaticplay.com/wp-content/uploads/2025/11/Oracle-of-Gold_1200x630_EN.jpg",
  "Rolling in Treasures": "https://www.pragmaticplay.com/wp-content/uploads/2026/02/Rolling-in-Treasures_1200x630_EN.jpg",
  "Waves of Poseidon": "https://www.pragmaticplay.com/wp-content/uploads/2025/09/Waves-of-Poseidon_1200x630_EN-1.jpg",
  "Wild Wild Pearls": "https://www.pragmaticplay.com/wp-content/uploads/2025/01/Wild-Wild-Pearls_1200x630_EN.jpg",
  "Zeus vs Typhon": "https://www.pragmaticplay.com/wp-content/uploads/2025/11/Zeus-vs-Typhon_1200x630_EN.jpg",
};

// Hero image lookup — exact URLs scraped from hacksawgaming.com game pages
const HACKSAW_HERO = {
  "red-rascal": "https://www-live.hacksawgaming.com/casino_thumbnails/2274_hero_RedRascal_Devices_Desktop.png",
  "rise-of-fortuna": "https://www-live.hacksawgaming.com/casino_thumbnails/2213_hero_Devices_Desktop.png",
  "sand-and-ashes": "https://www-live.hacksawgaming.com/casino_thumbnails/2243_hero_SandAndAshes_Devices_Desktop.png",
  "munchy-milo": "https://www-live.hacksawgaming.com/casino_thumbnails/2219_hero_MunchyMilo_Devices_Desktop.png",
  "3-cursed-chests-hold-win": null,
  "magic-piggy-og": "https://www-live.hacksawgaming.com/casino_thumbnails/2258_hero_Devices_Desktop.png",
  "le-bunny": "https://www-live.hacksawgaming.com/casino_thumbnails/2195_hero_LeBunny%20Devices%20Desktop.png",
  "power-of-ten": "https://www-live.hacksawgaming.com/casino_thumbnails/2234_hero_Device_Desktop%2016x9%20(1).png",
  "epic-bullets-and-bounty": "https://www-live.hacksawgaming.com/casino_thumbnails/2185_hero_EpicBulletsAndBounty_Devices_Desktop.png",
  "dynasty-of-death": "https://www-live.hacksawgaming.com/casino_thumbnails/2082_hero_DynastyOfDeath_Devices_Desktop.png",
  "marlin-masters-atlantis": "https://www-live.hacksawgaming.com/casino_thumbnails/2108_hero_MarlinMastersAtlantis_Devices_Desktop.png",
  "pray-for-six": "https://www-live.hacksawgaming.com/casino_thumbnails/2115_hero_Device_Desktop16x9%20(2).png",
  "dark-spiral": "https://www-live.hacksawgaming.com/casino_thumbnails/2143_hero_Devices_Desktop.png",
  "zeus-ze-zecond": "https://www-live.hacksawgaming.com/casino_thumbnails/2077_hero_ZeusZeZecond_Devices_Desktop%20(1).png",
  "eternal-duel": "https://www-live.hacksawgaming.com/casino_thumbnails/2148_hero_EternalDuel_Devices_Desktop.png",
  "le-digger": "https://www-live.hacksawgaming.com/casino_thumbnails/2229_hero_LeDigger_Devices_Desktop.png",
  "dusk-princess": "https://www-live.hacksawgaming.com/casino_thumbnails/2190_hero_Device_Desktop%2016_9.png",
  "circle-of-life": "https://www-live.hacksawgaming.com/casino_thumbnails/2019_hero_Device_Desktop16x9%20(1).png",
  "toshi-ways-club": "https://www-live.hacksawgaming.com/casino_thumbnails/1971_hero_Device_Desktop%2016x9.png",
  "deal-with-death": "https://www-live.hacksawgaming.com/casino_thumbnails/2000_hero_Device_Desktop16x9%20(1)%202.png",
  "le-santa": "https://www-live.hacksawgaming.com/casino_thumbnails/1965_hero_Device_Desktop16x9.png",
  "army-of-ares": "https://www-live.hacksawgaming.com/casino_thumbnails/1977_hero_Devices_Desktop.png",
  "superstar-sevens": "https://www-live.hacksawgaming.com/casino_thumbnails/2138_hero_Device_Desktop%2016x9%20.png",
  "steamrunners": "https://www-live.hacksawgaming.com/casino_thumbnails/1871_hero_Steamrunners_Devices_Desktop_Euro.png",
  "hot-ross": "https://www-live.hacksawgaming.com/casino_thumbnails/2062_hero_Hacksaw%20Desktop%2016x9.png",
  "sun-princess": "https://www-live.hacksawgaming.com/casino_thumbnails/1914_hero_SunPrincess_Devices_Desktop.png",
  "the-count": "https://www-live.hacksawgaming.com/casino_thumbnails/1803_hero_TheCount_Devices_Desktop.png",
  "donny-and-danny": "https://www-live.hacksawgaming.com/casino_thumbnails/2004_hero_Donny%20and%20Danny%20Devices.png",
  "spear-of-athena": "https://www-live.hacksawgaming.com/casino_thumbnails/1938_hero_SpearOfAthena_Devices_Desktop.png",
  "le-fisherman": "https://www-live.hacksawgaming.com/casino_thumbnails/2057_hero_LeFisherman_Devices_Desktop.png",
  "le-cowboy": "https://www-live.hacksawgaming.com/casino_thumbnails/1924_hero_LeCowboy_Devices_Desktop.png",
  "le-zeus": "https://www-live.hacksawgaming.com/casino_thumbnails/1830_hero_Device_Desktop16x9.png",
  "stormborn": "https://www-live.hacksawgaming.com/casino_thumbnails/1875_hero_Device_Desktop16x9.png",
  "tiger-legends": "https://www-live.hacksawgaming.com/casino_thumbnails/1744_hero_Tiger-Legends_Devices_Desktop.png",
  "bash-bros": "https://www-live.hacksawgaming.com/casino_thumbnails/1928_hero_BashBros_Devices_Desktop.png",
  "smoking-dragon": "https://www-live.hacksawgaming.com/casino_thumbnails/1981_hero_SmokingDragon_Devices_Desktop.png",
  "chaos-crew-3": "https://www-live.hacksawgaming.com/casino_thumbnails/1867_hero_Device_Desktop16x9.png",
  "le-king": "https://www-live.hacksawgaming.com/casino_thumbnails/1787_hero_Device_Desktop16x9%20(1).png",
  "the-luxe": "https://www-live.hacksawgaming.com/casino_thumbnails/1897_hero_Device_Desktop16x9%20(1).png",
  "jaws-of-justice": "https://www-live.hacksawgaming.com/casino_thumbnails/1946_hero_JawsOfJustice_Devices_Desktop.png",
  "bullets-and-bounty": "https://www-live.hacksawgaming.com/casino_thumbnails/1799_hero_Device_Desktop16x9%20(2).png",
  "miami-mayhem": "https://www-live.hacksawgaming.com/casino_thumbnails/1824_hero_Devices_Desktop16x9.png",
  "booze-bash": "https://www-live.hacksawgaming.com/casino_thumbnails/1783_hero_Device_Desktop16x9.png",
  "aiko-and-the-wind-spirit": "https://www-live.hacksawgaming.com/casino_thumbnails/1756_hero_AikoAndTheWindSpirit_Devices_Desktop.png",
  "invictus": "https://www-live.hacksawgaming.com/casino_thumbnails/1791_hero_Device_Desktop16x9%20(1).png",
  "freds-food-truck": "https://www-live.hacksawgaming.com/casino_thumbnails/1229_hero_Device_Desktop.png",
  "the-wildwood-curse": "https://www-live.hacksawgaming.com/casino_thumbnails/1891_hero_Device_Desktop16x9.png",
  "eye-of-medusa": "https://www-live.hacksawgaming.com/casino_thumbnails/1740_hero_EyeOfMedusa_Devices_Desktop.png",
  "marlin-masters-the-big-haul": "https://www-live.hacksawgaming.com/casino_thumbnails/1811_hero_Device_Desktop16x9%20(3).png",
  "rainbow-princess": "https://www-live.hacksawgaming.com/casino_thumbnails/1817_hero_RainbowPrincess_Devices_Desktop.png",
  "ultimate-slot-of-america": "https://www-live.hacksawgaming.com/casino_thumbnails/1760_hero_USA_Devices_Desktop.png",
  "spinman": "https://www-live.hacksawgaming.com/casino_thumbnails/1752_hero_Spinman_Devices_Desktop.png",
  "pray-for-three": "https://www-live.hacksawgaming.com/casino_thumbnails/1736_hero_Devices_Desktoppng.png",
  "danny-dollar": "https://www-live.hacksawgaming.com/casino_thumbnails/1685_hero_Devices_Desktop%20(1).png",
  "rad-maxx": "https://www-live.hacksawgaming.com/casino_thumbnails/1732_hero_Device_Desktop16x9.png",
  "reign-of-rome": "https://www-live.hacksawgaming.com/casino_thumbnails/1728_hero_Device_Desktop16x9.png",
  "fighter-pit": "https://www-live.hacksawgaming.com/casino_thumbnails/1715_hero_Device_Desktop.png",
  "wishbringer": "https://www-live.hacksawgaming.com/casino_thumbnails/1711_hero_Devices_Desktop%20(1).png",
  "life-and-death": "https://www-live.hacksawgaming.com/casino_thumbnails/1460_hero_LifeandDeath_Devices_Desktop%20(3).png",
  "dorks-of-the-deep": "https://www-live.hacksawgaming.com/casino_thumbnails/1430_hero_Device_Desktop%20(1).png",
  "strength-of-hercules": "https://www-live.hacksawgaming.com/casino_thumbnails/1697_hero_Device_Desktop.png",
  "hounds-of-hell": "https://www-live.hacksawgaming.com/casino_thumbnails/1666_hero_HoundsOfHell_Device_Desktop16x9.png",
  "frkn-bananas": "https://www-live.hacksawgaming.com/casino_thumbnails/1693_hero_Device_Desktop.png",
  "marlin-masters": "https://www-live.hacksawgaming.com/casino_thumbnails/1681_hero_Device_Desktop16x9%20(1).png",
  "phoenix-duelreels": "https://www-live.hacksawgaming.com/casino_thumbnails/1675_hero_Device_Desktop.png",
  "le-viking": "https://www-live.hacksawgaming.com/casino_thumbnails/1689_hero_Device_Desktop.png",
  "klowns": "https://www-live.hacksawgaming.com/casino_thumbnails/1438_hero_Device_Desktop16x9.png",
  "fire-my-laser": "https://www-live.hacksawgaming.com/casino_thumbnails/1640_hero_Device_Desktop16x9_euro.png",
  "donut-division": "https://www-live.hacksawgaming.com/casino_thumbnails/1608_hero_Device_Desktop16x9.png",
  "shaolin-master": "https://www-live.hacksawgaming.com/casino_thumbnails/1554_hero_ShaolinMaster_Devices_Desktop%20(1).png",
  "snow-slingers": "https://www-live.hacksawgaming.com/casino_thumbnails/1558_hero_SnowSlingers_Devices_Desktop%20(1).png",
  "duel-at-dawn": "https://www-live.hacksawgaming.com/casino_thumbnails/1620_hero_DuelAtDawn_Devices_Desktop.png",
  "wings-of-horus": "https://www-live.hacksawgaming.com/casino_thumbnails/1612_hero_Device_Desktop%2016_9.png",
  "rise-of-ymir": "https://www-live.hacksawgaming.com/casino_thumbnails/1616_hero_Device_Desktop%20(1)%20(1).png",
  "get-the-cheese": "https://www-live.hacksawgaming.com/casino_thumbnails/1580_hero_Device_Desktop16x9%20(1).png",
  "cloud-princess": "https://www-live.hacksawgaming.com/casino_thumbnails/1602_hero_Devices_Desktop%20(1).png",
  "le-pharaoh": "https://www-live.hacksawgaming.com/casino_thumbnails/1562_hero_Device_Desktop16x9.png",
  "evil-eyes": "https://www-live.hacksawgaming.com/casino_thumbnails/1570_hero_EvilEyes_Devices_Desktop.png",
  "octo-attack": "https://www-live.hacksawgaming.com/casino_thumbnails/1584_hero_Device_Desktop.png",
  "donny-dough": "https://www-live.hacksawgaming.com/casino_thumbnails/1530_hero_GameName_Devices_Desktop%20(2).png",
  "dragons-domain": "https://www-live.hacksawgaming.com/casino_thumbnails/1360_hero_Device_Desktop.png",
  "sixsixsix": "https://www-live.hacksawgaming.com/casino_thumbnails/1534_hero_Devices_Desktop.png",
  "tai-the-toad": "https://www-live.hacksawgaming.com/casino_thumbnails/1478_hero_TaiTheToad_Devices_Desktop.png",
  "twisted-lab": "https://www-live.hacksawgaming.com/casino_thumbnails/1514_hero_Devices_Desktop.png",
  "ze-zeus": "https://www-live.hacksawgaming.com/casino_thumbnails/1508_hero_Devices_Desktop.png",
  "cursed-crypt": "https://www-live.hacksawgaming.com/casino_thumbnails/1434_hero_Device_Desktop.png",
  "slayers-inc": "https://www-live.hacksawgaming.com/casino_thumbnails/1482_hero_Device_Desktop16x9%20(1).png",
  "jelly-slice": "https://www-live.hacksawgaming.com/casino_thumbnails/1452_hero_Device_Desktop.jpg",
  "keep-em": "https://www-live.hacksawgaming.com/casino_thumbnails/1494_hero_Devices_Desktop.png",
  "divine-drop": "https://www-live.hacksawgaming.com/casino_thumbnails/1490_hero_Device_Desktop.png",
};

// Features + bonus games lookup for Hacksaw slots
const HACKSAW_FEATURES = {
  "Red Rascal": {
    features: [
          {
                "title": "RASCAL RESPIN MODE",
                "description": "When 3 or more Rascal symbols land, they stick and trigger a Respin. The grid alternates between Coin Mode (awarding instant cash prizes) and Wild Mode (adding Wild multipliers) via the Pendulum. Respins continue until no new Rascal symbols land. If Rascal symbols form a 2x2, 3x3, 4x4, or 5x5 Colossal Rascal, additional bonuses are awarded. A 5x5 Colossal Rascal immediately awards the Max Win."
          },
          {
                "title": "PENDULUM",
                "description": "The Pendulum sits outside the grid and determines the active mode during Rascal Respins, switching between Coin Mode and Wild Mode on each spin. Coin Mode awards instant cash prizes; Wild Mode adds Wild symbols with multipliers to the grid."
          }
    ],
    bonus_games: [
          {
                "title": "READY TO RIOT",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 8 free spins with an increased chance of landing Rascal symbols!"
          },
          {
                "title": "AFTER DARK",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins where Rascal symbols that fail to trigger respins are stored in a Popcorn Bucket beside the reels. On the final free spin, up to 25 stored Rascal symbols are added back to the grid, triggering a major Rascal Respin setup."
          },
          {
                "title": "IGNITE THE NIGHT",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and at least 4 Rascal symbols are guaranteed on every spin. The Pendulum activates and awards its mode on every free spin without triggering normal Rascal Respins."
          }
    ],
  },
  "Rise of Fortuna": {
    features: [
          {
                "title": "FORTUNA WHEELS",
                "description": "Regular, Super and Epic Fortuna Wheels are triggered when a Fortuna symbol lands on the grid. When the Wheel activates, the arrow will land on 1 of the 12 slices containing additive and multiplicative Multipliers and Jackpot prizes. All values revealed on Wheels will be collected as cash prizes by the Cash Prize Bar!"
          },
          {
                "title": "CASH PRIZE BAR",
                "description": "The Cash Prize Bar is located outside of the grid. When there is a Fortuna Wheel on the grid, the value revealed from the Wheel will be collected as a cash prize by the Cash Prize Bar. When the Cash Prize Bar has collected the values from each Wheel, the final cash prize is rewarded as a multiple of your bet!"
          }
    ],
    bonus_games: [
          {
                "title": "LUCKY CHARM",
                "description": "Land 3 FS scatter symbols to trigger this bonus game.10 free spins with a higher chance of triggering Fortuna Wheels!!"
          },
          {
                "title": "SHE WHO SPINS",
                "description": "Land 4 FS scatter symbols to trigger this bonus game.10 free spins where all Fortuna Wheels will be Super or Epic!"
          },
          {
                "title": "FORTUNE IS BLIND",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round!This Hidden Epic Bonus gives you 10 free spins and every spin guarantees that 3 Fortuna Wheels are triggered!"
          }
    ],
  },
  "Sand and Ashes": {
    features: [
          {
                "title": "WILD SCARAB MULTIPLIERS",
                "description": "When landing, Wild Scarab Multipliers trigger a respin and have a Multiplier value of up to 200x. The respins continue until no new Wild Scarab Multipliers land. The Multiplier value is applied to all paylines that the Wild Scarab Multiplier is part of during the respin sequence!"
          },
          {
                "title": "FIRESTORMS AND SANDSTORMS",
                "description": "During respins, there is a chance that a Firestorm or Sandstorm is activated before any new symbols land. Each time a Sandstorm is activated, it nudges all symbols one reel to the left. When a Firestorm is activated, it increases the Multiplier values of all Wild Scarab Multipliers on the grid!"
          }
    ],
    bonus_games: [
          {
                "title": "DESERT FURY",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 8 free spins with a higher chance of landing Wild Scarab Multipliers. Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "STORMING SPHINX",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins where all Wild Scarab Multipliers become persistent and sticky, remaining on the grid for the entire bonus. Wilds do not trigger respins but Firestorms and Sandstorms can still activate every spin. Landing additional FS symbols awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          }
    ],
  },
  "Munchy Milo": {
    features: [
          {
                "title": "JOLT FRAMES",
                "description": "At the start of a spin, a Jolt Frame can land on a low-paying, high-paying or Wild symbol. After all wins have been handled, the Jolt Frame activates and spreads out in straight lines, turning all affected symbols into the same symbol type as the one it landed on."
          },
          {
                "title": "CHAIN REACTION",
                "description": "If a Jolt Frame spreads over a symbol of the same type as the one it landed on, a Chain Reaction activates, causing the Jolt Frame to continue spreading further in the same directions. Wild symbols with multipliers can also be created during this process."
          }
    ],
    bonus_games: [
          {
                "title": "LIFT OFF LUCK",
                "description": "This bonus game keeps the base game's mechanics, increasing the chances of landing Jolt Frames!"
          },
          {
                "title": "GRAVITY GROOVE",
                "description": "This bonus game keeps the mechanics of the LIFT OFF LUCK bonus. In addition, Wild symbols with multipliers will become Sticky and remain until the end of the bonus!"
          },
          {
                "title": "GOING BANANAS",
                "description": "This bonus game keeps the mechanics of the GRAVITY GROOVE bonus, with 1 Jolt Frame guaranteed on every spin!"
          }
    ],
  },
  "3 Cursed Chests: Hold & Win": {
    features: [
          {
                "title": "THREE CURSED CHESTS",
                "description": "Three Chests sit above the grid — Green, Red, and Blue. Each activates a different feature when triggered. The Green Chest awards Cursed Wilds Respins filled with Wild and Wild Multiplier symbols (2x-100x). The Red Chest triggers a Hold & Win-style Cursed Coins Bonus with sticky coin symbols. The Blue Chest awards Free Spins (Treasure Cove bonus) when 6+ FS symbols land simultaneously."
          },
          {
                "title": "CURSED FS",
                "description": "Cursed FS symbols can combine with FS Upgrade symbols to trigger the Ghostly Gallows bonus game instead of the standard Treasure Cove free spins."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - GHOSTLY GALLOWS",
                "description": "Trigger the Cursed FS and land FS and a FS Upgrade symbol in base game or TREASURE COVE bonus for 7-15 free spins, where landing a Pot symbol guarantees activation of the matching Chest!"
          }
    ],
  },
  "Le Bunny": {
    features: [
          {
                "title": "SUPER CASCADES",
                "description": "When a winning cluster forms, all winning symbols and all matching symbols anywhere on the grid are removed. New symbols drop in, potentially creating new wins. The sequence continues until no new wins occur."
          },
          {
                "title": "GOLDEN SQUARES",
                "description": "Every position where a winning symbol was removed becomes a Golden Square. When a Rainbow symbol lands, it activates all Golden Squares after cascades end, revealing Coins (cash prizes), Clover symbols (boost nearby or all Coin values), or Jackpot Eggs."
          },
          {
                "title": "JACKPOT EGGS",
                "description": "Jackpot Eggs can appear randomly or be revealed in Golden Squares, awarding one of four jackpot prizes: Mini (10x), Major (100x), Mega (1,000x), or Max Win (20,000x). Activated by Rainbow symbols."
          }
    ],
    bonus_games: [
          {
                "title": "SPELL OF LUCK",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins where Golden Squares remain highlighted (progressive) until activated by a Rainbow symbol. Minimum revealed Coin value is 1x bet. Landing additional FS symbols awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "SWIPING THE SWEETS",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins where Golden Squares remain persistent throughout the entire bonus, even after being activated. The same squares can be activated multiple times. Landing additional FS symbols awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "HIDDEN EPIC BONUS - RAINBOW RICHES",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins with the mechanics of Swiping the Sweets. In addition, a Rainbow symbol is guaranteed on every spin and only Silver or Gold Coins can be revealed (no Bronze Coins)."
          }
    ],
  },
  "Power of Ten": {
    features: [],
    bonus_games: [
          {
                "title": "WHOPPING WHEELS",
                "description": "Activate this bonus with 3 refilling lives by landing 4 FS scatter symbols at the same time during the base game. At the start of this bonus, you will get 3 refilling lives that represent 3 free spins. When a Power Wheel lands on the grid, the lives will be refilled and new free spins are awarded. When a Power Wheel lands on the grid, it becomes Sticky and remains inactive on that position until the end of the bonus. After the final life has been used, all Power Wheels that are currently on the grid will activate and award their combined Cash Prizes. Regular wins will be awarded after every free spin. If there is a full grid of Power Wheels, the bonus will end immediately by the Wheels activating and awarding their combined Cash Prizes."
          },
          {
                "title": "HIDDEN EPIC BONUS - ON THE HOUSE",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus keeps the mechanics of the DECK OF FORTUNE bonus, with at least one Power Wheel guaranteed on every reel on every spin! Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins"
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
  },
  "Dynasty of Death": {
    features: [
          {
                "title": "CASH PRIZES",
                "description": "A Cash Prize can be connected to the two duelists on the DuelReel. The Cash Prize will be awarded if the duelist it is connected to wins. When all regular wins have been handled, the Cash Prize will be awarded as a multiple of your bet. Cash Prizes range from 2x to Max Win!"
          }
    ],
    bonus_games: [
          {
                "title": "KING'S DEFENCE",
                "description": "Land 3 FS symbols to trigger this bonus game. 10 free spins with an increased chance of DuelReels!"
          },
          {
                "title": "QUEEN'S DOMINION",
                "description": "Land 4 FS symbols to trigger this bonus game. 10 free spins with at least 1 dueling Cash Prize on every DuelReel!"
          },
          {
                "title": "IMMORTAL MATE",
                "description": "Land 5 FS symbols to trigger the ultimate bonus round! In this Hidden Epic Bonus, 2 VS symbols are guaranteed on every spin and DuelReels will have two dueling Cash Prizes!"
          }
    ],
  },
  "Marlin Masters Atlantis": {
    features: [
          {
                "title": "MARLIN & JACKPOT MARLIN SYMBOLS",
                "description": "Marlin symbols display cash values that represents the payout rewarded if the symbol is part of a LootLine or is collected by a Fisherman. If Jackpot Marlins are part of a LootLine or are collected by a Fisherman, one of the four jackpot prizes will be revealed on the sign outside of the grid, with the possibility of reeling in the max win!"
          },
          {
                "title": "FISHERMAN SYMBOLS",
                "description": "When a Fisherman symbol lands, it will collect all Marlin and Jackpot Marlin symbols on the grid. The Fisherman itself can also land with a Multiplier value of up to x20. The Multiplier value will be applied on the cash value of the collected Marlin symbols, leading to staggering final rewards!"
          }
    ],
    bonus_games: [
          {
                "title": "SUNKEN EMPIRE",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with a progressive Trident Bar and upgrade levels!"
          },
          {
                "title": "POSE FOR POSEIDON",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 15 free spins with a higher chance of reaching upgrade levels!"
          }
    ],
  },
  "Magic Piggy OG": {
    features: [
          {
                "title": "MAGIC PIGGY AND MAGIC HAT",
                "description": "When a Magic Hat symbol lands, all Magic Piggy symbols on the grid activate simultaneously. Each Magic Piggy reveals either a Wild symbol, a Bill Stack cash prize (1x-500x bet), or a Multiplier Coin (x2-x5 that applies to selected cash values)."
          },
          {
                "title": "PIGGY POINTS",
                "description": "In the bonus games, stars and super stars land above the reels and fill a Piggy Points meter for each reel. When a Magic Hat lands during the bonus, Magic Piggy symbols are placed on reels based on accumulated Piggy Points before activating."
          }
    ],
    bonus_games: [
          {
                "title": "PIG BONUS",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with the Piggy Points system active above the reels. Stars and Super Stars accumulate points; when a Magic Hat lands, Piggy Points are converted to Magic Piggy symbols. Piggy Points reset after each Magic Hat activation."
          },
          {
                "title": "EPIG BONUS",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with progressive Piggy Points that do not reset after each Magic Hat activation, allowing the meter to grow throughout the bonus for more powerful Magic Piggy placements."
          }
    ],
  },
  "Pray for Six": {
    features: [
          {
                "title": "TOTAL WIN BAR",
                "description": "All wins during each spin are collected in the Total Win Bar located outside the grid. The collected win is awarded when all cascades have ended."
          },
          {
                "title": "WAILING WHEELS",
                "description": "When a '6' symbol lands and there is at least one win on the grid, it activates a Wailing Wheel. The Wheel spins and lands on a Cash Prize (Bronze 1x-4x, Silver 5x-20x, Gold 25x-666x), an Additive Multiplier (2x-333x), a Multiplicative Multiplier (x2-x33), or a MAX WIN. Multipliers are collected on the Total Win Bar and applied to the final win."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - CRADLE OF CHAOS",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus keeps the mechanics of the UNHOLY OFFSPRING bonus. In addition, the Total Win Bar is progressive, collecting wins and Multipliers until the end of the bonus. Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "HIDDEN EPIC BONUS - PLAYTIME IN PURGATORY",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus keeps the mechanics of the UNHOLY OFFSPRING bonus. In addition, at least two '6' symbols are guaranteed on every spin. Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Only one '6' symbol can land on a reel at a time."
          }
    ],
  },
  "Dark Spiral": {
    features: [
          {
                "title": "SUMMONING SYMBOLS",
                "description": "Summoning symbols land in three different sizes and reveal different stacks of the same paying or Wild symbol. When Summoning symbols are part of a win, they stay on the grid as other winning symbols cascade out, and new symbols are revealed for new possible wins. If a Wild symbol lands directly above or below a Summoning symbol on the same reel, the Summoning symbol increases in size by expanding to cover that Wild symbol."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - SHATTERED",
                "description": "Land 3 FS scatter symbols to trigger. This bonus keeps the base game's mechanics, with an increased chance of landing Summoning symbols!"
          },
          {
                "title": "BONUS GAME - TWISTED",
                "description": "Land 4 FS scatter symbols to trigger. This bonus keeps the mechanics of the SHATTERED bonus. All Summoning symbols are Sticky and reveal new stacks with new symbols on every spin!"
          },
          {
                "title": "HIDDEN EPIC BONUS - TORTURED",
                "description": "Land 5 FS scatter symbols to trigger. The Hidden Epic Bonus is an exclusive bonus game that can't be purchased. Players must trigger it purely by chance in the base game, which adds to its allure. It keeps the same mechanics as the TWISTED bonus but consistently delivers powerful payouts for a bigger chance at an Epic Win!"
          }
    ],
  },
  "Epic Bullets and Bounty": {
    features: [
          {
                "title": "OUTLAW DUELREELS™",
                "description": "A VS symbol expands if part of a win. Expanded DuelReels™ cover an entire reel, turning it into a Wild DuelReel. They start a Duel between 2 duelists. The winning duelist's Multiplier ranging from 2x up to 100x applies to all wins on that reel. If more than one DuelReel is part of the same win, multipliers are added together."
          },
          {
                "title": "BOUNTY DUELREELS™",
                "description": "When a Bounty VS symbol expands, the Duel is between a Bounty Hunter and an Outlaw. If the Bounty Hunter wins, she collects the Outlaw's multiplier and duels again, up to 3 times. The combined Multiplier is applied to that entire reel. The latest Bounty Hunter Multiplier to win becomes the starting multiplier for the next Bounty Hunter duel in the progressive bonus."
          },
          {
                "title": "EPIC VERSION",
                "description": "This is the Epic version of Bullets and Bounty with higher volatility, a Gamble Upgrade to the Epic Bonus, higher chance of triggering a Bonus in BONUSHUNT FEATURESPINS, and a buyable Epic Bonus."
          }
    ],
    bonus_games: [
          {
                "title": "TRUE GRIT",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. Choose between a Gamble or 10 free spins with Progressive Bounty Hunter Multipliers!"
          },
          {
                "title": "FOUR SHOTS TO FREEDOM",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. Choose between a Gamble or 10 free spins with a Bullets & Bounty Bar that awards DuelSpins and VS symbols!"
          },
          {
                "title": "MAKE HER DAY",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Epic Bonus gives you 10 free spins and starting the first spin at DuelSpin Level 1. It also has Progressive Bounty Hunter Multipliers!"
          }
    ],
  },
  "Zeus Ze Zecond": {
    features: [
          {
                "title": "WONDER REVEAL",
                "description": "Wonder symbols land vertically on reels 2, 3, 4, and 5, revealing high-paying symbols, Wilds, or Wonder Reels. Wins with revealed symbols trigger sticky respins, continuing until no new wins or a Wonder Reel appears. Wonder Reels can reveal Coins, Diamonds, Clovers, and Pots of Olympus — Coins and Diamonds award cash prizes, Clovers multiply values, and Pots of Olympus collect everything into one total."
          },
          {
                "title": "WONDER METER",
                "description": "In the GODLY ASCENSION bonus, a Wonder Meter is added outside the grid that fills with Wonder symbols to trigger reward spins with a full grid of Wonder symbols. The minimum Coin type increases with each reward spin, starting at Bronze and progressing to higher values."
          }
    ],
    bonus_games: [
          {
                "title": "GATES OF HADES",
                "description": "This bonus game keeps the base game's mechanics, and all Wonder symbols are Sticky and remain in the same position throughout the bonus!"
          },
          {
                "title": "GODLY ASCENSION",
                "description": "This bonus game keeps the base game's mechanics, adding a Wonder Meter outside the grid that fills with Wonder symbols to trigger award spins with a full grid of Wonder symbols! The minimum Coin type increases with each reward spin, starting at Bronze and progressing to higher values."
          },
          {
                "title": "ZEUS UNLEASHED",
                "description": "This bonus keeps the mechanics of the GATES OF HADES bonus. In addition, reels 2, 3, 4, and 5 are filled with Wonder symbols from the start! Low-paying symbols cannot land in this bonus."
          }
    ],
  },
  "Eternal Duel": {
    features: [
          {
                "title": "DUELREELS™",
                "description": "When a VS symbol lands, it expands into a DuelReel if part of a winning combination once expanded. DuelReels™ cover the entire reel and trigger a Duel between Zeus and Hades. Each DuelReel has one Multiplier assigned to each duelist. The winning duelist's Multiplier is applied across that entire DuelReel."
          },
          {
                "title": "FS DUELREELS™",
                "description": "When 3 or more FS symbols land on the grid, they expand into FS DuelReels. Each FS DuelReel has two free spin values that duel against each other. The winning free spin value of each FS DuelReel is added together to determine the bonus free spins. Bonus Upgrades can also be triggered: 3 FS DuelReels + 1 Upgrade = ZEUS FURY; 3 FS DuelReels + 2 Upgrades = ETERNAL DESTRUCTION; 4 FS DuelReels + 1 Upgrade = ETERNAL DESTRUCTION."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - HADES HAVOC",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. At least 6 free spins with a top and bottom progressive Reel Multiplier!"
          },
          {
                "title": "BONUS GAME - ZEUS FURY",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. At least 8 free spins where Wild symbols get Multipliers from the Reel Multipliers!"
          },
          {
                "title": "HIDDEN EPIC BONUS - ETERNAL DESTRUCTION",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you at least 10 free spins and at least 1 Wild, 1 Relic or Cyclops symbol and 1 DuelReel are guaranteed on every spin!"
          }
    ],
  },
  "Le Digger": {
    features: [
          {
                "title": "LAYERS AND DYNAMITE",
                "description": "There are three Layers, the two first reveal paying, FS and Wild Dynamite symbols. Layer 3 has only Golden Reveals. On wins, all regular paying symbols of the type that were part of the winning combination are removed from the grid, including one Layer of the grid behind those symbols. After new Layers and new symbols are revealed, there is a chance that Smokey throws Dynamite onto the grid. Dynamite will remove affected symbols and one Layer. If Dynamite affects a Wild Dynamite, all symbols in a 3x3 square around that Wild Dynamite is removed."
          },
          {
                "title": "GOLDEN REVEALS",
                "description": "When Layer 3 is reached those positions will reveal Coins, Green Clover, Gold Clover and Collector symbols. Coins award instant cash prizes. Clovers boost the value of nearby Coins or all Coins on the grid. Collectors collect Coins and activated Collectors."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS - TOMB SERVICE",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. Choose between a Gamble or 10 free spins with a Dynamite Collector that activates at the end of the bonus!"
          },
          {
                "title": "BONUS - DIG IT",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. Choose between a Gamble or 10 free spins with a Blast Bar that, when full, upgrades the minimum Coin type on reveals!"
          },
          {
                "title": "HIDDEN EPIC BONUS - GOLD DIGGER",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and Smokey will throw 5 Dynamites onto the grid every spin!"
          }
    ],
  },
  "Dusk Princess": {
    features: [
          {
                "title": "SUPER CASCADES",
                "description": "When a winning combination occurs, all regular paying symbols of the winning type are removed from the grid and new symbols drop down to fill the empty spaces."
          },
          {
                "title": "BLESSING BAR",
                "description": "A Blessing Bar is located outside the grid and awards Wild symbols with Multipliers when full. When a winning combination lands, the Blessing Bar starts to fill — an 8-symbol win fills it the first time, then the required amount increases by +2 each time. When full, it awards 3 Wild symbols with a Multiplier value each. On each subsequent activation in the same spin, the number of Wilds may increase by +1 or the Multiplier value may increase, up to 500x."
          }
    ],
    bonus_games: [
          {
                "title": "THE LUNAR COURT",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus keeps mechanics of THE DUSK COURT bonus. In addition, the awarded Wild symbols will start at 4 and the Multiplier value will start at 5x. A 15-symbol win is needed to fill the Blessing Bar the first time. Then the amount of winning symbols needed will increase by +3 symbols each time you fill the Bar."
          },
          {
                "title": "HIDDEN EPIC BONUS - THE NIGHT COURT",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus keeps the base game's mechanics. In addition, the Blessing Bar will stay full throughout the bonus and activate once on every free spin after regular wins have been handled. The awarded Wild symbol will start at 6 and the Multiplier will start at 10x. The awarded Wild or Multiplier value will increase after the Blessing Bar activates on every spin. SPECIAL SYMBOLS: FS symbols cannot land in THE DUSK COURT, THE LUNAR COURT and THE NIGHT COURT bonus."
          }
    ],
  },
  "Circle of Life": {
    features: [
          {
                "title": "TREE OF LIFE",
                "description": "When a Tree symbol lands, it acts as a Wild revealing a Multiplier value (2x-100x). If part of a win, it triggers a Respin and expands upward by one row into a Tree of Life. Respins continue as long as new wins occur. Multiple Tree symbols in the same win have their values added together."
          },
          {
                "title": "CIRCLE OF LIFE",
                "description": "When a Tree of Life fully expands from the bottom to the top row of a reel, the Circle of Life wheel is triggered. It spins and lands on Additive Multipliers (2x-100x), a Multiplicative value (x2), or a Skull which ends it. The wheel keeps spinning and adding to the Tree's multiplier until the Skull is hit."
          },
          {
                "title": "SPREADING FS SYMBOLS",
                "description": "When 3 or more FS scatter symbols land simultaneously, each FS symbol expands across its entire reel. Every covered position represents +1, +2, or +3 free spins, and the total determines the bonus spins awarded."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - ETERNAL",
                "description": "Activate this bonus with free spins by landing 4 expanding FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the ORIGIN bonus. In addition, a reel is activated when a Circle of Life is triggered on that reel. The activated reel will stay active throughout the bonus and guarantees that a Tree symbol lands on that reel every spin. Landing additional expanding FS symbols in the bonus awards extra free spins: Each expanding FS symbol awards at least +4 free spins and max +12 free spins."
          },
          {
                "title": "HIDDEN EPIC BONUS - REBIRTH",
                "description": "Activate this bonus with free spins by landing 5 expanding FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the ETERNAL bonus. In addition, reels 2 and 4 are activated from the start. Expanding FS symbols cannot land in this bonus."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Tree symbol and an FS symbol cannot land on the same reel at the same time. Only 3 expanding FS symbols can land per spin in the ORIGIN and the ETERNAL bonus."
          }
    ],
  },
  "Toshi Ways Club": {
    features: [
          {
                "title": "FLASH FRAMES",
                "description": "Flash Frames can land on the grid at the start of a spin. They determine the size of paying symbols by acting as dividers — symbols are cut to fill the spaces between Flash Frames, creating different-sized symbols that each count as one symbol toward wins."
          },
          {
                "title": "SWAP SYMBOLS",
                "description": "When a Swap symbol lands, it replaces all Flash Frames (and itself) with 1 paying symbol, cutting all Flash Frames into the smallest possible symbol size, creating additional winning symbols. Only 1 Swap or Slicing Swap symbol can land on the grid at a time."
          }
    ],
    bonus_games: [
          {
                "title": "SUCKR PUNCH",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the RETRO REBOOT bonus. In addition, a Slicing Swap scatter symbol can land. Slicing Swap symbols activate when there are Flash Frames on the grid. When activated, the Slicing Swap symbol will replace all Flash Frames, including itself, with 1 paying symbol. It will also cut all the Flash Frames and itself into the smallest possible symbol size, creating additional winning symbols. Only 1 Swap or Slicing Swap symbol can land on the grid at the same time. Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "TOKYO DATA DRIFT",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the SUCKR PUNCH bonus. In addition, 1 Swap or Slicing Swap symbol is guaranteed on every free spin. FS symbols cannot land in this bonus."
          },
          {
                "title": "RETRO REBOOT",
                "description": "Base game bonus with Flash Frames mechanic."
          }
    ],
  },
  "Deal With Death": {
    features: [
          {
                "title": "JOKER SYMBOL",
                "description": "The Joker symbol is a Wild that substitutes for all paying symbols. It also activates a special mechanic when it lands — it can turn adjacent low-paying symbols into higher-paying symbols or award a cash prize based on a poker hand evaluation of the symbols on the grid."
          },
          {
                "title": "POKER HAND PAYTABLE",
                "description": "During the Dealbreaker bonus, a progressive Poker Hand paytable is active. Landing matching high-paying symbols that form poker hand combinations awards escalating multipliers based on the strength of the hand formed."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - DEAL WITH IT",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with an increased chance of landing a JOKER symbol!"
          },
          {
                "title": "BONUS GAME - DEALBREAKER",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with a progressive Poker Hand paytable!"
          },
          {
                "title": "HIDDEN EPIC BONUS - FOOL'S GOLD",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and every spin guarantees 1 Joker!"
          }
    ],
  },
  "Le Santa": {
    features: [
          {
                "title": "GOLDEN SQUARES",
                "description": "When a winning combination hits, the squares behind the winning symbols become Golden Squares. If a Rainbow symbol is present, it activates those Golden Squares after wins are collected. They can reveal Coins, Clover symbols, Santa Sacks, or Jackpot Boxes. Coins award instant cash prizes. Clovers boost the value of nearby Coins or all Coins on the grid. Santa Sacks collect and store the total value of all visible Coins and other Santa Sacks."
          },
          {
                "title": "JACKPOT BOXES",
                "description": "Jackpot Boxes can pop up during a spin or be revealed in Golden Squares, each bringing 1 of 4 exciting jackpot prizes based on your bet. If a Jackpot Box lands with a Rainbow, it activates! Each Box has its own jackpot, if you land more than 1 they all combine for a bigger win!"
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - SLEIGHING IT",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins where Golden Squares remain highlighted even after being activated!"
          },
          {
                "title": "HIDDEN EPIC BONUS - WRECK THE HALLS",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and every spin guarantees 1 Rainbow!"
          }
    ],
  },
  "Army of Ares": {
    features: [
          {
                "title": "DISC MULTIPLIERS AND BATTLE HORSE",
                "description": "Disc Multiplier symbols are wild multipliers that can land on the grid. Battle Horse symbols are special multiplier symbols. When these land during the FEAR AND FLAME bonus or WRATH AND RUIN bonus, they refill lives to 3 and increase the Reel Multipliers above each reel. Only dead symbols, Disc Multipliers, and Battle Horses can land in the bonus games."
          },
          {
                "title": "REEL MULTIPLIERS",
                "description": "In the bonus games, a Reel Multiplier is displayed above each reel, starting at 1x. Each time a Disc Multiplier or Battle Horse symbol lands, all Reel Multipliers increase. At the end of the bonus, all Reel Multipliers are combined and applied to the final win."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - WRATH AND RUIN",
                "description": "Activate this bonus with 3 refilling lives by landing 4 FS scatter symbols at the same time during the base game. In this bonus game, lives are displayed on a Life Meter outside the grid, where 3 lives equal 3 free spins. When any Disc Multiplier or Battle Horse symbol lands, the lives and free spins are refilled to 3; once all lives are consumed, the bonus ends. During this bonus, a Reel Multiplier above each reel starts at 1x. Only dead symbols, Disc Multipliers, and Battle Horses can land."
          },
          {
                "title": "HIDDEN EPIC BONUS - ARES ASCENDS",
                "description": "Activate this bonus with 3 refilling lives by landing 5 FS scatter symbols at the same time during the base game. This bonus keeps the mechanics of the WRATH AND RUIN bonus. In addition, this bonus guarantees a full grid with Disc Multipliers and 1 Battle Horse symbol from the start! FS symbols cannot land in FEAR AND FLAME, WRATH AND RUIN, and the ARES ASCENDS bonus."
          }
    ],
  },
  "Superstar Sevens": {
    features: [
          {
                "title": "CASCADE COUNTER",
                "description": "When the Cascade Counter is activated, all the removed non-winning symbols are converted into a Multiplier value. In addition, each symbol that is removed adds on to an Additive Multiplier. When all wins and Super Cascades have been handled the final win will be multiplied with the Multiplier value, boosting your chances of a thrilling win!"
          },
          {
                "title": "LIGHTNING SYMBOLS",
                "description": "To activate the Cascade Counter you need to land a Lightning symbol and a win on the same spin. If you're able to land an Epic Lightning symbol and there's a win in the Total Win Bar an additional Multiplier will be activated, boosting your winnings to new heights!"
          }
    ],
    bonus_games: [
          {
                "title": "REEL CHARGE",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. This bonus gives you 10 free spins with increased chances of landing Lightning symbols!"
          },
          {
                "title": "LUCKY STRIKE",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. This bonus gives you 10 free spins with a Lightning symbol landing on EVERY spin!"
          },
          {
                "title": "JUICY JOLTZ",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! The Hidden Epic Bonus gives you 10 free spins with guaranteed Lightning symbol and a progressive Total Win Bar!"
          }
    ],
  },
  "Steamrunners": {
    features: [
          {
                "title": "GREEN GAS CANISTERS",
                "description": "A Green Gas Canister transforms itself and adjacent low-paying or Wild symbols into Wilds, spreading horizontally and vertically if part of a win, and continues spreading if symbols are connected!"
          },
          {
                "title": "PURPLE GAS CANISTERS",
                "description": "When a Purple Gas Canister lands, it transforms itself and all low-paying and Wild symbols into Wilds if part of a win. Transformed Wilds may gain random Multiplier of up to 200x! Wild symbols affected by Gas Canisters will always get a 2x Multiplier value!"
          }
    ],
    bonus_games: [
          {
                "title": "SKY CITY",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 8 free spins with Sticky Wild Multipliers!"
          },
          {
                "title": "GASLIGHT DISTRICT",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with Sticky Wild Multipliers and a guaranteed Wild on every spin!"
          },
          {
                "title": "COURT OF THE HIGH STEAM",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and 1 Gas Canister on every spin!"
          }
    ],
  },
  "Hot Ross": {
    features: [
          {
                "title": "RO$ AND HOT RO$ SYMBOLS",
                "description": "Ro$ symbols expand upward into a Wild Reel if part of a winning combination, acting as Wilds with a random multiplier of up to 200x. Hot Ro$ symbols move to the top of the reel and expand downward, also triggering adjacent Ro$ symbols to expand. All expanded symbols act as Wilds and can trigger multipliers."
          }
    ],
    bonus_games: [
          {
                "title": "CAT CALLS",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with an increased chance of landing Ro$ symbols. Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "NINE LIVES",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins where reels become activated when a Ro$ or Hot Ro$ symbol lands on them. Activated reels guarantee that one Ro$ or Hot Ro$ symbol lands on that reel on every subsequent spin. Activated reels remain active throughout the bonus. Landing additional FS symbols awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "HIDDEN EPIC BONUS - BIGG BOSS ROSS",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and at least 2 Hot Ro$ symbols and 1 Wild symbol are guaranteed on every spin."
          }
    ],
  },
  "Sun Princess": {
    features: [
          {
                "title": "SUN RAY FRAMES",
                "description": "Sun Ray Frames can land on the grid and spread horizontally or vertically, turning all symbols they cross into the same high-paying symbol type. When a Sun Ray Frame spreads through a Wild symbol, that Wild receives a 2x Multiplier and becomes Sticky, remaining on the grid with that Multiplier until the end of any bonus. The Multiplier increases by 2x every time the Wild is hit by another Sun Ray Frame."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - SUNFIRE PALACE",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the SOLARIS GROVE bonus, in addition when a Sun Ray Frame spreads through a Wild symbol, that Wild symbol receives a 2x Multiplier and becomes Sticky and remains on the grid with a Multiplier until the end of the bonus! The Multiplier will increase by 2x every time that Wild symbol is hit by a Sun Ray Frame. Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "HIDDEN EPIC BONUS - GOLDEN ECLIPSE",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the SUNFIRE PALACE bonus, with at least 1 Sun Ray Frame guaranteed on every spin! Landing additional FS symbols at the same time in the bonus awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable. Sun Ray Frames cannot land on FS symbols."
          }
    ],
  },
  "The Count": {
    features: [
          {
                "title": "EXPANDED BLOODY WILDS",
                "description": "When a Blood symbol lands, it expands downward into a Bloody Wild if it forms a winning combination once expanded. Expanded Bloody Wilds act as Wilds or reveal a multiplier value of up to 500x, giving your win a bloody boost!"
          },
          {
                "title": "WILD BAT SYMBOLS",
                "description": "When a Wild Bat symbol lands, it acts as a Wild or reveals a multiplier value of up to 500x. When an Epic Wild Bat symbol lands, it has a multiplier of up to 500x and spreads its value to all expanded Bloody Wilds and other Wild Bat symbols on the grid."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - BAT TO THE BONE",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with a bigger chance of landing Wild Bat symbols!"
          },
          {
                "title": "BONUS GAME - REST IN PIECES",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with a Symbol Counter that turns low-paying symbols into Wild Bat symbols when full!"
          },
          {
                "title": "HIDDEN EPIC BONUS - COUNT ON BLOOD",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins an increased chance of landing Epic Wild Bat symbols! Guaranteed at least 5 Wild Bat symbols on each spin!"
          }
    ],
  },
  "Donny and Danny": {
    features: [
          {
                "title": "LOOTLINES AND CASH BOARD",
                "description": "A LootLine is formed when a winning payline contains 3 or more Donny symbols, or a combination of Donny and Danny symbols. Each Donny symbol in the LootLine selects a random value from the Cash Board (18 prize values ranging from 1x to 12,500x bet). The combined selected values form the LootLine payout."
          },
          {
                "title": "DOLLAR-REELS",
                "description": "When a Danny symbol lands as part of a LootLine win, it expands upward into a Wild Dollar-Reel. Each position covered can reveal a multiplier (up to x10) and contribute to LootLines in the same spin."
          },
          {
                "title": "BOOSTER SYMBOLS",
                "description": "In the Make it Reign and Cash Kings Forever bonuses, Booster symbols land and remove the current lowest value from the Cash Board, progressively upgrading the minimum available prize throughout the feature."
          }
    ],
    bonus_games: [
          {
                "title": "ROLLIN' IN DOUGH",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with an increased chance of landing Donny symbols for more Cash Board value selections."
          },
          {
                "title": "MAKE IT REIGN",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with all mechanics from Rollin' in Dough, plus Booster symbols that remove the lowest value from the Cash Board when they land."
          },
          {
                "title": "HIDDEN EPIC BONUS - CASH KINGS FOREVER",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins with the mechanics of Make it Reign. On the final spin, a full grid of Donny symbols is guaranteed, creating the maximum possible LootLine setup."
          }
    ],
  },
  "Spear of Athena": {
    features: [
          {
                "title": "FLAMING FRAMES AND FORTUNE SYMBOLS",
                "description": "Flaming Frames can land on the grid and activate when a Fortune symbol also lands. When activated, the Flaming Frame highlights its grid position as a Golden Square. Fortune symbols can additionally reveal Shield symbols that boost the values of highlighted positions."
          },
          {
                "title": "GOLDEN SQUARES",
                "description": "Activated Golden Squares reveal Coins, Clover symbols, or Shield symbols when a Fortune symbol activates them. Coins award cash prizes, Clovers multiply nearby or all Coin values, and Shields can boost revealed values."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - OMEN OF WAR",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins where Flaming Frames remain highlighted even after being activated!"
          },
          {
                "title": "BONUS GAME - SIEGE OF TROY",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins, and when a Fortune symbol activates, at least 1 Shield symbol is revealed!"
          },
          {
                "title": "HIDDEN EPIC BONUS - ATHENA ASCENDS",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and a Fortune symbol is guaranteed on each spin!"
          }
    ],
  },
  "Le Fisherman": {
    features: [
          {
                "title": "GOLDEN SQUARES AND RAINBOW",
                "description": "When a winning cluster forms, the positions of winning symbols become Golden Squares. When a Rainbow symbol lands, it activates all Golden Squares, revealing Bronze Coins (0.2x-4x), Silver Coins (5x-20x), Gold Coins (25x-500x), Clover symbols (multipliers for nearby or all Coins), or Baskets (collect all visible Coin values)."
          },
          {
                "title": "BIG CATCH BAR",
                "description": "A Big Catch Bar is located outside the grid that fills during bonus rounds. When full, it upgrades the power of Rainbow symbols, making them more effective at activating Golden Squares."
          }
    ],
    bonus_games: [
          {
                "title": "ON THIN ICE",
                "description": "Land 3 FS scatter symbols to trigger. 10 free spins where Golden Squares remain highlighted until activated and a Big Catch Bar that gives more powerful Rainbows!"
          },
          {
                "title": "SLIPPERY WHEN WET",
                "description": "Land 4 FS scatter symbols to trigger. 10 free spins with a Big Catch Bar and Golden Squares remain highlighted even after being activated!"
          },
          {
                "title": "SMOKEY UNDER WATER",
                "description": "Land 5 FS scatter symbols to trigger! This Hidden Epic Bonus gives you 10 free spins and the Big Catch Bar stays at the highest level!"
          }
    ],
  },
  "Le Cowboy": {
    features: [
          {
                "title": "REVOLVER CYLINDER",
                "description": "The Revolver Cylinder mechanic activates when a Cylinder symbol lands on the grid. It spins and lands on a Cash Prize, Multiplier, or a special outcome. Reload symbols can refill the cylinder for additional spins. The combined Cylinder values contribute to the total win."
          },
          {
                "title": "BULLET COLLECTOR",
                "description": "In the TRAIL OF TRICKERY and PISTOLS AT DAWN bonuses, a Bullet Collector is displayed outside the grid. Each win adds 1 bullet to the Collector. When activated (on the last free spin or progressively), the collected bullets apply their combined value as a multiplier to the final win."
          }
    ],
    bonus_games: [
          {
                "title": "HIGH NOON SALOON",
                "description": "Base game bonus with Revolver Cylinder mechanic. Bonus Gamble available."
          },
          {
                "title": "BONUS GAME - TRAIL OF TRICKERY",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This brings you into a Bonus Gamble, where you have a choice to either play the TRAIL OF TRICKERY bonus game or to Gamble. This bonus keeps the mechanics of the HIGH NOON SALOON bonus. In addition, there will be a Bullet Collector displayed outside the grid. Each win will add 1 bullet to the Bullet Collector. On the last free spin, the Bullet Collector will activate after all Revolver Cylinders and Reload symbols have activated."
          },
          {
                "title": "HIDDEN EPIC BONUS - PISTOLS AT DAWN",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus keeps the mechanics of the TRAIL OF TRICKERY bonus. In addition, the Bullet Collector is progressive and will start at 5 and trigger on every free spin after all Revolver Cylinders and Reload symbols have activated. Silver Coins are the lowest Coin type that will land in this bonus! FS symbols cannot land in this bonus."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable. FS symbols cannot land at the same time as Revolver Cylinders."
          }
    ],
  },
  "Le Zeus": {
    features: [
          {
                "title": "MYSTERY SYMBOLS AND WONDER REVEAL",
                "description": "Mystery symbols can land on reels 2-5 and reveal high-paying symbols, Wilds, or Coins/Diamonds when activated. In the base game, they trigger respins with sticky symbols when part of a win. In the MYTH-TAKEN IDENTITY bonus, a Mystery Meter fills when Mystery symbols land, triggering reward spins with a full grid of Mystery symbols."
          },
          {
                "title": "MYSTERY METER",
                "description": "In the MYTH-TAKEN IDENTITY bonus, a Mystery Meter is added outside the grid. When Mystery symbols land, the meter fills. A full meter triggers reward spins with a full grid of Mystery symbols where the minimum Coin type increases with each reward spin."
          }
    ],
    bonus_games: [
          {
                "title": "MYTH-TAKEN IDENTITY",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 8 free spins with a Mystery Meter that awards additional spins and full grid Mystery symbols!"
          },
          {
                "title": "GODS JUST WANNA HAVE FUN",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! 8 free spins with Sticky Mystery symbols and 4 out of 6 reels have Mystery symbols from the start!"
          },
          {
                "title": "MYSTERY METER",
                "description": "In the MYTH-TAKEN IDENTITY bonus a Mystery Meter is added outside the grid that fills up when Mystery symbols land. Triggering reward spins with a full grid of Mystery symbols where the minimum Coin type increases with each reward spin!"
          }
    ],
  },
  "Stormborn": {
    features: [
          {
                "title": "THUNDER RESPINS",
                "description": "When 5 or more Coin symbols land, you trigger Thunder Respins! Only Coins, Collector Chests, and dead symbols appear during this and stay in place. Keep landing Coins or Collector Chests to keep the Respins going. When it ends, all Coins reveal cash prizes based on your bet, Bronze, Silver, and Gold for massive payouts up to 500x! Collector Chests scoop up all Coin values and if they come with a Multiplier, they boost your total before collecting."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - STORMBREAKER",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 3 free spins with Thunder Respins and at least 2 Coins and 1 Collector Chest!"
          },
          {
                "title": "BONUS GAME - THE WILD STORM",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with Sticky Wilds and Wild God Reels with Multipliers!"
          },
          {
                "title": "BONUS GAME - LEGACY OF LIGHTNING",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 3 free spins with Thunder Respins and at least 4 Coins, 1 Collector Chest and Mjolnir symbols!"
          },
          {
                "title": "BONUS GAME - HAMMER OF THE HEAVENS",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins where Mjolnir symbols temporarily multiply Wilds!"
          },
          {
                "title": "HIDDEN EPIC BONUS - BLESSINGS OF THE BIFROST",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 5 free spins with Thunder Respins and at least 5 Coins, 1 Collector Chest and 1 Mjolnir symbol!"
          }
    ],
  },
  "Tiger Legends": {
    features: [
          {
                "title": "EXPANDING LEGENDARY FRAME WARRIORS",
                "description": "When a Legendary Frame lands on a high-paying Warrior symbol, it can expand into a Legendary Frame Warrior, if it's part of a win. Legendary Frame Warriors expand upward and boosts your chance of a win!"
          }
    ],
    bonus_games: [
          {
                "title": "CLAWS OF DESTINY",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with an even bigger chance of landing Legendary Frame Warriors!"
          },
          {
                "title": "BATTLE OF THE BEASTS",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins and when a Legendary Frame Warrior expands, all matching symbols expand too!"
          }
    ],
  },
  "Bash Bros": {
    features: [
          {
                "title": "BASH AND SMASH",
                "description": "Oskar and Fred are the two characters in this slot. When Oskar's Bash activates, it bashes a row of symbols, turning them into Cash Stacks with added cash values. When Fred's Smash activates, it smashes a column of symbols, converting them into Wild symbols with multipliers. Cash Stacks accumulate values that are collected at the end of a spin."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - BROS BEFORE BLOWS",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with an increased chance of landing Cash Stacks!"
          },
          {
                "title": "BONUS GAME - CASH ME OUTSIDE",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with at least 1 guaranteed bash from Oskar or 1 smash from Fred!"
          },
          {
                "title": "HIDDEN EPIC BONUS - REACTOR RIOT",
                "description": "Land 5 FS scatter symbols to trigger this bonus! 10 free spins, each free spin guarantees 1 bash from Oskar and 1 smash from Fred!"
          }
    ],
  },
  "Smoking Dragon": {
    features: [
          {
                "title": "ROW CASCADES AND WILD SYMBOLS",
                "description": "When a winning combination occurs, all symbols on the winning row are removed and new symbols drop in from above, potentially creating new wins on that row. Wild symbols and Epic Wild symbols can land with Multiplier values. Multiple Wilds in the same win have their multipliers added together before being applied."
          },
          {
                "title": "MULTIPLIER BAR",
                "description": "In the SMOLDERING RICHES and FIRE AND FORTUNE bonuses, a Multiplier Bar is located outside the grid indicating the minimum Multiplier value of all Wild and Epic Wild symbols. The bar starts at a minimum of 1x and increases by one level for every 10 Row Cascades accumulated. Possible levels: 1x, 2x, 5x, 10x, 15x, 25x."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - SMOLDERING RICHES",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the PUFF OF LUCK bonus. In addition, a Multiplier Bar is located outside the grid, which indicates the lowest possible Multiplier value of all Wild and Epic Wild symbols that land on the grid. The Multiplier Bar starts with a minimum value of 1x. Each time 10 Row Cascades have been accumulated, the Multiplier Bar will increase by one level (up to the max level). The possible values on each level of the Multiplier Bar are 1x, 2x, 5x, 10x, 15x, 25x."
          },
          {
                "title": "EPIC BONUS - FIRE AND FORTUNE",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the SMOLDERING RICHES bonus. In addition, it features one guaranteed win and a Wild and/or epic Wild on every spin, with the progressive Multiplier Bar starting at 5x. FS symbols cannot land during this bonus."
          },
          {
                "title": "PUFF OF LUCK",
                "description": "Base game: Row Cascades mechanic with Wild symbols and Multipliers."
          }
    ],
  },
  "Chaos Crew 3": {
    features: [
          {
                "title": "CRAZY MULTIPLIERS AND GLITCH DOG",
                "description": "Crazy Multiplier symbols are wild multipliers that can land on the grid. When they land during a bonus, they increase the Reel Multiplier above that reel and refill lives to 3. Glitch Dog symbols are special wild symbols that also trigger the same reel multiplier increase. Only dead symbols, Crazy Multipliers, and Glitch Dogs can land in the bonus games."
          },
          {
                "title": "REEL MULTIPLIERS AND CHAOS UPGRADE",
                "description": "In the CHAOS bonus, a Reel Multiplier sits above each reel. Each time a Crazy Multiplier or Glitch Dog lands, all Reel Multipliers increase. Chaos Upgrade symbols can also land to boost all Reel Multipliers simultaneously. At the end of the bonus, all Reel Multipliers are added and applied to the bet for the final win."
          }
    ],
    bonus_games: [
          {
                "title": "CHAOS",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. The classic Chaos Crew Bonus with 3 refilling lives and Glitch Dog symbols! Each time a Crazy Multiplier or Glitch Dog lands, the Reel Multiplier increases and the lives refill. The bonus ends when you run out of lives, then all Reel Multipliers are added up and applied to your bet for the final win!"
          },
          {
                "title": "HIDDEN EPIC BONUS - AN EPIC GLITCH!",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 3 refilling lives and guarantees a full grid with Crazy Multipliers, a Chaos Upgrade symbol and a Glitch Dog from the start!"
          }
    ],
  },
  "Le King": {
    features: [
          {
                "title": "GOLDEN SQUARES AND RAINBOW",
                "description": "When a winning cluster forms in the base game, the positions of winning symbols become Golden Squares. When a Neon Rainbow symbol lands, it activates all Golden Squares, revealing Bronze Coins (0.2x-4x), Silver Coins (5x-20x), Gold Coins (25x-500x), Clover symbols (multipliers for nearby or all Coins), or Pot of Gold symbols (collect all Coin values). Jackpot Boxes can also appear, awarding one of four jackpot prizes."
          },
          {
                "title": "JACKPOT BOXES",
                "description": "Jackpot Boxes can pop up during a spin or be revealed in Golden Squares. Each brings one of four jackpot prizes (Mini, Major, Mega, Max Win). Activated by Rainbow symbols."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS BUY",
                "description": "Where permitted by market conditions, this game offers the following bonus buy options: BONUSHUNT FEATURESPINS - Each spin is 5 times more likely to trigger a bonus game! Cost 3x bet. SHAMROCK & ROLL FEATURESPINS - Guarantees at least 1 win and a Neon Rainbow symbol lands on each spin! Cost 60x bet. SPIN CITY - 10 free spins where Golden Squares remain highlighted until activated! Cost 80x bet. JACKPOT OF GOLD - 10 free spins where Golden Squares remain highlighted even after being activated! Cost 250x bet."
          }
    ],
  },
  "The Luxe": {
    features: [
          {
                "title": "GOLDEN FRAMES AND MULTIPLIERS",
                "description": "Golden Frames can land on the grid and reveal Multiplier values or Jackpots when activated. Clover Crystal symbols can also land to boost nearby or all Multiplier values. When activated, all revealed Multipliers are combined and applied to the total win."
          },
          {
                "title": "BLACK AND GOLD MECHANIC",
                "description": "In the base game, landing certain symbol combinations activates the Black and Gold mechanic where Multiplier symbols reveal their values and contribute to a combined global multiplier applied to the total win."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - GOLDEN HITS",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the BLACK AND GOLD bonus. In addition, 3 Golden Frames will be on the grid from the start and remain until the end of the bonus. All Multiplier values are Sticky and will remain throughout the bonus unless they are part of a win."
          },
          {
                "title": "HIDDEN EPIC BONUS - VELVET NIGHTS",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This Hidden Epic Bonus keeps the mechanics of the GOLDEN HITS bonus. Each position will have a Golden Frame from the start with either a Multiplier or a Jackpot. Clover Crystals and FS symbols do not appear in this bonus."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
  },
  "Jaws of Justice": {
    features: [
          {
                "title": "LASER SHARKS",
                "description": "Laser Shark symbols can land on the grid. When activated, they fire a Laser beam across the grid in a specific direction, turning all symbols hit into high-paying symbols or Wild symbols. Different Laser Sharks fire in different directions and can chain reactions when their beams cross."
          }
    ],
    bonus_games: [
          {
                "title": "CHOMPOCALYPSE",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with Laser Sharks firing in two different directions!"
          },
          {
                "title": "NUCLEAR NEBULA",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins and at least 1 Laser Shark will land on every free spin!"
          }
    ],
  },
  "Bullets and Bounty": {
    features: [
          {
                "title": "DUELREELS™",
                "description": "A VS symbol expands if part of a win. Expanded DuelReels™ cover an entire reel, turning it into a Wild DuelReel. They start a Duel between 2 duelists. The winning duelist's Multiplier ranging from 2x up to 100x applies to all wins on that reel. If more than one DuelReel is part of the same win, multipliers are added together."
          },
          {
                "title": "BOUNTY DUELREELS™",
                "description": "When a Bounty VS symbol expands, the Duel is between the Bounty Hunter and an Outlaw. If the Bounty Hunter wins, she collects the Outlaw's multiplier and duels again, up to 3 times. The combined Multiplier is applied to that entire reel."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - TRUE GRIT",
                "description": "Activate this bonus with 10 free spins by landing 3 FS scatter symbols at the same time during the base game. This brings you into a Bonus Gamble, where you have a choice to either play the TRUE GRIT bonus game or to Gamble. The TRUE GRIT bonus keeps the base game's mechanics and has Progressive Bounty Hunter Multipliers!"
          },
          {
                "title": "BONUS GAME - FOUR SHOTS TO FREEDOM",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus game keeps the base game's mechanics. In addition, a Bullets & Bounty Bar is displayed outside the grid that will award DuelSpins and VS symbols."
          },
          {
                "title": "MAKE HER DAY",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This Hidden Epic Bonus game keeps the mechanics of the FOUR SHOTS TO FREEDOM bonus, starting the first spin at DuelSpin Level 1. Additionally, it also has Progressive Bounty Hunter Multipliers!"
          }
    ],
  },
  "Miami Mayhem": {
    features: [
          {
                "title": "EXPANDING CREW REELS",
                "description": "Crew Reel symbols can land on the grid. When they expand, they cover an entire reel with a specific Crew member, acting as Wilds and contributing multipliers to any wins on that reel."
          },
          {
                "title": "WANTED MISSIONS",
                "description": "When a Wanted symbol lands, it triggers a Mission. Completing missions by landing the required symbols awards escalating rewards including cash prizes, multipliers, and bonus entry. Progressive Wanted Levels increase mission rewards as the bonus progresses."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS BUY",
                "description": "Where permitted by market conditions, this game offers: BONUSHUNT FEATURESPINS - Each spin is 5 times more likely to trigger a bonus game! Cost 3x bet. BEACH PLEASE FEATURESPINS - Each spin guarantees that at least 2 expanding Crew Reels land! Cost 50x bet. MAYHEM MODE FEATURESPINS - Each spin guarantees that 1 Wanted symbol lands, triggering a Mission! Cost 50x bet. THE HIT - 10 free spins with Progressive Wanted Levels and a guaranteed Mission at the start! Cost 100x bet. WE SPLIT - 10 free spins with a Mayhem Bar, which collects expanded Crew Reels! Cost 300x bet."
          }
    ],
  },
  "Booze Bash": {
    features: [
          {
                "title": "FS PAIRS",
                "description": "FS Pairs are scatter symbols that trigger bonus games when 1, 2, or 3 pairs land simultaneously. Unlike standard FS symbols, they work in pairs — both symbols of a pair must land on the same spin to count. Landing additional FS Pairs during a bonus awards +2 extra free spins per pair."
          },
          {
                "title": "BASH BAR",
                "description": "In the TOP-SHELF TROUBLE and HAPPY HOUR bonuses, a Bash Bar is added as an extra row at the top of the grid. After each spin, once all regular wins are collected, the Bash Bar reveals one symbol per reel from left to right, potentially creating additional wins."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - GUILTY AS GIN",
                "description": "Activate this bonus with 10 free spins by landing 1 FS Pair during the base game. This bonus game maintains the base game's mechanics with an increased chance of landing high-paying symbols, Multipliers and Wild symbols. Landing additional FS Pairs in the bonus awards 2 extra free spins per pair."
          },
          {
                "title": "BONUS GAME - TOP-SHELF TROUBLE",
                "description": "Activate this bonus with 10 free spins by landing 2 FS Pairs during the base game. This bonus game has a Bash Bar added as an extra row at the top of the grid. After each spin, once all regular wins are collected, the Bash Bar reveals a symbol for each reel from left to right."
          },
          {
                "title": "HIDDEN EPIC BONUS - HAPPY HOUR",
                "description": "Activate this bonus with 10 free spins by landing 3 FS Pairs during the base game. This Hidden Epic Bonus game maintains the mechanics of the TOP-SHELF TROUBLE bonus. In addition, all Special Symbols can be revealed in the Bash Bar. Landing additional FS Pairs in the bonus awards 2 extra free spins per pair."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Winning pairs cannot be formed in the Bash Bar."
          }
    ],
  },
  "Aiko and the Wind Spirit": {
    features: [
          {
                "title": "SPIRIT SYMBOLS AND ZEPHYR CRESTS",
                "description": "Spirit symbols can land on the grid and act as Wilds with multipliers when part of a win. Zephyr Crest symbols trigger a special mechanic where they select and transform groups of symbols, increasing the chance of winning combinations. Wild Spirit Multipliers combine their values when multiple are part of the same win."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - SPIRITED SPINS",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with more Spirit and Zephyr Crest symbols!"
          },
          {
                "title": "BONUS GAME - WHISPERING WINDS",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins with a Memory that stores Wild Spirit Multipliers throughout the bonus!"
          },
          {
                "title": "HIDDEN EPIC BONUS - MIDNIGHT MAGIC",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins a Memory and at least 2 Wild Spirits on each spin!"
          }
    ],
  },
  "Invictus": {
    features: [
          {
                "title": "LEFT AND MIDDLE MULTIPLIERS",
                "description": "Multiplier symbols can land on specific reels — Left Multipliers on reel 1 and Middle Multipliers on reel 3. When activated as part of a win, their values are applied to the total win. If multiple Multiplier symbols are part of the same win, their values are added together before being applied."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - TEMPLE OF JUPITER",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with an increased chance of triggering higher Multipliers!"
          },
          {
                "title": "BONUS GAME - IMMORTAL GAINS",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 10 free spins and all Left Multipliers will have a minimum of 5x on each spin!"
          },
          {
                "title": "HIDDEN EPIC BONUS - DOMINUS MAXIMUS",
                "description": "Land 5 FS scatter symbols to trigger the ultimate bonus round! This Hidden Epic Bonus gives you 10 free spins with an additional Middle Multiplier applied to Reel 3, offering the chance to trigger all 3 Multipliers!"
          }
    ],
  },
  "Freds Food Truck": {
    features: [
          {
                "title": "GREEN CHILI MULTIPLIERS",
                "description": "Green Chili Multiplier symbols can land on the grid. When part of a winning combination, their multiplier values are applied to a Global Multiplier. In the BIG MENU bonus, all landed Green Chili multipliers are progressively applied to the Global Multiplier, and the Global Multiplier does not reset between spins."
          }
    ],
    bonus_games: [
          {
                "title": "BIG MENU",
                "description": "Landing 4 FS symbols at the same time in the base game awards 15 free spins! In this feature all landed Green Chili multipliers are progressively applied to the Global Multiplier and the Global Multiplier does not reset between spins!"
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all paying symbols in the paytable. The FS symbol does not appear during Free Spins."
          }
    ],
  },
  "The Wildwood Curse": {
    features: [
          {
                "title": "CURSED CLUSTERS AND NIGHTMARE RESPINS",
                "description": "Cursed Cluster symbols can land on the grid. When a winning combination occurs near a Cursed Cluster, it activates and spreads, turning adjacent symbols into matching high-paying symbols or Wilds, triggering Nightmare Respins. Respins continue as long as new wins occur from the spreading Cursed Clusters."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - THE PLAYGROUND",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus keeps the mechanics of THE SWAMP with an increased chance of landing Cursed Clusters!"
          },
          {
                "title": "HIDDEN EPIC BONUS - NO ESCAPE",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This bonus keeps the mechanics of THE SWAMP and each spin guarantees that at least 1 Cursed Cluster lands! SPECIAL SYMBOLS: FS symbols cannot land during Nightmare Respins or during THE SWAMP, THE PLAYGROUND or the NO ESCAPE. The Twins max Multiplier is 1000x."
          }
    ],
  },
  "Eye of Medusa": {
    features: [
          {
                "title": "SUPER CASCADES",
                "description": "When a winning combination occurs, all winning symbols and all regular paying symbols of the same type are removed from the grid. New symbols cascade in, potentially creating new wins. The sequence continues until no new wins occur."
          },
          {
                "title": "MEDUSA SYMBOLS",
                "description": "Medusa symbols land as either Silver or Gold. When a win with lower-paying symbols occurs, the Medusa symbol activates: it clears all symbols from the grid and drops to the bottom row, staying sticky until the end of the spin. Gold Medusa symbols carry a multiplier of up to 20x applied to any wins they contribute to."
          },
          {
                "title": "PETRIFIED SYMBOLS",
                "description": "High-paying symbols that land during cascades can become Petrified, turning to stone and staying sticky at the bottom of the grid. Petrified symbols contribute to wins on subsequent cascades and cannot be removed until the spin ends."
          }
    ],
    bonus_games: [
          {
                "title": "SNAKES AND STONES",
                "description": "Land 3 FS scatter symbols to trigger this bonus game. 10 free spins with an increased chance of landing Medusa symbols. Petrified symbols remain sticky throughout the bonus. Landing additional FS symbols awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          },
          {
                "title": "GORGON'S GOLD",
                "description": "Land 4 FS scatter symbols to trigger this bonus game. 12 free spins with the mechanics of Snakes and Stones. In addition, Gold Medusa symbols appear more frequently and Petrified symbols can accumulate higher multiplier values throughout the feature. Landing additional FS symbols awards extra free spins: 2 FS symbols award +2 free spins, 3 FS symbols award +4 free spins."
          }
    ],
  },
  "Marlin Masters: The Big Haul": {
    features: [
          {
                "title": "MARLIN AND GOLDEN MARLIN SYMBOLS",
                "description": "Marlin symbols display cash values and are collected via LootLines (3+ Marlin symbols on a payline) or by Fisherman symbols. Golden Marlin symbols have enhanced minimum values (5x+ in bonus) and when collected by a Fisherman, can reveal jackpot prizes. Possible Marlin values: 1x-1,000x bet."
          },
          {
                "title": "FISHERMAN SYMBOLS",
                "description": "Fisherman symbols collect all Marlin and Golden Marlin symbols on the grid. Fisherman can also land with a Multiplier value of up to x20, applied to the cash value of all collected Marlin symbols. In the HOOKED ON PARADISE bonus, Sticky Fisherman symbols collect Marlins and remain on the grid throughout the round."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - CATCH ME IF YOU CAN",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the DON'T BE KOI bonus. In addition, the upgrade levels in this bonus are even more powerful and all Fisherman symbols are guaranteed to have a Multiplier of at least x2! Golden Marlin symbols that land will have a minimum value of 5x."
          },
          {
                "title": "HIDDEN EPIC BONUS - HOOKED ON PARADISE",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This Hidden Epic Bonus keeps the base game's mechanics. During this bonus, Sticky Fisherman symbols can land, collecting Marlin symbols and remaining on the grid throughout the round. 1 Sticky Fisherman symbol will be on the grid from the start."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
  },
  "Rainbow Princess": {
    features: [
          {
                "title": "MAGIC FRAME MULTIPLIERS",
                "description": "Magic Frame Multiplier symbols can land on the grid and reveal Multiplier values. When part of a winning combination, their values contribute to a combined multiplier applied to the win. Progressive Magic Frame Multipliers in the bonus rounds grow with each spin they remain active. If multiple are part of the same win, their values are added together."
          },
          {
                "title": "RAINBOW RUSH BAR",
                "description": "In the MAKE IT RAINBOW bonus, a Rainbow Rush Bar is displayed outside the grid. Each time a winning cluster is formed, the Rainbow Rush Bar increases. When full, it triggers additional effects that boost Multiplier values or add extra winning positions."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - MAKE IT RAINBOW",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. This bonus game keeps the mechanics of the TIARA TREASURE bonus. In addition, a Rainbow Rush Bar is displayed outside the grid. Each time a winning cluster is formed, the Rainbow Rush Bar increases."
          },
          {
                "title": "HIDDEN EPIC BONUS - THRONE OF STARLIGHT",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. This Hidden Epic Bonus game keeps the mechanics of the TIARA TREASURE bonus. Each position will have a Sticky Progressive Magic Frame Multiplier from the start! All Magic Frame Multipliers will start with a minimum value of 4x."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
  },
  "Ultimate Slot Of America": {
    features: [
          {
                "title": "LIBERTY GEMS",
                "description": "The Liberty Gem symbol acts as a Wild multiplier that substitutes for the other paying symbols in the paytable. Landing Liberty Gems triggers a Freedom Respin, with all Liberty Gems staying on the grid during that spin. If more Liberty Gems land, another Freedom Respin is awarded."
          },
          {
                "title": "GEM CLUSTERS",
                "description": "Landing 4 or more Liberty Gems in a square formation of 2x2, 3x3, 4x4 or 5x5 will form a Gem Cluster."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Liberty Gems and Gem Clusters substitute for all symbols in the paytable."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - SPIN-DEPENDENCE DAY",
                "description": "Activate this bonus with 10 free spins by landing 3 FS scatter symbols at the same time during the base game."
          },
          {
                "title": "BONUS GAME - RED, WHITE, BLING!",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game."
          },
          {
                "title": "HIDDEN EPIC BONUS - PURSUIT OF RICHES",
                "description": "Activate this bonus with 10 free spins by landing 5 FS scatter symbols at the same time during the base game."
          }
    ],
  },
  "Spinman": {
    features: [
          {
                "title": "JUSTICE REELS:",
                "description": "When a Spinman symbol lands, it expands into a Wild Justice Reel if it forms at least one winning combination. Expanded Justice Reels unlock powerful bonus mechanics for bigger wins!"
          },
          {
                "title": "BOOSTER WHEEL:",
                "description": "When a Justice Reel expands, it triggers the Booster Wheel, awarding one of six Multipliers or an instant MAX WIN. Multipliers range from 2x-500x. If multiple Justice Reels contribute to a win, their Multipliers combine before applying to the payout!"
          },
          {
                "title": "REEL HEROES:",
                "description": "The Hidden Epic Bonus is an exclusive bonus game that can't be purchased. Players must trigger it purely by chance in the base game, which adds to its allure. It keeps the same mechanics as the base game but consistently delivers powerful payouts for a bigger chance at an Epic Win!"
          },
          {
                "title": "WHAT TO LOOK OUT FOR:",
                "description": "Spinman symbols expand into Wild Justice Reels with possible multipliers up to 500x, boosting your wins! Watch out for the MAX WIN on the Booster Wheel which is instantly awarded! And let's not forget about those FS symbols! Landing 3 or more at the same time will trigger one of the three Bonus Games!"
          },
          {
                "title": "BONUS BUY",
                "description": "Where permitted by market conditions, this game offers the following bonus buy options: BONUSHUNT FEATURESPINS - Each spin is 5 times more likely to trigger a bonus game! Cost 3x bet HEROIC FEATURESPINS - 2 guaranteed Spinman symbols on every spin for big wins! Cost 50x bet POWER SURGE - 10 free spins with enhanced base game features and extra Spinman symbols! Cost 90x bet SPINFINITY - 10 free spins with at least 1 Spinman symbol on each spin! Cost 200x bet"
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAMES",
                "description": "Spinman features three exciting bonus games with upgraded mechanics taking your game experience to the next level!"
          },
          {
                "title": "HIDDEN EPIC BONUS GAME",
                "description": ""
          }
    ],
  },
  "Pray For Three": {
    features: [
          {
                "title": "TOTAL WIN BAR",
                "description": "All wins during each spin are collected in the Total Win Bar outside of the grid."
          },
          {
                "title": "WHEEL OF SIN",
                "description": "The Wheel of Sin is positioned outside the grid. Once activated, each section of the wheel will reveal either an Adding or Multiplying value. The three sections of the Wheel can have the following multiplier values: First section, Adding Multipliers: 2x, 3x, 4x, 5x, 10x, 25x, 50x, 100x, 200x, 333x Second section, Adding Multipliers: 2x, 3x, 4x, 5x, 10x, 25x, 50x, 100x, 200x, 333x or Multiplying Multipliers: x2, x3, x4, x5, x10, x20, x33 Third section, Multiplying Multipliers: x2, x3, x4, x5, x10, x20, x33 Activate the Wheel of Sin by landing Prayer Hand or Divine Prayer Hand symbols on the grid during a win. A landed Prayer Hand symbol will reveal a number between 1-3 which indicates how many sections on the Wheel of Sin will activate. A landed Divine Prayer Hand symbol will always activate all three sections."
          },
          {
                "title": "WICKED WAYS BONUS",
                "description": "Activate this bonus with 10 free spins by landing 3 FS scatter symbols at the same time during the base game. This bonus game maintains the base game mechanics with an increased chance of landing both types of Prayer Hand symbols as well as Wilds."
          },
          {
                "title": "LIVING ON A PRAYER BONUS",
                "description": "Activate this bonus with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. Throughout this bonus, there is an increased chance of landing Divine Prayer Hand symbols!"
          },
          {
                "title": "FLAMES OF FORTUNE BONUS",
                "description": "Activate this Epic bonus with 10 free spins by landing 5 FS scatter symbols. Each spin guarantees that one Divine Prayer Hand symbol lands! The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Danny Dollar": {
    features: [
          {
                "title": "DOLLAR-REELS:",
                "description": "When a Danny symbol lands, it expands upward into a Wild Dollar-Reel if it forms a winning combination. Expanded Dollar-Reels act as Wilds on all covered positions. If a Dollar-Reel expands through a Wild, it creates a multiplier that is applied to the whole reel. Dollar-Reel multipliers are added together giving your win a dollar dollar boost!"
          },
          {
                "title": "NUDGE SYMBOLS:",
                "description": "When Nudge symbols appear, they shift Dollar-Reels down one row after expanding, increasing their coverage and boosting your chances of a dazzling win!"
          },
          {
                "title": "DOLLAR DASH:",
                "description": "In this bonus game, Reel Indicators mark where the last Danny symbol landed, preventing new ones from landing higher up and guaranteeing that the Dollar-Reels are longer."
          },
          {
                "title": "NO BILLS, NO THRILLS:",
                "description": "This bonus game features a Progressive Global Multiplier, which collects all the Dollar-Reel multipliers and applies them to all your wins!"
          },
          {
                "title": "BONUS BUY",
                "description": "Where permitted by market conditions, this game offers the following bonus buy options: BONUSHUNT FEATURESPINS - Each spin is 5 times more likely to trigger a bonus game! Cost 3x bet DANNY FEATURESPINS - 3 guaranteed Danny symbols on every spin for big wins! Cost 50x bet DOLLAR DASH - 10 free spins where Nudge symbols can appear. Cost 100x bet NO BILLS, NO THRILLS - 10 free spins with a Progressive Global Multiplier. Cost 300x bet"
          }
    ],
    bonus_games: [],
  },
  "Rad Maxx": {
    features: [
          {
                "title": "CRAZY CAT SYMBOLS:",
                "description": "Look out for the Crazy Cat symbols, which act as Wild multipliers! These cats can reveal multiplier values between x2 and x20. When they join in on a win, they'll multiply your payout by the value shown. And if you land more than one Crazy Cat in a winning combination? They'll multiply together first, making your win even more insane!"
          },
          {
                "title": "PAY DIRECTION ARROWS:",
                "description": "Your secret weapon to scoring those big wins! These arrows sit outside the grid and show the directions in which your winning paylines will be calculated. The left arrow is always active, but things get exciting when you land a Wild Plus symbol."
          },
          {
                "title": "WILD PLUS SYMBOLS:",
                "description": "When a Wild Plus symbol hits the grid, it triggers a frenzy! These symbols activate 1 to 3 extra Pay Direction Arrows, changing the way the game pays out in a clockwise direction. So, every time you land a Wild Plus, your payout has the potential to be even bigger. But don't get too comfortable, because the arrows reset with each spin!"
          }
    ],
    bonus_games: [],
  },
  "Reign Of Rome": {
    features: [
          {
                "title": "TRIBUTE SYMBOLS AND LOOTLINES",
                "description": "Tribute symbols are dynamic multiplier symbols that award a cash prize based on the combined value of the Tribute in a LootLine, multiplied with your bet amount. A LootLine is formed when there is a winning payline of Tribute symbols on the grid. There are four variants of Tribute symbols: Adding Tribute symbols (1x-10x), Revealing Adding Tribute symbols (15x-500x), Multiplying Tribute symbols (x2-x5), and Revealing Multiplying Tribute symbols (x6-x25). Adding Tribute multipliers are added to the cumulative LootLine value, while Multiplying Tribute multipliers multiply the value."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "More than one FS symbol cannot land in the same reel during one spin."
          }
    ],
    bonus_games: [
          {
                "title": "BONUS GAME - PATH TO POWER",
                "description": "Land 3 FS scatter symbols at the same time in the base game to activate this bonus game with 10 free spins. This bonus game maintains the same mechanics of the base game but with an increased chance of landing Tribute symbols with higher values. Landing additional FS symbols during the bonus awards extra free spins."
          },
          {
                "title": "BONUS GAME - THIS IS ROME",
                "description": "Land 4 FS scatter symbols at the same time in the base game to activate this bonus game with 10 free spins. This bonus includes all features from PATH TO POWER plus a LootBar below the grid where non-winning Tribute symbols are stored progressively. When all five LootBar positions are filled, the stored values are awarded."
          },
          {
                "title": "HIDDEN EPIC BONUS - FIGHT FOR GLORY",
                "description": "Land 5 FS scatter symbols at the same time in the base game to activate this bonus game with 10 free spins. All LootBar positions start with 20x multipliers in this bonus, and all Tribute values stored in the LootBar are kept until the end of the bonus and then paid out as one big prize."
          }
    ],
  },
  "Fighter Pit": {
    features: [
          {
                "title": "PICK YOUR FIGHTER",
                "description": "Decide which fighters should be displayed outside the grid by clicking on their miniature images on the top of the grid. This choice will have no impact on the outcome of the game."
          },
          {
                "title": "WILD FIST REELS",
                "description": "When a Fist symbol activates, it expands into a Wild Fist Reel that starts from the position of the Fist symbol and rises upwards to the top of the reel. Fist symbols only activate if the expanded Wild Reel is part of at least one winning combination once expanded. Wild Fist Reels act as Wild symbols on all positions they cover and substitute for all other paying symbols. Fist symbols belong to either the Red team or the Green team. If the Fist symbol passes through a Fighter symbol of the opposite team or a Wild symbol, a multiplier will be added to the Wild Fist Reel. If a winning combination includes more than one Wild Fist Reel, their multipliers are added together. Possible multiplier values: 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x, 15x, 20x, 25x, 50x, 100x, 200x."
          },
          {
                "title": "SHOWDOWN",
                "description": "Land 3 FS scatter symbols at the same time in the base game to activate this bonus game with 10 free spins. Each team starts at Victory Level 3+. Each time a Fist symbol punches an opponent's Fighter or Wild, the Fist's team earns one Victory Point. When a team has collected three Victory Points, a respin with an Epic Drop is awarded and the winning team's Victory Level increases by one. The number of Fist symbols guaranteed in the Epic Drop depends on the Victory Level."
          },
          {
                "title": "ULTIMATE SHOWDOWN",
                "description": "Land 4 FS scatter symbols at the same time in the base game to activate this bonus game with 10 free spins. This bonus maintains the mechanics of SHOWDOWN, except each team starts at Victory Level 4+."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Wishbringer": {
    features: [
          {
                "title": "WILD CLOUD ROWS",
                "description": "Genie symbols can land on reels 2-6. When it lands, the Genie symbol will Blow Clouds to the left across all positions on the same row. All positions that are covered by a Genie symbol or Clouds are counted as Wild symbols that substitute for all symbols in the paytable. FS symbols will remain active even when covered by Wild symbols, provided they are part of a win."
          },
          {
                "title": "BONUS BUY",
                "description": "Where permitted by market conditions, this game offers the following bonus buy options: BONUSHUNT FEATURESPINS - Each spin is 10 times more likely to trigger a bonus game! Cost 5x bet. GENIE'S WISH FEATURESPINS - At least one Genie symbol guaranteed to land on reels 2-6! Cost 50x bet. GENIE'S MAGIC FEATURESPINS - At least one Genie symbol guaranteed to land on reels 4-6! Cost 200x bet. ARABIAN NIGHTS - Enter the bonus with 10, 20 or 40 free spins! Cost 110x bet."
          }
    ],
    bonus_games: [
          {
                "title": "ARABIAN NIGHTS BONUS GAME",
                "description": "Land FS scatter symbols at the same time in the base game to activate this bonus game with a varying number of free spins: 3 FS symbols awards 5 free spins, 4 FS symbols awards 10 free spins, 5 FS symbols awards 20 free spins, 6 FS symbols awards 40 free spins. Landing additional FS symbols during the bonus awards additional free spins: 2 FS symbols awards 2 extra spins, 3 FS symbols awards 4 extra spins."
          }
    ],
  },
  "Life And Death": {
    features: [
          {
                "title": "WILD MULTIPLIERS AND EXPANDING WILD REELS",
                "description": "There are four Wild Multiplier symbols that substitute for all other symbols in the paytable. Wild Multipliers can land on reels 2-5, each connected to a specific reel. Blue Pestilence (reel 2): 2x, 3x, 4x. Red War (reel 3): 5x, 6x, 7x, 8x, 9x. Yellow Famine (reel 4): 10x, 15x, 20x, 25x. Green Death (reel 5): 30x, 40x, 50x, 75x, 100x, 200x. Wild Multiplier symbols expand into full Wild Reels if the expanded reel would be part of at least one winning combination. If more than one Wild Reel are part of the same winning combination, their multipliers are added together."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Wild Multiplier symbols substitute for all other symbols in the paytable. FS symbols and Wild Multipliers cannot land in the same reel at the same time."
          }
    ],
    bonus_games: [
          {
                "title": "DEVASTATION BONUS GAME",
                "description": "Land 3 FS scatter symbols at the same time in the base game to activate the DEVASTATION bonus game with 10 free spins. This bonus maintains the mechanics of the base game with an increased chance of landing Wild Multipliers! Landing additional FS symbols during the bonus awards extra free spins."
          },
          {
                "title": "RECKONING BONUS GAME",
                "description": "Land 4 FS scatter symbols at the same time in the base game to activate the RECKONING bonus game with 10 free spins. This bonus includes all the features from DEVASTATION plus persistent activated Death Reels! Landing a Wild Multiplier on its connected reel will activate that reel as a Death Reel, so its connected Wild Multiplier will expand into a Wild Reel regardless of which central reel it lands on."
          }
    ],
  },
  "Dorks Of The Deep": {
    features: [
          {
                "title": "EXPANDING WILD REELS",
                "description": "When a Treasure Chest symbol lands it will expand into a Wild Reel if it would be part of a winning combination once expanded. Expanded Wild Reels show one of three characters: Octopus (2x-9x multiplier), Mermaid (10x-20x multiplier), or Ocean King (25x-200x multiplier). The character's multiplier is applied across the entire Wild Reel. If more than one Wild Reels are part of the same winning combination, their multipliers are added together."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [
          {
                "title": "DEEP BLUE BONUS GAME",
                "description": "Land 3 FS scatter symbols at the same time to activate with 10 free spins. A landed Treasure Chest symbol always expands into a Wild Reel regardless of whether it is part of a win or not. Expanded Wild Reels reveal 0-3 lives and are sticky into the next spin as long as they have lives remaining. Last Chance feature activates if Wild Reels remain on the last free spin."
          },
          {
                "title": "DOWN UNDER BONUS GAME",
                "description": "Land 4 FS scatter symbols at the same time to activate with 10 free spins. Maintains DEEP BLUE mechanics. Sticky expanded Wild Reels never receive a multiplier from a lower character tier than the initially revealed tier."
          },
          {
                "title": "HIDDEN TREASURES BONUS GAME",
                "description": "Land 5 FS scatter symbols at the same time to activate with 10 free spins. Maintains DOWN UNDER mechanics. Always guaranteed to have two expanded Wild Reels active on the grid at all times."
          }
    ],
  },
  "Strength Of Hercules": {
    features: [
          {
                "title": "ROTOGRID",
                "description": "Each grid rotation turns the grid a quarter turn clockwise and unlocks the possibility of new wins. If multiple RotoGrid symbols are present, they activate one at a time. Maximum 3 RotoGrid symbols can land on the same spin."
          },
          {
                "title": "CONNECTING WILDS",
                "description": "After each grid rotation, any Wild symbols on the same reel will connect, filling all positions between them with additional Wild symbols."
          },
          {
                "title": "MIGHT OF HERCULES",
                "description": "When the current grid has settled, there is a chance Hercules hits the grid. When this happens, all occurrences of a randomly chosen low-paying symbol are replaced with Wild symbols."
          },
          {
                "title": "BONUS CHOICE",
                "description": "Landing 3 or 4 FS scatter symbols brings you into the Bonus Choice menu. With 3 FS, you may choose LABORS or LABYRINTH. With 4 FS, you may choose GODLY LABORS or GODLY LABYRINTH."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [
          {
                "title": "LABORS BONUS GAME",
                "description": "10 free spins with higher chance of landing RotoGrid and Wild symbols. Additional FS symbols during the feature award extra free spins."
          },
          {
                "title": "GODLY LABORS BONUS GAME",
                "description": "Variant of LABORS where RotoGrid and Wild symbols appear more frequently."
          },
          {
                "title": "LABYRINTH BONUS GAME",
                "description": "8 free spins. Coin and FS symbols fall through Cracked Stone symbols toward Treasure Chests at the bottom. Each Treasure Chest has a progressive multiplier. Adding Coins (1x-100x) add to the chest value, Multiplying Coins (x2-x20) multiply it. Grid may rotate to create new paths."
          },
          {
                "title": "GODLY LABYRINTH BONUS GAME",
                "description": "Variant of LABYRINTH with 10 free spins and higher-value Coins."
          }
    ],
  },
  "Hounds Of Hell": {
    features: [
          {
                "title": "HELLHOUNDS",
                "description": "Hellhound symbols are cash prize multipliers that spread and are collected before being multiplied with your bet. At the end of each spin, landed Hellhound symbols spread to the top of their respective reel. All multipliers are collected bottom-to-top, left-to-right. There are two types: Adding (1x, 2x, 3x, 4x, 5x, 10x, 15x, 20x, 25x, 50x) and Multiplying (x2, x3, x4, x5, x10). Only 1 Hellhound symbol can land on a reel at a time."
          },
          {
                "title": "ROARING PACKS OF HELL",
                "description": "If two or more Hellhound symbols appear on adjacent reels on the same row, they form a Roaring Pack with increased multiplier values. Adding: 5x, 10x, 15x, 20x, 25x, 50x, 100x. Multiplying: x3, x4, x5, x10, x20."
          },
          {
                "title": "HOUNDS ARE LOOSE",
                "description": "Can trigger randomly on a spin with no new wins. All low-paying symbols are removed and new symbols drop in, with an increased chance of landing Hellhound symbols."
          },
          {
                "title": "BONUS GAMBLE",
                "description": "When entering a bonus game, you may choose to gamble. Choose up to 3 of 5 Hellfire Orbs, each containing 2-10 free spins or a Bonus Upgrade."
          },
          {
                "title": "WHAT THE HELL! BONUS FEATURE",
                "description": "Activate with 10 free spins by landing 3 FS scatter symbols. All multiplier values collected from Hellhounds are kept above the reels until the end of the round and progressively increased. Hounds are Loose guaranteed after 3 non-winning spins in a row."
          },
          {
                "title": "WHO LET THE HOUNDS OUT?!? BONUS FEATURE",
                "description": "Activate with 10 free spins by landing 4 FS scatter symbols. Persistent activated Hell Reels - a Hellhound is guaranteed to land on each activated Hell Reel on each free spin. In this bonus, Hellhound multipliers are paid out times your bet at the end of each free spin, and totals reset between spins."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "FS symbols can not appear above Hellhound symbols on the same reel."
          }
    ],
    bonus_games: [],
  },
  "Frkn Bananas": {
    features: [
          {
                "title": "BANANA SPLIT? NO, BANANA SPREAD!",
                "description": "Spreading Banana symbols can point either to the left, or up. When a Spreading Banana lands, additional Spreading Banana symbols spread from that symbol either left or up. The spreading only occurs if the Spreading Bananas would be part of at least one winning combination after spreading. All Spreading Banana symbols are wild multipliers (1x, 2x, 3x, 4x, 5x, 10x, 15x, 20x, 25x, 50x, 75x, 100x). Created spread Bananas take on the same multiplier value as the originating symbol."
          },
          {
                "title": "BANANZA!",
                "description": "Land 3 FS scatter symbols to activate with 10 free spins. Increased chance of landing Spreading Banana symbols with high-value multipliers. Spreading Bananas land on more favorable positions. Landing additional FS symbols awards extra free spins."
          },
          {
                "title": "BANANA BLITZ!",
                "description": "Land 4 FS scatter symbols to activate with 10 free spins. Features Sticky Banana symbols that stay on the grid until the end of the bonus, each receiving a new random multiplier each spin. If at least one Sticky Banana is on the grid and a Go Bananas symbol lands, the Go Bananas mechanic activates - revealing a value between 3-10, creating that many Banana copies from each Sticky Banana. Copied Bananas appear in random positions and take the same multiplier as the originating Sticky Banana."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "All types of Banana symbols are Wild and substitute for other symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Marlin Masters": {
    features: [
          {
                "title": "MARLIN SYMBOL",
                "description": "Marlin symbols bring dynamic payouts to the reels! Each displays a cash prize worth 1-1,000x your bet. Possible values: 1x, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x, 15x, 20x, 25x, 50x, 100x, 250x, 500x, 1000x. Collect them via the Fisherman or a winning Lootline with 3+ symbols."
          },
          {
                "title": "FISHERMAN SYMBOL",
                "description": "The Fisherman collects all Marlin cash prizes on the grid, with multipliers up to 20x to boost your total. Multiple Fishermen work together for even bigger payouts."
          },
          {
                "title": "WILD SYMBOL",
                "description": "The Wild symbol substitutes for all other symbols in the paytable."
          },
          {
                "title": "REEL IT IN! BONUS FEATURE",
                "description": "Land 3 FS symbols to activate with 10 free spins. The Marlin Progress Bar advances each time a Fisherman symbol lands. Upgrade 1 (4 Fishermen): 10 extra spins, all Fisherman multipliers min x2. Upgrade 2: 10 more extra spins, all Fisherman multipliers min x4. Upgrade 3: 10 more spins, all Fisherman multipliers min x10."
          },
          {
                "title": "OFF THE HOOK! BONUS FEATURE",
                "description": "Land 4 FS symbols to activate with 15 free spins. Same Marlin Progress Bar mechanic but with enhanced rewards. All Fisherman multipliers start at min x2. Upgrade 1: 15 more spins, min x4. Upgrade 2: 15 more spins, min x10. Upgrade 3: 15 more spins, min x15."
          },
          {
                "title": "PLENTY OF FISH IN THE SEA BONUS FEATURE",
                "description": "Land 5 FS symbols to activate with 10 free spins. Every Marlin symbol carries a minimum multiplier of 5x. On every spin, at least one Marlin symbol and one Fisherman symbol will land."
          }
    ],
    bonus_games: [],
  },
  "Phoenix Duelreels": {
    features: [
          {
                "title": "DUELREELS",
                "description": "When a VS symbol lands it will expand into a wild DuelReel if it would be part of or create a winning combination. Each DuelReel has two multipliers, connected to the Phoenix and the Water Dragon. The surviving duelist's multiplier is applied across the entire reel. If more than one DuelReels are part of the same winning combination, their multipliers are added together. Only 1 VS symbol can land on a reel at a time."
          },
          {
                "title": "RESURRECTION SPINS",
                "description": "When the Phoenix loses the duel on at least one DuelReel, you will be awarded a Resurrection Spin re-spin. During this re-spin, at least 1 VS symbol is guaranteed to land. The process repeats until no DuelReels with losing Phoenixes appear."
          },
          {
                "title": "BONUS GAMBLE",
                "description": "When entering a bonus game, you may choose to gamble with 5 Phoenix Eggs. Choose up to 3 Eggs, each possibly containing 2-10 free spins or a Bonus Upgrade to the RISE OF THE PHOENIX bonus."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [
          {
                "title": "FIRE AND WATER BONUS GAME",
                "description": "Activate with 10 free spins by landing 3 FS scatter symbols. Retains base game features with better chance of landing more VS symbols. Landing additional FS symbols awards extra free spins."
          },
          {
                "title": "RISE OF THE PHOENIX BONUS GAME",
                "description": "Activate with 10 free spins by landing 4 FS scatter symbols. Same enhanced features as FIRE AND WATER, plus enhanced RESURRECTION SPIN re-spins where the number of VS symbols that land equals the number of DuelReels with losing Phoenixes."
          }
    ],
  },
  "Le Viking": {
    features: [
          {
                "title": "RAID SPINS RE-SPIN MODE",
                "description": "Land 6 Coins of any kind at the same time to enter Raid Spins. This re-spin mode gives 3 refilling lives and contains only dead symbols, Coins, Diamonds and Clover symbols. All Coins, Diamonds, and Clovers become sticky. Each spin consumes 1 life; land a Coin, Diamond, or Clover to refill lives to 3. At the end, all Coins and Diamonds reveal a random cash value: Bronze Coins (0.2x-4x), Silver Coins (5x-20x), Gold Coins (25x-100x), Diamonds (150x-500x). Clover symbols then activate: Green Clover multiplies adjacent Coins/Diamonds (x2-x20), Gold Clover multiplies ALL Coins/Diamonds on the grid (x2-x20)."
          },
          {
                "title": "BERSERK FREE SPINS",
                "description": "Land 3 FS scatter symbols to activate with 3 refilling lives. At the start, FS positions receive Grid Multipliers with x2 multipliers. All Coins, Diamonds and Clover symbols become sticky. Magic Cauldron symbols activate all Grid Multipliers and Clovers and collect all Coins, Diamonds and previous Cauldrons."
          },
          {
                "title": "VALKYRIE FREE SPINS",
                "description": "Land 4 FS scatter symbols to activate with 3 refilling lives. Same mechanics as BERSERK but starts with 4 Grid Multipliers at x3 multipliers."
          },
          {
                "title": "RAGNAROK FREE SPINS",
                "description": "Land 5 FS scatter symbols to activate with 3 refilling lives. Same mechanics as BERSERK/VALKYRIE but starts with 5 Grid Multipliers at x5 multipliers."
          },
          {
                "title": "JOURNEY TO VALHALLA FREE SPINS",
                "description": "Land 6 FS scatter symbols to activate with 3 refilling lives. Same mechanics as above but starts with 6 Grid Multipliers at x10 multipliers. Bronze and Silver coins don't appear, drastically increasing chances of big wins."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Normal paying symbols and FS symbols do not appear in any bonus game or in Raid Spins."
          }
    ],
    bonus_games: [],
  },
  "Klowns": {
    features: [
          {
                "title": "GAME DESCRIPTION",
                "description": "Welcome to the most thrilling show in town with klowns. This is a 6-reel, 5-row drop cascades game with all-scatter wins. The max win is 10,000 times your bet."
          },
          {
                "title": "TOTAL WIN BAR",
                "description": "All wins are collected in the Total Win Bar outside the grid during each round. Any activated Klown Multipliers are added to the Total Win Bar at the end of a spin."
          },
          {
                "title": "NEEDLE BOXES",
                "description": "Landed Needle Box symbols activate once the grid is settled. Low-Symbol Needle Boxes remove all low-paying symbols (0.1x per removed symbol). High-Symbol Needle Boxes remove all high-paying symbols (0.5x per removed symbol)."
          },
          {
                "title": "KLOWN MULTIPLIERS",
                "description": "Activate at the end of each spin if at least one win occurred. Adding Klown Multipliers (2x, 3x, 4x, 5x, 10x, 15x, 20x, 25x, 50x, 100x, 250x, 500x) add to the Total Win Bar multiplier. Multiplying Klown Multipliers (x2, x3, x4, x5, x10, x20) multiply the Total Win Bar multiplier."
          },
          {
                "title": "LESTER'S CASH CAROUSEL BONUS FEATURE",
                "description": "Land 3 FS scatter symbols to activate with 10 free spins. Increased chance of landing high multipliers. Features a Bounty Balloon that collects all applied multipliers from the Total Win Bar. Epic Needle Boxes clear all symbols and pop the Balloon, combining all multipliers. Balloon resets to 0 at respawn."
          },
          {
                "title": "JESTER'S JACKPOT BONUS FEATURE",
                "description": "Land 4 FS scatter symbols to activate with 10 free spins. Retains LESTER'S CASH CAROUSEL mechanics. Bounty Balloon respawns with the previous multiplier value intact."
          }
    ],
    bonus_games: [],
  },
  "Fire My Laser": {
    features: [
          {
                "title": "BOMBS AWAY",
                "description": "There are 2 different types of Bombs and 2 different types of Lasers. Bombs and Lasers act as the primary win mechanic, hitting positions on the grid and removing symbols. Any paying symbols removed award a payout per paytable. All winnings collected in the Total Win Bar above the grid. Small Bomb: explodes over 3x3 area. Big Bomb: explodes over 5x5 area. X-Laser: shoots diagonal lines to grid edges. Super Laser: shoots diagonal lines with 3-symbol width and instantly destroys all Shields. Orbital Bombardment randomly strikes 3-7 positions (2x2 area each) after grid settles."
          },
          {
                "title": "DEPLOY SHIELDS",
                "description": "Certain symbols have a Shield requiring multiple hits to remove. Shields found on Multiplier symbols and FS symbols. 2-Shield Multipliers (2x-10x) and 3-Shield Multipliers (15x-500x) activate when Shield breaks. All activated Multipliers are added to Total Win Bar, then multiply all collected winnings at end of spin."
          },
          {
                "title": "ALIEN ATTACK",
                "description": "Unlock with 8 free spins by breaking the Shield on an Alien Mind FS symbol. All activated Multipliers are stored in a Progressive Multiplier, applied on any spin where at least one new Multiplier was added."
          },
          {
                "title": "EXTERMINATION",
                "description": "Unlock with 12 free spins by breaking the Shield on a Power Core FS symbol. All activated Multipliers stored in a Progressive Global Multiplier that is always active and applies to the Total Win Bar at end of every spin."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Only one FS symbol can land on the grid at a time."
          }
    ],
    bonus_games: [],
  },
  "Donut Division": {
    features: [
          {
                "title": "GOOEY GUNS AND GOOEY WILDS",
                "description": "When a Gooey Gun symbol lands it shoots Gooey Wild symbols to the left on the same row to the edge of the grid, then transforms into a Gooey Wild. Gooey Guns can land with a multiplier value (1x-100x). All Gooey Wild symbols fired from a Gooey Gun take on the same multiplier value as the Gun. When at least ane Gooey Wild with a multiplier is part of a winning payline, that multiplier is applied to the win."
          },
          {
                "title": "BONUS CHOICE",
                "description": "Landing 3 or 4 FS scatter symbols brings you into the Bonus Choice menu. With 3 FS: choose WAREHOUSE or STAKEOUT. With 4 FS: choose SUPER WAREHOUSE or SUPER STAKEOUT."
          },
          {
                "title": "WAREHOUSE",
                "description": "Enter the bonus with 3 refilling lives. Only special symbols appear: Adding Multipliers (1x-100x), Multiplying Multipliers (x2-x10), Battery symbols and Light-Switch symbols. Two flashlights reveal hidden symbols - land a special symbol to refill lives. Battery reveals 3x3 area. Light-Switch reveals entire grid. At end, Total Multiplier is multiplied with bet to determine win."
          },
          {
                "title": "SUPER WAREHOUSE",
                "description": "Variant of WAREHOUSE where all adding multipliers are minimum 5x."
          },
          {
                "title": "STAKEOUT",
                "description": "Retains base game mechanics with increased chance of landing Gooey Gun symbols and high-value multipliers."
          },
          {
                "title": "SUPER STAKEOUT",
                "description": "Variant of STAKEOUT. After the first Gooey Gun lands on a row, a Gooey Gun is guaranteed to land on that same row every subsequent spin."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Gooey Gun symbols can never land on reel 1. In the base game, FS symbols and Gooey Gun symbols cannot appear at the same time."
          }
    ],
    bonus_games: [],
  },
  "Shaolin Master": {
    features: [
          {
                "title": "CASCADES",
                "description": "When a winning combination occurs, all winning symbols are removed. New symbols cascade in, potentially creating new wins."
          },
          {
                "title": "CHI ORBS",
                "description": "Chi Orbs are wild multiplier symbols. Blue Chi Orb: starts at 1x, increases by +1 after each win participation. Red Chi Orb: starts at 1x, increases by +1 for each symbol in a winning cluster. Balance Chi Orb: appears only on cascades with a value equal to the product of Red and Blue Chi Orb multipliers on the grid. If multiple Chi Orbs are part of the same win, their values are multiplied together before being applied to the win."
          },
          {
                "title": "THE STUDENT",
                "description": "Activate with 10 free spins (3 FS) or 12 free spins (4 FS). Features a special Green Chi Orb and a Green Gem multiplier modifier symbol. Each reel has a multiplier below it that increases by 1x for each winning symbol on that reel. Green Gem modifiers (x2-x10) can also multiply the reel multiplier. When the Green Chi Orb lands on a reel, that reel's multiplier activates (globally applying) and 3 additional spins are awarded."
          },
          {
                "title": "THE MASTER",
                "description": "Activate with 3 refilling lives by landing 5 FS scatter symbols. Stone block symbols appear instead of regular paying symbols. Each reel has a multiplier above it, increased by Multiplier Modifier Blocks (Adding: Blue Gem 2x-10x, Epic Blue Gem 2x-10x; Multiplying: Green Gem x2-x10, Epic Green Gem x2-x10). Ice blocks cause a Multiplier Block to drop into the grid. Crusher Block destroys all Multiplier Blocks in its path and transforms into one block equal to the sum of destroyed values. Feature ends when 3 consecutive spins land no Multiplier Blocks."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Blue and Red Chi Orbs are persistent until end of round."
          }
    ],
    bonus_games: [],
  },
  "Snow Slingers": {
    features: [
          {
                "title": "SNOW-VOLVER SYMBOL",
                "description": "Normal and Epic Snow-volver symbols can land with 1-6 Snowballs. When a Snow-volver lands, Snowballs are thrown at random positions. Normal Snowball: first hit turns position into a wild Snow symbol; second hit adds a random multiplier (2x-200x) turning it into a Snow Multiplier. Epic Snowball: immediately creates a Snow Multiplier. If more than one Snow Multiplier is part of the same winning combination, their multipliers are added together."
          },
          {
                "title": "THROW SNOW! BONUS FEATURE",
                "description": "Land 3 FS scatter symbols to activate. Game transforms - only Snow-volver symbols, Reload symbols and non-paying symbols appear. 3 refilling lives. Six Gift Boxes with adding multipliers (2x-500x) or multiplying multipliers (x2-x20) displayed above the grid. Snowballs thrown at Gift Boxes to add multiplier values to the Snow-volver. Reload symbols reload Normal Snow-volvers and collect multipliers. At end, all sticky Snow-volver and Reload multipliers are added together and multiplied by bet."
          },
          {
                "title": "YOU REAP WHAT YOU SNOW BONUS FEATURE",
                "description": "Land 4 FS scatter symbols to activate with 10 free spins. Maintains base game mechanics. All Snow Multipliers become sticky and stay on the grid until the end of the feature."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Snow and Snow Multiplier symbols substitute for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Duel At Dawn": {
    features: [
          {
                "title": "DUELREELS",
                "description": "When a VS symbol lands it will expand into a wild DuelReel if it would be part of a winning combination once expanded. Each DuelReel has two multipliers for The Outlaw and The Sheriff. The surviving duelist's multiplier is applied across the entire reel. Possible multiplier values: 2x-200x. If more than one DuelReels are part of the same winning combination, their multipliers are added together. Only 1 VS symbol can land on a reel at a time."
          },
          {
                "title": "THE OUTLAW FEATURE",
                "description": "When an Outlaw symbol lands, it expands into a full wild Outlaw reel showing a revolver with 1-6 bullets representing the number of Wild symbols shot onto the grid. Each Outlaw reel also has a multiplier (2x-200x) that affects any winning combination including the Outlaw reel. Maximum 2 Outlaw symbols can appear on one spin."
          },
          {
                "title": "WILD WILD WEST",
                "description": "Land 3 FS scatter symbols to activate with 10 free spins. Maintains base game mechanics with increased chance of high-value multipliers on DuelReels and Outlaw reels, plus increased chance of landing VS and Outlaw symbols."
          },
          {
                "title": "DUSK TIL DAWN",
                "description": "Land 4 FS scatter symbols to activate with 10 free spins. Earn up to 4 DuelSpins with guaranteed VS symbols by landing Outlaw symbols and shooting a full revolver (6 Wilds). First DuelSpin: 2+ VS symbols; Second: 3+ VS symbols; Third: 4+ VS symbols; Fourth: 5 VS symbols. Each DuelSpin also awards 3 additional free spins."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable. A VS symbol and an Outlaw symbol can never land at the same time."
          }
    ],
    bonus_games: [],
  },
  "Wings Of Horus": {
    features: [
          {
                "title": "WILD SYMBOL",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          },
          {
                "title": "ORB OF THE MOON",
                "description": "When the Orb of the Moon symbol lands on the grid, it selects all instances of a random symbol on the grid, then replaces all the selected symbols and itself with a higher-paying symbol or a Wild symbol."
          },
          {
                "title": "ORB OF THE SUN",
                "description": "When the Orb of the Sun symbol lands on the grid, it selects all instances of two random symbols on the grid, then replaces all selected symbols and itself with a higher-paying symbol or a Wild symbol."
          },
          {
                "title": "SACRED SCRIPTURE",
                "description": "If the low symbols land in formation to spell out \"HORUS\" horizontally on the grid, you are awarded a cash payout of 500x your current bet."
          },
          {
                "title": "REVENGE OF THE PHARAOH",
                "description": "Activate with 10 free spins by landing at least 3 FS scatter symbols. Features two progression bars. Golden bar increases with each new win; when filled, purple Orb bar increases by one level. Before the last drop, the purple Orb bar activates: each filled level corresponds to one Orb (Moon or Sun) landing on the final drop (max 5). Purple Orb bar starts at level 1."
          },
          {
                "title": "RISE OF THE FALCON",
                "description": "Activate with 10 free spins by landing at least 4 FS scatter symbols. Same mechanics as REVENGE OF THE PHARAOH, but purple Orb bar starts at level 2."
          }
    ],
    bonus_games: [],
  },
  "Rise Of Ymir": {
    features: [
          {
                "title": "YMIR'S CONQUEST",
                "description": "The Ymir symbol is a wild multiplier (1x-100x). When it lands, it sticks and respins trigger until no new Ymir symbols land. If 4 Ymir symbols stick on the same reel, they merge into a Giant Ymir symbol with all multipliers combined."
          },
          {
                "title": "MEGAMULTIPLIER",
                "description": "When the Megamultiplier symbol lands while Ymir symbols are on the grid, all Ymir multiplier values are added into a global Megamultiplier that applies to all wins. Also awards a respin. Any new Ymir symbols that land during subsequent respins add their multiplier value to the Megamultiplier."
          },
          {
                "title": "DAWN OF GODS",
                "description": "Activate with 10 free spins by landing 3 FS scatter symbols. Maintains YMIR'S CONQUEST and Megamultiplier features with better chance of higher-value Ymir symbols."
          },
          {
                "title": "FURY OF YMIR",
                "description": "Activate with 10 free spins by landing 4 FS scatter symbols. Same features as DAWN OF GODS plus the Megamultiplier remains active between spins once activated. New Ymir symbols add to the global multiplier."
          },
          {
                "title": "FALL OF YMIR",
                "description": "Activate with 3 refilling lives by landing 5 FS scatter symbols. Only dead symbols, Volcanic Ymir, Megamultiplier, and Asgardian Orb symbols appear. Volcanic Ymir sticks with multipliers (1x-100x). Megamultiplier adds all Volcanic Ymir values to a global multiplier. Green Asgardian Orb adds global multiplier value to Volcanic Ymirs on that reel; Golden Asgardian Orb adds to ALL Volcanic Ymirs on the grid. At end, all Volcanic Ymir values are added together and multiplied by bet."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Megamultiplier symbol can only land together with or after a Ymir symbol lands."
          }
    ],
    bonus_games: [],
  },
  "Get The Cheese": {
    features: [
          {
                "title": "SUPER CASCADES",
                "description": "Any time a winning combination occurs, all regular paying symbols of the winning type are also removed from the grid."
          },
          {
                "title": "CHEESE SYMBOL",
                "description": "When a cheese symbol is part of a winning cluster, all symbols except FS and Wild Multipliers are removed from the grid."
          },
          {
                "title": "JUMPING WILD MULTIPLIERS",
                "description": "Wild Multipliers jump to a new position after each cascade. Normal Jumping Wild Multipliers: start at 1x, increase by +1x every jump. Epic Jumping Wild Multipliers: start at 10x, increase by +10x every jump. Maximum 4 on grid at once."
          },
          {
                "title": "FROMAGE FRENZY BONUS FEATURE",
                "description": "Activate with 8 free spins by landing at least 3 FS scatter symbols. Start with 2 persistent Jumping Wild Multipliers. Features a Cheese Meter that fills as Cheese symbols are collected; when full, upgrades to TAKE IT CHEESY bonus with 5 additional spins."
          },
          {
                "title": "TAKE IT CHEESY BONUS FEATURE",
                "description": "Activate with 10 free spins by landing at least 4 FS scatter symbols. Start with 3 persistent Jumping Wild Multipliers. Same Cheese Meter mechanic; upgrades to LIFE'S SO GOUDA with 5 additional spins."
          },
          {
                "title": "LIFE'S SO GOUDA BONUS FEATURE",
                "description": "Activate with 12 free spins by landing at least 5 FS scatter symbols. Start with 4 persistent Jumping Wild Multipliers (at least 1 guaranteed Epic). Wild Multipliers values do NOT reset between spins."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Jumping Wild Multiplier symbols substitute for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Cloud Princess": {
    features: [
          {
                "title": "TOTAL WIN BAR",
                "description": "All wins are collected in the Total Win Bar above the grid during each spin."
          },
          {
                "title": "MULTIPLIER SYMBOLS",
                "description": "Multiplier symbols activate at end of each spin if at least one win occurred. They add together, then the result multiplies the total win. Max value 10,000x. Normal Multiplier: lands with visible value, increases by +1 per cascade (initial: 2x-4x). Super Multiplier: lands with \"?\" revealed when activated, increases by +2 per cascade (initial: 5x-20x). Epic Multiplier: lands with revealed value, doubles per cascade (initial: 5x-100x)."
          },
          {
                "title": "CLOUD SURGE BONUS FEATURE",
                "description": "Activate with 10 free spins by landing 3 FS scatter symbols. All wins collected as pending win amount above the reels, updated after each cascade. Landing multipliers applies their combined value to the total win at end of spin."
          },
          {
                "title": "DIVINE BOOST BONUS FEATURE",
                "description": "Activate with 10 free spins by landing 4 FS scatter symbols. A progressive Divine Multiplier collects all multiplier values that are part of a win, then stores them in a Divine Multiplier portal. Each following winning spin with multipliers adds to the portal and applies the growing total to the win."
          }
    ],
    bonus_games: [],
  },
  "Le Pharaoh": {
    features: [
          {
                "title": "STICKY RE-DROPS",
                "description": "When a winning combination lands, the winning symbols stick and a re-drop is awarded. Sticky symbols create Golden Squares on their positions. Re-drops continue until no further extensions or new winning combinations are created."
          },
          {
                "title": "GOLDEN RICHES",
                "description": "If a Rainbow symbol is on the grid at the end of Sticky Re-drops, it activates Golden Riches. All Golden Squares reveal Bronze Coins (0.2x-4x), Silver Coins (5x-20x), Gold Coins (25x-500x), or special symbols. Green Clover multiplies adjacent Coins/Pot Of Gold (x2-x20). Golden Clover multiplies ALL Coins/Pot Of Gold on the grid (x2-x20). Pot Of Gold symbols collect all Coin values."
          },
          {
                "title": "BONUS CHOICE",
                "description": "Landing 3 or 4 FS scatter symbols brings you into the Bonus Choice menu. With 3 FS: choose LUCK OF THE PHARAOH or LOST TREASURES. With 4 FS: choose SUPER LUCK OF THE PHARAOH or SUPER LOST TREASURES."
          },
          {
                "title": "LUCK OF THE PHARAOH",
                "description": "10 free spins. Retains Sticky Re-drops and Golden Riches. All Golden Squares remain highlighted until end of feature."
          },
          {
                "title": "SUPER LUCK OF THE PHARAOH",
                "description": "Variant of LUCK OF THE PHARAOH with 12 free spins, better chances of higher-value Coins, and guarantees a Clover symbol whenever Golden Riches activates."
          },
          {
                "title": "LOST TREASURES",
                "description": "3 refilling lives. Only dead symbols, Coins, Clovers, Pot Of Gold, and Stone Tablet symbols appear. Adding Stone Tablet adds value to one random Coin each spin (1x-500x). Multiplying Stone Tablet multiplies one random Coin (x2-x20). At end, all Coin and Pot Of Gold values are added and multiplied by bet."
          },
          {
                "title": "SUPER LOST TREASURES",
                "description": "Variant of LOST TREASURES with guaranteed Adding Stone Tablet on first spin and better chances of higher-value Coins."
          },
          {
                "title": "RAINBOW OVER THE PYRAMIDS",
                "description": "Landing 5 FS scatter symbols awards this Epic Bonus with 12 free spins. Retains Sticky Re-drops and Golden Riches with all Golden Squares highlighted throughout. A Rainbow symbol is guaranteed to land on every spin."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Evil Eyes": {
    features: [
          {
                "title": "THE EVIL EYE AND THE EVIL SPREAD MECHANIC",
                "description": "If the Evil Eye symbol lands under a winning symbol, it activates the Evil Spread mechanic. The Evil Eye marks all winning symbols, then rotates to face right or down. The Evil Spread extends the win to the edge of the grid in that direction by replacing all symbols in the path. If the direction is right, there is a chance it also activates downward. Evil Eye can only land on reel 3, row 2-5."
          },
          {
                "title": "WICKED NIGHT BONUS FEATURE",
                "description": "Activate with 3 refilling lives by landing at least 3 FS scatter symbols. Only non-paying symbols, Evil Eye symbols and multiplier scatter symbols appear. Evil Eye glances and collects all multipliers that cross its gaze, adding values to the reel multiplier above that reel. If the gaze crosses another Evil Eye, a multiplier is added to ALL reel multipliers. Adding multipliers: 1x-100x. Multiplying multipliers: x2-x10. At end, all reel multipliers are added together and multiplied by bet."
          },
          {
                "title": "THE GRAVEYARD BONUS FEATURE",
                "description": "Activate with 10 free spins by landing at least 4 FS scatter symbols. Low symbols that have been part of a win spread by Evil Spread will not reappear in future spins."
          },
          {
                "title": "WICKED EPIC DROP",
                "description": "May randomly activate at the start of any base game spin. Transforms into the Wicked Night bonus for just one spin - at least 3 Evil Eye symbols and 4 multipliers guaranteed, with at least one multiplier always collected."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "FS symbols can only land on reels 2-5 in the base game."
          }
    ],
    bonus_games: [],
  },
  "Octo Attack": {
    features: [
          {
                "title": "WILD SYMBOLS AND WILD MULTIPLIER SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable. Wild symbols can also land with one of the following adding multiplier values: 1x-10x."
          },
          {
                "title": "INK STAINS",
                "description": "When there is a win, winning positions are marked with Ink Stains. Ink Stains are removed from the grid after being used by the Tenta-Grab mechanic, and reset between spins."
          },
          {
                "title": "EYE OF OTTO AND THE TENTA-GRAB MECHANIC",
                "description": "The Eye of Otto symbol activates the Tenta-Grab mechanic when it lands on a grid with Ink Stains. The Tenta-Grab randomly grabs one symbol on the grid and replaces all Ink Stained positions and itself with the grabbed symbol. If a Wild or Wild Multiplier is grabbed, there is a chance the replaced symbols become Wild Multipliers."
          },
          {
                "title": "EIGHTH ARM IS THE CHARM BONUS FEATURE",
                "description": "Activate with free spins equal to the number of FS scatter symbols landed (min 3). Ink Stains are not removed between spins until grabbed by the Tenta-Grab mechanic. Landing additional FS symbols awards extra free spins (1 extra spin per 3 FS symbols)."
          }
    ],
    bonus_games: [],
  },
  "Donny Dough": {
    features: [
          {
                "title": "LOOTLINES",
                "description": "When there is a winning payline of Multi-Dough symbols, the payout is determined by combining their values left to right. Adding Multi-Dough: 1x-10x. Revealing Adding Multi-Dough: 15x-500x. Multiplying Multi-Dough: x2-x5. Revealing Multiplying Multi-Dough: x6-x25. Multiplying multipliers that come first on a payline are treated as adding. The resulting value is multiplied by your bet."
          },
          {
                "title": "STICKY DOUGH BONUS FEATURE",
                "description": "Activate with 10 free spins by landing 3 FS scatter symbols. All Multi-Dough symbols are sticky until they are part of a winning payline, then removed on the next spin."
          },
          {
                "title": "STRIKE GOLD BONUS FEATURE",
                "description": "Activate with 10 free spins by landing 4 FS scatter symbols. When Multi-Dough symbols form a winning payline, a light bulb is lit above each reel that contributed. When a Donny's Hat symbol lands, a re-spin is triggered and Multi-Dough symbols equal to the lit light bulbs appear on those reels. Donny's Hat guaranteed on the last spin."
          }
    ],
    bonus_games: [],
  },
  "Dragons Domain": {
    features: [
          {
                "title": "CHARRED LAND",
                "description": "Charred Land symbols are Wild multipliers with 3 charges. After being part of a win, they lose a charge before the next cascade. Each cascade increases the multiplier by 1. If multiple Charred Land symbols are part of a win, their values are added together. Possible initial multiplier values: 2x, 3x, 4x, 5x, 10x."
          },
          {
                "title": "DRAGON SYMBOLS AND DRAGONFIRE",
                "description": "Dragon symbols activate once the grid is settled with no more wins, breathing Dragonfire in a cross-pattern from their position. Dragonfire removes regular paying symbols and refills charges on Charred Land symbols. Gold Dragon symbols have a multiplier (x2-x10); when Dragonfire from a Gold Dragon hits a Charred Land symbol, its multiplier is multiplied by the Gold Dragon's value."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "Charred Land symbols substitute for all symbols in the paytable."
          }
    ],
    bonus_games: [
          {
                "title": "DRAGON'S LAIR BONUS GAME",
                "description": "Land 3 FS scatter symbols to activate with 10 free spins. All Charred Land multipliers are persistent between free spins as long as they have charges left."
          },
          {
                "title": "THE HATCHERY BONUS GAME",
                "description": "Land 4 FS scatter symbols to activate with 10 free spins. Only non-paying symbols, Dragon Eggs, and Dragon symbols appear. Dragon Eggs are cash prizes collected when hit by Dragonfire. Green Eggs: 1-10x bet. Red Eggs: 20-40x bet. Golden Eggs: 50-200x bet. Gold Dragon multiplies egg values."
          }
    ],
  },
  "Sixsixsix": {
    features: [
          {
                "title": "WICKED WHEELS",
                "description": "Activate Blue or Red Wicked Wheels by landing the Blue or Red 6 symbol on the grid (reels 1, 3, 5 only). Once activated, the Wicked Wheel spins and awards the value at the arrow. Blue Wicked Wheel values: Max win, Adding multipliers (5x-100x), Multiplying multipliers (x2-x10), or FS trigger. Red Wicked Wheel values: Max win, Adding multipliers (10x-500x), Multiplying multipliers (x3-x20). Only Blue Wicked Wheels appear in the base game."
          },
          {
                "title": "SPEAK OF THE DEVIL BONUS FEATURE",
                "description": "Activate with 10 free spins by landing one 6 symbol on a Wicked Wheel in the base game. Increased chance of landing Red and Blue Wicked Wheels."
          },
          {
                "title": "LET HELL BREAK LOOSE! BONUS FEATURE",
                "description": "Activate with 10 free spins by landing a 6 symbol on two Wicked Wheels simultaneously. Increased chance of landing Red Wicked Wheels; Blue Wicked Wheels do not appear."
          },
          {
                "title": "WHAT THE HELL BONUS FEATURE",
                "description": "Activate with 10 free spins by landing a 6 symbol on three Wicked Wheels simultaneously. A Red Wicked Wheel is guaranteed on every spin. Cannot be purchased."
          },
          {
                "title": "DEAL WITH THE DEVIL",
                "description": "When SPEAK OF THE DEVIL or LET HELL BREAK LOOSE! bonuses are triggered, players may Deal with the Devil. The Deal Wheel can award 5, 8, 12, 16, 20 free spins or a 6 symbol to upgrade to a higher bonus. SPEAK OF THE DEVIL can upgrade to LET HELL BREAK LOOSE; that can upgrade to WHAT THE HELL. May deal once per bonus level."
          }
    ],
    bonus_games: [],
  },
  "Tai The Toad": {
    features: [
          {
                "title": "THE TOAD AND THE POT",
                "description": "The Toad symbol reveals either a Wild symbol or Gold Coins symbol when activated by the Prosperity Pot symbol. All Toad symbols reveal the same type. Gold Coins (1-1000x bet) are cash prizes added together and multiplied by bet. Coin Bag symbols reveal a multiplier (x2-x5) and multiply 1-5 Gold Coins symbols with that value."
          },
          {
                "title": "TOAD BONUS",
                "description": "Land 3 FS scatter symbols to trigger with 10 free spins. Land Dragon (adds 1-5 Toad Points to reel) and Double Dragon (adds 1-5 Toad Points to all reels) symbols. When Prosperity Pot lands, Toad symbols fill random positions on corresponding reels. Toad Points reset after each Prosperity Pot. Filling all Toad Points meters awards 10 additional spins."
          },
          {
                "title": "GOLDEN TOAD BONUS",
                "description": "Land 4 FS scatter symbols to trigger with 10 free spins. Same mechanics as Toad Bonus but with progressive Toad Points that do not reset after each Prosperity Pot activation."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Twisted Lab": {
    features: [
          {
                "title": "ROTOGRID",
                "description": "The RotoGrid symbol can land with 1-4 charges, each causing the grid to rotate 90 degrees clockwise. Wins from the initial drop are calculated before RotoGrid activates."
          },
          {
                "title": "OOZING BEAKERS",
                "description": "When the grid rotates, Oozing Beakers break and spill Ooze to the bottom of the reel. All Ooze-covered positions become Wild symbols. Purple Ooze: no multiplier. Blue Ooze: adding multipliers (2x-100x). Pink Ooze: multiplying multipliers (x2-x10). When Blue and Pink Ooze combine, the result is Green Ooze with a multiplying multiplier."
          },
          {
                "title": "UNLEASH THE OOZE! BONUS FEATURE",
                "description": "Activate with 10 free spins by landing 3 FS scatter symbols. Increased chance of landing RotoGrid symbols, FS symbols and Oozing Beakers."
          },
          {
                "title": "THE TWIST OF THE TWISTED! BONUS FEATURE",
                "description": "3 refilling lives. Only Blue Twisters, Pink Twisters, Collect symbols, RotoGrid symbols and non-paying symbols appear. Each Twister has four rotating multiplier values; the top value is active. Blue Twisters rotate with the grid. Pink Twisters rotate on every spin plus with the grid. Collect symbols activate and gather all current Twister values. At end, all Twister values and collected amounts are added together and multiplied by bet."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "In THE TWIST OF THE TWISTED! bonus, RotoGrid symbols can land on all reels."
          }
    ],
    bonus_games: [],
  },
  "Ze Zeus": {
    features: [
          {
                "title": "SUPER CASCADES",
                "description": "Any time a winning combination occurs, all regular paying symbols of the winning type are also removed from the grid."
          },
          {
                "title": "WIN TO WIN",
                "description": "After a winning combination, the squares behind winning symbols become highlighted as Divine Squares. The Hand of Zeus symbol activates Divine Squares after all wins, revealing Bronze, Silver, or Gold Coins and possibly Vessel of Wealth or Zap of Zeus symbols. Zap of Zeus multiplies adjacent Coins. Vessel of Wealth collects all Coin values. After the last Vessel activates, all remaining Divine Squares reveal again."
          },
          {
                "title": "WHAT IF ZEUS WAS ONE OF US?",
                "description": "Activate with free spins by landing 3 FS scatter symbols. Divine Squares remain highlighted between spins until activated. Landing 4 FS upgrades to ZE ZEUS TAKE THE WHEEL."
          },
          {
                "title": "ZE ZEUS TAKE THE WHEEL",
                "description": "Activate with free spins by landing 4 FS scatter symbols. All Divine Squares remain highlighted throughout the whole bonus, even after being activated."
          },
          {
                "title": "ZE ZEUS MIGHT SUPERSTAR",
                "description": "Activate with free spins by landing 5 FS scatter symbols. All Divine Squares remain highlighted, Hand of Zeus guaranteed on every spin, and Bronze Coins do not appear."
          },
          {
                "title": "SPECIAL SYMBOLS",
                "description": "The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Cursed Crypt": {
    features: [
          {
                "title": "CURSED REELS",
                "description": "When the Curse symbol lands, it spreads the Curse upwards to the top of the reel and creates Cursed Positions. The Cursed Positions will be replaced with a random symbol."
          },
          {
                "title": "WRATH OF SOBEK",
                "description": "Activate this bonus feature with 10 free spins by landing 3 FS scatter symbols at the same time during the base game. Throughout this bonus, there is an increased chance of landing Curse symbols! Landing additional FS symbols at the same time during the feature awards additional free spins: 2 FS symbols award 2 extra spins; 3 FS symbols award 4 extra spins."
          },
          {
                "title": "TOMB OF TUTANKHAMUN",
                "description": "Activate this bonus feature with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. In this bonus game, the Curse symbol can only fill the Cursed Positions with high-paying symbols or Wild symbols. Landing additional FS symbols at the same time during the feature awards additional free spins: 2 FS symbols award 2 extra spins; 3 FS symbols award 4 extra spins. The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Slayers Inc": {
    features: [
          {
                "title": "SLAYER DUELREELSâ_x0084_¢",
                "description": "A landed VS symbol will expand if it will form part of a win once expanded. Once triggered, it will expand to cover the entire reel and display two slayers with different multipliers. A duel will take place, and the surviving slayer's multiplier will be applied across the entire reel. At this point the entire reel also turns Wild. If more than one duel is part of the same win the values will first be added and then multiplied with the line wins. The possible multiplier values are 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x, 15x, 20x, 25x, 50x, 100x, 250x, 500xâ_x0080__x008b_â_x0080__x008b_. If you land one VS symbol on each reel so that the whole grid is covered, the grid will be treated as entirely Wild. Each reel can land only one VS symbol at once."
          },
          {
                "title": "RISE OF THE SYNDICATE",
                "description": "Land 3 FS scatter symbols at the same time in the base game to activate the RISE OF THE SYNDICATE bonus feature with 10 free spins! In this bonus feature there is a higher chance of landing a VS symbol! Landing additional FS symbols at the same time during the feature awards additional free spins: 2 FS symbols award 2 extra spins; 3 FS symbols award 4 extra spins."
          },
          {
                "title": "WILD SLAYERS",
                "description": "Land 4 FS scatter symbols at the same time in the base game to activate the WILD SLAYERS bonus feature with 10 free spins! This bonus maintains the mechanics of the base game. On top of that, there is a chance to activate the Slicer mechanic whenever a VS symbol lands. The Slicer mechanic will add a full row of Wild symbols on a randomly selected row on the grid. Landing additional FS symbols at the same time during the feature awards additional free spins: 2 FS symbols award 2 extra spins. 3 FS symbols award 4 extra spins."
          },
          {
                "title": "ONE SLAYER TO SLAY THEM ALL",
                "description": "Land 5 FS scatter symbols at the same time in the base game to activate the ONE SLAYER TO SLAY THEM ALL bonus feature with 10 free spins! This bonus feature maintains the mechanics of the WILD SLAYERS bonus. On top of that, the Slayer DuelReelsâ_x0084_¢ mechanic and the Slicer mechanic are guaranteed to activate on every spin!"
          },
          {
                "title": "BEST OF BONUS",
                "description": "Land the Best of Bonus scatter symbol at the same time as the required amount of FS scatter symbols in the base game to trigger the Best of Bonus versions of the bonus features: Land 3 FS symbols and a Best of Bonus symbol to trigger BEST OF RISE OF THE SYNDICATE; Land 4 FS symbols and a Best of Bonus symbol to trigger BEST OF WILD SLAYERS; Land 5 FS symbols and a Best of Bonus symbol to trigger BEST OF ONE SLAYER TO SLAY THEM ALL. In the Best of Bonus versions of the bonus features, three rounds of the bonus feature is played out in a row. The resulting win from each round is stored on the scoreboard outside the grid. At the end of the third and final round, the highest value from the scoreboard is awarded to the player. The Wild symbol substitutes for all symbols in the paytable. The Best of Bonus symbol can only appear in the base game. FS symbols do not appear in the ONE SLAYER TO SLAY THEM ALL bonus feature."
          }
    ],
    bonus_games: [],
  },
  "Jelly Slice": {
    features: [
          {
                "title": "SLICER MECHANIC",
                "description": "During the game, there is a chance to activate 1 Slicer per reel before the drop starts. The Slicer will slice all symbols that pass through it into 2, 3 or 4 pieces, depending on the Slicer value. Each sliced symbol piece counts as one symbol towards any potential wins."
          },
          {
                "title": "RAZOR-SHARP BONUS",
                "description": "Land 5-20 FS scatter symbols during the base game to activate the RAZOR-SHARP bonus game. Each landed FS symbol corresponds to one awarded free spin in the bonus game. During the bonus game there is an increased chance to activate Slicers. Landing an additional FS symbol during the feature awards additional free spins. The number of free spins awarded is determined by the number of FS symbols that are present on the grid after the landed FS symbol has, or has not, been sliced: 1 FS symbols awards 1 extra spin; 2 FS symbols awards 2 extra spins; 3 FS symbols awards 3 extra spins; 4 FS symbols awards 4 extra spins. The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
  "Keep Em": {
    features: [
          {
                "title": "CASH'EM",
                "description": "Cash symbols award a prize when collected! Cash symbols can display a value from one of the following: 1x, 2x, 3x, 4x, 5x, 10x, 25x, 50x, 100x, 250x, 500x, 1000x."
          },
          {
                "title": "GET'EM",
                "description": "Cash symbols are collected if a GET 'EM scatter symbol appears at the same time as at least one Cash symbol. If more than one GET'EM symbol lands on the grid, each one will collect all the Cash symbols on the grid once. The collected Cash prizes are added together and displayed in the Total Win bar. At the end of the round, the Total Win is multiplied by your bet to form the final win."
          },
          {
                "title": "KEEP'EM",
                "description": "Reels 3 and 4 on the grid are the KEEP'EM reels. When a GET'EM symbol, FS symbol and/or a Cash prize lands on either of the KEEP'EM reels, the KEEP'EM reels will be activated and 3 re-spins will be awarded. The remaining re-spins are displayed in the Heart Counter. The symbol that activated the KEEP'EM reels will stay on the grid until the end of the last re-spin. Additional GET'EM symbols, FS symbols and/or Cash prizes that land during the re-spins will also become locked and stay on the grid until the end of the last re-spin. Cash prizes and GET'EM symbols will activate on every new re-spin. Throughout the 3 re-spins, there is a chance to land the Heart symbol, which will award enough additional re-spins to completely fill the Heart Counter."
          },
          {
                "title": "KEEP'EM COMIN' BONUS FEATURE",
                "description": "Activate this bonus feature with 10 free spins by landing 3 FS scatter symbols at the same time during the base game. Throughout this bonus, there is an increased chance of landing GET'EM symbols, FS symbols and Cash prizes! Landing additional FS symbols at the same time during the feature awards additional free spins: 3 FS symbols award 4 extra spins. 4 FS symbols award 6 extra spins."
          },
          {
                "title": "KEEP YOUR FRIENDS CLOSEâ_x0080_¦ BONUS FEATURE",
                "description": "Activate this bonus feature with 10 free spins by landing 4 FS scatter symbols at the same time during the base game. In this bonus game, landed Cash prizes stay on the grid until they are collected by a GET'EM symbol. Both the collected Cash prizes and the GET'EM symbol will spin out at the start of the next spin. Whenever there is a full row or a full reel of Cash prizes on the grid, the row or reel will automatically collect, even if there is no GET'EM symbol on the grid, and spin out at the start of the next spin. If there are one or more GET'EM symbols on the grid, they will also collect the Cash prizes separately. Landing additional FS symbols at the same time during the feature awards additional free spins: 3 FS symbols award 4 extra spins. 4 FS symbols award 6 extra spins."
          },
          {
                "title": "KEEP YOUR CANNY CLOSER! BONUS FEATURE",
                "description": "Activate this bonus feature with 10 free spins by landing 5 FS scatter symbols at the same time during the base game. The mechanics of this bonus game are identical to the KEEP YOUR FRIENDS CLOSEâ_x0080_¦ bonus. On top of that, 3 Cash prizes and 1 GET'EM symbol are guaranteed to land on every spin."
          }
    ],
    bonus_games: [],
  },
  "Divine Drop": {
    features: [
          {
                "title": "WILD MULTIPLIER",
                "description": "The Wild Multiplier symbol substitutes for all other symbols in the paytable and multiplies the value of any winning combination that it is part of. Wild Multipliers can land with one of the following values: 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x, 25x, 50x, 100x, 200x If more than one Wild Multiplier is part of the same winning combination, their values are added together before being applied to the win. Wild Multipliers may land with up to 3 Vitality, shown on the symbol as red hearts. While a Wild Multiplier has Vitality remaining, it stays sticky on the grid and awards respins. For each respin awarded, 1 Vitality is removed from every Wild Multiplier on the grid. When a Wild Multiplier reaches 0 Vitality, it will be removed on the next spin or in the paytable."
          },
          {
                "title": "APHRODITE'S LOVE",
                "description": "When the Heart symbol lands it triggers Aphrodite's Love and restores 1 - 3 Vitality to all Wild Multipliers on the grid."
          },
          {
                "title": "ZEUS'S THUNDER",
                "description": "When the X symbol lands it activates Zeus's Thunder and calls down a bolt of lightning that doubles the multiplier value of all Wild Multipliers on the grid!"
          },
          {
                "title": "FS COLLECT",
                "description": "Land 3 or 4 FS scatter symbols at the same time during the base game to trigger one of the bonus games. You can also trigger one of the bonuses by collecting FS symbols during respins. If only 1 or 2 FS symbols land on a spin they are collected in the Bonus Meter above the reels if there is at least one Wild Multiplier with 1 or more Vitality. Once the Bonus Meter reaches 3 or 4 collected FS symbols, it will trigger the corresponding bonus game at the end of the round (after any potential respins have been awarded)."
          },
          {
                "title": "TRICKS OF HADES",
                "description": "Land or collect 3 FS symbols during the base game to activate the TRICKS OF HADES Bonus with 8 free spins. During the bonus there is an increased chance of landing Wild Multipliers and special symbols!"
          },
          {
                "title": "TRIPLE TRICKS OF HADES",
                "description": "Land or collect 4 FS symbols during the base game to activate the TRIPLE TRICKS OF HADES Bonus with 8 free spins. During the bonus there is an increased chance of landing Wild Multipliers and special symbols! Furthermore, the minimum value of the Wild Multipliers that land is 3x. The Wild symbol substitutes for all symbols in the paytable."
          }
    ],
    bonus_games: [],
  },
};

// Enrich each slot with provider info, URLs, and tags
const SLOTS = RAW_SLOTS.map((s) => {
  if (s.pg) {
    // Push Gaming slot
    return {
      ...s,
      provider_id: "pushgaming",
      provider_name: "Push Gaming",
      provider_website: "https://www.pushgaming.com",
      hacksaw_url: `https://www.pushgaming.com/games/${s.slug}.html`,
      thumbnail_url: s.thumbnail_url || null,
      hero_url: s.hero_url || null,
      features: s.features || [],
      bonus_games: [],
      bonus_buy_rtps: [],
      release_date: null,
      tags: getTags(s),
    };
  }
  if (s.pp) {
    // Pragmatic Play slot
    return {
      ...s,
      provider_id: "pragmatic",
      provider_name: "Pragmatic Play",
      provider_website: "https://www.pragmaticplay.com",
      hacksaw_url: `https://www.pragmaticplay.com/en/games/${s.slug}/`,
      thumbnail_url: null,
      logo_url: null,
      hero_url: PP_HERO[s.name] || null,
      features: [],
      bonus_games: [],
      bonus_buy_rtps: [],
      max_win: s.max_win || null,
      release_date: s.release_date || null,
      tags: getTags(s),
    };
  }
  // Hacksaw Gaming slot
  const hsData = HACKSAW_RTP[s.name] || {};
  const hsFeat = HACKSAW_FEATURES[s.name] || {};
  return {
    ...s,
    rtp: hsData.rtp || s.rtp || null,
    volatility: hsData.volatility || s.volatility || null,
    features: hsFeat.features || s.features || [],
    bonus_games: hsFeat.bonus_games || s.bonus_games || [],
    provider_id: "hacksaw",
    provider_name: "Hacksaw Gaming",
    provider_website: "https://www.hacksawgaming.com",
    hacksaw_url: `https://www.hacksawgaming.com/games/${s.slug}`,
    thumbnail_url: s.game_id
      ? `https://www-live.hacksawgaming.com/casino_thumbnails/${s.game_id}.jpg`
      : null,
    logo_url: s.game_id
      ? `https://www-live.hacksawgaming.com/casino_thumbnails/${s.game_id}_logo_Logo_800width.png`
      : null,
    hero_url: HACKSAW_HERO[s.slug] || null,
    tags: getTags(s),
  };
});

// Search index — includes tag keywords for fuzzy theme matching (enables "rat" → "Get the Cheese")
function buildSearchIndex(slot) {
  const tagKeywords = TAG_RULES
    .filter(([tag]) => slot.tags.includes(tag))
    .flatMap(([, kws]) => kws)
    .join(" ");
  return [slot.name, slot.tagline, slot.tags.join(" "), tagKeywords]
    .join(" ")
    .toLowerCase();
}

SLOTS.forEach((s) => { s._searchIndex = buildSearchIndex(s); });

function searchSlots(query, providerFilter = null) {
  const q = query.trim().toLowerCase();
  let results = providerFilter
    ? SLOTS.filter((s) => s.provider_id === providerFilter)
    : SLOTS;
  if (!q) return results;
  return results.filter((s) => s._searchIndex.includes(q));
}

function getFeaturedSlots() {
  return SLOTS.filter((s) => s.featured);
}

function getSlotsByProvider(providerId) {
  return SLOTS.filter((s) => s.provider_id === providerId);
}
