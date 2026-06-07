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
  { game_id: null, name: "Ultimate Slot Of America", slug: "ultimate-slot-of-america", rtp: null, max_win: null, release_date: null, tagline: "Stars, stripes, and spinning reels — this is the slot that embodies the spirit of America. Big wins, big dreams, the ultimate jackpot.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Spinman", slug: "spinman", rtp: null, max_win: null, release_date: null, tagline: "In a world where only spins can save humanity, one hero rises. Spinman — the reel superhero you never knew you needed.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Pray For Three", slug: "pray-for-three", rtp: null, max_win: null, release_date: null, tagline: "Three is the magic number! All it takes is three lucky symbols to change your fortune forever. Get on your knees and pray for three.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Danny Dollar", slug: "danny-dollar", rtp: null, max_win: null, release_date: null, tagline: "Meet Danny Dollar — the most cash-obsessed character in the slots universe. He's rolling in it, and he wants to share.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Rad Maxx", slug: "rad-maxx", rtp: null, max_win: null, release_date: null, tagline: "Radical to the MAXX! Rad Maxx is the totally tubular slot cranking up the volume on wins.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Reign Of Rome", slug: "reign-of-rome", rtp: null, max_win: null, release_date: null, tagline: "All roads lead to Rome — and to riches! The Roman Empire is at its height and the spoils of conquest await.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Fighter Pit", slug: "fighter-pit", rtp: null, max_win: null, release_date: null, tagline: "The arena is ready, the crowd is roaring, and the prize money is waiting. Step into the Fighter Pit and battle for the championship purse.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Wishbringer", slug: "wishbringer", rtp: null, max_win: null, release_date: null, tagline: "The legendary Wishbringer has the power to grant any desire. Spin the reels, make your wish, and let the magic do the rest.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Life And Death", slug: "life-and-death", rtp: null, max_win: null, release_date: null, tagline: "In the timeless struggle between life and death, fortune favours the brave. Spin the reels of fate.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Dorks Of The Deep", slug: "dorks-of-the-deep", rtp: null, max_win: null, release_date: null, tagline: "Don't let their goofy looks fool you — the Dorks of the Deep are sitting on a treasure trove under the sea.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Strength Of Hercules", slug: "strength-of-hercules", rtp: null, max_win: null, release_date: null, tagline: "With the strength of a god behind every spin, the labours of fortune are yours to conquer alongside the legendary Hercules.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Hounds Of Hell", slug: "hounds-of-hell", rtp: null, max_win: null, release_date: null, tagline: "The fearsome hounds of the underworld have been unleashed upon the reels. Run with the pack for infernal riches.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Frkn Bananas", slug: "frkn-bananas", rtp: null, max_win: null, release_date: null, tagline: "This game is FRKN BANANAS! A fruit-fuelled frenzy where the wilds go wild and the bonuses go even wilder.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Marlin Masters", slug: "marlin-masters", rtp: null, max_win: null, release_date: null, tagline: "Master the open seas! The Marlin Masters are legendary anglers chasing the greatest catch in the ocean.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Phoenix Duelreels", slug: "phoenix-duelreels", rtp: null, max_win: null, release_date: null, tagline: "Rise from the ashes and duel! The phoenix rises and the DuelReels spin in this mythical battle for fortune.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Le Viking", slug: "le-viking", rtp: null, max_win: null, release_date: null, tagline: "The most daring Norse warrior has set sail for riches. Pillage the reels, plunder the bonuses, and sail home victorious.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Klowns", slug: "klowns", rtp: null, max_win: null, release_date: null, tagline: "These Klowns mean business! The big top has come to town — but these aren't ordinary clowns. They're here for your jackpot.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Fire My Laser", slug: "fire-my-laser", rtp: null, max_win: null, release_date: null, tagline: "In a sci-fi universe of lasers and neon, the trigger-happy hero is locked and loaded. Fire your laser at the reels.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Donut Division", slug: "donut-division", rtp: null, max_win: null, release_date: null, tagline: "Reporting for duty — and donuts! The Donut Division is on a mission to deliver wins with a side of sprinkles.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Shaolin Master", slug: "shaolin-master", rtp: null, max_win: null, release_date: null, tagline: "An ancient warrior of unparalleled skill has mastered both the martial arts and the reels. Follow the path of enlightenment.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Snow Slingers", slug: "snow-slingers", rtp: null, max_win: null, release_date: null, tagline: "The Snow Slingers are locked in the greatest snowball fight the world has ever seen. Sling your way to winter wins.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Duel At Dawn", slug: "duel-at-dawn", rtp: null, max_win: null, release_date: null, tagline: "As the first light breaks, two gunslingers face each other across the dusty street. Only one walks away with the prize.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Wings Of Horus", slug: "wings-of-horus", rtp: null, max_win: null, release_date: null, tagline: "Horus spreads his mighty wings over the Egyptian reels. Under his divine gaze, pharaonic treasures are yours to claim.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Rise Of Ymir", slug: "rise-of-ymir", rtp: null, max_win: null, release_date: null, tagline: "From the ancient frost and fire of Norse mythology, the primordial giant Ymir rises to shake the world.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Get The Cheese", slug: "get-the-cheese", rtp: null, max_win: null, release_date: null, tagline: "In a world full of traps and obstacles, one brave mouse is on a mission to get the cheese. Navigate the reels — grab the prize!", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Cloud Princess", slug: "cloud-princess", rtp: null, max_win: null, release_date: null, tagline: "High above the world, the Cloud Princess reigns over a sky kingdom of incredible riches. Ascend to her realm.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Le Pharaoh", slug: "le-pharaoh", rtp: null, max_win: null, release_date: null, tagline: "Le Pharaoh commands the sands of time and the riches of the Nile. Enter his domain and discover the treasures buried beneath the pyramids.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Evil Eyes", slug: "evil-eyes", rtp: null, max_win: null, release_date: null, tagline: "Ancient and all-seeing, the Evil Eyes watch your every spin. Under their mysterious gaze, cursed gold and dark fortune await.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Octo Attack", slug: "octo-attack", rtp: null, max_win: null, release_date: null, tagline: "Eight arms, infinite wins! The mighty octopus has launched its attack on the reels, tentacles slapping wilds into place.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Donny Dough", slug: "donny-dough", rtp: null, max_win: null, release_date: null, tagline: "From humble beginnings to high-rolling wins — Donny Dough is the rags-to-riches story of the slot world.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Dragons Domain", slug: "dragons-domain", rtp: null, max_win: null, release_date: null, tagline: "In the darkest mountain, a fearsome dragon guards its hoard of gold. Brave the fire and claim what the dragon has been keeping from you.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Sixsixsix", slug: "sixsixsix", rtp: null, max_win: null, release_date: null, tagline: "666 is the most feared and fabled number in existence. Spin the number of the beast and unleash diabolical riches.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Tai The Toad", slug: "tai-the-toad", rtp: null, max_win: null, release_date: null, tagline: "Tai the Toad is small but mighty, hopping through lily pads and lucky symbols to bring you the biggest wins in the pond.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Twisted Lab", slug: "twisted-lab", rtp: null, max_win: null, release_date: null, tagline: "Deep in a secret underground facility, a deranged scientist is conducting experiments on the reels with explosive results.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Ze Zeus", slug: "ze-zeus", rtp: null, max_win: null, release_date: null, tagline: "Ze Zeus has spoken! The king of the gods descends from Mount Olympus to electrify the reels with divine jackpots.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Cursed Crypt", slug: "cursed-crypt", rtp: null, max_win: null, release_date: null, tagline: "An ancient burial chamber holds a terrible curse — and unimaginable treasure. Only those brave enough to spin can break the curse.", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Slayers Inc", slug: "slayers-inc", rtp: null, max_win: "15,000x", release_date: null, tagline: "Monster hunting is big business! Slayers Inc. is the most elite monster-slaying outfit in the world. Slay the beasts, collect the bounty.", volatility: "5/5", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Jelly Slice", slug: "jelly-slice", rtp: null, max_win: "10,000x", release_date: null, tagline: "Slice through the reels for sweet wins! Jelly Slice is the most deliciously satisfying slot around.", volatility: "3/5", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Keep Em", slug: "keep-em", rtp: null, max_win: "10,000x", release_date: null, tagline: "Keep Em if you've got em! Hold your winners, spin the rest, and build the ultimate winning combination.", volatility: "3/5", features: [], bonus_games: [], featured: false },
  { game_id: null, name: "Divine Drop", slug: "divine-drop", rtp: null, max_win: "10,000x", release_date: null, tagline: "The Divine is dropping in! Sacred symbols rain down from the heavens in a cascade of divine fortune.", volatility: "3/5", features: [], bonus_games: [], featured: false },
];

// Enrich each slot with provider, thumbnail URL, and tags
const SLOTS = RAW_SLOTS.map((s) => ({
  ...s,
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
  hero_url: s.game_id
    ? `https://www-live.hacksawgaming.com/casino_thumbnails/${s.game_id}_hero_Devices_Desktop.png`
    : null,
  tags: getTags(s),
}));

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
