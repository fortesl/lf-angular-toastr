An angular module wrapper service for the Foxandxss angular-toasts
==================================================================


Install
=======
bower install lf-angular-toastr


USAGE
=====
<code>
var myApp = angular.module('myApp', ['lf-toastr']);<br>
myApp.controller('MyController', ['lfToastrService', function(lfToastrService) {<br>
&nbsp;&nbsp;&nbsp;    //call methods here as per API below<br><br>
});
</code>

API
===
<ol>
    <li><b>thereAreOpenedToasts</b> returns true if there are toasts, returns false otherwise
        <ul><li>Example: <code>if (lfToastrService.thereAreOpenedToasts() { ... do something ... }</code></li></ul>
    </li>
    <li><b>clearToasts</b> removes all opened toasts
        <ul><li>Example: <code>lfToastrService.clearToasts();</code></li></ul>
    </li>
    <li><b>toastIsOpened</b> returns true if a toast is opened, returns false otherwise
        <ul><li>Example: <code>if (lfToastrService.toastIsOpened() { ... do something ... }</code></li></ul>
    </li>
    <li><b>openToast</b> opens a toast, given a message string, a title string, and an optional config object
        <ul><li>Example: <code>lfToastrService.openToast('I love toasts', 'TOAST ME', {type: 'success'});</code></li></ul>
    </li>
    <li><b>clearToast</b> removes a toast, given a message string
        <ul><li>Example: <code>lfToastrService.removeToast('I love toasts');</code></li></ul>
    </li>
</ol>


DOCUMENTATION
=============
Find info on angular-toastr here:
<a href="https://github.com/Foxandxss/angular-toastr">Foxandxss angular-toasts</a>