const elements = [
	{
		"name": "Hydrogen",
		"number": 1,
		"symbol": "H"
	},
	{
		"name": "Helium",
		"number": 2,
		"symbol": "He"
	},
	{
		"name": "Lithium",
		"number": 3,
		"symbol": "Li"
	},
	{
		"name": "Beryllium",
		"number": 4,
		"symbol": "Be"
	},
	{
		"name": "Boron",
		"number": 5,
		"symbol": "B"
	},
	{
		"name": "Carbon",
		"number": 6,
		"symbol": "C"
	},
	{
		"name": "Nitrogen",
		"number": 7,
		"symbol": "N"
	},
	{
		"name": "Oxygen",
		"number": 8,
		"symbol": "O"
	},
	{
		"name": "Fluorine",
		"number": 9,
		"symbol": "F"
	},
	{
		"name": "Neon",
		"number": 10,
		"symbol": "Ne"
	},
	{
		"name": "Sodium",
		"number": 11,
		"symbol": "Na"
	},
	{
		"name": "Magnesium",
		"number": 12,
		"symbol": "Mg"
	},
	{
		"name": "Aluminium",
		"number": 13,
		"symbol": "Al"
	},
	{
		"name": "Silicon",
		"number": 14,
		"symbol": "Si"
	},
	{
		"name": "Phosphorus",
		"number": 15,
		"symbol": "P"
	},
	{
		"name": "Sulfur",
		"number": 16,
		"symbol": "S"
	},
	{
		"name": "Chlorine",
		"number": 17,
		"symbol": "Cl"
	},
	{
		"name": "Argon",
		"number": 18,
		"symbol": "Ar"
	},
	{
		"name": "Potassium",
		"number": 19,
		"symbol": "K"
	},
	{
		"name": "Calcium",
		"number": 20,
		"symbol": "Ca"
	},
	{
		"name": "Scandium",
		"number": 21,
		"symbol": "Sc"
	},
	{
		"name": "Titanium",
		"number": 22,
		"symbol": "Ti"
	},
	{
		"name": "Vanadium",
		"number": 23,
		"symbol": "V"
	},
	{
		"name": "Chromium",
		"number": 24,
		"symbol": "Cr"
	},
	{
		"name": "Manganese",
		"number": 25,
		"symbol": "Mn"
	},
	{
		"name": "Iron",
		"number": 26,
		"symbol": "Fe"
	},
	{
		"name": "Cobalt",
		"number": 27,
		"symbol": "Co"
	},
	{
		"name": "Nickel",
		"number": 28,
		"symbol": "Ni"
	},
	{
		"name": "Copper",
		"number": 29,
		"symbol": "Cu"
	},
	{
		"name": "Zinc",
		"number": 30,
		"symbol": "Zn"
	},
	{
		"name": "Gallium",
		"number": 31,
		"symbol": "Ga"
	},
	{
		"name": "Germanium",
		"number": 32,
		"symbol": "Ge"
	},
	{
		"name": "Arsenic",
		"number": 33,
		"symbol": "As"
	},
	{
		"name": "Selenium",
		"number": 34,
		"symbol": "Se"
	},
	{
		"name": "Bromine",
		"number": 35,
		"symbol": "Br"
	},
	{
		"name": "Krypton",
		"number": 36,
		"symbol": "Kr"
	},
	{
		"name": "Rubidium",
		"number": 37,
		"symbol": "Rb"
	},
	{
		"name": "Strontium",
		"number": 38,
		"symbol": "Sr"
	},
	{
		"name": "Yttrium",
		"number": 39,
		"symbol": "Y"
	},
	{
		"name": "Zirconium",
		"number": 40,
		"symbol": "Zr"
	},
	{
		"name": "Niobium",
		"number": 41,
		"symbol": "Nb"
	},
	{
		"name": "Molybdenum",
		"number": 42,
		"symbol": "Mo"
	},
	{
		"name": "Technetium",
		"number": 43,
		"symbol": "Tc"
	},
	{
		"name": "Ruthenium",
		"number": 44,
		"symbol": "Ru"
	},
	{
		"name": "Rhodium",
		"number": 45,
		"symbol": "Rh"
	},
	{
		"name": "Palladium",
		"number": 46,
		"symbol": "Pd"
	},
	{
		"name": "Silver",
		"number": 47,
		"symbol": "Ag"
	},
	{
		"name": "Cadmium",
		"number": 48,
		"symbol": "Cd"
	},
	{
		"name": "Indium",
		"number": 49,
		"symbol": "In"
	},
	{
		"name": "Tin",
		"number": 50,
		"symbol": "Sn"
	},
	{
		"name": "Antimony",
		"number": 51,
		"symbol": "Sb"
	},
	{
		"name": "Tellurium",
		"number": 52,
		"symbol": "Te"
	},
	{
		"name": "Iodine",
		"number": 53,
		"symbol": "I"
	},
	{
		"name": "Xenon",
		"number": 54,
		"symbol": "Xe"
	},
	{
		"name": "Cesium",
		"number": 55,
		"symbol": "Cs"
	},
	{
		"name": "Barium",
		"number": 56,
		"symbol": "Ba"
	},
	{
		"name": "Lanthanum",
		"number": 57,
		"symbol": "La"
	},
	{
		"name": "Cerium",
		"number": 58,
		"symbol": "Ce"
	},
	{
		"name": "Praseodymium",
		"number": 59,
		"symbol": "Pr"
	},
	{
		"name": "Neodymium",
		"number": 60,
		"symbol": "Nd"
	},
	{
		"name": "Promethium",
		"number": 61,
		"symbol": "Pm"
	},
	{
		"name": "Samarium",
		"number": 62,
		"symbol": "Sm"
	},
	{
		"name": "Europium",
		"number": 63,
		"symbol": "Eu"
	},
	{
		"name": "Gadolinium",
		"number": 64,
		"symbol": "Gd"
	},
	{
		"name": "Terbium",
		"number": 65,
		"symbol": "Tb"
	},
	{
		"name": "Dysprosium",
		"number": 66,
		"symbol": "Dy"
	},
	{
		"name": "Holmium",
		"number": 67,
		"symbol": "Ho"
	},
	{
		"name": "Erbium",
		"number": 68,
		"symbol": "Er"
	},
	{
		"name": "Thulium",
		"number": 69,
		"symbol": "Tm"
	},
	{
		"name": "Ytterbium",
		"number": 70,
		"symbol": "Yb"
	},
	{
		"name": "Lutetium",
		"number": 71,
		"symbol": "Lu"
	},
	{
		"name": "Hafnium",
		"number": 72,
		"symbol": "Hf"
	},
	{
		"name": "Tantalum",
		"number": 73,
		"symbol": "Ta"
	},
	{
		"name": "Tungsten",
		"number": 74,
		"symbol": "W"
	},
	{
		"name": "Rhenium",
		"number": 75,
		"symbol": "Re"
	},
	{
		"name": "Osmium",
		"number": 76,
		"symbol": "Os"
	},
	{
		"name": "Iridium",
		"number": 77,
		"symbol": "Ir"
	},
	{
		"name": "Platinum",
		"number": 78,
		"symbol": "Pt"
	},
	{
		"name": "Gold",
		"number": 79,
		"symbol": "Au"
	},
	{
		"name": "Mercury",
		"number": 80,
		"symbol": "Hg"
	},
	{
		"name": "Thallium",
		"number": 81,
		"symbol": "Tl"
	},
	{
		"name": "Lead",
		"number": 82,
		"symbol": "Pb"
	},
	{
		"name": "Bismuth",
		"number": 83,
		"symbol": "Bi"
	},
	{
		"name": "Polonium",
		"number": 84,
		"symbol": "Po"
	},
	{
		"name": "Astatine",
		"number": 85,
		"symbol": "At"
	},
	{
		"name": "Radon",
		"number": 86,
		"symbol": "Rn"
	},
	{
		"name": "Francium",
		"number": 87,
		"symbol": "Fr"
	},
	{
		"name": "Radium",
		"number": 88,
		"symbol": "Ra"
	},
	{
		"name": "Actinium",
		"number": 89,
		"symbol": "Ac"
	},
	{
		"name": "Thorium",
		"number": 90,
		"symbol": "Th"
	},
	{
		"name": "Protactinium",
		"number": 91,
		"symbol": "Pa"
	},
	{
		"name": "Uranium",
		"number": 92,
		"symbol": "U"
	},
	{
		"name": "Neptunium",
		"number": 93,
		"symbol": "Np"
	},
	{
		"name": "Plutonium",
		"number": 94,
		"symbol": "Pu"
	},
	{
		"name": "Americium",
		"number": 95,
		"symbol": "Am"
	},
	{
		"name": "Curium",
		"number": 96,
		"symbol": "Cm"
	},
	{
		"name": "Berkelium",
		"number": 97,
		"symbol": "Bk"
	},
	{
		"name": "Californium",
		"number": 98,
		"symbol": "Cf"
	},
	{
		"name": "Einsteinium",
		"number": 99,
		"symbol": "Es"
	},
	{
		"name": "Fermium",
		"number": 100,
		"symbol": "Fm"
	},
	{
		"name": "Mendelevium",
		"number": 101,
		"symbol": "Md"
	},
	{
		"name": "Nobelium",
		"number": 102,
		"symbol": "No"
	},
	{
		"name": "Lawrencium",
		"number": 103,
		"symbol": "Lr"
	},
	{
		"name": "Rutherfordium",
		"number": 104,
		"symbol": "Rf"
	},
	{
		"name": "Dubnium",
		"number": 105,
		"symbol": "Db"
	},
	{
		"name": "Seaborgium",
		"number": 106,
		"symbol": "Sg"
	},
	{
		"name": "Bohrium",
		"number": 107,
		"symbol": "Bh"
	},
	{
		"name": "Hassium",
		"number": 108,
		"symbol": "Hs"
	},
	{
		"name": "Meitnerium",
		"number": 109,
		"symbol": "Mt"
	},
	{
		"name": "Darmstadtium",
		"number": 110,
		"symbol": "Ds"
	},
	{
		"name": "Roentgenium",
		"number": 111,
		"symbol": "Rg"
	},
	{
		"name": "Copernicium",
		"number": 112,
		"symbol": "Cn"
	},
	{
		"name": "Nihonium",
		"number": 113,
		"symbol": "Nh"
	},
	{
		"name": "Flerovium",
		"number": 114,
		"symbol": "Fl"
	},
	{
		"name": "Moscovium",
		"number": 115,
		"symbol": "Mc"
	},
	{
		"name": "Livermorium",
		"number": 116,
		"symbol": "Lv"
	},
	{
		"name": "Tennessine",
		"number": 117,
		"symbol": "Ts"
	},
	{
		"name": "Oganesson",
		"number": 118,
		"symbol": "Og"
	}
]

