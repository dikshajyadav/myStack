const Stack = require('./stack');
const assert = require('assert').strict;
// creating a new stack
var stack = new Stack();

// returns true 
console.log('**Check if the stack is empty')
console.log(stack.isEmpty());
assert.deepEqual(stack.isEmpty(), true)
    // returns zero
console.log('**Check if the stack has zero length')
console.log(stack.length());
assert.deepEqual(stack.length(), 0)
    // returns Underflow 
console.log('**Pop from the empty stack')
console.log(stack.pop());
assert.deepEqual(stack.pop(), 'Underflow')
    // Adding memory slots to the stack 
console.log('**Push 3 memory slots to the stack')
stack.push('0x0000');
stack.push('0x0001');
stack.push('0x0002');
console.log('stack length:' + stack.length());
assert.deepEqual(stack.length(), 3)
    // Printing the stack
console.log(stack.printStack());
// pop the last memory slot
console.log('**Pop the last memory slot from the stack')
var memorySlot = stack.pop();
console.log(memorySlot);
assert.deepEqual(memorySlot, '0x0002')
console.log('stack length:' + stack.length());
assert.deepEqual(stack.length(), 2)
    // Printing the stack
console.log(stack.printStack());