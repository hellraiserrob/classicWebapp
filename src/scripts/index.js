import './index.scss';


import $ from 'jquery';



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



$('.form-group-text input').on('focus', (e) => {
    
    let $input = $(e.target);
    let $parent = $input.parent();

    $parent.addClass('float');

});

$('.form-group-text input').on('blur', (e) => {
    
    let $input = $(e.target);
    let $parent = $input.parent();

    if($input.val() === '') {
        $parent.removeClass('float');
    }

});