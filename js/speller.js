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
  elements.forEach(element => elementsMap.set(element.symbol.toLowerCase(), {"name": element.name, "number": element.number}));
  return elementsMap;
}

function checkHelper(inputWord) {
	if(inputWord.length === 0) {
    return [];
  }
  
  const twoLetterMatch = elementsMap.has(inputWord.slice(0, 2));
  if(twoLetterMatch !== false) {
    return [inputWord.slice(0, 2), ...checkHelper(inputWord.slice(2))]
  } else {
    const oneLetterMatch = elementsMap.has(inputWord.slice(0, 1));
    if(oneLetterMatch !== false) {
      return [inputWord.slice(0, 1), ...checkHelper(inputWord.slice(1))]
    } else {
      return [];
    }
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
	const symbolMatch = elementsMap.get(elementSymbol);
	if(symbolMatch !== undefined) {
		const symbolTitleCased = elementSymbol[0].toUpperCase() + elementSymbol.slice(1);
    return {
      symbol: symbolTitleCased,
      ...symbolMatch
    }
	}

	return {};
}
