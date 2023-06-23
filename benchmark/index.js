import elements from '../periodic-table.json';
// import wordsObj from './words.json';
import 'fs';

import performanceCheck from './util';
// import { check as myCheck1 } from './solutions/mySolution1';
import { check as myCheck2 } from './solutions/mySolution2';
import { check as theirCheck2 } from './solutions/theirSolution2';
import { check as theirCheck3 } from './solutions/theirSolution3'
import wordsListPath from 'word-list';

// const words = wordsObj.words;
const words = fs.readFileSync(wordsListPath, 'utf-8').split('\n');

function benchmarkFunction(words, cb) {
  words.forEach(word => cb(word));
}

// benchmarks
performanceCheck(benchmarkFunction.bind(this, words, myCheck2))
performanceCheck(benchmarkFunction.bind(this, words, theirCheck2))
performanceCheck(benchmarkFunction.bind(this, words, theirCheck3))