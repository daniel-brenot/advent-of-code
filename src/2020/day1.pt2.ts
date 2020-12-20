import * as fs from 'fs';

const FIND_SUM = 2020;

const input = fs.readFileSync('./inputs/2020/day1.txt').toString();
const values = input.split('\n').map(i=>parseInt(i)).sort();

function findSum(targetSum: number): [number, number]{
    let answer = values.find(v=>values.includes(targetSum-v));
    return [answer, targetSum - answer];
}
for(let i = 0;i<values.length;i++){
    const answers = findSum(FIND_SUM - values[i]);
    if(!!answers[0]){
        console.log(values[i]*answers[0]*answers[1]);
    }
}
