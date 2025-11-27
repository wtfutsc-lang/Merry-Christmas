let toys=[
    {
        name:"бодьшой шар с рисунком цветов",
        id:1,
        count:2,
        year:1960,
        shape:"шар",
        color:"желтый",
        size:"большой",
        favorite:false,
        image:"./public/shar_befer_redpaint.png"
    },
    {
        name:"ፍስድጅፍድ ክስህድክጅ አ ድፍልድስጅፍ",
        id:2,
        count:2,
        year:1960,
        shape:"ችሽልችክቭ",
        color:"፤ትክንስድ",
        size:"ግልድክልፍክ",
        favorite:true,
        image:"./public/shar_befer_redpaint.png"

    },
    {
        name:"Шар стеклянный с блестками",
        id:3,
        count:2,
        year:1960,
        shape:"шар",
        color:"прозрачный",
        size:"средний",
        favorite:false,
        image:"./public/shyshka_winter.png"
    },
    {
        name:"Сосулька из прозрачного стекла",
        id:4,
        count:2,
        year:1960,
        shape:"шар",
        color:"отсутствует",
        size:"маленький",
        favorite:false,
        image:"./public/shyshka_white.png"
    },
    {
        name:"Фигурка ангела",
        id:5,
        count:2,
        year:1960,
        shape:"шар",
        color:"синий",
        size:"большой",
        favorite:false,
        image:"./public/shar_winter2.png"
    },
    {
        name:"Колокольчик золотой",
        id:6,
        count:2,
        year:1960,
        shape:"шар",
        color:"золотой",
        size:"средний",
       
        favorite:false,
        image:"./public/shar_winter.png"
    },
    {
        name:"Санта-Клаус миниатюрный",
        id:7,
        count:2,
        year:1960,
        shape:"шар",
        color:"красный",
        size:"маленький",
        favorite:false,
        image:"./public/shar_white.png"
    },
    {
        name:"Снежинка из дерева",
        id:8,
        count:2,
        year:1960,
        shape:"снежинка",
        color:"белый",
        size:"большой",
        favorite:false,
        image:"./public/shar_winter2.png"
    },
    {
        name:"Шишка, покрытая «снегом»",
        id:9,
        count:2,
        year:1960,
        shape:"шышковидная",
        color:"коричневая",
        size:"средний",
        favorite:false
    },
    {
        name:"Маленькие барабанчики",
        id:10,
        count:2,
        year:1960,
        shape:"многогранныя",
        color:"красный",
        size:"маленький",
        favorite:false
    }
];

toys = toys.map((toy, index) => {
    return {
        ...toy,
        id: index + 1,
    };
});
console.log('updated toys:', toys);

toys.forEach(toy=>
    {console.log(toy.name + " - " + toy.color + " - " + toy.shape + " - " + toy.count);}
    );


let trees = [
    { id: 11, type: "green", size: "big", description: "Классическая зелёная ёлка" },
    { id: 12, type: "snowy", size: "medium", description: "Ёлка в снегу" },
    { id: 13, type: "green", size: "litlle", description: "пушистая елка" },
    { id: 14, type: "snowy", size: "medium", description: "елка с обводкой" }
  ];

  let garlands = [
    { id: 15, type: "white", length: "long", mode: "blink", image: "./public/garland_big.png" },
    { id: 16, type: "multi", length: "medium", mode: "static", image: "./public/garland_medium.png"},
    { id: 18, type: "multi", length: "short", mode: "static", image: "./public/garland_little.png"}
  ];




//   let toyStore ={
//       list:["redMall","blueBall","star"],

//       getToy(index(id)){
//           return this.list[index(id)];
//       }
//   };

let tree={
    type:"green",
    toys:[],

    chanfeTree(newType){
        this.type=newType;
    },

    addToy(toy){
        this.toys.push(toy);
    },

    clearToys(){
        this.toys=[];
    }
};
  
