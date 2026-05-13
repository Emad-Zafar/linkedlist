
// step -1 create class for node object creation
class Node{
    constructor(value,next){
        this.value=value;
        this.next=null;
    }
}


// step -2: Actual linkedList class declearation - starts from head and goes on head -> node -> node -> ...
class List {
    constructor(head){
        this.head = head;
        this.size = 0;
    }

    // just node creation
    create (value){
        return new Node(value);
    }

    append (value){

        //create node
        const node = this.create(value);

        //check if list is empty add at at first
        if (!this.head){
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }
        //traverse the list and append in the last 
        else {
            let current = this.head
            while (current.next){
                current = current.next;

            }
            current.next = node;
            this.size++;
            return;
                
        }
    }


    appendAt (value, index) {

        //create node
        const node = this.create(value);

        if (index > this.size) {
            console.log(`\n "${value}" at "${index}" index can not be added \n==> Index does not exist...\n`);
            return;

        }
        //check if list is empty add at at first
        else if (!this.head || index === 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        //traverse the list and append on the index 
        else {
            let current = this.head;
            let previous;
            let count = 0;

            while (count < index){
                previous = current;
                current = current.next;
                count++;


            }
            previous.next = node;
            node.next = current;
            this.size++;
            return;
                
        }
        
    }

    delete (value){

        let current = this.head;
        let previous;

        if (!this.head) {
            return console.log(`list is empty`);
        }
        else if (this.head.value == value ) {
            this.head = current.next;
            console.log(`first node deleted new head is ${this.head.value}`)
            this.size--;
            return;
        }
        else {
            while (!!current && current.value != value){
                
                previous = current;
                current = current.next;
            }
            if (!current) {
                return console.log(`value ${value} does not exist in the list`);
            }
            previous.next = current.next;
            this.size--;
            return;

        }

    }


    deleteAt (index){

        let current = this.head;
        let previous;
        let count = 0;

        // if list is empty
        if (this.size <= 0){
            return console.log (`List is empty...`)
        }

        // if list has only one element
        else if (index == 0 && this.size == 1){
            this.head = null;
            this.size--;
            return console.log (`Now the list is empty`);
        }

        // if deleted index is first
        else if (index == 0 && this.size != 1) {
            current = this.head;
            this.head = current.next;
            this.size--;
            return console.log(`new value at index ${index} is ${this.head.value}`)
        }
        
        else {
            // if index is bigger than list size
            if (index > this.size) {
                return console.log(`provided index too large....`);
                
            }

            // if deleted index is in between
            current = this.head;
            previous = null;
            count = 0;
            while (this.size > 0 && count != index){
                previous = current;
                current = current.next;
                count++;
            }
            if (count == index){
                previous.next = current.next;
                this.size--;
                return console.log(`value "${current.value}" at index ${index} deleted.`)
                
            }
            else{
                return console.log(`value not found....`);
            }

            
        }
    }


}

//linkedlist object creation 
const list = new List(null);
console.log(list);




//operations
list.append(5);
list.append(4);
list.append(3);
list.append(2);
list.append(1);
list.appendAt(100,2);
list.delete(200);
console.dir(list,{depth:null})
list.deleteAt(4);
console.dir(list,{depth:null})


