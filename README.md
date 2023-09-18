# journey-of-vuejs
Complete Vue Developer 2023 Zero to the Mastery

<h1>To get statrted with Vue</h1>
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

<h1>With Proxy</h1>
    this feature keeps your code readable and straightforward.
    The purpose of this to make it convenient for you, the developer proxy, It's afeature built into vue, That the reasons why developers love you so much 
    we can access the data directly from the object rather than access it through the dollar sign data object Vue is capable of calling the correct functions that are access or update the data.

<h1>Without Proxy</h1>
    will return the last name from the data object
    The problem with this approach is that we have to type quite a bit of code to get the data. It isn't that annoying, but it can be simplified
    The use simplifies the code you have to write by creating proxy getters and setters.
    There immediately functions that will take care of grabbing or updating the actual data.

<h1>Methods</h1>
The app we built displays the full name on the page inside the code, We're using two expressions to accomplish this It would be nice if we could make it into one expression. without updating the data object to hold the full name .
we can do it with this valid expression {{ `${firstName}` }}. we're free to call functions or use arithmetic operations from within 

if you would like to use the functions inside the vue instance you can access them via the this keyword, Since we're storing the instance in the variable methods are also accessible through the variable that

<h1>Directives</h1>

directives are attributes that change the behavior of the element it's applied to.
Vue comes with a few built-in directives You even have the option to create your own
v-cloak to the browser, this is an attribute, but to vue this is a directive, unlike attributes, directives change how an element behaves
this behavior can be anything from changing the color to removing an element. All directives start with the "V", followed by the name of the directive.Directives can have experssions of values, but the one we're using doesn't require one(v-cloak).

the browser will identify this as an attribute, even though it's a directive in vue XYZ, we can use CSS to select this as an attribute and hide the elements open access file [v-cloak] {display: none ;} on css file.
make sure you have throttling turned on while the pages loading the expression isn't appearing as plain text the page has finished loading, the name is rendered onto the document 

how do we tie these input fields to the data ?
the answer to that question is with directives vue perrin's directives for linking the data inside the input fields to the data inside your vue instance.
The value that gets evaluated from the expression is what will be used as the value for the input field. because of using v-model we will keep track of changes to the input field.if a change occurs, it'll update the data in our application. The data it updates depends on the value we use for the directive.

In some cases, you may want to have dynamic attributes, I'm not talking about directives, but actual HTML attributes with dynamic values
Luckily, you don't have to memorize 20 different directives for every attribute there is.
Before the ref attribute, we're going to add a directive called v-bind:href or a short hand :href  attribute to have a dynamic value. You can apply this to any attribute by adding it before the attribute

The Colon will act as a separator between the directive and attribute by adding the vines directive to an attribute, you will process the value as an expression.

he will talk about some security issues that may arise from doing this. The security risk I'm talking about is called cross site scriptiong(XSS), 
It occurs when malicious or harmful HTML is injected into the web page, causing unintended behaviour in the application. This usually happens when you output HTML from an external data source.

Your data will most likely come from an external source such as a database or API

if those sources are compromised, your application will most likely face issues to. Before we go any deeper into this topic, let's learn how to output raw HTML, previously we inserted alink into the template with Namiki URL. Let's recreate this.
If you're developing on the back end, make sure you're sanitizing and escaping any HTML that goes in and out, our dury as front end developers is to escape characters. View helps us with that. secondly, make sure you trust the source of your data.

<h1>Listening to Events</h1>
we can liten for events by using directives inside the app js file. Let's create a new data property called Age.
The name of the event it will listen to needs to be added after the directive like the v bind directive, we must add a colon followed by the name of the event.

@click listen for events with this shorthand method for the rest of this course, we'll be using the shorthand

V-model directive is a combination of binding and using events in vue
the difference being is that we can do more during the process if we need such control

<input type="text" id="first-name" v-model="firstName">
<button type="button" @click="age--">Decrement</button>

otherwise, these two do the exact same thing.
he recommend using the v-model directive whenever possible because it means writing less code.

Event modifiers can be used by used by adding a dot after the event name this dot is followed by the modifier this dot is followed by the modifier you'd like to use. I want to stop the default behavior of the event vue comes with an event modifier called prevent.
