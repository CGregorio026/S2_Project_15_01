"use strict";
//stricco mode
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Christian Gregorio
    Date:   4.19.19  
   
   Filename: mpl_links.js

*/

// this is an event listener, which, upon loading the page, will run the anonymous function.
window.addEventListener("load", function () {
    // declares the allSelect variable as every select inside of the govLinks form.
    var allSelect = document.forms.govLinks;
    // loops through the allSelect array, and runs an event listener to see when changes in the form are made.
    for (var i = 0; i < allSelect.length; i++) {
        // upon detecting a change, an anonymous function is ran to have the href of the location set to the value of the event object which caused the change.
        allSelect[i].onchange = function (e) {
            document.location.href = e.target.value;
        };
    };
});