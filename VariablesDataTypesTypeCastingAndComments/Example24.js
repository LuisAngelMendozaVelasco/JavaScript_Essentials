/*
"Conversion to Boolean"

Conversions to Boolean follow simple rules, as we can only have one of two values: true or false. The value false is always returned for:
    0,
    NaN,
    empty string,
    undefined,
    null

Any other value will result in true being returned.
*/

console.log(Boolean(true)); // -> true

console.log(Boolean(42)); // -> true
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false

console.log(Boolean("text")); // -> true
console.log(Boolean("")); // -> false

console.log(Boolean(undefined)); // -> false

console.log(Boolean(null)); // -> false