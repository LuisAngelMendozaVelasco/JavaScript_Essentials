// 3.1.17 Padding

let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}

// Output: 

// 0000000100
// abcabca100
// 100
// 0000000005
// abcabcabc5
// 5
// 0000000066
// abcabcab66
// 66