const words = [
    "accept","access","accessibilities","accrete","accrual","accuracy","accuse","aces","ache",
    "acids","acne","acorn","action","agitation","agnostic","ago","alimony","alpacas","america",
    "american","amish","amputate","amputation","aspirin","attention","auction","autistic","bacon",
    "ballistic","banana","band","bane","bank","baptism","barf","base","bay","bears","because",
    "beers","berserk","body","bone","bonfire","boo","boy","brain","brains","bro","brunch","bunch",
    "burn","busy","butane","cacti","cafe","camp","can","candy","candycane","canine","cannibal",
    "cap","car","cheers","china","chocolate","clock","coffees","cone","cook","counts","cover","cow",
    "coy","coyote","cufflinks","cuisine","cup","cute","cuteness","cyborg","cyclic","cyclone",
    "cynics","dyes","dynamic","dynamite","dynamo","dynasties","dysfunctional","erosion","erotic",
    "erupt","essence","faces","false","fat","fear","feline","fence","fetish","fibs","final","fire",
    "flash","flog","flow","fog","forever","fraction","frog","frolic","fry","fun","function",
    "functional","functions","fusion","gala","gasp","gear","gene","generation","genesis","genius",
    "hack","hacker","hackers","halos","harp","has","hats","heat","heinous","helicopter","heretic",
    "honk","hook","hose","hundreds","hymn","hymnal","hyperbolic","icky","icon","inclines","inspire",
    "insulin","iron","irresponsibilities","kick","kind","knife","knits","know","krypton","lab",
    "lady","lifespan","lips","lubrication","lucky","mock","mockery","more","motion","mouse","neon",
    "nits","notification","nun","osmosis","ostentatious","pancreas","papyrus","patcher","patchier",
    "phone","physics","pirate","play","player","poacher","poison","police","polish","posh","pounds",
    "preparer","pretender","psychic","puffer","raccoon","rage","recluse","rescues","researh",
    "resin","responsibilities","retina","reunite","reverse","rhubarb","rub","ruby","ruin","run",
    "rune","rush","sack","sag","salvation","sarcasm","sassy","satin","scallion","scandal","scares",
    "scotch","septic","sickness","siphon","skunk","sniper","snowy","soccer","sociopath","spam",
    "span","spin","sure","tavern","taxes","teach","team","tetanus","tether","that","thin","think",
    "tick","ticklish","under","unicorns","union","unreal","use","utah","vaccine","vampire","verse",
    "violin","virus","viscosities","voice","vote","war","wash","wasp","watch","water","what","when",
    "who","wife","wise","witch","with","won","wonder","wonky","yams","yards","yarn","yikes","you",
    "youth","yucky"
  ]

  function createElementsMap(elements) {
    const elementsMap = new Map();
    elements.forEach(element => {
      const lowerCaseSymbol = element.symbol.toLowerCase();
      if(elementsMap.has(lowerCaseSymbol[0])) {
        elementsMap.set(lowerCaseSymbol[0], elementsMap.get(lowerCaseSymbol[0]).set(lowerCaseSymbol, {"name": element.name, "number": element.number}))
      } else {
        const newSymbolMap = new Map();
        newSymbolMap.set(lowerCaseSymbol, {"name": element.name, "number": element.number});
        elementsMap.set(lowerCaseSymbol[0], newSymbolMap)
      }
    })
    return elementsMap;
  }

  function checkHelper(inputWord, index = 0, arr = []) {
    if(index >= inputWord.length) {
      return arr;
    }
  
    const letterGroup = elementsMap.get(inputWord.slice(index, index+1));
    if(letterGroup !== undefined) {
      // check for two letter match as that is preferable
      const twoLetterMatch = letterGroup.has(inputWord.slice(index, index+2));
      if(twoLetterMatch) {
        return checkHelper(inputWord, index+2, [...arr, inputWord.slice(index, index+2)]);
      } else {
        // else check for one
        const oneLetterMatch = letterGroup.has(inputWord.slice(index, index+1));
        if(oneLetterMatch) {
          return checkHelper(inputWord, index+1, [...arr, inputWord.slice(index, index+1)]);
        } else {
          // nothing found by choosing two letter grouping
          // try going back and selecting 1 letter option if it was there
          const revArr = [...arr].reverse();
          for(let i = 0; i<arr.length; i++) {
            const symbol = revArr[i];
            if(symbol.length>1) {
              const previousOneLetter = symbol[0];
              const previousOneLetterMatch = elementsMap.get(previousOneLetter).has(previousOneLetter)

              if(previousOneLetterMatch) {
                return checkHelper(inputWord, index-(i*2)-1, [...arr.slice(0, -(i+1)), previousOneLetter]);
              }
            }
          }
        }
      }
    } else {
      // letter group is not there
      return [];
    }
  }
  
  function checkHelper(inputWord, index = 0, arr = []) {
    if(index >= inputWord.length) {
      return arr;
    }
  
    const letterGroup = elementsMap.get(inputWord.slice(index, index+1));
    if(letterGroup !== undefined) {
      // check for two letter match as that is preferable
      const twoLetterMatch = letterGroup.has(inputWord.slice(index, index+2));
      if(twoLetterMatch) {
        return checkHelper(inputWord, index+2, [...arr, inputWord.slice(index, index+2)]);
      } else {
        // else check for one
        const oneLetterMatch = letterGroup.has(inputWord.slice(index, index+1));
        if(oneLetterMatch) {
          return checkHelper(inputWord, index+1, [...arr, inputWord.slice(index, index+1)]);
        } else {
          // nothing found by choosing two letter grouping
          // try going back and selecting 1 letter option if it was there
          for(let i = arr.length-1; i>0; i--) {
            const symbol = arr[i];
            if(symbol.length > 1) {
              const previousOneLetter = symbol[0];
              const previousOneLetterMatch = elementsMap.get(previousOneLetter).has(previousOneLetter)

              function wordIndexCalc(arr, arrIndex) {
                return arr.slice(0, arrIndex).length + 1;
              }

              if(previousOneLetterMatch) {
                return checkHelper(inputWord, wordIndexCalc(arr, i), [...arr.slice(0, i), previousOneLetter]);
              }
            } else if(i === 1) {
              return [];
            }
          }
        }
      }
    } else {
      // letter group is not there
      return [];
    }
  }
  
  function check(inputWord) {
    // TODO: determine if `inputWord` can be spelled
    // with periodic table symbols; return array with
    // them if so (empty array otherwise)
    const checkResult = checkHelper(inputWord);
    if(checkResult.join('').length !== inputWord.length) {
      return []
    }
    return checkResult;
  }
  
  function lookup(elementSymbol) {
    // TODO: return the element entry based on specified
    // symbol (case-insensitive)
    const symbolMatch = elementsMap.get(elementSymbol[0]).get(elementSymbol);
    if(symbolMatch !== undefined) {
      const symbolTitleCased = elementSymbol[0].toUpperCase() + elementSymbol.slice(1);
      return {
        symbol: symbolTitleCased,
        ...symbolMatch
      }
    }
  
    return {};
  }

const elementsMap = createElementsMap(elements);
console.log(elementsMap.get('b'))
console.log(lookup('e'))
// console.log(check('ballistic'))
console.log(check('pirate'))
console.log(check('vaccine'))
// console.log(check('yellow'));

const a = [1,2,3];
console.log(a[a.length-1])
// console.log(check('aces'))

// const pass = words.map(word => check(word))

// console.log(pass.reduce((acc, word) => {
//  if(word.length === 0) {
//   acc++;
//  }
//  return acc;
// }, 0))