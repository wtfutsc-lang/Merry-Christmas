console.log("novi god");

let students=[
    { name: "Ann", age:15},
    {name:"egar", age:16}
];

console.log(students[0].name)

let numbers=[1,2,3];
numbers.push(4);
console.log(numbers);
let last=numbers.pop();
console.log(numbers);
console.log(last);

let number=[2,3];
number.unshift(1);
console.log(number);
number.shift();
console.log(number);

let items=["a","b","c"];
console.log(items.length);

let colors=["red","blue","green"];
console.log(colors.indexOf("green"));
console.log(colors.includes("green"));
console.log(colors.includes("d"));

let numbe=[10,20,30,40];
let part=numbe.slice(1,3);
console.log(numbe);
console.log(part);

let numb=[10,20,30,40,50];
let removed=numb.splice(1,2);
console.log(numb);
console.log(removed);

let words=["hello","world"];
let message=words.join("☞︎")
console.log(message);

let num=[1,2,3];
num.reverse();
console.log(num);

let names=["bla","vla","Ala"];
names.sort();
console.log(names);

let nu=[10,2,30];
nu.sort((a,b)=>a-b);
console.log(nu);

let n=[1,2,3];
let newN=n.map(n=>n+1);
console.log(newN);

let ns=[1,2,3,4,5,6];
let even=ns.filter(n=>n%2===0);
console.log(even);

let nus=[5,12,3,18,33,22,1,2,12];
let eve=nus.filter(nus=>nus>=10);
console.log(eve);

let boxes=[
    {weight:2, lable:"легкая"},
    {weight:5, lable:"нормалбноя"},
    {weight:12, lable:"тяжелая"},
    {weight:15, lable:"очень тяжелая"}
];
let heavyBox=boxes.find(box=>box.weight>10);
console.log(heavyBox);

let innerOlanets=["Меркурий","Венера","Земля"];
let outerPlanets=["юпитер","сатурн","уран"];
let allPlanets=innerOlanets.concat(outerPlanets);
console.log(allPlanets);

let worlds=["I","like","JS"];
let sentensse=worlds.join(" ");
console.log(sentensse);

async function load(){
    const response=await fetch("/data");
    const data=await response.json();
    console.log(data);
}