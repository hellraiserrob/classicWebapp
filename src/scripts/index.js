import './index.scss';






import { add, subtract, merge } from './components/utils.js';



let name = 'rob';

console.log(`my name is ${name}...`);

console.log(`the sum is ${add(1, 5)}`);
// console.log(`the sum is ${subtract(10, 5)}`);


let a = {
    forename: 'Rob'
};

let b = {
    surname: 'Phillips'
};

let c = merge(a, b);

console.log(`user object ${c.forename} ${c.surname}`);