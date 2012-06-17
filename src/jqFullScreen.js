// jQuery Plugin for HTML5 FullScreen API
// version 1.0, June 17th, 2012
// by Rajesh Segu
;(function( $, window ) {
	
	//Cache, to let minification work better
    var document = window.document;
	
	//FullScreen API atomic methods 
    $.FullScreen = {

        /*
         * Note:
         *  1. The z-index property has no effect in the top layer.
         *  2. It is rendered as an atomic unit as if it were a sibling of the root element.
         *  3. It is not rendered if it, or an ancestor, has the display property set to none.
         */


        /**
         * This method tells if your browser supports full-screen functionality.
         * Note: Checking if the cancel method available is a good test for browser support.
         *
         * @return {Boolean}
         */
        isSuppoted: function(){
            return document.cancelFullScreen
                || document.mozCancelFullScreen
                || document.webkitCancelFullScreen;
        },

        /**
         * The requestFullScreen method on HTML Element
         * requests full screen mode for the given element.
         */
        enter: function(el) {
            if (el.requestFullScreen) {  //W3C Proposal
                el.requestFullScreen();
            } else if (el.mozRequestFullScreen) {  //Firefox
                el.mozRequestFullScreen();
            } else if (el.webkitRequestFullScreen) { //Chrome & Safari
                el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        },

        /**
         * The cancelFullScreen method cancels full screen mode for the given document.
         */
        exit: function(){
            if(document.exitFullScreen){            //W3C Proposal
                document.exitFullScreen();
            }else if(document.cancelFullScreen){   //Mozilla Proposal
                document.cancelFullScreen();
            }else if(document.mozCancelFullScreen){  //Firefox
                document.mozCancelFullScreen();
            }else if(document.webkitCancelFullScreen){  //Chrome & Safari
                document.webkitCancelFullScreen();
            }
        },

        /**
         * The fullScreenEnabled attribute tells you whether or not the document is currently
         * in a state that would allow full-screen mode to be requested.
         *
         * @return {Boolean}
         */
        isEnabled: function(){
            return document.fullScreenEnabled        //W3C Proposal
                || document.mozFullScreenEnabled     //Firefox
                || document.webkitFullScreenEnabled; //WebKit
        },

        /**
         * The fullScreen attribute tells you if the document is currently
         * displaying an element in full-screen mode.
         * Note: No w3c proposal yet.
         * @return {Boolean}
         */
        isActive: function(){
            return document.fullScreen            //Mozilla Proposal
                || document.mozFullScreen        //Firefox
                || document.webkitIsFullScreen; //WebKit
        },

        /**
         * The fullScreenElement attribute tells you the element that's currently
         * being displayed full-screen.
         *
         * @return {HTMLDomElement}
         */
        getActiveElement: function(){
            return document.fullScreenElement        //W3Proposal
                || document.mozFullScreenElement     //Firefox
                || document.webkitFullScreenElement; //Webkit

        },

        /**
         * Attach callback on fullscreeneventchange event on the given HTML Dom Element.
         * Note: unlike Webkit and the W3C proposal,
         * Mozilla fires its mozfullscreenchange event on the *document* object
         * instead of the element going fullscreen
         * TODO: Fix onChange for Firefox
         */
        onChange: function(el, callback){
            var fullScreen = this;
            el.addEventListener('fullscreeneventchange', function(e) {
                if(callback instanceof Function){
                    //pass el and isActive flag to handle UI changes.
                    callback(el, fullScreen.isActive());
                }
            }, true);
        }

        
    };
	
   /**
    * enterFullScreen on an element would make element appear in full screen.
    * Note: Only one element can be made full-screen at a given time, consider this a convenience method.
    * 
    */	
    $.fn.enterFullScreen = function(){
        this.each(function(){
            var el = $(this)[0];
            $.FullScreen.enter(el);
        });
    };
    
   /**
    * exitFullScreen would make the document exit full-screen mode. 
    */
    $.fn.exitFullScreen = function(){
        $.FullScreen.exit();
    };
   
   /**
    * onFullScreenChange is a helper method that would fire when an element enter and exit full-screen mode. 
    */
    $.fn.onFullScreenChange = function(handler){
        this.each(function(){
            var el = $(this)[0];
            $.FullScreen.onChange(el, handler);
        });
    };


})( jQuery, window );