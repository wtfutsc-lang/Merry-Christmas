let toys=[
    {
        name:"бодьшой шар с рисунком цветов",
        id:1,
        count:99999999,
        year:1960,
        shape:"шар",
        color:"желтый",
        size:"большой",
        favorite:false,
        image:"./public/shar_befev_redpaint.png"
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
        image:"./public/kolokol_winter.png"

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
        favorite:false,
        image:"./public/shar_green.png"
    },
    {
        name:"Маленькие барабанчики",
        id:10,
        count:2,
        year:1960,
        shape:"многогранныя",
        color:"красный",
        size:"маленький",
        favorite:false,
        image:"./public/kolechko.png"
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
    { id: 11, type: "green", size: "big", description: "Классическая зелёная ёлка", image:"./public/tree_ne_pushistaya.png"},
    { id: 12, type: "snowy", size: "medium", description: "Ёлка в снегу", image:"./public/tree_white.png" },
    { id: 13, type: "green", size: "litlle", description: "пушистая елка", image:"./public/trr_pushistaya.png" },
    { id: 14, type: "snowy", size: "medium", description: "елка с обводкой", image:"./public/trr_s_obvodkoy.png" }
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
  
let currentTree = {
    type: "",
    garland: "",
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },
  
    addToy(toy) {
      this.toys.push(toy);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
  };
  
  let updtoys = toys.map((toy) => {
    return {
      ...toy,
      count: toy.count + 1,
    };
  });
  console.log(updtoys);
  
  let toystore = {
    list: ["redBall", "blueBall", "star"],
    getToy(index){
      return this.list[index];
    }
  };

  
const title=document.querySelector("h1");
const appels=document.querySelectorAll("appel");

// const toy=document.querySelectorAll(".toy");
// console.log(toy.dataset.type);
// console.log(toy.dataset.size);

const toysGrid = document.querySelector (".toys-grid");

toys.forEach((toy,index)=>{
  const toyBox=document.createElement("div");

  const img=document.createElement("img");
  img.src=toy.image;
  img.style.height = "100px";
  img.style.width = "100px";
  img.style.objectFit="contain";
  img.classList.add("toy");
  img.draggable=true;
  img.dataset.index=index;
  
  const countBox=document.createElement("div");
  countBox.textContent=toy.count;
  countBox.style.color="white";
  countBox.style.textAlign="center";
  countBox.style.fontSize="14px"

  toyBox.appendChild(img);
  toyBox.appendChild(countBox);

  toysGrid.appendChild (toyBox);

  img.addEventListener("dragstart", e =>{
    if(toy.count === 0)
    {
      e.preventDefault ();
      return;
    }
    e.dataTransfer.setData("toy", index);
  })
});

window.addEventListener ("scroll", () =>{
  console.log ("procrut");
});
const treeArea = document.querySelector(".tree-area");
let placedCounter = 0;

treeArea.addEventListener("dragover", e => e.preventDefault());

treeArea.addEventListener("drop", e => {
  e.preventDefault();

  const rect = treeArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (e.dataTransfer.getData("toy") !== "") {
    const toyIndex = e.dataTransfer.getData("toy");
    const toy = toys[toyIndex];

    if (toy.count > 0) {
      toy.count--;

      const xPos = x - 40;
      const yPos = y - 40;

      placedCounter++;
      const placedId = placedCounter;

      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left = xPos + "px";
      img.style.top = yPos + "px";
      img.style.width = "75px";
      img.style.height = "75px";
      img.style.objectFit="contain";

      // сохраняем id в DOM
      img.dataset.placedId = placedId;

      treeArea.appendChild(img);

      // сохраняем в объект текущей ёлки
      currentTree.addToy({
        id: toy.id,
        placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      console.log('currentTree.toys:', currentTree.toys);
      

      toysGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click", () => {
        console.log("Клик по игрушке", img.dataset.placedId);

        img.remove();

        toy.count++;
        toysGrid.children[toyIndex].children[1].textContent = toy.count;

        currentTree.toys = currentTree.toys.filter(
          t => t.placedId != img.dataset.placedId // удалить игрушку
        );
      });
    }
  }

  if (e.dataTransfer.getData("garland") !== "") {
    const gIndex = e.dataTransfer.getData("garland");
    const garland = garlands[gIndex];

    currentTree.setGarland(garland.type);

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland-on-tree");

    img.style.left = (x - 140) + "px";
    img.style.top = (y - 20) + "px";

    img.style.animationDelay = (Math.random() * 1.6) + "s";

    treeArea.appendChild(img);
    
    //при клике на гирлянду удаляем ее из DOM
     img.addEventListener("click", () => {
      img.remove();
      // удаляем гирлянду из объекта текущей ёлки
      currentTree.setGarland("");
    });
  }
});

let treeData = {
    type:currentTree.type,
    garland: currentTree.garland,
    toys: currentTree.toys
};

function getResultCurrentTreeData(){
    const resultCurrentTreeData={
        type: currentTree.type,
        garland: currentTree.garland,
        toys:currentTree.toys.map(toy=> ({
            id:toy.id,
            x :toy.x,
            y: toy.y,
            image: toy.image
        }))
    };

    return resultCurrentTreeData;
}

const saveTreeBtn=document.getElementById("save-tree-btn");

saveTreeBtn.addEventListener("click", () =>{
    const resultCurrentTreeData= getResultCurrentTreeData();
    console.log(resultCurrentTreeData);

    const resultCurrentTreeJSON=JSON.stringify(resultCurrentTreeData);
    console.log(resultCurrentTreeJSON);
});
// const treeArea = document.querySelector(".tree-area");

// treeArea.addEventListener("dragover", e => e.preventDefault());

// treeArea.addEventListener("drop", e => {
//   e.preventDefault();

//   const rect = treeArea.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   if (e.dataTransfer.getData("toy") !== "") {
//     const toyIndex = e.dataTransfer.getData("toy");
//     const toy = toys[toyIndex];
  
//     if (toy.count > 0) {
//       toy.count -= 1;
  
//       const xPos = x - 40;
//       const yPos = y - 40;
  
//       const img = document.createElement("img");
//       img.src = toy.image;
//       img.classList.add("toy-on-tree");
  
//       img.style.left = xPos + "px";
//       img.style.top = yPos + "px";
  
//       treeArea.appendChild(img);
  
//       currentTree.addToy(toy, xPos, yPos);
//         toysGrid.children[toyIndex].children[1].textContent = toy.count;
  
//       img.addEventListener("click", () => {
//         img.remove();
//         toy.count += 1;
//         toysGrid.children[toyIndex].children[1].textContent = toy.count;
  
//         currentTree.toys = currentTree.toys.filter(t => t.id !== toy.id);
//       });

//  }
//   }
  
//   if (e.dataTransfer.getData("garland") !== "") {
//     const gIndex = e.dataTransfer.getData("garland");
//     const garland = garlands[gIndex];
  
//     currentTree.setGarland(garland.type);
  
//     const img = document.createElement("img");
//     img.src = garland.image;
//     img.classList.add("garland-on-tree");
  
//     img.style.left = (x - 140) + "px";
//     img.style.top = (y - 20) + "px";
  
//     img.style.animationDelay = (Math.random() * 1.6) + "s";
  
//     treeArea.appendChild(img);
//   }
  
// });