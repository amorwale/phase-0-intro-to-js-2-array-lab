// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
     cats.push(name);
}

function destructivelyPrependCat(name) {
     cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats.slice(0), name];
}

function prependCat(name) {
    const newprependCat = [...cats];
    newprependCat.unshift(name);
    return newprependCat;
}
function removeLastCat() {
    const newprependCat = [...cats];
    newprependCat.pop();
    return newprependCat;
}

function removeFirstCat() {
    const newprependCat = [...cats];
    newprependCat.shift();
    return newprependCat;
}

