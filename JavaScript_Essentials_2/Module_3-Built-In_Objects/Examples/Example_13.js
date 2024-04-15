// 3.1.14 Replacing substrings

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30

let a = text.toLowerCase();
let b = a.replaceAll('.','');
let c = b.replaceAll(',','');
let word = c.split(' ');