An angular module wrapper service for the Foxandxss angular-toasts


Install
=======
```
bower install lf-angular-toastr
```

USAGE
=====
Include the following resources in your html file:

```html
    <link rel="stylesheet" href="bower_components/angular-toastr/dist/angular-toastr.css">
    <script src="bower_components/angular-animate/angular-animate.js"></script>
    <script src="bower_components/angular-toastr/dist/angular-toastr.tpls.js"></script>
    <script src="bower_components/lf-angular-toastr/lf-angular-toastr.js"></script>
```

Add also to your Angular controller like below:

```javascript
    var myApp = angular.module('myApp', ['lf-toastr']);
    myApp.controller('MyController', ['lfToastrService', function(lfToastrService) {

        //call methods here as per API below

    });
```

API
===
Below are the available methods and examples on how to use them
<ol>
    <li><b>thereAreOpenedToasts</b> returns true if there are toasts, returns false otherwise
        <ul><li>Example: ```javascript if (lfToastrService.thereAreOpenedToasts() { ... do something ... }```</li></ul>
    </li>
    <li><b>clearToasts</b> removes all opened toasts
        <ul><li>Example: ```javascript lfToastrService.clearToasts();```</li></ul>
    </li>
    <li><b>toastIsOpened</b> returns true if a toast is opened, returns false otherwise
        <ul><li>Example: ```javascript if (lfToastrService.toastIsOpened() { ... do something ... }```</li></ul>
    </li>
    <li><b>openToast</b> opens a toast, given a message string, a title string, and an optional config object
        <ul><li>Example: ```javascript lfToastrService.openToast('I love toasts', 'TOAST ME', {type: 'success'});```</li></ul>
    </li>
    <li><b>clearToast</b> removes a toast, given a message string
        <ul><li>Example: ```javascript lfToastrService.removeToast('I love toasts');```</li></ul>
    </li>
</ol>

The default configuration used by lf-angular-toastr is shown below:

```javascript
    toastDefaultOptions = {
        positionClass: 'toast-bottom-right',
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        type: 'error'
    };
```

This configuration can be modified by the optional config object passed into the method <b>openToast()</b>.

DOCUMENTATION
=============
Find more information on all the possible configuration options and usage examples here:
<a href="https://github.com/Foxandxss/angular-toastr">Foxandxss angular-toasts</a>
