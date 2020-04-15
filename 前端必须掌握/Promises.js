function Promises(fn) {
    console.log('new Promise')
    var state = 'pending', value = null, callbacks = [];
    this.then = function(onFulfilled) {
        // console.log('调用了then')
        if (state === 'pending') {
            callbacks.push(onFulfilled)
            return this
        }
        onFulfilled(value)
        return this
    }
    function resolve(newValue) {
        value = newValue
        state = 'fulfilled'
        // console.log('执行了resolve')
        setTimeout(()=>{
            callbacks.forEach(cb => {
                // console.log('执行了cb')
                cb(value)
            })
        },0)
    }
    fn(resolve)
}