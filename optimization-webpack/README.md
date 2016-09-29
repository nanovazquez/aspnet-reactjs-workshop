## Optimization: Webpack

This sample code focuses on how this sample ReactMessenger app can be improved by using [webpack](http://webpack.github.io/docs/what-is-webpack.html) for module bundling.

> **Note:** to run the sample you need to run `npm install` in the **ReactMessenger** folder that contains the **package.json** file. Or you can simply open Visual Studio which will do that for you.

These are the main changes we did:

* We bundled all the JS file by just calling `webpack` in the console. The configuration is defined in the **webpack.config.js** file.
* We also included the CSS files inside the bundle, telling webpack that it should load the CSS when loading the `<CommentBox/>` component.
* We removed all the references to the static files in the **Layout** and **Index** page.

Also, notice that there are yet more improvements to do, like:

* Break down the **comments.css* into components, and use [CSS Modules](https://github.com/css-modules/css-modules) for local and global scoping.
* Add the ability to regenerate the bundle after building the code (POST Build task).
* Add the ability to regenerate the bundle **while coding** ([hot module replacement](https://github.com/nanovazquez/aspnet-reactjs-workshop), or live reloading).
* Separate vendor code from our code in different bundles ([code splitting](https://webpack.github.io/docs/code-splitting.html)).
* Separate *dev* bundling and *prod* bundling (that could include [optimizations](https://webpack.github.io/docs/optimization.html) like minification).
* And many more! (see [here](https://webpack.github.io/docs/)).
