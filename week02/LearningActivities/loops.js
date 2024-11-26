// // loops.js
// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//       {
//         place: "Rexburg, ID",
//         length: "5 years",
//       },
//       {
//         place: "Ammon, ID",
//         length: "3 years",
//       },
//       {
//         place: "Sandy, UT",
//         length: "1 year",
//       },
//     ],
//   };

//   // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  
//   // myInfo.forEach(function(item, index, array) {
//   //   console.log(item);
//   //   console.log(index);
//   // });

//   // let favoriteFood1 = document.createElement("li");
//   // favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   // let favoriteFood2 = document.createElement"li");
//   // favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   // let favoriteFood3 = document.createElement("li");
//   // favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   // let favoriteFood4 = document.createElement("li");
//   // favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   // document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   // document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   // document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   // document.querySelector("#favorite-foods").appendChild(favoriteFood4);

//   // myInfo.forEach((caracteristica) => {
//   //   console.log(caracteristica)
//   // });

// //   function createList(array) {

// //     // Loop over the array and create <li> elements for each item
// //     array.forEach(food => {
// //         let favoriteFood = document.createElement('li'); // Create <li> element
// //         favoriteFood.textContent = food; // Set the text content of <li>
// //         document.querySelector("#favorite-foods").appendChild(favoriteFood);    // Append <li> elements to <ul>
// //     });
// // }


// // myInfo.favoriteFoods.forEach(food => {
// //   let favoriteFood = document.createElement('li');
// //   favoriteFood.textContent = food;
// //   document.querySelector("#favorite-foods").appendChild(favoriteFood);  
// // });


// myInfo.favoriteFoods.forEach(food => {
//   let favoriteFood = document.createElement('li');
//   favoriteFood.textContent = food;
//   document.querySelector("#favorite-foods").appendChild(favoriteFood);  
// });

// myInfo.placesLived.forEach(place => {
//   let livedPlace = document.createElement('dt');
//   livedPlace.textContent = place;
//   document.querySelector("#places-lived").appendChild(livedPlace);  
// });


// // // with .forEach
// // const foodsElement = document.querySelector('#favorite-foods');
// // function createandAppendFoodItem(food) {
// //   let favoriteFood = document.createElement('li');
// //   favoriteFood.textContent = food;
// //   foodsElement.appendChild(favoriteFood);
// // }
// // myInfo.favoriteFoods.forEach(createAndAppendFoodItem);


// // // with .map
// // const foodsElement = document.querySelector('#favorite-foods');
// // function mapFoodItem(food) {
// //   let favoriteFood = document.createElement('li');
// //   favoriteFood.textContent = food;
// //   return favoriteFood;
// // }
// // // this function could also be written this way using a template literal:
// // function mapFoodItemSmall(food) {
// //   return `<li>${food}</li>`;
// // }
// // const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// // // we need to flatten the array of strings into one big string. .join does this.
// // foodsElement.innerHTML = foodListElements.join('');

// // The map example could be simplified as below:
// const placesLived = document.querySelector("#places-lived");
// const placesLivedElements = myInfo.placesLived.map((place) => `<dt>${place.place}</dt><dd>${place.length}</dd>`);
// // we need to flatten the array of strings into one big string. .join does this.
// placesLived.innerHTML = placesLivedElements.join("");

// // Função principal
// function generateHTML(list, templateFunction) {
//   // Transforma cada item da lista em um HTML usando a função de callback
//   return list.map(templateFunction).join('');
// }

// // Exemplo de callback function para criar um template HTML
// function itemTemplate(item) {
//   return `<div class="item">${item}</div>`;
// }

// // Lista de exemplo
// const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

// // Gerar o HTML
// const html = generateHTML(items, itemTemplate);

// console.log(html);

// Learning Activities - Week 02 - Loops and Iteration - Check Your Understanding: 
// 1. Complete the activities presented in this resource: JavaScript Loops - WDD Learning Modules:
// Ponder Activities- Activity 3.4

// function templateGenerator(item) {
//   return `<div>${item}</div>`;
// }

// function generateHTML(list, templateGenerator) {
//   return list.map(templateGenerator).join('');
// }

// const favoriteFoods = generateHTML(myInfo.favoriteFoods, templateGenerator);
// const placesLived = generateHTML(myInfo.placesLived, templateGenerator);

// const placesLivedElements = myInfo.placesLived.map((place) => `<dt>${place.place}</dt><dd>${place.length}</dd>`);
// placesLived.innerHTML = placesLivedElements.join("");

// // console.log(favoriteFoods);
// // console.log(placesLived);

// document.body.innerHTML += favoriteFoods;
// document.body.innerHTML += placesLivedElements.join("");

// Learning Activities - Week 02 - Loops and Iteration:
// 2. Given the following variable declarations:

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below LIMIT.

for (let i = 0; i < studentReport.length; i++) {
  let studentNumber = studentReport[i];
  if (studentNumber < LIMIT) {
    console.log(studentNumber);    
  }
};

// Repeat the previous programming snippet by using a while loop.

i = 0;

while (i < studentReport.length) {
  let studentNumber = studentReport[i];
  if (studentNumber < LIMIT) {
    console.log(studentNumber);    
  }
  i++;
};

// Repeat the previous programming snippet by using a forEach loop.

studentReport.forEach(item => {
  if (item < LIMIT) {
  console.log(item);
  }
});

for(i in studentReport){
  num = studentReport[i];
  if (num < LIMIT) {
    console.log(num);
  }
};

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

now = new Date;
today = now.getDay();

// console.log("Today is " + now.getDay());

// console.log(weekDays[today]);

for (i = 1; i < DAYS; i++) {

  nextDay = today + i;

  // console.log(weekDays[today]);

  if (nextDay > 6) {
    nextDay -= 7;
    console.log(weekDays[nextDay]);
  }
  else{
    console.log(weekDays[nextDay]);
  }
}