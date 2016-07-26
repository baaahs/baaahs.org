function AssMan(container) {
    this.container = container;
    this.userNameView = document.getElementById("user-name");
    this.mainAlertView = document.getElementById("alert");
    document.getElementById("user-not-me").addEventListener("click", function () {
        this.logIn();
    }.bind(this));

    var userCookie = Cookies.get("user");
    if (userCookie) {
        this.logInAs_(userCookie);
    } else {
        this.logIn();
    }
}

AssMan.prototype.logIn = function () {
    this.getUsers({
        success: function (users) {
            var alert = this.showAlert();
            var ul = document.createElement("ul");
            alert.appendChild(ul);

            users.forEach(function (user) {
                var li = document.createElement("li");
                ul.appendChild(li);
                var a = document.createElement("a");
                li.appendChild(a);
                a.innerText = user.name;
                a.addEventListener("click", function () {
                    this.logInAs_(user);
                    this.hideAlert();
                }.bind(this));
            }.bind(this));

            var li = document.createElement("li");
            ul.appendChild(li);
            var input = document.createElement("input");
            li.appendChild(input);
            input.addEventListener("change", function () {
                this.createUser({name: input.value}, {
                    success: function (user) {
                        this.logInAs_(user);
                        this.hideAlert();
                    }.bind(this)
                })
            }.bind(this));
        }.bind(this),
        failure: function (result) {
            console.log(result);
        }.bind(this)
    });
};

AssMan.prototype.logInAs_ = function (user) {
    this.user = user;
    console.log("user:", this.user);
    this.userNameView.innerText = this.user.name;

    Cookies.set("user", user);
};

AssMan.prototype.showAlert = function () {
    this.hideAlert();
    this.mainAlertView.classList.remove("hidden");
    return this.mainAlertView;
};

AssMan.prototype.hideAlert = function () {
    this.mainAlertView.innerHTML = "";
    this.mainAlertView.classList.add("hidden");
    return this.mainAlertView;
};

AssMan.prototype.viewAndTag = function (tag) {
    if (!this.user) {
        this.logIn();
        return;
    }

    this.getAsset(tag, {
        success: function (asset) {
            this.container.innerHTML = '<p>Tag: <span id="asset-name"></p>' +
                '<p>Scans: <div id="asset-scans"</div></p>';
            var nameSpan = document.getElementById('asset-name');
            nameSpan.innerText = asset.name == null ? "" : asset.name;

            var scansDiv = document.getElementById('asset-scans');

            HtmlUtils.makeEditable(nameSpan, function (newValue) {
                var spinner = HtmlUtils.el('img', ['saving-spinner']);
                spinner.setAttribute('src', 'http://loadingapng.com/templates/8/preview.gif');
                nameSpan.parentNode.insertBefore(spinner, nameSpan.nextSibling);

                this.updateAsset(asset, {name: newValue}, {
                    success: function () {
                        nameSpan.parentNode.removeChild(spinner);

                    }, failure: function () {
                        nameSpan.parentNode.removeChild(spinner);
                    }
                });
            }.bind(this));

            this.locationScan(asset);

            this.getScans(tag, {
                success: function (scans) {
                    console.log("scans", scans);
                    var table = document.createElement('table');
                    var tr = document.createElement('tr');
                    tr.innerHTML = '<th>Date</th><th>Latitude</th><th>Longitude</th>';
                    table.appendChild(tr);

                    scans.forEach(function (row) {
                        tr = document.createElement('tr');
                        var td = document.createElement('td');
                        tr.appendChild(HtmlUtils.el('td', [], row.created_at));
                        tr.appendChild(HtmlUtils.el('td', [], row.latitude));
                        tr.appendChild(HtmlUtils.el('td', [], row.longitude));
                        table.appendChild(tr);
                    }.bind(this));
                    scansDiv.innerText = '';
                    scansDiv.appendChild(table);
                }.bind(this)
            });
        }.bind(this),
        failure: function (response) {
            alert(response);
        }.bind(this)
    });
};

