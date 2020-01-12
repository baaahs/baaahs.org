// Client ID and API key from the Developer Console
const CLIENT_ID = "238367465427-v63tc6mj1ea4qegldd01ib07ckbmmdhk.apps.googleusercontent.com";
const API_KEY = "AIzaSyBMlb7FgsPzc80rFgNkirc3jD_JjThkPcc";

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

let authorizeButton = null;
let signoutButton = null;

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  authorizeButton = document.getElementById('authorize_button');
  signoutButton = document.getElementById('signout_button');

  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    fetch();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Fetch from a spreadsheet.
 */
function fetch() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1YS-hYVvsvhq0xCaZQ9Hws9PQhUbFcoP2yBGCHXI7t9k',
    range: 'Form Responses 1!A2:AD',
  }).then(function(response) {
    const range = response.result;

    let rows = range.values.map(entry => {
      const data = { teams: [] };
      for (let i = 0; i < entry.length; i++) {
        const value = entry[i];
        const colName = cols[i];
        if (colName.startsWith('teams:')) {
          data.teams.push(value);
        } else {
          data[colName] = value;
        }
      }

      return data;
    });

    rows = rows.sort((a, b) => a.name.localeCompare(b.name));

    display(rows);
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}


/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

function add(parent, tagName, className) {
  let el = document.createElement(tagName);
  if (className) el.className = className;
  if (parent) parent.appendChild(el);
  return el;
}

const cols = [
  "timestamp",
  "email",
  "name",
  "teams:BAAAHS – Build",
  "teams:BAAAHS – Lights",
  "teams:BAAAHS – Sound",
  "teams:BAAAHS – Tech",
  "teams:BAAAHS – New Initiatives",
  "teams:STATION – Civil Engineering",
  "teams:STATION – Infrastructure",
  "teams:STATION – Communal Space",
  "teams:STATION - Interactivity, Art, and Theming",
  "teams:STATION – Kitchen/Food",
  "teams:FUNDRAISING",
  "teams:EVENTS, PARTIES, AND PROGRAMMING",
  "teams:PROJECT MANAGEMENT",
  "teams:STORAGE MANAGEMENT",
  "teams:COMMUNICATIONS",
  "teams:ADMIN AND FINANCE",
  "teams:EXODUS",
  "teams:CAMP ORGANIZING",
  "teams:CAMP EVENTS & INTERACTIVITY",
  "teams:GENERAL ON-PLAYA VOLUNTEER",
  "explanation",
  "ideas",
  "arrival",
  "camp",
  "experience",
  "location",
  "skills"
];

const teams = [
  "BAAAHS—Build",
  "BAAAHS—Lights",
  "BAAAHS—Sound",
  "BAAAHS—Tech",
  "BAAAHS—New Initiatives",
  "STATION—Civil Engineering",
  "STATION—Infrastructure",
  "STATION—Communal Space",
  "STATION—Interactivity, Art, and Theming",
  "STATION—Kitchen/Food",
  "Fundraising",
  "Events, Parties, and Programming",
  "Project Management",
  "Storage Management",
  "Communications",
  "Admin and Finance",
  "Exodus",
  "Camp Organizing",
  "Camp Events & Interactivity",
  "General On-Playa Volunteer",
];

const skillsOptions = [
  "Graphic design/drawing/visual arts",
  "Coding/sw eng/hw eng/EE",
  "Photography/videography",
  "DJing/performing arts",
  "Kitchen management/cooking",
  "Construction/building/structural"
];
