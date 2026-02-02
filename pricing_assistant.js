let productName = "Pink Cow Plushie"; //string
let costPerUnit = 14.99; //number
let basePrice = 29.99; //number
let discountRate = 0.20; //20% discount
let salesTaxRate = 0.07; //7% tax
let fixedMonthlyCosts = 1200; //monthly overhead

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;

let isProfitablePerUnit = profitPerUnit > 0;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);


console.log("Product Name:", productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units:", breakEvenUnits);
console.log("Profitable Per Unit?:", isProfitablePerUnit);