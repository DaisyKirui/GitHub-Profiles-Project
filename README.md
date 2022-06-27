# PROJECT NAME: GIT HUB PROJECT

## AUTHOR:  
DAISY KIRUI

## DESCRIPTION:
My project is a single page web application that allows one to look-up the profile of a github account by providing the username of the github user on the input box. 
After clicking enter key, the profile of that user appears under the search box. 

## SET UP
The base URL for my API will be ['https://api.github.com/users/'].


1. The first thing I did was to setup basic files and folders needed in any webapplication on a local dirctory as   well as setup a Github Repository. The files include an index.html file , an index.js file and a style.css file. The next set was to link the files together so that the can affect changes within each other. I input the following lines of code on the index.html file to ensure this happened.
 ```
 
 <link rel="stylesheet" href="./css/style.css" />
 <script src="./js/index.js" ></script>


```

2. The next thing I did was to create a header and an input box in the index.html file. The header is to give the weeb application a name and the input box is where a user writes the GitHub username for the profile they want to look up.

```
    <div> 
        <header>
            <h2>GITHUB PROFILES SEARCH BUTTON</h2>
        </header>

    </div>

    <form class="user-form" id="form">
      <input type="text" id="search" placeholder="Search user">
    </form>

```

3. I proceeded to style my web page using relevant and appropriate identifiers to ease this. I imported some styling elements such as fonts using the url below:
```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');


```

4. I navigated to my index.js file and began by adding an event listener for DOMContentLoaded. This will ensure the JavaScript file loads after the html has been displayed.
```
document.addEventListener("DOMContentLoaded", () => {
  const myTitle = document.getElementById("myTitle");
  console.log(myTitle.textContent);


```
I inspected my webapplication on the browser and the console didnt have any error and displayed " GITHUB PROFILES SEARCH BUTTON" indicating that my eventlistener s working.


5. I moved on to index.js where i began by declaring the url for my API as a variable, as well as declaring other variable to avoid repeating myself throughout the JavaScript code. 
```
const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

```

5. 
The first asynchronous function was 'getUser' who's purpose is to lookup a username entered in the search box, if the username is not found it should display an error message reading 'No profile with this username'.

The second asynch function was 'getRepos' which was aimed at getting the profile of the username entered into the searchbox .

The next 3 functions were to manipulate how the user rofile will appear once a user has entered the username in the search box.

6. The end of my index.js file is an event.listener. 


Here's a link to the live site of the webapplication page [https://daisykirui.github.io/GitHub-Profiles-Project/].


