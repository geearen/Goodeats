# Goodeats 
by Nick Arredondo & Allen Gonzales

# User Story
The index route will have a nav bar on top that will be responsible for the [login, register], create recipe ,index page. Once the user logs in the nav bar will transition to show the username of user and will also show the create route

Ejs layout of index page with nav bar, spotlight recipe, and all the other recipes on the bottom of the page. 
REST routing to GET index page and show page 
Style index using (CSS framework)

The show route will show a specific recipe when the viewer clicks the recipe on the index page. The show page will show the recipe title, an image of the final product, ingredients and instructions on how to make it. Below the instructions the user will have options to edit and delete button. Underneath the recipe the user will have the ability to leave a review on that specific recipe.

ejs layout of the show route with nav bar, recipe, review section and add review section 
REST routing Post/Put/Delete reviews on page  
Style index using (CSS framework)


User registration and login on the nav bar. Once the user is logged in it will show the avatar showing the user is logged in. 

create forms for registration and login. 
create REST GET/POST routing for both the registration page and the login page. 
style the forms with a CSS framework 
set up the auth in server.file

# Scope
Our objective is to reverse engineer the allRecipes website. The user will be able to browse the website of homemade recipes, view the ingredients and instructions on how to make it. The user will also be able to add comments on the recipes that they have tried to make. The features of the site will be: 

1. An index page with a recipe spotlight that will highlight a single recipe with a rating and ingredients 

2. A show page that will show a specific recipe in more detail with ingredient and instruction on how to make it. 

3. A create page that will allow the user to create a new recipe 

4. An edit page that will allow the user to edit a particular recipe. 

We think that we can elevate the style of the website to make it more aesthetically pleasing. The current site has a long first page with random recipes going down the entire page.  We would like to provide a better layout that will allow the user to be more engaged in the page. 

# Wireframes
![WIREFRAME] (https://i.imgur.com/I7F2O9o.png)

![INDEX] (https://i.imgur.com/dn2l1FB.png)

![SHOW] (https://i.imgur.com/KQsoBSf.png)

![CREATE] (https://i.imgur.com/4zuH3we.png)

![EDIT] (https://i.imgur.com/GMvMXz2.png)

![LOGIN] (https://i.imgur.com/XLz4zsb.png)

![REGISTER] (https://i.imgur.com/TWHZGfR.png)

# Color Pallete
https://coolors.co/003049-d62828-f77f00-fcbf49-eae2b7
![COLORS] (https://coolors.co/003049-d62828-f77f00-fcbf49-eae2b7)
# REST/CRUD 
![CRUD] (https://i.imgur.com/EA6YKUD.png)

# ERD 
![ERD]  (https://i.imgur.com/mhELHcH.png)

# Technologies
    - Express
    - EJS
    - MongoDB
    - Mongoose
    - method-override
    - concurrently
    - dotenv