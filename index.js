const coffeeMenu = require("./coffee_data.js");

// 2. Print an array of all the drinks on the menu.
const drinksArray = (item) => {
    return item.name;
}

console.log(coffeeMenu.map(drinksArray));


// 3. Print an array of drinks that cost 5 and under.
const drinkUnder5 = (item) => {
    return item.price <= 5;
}
console.log(coffeeMenu.filter(drinkUnder5));


// 4. Print an array of drinks that are priced at an even number.
const evenDrinks = (item) => {
    return item.price % 2 === 0; 
}

console.log(coffeeMenu.filter(evenDrinks));


// 5. Print the total if you were to order one of every drink.
const pricesArray = (item) => { return item.price; }

const allPrices = coffeeMenu.map(pricesArray);
console.log(allPrices);


const totalPrice = (accumulator, currentValue) => {
        return accumulator + currentValue;
}

const AllDrinksTotal = allPrices.reduce(totalPrice);
console.log(AllDrinksTotal);


// 6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = (item) => {
    if (item.seasonal === true)
        return item;
}
const seasonal = coffeeMenu.filter(seasonalDrinks)
console.log(seasonal);


// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const imported = coffeeMenu.filter(item => item.seasonal === true).map(item => item.name + " with imported beans");
console.log(imported)