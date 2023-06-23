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

function checkHelper(inputWord) {
	if(inputWord.length === 0) {
    return [];
  }

  const letterGroup = elementsMap.get(inputWord.slice(0, 1));
  if(letterGroup !== undefined) {
    // check for two letter match as that is preferable
    const twoLetterMatch = letterGroup.has(inputWord.slice(0, 2));
    if(twoLetterMatch) {
      return [inputWord.slice(0, 2), ...checkHelper(inputWord.slice(2))];
    } else {
      // else check for one
      const oneLetterMatch = letterGroup.has(inputWord.slice(0, 1));
      if(oneLetterMatch) {
        return [inputWord.slice(0, 1), ...checkHelper(inputWord.slice(1))]
      } else {
        // nothing found
        return [];
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
