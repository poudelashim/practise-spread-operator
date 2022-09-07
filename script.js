'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//spread operator

// const newMenu = [...restaurant.mainMenu, 'Momo'];
// console.log(newMenu);

// //copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //join 2 arrays or more

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables are arrays,maps,sets but NOT objects

// const str = 'ashma';
// const letters = [...str, '', '💝'];
// console.log(letters);

//real world examples
// const ingredients = [
//   // prompt("'Let's make pasta! Ingredient 1?"),
//   // prompt('ingredient 2'),
//   // prompt('ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//spread operators work with objects too even if objects are not iterables

//objects
const newRestaurant = { founded: '2022', ...restaurant, founder: 'Ashma' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ashma's Cafe";
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*rest pattern and parameters: 
The rest pattern looks almost similar to spread operators . It has the same syntax with same dots but does the opposite to the spread operators. 

*/

//1. destructring

//spread beacuse on right side =
const arr = [1, 2, ...[3, 4]];

//rest beause on left side =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// another example

/*const [pizza,,risotto,...otherFood,bread] cant add elements at the end, as rest element MUST be the last element */
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. functions

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//coding challenge

//creating
const game = {
  team1: 'Bayern Munich',
  team2: 'Dortmund',
  players: [
    [
      'Neur',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimich',
      'Goretzka',
      'Coman',
      'Muller',
      'Sane',
      'Lewandoski',
    ],

    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],

  score: '4.0',
  scored: ['Lewandoski', 'Sane', 'Lewandoski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. arrays destructuring
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win the game');
team2 > team1 && console.log('Team2 is more likely to win the game');
