/**
 * 数组优点
 * 可以随机的去读取，由数组在内存连续存储的特性决定的
 * https://juejin.im/entry/59ae664d518825244d207196
 * leetcode 203
 */
class Node{
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkNodeList{
    constructor() {
        this.head = null
        this.length = 0;
    }
    // 添加
    append(ele) {
        // console.log('添加')
        let node = new Node(ele)
        let cur
        if (!this.head) {
            // 第一个
            this.head = node
        } else {
            // 第二个
            cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
        this.length+=1
    }
    // 打印
    print() {
        // console.log('打印了', this.head)
        let cur = this.head
        let arr = []
        while (cur) {
            arr.push(cur.element)
            cur = cur.next
        }
        console.log(arr.join('==>'))
    }
    removeAt(index) {
        let cur = this.head
        let prev
        let i = 0
        while (i < index) {
            prev = cur
            cur = cur.next
            i++
        }
        prev.next = cur.next
        this.length -= 1
        console.log(prev.element)
        console.log(cur.element)
    }
}

let nList = new LinkNodeList()

nList.append('这是一个测试1')
nList.append('这是一个测试2')
nList.append('这是一个测试3')
nList.append('这是一个测试4')
nList.print()
nList.removeAt(1)
nList.print()