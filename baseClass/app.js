class Person {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return '(name is ' + this.name + '.)';
    }
}
class Teacher extends Person {
    teach() {
        return '(i am teacher ' + this.name + ')';
    }
    toString() {
        return '(222name is ' + this.name + '.)';
    }
}

var person = new Person("zhangsan");
console.log(person.toString());

var teacher = new Teacher("wang");
console.log(teacher.teach());
console.log(teacher.toString());

// (name is zhangsan.)
// (i am teacher wang)