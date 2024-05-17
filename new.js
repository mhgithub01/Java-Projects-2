const result = []

for (i = 1 ; i <101; i++){
if(i%15===0){result.push('Fizzzbuzz')}
else if(i%3===0){
    result.push('Fizz')
    }
else if(i%5===0)
    {
        result.push('Buzz')
    }
else{result.push('i')}
}
console.log(result.join())


























// const big = confirm('Is it a big animal?');
// const livesInWater = confirm('Does it live in water?');
// console.log(big);
// console.log(livesInWater);


// if('big && livesInWater'){
//     alert('Your favorite animal is a whale!');
// }

// else if ('big && !livesInWater'){
//     alert('Your favorite animal is an Elephent!')
// }

// else if('!big && livesInWater') {
//     alert('Your favorite animal is a Fish!') 
// }

// else if(!big && !livesInWater){
//     alert('Your favorite animal is a mouse!');
//     }

// else {
//     alert('Your favorite animal is a mouse!');
//     }