import { totalSale,numberSale,buy,sell } from "./sales.js";
let buyer={
    name:"shawn",
    total:100
};

let item={
    name:"Drink",
    price:10,
    quantity:100
};

console.log("Total sales at begin:",totalSale)
buy(buyer,item)
sell(item)

console.log("Expense of buyer :",buyer.total)
console.log("quantity of items left :",item.quantity)
console.log("totalSales now:",totalSale)

