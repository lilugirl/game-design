
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