import { getTotal } from "./cart.js";

console.log(getTotal()); // Should sum (price * quantity) for each item
//   ✘ Challenge 5: running app.js prints 14
    //   → node challenge5-cart/app.js should print 14 (got ["Item: Apple, Price: 2, Quantity: 3, Total: 6","Item: Banana, Price: 1, Quantity: 5, Total: 11","Item: Orange, Price: 1.5, Quantity: 2, Total: 14","14"])