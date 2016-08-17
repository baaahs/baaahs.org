function AssMan(container, notScan) {
    this.container = container;

    this.mainAlertModalView = document.getElementById("alert-modal");
    this.mainAlertView = document.getElementById("alert");

    this.userNameView = document.getElementById("user-name");
    document.getElementById("user-not-me").addEventListener("click", function () {
        this.selectUser();
    }.bind(this));

    this.eventNameView = document.getElementById("event-name");
    document.getElementById("event-change").addEventListener("click", function () {
        this.selectEvent();
    }.bind(this));

    this.networkActivity = new CountedActivity(document.getElementById("network-activity"));
    this.locationActivity = new CountedActivity(document.getElementById("location-activity"));

    this.lastLocation = Cookies.get("lastLocation");
}

AssMan.prototype.checkRequirements = function () {
    var currentUser = Cookies.get("user");
    if (!currentUser) {
        this.selectUser();
    } else {
        this.setUser_(currentUser);

        var currentEvent = Cookies.get("event");
        if (!currentEvent) {
            this.selectEvent();
        } else {
            this.setEvent_(currentEvent);
        }
    }
};

AssMan.prototype.selectUser = function () {
    this.userNameView.innerText = "unknown person";
    this.getUsers({
        success: function (users) {
            var alert = this.showAlert();

            HtmlUtils.append(alert, "div", null, "Who are you?");

            var ul = HtmlUtils.append(alert, "ul");

            users.forEach(function (user) {
                var li = HtmlUtils.append(ul, "li");
                var a = HtmlUtils.append(li, "a", [], user.name);
                a.addEventListener("click", function () {
                    this.setUser_(user);
                    this.hideAlert();
                    this.checkRequirements();
                }.bind(this));
            }.bind(this));

            var li = HtmlUtils.append(ul, "li");
            var input = HtmlUtils.append(li, "input");
            input.addEventListener("change", function () {
                this.createUser({name: input.value}, {
                    success: function (user) {
                        this.setUser_(user);
                        this.hideAlert();
                    }.bind(this)
                })
            }.bind(this));
            HtmlUtils.append(li, "button", null, "Done");
        }.bind(this),
        failure: function (result) {
            console.log(result);
        }.bind(this)
    });
};

AssMan.prototype.setUser_ = function (user) {
    this.user = user;
    console.log("user:", this.user);
    this.userNameView.innerText = this.user.name;

    Cookies.set("user", user);
};

AssMan.prototype.selectEvent = function () {
    this.userNameView.innerText = "nobody";
    this.getEvents({
        success: function (events) {
            var alert = this.showAlert();

            HtmlUtils.append(alert, "div", null, "What are you doing?");

            var ul = HtmlUtils.append(alert, "ul");

            events.forEach(function (user) {
                var li = HtmlUtils.append(ul, "li");
                var a = HtmlUtils.append(li, "a", [], user.name);
                a.addEventListener("click", function () {
                    this.setEvent_(user);
                    this.hideAlert();
                }.bind(this));
            }.bind(this));

            var li = HtmlUtils.append(ul, "li");
            var input = HtmlUtils.append(li, "input");
            input.addEventListener("change", function () {
                this.createEvent({name: input.value}, {
                    success: function (event) {
                        this.setEvent_(event);
                        this.hideAlert();
                    }.bind(this)
                })
            }.bind(this));
            HtmlUtils.append(li, "button", null, "Done");
        }.bind(this),
        failure: function (result) {
            console.log(result);
        }.bind(this)
    });
};

AssMan.prototype.setEvent_ = function (event) {
    this.event = event;
    console.log("event:", this.event);
    this.eventNameView.innerText = this.event.name;

    Cookies.set("event", event);
};

AssMan.prototype.showAlert = function () {
    this.hideAlert();
    this.mainAlertModalView.classList.remove("hidden");
    this.mainAlertView.classList.remove("hidden");
    return this.mainAlertView;
};

AssMan.prototype.hideAlert = function () {
    this.mainAlertView.innerHTML = "";
    this.mainAlertModalView.classList.add("hidden");
    this.mainAlertView.classList.add("hidden");
    return this.mainAlertView;
};

AssMan.prototype.scanColumns_ = function (scan) {
    return [
        {text: prettyDate(new Date(Date.parse(scan.createdAt))), sort: scan.createdAt},
        {text: GeoUtils.distance(scan, this.lastLocation)},
        {text: scan.userName},
        {text: scan.eventName},
        {text: scan.intoContainer ? scan.intoContainer.name : ''},
    ];
};

