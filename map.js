// class hello{
//     constructor(x, y){
//         this.x=x;
//         this.y=y;
//     }
// }
// const a=new hello(10, 30);
// console.log(a.x);
// console.log(a.y);
class Students{
    constructor(name,age){
        this.myname=name;
        this.myage=age;
    }
     biodata(){
        console.log(`hi i am a class ${this.myname} is ${this.myage}`);
    }
}
    class player extends Students{
    constructor(game,name,age){
        this.mygame=game;
        super(name,age);
    }
}
let a=new Students('sunita', 22)
a.biodata();
a.biodata();

a.biodata();