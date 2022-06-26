document.addEventListener("DOMContentLoaded", () => {
  const myTitle = document.getElementById("myTitle");
  console.log(myTitle.textContent);

const flowerData = "http://localhost:3000/flowers" ;
const flowerType = document.getElementById("flowerType");
const flowerNumber = document.getElementById("flowerNumber");

let chosenflower;
flowerType.addEventListener('submit', (e)=>{
  consolelog(e.preventDefault());
  
})
})
  /*
 chosenflower.typepfflower += parseInt (e.target.typeofflower.value);
 showInfo(chosenflower);
 console.log(e.type)
});

})

fetch(flowerData)
.then((res)=>res.json())
.then (renderflowers);
function renderflowers(flowers){
flowers.forEach(renderflower);
}



function renderflower(flower){
  let flowerList = getElementById("mycustombouquet")
  const list =document.createElement("li");
  list.innerText = flower.type
  list.innerText = flower.number
  mycustombouquet.appendChild("list");
}




const createCustomBouquet = function (event) {
  event.preventDefault();
  let typeOfFlower = document.getElementById("flowerType");
  let numberOfFlower = document.getElementById("flowerNumber");
  let myCustomBouquet = document.getElementById("mycustombouquet");
  let flowerlist = document.createElement("li");  
  flowerlist.forEach(element => {
    myCustomBouquet.appendChild(element);
  }); 
  let customBouquet = typeOfFlower.value && numberOfFlower.value;
  event.target.reset();
}
console.log(customBouquet);
*/



