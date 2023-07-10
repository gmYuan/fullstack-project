
# LeetCode203- 移除链表元素

1 思维关键词: 

S1 迭代法: dummy + tmep.next

S2 递归法: 是否连接本轮head

2 参考文档

[01 方法参考](https://leetcode.cn/problems/remove-linked-list-elements/solution/203yi-chu-lian-biao-yuan-su-by-lewis-dxstabdzew/)


## 代码实现

1 方法1: 虚拟头节点，时间复杂度 O(n)  空间复杂度O(1)

```ts
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return head
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next) {
    if (cur.next.val === val) {
      // 找到下一个值不等于val的节点
      let temp = cur.next  
      cur.next = temp.next
    } else {
      cur = cur.next
    }
  }
  cur.next = null
  return dummy.next
};
```

2 方法2: 递归法  时间复杂度 O(n)  空间复杂度O(n)

```ts
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null
  // 递归定义：返回了节点值不为val的新链表的 头节点
  if (head.val === val) {
    return removeElements(head.next, val)
  } else {
    head.next = removeElements(head.next, val)
  }
  return head
};
```