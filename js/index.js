document.addEventListener("DOMContentLoaded", () => {
  const myTitle = document.getElementById("myTitle");
  console.log(myTitle.textContent);
});

const createCustomBouquet = function (event) {
  event.preventDefault();
  let typeOfFlower = document.getElementById("flowerType");
  let numberOfFlower = document.getElementById("flowerNumber");
  customBouquet.innerText = typeOfFlower.value && numberOfFlower.value;
  appendNumberOfFlower(numberOfFlower);
  event.target.reset();
}
console.log(customBouquet);



/*
document.addEventListener("DOMContentLoaded", () => {
    let inputFlowerType = document.getElementById("flowerType");
    total.addEventListener("submit", createCustomBouquet);
  });

  const createCustomBouquet = function (event) {
    event.preventDefault();
    let newTaskList = document.getElementById("bouquet");
    let bouquetFlowers = document.createElement("li");
    let customBouquetType = document.getElementById("enterFlowerType");
    customBouquet.innerText = customBouquetType.value && customBouquetNumber;
    console.log(customBouquet);
    appendcustomBouquet(customBouquet);
    event.target.reset();
  };
  const erase = (event) => {
    event.target.ul.remove();
  };
  
  const appendcustomBouquet = (bouquet) => {
    document.getElementById("bouquet").appendChild(bouquet);
  };
*/