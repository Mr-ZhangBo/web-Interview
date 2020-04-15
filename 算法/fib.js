/**
 * 斐波那契数列(26)
 * @description 每一项是前两项相加之和
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 */
// 解法1是最简单的解法但也是最耗时的解法。
var fib = function(N) {
    if (N < 2) return N;
    return fib(N - 1) + fib(N - 2);
}

// 解法2从i=2开始迭代N，将第i个元素设置前两个元素的和，这样最后一个元素的值就是斐波那契数。
var fib = function(N) {
    if ( N <= 1) return N;
    const result = new Array(N);
    result[0] = 0;
    result[1] = 1;
    for (let i = 2; i < N + 1; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[N];
};

// 题解1(递归)
var fib = function(N) {
    if (N < 2) return N;
    // 重复的计算
    return fib(N - 1) + fib(N - 2);
}

// 题解2(递推) 时间复杂度O(n)
var fib = function(N) {
    // 重复计算可以使用缓存优化
    let cache = []
    for (let i = 0; i <= N; i++) {
        if (i == 1 || i == 0) {
            cache[i] = i
        } else {
            cache[i] = cache[i - 1] + cache[i - 2]
        }
    }
    return cache[N]
}