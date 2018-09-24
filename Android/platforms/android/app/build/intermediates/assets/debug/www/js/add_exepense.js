var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Cordova camera object : ', navigator.camera);
        var btn_photo = document.querySelector('#btn_photo');
        btn_photo.addEventListener('click', function (evt) {
            navigator.camera.getPicture(
                //onSuccessCallback
                function(imgData) {
                    console.log('Image URL : ' + imgData);

                    // afficher l'image sur l'écran de l'appluication :
                    var image = document.getElementById('img_picture');
                    image.src =  "data:image/jpeg;base64," + imgData;  //data:image/jpeg;base64," +

                    // stocker l'image sous la forme d'une URL Base64 dans le LocalStorage.
                    localStorage.setItem('img_data', "data:image/jpeg;base64," + imgData);
                    // il est aussi possible d'evoyer l"image par le réseau sur un serveur
                    // pour la stocker dans une base de données côté serveur.
                },
                //onErrorCallback
                function (errorMsg) {
                    console.log('error when taken picture : ' + errorMsg);
                },
                // options
                { destinationType: Camera.DestinationType.DATA_URL }
            ); // fin de getPicture(...)
        });
        console.log('Received Event: ' + id);
    }
};

app.initialize();