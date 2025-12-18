 const car = {
     color:"red",
     speed:0,
     drive(){
         this.speed +=10;
     }
 };

 const user = {
     name:"Alex",
     getName(){
         return this.name;
     }
 };

 class Animal{
     move(){
         console.log("I am moving");
     }
     speak(){
         console.log("animal sound");
     }
 }

 class Dog extends Animal{
    move(){
        console.log("I am Optimus Prime");
    }
     speak(){
         console.log("gaf");
     }
 }

 class Cat extends Animal{
     speak(){
         console.log("meow");
     }
 }

 const cat = new Dog();
 cat.move();
 cat.speak();

 function Human(firstName,lastName){
     this.firstName = firstName
     this.lastName= lastName
 }

 const chris= new Human('mushka', 'pedal')
 console.log(chris.firstName);
 console.log(chris.lastName);

 class Huma{
     constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName= lastName
     }
 }

 const  chendler= new Huma('klava', 'koka')  
  console.log( chendler.firstName);
 console.log( chendler.lastName);

 const Hum ={
     init(firstName,lastName){
        this.firstName = firstName
        this.lastName= lastName
     }
 }

 const nollan= new Hum('mama',"nolana")
 console.log( nollan.firstName);
 console.log( nollan.lastName);
