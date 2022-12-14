/*
"setTimeout and setInterval functions"

The setTimeout function is used when you want to cause a delayed action. A similar function is setInterval. This time, the action is also performed with a delay, but 
periodically, so it is repeated at fixed intervals. In the meantime, the main program is executed, and at every specified time, the callback given as an argument for a 
setInterval call is called.

Interestingly, the setInterval function returns an identifier during the call, which can be used to remove the timer used in it (and consequently to stop the cyclical 
callback function call).
*/

/*
Usually, however, asynchronous function calls are related to slightly different situations. They are determined by events not related to timers, but rather generated 
outside of the program. As we have said before, they can be, for example, actions performed by the user, such as a mouse click on an interface element on a page. 
*/
let inner = function() {
    console.log('inner 1');
}
    
let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
        
    setTimeout( function(){
                    clearInterval(timerId);
                }, 5500);
}

console.log('test 1');
outer(inner);
console.log('test 2');