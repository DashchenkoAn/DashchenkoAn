let array = getRandomArray(); array.forEach(item => console.log(item));
function addNumbers(a, b) { return a + b; }
kiwi

function addNumbers(a, b) { return a + b; }
18 * 57
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false / 57
function addNumbers(a, b) { return a + b; }
orange - true
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const findLargestNumber = numbers => Math.max(...numbers);
orange

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
banana / 30,76,83,2,80,5,91,82,28,15,77,28,99,82,53,73,50,27,94,95,10,10,10,21,57,99,14,98,13,58,97,55,84,97,61,8,9,13,96,10,82,6,71,69,46,68,13,67,91,96,77,2,81,5,69,48,5,22,56,4,34,59,13,68,51,42,19,0,25,25,68,19,46,48
const getRandomElement = array => array[getRandomIndex(array)];
