function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax
    return amount * taxRate;
}

console.log(calculateTax(0));

function convertToUpperCase(str) {
    return str.toUpperCase();
}

console.log(convertToUpperCase("Hi there!"));

function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

console.log(findMaximum(100, 10));

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));


function calculateDiscountedPrice(originalPrice, discountPercentage) {

    const discountAmount = (originalPrice * discountPercentage);
    return originalPrice * discountPercentage;
}

console.log(calculateDiscountedPrice(100, 0.2));
console.log(calculateDiscountedPrice(58, 0));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };