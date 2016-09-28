# ASP.NET + ReactJS workshop

Code for the ASP.NET + ReactJS workshop. It contains the following exercises:


### Exercise 1: Hello React!

In this exercise, you start with a `Hello World` like applicationa and you end up with a fully functional React application with code separated into components and on-the-fly ES6 code compilation using Babel.

In the next exercise you will learn how to create a component to add new comments and also how to retrieve the data from the server.

* You cannot add new comments.
* The data is hardcoded in the client.
* The JS and CSS files are defined one by one in the Index/Layout page.

### Exercise 2: Server-side communication

In this exercise, you build the server-side code to manage the list of comments using the `IRepository` pattern. Then, you will update the client to perform polling operations to retrieve the data periodically. Finally, you will implement the logic to add new comments, using a new component in the Client and exposing a new endpoint in the backend.

However, you'll notice that this app has the following pending challenges:

* The comments are requested AFTER React is initialized, causing a significant delay.
* The JS and CSS files are defined one by one in the Index/Layout page.
* The data is not being saved in the client.

You can learn how to fix those items in the next section: Optimization.

### Optimizations

This repository also includes the following optimizations:

* Server-side rendering
* Webpack