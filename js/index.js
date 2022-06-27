const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})

/*document.addEventListener("DOMContentLoaded", () => {
  const myTitle = document.getElementById("myTitle");
  console.log(myTitle.textContent);

  const inputFlower = document.getElementById("typeofflower");
  //const inputNumber = document.getElementById("numberofflower");
  const myButton = document.querySelector('.enter');
  const list = document.querySelector('.bouquetoutput ul')
  myButton.addEventListener('click', (e) => {
    e.preventDefault();

    const mylist = document.createElement('li');
    mylist.innerHTML = `${inputText.value} ${inputNumber.value}`;
    list.appendChild(mylist);

    const mySpan = document.createElement('span')
    mySpan.innerHTML = 'x';
    mylist.appendChild(mySpan);

  } )

})

*/

/*

const flowerData = "http://localhost:3000/flowers" ;
const flowerType = document.getElementById("flowerType");
const flowerNumber = document.getElementById("flowerNumber");

let chosenflower;
flowerType.addEventListener('submit', (e)=>{
  consolelog(e.preventDefault());
  
})
 chosenflower.typepfflower += parseInt (e.target.typeofflower.value);
 showInfo(chosenflower);
 console.log(e.type)
;
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
