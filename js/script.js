/* 
 Document   : script
 Author     : Keane
 Description: Base scripts for GitHub.io page
 */

$(document).ready(function() {
  /** Customer Form Disable - Remove this code when form is up and running **/
  $("#customer-submit").click(function(e) {
    e.preventDefault();
    console.log("Enter");
    alert("Hey thanks for your interest!\n\
\n\
This feature is currently disabled until the page is complete.\n\
Feel free to message me on GitHub until then. :)");
  });
});