function ListNode() {
    var head = null;
    var length = 0;

    var Node = function(val) {
        this.val = val;
        this.next = null;
    }

    this.add = function(val) {
        var node = new Node(val);
        if(!head) {
            head = node;
        } else {
            var currentNode = head;
            while (currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length ++;
    }
    this.print = function(){
        var output = '';
        if(!head) {
            console.log('The List is empty');
        } else {
            var currentNode = head;
            while (currentNode.next){
                output += currentNode.val + '->';
                currentNode = currentNode.next;
            }
        }
        output += currentNode.val;
        console.log(output);
    }
    this.getHead = function(){
        return head;
    }
}

// (2 -> 4 -> 3) + (5 -> 6 -> 4)
var l1 = new ListNode();
/*l1.add(9);
l1.add(5);
l1.add(7);*/
l1.add(2);
l1.add(4);
l1.add(3);
var l2 = new ListNode();
/*l2.add(4);
l2.add(7);
l2.add(8);*/
l2.add(5);
l2.add(6);
l2.add(6);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var p1 = 0, p2, sum = 0;
    var result = [];
    if(!l1.getHead() && !l2.getHead()) {
        console.log('The List is empty');
    } else {
        var currentNodeL1 = l1.getHead();
        var currentNodeL2 = l2.getHead();
        while (currentNodeL1.next){
            sum = currentNodeL1.val + currentNodeL2.val + p1;
            if (sum > 9){
                p2 = sum % 10;
                p1 = sum / 10;
                p1 = Math.trunc(p1);
                result.push(p2);
            }else {
                result.push(sum);
            }
            currentNodeL1 = currentNodeL1.next;
            currentNodeL2 = currentNodeL2.next;
        }
        sum = currentNodeL1.val + currentNodeL2.val + p1;
        if (sum > 9){
            p2 = sum % 10;
            p1 = sum / 10;
            p1 = Math.trunc(p1);
            result.push(p2);
        }else {
            result.push(sum);
        }
        if (sum > 9 ){
            p1 = sum / 10;
            p1 = Math.trunc(p1);
            result.push(p1);
            }
    }
    

    return result;
};
var result = addTwoNumbers(l1, l2);
console.log(result);
