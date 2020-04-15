/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 方法一 时间复杂度:O(n^2) 空间复杂度:O(1)
let twoSum = (nums, target) => {
    let sur
    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            sur = nums[i] + nums[k]
            // console.log(sur)
            if (i != k && sur == target) {
                // console.log(i,k)
                return [i, k]
            }
        }
    }
}
// 方法二
let twoSum = (nums, target) => {
    let targetMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i]
        if (targetMap.has(key)) {
            return [targetMap.get(key), i]
        }
        targetMap.set(nums[i], i)
    }
}

// 时间复杂度:O(n) 空间复杂度:O(n) 空间换时间
let twoSum = (nums, target) => {
    let obj = {}
    for (let i = o; i < nums.length; i++) {
        let num = nums[i]
        if (num in obj) {
            return [obj[num], i]
        } else {
            obj[target - num] = i
        }
    }
}