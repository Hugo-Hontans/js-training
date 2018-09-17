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
	let splitMessage = message.split(" ");
	let str = "";
	for (var i = 0; i < splitMessage.length; i++) {
		splitMessage[i] = splitMessage[i].replace(splitMessage[i].substring(0,1), splitMessage[i].substring(0,1).toUpperCase());
	}
	return splitMessage.join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("how are you"), "How Are You")
assert.strictEqual(jadenCase("allo"), "Allo")
assert.strictEqual(jadenCase("pouet pouet"), "Pouet Pouet")
assert.strictEqual(jadenCase("je me fais chier"), "Je Me Fais Chier")
assert.strictEqual(jadenCase("hugo"), "Hugo")


// End of tests */
