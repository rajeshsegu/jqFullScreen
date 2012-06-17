jqFullScreen
============

jQuery plugin for HTML5 FullScreen API

Most browsers/os have the ability to enter a fullscreen or kiosk mode for a while now. Basically the chrome UI vanishes 
and the content is alone takes up the entire real-estate of the displayed screen. Going a step further to control the 
content displayed in the full-screen programatically becomes very powerful. Thanks for W3C to comeup with FullScreen API 
specification and Chrome/Firefox to adopt them quickly.

W3C FullScreen API proposal: http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html

In short, jqFullScreen provides an easy way for web content to be presented using the user's entire screen. Anyone, 
using jQuery should be able to just include this in thier page and it should work.

Usage:
=====

/****** Convenient Methods *******/



$("#div-for-fullscreen").enterFullScreen();   
-----
// Make div-for-fullscreen htmlEl enter into full-screen mode


$().exitFullScreen();       
------
//document exits full-screen mode


$("#div-for-fullscreen").onFullScreenChange(handler)  
----
//Fire on full-screen mode change



/****** Static Helper Methods *******/

$.FullScreen.isSupported()  
-----
//Checks if the browser supports FullScreen API


$.FullScreen.enter(htmlEl)  
----
//Lets htmlEl to enter full-screen


$.FullScreen.exit()     
------
//document exits full-screen mode


$.FullScreen.isEnabled()
-----
//Figures out if the browser is in a state that would allow full-screen

$.FullScreen.isActive()     
-----
//True, if document is currently is full-screen mode

$.FullScreen.getActiveElement()  
-----
//Returns the element thats currently in full-screen mode

$.FullScreen.onChange(htmlEl, handler)   
-----
//Fires handler when htmlEl enter/exit full-screen mode

Browser Support: Safari 5.1+, Firefox 10+, Chrome 15+
===============




