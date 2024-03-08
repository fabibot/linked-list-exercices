//importer:  import linkedList from "./linkedList.js";

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;               
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}


let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;


let list = new LinkedList(node1);
// console.log(list.head.next.next.data); //returns 5

function append(val){
    let lastNode;
    let currentNode = list.head;
    while(currentNode.next != null){
        currentNode = currentNode.next;
    }
    let node = new ListNode(val);
    currentNode.next = node;
    // console.log("new node :" + currentNode.next.data)
}
append(10);
append(11);

function prepend(val){
    let node = new ListNode(val);
    let firstNode = list.head;
    node.next = firstNode;
    list.head = node;
}
// prepend(14);

function size(){
    let currentNode = list.head;
    let nodeCount = 1;
    while(currentNode.next != null){
        currentNode = currentNode.next;
        nodeCount += 1;
    }
    return nodeCount;
}
// size();

function head(){
    return list.head;
}
// console.log(head());

function tail(){
    let lastNode = list.head;
    while(lastNode.next != null){
        lastNode = lastNode.next;
    }
    return lastNode;
}
// tail();

function at(index){
    let listSize = size;
    if(index == 1){
        return list.head;
    }
    let currentNode = list.head;
    let nodeCount = 1;
    while(nodeCount != index){
        if(currentNode == null){
            return null;
        }
        currentNode = currentNode.next;
        nodeCount += 1;
        if(nodeCount == index){
            break;
        }
        
    }
    return currentNode;
}
// console.log(at(2));

function pop(){
    let secondToLast = at(size()-1);
    secondToLast.next = null;
}
// pop();

function contains(val){
    let currentNode = list.head;
        while(currentNode != null){
            if(currentNode.data == val){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
}
// console.log(contains(6));

function find(val){
    let currentNode = list.head;
    let nodeCount = 1;
    while(currentNode != null){
        if(currentNode.data == val){
            return nodeCount;
        }
        currentNode = currentNode.next;
        nodeCount += 1;
    }
    return null;
}
// console.log(find(5));

function toString(){
    let string = "";
    let currentNode = list.head;
    while(currentNode != null){
        string = `${string}(${currentNode.data}) -> `;
        currentNode = currentNode.next;

    }
    string = `${string}null`;
    return string;
}
console.log(toString());

function insertAt(value, index){
    let node = new ListNode(value);
    let nodeIndex = at(index);
    node.next = nodeIndex.next;
    nodeIndex.next = node;
}
// insertAt(200, 3);
// console.log(toString());

function removeAt(index){
    let nodePre = at(index - 1);
    if(!nodePre){
        list.head = list.head.next
    } else {
        nodePre.next = at(index + 1);
    }
}
removeAt(1);
console.log(toString());
