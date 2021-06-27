//person   //setPerson(age,name) printPerson()
// in javascript use camelin notation
//setvalues setValues()
//in python we write set_values called snake notation
//eg: getelementbyclassname()
//getElementByClassmate()
//this.age ,this.name - instance variables
//setValues- initializing instance variables, _init_(constructor-initializing instance variables, automatically called when object created.)
//in javascript  constructor is denoted as constructor.
class Person{
    setValues(age,name){
        this.age=age;
        this.name=name;
    }
    printValues(){
        console.log(this.age,this.name);
    }
}
var obj=new Person();
obj.setValues(25,"aby")
obj.printValues()

//using constructor
class Person{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
    printValues(){
        console.log(this.age,this.name);
    }
}
var obj=new Person(25,"aby");
obj.printValues()