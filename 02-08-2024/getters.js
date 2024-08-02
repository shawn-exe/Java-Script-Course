const person={
     fn:'shawn',
     ln:'salis',
    get fullname(){
        return `${this.fn} ${this.ln}`
    },
    set fullname(name){
        const parts =name.split(" ");
        this.fn=parts[0]
        this.ln=parts[1]
    }
}
 //person.fullname="shawn2 salis2"
console.log(person.fullname)
console.log(person.fn)
console.log(person.ln)

