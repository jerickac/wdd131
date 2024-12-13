let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

// Using the array.filter() method, create an array named namesB with only those names from the name array that start with the character 'B'.
bNames = names.filter((name) => name[0] === "B");

// Using the array.map() method, create a new array named namesLength that contains the length of each name in the names array. Expected output is [5, 8, 5, 8, 3].
i = 0;

namesLength = names.map(() => names[i++].length);

console.log(bNames);
console.log(namesLength);