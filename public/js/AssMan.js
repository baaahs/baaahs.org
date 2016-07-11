function AssMan(container) {
    this.container = container;
}

AssMan.prototype.viewAndTag = function(tag) {
    this.getAsset(tag, {
        success: function(asset) {
            this.container.innerHTML = '<p>Tag: <span id="asset-name"></p>' +
                '<p>Scans: <div id="asset-scans"</div></p>';
            var nameSpan = document.getElementById('asset-name');
            nameSpan.innerText = asset.name == null ? "" : asset.name;

            var scansDiv = document.getElementById('asset-scans');

            this.makeEditable_(nameSpan, function(newValue) {
                this.updateAsset(asset, {name: newValue});
            }.bind(this));

            this.locationScan(asset);

            this.getScans(tag, {
                success: function(scans) {
                    console.log("scans", scans);
                    scansDiv.innerText = JSON.stringify(scans);
                }
            });
        }.bind(this),
        failure: function(response) {
            alert(response);
        }.bind(this)
    });
};

AssMan.prototype.doHttp_ = function(method, url, values, callbacks) {
    var http = new XMLHttpRequest();
    http.open(method, url, true);
    http.setRequestHeader("Accept", "application/json");
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function () { // Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            if (callbacks && callbacks.success) {
                callbacks.success(JSON.parse(http.responseText));
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

AssMan.prototype.getAsset = function(tag, callbacks) {
    this.doHttp_("GET", "/assman/assets/" + tag, null, callbacks);
};

AssMan.prototype.updateAsset = function(asset, values, callbacks) {
    this.doHttp_("POST", "/assman/assets/" + asset.tag, values, callbacks);
};

AssMan.prototype.createScan = function(asset, values, callbacks) {
    this.doHttp_("PUT", "/assman/assets/" + asset.tag + "/scans", values, callbacks);
};

AssMan.prototype.getScans = function(tag, callbacks) {
    this.doHttp_("GET", "/assman/assets/" + tag + "/scans", null, callbacks);
};

// document.getElementById("name").addEventListener("change", function (e) {
//     updateAsset(asset, {name: e.target.value});
// });

AssMan.prototype.locationScan = function(asset) {
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

AssMan.prototype.makeEditable_ = function(span, callback) {
    var parentNode = span.parentNode;
    span.addEventListener('click', function (e) {
        var input = document.createElement('input');
        var text = span.innerText;
        input.setAttribute('type', 'text');
        input.setAttribute('value', text);
        parentNode.replaceChild(input, span);
        input.addEventListener('change', function (e) {
            span.innerText = input.value;
            console.log('value:', input.value);
            parentNode.replaceChild(span, input);

            callback(input.value);
        });
        input.focus();
    });
};
