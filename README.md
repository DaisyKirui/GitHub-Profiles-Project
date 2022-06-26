# PROJECT NAME: MORE THAN A DAISY WEB APPLICATION

## AUTHOR:  
DAISY KIRUI

## DESCRIPTION:
This is a single page web application. The application allows one to custom design their flower bouquet by selecting the type of flower from four possible options as well as the number of each type. 

## IMAGE OF WORKING APPLICATION


## SETUP INSTRUCTION
The base URL for my API will be [http://localhost:3000/flower] and it's repository is available is here [https://github.com/DaisyKirui/More-Than-A-Daisy-API.git] .

## Deliverables
A user of the web application can;

1. See all flower images to get a clear picture of what type of flower they would like on their bouquet.
2. 

h the id of `"character-bar"`. Create
   a `span` tag with the character's name and add it the `div#character-bar`
   once you have retrieved the character data from the server. You will need to
   make a GET request to the following endpoint to retrieve the character data:

   ```txt
   GET /characters

   Example Response:
   [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 0
    },
    {
      "id": 2,
      "name": "Mr. Monkey",
      "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      "votes": 0
    },
    ...
   ]
   ```

2. When the character in the `div#character-bar` is clicked, display the
   character's details in the `div#detailed-info`. You can either use the
   character information from your first request, or make a new request to this
   endpoint to get the character's details:

   ```txt
   GET /characters/:id

   Example Response:
   {
    "id": 1,
    "name": "Mr. Cute",
    "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
    "votes": 0
   }
   ```

3. When the `form#votes-form` is submitted, add the number of votes from
   the input field to the character displayed in the `div#detailed-info`. **No
   persistence is needed**.
