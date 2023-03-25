const PokeList = [
  {
    id: 1,
    name: 'Bulbasaur',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 45,
  },
  {
    id: 2,
    name: 'Ivysaur',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 45,
  },
  {
    id: 3,
    name: 'Venusaur',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 45,
  },
  {
    id: 4,
    name: 'Charmander',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 45,
  },
  {
    id: 5,
    name: 'Charmeleon',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 45,
  },
  {
    id: 6,
    name: 'Charizard',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    type: {
      0: 'Fire',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 7,
    name: 'Squirtle',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 8,
    name: 'Wartortle',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 9,
    name: 'Blastoise',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 10,
    name: 'Caterpie',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    type: {
      0: 'Bug'
    },
    got: false,
    chance: 225,
  },
  {
    id: 11,
    name: 'Metapod',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    type: {
      0: 'Bug'
    },
    got: false,
    chance: 120,
  },
  {
    id: 12,
    name: 'Butterfree',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    type: {
      0: 'Bug',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 13,
    name: 'Weedle',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    type: {
      0: 'Bug',
      1: 'Poison'
    },
    got: false,
    chance: 225,
  },
  {
    id: 14,
    name: 'Kakuna',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    type: {
      0: 'Bug',
      1: 'Poison'
    },
    got: false,
    chance: 120,
  },
  {
    id: 15,
    name: 'Beedrill',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    type: {
      0: 'Bug',
      1: 'Poison'
    },
    got: false,
    chance: 45,
  },
  {
    id: 16,
    name: 'Pidgey',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 225,
  },
  {
    id: 17,
    name: 'Pidgeotto',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 120,
  }, 
  {
    id: 18,
    name: 'Pidgeot',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 19,
    name: 'Rattata',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 255,
  },
  {
    id: 20,
    name: 'Raticate',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 90,
  },
  {
    id: 21,
    name: 'Spearow',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 255,
  },
  {
    id: 22,
    name: 'Fearow',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 90,
  },
  {
    id: 23,
    name: 'Ekans',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 255,
  },
  {
    id: 24,
    name: 'Arbok',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 90,
  },
  {
    id: 25,
    name: 'Pikachu',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    type: {
      0: 'Electric'
    },
    got: false,
    chance: 190,
  },
  {
    id: 26,
    name: 'Raichu',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    type: {
      0: 'Electric'
    },
    got: false,
    chance: 75,
  },
  {
    id: 27,
    name: 'Sandshrew',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    type: {
      0: 'Ground'
    },
    got: false,
    chance: 255,
  },
  {
    id: 28,
    name: 'Sandslash',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    type: {
      0: 'Ground'
    },
    got: false,
    chance: 90,
  },
  {
    id: 29,
    name: 'Nidoran♀',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 235,
  },
  {
    id: 30,
    name: 'Nidorina',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 120,
  },
  {
    id: 31,
    name: 'Nidoqueen',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    type: {
      0: 'Poison',
      1: 'Ground'
    },
    got: false,
    chance: 45,
  },
  {
    id: 32,
    name: 'Nidoran♂',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 235,
  },
  {
    id: 33,
    name: 'Nidorino',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 120,
  },
  {
    id: 34,
    name: 'Nidoking',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    type: {
      0: 'Poison',
      1: 'Ground'
    },
    got: false,
    chance: 45,
  },
  {
    id: 35,
    name: 'Clefairy',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    type: {
      0: 'Fairy'
    },
    got: false,
    chance: 150,
  },
  {
    id: 36,
    name: 'Clefable',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    type: {
      0: 'Fairy'
    },
    got: false,
    chance: 25,
  },
  {
    id: 37,
    name: 'Vulpix',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 190,
  },
  {
    id: 38,
    name: 'Ninetales',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 75,
  },
  {
    id: 39,
    name: 'Jigglypuff',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    type: {
      0: 'Normal',
      1: 'Fairy'
    },
    got: false,
    chance: 170,
  },
  {
    id: 40,
    name: 'Wigglytuff',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',

    type: {
      0: 'Normal',
      1: 'Fairy'
    },
    got: false,
    chance: 50,
  },
  {
    id: 41,
    name: 'Zubat',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',

    type: {
      0: 'Poison',
      1: 'Flying'
    },
    got: false,
    chance: 255,
  },
  {
    id: 42,
    name: 'Golbat',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    type: {
      0: 'Poison',
      1: 'Flying'
    },
    got: false,
    chance: 90,
  },
  {
    id: 43,
    name: 'Oddish',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 255,
  },
  {
    id: 44,
    name: 'Gloom',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 120,
  },
  {
    id: 45,
    name: 'Vileplume',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 45,
  },
  {
    id: 46,
    name: 'Paras',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    type: {
      0: 'Bug',
      1: 'Grass'
    },
    got: false,
    chance: 190,
  },
  {
    id: 47,
    name: 'Parasect',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    type: {
      0: 'Bug',
      1: 'Grass'
    },
    got: false,
    chance: 75,
  },
  {
    id: 48,
    name: 'Venonat',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    type: {
      0: 'Bug',
      1: 'Poison'
    },
    got: false,
    chance: 190,
  },
  {
    id: 49,
    name: 'Venomoth',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    type: {
      0: 'Bug',
      1: 'Poison'
    },
    got: false,
    chance: 75,
  },
  {
    id: 50,
    name: 'Diglett',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    type: {
      0: 'Ground'
    },
    got: false,
    chance: 255,
  },
  {
    id: 51,
    name: 'Dugtrio',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    type: {
      0: 'Ground'
    },
    got: false,
    chance: 50,
  },
  {
    id: 52,
    name: 'Meowth',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 255,
  },
  {
    id: 53,
    name: 'Persian',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 90,
  },
  {
    id: 54,
    name: 'Psyduck',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 190,
  },
  {
    id: 55,
    name: 'Golduck',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 75,
  },
  {
    id: 56,
    name: 'Mankey',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    type: {
      0: 'Fighting'
    },
    got: false,
    chance: 190,
  },
  {
    id: 57,
    name: 'Primeape',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    type: {
      0: 'Fighting'
    },
    got: false,
    chance: 75,
  },
  {
    id: 58,
    name: 'Growlithe',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 190,
  },
  {
    id: 59,
    name: 'Arcanine',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 75,
  },
  {
    id: 60,
    name: 'Poliwag',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 255,
  },
  {
    id: 61,
    name: 'Poliwhirl',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 120,
  },
  {
    id: 62,
    name: 'Poliwrath',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    type: {
      0: 'Water',
      1: 'Fighting'
    },
    got: false,
    chance: 45,
  },
  {
    id: 63,
    name: 'Abra',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    type: {
      0: 'Psychic'
    },
    got: false,
    chance: 200,
  },
  {
    id: 64,
    name: 'Kadabra',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    type: {
      0: 'Psychic'
    },
    got: false,
    chance: 100,
  },
  {
    id: 65,
    name: 'Alakazam',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    type: {
      0: 'Psychic'
    },
    got: false,
    chance: 50,
  },
  {
    id: 66,
    name: 'Machop',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    type: {
      0: 'Fighting'
    },
    got: false,
    chance: 180,
  },
  {
    id: 67,
    name: 'Machoke',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    type: {
      0: 'Fighting'
    },
    got: false,
    chance: 90,
  },
  {
    id: 68,
    name: 'Machamp',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
    type: {
      0: 'Fighting'
    },
    got: false,
    chance: 45,
  },
  {
    id: 69,
    name: 'Bellsprout',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 225,
  },
  {
    id: 70,
    name: 'Weepinbell',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 120,
  },
  {
    id: 71,
    name: 'Victreebel',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
    type: {
      0: 'Grass',
      1: 'Poison'
    },
    got: false,
    chance: 45,
  },
  {
    id: 72,
    name: 'Tentacool',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    type: {
      0: 'Water',
      1: 'Poison'
    },
    got: false,
    chance: 190,
  },
  {
    id: 73,
    name: 'Tentacruel',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
    type: {
      0: 'Water',
      1: 'Poison'
    },
    got: false,
    chance: 60,
  },
  {
    id: 74,
    name: 'Geodude',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    type: {
      0: 'Rock',
      1: 'Ground'
    },
    got: false,
    chance: 255,
  },
  {
    id: 75,
    name: 'Graveler',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    type: {
      0: 'Rock',
      1: 'Ground'
    },
    got: false,
    chance: 120,
  },
  {
    id: 76,
    name: 'Golem',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
    type: {
      0: 'Rock',
      1: 'Ground'
    },
    got: false,
    chance: 45,
  },
  {
    id: 77,
    name: 'Ponyta',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 190,
  },
  {
    id: 78,
    name: 'Rapidash',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 60,
  },
  {
    id: 79,
    name: 'Slowpoke',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
    type: {
      0: 'Water',
      1: 'Psychic'
    },
    got: false,
    chance: 190,
  },
  {
    id: 80,
    name: 'Slowbro',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    type: {
      0: 'Water',
      1: 'Psychic'
    },
    got: false,
    chance: 75,
  },
  {
    id: 81,
    name: 'Magnemite',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
    type: {
      0: 'Electric',
      1: 'Steel'
    },
    got: false,
    chance: 190,
  },
  {
    id: 82,
    name: 'Magneton',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
    type: {
      0: 'Electric',
      1: 'Steel'
    },
    got: false,
    chance: 60,
  },
  {
    id: 83,
    name: "Farfetch'd",
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 84,
    name: 'Doduo',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 190,
  },
  {
    id: 85,
    name: 'Dodrio',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
    type: {
      0: 'Normal',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 86,
    name: 'Seel',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 190,
  },
  {
    id: 87,
    name: 'Dewgong',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
    type: {
      0: 'Water',
      1: 'Ice'
    },
    got: false,
    chance: 75,
  },
  {
    id: 88,
    name: 'Grimer',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 190,
  },
  {
    id: 89,
    name: 'Muk',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 75,
  },
  {
    id: 90,
    name: 'Shellder',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 190,
  },
  {
    id: 91,
    name: 'Cloyster',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    type: {
      0: 'Water',
      1: 'Ice'
    },
    got: false,
    chance: 60,
  },
  {
    id: 92,
    name: 'Gastly',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    type: {
      0: 'Ghost',
      1: 'Poison'
    },
    got: false,
    chance: 190,
  },
  {
    id: 93,
    name: 'Haunter',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
    type: {
      0: 'Ghost',
      1: 'Poison'
    },
    got: false,
    chance: 90,
  },
  {
    id: 94,
    name: 'Gengar',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    type: {
      0: 'Ghost',
      1: 'Poison'
    },
    got: false,
    chance: 45,
  },
  {
    id: 95,
    name: 'Onix',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    type: {
      0: 'Rock',
      1: 'Ground'
    },
    got: false,
    chance: 45,
  },
  {
    id: 96,
    name: 'Drowzee',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
    type: {
      0: 'Psychic'
    },
    got: false,
    chance: 190,
  },
  {
    id: 97,
    name: 'Hypno',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
    type: {
      0: 'Psychic'
    },
    got: false,
    chance: 75,
  },
  {
    id: 98,
    name: 'Krabby',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 225,
  },
  {
    id: 99,
    name: 'Kingler',
    front_sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 60,
  },
  {
    id: 100,
    name: 'Voltorb',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
    type: {
      0: 'Electric'
    },
    got: false,
    chance: 190,
  },
  {
    id: 101,
    name: 'Electrode',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
    type: {
      0: 'Electric'
    },
    got: false,
    chance: 60,
  },
  {
    id: 102,
    name: 'Exeggcute',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
    type: {
      0: 'Grass',
      1: 'Psychic'
    },
    got: false,
    chance: 90,
  },
  {
    id: 103,
    name: 'Exeggutor',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
    type: {
      0: 'Grass',
      1: 'Psychic'
    },
    got: false,
    chance: 45,
  },
  {
    id: 104,
    name: 'Cubone',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
    type: {
      0: 'Ground'
    },
    got: false,
    chance: 190,
  },
  {
    id: 105,
    name: 'Marowak',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
    type: {
      0: 'Ground'
    },
    got: false,
    chance: 75,
  },
  {
    id: 106,
    name: 'Hitmonlee',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
    type: {
      0: 'Fighting'
    },
    got: false,
    chance: 45,
  },
  {
    id: 107,
    name: 'Hitmonchan',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
    type: {
      0: 'Fighting'
    },
    got: false,
    chance: 45,
  },
  {
    id: 108,
    name: 'Lickitung',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 45,
  },
  {
    id: 109,
    name: 'Koffing',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 190,
  },
  {
    id: 110,
    name: 'Weezing',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
    type: {
      0: 'Poison'
    },
    got: false,
    chance: 60,
  },
  {
    id: 111,
    name: 'Rhyhorn',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
    type: {
      0: 'Ground',
      1: 'Rock'
    },
    got: false,
    chance: 120,
  },
  {
    id: 112,
    name: 'Rhydon',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
    type: {
      0: 'Ground',
      1: 'Rock'
    },
    got: false,
    chance: 60,
  },
  {
    id: 113,
    name: 'Chansey',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 30,
  },
  {
    id: 114,
    name: 'Tangela',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    type: {
      0: 'Grass'
    },
    got: false,
    chance: 45,
  },
  {
    id: 115,
    name: 'Kangaskhan',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 45,
  },
  {
    id: 116,
    name: 'Horsea',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 225,
  },
  {
    id: 117,
    name: 'Seadra',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 75,
  },
  {
    id: 118,
    name: 'Goldeen',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 225,
  },
  {
    id: 119,
    name: 'Seaking',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 60,
  },
  {
    id: 120,
    name: 'Staryu',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 225,
  },
  {
    id: 121,
    name: 'Starmie',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
    type: {
      0: 'Water',
      1: 'Psychic'
    },
    got: false,
    chance: 60,
  },
  {
    id: 122,
    name: 'Mr. Mime',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
    type: {
      0: 'Psychic',
      1: 'Fairy'
    },
    got: false,
    chance: 45,
  },
  {
    id: 123,
    name: 'Scyther',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
    type: {
      0: 'Bug',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 124,
    name: 'Jynx',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
    type: {
      0: 'Ice',
      1: 'Psychic'
    },
    got: false,
    chance: 45,
  },
  {
    id: 125,
    name: 'Electabuzz',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
    type: {
      0: 'Electric'
    },
    got: false,
    chance: 45,
  },
  {
    id: 126,
    name: 'Magmar',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 45,
  },
  {
    id: 127,
    name: 'Pinsir',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
    type: {
      0: 'Bug'
    },
    got: false,
    chance: 45,
  },
  {
    id: 128,
    name: 'Tauros',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 45,
  },
  {
    id: 129,
    name: 'Magikarp',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 255,
  },
  {
    id: 130,
    name: 'Gyarados',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    type: {
      0: 'Water',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 131,
    name: 'Lapras',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    type: {
      0: 'Water',
      1: 'Ice'
    },
    got: false,
    chance: 45,
  },
  {
    id: 132,
    name: 'Ditto',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 35,
  },
  {
    id: 133,
    name: 'Eevee',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 45,
  },
  {
    id: 134,
    name: 'Vaporeon',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    type: {
      0: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 135,
    name: 'Jolteon',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
    type: {
      0: 'Electric'
    },
    got: false,
    chance: 45,
  },
  {
    id: 136,
    name: 'Flareon',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    type: {
      0: 'Fire'
    },
    got: false,
    chance: 45,
  },
  {
    id: 137,
    name: 'Porygon',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 45,
  },
  {
    id: 138,
    name: 'Omanyte',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
    type: {
      0: 'Rock',
      1: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 139,
    name: 'Omastar',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
    type: {
      0: 'Rock',
      1: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 140,
    name: 'Kabuto',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
    type: {
      0: 'Rock',
      1: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 141,
    name: 'Kabutops',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    type: {
      0: 'Rock',
      1: 'Water'
    },
    got: false,
    chance: 45,
  },
  {
    id: 142,
    name: 'Aerodactyl',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
    type: {
      0: 'Rock',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 143,
    name: 'Snorlax',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    type: {
      0: 'Normal'
    },
    got: false,
    chance: 25,
  },
  {
    id: 144,
    name: 'Articuno',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    type: {
      0: 'Ice',
      1: 'Flying'
    },
    got: false,
    chance: 3,
  },
  {
    id: 145,
    name: 'Zapdos',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    type: {
      0: 'Electric',
      1: 'Flying'
    },
    got: false,
    chance: 3,
  },
  {
    id: 146,
    name: 'Moltres',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
    type: {
      0: 'Fire',
      1: 'Flying'
    },
    got: false,
    chance: 3,
  },
  {
    id: 147,
    name: 'Dratini',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    type: {
      0: 'Dragon'
    },
    got: false,
    chance: 45,
  },
  {
    id: 148,
    name: 'Dragonair',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
    type: {
      0: 'Dragon'
    },
    got: false,
    chance: 45,
  },
  {
    id: 149,
    name: 'Dragonite',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    type: {
      0: 'Dragon',
      1: 'Flying'
    },
    got: false,
    chance: 45,
  },
  {
    id: 150,
    name: 'Mewtwo',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    type: {
      0: 'Psychic'
    },
    got: false,
    chance: 3,
  },
  {
    id: 151,
    name: 'Mew',
    front_sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    type: {
      0: 'Psychic'
    },
    got: false,
    chance: 45,
  }
]

export default PokeList
