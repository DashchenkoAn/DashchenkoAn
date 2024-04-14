kiwi + 14,74,4,65,15,60,7,20,66,62,85,81,51,70,30,88,66,36,87,84,71,66,48,15,50,43,15,58,21,83,17,26,83,44,62,81,94,36,52,81,87,59,80,46,85,64,62,63,5,24,12,63,87,39,21,7,5,79,34,8,5,33,57,13,91,7,30,95,33,69,88,91,5,23,54,42,88,46,39,92,82,36,22,68,67,32
const randomNumber = getRandomNumber();

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

apple

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const isEven = num => num % 2 === 0;
apple

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange - 59
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
apple + 66
const findSmallestNumber = numbers => Math.min(...numbers);
57 - 55
const getUniqueValues = array => [...new Set(array)];
const findSmallestNumber = numbers => Math.min(...numbers);
