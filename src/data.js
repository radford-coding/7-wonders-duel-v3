// raw materials (brown) -- raw
// manufactured goods (gray) -- manufactured
// civilian buildings (blue) -- civilian
// scientific buildings (green) -- science
    // globe, scales, sundial, pestle, metronome, quill, wheel
// commercial buildings (yellow) -- commerce
// military buildings (red) -- military
// guilds (purple) -- guild

const cardsAge1 = [
    {
        title: 'lumber yard',
        type: 'raw',
        produces: {
            wood: 1,
        },
        costs: {},
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'logging camp',
        type: 'raw',
        produces: {
            wood: 1,
        },
        costs: {
            gold: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'clay pool',
        type: 'raw',
        produces: {
            clay: 1,
        },
        costs: {},
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'clay pit',
        type: 'raw',
        produces: {
            clay: 1,
        },
        costs: {
            gold: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'quarry',
        type: 'raw',
        produces: {
            stone: 1,
        },
        costs: {},
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'stone pit',
        type: 'raw',
        produces: {
            stone: 1,
        },
        costs: {
            gold: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'glassworks',
        type: 'manufactured',
        produces: {
            glass: 1,
        },
        costs: {
            gold: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'press',
        type: 'manufactured',
        produces: {
            parchment: 1,
        },
        costs: {
            gold: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'guard tower',
        type: 'military',
        produces: {
            shields: 1,
        },
        costs: {},
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'stable',
        type: 'military',
        produces: {
            shields: 1,
        },
        costs: {
            wood: 1,
        },
        chainsInto: 'horseshoe',
        chainsFrom: '',
    },
    {
        title: 'garrison',
        type: 'military',
        produces: {
            shields: 1,
        },
        costs: {
            clay: 1,
        },
        chainsInto: 'sword',
        chainsFrom: '',
    },
    {
        title: 'palisade',
        type: 'military',
        produces: {
            shields: 1,
        },
        costs: {
            gold: 2,
        },
        chainsInto: 'crenellations',
        chainsFrom: '',
    },
    {
        title: 'workshop',
        type: 'science',
        produces: {
            points: 1,
            science: 'metronome',
        },
        costs: {
            parchment: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'apothecary',
        type: 'science',
        produces: {
            points: 1,
            science: 'wheel',
        },
        costs: {
            glass: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'scriptorium',
        type: 'science',
        produces: {
            science: 'quill',
        },
        costs: {
            gold: 2,
        },
        chainsInto: 'book',
        chainsFrom: '',
    },
    {
        title: 'pharmacist',
        type: 'science',
        produces: {
            science: 'pestle',
        },
        costs: {
            gold: 2,
        },
        chainsInto: 'gear',
        chainsFrom: '',
    },
    {
        title: 'stone reserve',
        type: 'commerce',
        produces: {
            buyable: ['stone'],
        },
        costs: {
            gold: 3,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'clay reserve',
        type: 'commerce',
        produces: {
            buyable: ['clay'],
        },
        costs: {
            gold: 3,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'wood reserve',
        type: 'commerce',
        produces: {
            buyable: ['wood'],
        },
        costs: {
            gold: 3,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'tavern',
        type: 'commerce',
        produces: {
            gold: 4,
        },
        costs: {},
        chainsInto: 'jug',
        chainsFrom: '',
    },
    {
        title: 'theater',
        type: 'civilian',
        produces: {
            points: 3,
        },
        costs: {},
        chainsInto: 'comedy',
        chainsFrom: '',
    },
    {
        title: 'altar',
        type: 'civilian',
        produces: {
            points: 3,
        },
        costs: {},
        chainsInto: 'moon',
        chainsFrom: '',
    },
    {
        title: 'baths',
        type: 'civilian',
        produces: {
            points: 3,
        },
        costs: {
            stone: 1,
        },
        chainsInto: 'droplet',
        chainsFrom: '',
    },
];

const cardsAge2 = [
    {
        title: 'sawmill',
        type: 'raw',
        produces: {
            wood: 2,
        },
        costs: {
            gold: 2,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'brickyard',
        type: 'raw',
        produces: {
            clay: 2,
        },
        costs: {
            gold: 2,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'shelf quarry',
        type: 'raw',
        produces: {
            stone: 2,
        },
        costs: {
            gold: 2,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'glassblower',
        type: 'manufactured',
        produces: {
            glass: 1,
        },
        costs: {},
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'drying room',
        type: 'manufactured',
        produces: {
            parchment: 1,
        },
        costs: {},
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'walls',
        type: 'military',
        produces: {
            shields: 2,
        },
        costs: {
            stone: 2,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'horse breeders',
        type: 'military',
        produces: {
            shields: 1,
        },
        costs: {
            clay: 1,
            wood: 1,
        },
        chainsInto: '',
        chainsFrom: 'horseshoe',
    },
    {
        title: 'barracks',
        type: 'military',
        produces: {
            shields: 1,
        },
        costs: {
            gold: 3,
        },
        chainsInto: '',
        chainsFrom: 'sword',
    },
    {
        title: 'archery range',
        type: 'military',
        produces: {
            shields: 2,
        },
        costs: {
            stone: 1,
            wood: 1,
            parchment: 1,
        },
        chainsInto: 'target',
        chainsFrom: '',
    },
    {
        title: 'parade ground',
        type: 'military',
        produces: {
            shields: 2,
        },
        costs: {
            clay: 2,
            glass: 1,
        },
        chainsInto: 'galea',
        chainsFrom: '',
    },
    {
        title: 'library',
        type: 'science',
        produces: {
            science: 'quill',
            points: 2,
        },
        costs: {
            stone: 1,
            wood: 1,
            glass: 1,
        },
        chainsInto: '',
        chainsFrom: 'book',
    },
    {
        title: 'dispensary',
        type: 'science',
        produces: {
            science: 'pestle',
            points: 2,
        },
        costs: {
            clay: 2,
            stone: 1,
        },
        chainsInto: '',
        chainsFrom: 'gear',
    },
    {
        title: 'school',
        type: 'science',
        produces: {
            science: 'wheel',
            points: 1,
        },
        costs: {
            wood: 1,
            parchment: 2,
        },
        chainsInto: 'harp',
        chainsFrom: '',
    },
    {
        title: 'laboratory',
        type: 'science',
        produces: {
            science: 'metronome',
            points: 1,
        },
        costs: {
            wood: 1,
            glass: 2,
        },
        chainsInto: 'lamp',
        chainsFrom: '',
    },
    {
        title: 'forum',
        type: 'commerce',
        produces: {
            chooseOne: ['glass', 'parchment'],
        },
        costs: {
            gold: 3,
            clay: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'caravansery',
        type: 'commerce',
        produces: {
            chooseOne: ['wood', 'clay', 'stone'],
        },
        costs: {
            gold: 2,
            glass: 1,
            parchment: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'customs house',
        type: 'commerce',
        produces: {
            buyable: ['parchment', 'glass'],
        },
        costs: {
            gold: 4,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'brewery',
        type: 'commerce',
        produces: {
            gold: 6,
        },
        costs: {},
        chainsInto: 'cask',
        chainsFrom: '',
    },
    {
        title: 'courthouse',
        type: 'civilian',
        produces: {
            points: 5,
        },
        costs: {
            wood: 2,
            glass: 1,
        },
        chainsInto: '',
        chainsFrom: '',
    },
    {
        title: 'statue',
        type: 'civilian',
        produces: {
            points: 4,
        },
        costs: {
            clay: 2,
        },
        chainsInto: '',
        chainsFrom: 'comedy',
    },
    {
        title: 'temple',
        type: 'civilian',
        produces: {
            points: 4,
        },
        costs: {
            wood: 1,
            parchment: 1,
        },
        chainsInto: '',
        chainsFrom: 'moon',
    },
    {
        title: 'aqueduct',
        type: 'civilian',
        produces: {
            points: 5,
        },
        costs: {
            stone: 3,
        },
        chainsInto: '',
        chainsFrom: 'droplet',
    },
    {
        title: 'rostrum',
        type: 'civilian',
        produces: {
            points: 4,
        },
        costs: {
            stone: 1,
            wood: 1,
        },
        chainsInto: 'parthenon',
        chainsFrom: '',
    },
];

const cardsAge3 = [
    {
        title: 'fortifications',
        type: 'military',
        produces: {
            shields: 2,
        },
        costs: {
            stone: 2,
            clay: 1,
            parchment: 1,
        },
        chainsInto: '',
        chainsFrom: 'crenellations',
    },
];

const guilds = [];

const wonders = [
    {
        title: 'the appian way',
        costs: {
            stone: 2,
            clay: 2,
            parchment: 1,
        },
        produces: {
            points: 3,
            gold: 3,
            opponentGold: -3,
        },
        playAgain: true,
    },
    {
        title: 'circus maximus',
        costs: {
            stone: 2,
            wood: 1,
            glass: 1,
        },
        produces: {
            points: 3,
            shields: 1,
        },
        playAgain: false,
        discardOpponentManufactured: true,
    },
    {
        title: 'the colossus',
        costs: {
            clay: 3,
            glass: 1,
        },
        produces: {
            points: 3,
            shields: 2,
        },
        playAgain: false,
    },
    {
        title: 'the great library',
        costs: {
            wood: 3,
            glass: 1,
            parchment: 1,
        },
        produces: {
            points: 4,
        },
        playAgain: false,
        chooseOneDiscardedProgressTokenFromThreeRandom: true,
    },
    {
        title: 'the great lighthouse',
        costs: {
            wood: 1,
            stone: 1,
            parchment: 2,
        },
        produces: {
            points: 4,
            chooseOne: ['stone', 'clay', 'wood'],
        },
        playAgain: false,
    },
    {
        title: 'the hanging gardens',
        costs: {
            wood: 2,
            glass: 1,
            parchment: 1,
        },
        produces: {
            points: 3,
            gold: 6,
        },
        playAgain: true,
    },
    {
        title: 'the mausoleum',
        costs: {
            clay: 2,
            glass: 2,
            parchment: 1,
        },
        produces: {
            points: 2,
        },
        playAgain: false,
        constructOneDiscardedCard: true,
    },
    {
        title: 'piraeus',
        costs: {
            wood: 2,
            stone: 1,
            clay: 1,
        },
        produces: {
            points: 2,
            chooseOne: ['glass', 'parchment'],
        },
        playAgain: true,
    },
    {
        title: 'the pyramids',
        costs: {
            stone: 3,
            parchment: 1,
        },
        produces: {
            points: 9,
        },
        playAgain: false,
    },
    {
        title: 'the sphinx',
        costs: {
            stone: 1,
            clay: 1,
            glass: 2,
        },
        produces: {
            points: 6,
        },
        playAgain: true,
    },
    {
        title: 'the statue of zeus',
        costs: {
            stone: 1,
            wood: 1,
            clay: 1,
            parchment: 2,
        },
        produces: {
            points: 3,
            shields: 1,
        },
        playAgain: false,
        discardOpponentRaw: true,
    },
    {
        title: 'the temple of artemis',
        costs: {
            wood: 1,
            stone: 1,
            glass: 1,
            parchment: 1,
        },
        produces: {
            gold: 12,
        },
        playAgain: true,
    },
];

const cardColors = {
    raw: '#622219',
    manufactured: '#5E5C5C',
    civilian: '#0078AF',
    science: '#007041',
    commerce: '#F47621',
    military: '#BD151D',
    guild: '#835D99',
};

export {
    cardsAge1,
    cardsAge2,
    cardsAge3,
    guilds,
    wonders,
    cardColors,
};