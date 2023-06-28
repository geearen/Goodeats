# Goodeats https://goodeats-allen-nick.herokuapp.com/
by Nick Arredondo & Allen Gonzales

# Objective
Reverse engineer a website and try to mimic three key feature of it. Also, elevate the website to a more modernize/ friendly user front-end application. 
GoodEats is a website that showcases a recipes that have been input by many user and show case their cooking skills and get reviews with their recipes. 

# User Story
The index route will have a nav bar on top that will be responsible for the [login, register], create recipe, index page. Once the user logs in the nav bar will transition to show the username of user and will also show a link to create a new recipe.

EJS layout of index page with nav bar, spotlight recipe, and all the other recipes with filtering by category on the bottom of the page. 
To create a new recipe, User needs to be login or be registered. Anonymous User/ Visitors can view specific recipe or view all recipes in the database. 

The show route will show a specific recipe when the viewer clicks the recipe on the index page. The show page will show the recipe title, an image of the final product, ingredients and instructions on how to make it. Below the instructions the registed user will have options to edit and delete button. Underneath the recipe the registed user will have the ability to leave a review on that specific recipe. 

Review route will show all reviews including the username who made a review, and which recipe they have made a review. In addition, registed user can click on a comment where
it redirects them to the recipe. Anonymous user need to register in order to view all recipes and make a review for a specific recipe. 

User registration and login on the nav bar. Once the user is logged in it will show the avatar showing the user is logged in. 

Login form/route requires a user email and password. If user email does not exist it will redirect them to a sign-up page. The sign-up page requires: First Name, Last Name, Username, Email, Password. Once Register, this will redirect them to index page and their Username will show on the nav bar. 


# Scope
Our objective is to reverse engineer the allRecipes website. The user will be able to browse the website of homemade recipes, view the ingredients and instructions on how to make it. The user will also be able to add reviews on the recipes that they have tried to make. The features of the site will be: 

1. An index page with a recipe spotlight that will highlight a random recipes for each refresh. At the bottom of the page will show 14 recipes, in addition you can filter by 
show all recipes and by category.

2. A show page that will show a specific recipe in more detail with ingredient and instruction on how to make it. In addition, it shows the review for that recipe. 

3. A create page that will allow the user to create a new recipe 

4. An edit page that will allow the user to edit a particular recipe. 

We think that we can elevate the style of the website to make it more aesthetically pleasing. The current site has a long first page with random recipes going down the entire page.  We would like to provide a better layout that will allow the user to be more engaged in the page. 

# Wireframes
![WIREFRAME](https://i.imgur.com/I7F2O9o.png)

![INDEX](https://i.imgur.com/dn2l1FB.png)

![SHOW](https://i.imgur.com/KQsoBSf.png)

![CREATE](https://i.imgur.com/4zuH3we.png)

![EDIT](https://i.imgur.com/GMvMXz2.png)

![LOGIN](https://i.imgur.com/XLz4zsb.png)

![REGISTER](https://i.imgur.com/TWHZGfR.png)

# Color Pallete
https://coolors.co/003049-d62828-f77f00-fcbf49-eae2b7
![COLORS](https://coolors.co/003049-d62828-f77f00-fcbf49-eae2b7)

# REST/CRUD 
![CRUD](https://i.imgur.com/Hhvigks.png)

# ERD 
![ERD](https://i.imgur.com/mhELHcH.png)

# Technologies
    - Express
    - EJS
    - MongoDB
    - Mongoose
    - method-override
    - concurrently
    - dotenv
    - brcyptjs
    - connect-mongo
    - express-session
    - sass
    - Semantic UI
    - Jquery

Resources
https://semantic-ui.com/
https://stackoverflow.com/
https://fonts.google.com/
https://coolors.co/
https://dribbble.com/
https://api.jquery.com/
https://css-tricks.com/
https://themodernproper.com/
