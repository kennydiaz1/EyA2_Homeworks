//ARRAY.push() method
const fruits = ["Apple", "Peach"];
console.log(fruits.push("Banana"));
console.log(fruits);

//ARRAY.pop() method
const fruits1 = ["Apple", "Peach"];
fruits.pop();
console.log(fruits);

//ARRAY.shift() method
const fruits2 = ["Apple", "Peach"];
fruits.shift();
console.log(fruits);

//ARRAY.unshift() method
const fruits3 = ["Apple", "Peach"];
console.log(fruits3.unshift("Banana"));
console.log(fruits3);

//ARRAY.indexOf() method
const arr = ["Danny", "Mandeep", "John", "Ruby"];
const indexFinder = arr.indexOf("Mandeep");
console.log(indexFinder);

//ARRAY.includes() method
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.includes(2));
console.log(arr1.includes(7));

//ARRAY.slice() method
const arr2 = ["a", "b", "c", "d", "e",];
const sliced = arr2.slice(2, 4);
console.log(sliced);
console.log(arr2);

//ARRAY.map() method
const arr3 = [1, 2, 3, 4, 5, 6];
const mapped = arr3.map(Element => Element + 30);
console.log(mapped);

//ARRAY.filter() method

const arr4 = [1, 2, 3, 4, 5, 6];
const filtered = arr4.filter(Element => Element === 2 || Element === 4);
console.log(filtered);

//ARRAY.sort() method

const arr5 = [1, 2, 3, 4, 5, 6];
const alphabet = ["f", "a", "c", "v", "z",];

descend = arr4.sort((a, b) => a > b ? -1 : 1);
console.log(descend);

ascend = alphabet.sort((a, b) => a > b ? 1 : -1);
console.log(ascend);

//ARRAY.forEach() method

const arr6 = [1, 2, 3];
arr6.forEach(Element => {
    console.log(Element)
});

//ARRAY.concat() method

const arr7 = ["a", "b", "c"];
const arr8 = ["d", "e", "f"];

console.log(arr7.concat(arr8));
console.log(arr7);
console.log(arr8);

//ARRAY.join() method

const arr9 = ["m", "a", "n", "d", "e", "e", "p"];
console.log(arr9.join(''));

//ARRAY.find() method
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr10.find(Element => Element > 5);
console.log(found);

