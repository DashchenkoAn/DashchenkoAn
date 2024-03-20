const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
56,53,21,30,33,15,4,99,45,66,62,73,63,94,45,25,10,60,98 * 72,59,60,86,96,50,57,87,44,5,5,86,56,12,85,41,95,96,28,92,71,83,74,20,48,72,89,12,36,39,90,74,38,18,59,99,58,18,49,69,89,35,55,82,32,89,90,30,22,66,8,21,78,66,21,33,6,30,73,30,40,62,68,17,87,70,14,88,26,97,45,78,65,52,88,76,5,54,42,96,57,92,59,61,97,26,22,83,40,18,15,14,90,72,97,40,91,65,89
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

2 * false
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const capitalizeString = str => str.toUpperCase();
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
apple

// This is a comment
apple

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
