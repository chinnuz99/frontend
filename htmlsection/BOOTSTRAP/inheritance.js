//parent properites acquire by child-inheritence
//single inheritance

// in java script one class do not inherit multiple class , not supported
//multiple is not not suppored 
class Parent{
    mobile(){
        console.log("inside parent mobile method")
    }
}
class Child extends Parent{

}
var child=new Child();
child.mobile()


// multilevel inheritance
class Parent{
    mobile(){
        console.log("inside parent mobile method")
    }
}
class Parent2 extends Parent{
    m2(){
    console.log("inside parent2")
    }

}
class Child extends Parent2 {

}
var child=new Child();
child.m2();
child.mobile()

