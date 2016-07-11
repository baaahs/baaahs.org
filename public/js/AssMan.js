function AssMan(container) {
    this.container = container;
}

AssMan.prototype.viewAndTag = function(tag) {
    this.getAsset(tag, {
        success: function(asset) {
            this.container.innerHTML = '<p>Tag: <span id="asset-name"></p>';
            var name = document.getElementById('asset-name');
            name.innerText = "Asset " + asset.name;
        }.bind(this),
        failure: function(response) {
            alert(response);
        }.bind(this)
    });
};

AssMan.prototype.doHttp = function(method, url, values, callbacks) {
    var http = new XMLHttpRequest();
    http.open(method, url, true);
    http.setRequestHeader("Accept", "application/json");
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function () { // Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            callbacks.success(JSON.parse(http.responseText));
        }
    };

    http.send(JSON.stringify(values));
};

AssMan.prototype.getAsset = function(tag, callbacks) {
    this.doHttp("GET", "/assman/assets/" + tag, null, callbacks);
};

AssMan.prototype.updateAsset = function(asset, values, callbacks) {
    this.doHttp("POST", "/assman/assets/" + asset.tag, values, callbacks);
};

AssMan.prototype.createScan = function(asset, values, callbacks) {
    this.doHttp("PUT", "/assman/assets/" + asset.tag + "/scans", values, callbacks);
};

// document.getElementById("name").addEventListener("change", function (e) {
//     updateAsset(asset, {name: e.target.value});
// });

AssMan.prototype.locationScan = function(asset) {
    navigator.geolocation.getCurrentPosition(function (result) {
        console.log(result);
        var coords = result.coords;
        createScan(asset, {
            scan: {
                latitude: coords.latitude,
                longitude: coords.longitude,
                accuracy: coords.accuracy,
                altitude: coords.altitude,
                altitudeAccuracy: coords.altitudeAccuracy
            }
        });
    })
};