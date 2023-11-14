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

The browser will continue to convert the type to a string we can convert the 
type back to a number by using a modifier. The v-model directive can use three modifiers
one of them is called number
v-model.number : will perform a type conversion, the value will be converted to anumber type
This behavior can prevent unexpected issues when trying perform calculations
v-model also has two modifiers lazy and trim 
v-model.trim : will remove excessive white space from a value. It's equivalent of calling the trim function on a string.
v-model : will change when the data property is updated. Normally, the data property in our application is updated on every key press The lazy modifier will delay the change until the vistor has finished typing in the input and moves away from it. It can be usefull if you want to perform less updates on the document   

compute simply it means to calculate something this can be any sort of calculation from basic math to concatenating strings to form a full word phrase or sentence.
vue treats your computed properties as data. vue will cach the values of computed properties.

Let's discuss when a data property is updated 
    -It'll scan the function of the computed property
    -It'll check what data properties you're using inside the function 
    -If any of those values change, vue will rerun the function and update the value
    -If a data property was updated that wasn't used inside the function 
    -you will not bother updating the value  
computed property : is acompination of method and data 
the data property is used to store single values it can store object and arrays as well it's not the kind of object where you would store function 
if you want to store functions you would use the methods property.
ify you have function that calculates avalue , you would use a computed property.

with method you allowed to calculate values we can use them in expressions if we want to however you would lose out the 
performance game that computed properties provide methods, provide a lot of flexibility you can make request update elements, etc. with computed properties they serve one purpose or at least they should, and that is to calculate a value unlike methods, you are always expected to return a value you're free to take other actions, but you must always return a value this is because the value is what's stored in vue

computed properties can never be asynchronous, or at least they shouldn't be You expect the value to be returned from the 
computed properties function However, watchers don't bear that responsibility. you have the freedom to perform asynchronous tasks
</hr>
<h2>prespective task </h2>
    The first thing we'll do is create a vue instance. 
    We need to tell vue what element in the document it will amount itself to. 
    We'll call the vue create app function .
    We'll pass in an empty configuration object will add some properties after mounting the application, after calling this function will change the mount's method
    The Mount method requires we pass in a selector for the element we want to mount the application 
    
    Note
        the navigator object is defined by the browser it'll contain various pieces of the information about the user's browser 
<h2>Vue Lifecycle </h2>
    It may begin The instance has to be created that's done using vue create app function 
    this function is where you pass in your settings and data for vue to work with , During this process you will begin the life cycle
    Vue will create areas within itself where we can inject code and do what ever we want
    The very first thing Vue does is add reactivity to your data this process is where it being to watch your data for any changes
    Before that happens, you have the opportunity to run some code 
    The first life cycle hook that occurs is the before create hook, At this point the vue instance hasn't been fully created   
    this means you won't have access to your data or any of its methods
    Once everything has been initialized, the vue instance is ready we are provided another lifecycle hook, which is the created hook 
    unlike before, we can access the data and method inside the vue instance 
    However, vue is not mounted to any template, nor will anything be rendered onto the page
    After the vue instance is created, it'll start looking for a template
    This part of the lifecycle starts the moment we call the mount method on the application vue will scan the template code and begin processing it This process is what called compiling.
    This is where you will scan for Directive's Expression's events and bindings inside the template 
    One the template is compiled, Vue will replace the content inside the element we selected with the mount method, with the compiled template.
    Before that happens, you have the opportunity to hook into the before mount life cycle Hook.
    Once mounting is completed, you can hook into the mountain lif cycle hook.
    At this point, view has inserted itself into the document we'll be able to see the rendered template on the document. All expressions, directives and bindings have been processed after the mountain phase is completed, your application will watch the data for any changes. This usually happens during events such as mouse clicks or inputs.
    Any time the data has been updated, we will then update the template and the cycle just repeats 
    we are provided to hooks during this process The first hook is the before update hook.
    This gets triggered agter the data has been updated but has not been applied to the template.
    The next hook is the updated hook this hook runs once the template is patched with the updated data 
    <img src="tasks/img/vue_life_cycle .jpg">

    we have the ability to destroy the vue instance this means that any reactivity, events, directives or bindings will be disabled and gone by calling method unmount

    vue cli 
    npm install -g @vue/cli
    vue create single-quote
    cd single-quote
