
var app = {
    output: {
        _el: null,
        showObject: function(obj){
            var str = '';
            
            for(var i in obj){
                str += i + ': ' + obj[i] + '<br>';
            }
            
            this._el.innerHTML += str + '<br>------------------<br>';
        }
    },
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.output._el = document.getElementById('output');
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('outputWindowButton').addEventListener('click', this.outputWindow, false);
        document.getElementById('deviceInfoButton').addEventListener('click', this.plugins.deviceInfo, false);
        document.getElementById('vibrateButton').addEventListener('click', this.plugins.vibrate, false);
        document.getElementById('showNetworkInfoButton').addEventListener('click', this.plugins.showNetworkInfo, false);
        
        document.getElementById('saveToLocalStorageButton').addEventListener('click', this.filetest.saveToLocalStorage, false);
        document.getElementById('loadFromLocalStorageButton').addEventListener('click', this.filetest.loadFromLocalStorage, false);
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    outputWindow: function(){
            console.log(window);
            app.output.showObject(window);
    },
    plugins:{
        deviceInfo: function(){
            console.log(device);
            app.output.showObject(device);
        },
        vibrate: function(){
            console.log(navigator);
            app.output.showObject(navigator);
            navigator.vibrate(1000);
        },
        showNetworkInfo: function(){
            console.log(navigator.network);
            app.output.showObject(navigator.network);
            app.output.showObject(navigator.network.connection);
        }
    },
    filetest:{
        saveToLocalStorage: function(){
            var textArea = document.getElementById('saveToLocalStorageTextarea');
            
            window.localStorage.setItem('storedByFileTest', textArea.value);
            
        },
        loadFromLocalStorage: function(){
            var textArea = document.getElementById('saveToLocalStorageTextarea');
            
            textArea.value = localStorage.getItem('storedByFileTest');
            
        }
    }
};