AssMan.prototype.doHttp_ = function (method, url, values, callbacks) {
    var http = new XMLHttpRequest();
    http.open(method, url, true);
    http.setRequestHeader("Accept", "application/json");
    http.setRequestHeader("Content-type", "application/json");
    if (this.user) {
        http.setRequestHeader("Authorization", "Basic " + btoa(this.user.name + ":pass"));
    }

    http.onreadystatechange = function () { // Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            console.log('response:', http.responseText);
            if (callbacks && callbacks.success) {
                callbacks.success(
                    http.responseText ? JSON.parse(http.responseText) : null);
            } else {
                console.log("No success callback for " + method + " " + url);
            }
        } else if (http.readyState == 4) {
            if (callbacks && callbacks.failure) {
                callbacks.failure(http);
            } else {
                console.log("No failure callback for " + method + " " + url);
            }
        }
    };

    http.send(JSON.stringify(values));
};

AssMan.prototype.getAsset = function (tag, callbacks) {
    this.doHttp_("GET", "/assman/assets/" + tag, null, callbacks);
};

AssMan.prototype.updateAsset = function (asset, values, callbacks) {
    this.doHttp_("POST", "/assman/assets/" + asset.tag, values, callbacks);
};

AssMan.prototype.createScan = function (asset, values, callbacks) {
    this.doHttp_("PUT", "/assman/assets/" + asset.tag + "/scans", values, callbacks);
};

AssMan.prototype.getScans = function (tag, callbacks) {
    this.doHttp_("GET", "/assman/assets/" + tag + "/scans", null, callbacks);
};

AssMan.prototype.getUsers = function (callbacks) {
    this.doHttp_("GET", "/assman/users", null, callbacks);
};

AssMan.prototype.createUser = function (info, callbacks) {
    this.doHttp_("PUT", "/assman/users", info, callbacks);
};

// document.getElementById("name").addEventListener("change", function (e) {
//     updateAsset(asset, {name: e.target.value});
// });

AssMan.prototype.locationScan = function (asset) {
    navigator.geolocation.getCurrentPosition(function (result) {
        console.log(result);
        var coords = result.coords;
        this.createScan(asset, {
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            altitude: coords.altitude,
            altitudeAccuracy: coords.altitudeAccuracy
        });
    }.bind(this));
};

function HtmlUtils() {
}

HtmlUtils.makeEditable = function (span, callback) {
    var parentNode = span.parentNode;
    span.addEventListener('click', function (e) {
        var editing = true;
        var input = document.createElement('input');
        var origText = span.innerText;
        input.setAttribute('type', 'text');
        input.value = origText;
        parentNode.replaceChild(input, span);

        var doChange = function (e) {
            if (!editing) return;

            editing = false;
            span.innerText = input.value;
            parentNode.replaceChild(span, input);

            if (input.value != origText) {
                callback(input.value);
            }
        };

        input.addEventListener('change', doChange);
        input.addEventListener('blur', doChange);
        input.focus();
    });
};

HtmlUtils.el = function (tagName, classes, innerText) {
    var el = document.createElement(tagName);
    if (classes) {
        for (var i = 0; i < classes.length; i++) {
            el.classList.add(classes[i]);
        }
    }

    if (innerText) el.innerText = innerText;

    return el;
};

Cookies = {};

Cookies.set = function (name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = encodeURIComponent(name) + "="
        + encodeURIComponent(JSON.stringify(value))
        + expires + "; path=/";
};

Cookies.get = function (name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            var value = decodeURIComponent(c.substring(nameEQ.length, c.length));
            return value && value.length > 0 ? JSON.parse(value) : null;
        }
    }
    return null;
};

Cookies.remove = function (name) {
    Cookies.set(name, "", -1);
};