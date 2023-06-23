export default {
	check,
	lookup,
};

var elements;

await loadPeriodicTable();

const elementsMap = createElementsMap(elements);

// ****************************

async function loadPeriodicTable() {
	elements = await (await fetch("periodic-table.json")).json();
}

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
            if(symbol.length > 1) {
              const previousOneLetter = symbol[0];
              const previousOneLetterMatch = elementsMap.get(previousOneLetter).has(previousOneLetter)

              if(previousOneLetterMatch) {
                return checkHelper(inputWord, index-(i*2)-1, [...arr.slice(0, -(i+1)), previousOneLetter]);
              }
            }
            // if loop ended but no valid past route found.
            else if(i===arr.length-1) {
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
