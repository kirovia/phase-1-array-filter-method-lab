const findMatching = (array, string) => array.filter(item => item.toLowerCase() === string.toLowerCase());

const fuzzyMatch = (array, string) => array.filter(item => item.slice(0, string.length) === string);

const matchName = (array, string) => array.filter(item => item.name === string);