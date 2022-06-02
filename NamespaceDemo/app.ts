/// <reference path='utility-functions.ts' />

const result1 = Utility.maxBooksAllowed(15);
// console.log(result1);

import util = Utility.Fees;
const result2 = util.calculateLateFee(30);
// console.log(result2);

// tsc app.ts --target ES5
// tsc app.ts --target ES5 --outfile bundle.js
