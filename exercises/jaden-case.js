'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (message){
	return message.toUpperCase();
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("how are you"), "HOW ARE YOU")
assert.strictEqual(jadenCase("allo"), "ALLO")
assert.strictEqual(jadenCase("pouet pouet"), "POUET POUET")
assert.strictEqual(jadenCase("je me fais chier"), "JE ME FAIS CHIER")
assert.strictEqual(jadenCase("hugo"), "HUGO")


// End of tests */
