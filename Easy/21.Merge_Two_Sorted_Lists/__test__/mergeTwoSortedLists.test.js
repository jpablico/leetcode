import { mergeTwoLists } from "../mergeTwoSortedLists";

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to convert an array to a linked list
const arrayToLinkedList = (arr) => {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

// Helper function to convert a linked list to an array
const linkedListToArray = (head) => {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

// Test cases

test("Merging [1,2,4] and [1,3,4] should return [1,1,2,3,4,4]", () => {
  let list1 = arrayToLinkedList([1, 2, 4]);
  let list2 = arrayToLinkedList([1, 3, 4]);
  let mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
});

test("Merging two empty lists should return an empty list", () => {
  let list1 = arrayToLinkedList([]);
  let list2 = arrayToLinkedList([]);
  let mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([]);
});

test("Merging an empty list with [0] should return [0]", () => {
  let list1 = arrayToLinkedList([]);
  let list2 = arrayToLinkedList([0]);
  let mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([0]);
});

test("Merging [2,5,7] and [1,3,6,8] should return [1,2,3,5,6,7,8]", () => {
  let list1 = arrayToLinkedList([2, 5, 7]);
  let list2 = arrayToLinkedList([1, 3, 6, 8]);
  let mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([1, 2, 3, 5, 6, 7, 8]);
});

test("Merging [1,1,1] and [1,1] should return [1,1,1,1,1]", () => {
  let list1 = arrayToLinkedList([1, 1, 1]);
  let list2 = arrayToLinkedList([1, 1]);
  let mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([1, 1, 1, 1, 1]);
});

test("Merging [5,10,15] and [3,6,9,12] should return [3,5,6,9,10,12,15]", () => {
  let list1 = arrayToLinkedList([5, 10, 15]);
  let list2 = arrayToLinkedList([3, 6, 9, 12]);
  let mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([3, 5, 6, 9, 10, 12, 15]);
});