class MyQueue {
    constructor(){
        this.inStack = [];
        this.outStack = [];
    }
    push(val){
        this.inStack.push(val);
    }
    pop(){
        let inStackToOutStackPopValue;

        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                inStackToOutStackPopValue= this.inStack.pop();
                this.outStack.push(inStackToOutStackPopValue);
            }
        }

        let poppedValue = this.outStack.pop();
        return poppedValue;
    }
    peek(){
        let inStackToOutStackPeekValue;

        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                inStackToOutStackPeekValue = this.inStack.pop();
                this.outStack.push(inStackToOutStackPeekValue)
            }
        }

        let peekedValue = this.outStack[ this.outStack.length - 1 ];
        return peekedValue;
    }
    
    empty(){
        if (this.inStack.length === 0 && this.outStack.length === 0) {
            return true
        }
        return false;
    }
}
