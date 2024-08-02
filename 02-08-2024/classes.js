class calculator{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    add(){
        return this.num1+this.num2
    }
    sub(){
        return this.num2-this.num1
    }

    //can be accessed only using the class name.. objects are not required
    static disp(){
        console.log("cal")
    }
}
let c=new calculator(3,7)
console.log(c.add())
console.log(c.sub())
calculator.disp()


