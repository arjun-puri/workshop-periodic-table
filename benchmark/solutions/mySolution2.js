import elements from '../../periodic-table.json';

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

function checkWordHelper(inputWord, index, arr, letterGroup, symbol) {
	if(letterGroup.has(symbol)) {
		return checkWord(inputWord, index+symbol.length, [...arr, inputWord.slice(index, index+symbol.length)])
	}
	return {found: false};
}

function checkWord(inputWord, index = 0, arr = []) {
	if(index >= inputWord.length) {
		return {found: true, result: arr};
	}

	const letterGroup = elementsMap.get(inputWord.slice(index, index+1));
	if(letterGroup !== undefined) {
		const a = checkWordHelper(inputWord, index, arr, letterGroup, inputWord.slice(index, index+2)); //?
		if(a.found) {
			return a;
		} else {
			const b = checkWordHelper(inputWord, index, arr, letterGroup, inputWord.slice(index, index+1));
			if(b.found) {
				return b;
			}
		}
	} else {
		// letter group is not there
		return {found: false};
	}

	return {found: false};
}
  
function check(inputWord) {
	// TODO: determine if `inputWord` can be spelled
	// with periodic table symbols; return array with
	// them if so (empty array otherwise)
	const checkResult = checkWord(inputWord); //?
	if(!checkResult.found) {
		return []
	}
	return checkResult.result;
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

export {
  check,
  lookup
}