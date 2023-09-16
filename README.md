# journey-of-vuejs
Complete Vue Developer 2023 Zero to the Mastery

#To get statrted with Vue
we need to load it in adding a script tag to the document
like this     
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
Instead of using it, I created a file named <b>vue3cdn</b> and copy the content from url to 
this file some countries had an issue to access this link and need vpn to try it  

After installing view, we need to instruct it what element on the page it will control inside the JavaScript
we create a new application by calling the createApp function 
we pass it in an object to configure how the application will interact with the document.

afterward, we change the mount method 
this method will tell vue to insert the application into the document
it has one argument the selector for the element where we want to insert the application 
we want it to control the div tag with the id of app

we can verify if you is active by taking a look at the view panel inside the developer Tools

The root component refers to the element that's being controlled on the page

in the next lecture we'll begin making our application more dynamic

adding some data 
data is an integral part of any application
data can be rendered onto the page like username or profile picture
vue enable us to use expressions in the document
expression can't be used outside of the template
template would be the element we selected in the mount function 
you have to set your data from within the vue instance any outside code will be ignored.
There will be times where we'll have data that we won't want to render on the template.

The first name and last name properties are unique to each instance.
if we were to open the view developer tools, we'd find both instances appearing.
we have two unique instances of view. Even though they have similar names in the data object, they're completely isolated from one another
if we were to open the view developer tools, we'd find both instances appearing.
typically you will have a single application on any given page.
