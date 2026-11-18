
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentCount = init;

    return {
        increment: function() {
            currentCount += 1;
            return currentCount;
        },

        decrement: function() {
            currentCount -= 1;
            return currentCount;
        },

        reset: function() {
            currentCount = init;
            return currentCount;
        }
    };
    
};
const counter = createCounter(5);

console.log(counter.increment()); 
console.log(counter.reset());     
console.log(counter.decrement()); 