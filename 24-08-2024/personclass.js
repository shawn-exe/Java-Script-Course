class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const p1 = new Person("shawn", 21, "India");
const p2 = new Person("jnanesh", 22, "india");

p1.display(); 
p2.display(); 
