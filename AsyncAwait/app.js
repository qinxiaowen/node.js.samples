function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
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
    async asyncttest() {
        await sleep(200)
        console.log('(i am teacher ' + this.name + ')');;
    }
}

async function test() {
    var person = new Person("zhangsan");
    console.log(person.toString());

    var teacher = new Teacher("wang");
    //console.log(teacher.teach());

    await teacher.asyncttest();
    console.log('1--------');
    teacher.asyncttest();
    console.log('2--------');
    // (name is zhangsan.)
    // (i am teacher wang)
}

test();