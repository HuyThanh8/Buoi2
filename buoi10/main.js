function logArray(arr) {
    //TODO logic
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
let food =["Apple", "Orange", "Fruit"];
logArray([]);

function add(a, b) {
    return a+b;
}
function add(a, b) {
    return a-b;
}
function add(a, b) {
    return a*b;
}
function add(a, b) {
    if (b === null || b === undefined || b === 0 ) {
        console.log(b);

    }
    return a/b;
}
const sum = add (5, 10);
console.log(sum);