# Webpack
Diving into Webpack

webpack is a static module bundler. It creates a dependency graph of all the modules that your project needs and creates bundles for it.

After version 4.0.0, you don't need to config file to bundle your project until you need a specific config which better suits your project.

# Why Webpack?
To understand this, think how we are using the javscript on web before bundler. 
Two methods
1. inlcude js with script tag and on loading too many scripts can cause network bottleneck.
2. having a large one large js file makes it difficult to read, maintain and increase its size.

That's why webpack exist . Its a tool that bundles your js applications with multiple different assets support.It cares about performance and load times. 
 
CORE CONCEPT
1. Entry
2. Output
3. Loaders
4. Plugins
5. Mode
6. Browser Compatibility

# Entry 
entry points indicates which module webpack should use to start the bundling and buiding the dependency graph. By deafult it is src/index.js. 
you can change it by configuring the entry property in the config file.

# Output
it points to the place where the webpack emit its bundles and how to name them. By default  its in the "dist/main.js" for the main output file.
you can change by using output.path and output.filename property in the config file of webpack

# Loaders
webpack understand only js and json files and only bundles them but if you want to make those files understandle by webpack then Loaders will help you to do the things for you.
Loader uses its two Property in your webpack 
1. test :-  which takes the file which should be transformed
2. use :- it indicates which loader is used to do the transforming.

Note:- This tell compiler whenever you come across path with file mentioned in the "test" then use the loader mentioned with the following file to tranform it.

# Plugins
plugins are used to do a wide range of task like optimization , asset management and injection of environment varibles.
you just use the require function to import it and mentioned in the plugins array and dont forget to make a new instance of it.

# Mode
you can specify the  mode you would like to work in.	

#Entry 
#Single Entries and Multi Entries 
Need  of multi-entries required when you are working in the multi page application . So now you don't need to fetch all the irrevalent files every time when you fetch the content. For every page you have a separate chunk according to the entries.
