## Optimization: Server-side rendering

This sample code focuses on how this sample ReactMessenger app can be improved by supporting server-side rendering. In this case, we are using [ReactJS.NET](https://reactjs.net/) logic to activate this feature in the app.

These are the main changes we did:

* We updated the initialization of ReactJS.NET to load all the relevant JavaScript files server-side: the components we want to load and their dependencies.
* We updated the **HomeController** class to retrieve the comments when the **Index** page is requested.
* We updated the initalization of the client-side code in the **Index** page.

Also, notice that there are yet more improvements to do, like:

* Use precompiled files instead of ReactJS.NET transpilation on-the-fly
* Activate _server-side only_ rendering if you just want to use the server side rendering but without the React specific data attributes.