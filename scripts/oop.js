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

 

 class Notification{
     send(){
         console.log("sending notification");
     }
 }
 const not= new Notification(); 
 not.send();

 class EmailNotification extends Notification{
     send(){
        console.log("sending email");
     }
 }
 class YandexNotification extends Notification{
    send(){
       console.log("sending yandex");
    }
}
const noti= new EmailNotification(); 
 noti.send();
 
 const notik= new YandexNotification(); 
 notik.send();


let no=[not,noti,notik];
 no.forEach(k =>k.send());

 localStorage.setItem("theme","dark");
 const theme=localStorage.getItem("theme");
 console.log(theme);
 localStorage.clear();

 sessionStorage.setItem("step","2");
 const step=sessionStorage.getItem("step");
 console.log(step);
 sessionStorage.clear();

 const data={level:3};
 localStorage.setItem("game", JSON.stringify(data));
 const game = JSON.parse(localStorage.getItem("game"));
 console.log(game);
 
 localStorage.setItem("halo","hello");

 const dota={score:10};
 localStorage.setItem("scre", JSON.stringify(dota));

 const dota2={score:10};
 sessionStorage.setItem("scre", JSON.stringify(dota2));
