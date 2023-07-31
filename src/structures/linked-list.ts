class ListNode {
    data: string;
    next: ListNode | null;
    previous: ListNode | null;

    constructor(data: string) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    print(): void {
        console.log(`[ ${this.data} ]`);
    }
}

export class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* There are only pointer reassignations -> O(1) */
    insert(data: string): LinkedList {
        const newNode = new ListNode(data);

        if (this.head && this.tail) {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode; 
        } else {
            this.head = newNode;
            this.tail = this.head;
        }

        this.length++;
        return this;
    }

    /* There are only pointer reassignations -> O(1) */
    delete(node: ListNode): void {
        if(node.previous && node.next) {
            node.previous.next = node.next;
            node.next.previous = node.previous;
        } else if (!node.previous && node.next) {
            this.head = node.next;
        } else if (node.previous && !node.next) {
            this.tail = node.previous;
        } else {
            this.head = null;
            this.tail = null;
        }
    }

    /* In the worst case we will explore the entire list to not find anything -> O(n) */
    search(data: string): ListNode | null {
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    print(): void {
        let currentNode = this.head;
        while(currentNode !== null) {
            currentNode.print();
            currentNode = currentNode.next;
        }
    }
}