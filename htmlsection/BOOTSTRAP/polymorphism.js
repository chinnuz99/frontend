//method overloading
//==same method name different number of parameters.
class Calc{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside one arg method");
    }
    add(num1,num2){
        console.log("inside two arg method");
    }
}
var obj=new Calc();
obj.add()
obj.add(10)
obj.add(10,20)
// recently implimented method is working.  (here: "inside two arg method")



//method overriding
class Parent{
    phone(){
        console.log("inside parent phone")
    }
}
class Child extends Parent{
    phone(){
        super.phone()                              //super refer parent
        console.log("inside child phone")
    }

} 
var child=new Child();
child.phone()