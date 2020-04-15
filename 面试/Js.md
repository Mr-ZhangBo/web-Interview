# JS基本类型有哪些

# == 和 === 区别?

# script写在body和head中的区别?
    https://www.jianshu.com/p/2e6f9b732a91
    head body
    https://segmentfault.com/a/1190000017996968?utm_source=tag-newest

# 聊一下JS对象的深拷贝和浅拷贝
    1.$.extend({},obj)
    2.Object.assign({},obj)
    3.JSON.parse(JSON.stringify(obj))

# 数组的合并有哪些方法
    1.Array.prototype.push.apply(arr1, arr2)

# JS原型链与继承

# call和apply的区别

# 什么方法可以检测类型
    1.typeof
    2.instanceof
    3.Object.prototype.toString.call();
    参考地址地址：https://www.cnblogs.com/langshening/p/10119418.html

# this对象的理解和闭包

# 获取当前函数的参数
    arguments

# 防抖节流
    function debounce(fn,delay){
        // 借助闭包
        let timer = null
        return function() {
            if(timer){
                // 进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
                clearTimeout(timer)
                timer = setTimeout(fn,delay) 
            }else{
                // 进入该分支说明当前并没有在计时，那么就开始一个计时
                timer = setTimeout(fn,delay)
            }
        }
    }

    function new_instance_of(leftVaule, rightVaule) { 
            let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
            leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
            while (true) {
                if (leftVaule === null) {
                    return false;	
                }
                if (leftVaule === rightProto) {
                    return true;	
                } 
                leftVaule = leftVaule.__proto__ 
            }
        }
    

# 闭包
    https://blog.csdn.net/qq_38070608/article/details/78903596

# 实现bind,apply,call

# 什么是函数式编程
    http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html

# 什么是柯里化

# hooks 实现原理