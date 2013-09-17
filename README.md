Backbone Hands On Tutorial
--------

This project serves as the material on learning how to develop a backbone application, or understand how backbone works. 

You can follow the instructions below or you can start poking around yourself. 

****Disclaimer**** This project is for education purpose, please do not use this code for production use.


###Structure
The below structure is just how this project setup, doesn't have to be like this. You can setup whatever ways you like when you create your future project.

- www/template/ **--> template fragment**
- www/js/
    - main.js  **--> entry point**
    - app/     **--> your application**        
        - models/ **--> your Model code**
        - routers/ **--> your Router code**
        - views/ **-->your view code**
       

###Treasure Hunt
Let's do the following task to get familiar yourself first.

- go to main.js and look at how this project is setup and how requireJS works.
- go to routers/ and add more routes and see how Backbone behaves when routes changes.
- go to models/ and create model and collection, you can look at the example and try to understand the relationship between both.
- go to views/  create a view class and how you can represents your model data into view.


###Build Tool
This build tool will minimize and optimize your static assets.  You need Node install in order to run this build tool. 

Just go to build-tool folder and run
>node r.js -o app.build.js


- build-tool/
    - app.build.js
    - r.js