AssMan.prototype.listAssets = function () {
    this.getAssets({
        success: function (assets) {
            this.container.innerHTML = '';

            var assetsTable = new HtmlUtils.Table(["Tag", "Name", "Last Seen", "Where", "By", "While", "In"]/*,
                function(columns, tr) {
                    var td = HtmlUtils.append(tr, 'td', [], columns[1].text);
                    td.setAttribute("colspan", "7");
                    HtmlUtils.append(td, 'pre', [],
                        "(" + columns[0].text + ") " +
                        " " + columns[2].text +
                        " by " + columns[4].text +
                        " While: " + columns[5].text +
                        " @ " + columns[3].text +
                        " In: " + columns[6].text
                    );
                    return tr;
                    // td.appendChild(document.createTextNode());
                }*/);
            this.container.appendChild(assetsTable.el);
            assetsTable.el.classList.add('assets');

            assets.forEach(function(asset) {
                var lastScan = asset.lastScan;
                var tr = assetsTable.addRow([
                    {text: asset.tag},
                    {text: asset.name},
                    {text: lastScan ? prettyDate(new Date(Date.parse(lastScan.createdAt))) : ''},
                    {text: GeoUtils.distance(lastScan, this.lastLocation)},
                    {text: lastScan ? lastScan.userName : ''},
                    {text: lastScan ? lastScan.eventName : ''},
                    {text: asset.container ? asset.container.name : ''},
                ]);
                tr.addEventListener('click', function() {
                    document.location = 'assets/' + asset.tag;
                }.bind(this));
            }.bind(this));
        }.bind(this)
    });
};

