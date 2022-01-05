
// Looping through Objects
let instruments=["guitar","piano","tabla","ocarina","tabla"];

function find(instrument){
    if(instrument==="tabla"){
        console.log('Tabla found!');
        return true;
    } else{
        console.log('No tabla found...');
        return false;
    }
}

instruments.some(find)

let found=instruments.some(instrument=>{
    if(instrument==='tabla'){
        return true
    }
})

if(found){
    console.log('tabla found!');
}

// more compactly
let found2=instruments.some(instrument=>instrument==='tabla');
if(found2) console.log('tabla found!');


// wheter any values in an array greater than 100;
let numbers=[11,43,9,112,64,15];
let tooBig=numbers.some(number=>number>100);
console.log(tooBig);


// Finding Array Elements
let found3=instruments.find(x=>x==='tabla');
console.log(found3); // display tabla

let index=instruments.findIndex(x=>x==='tabla');
console.log(index); // display 2


// Mapping an Old Array to a New array
let words=["fun","boring","exciting"];
function improveGrammar(word){
    return word+'ish';
}
let betterWords=words.map(improveGrammar);

console.log(betterWords);

// ultra-compact way
let betterWords2=words.map(x=>x+'ish');
console.log(betterWords2);

// Filter Elements from an array
function findBigNumbers (number){
    return number > 100;
}

let bigNumbers=numbers.filter(findBigNumbers);
console.log(bigNumbers);

// sneaky! numbers array is being copied back into itself;
numbers=numbers.filter(x=>x<100)

console.log(numbers);


// Reducing Arrary Elements to s Single Value
function addNumbersTogether(a,b){
    return a+b;
}

let total=numbers.reduce(addNumbersTogether);
console.log(total);

// compact version:
total=numbers.reduce((a,b)=>a+b);
console.log(total);

// with second optional paramter:the initial value to start with.
total=numbers.reduce((a,b)=>a+b,100);
console.log(total);

// 2D array flatten into a 1D array
function flattenArray(a,b){
    return a.concat(b)
}
let numbers2D = [[73,19],[2,144],[43,7]];
let numbers1D = numbers2D.reduce(flattenArray);

console.log(numbers1D);