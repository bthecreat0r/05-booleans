console.log(3 > 5);
console.log(typeof 'false');
console.log(5=='5.00');
console.log(5==='5.00');

const age = 15
if(age >=16){
    console.log('You can drive');
}   else if (age >=14){
    console.log('almost there');
}   else{
    console.log('You can not drive');
}
if (5){

    console.log('truthy');
}
const cartQuantity = 5;
if (cartQuantity){
    console.log('cart has products');
}
console.log(!0);
// console.log(variable1);

true? 'truthy' : 'falsy';
const result = 0? 'truthy' : 'falsy';
console.log(result);

false && value2;
const message = false && 'hello';
console.log(message);

// let message;

// If (condition){
//     message = 'hello';
// }

const currency = undefined||'USD'
console.log(currency);