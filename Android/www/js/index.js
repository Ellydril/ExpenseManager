/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        var btn_connect = document.querySelector('#btn_connect');
        btn_connect.addEventListener('click', function(evt) {
            var login = document.querySelector('#login').value.toLowerCase();
            var passwd = document.querySelector('#passwd').value.toLowerCase();
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://192.168.15.114/API/users/checkLog");
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send("username=" + login + "&password=" + passwd);
            xhr.onreadystatechange = function () {
                var DONE = 4; // readyState 4 means the request is done.
                var OK = 200; // status 200 is a successful return.
                if (xhr.readyState === DONE) {
                    var result = xhr.responseText;
                    var json = JSON.parse(result);
                    if (json.err){
                        alert("Login ou mot de passe incorrect")
                    } else {
                        window.location = "home.html";
                    }
                }
            }
        });

    }
};

app.initialize();

