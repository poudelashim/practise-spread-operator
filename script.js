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
};

//spread operator

const newMenu = [...restaurant.mainMenu, 'Momo'];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join 2 arrays or more

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are arrays,maps,sets but NOT objects

const str = 'ashma';
const letters = [...str, '', '💝'];
console.log(letters);

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
