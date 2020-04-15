// 目录的计算 webpack 71
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let paths = path.split('/')
    for (let i = 0; i < paths.length; i++) {
        const p = paths[i]
        if (p == '..') {
            stack.pop()
        } else if (p && p != '.') {
            stack.push(p)
        }
    }
    return '/' + stack.join('/')
};

const obj = {
    '': stack=>stack,
    '.': stack=>stack,
    '..': stack=>{
        stack.pop()
        return stack
    },
}