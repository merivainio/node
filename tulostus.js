const tulostaTahtia = (a) => console.log('* '.repeat(a));

const tulostaTulos = (b) => {
let d = b.toString(); 
let c = b.length;
console.log('-'.repeat(c));
console.log(d);        
console.log('-'.repeat(c));        
}    

module.exports = {    
    tulostaTahtia,
    tulostaTulos
};

