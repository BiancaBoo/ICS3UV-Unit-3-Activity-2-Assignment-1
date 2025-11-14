/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-11-14
 * @fileoverview This program will round numbers.
 */

//  variables
//  values to round
const num1: number = 8.5467;
const num2: number = 9.6382;
const num3: number = 18.5146;
const num4: number = 125.496;

//  output with proper decimal places and field size
console.log(`${num1.toFixed(3).padStart(10)}`);
console.log(`${num2.toFixed(5).padStart(8)}`);
console.log(`${num3.toFixed(1).padStart(6)}`);
console.log(`${num4.toFixed(1).padStart(3)}`);

console.log("\nDone");
