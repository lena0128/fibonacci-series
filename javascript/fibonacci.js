function fibonacci(num) {
  // type your code here

  if (num < 2) {
    return num;
  }


  let lastTwo = [0, 1];

  // if the increment operator used prefix, 
  // it increments and returns the value AFTER incrementing.
  for (let i = 0; i < num - 1; ++i) {
    const sum = lastTwo[0] + lastTwo[1];
    lastTwo = [lastTwo[1], sum];
  }

  return lastTwo[1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 89")
  console.log("=>", fibonacci(11))  
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/********************************************************************
 * if the input is 0 or 1, return the input
 * 
 * initialize an Array called lastTwo with the first two values from the sequence
 * 
 * loop input - 1 times:
 *    store the sum of the values in lastTwo in a variable called sum
 *    remove the first element from lastTwo
 *    push sum onto lastTwo
 * 
 * return the last value in lastTwo
 * *****************************************************************/


// And a written explanation of your solution
/********************************************************************
 * 斐波拉契数列 - 该数列的生成规则是每一项都是前两项的和
 * Since the fibonacci sequence is always the same, I can initialize an Array
 * with the first two values of the sequence. I only need to store two values
 * because the next value is the sum of the two values that came before it. By
 * adding up the two values I'm storing, I'll always get the next value. If I do
 * that enough times (num - 1), once I'm done adding up the values, the last value
 * will be the nth value in the sequence. Every time I add up the two values, I need
 * to remove the 0th value I'm storing and then push the sum onto that array.
 * 
***********************************************************************/