AssMan.prototype.viewAsset = function (tag, performScan) {
    this.checkRequirements();

    var loading = Cookies.get("loading");
    if (performScan) {
        if (loading && loading.tag == tag) {
            loading = null;
            Cookies.remove("loading");
        }
    }

    var scansTable = new HtmlUtils.Table(["Date", "Location", "By", "Event", "In"]);
    scansTable.el.classList.add('scans');

    this.getAsset(tag, {
        success: function (asset) {
            this.container.innerHTML = '';

            var assetNameView = HtmlUtils.append(this.container, 'span');
            assetNameView.id = 'asset-name';
            var loadStuffButton = HtmlUtils.append(this.container, 'button', ['load-button'], "Load stuff into this!");
            loadStuffButton.addEventListener('click', function() {
                Cookies.set("loading", asset);
                loadStuffButton.innerText = 'You are loading stuff into this!';
            }.bind(this));

            if (performScan) {
                if (loading) {
                    var loadingView = HtmlUtils.append(this.container, 'div', [], "Loaded into ");
                    loadingView.appendChild(document.createTextNode(loading.name + ' '));
                    HtmlUtils.append(loadingView, 'a', [], '[x]').addEventListener('click', function() {
                        // oops, don't really load that
                        Cookies.remove("loading");
                        loadingView.innerText = "Unloading...";

                        // scan again, but not into a container...
                        this.locationScan(asset, null, {
                            success: function(scan) {
                                loadingView.innerText = "Unloaded from " + loading.name;
                                loading = false;
                                scansTable.addRow(this.scanColumns_(scan), 0);
                            }.bind(this)
                        });
                    }.bind(this));
                } else if (asset.container) {
                    HtmlUtils.append(this.container, 'div', [], "Unloaded from " + asset.container.name);
                }
            }

            var scansDiv = HtmlUtils.append(this.container, 'div', [], "Scans:");

            var nameSpan = document.getElementById('asset-name');
            nameSpan.innerText = asset.name == null ? "" : asset.name;

            HtmlUtils.makeEditable(nameSpan, function (newValue) {
                var spinner = HtmlUtils.el('img', ['saving-spinner']);
                spinner.setAttribute('src', '/images/assman/activity.gif');
                nameSpan.parentNode.insertBefore(spinner, nameSpan.nextSibling);

                this.updateAsset(asset, {name: newValue}, {
                    success: function () {
                        asset.name = newValue;
                        nameSpan.parentNode.removeChild(spinner);

                    }, failure: function () {
                        nameSpan.parentNode.removeChild(spinner);
                    }
                });
            }.bind(this));

            this.getScans(tag, {
                success: function (scans) {
                    scansDiv.innerText = '';
                    scansDiv.appendChild(scansTable.el);

                    scans.forEach(function (row) {
                        scansTable.addRow(this.scanColumns_(row));
                    }.bind(this));
                }.bind(this)
            });

            if (performScan) {
                this.locationScan(asset, loading, {
                    success: function(scan) {
                        console.log("Successful scan!", scan);
                        scansTable.addRow(this.scanColumns_(scan), 0);
                    }.bind(this)
                });
            }
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

    this.networkActivity.incrUses();

    http.onreadystatechange = function () { // Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            this.networkActivity.decrUses();
            console.log('response from ' + method + ' ' + url + ':', http.responseText);
            if (callbacks && callbacks.success) {
                callbacks.success(
                    http.responseText ? JSON.parse(http.responseText) : null);
            } else {
                console.log("No success callback for " + method + " " + url);
            }
        } else if (http.readyState == 4) {
            this.networkActivity.decrUses();
            if (callbacks && callbacks.failure) {
                callbacks.failure(http);
            } else {
                console.log("No failure callback for " + method + " " + url);
            }
        }
    }.bind(this);

    http.send(JSON.stringify(values));
};

AssMan.prototype.getAssets = function (callbacks) {
    this.doHttp_("GET", "/assman/assets?js=true", null, callbacks);
};

AssMan.prototype.getAsset = function (tag, callbacks) {
    this.doHttp_("GET", "/assman/assets/" + tag + "?js=true", null, callbacks);
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

AssMan.prototype.getEvents = function (callbacks) {
    this.doHttp_("GET", "/assman/events", null, callbacks);
};

AssMan.prototype.createEvent = function (info, callbacks) {
    this.doHttp_("PUT", "/assman/events", info, callbacks);
};

// document.getElementById("name").addEventListener("change", function (e) {
//     updateAsset(asset, {name: e.target.value});
// });

AssMan.prototype.locationScan = function (asset, container, callbacks) {
    this.locationActivity.incrUses();
    navigator.geolocation.getCurrentPosition(function (result) {
        this.locationActivity.decrUses();
        console.log(result);
        var coords = result.coords;
        var betterCoords = {
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            altitude: coords.altitude,
            altitudeAccuracy: coords.altitudeAccuracy,
            eventId: this.event ? this.event.id : null,
            containerTag: container ? container.tag : null
        };
        this.createScan(asset, betterCoords, callbacks);

        Cookies.set("lastLocation", betterCoords);
        this.lastLocation = coords;
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
        input.select();
        input.setSelectionRange(0, origText.length);
        parentNode.replaceChild(input, span);
        var doneButton = HtmlUtils.el("button", null, "Done");
        parentNode.insertBefore(doneButton, input.nextSibling);

        var doChange = function (e) {
            if (!editing) return;

            editing = false;
            span.innerText = input.value;
            parentNode.replaceChild(span, input);
            parentNode.removeChild(doneButton);

            if (input.value != origText) {
                callback(input.value);
            }
        };

        input.addEventListener('change', doChange);
        input.addEventListener('blur', doChange);
        input.focus();
    });
};

CountedActivity = function (view) {
    this.view = view;
    this.count = 0;
};

CountedActivity.prototype.incrUses = function () {
    this.count++;
    this.update_();
};

CountedActivity.prototype.decrUses = function () {
    this.count--;
    this.update_();
};

CountedActivity.prototype.update_ = function () {
    if (this.count == 0) {
        this.view.classList.add("hidden");
    } else {
        this.view.classList.remove("hidden");
    }
};

HtmlUtils.append = function (parent, tagName, classes, innerText) {
    var child = HtmlUtils.el(tagName, classes, innerText);
    parent.appendChild(child);
    return child;
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

HtmlUtils.Table = function(headerColumns, toRow) {
    this.el = HtmlUtils.el('table');
    this.toRow = toRow;

    var tr = HtmlUtils.append(this.el, 'tr');
    headerColumns.forEach(function(headerColumn) {
        HtmlUtils.append(tr, 'th', [], headerColumn);
    }.bind(this));
};

HtmlUtils.Table.prototype.addRow = function(columns, position) {
    var tr = HtmlUtils.el('tr');
    console.log(this.toRow);
    if (this.toRow) {
        tr = this.toRow(columns, tr);
    } else {
        columns.map(function(column) {
            HtmlUtils.append(tr, 'td', [], column.text);
        }.bind(this))
    }

    if (position === 0) {
        this.el.insertBefore(tr, this.el.firstChild.nextSibling);
    } else {
        this.el.appendChild(tr);
    }

    return tr;
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

/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(date) {
    // var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
    var diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
        return;

    function prefix(number) {
        return number < 10 ? "0" + number : "" + number;
    }

    var at = prefix(date.getHours()) + ":" + prefix(date.getMinutes());

    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
        day_diff == 1 && "Yesterday at " + at ||
        day_diff < 7 && day_diff + " days ago at " + at ||
        day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago at " + at;
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if (typeof jQuery != "undefined")
    jQuery.fn.prettyDate = function () {
        return this.each(function () {
            var date = prettyDate(this.title);
            if (date)
                jQuery(this).text(date);
        });
    };

GeoUtils = {};

GeoUtils.distance = function(from, to) {
    if (!from || !to) { return "unknown"; }

    var distKm = GeoUtils.getDistanceFromLatLonInKm(from.latitude, from.longitude, to.latitude, to.longitude);
    var distMi = distKm * 0.621371192;
    var distFt = (distMi * 5280) % 5280;
    if (distMi > 1) {
        return distMi.toFixed(1) + "mi";
    } else {
        return distFt.toFixed(0) + "ft";
    }
};

GeoUtils.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = GeoUtils.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = GeoUtils.deg2rad(lon2 - lon1);
    var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(GeoUtils.deg2rad(lat1)) * Math.cos(GeoUtils.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

GeoUtils.deg2rad = function (deg) {
    return deg * (Math.PI / 180)
}
