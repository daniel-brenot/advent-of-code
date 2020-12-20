import * as fs from 'fs';

const FIND_SUM = 2020;

const input = fs.readFileSync('./inputs/2020/day1.txt').toString();
const values = input.split('\n').map(i=>parseInt(i)).sort();

const answer = values.find(v=>values.includes(2020-v));

console.log(answer*(2020-answer));