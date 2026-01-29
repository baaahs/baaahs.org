// Client ID and API key from the Developer Console
const CLIENT_ID = "309793373722-tr2333pd4gd3qs0vtt54uk2um6eulh4l.apps.googleusercontent.com";
const API_KEY = "AIzaSyBSthjdwfUJh2BtrHrUSgMEaEH_P6-RJP8";

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
    fetchFromGoogle();
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

function process(range) {
  let rows = range.values.map(entry => {
    const data = {teams: []};
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
}

/**
 * Fetch from a spreadsheet.
 */
function fetchFromGoogle() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1vXopIhDPoF6nHQ9yAOBZzlT0NR5CmRVozPk6Ev0IfVs',
    range: 'Form Responses 1!A2:AD',
  }).then(function(response) {
    const range = response.result;
    process(range);
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

function add(parent, tagName, className, innerText) {
  let el = document.createElement(tagName);
  if (className) el.className = className;
  if (parent) parent.appendChild(el);
  if (innerText) el.innerText = innerText;
  return el;
}

function createFullCard(data) {
  let card = add(null, 'div', 'card');

  let nameDiv = add(card, 'div', 'name', data.name);

  add(card, 'div', 'email', data.email);
  // add(card, 'div', 'camp', data.camp);

  let arrival = add(card, 'div', 'arrival');
  let arrivalString = data.arrival;
  arrival.innerText = arrivalString.replace('Early ', '').replace(' or later', '');
  add(arrival, 'div', 'arrivalBox ' + arrivalString.split(' ')[1]);

  add(card, 'div', 'location', data.location);
  let isLocal = data.location.match(/San Francisco|SF|Oakland|Bay|Emeryville/);
  if (!isLocal) nameDiv.className += " remote";

  let teamsDiv = add(card, 'div', 'team infobox');
  add(teamsDiv, 'div', 'title', 'Teams: ');
  let teamColumnsDiv = add(teamsDiv, 'div', 'team-columns');
  let teamStr = '';
  for (let i = 0; i < data.teams.length; i++) {
    // breaks between groups
    if (teamSplits.indexOf(i) !== -1) {
      teamStr += '  ';
    }

    const s = data.teams[i];
    const name = teams[i];
    if (s.includes('LEAD')) {
      add(teamColumnsDiv, 'div', 'lead', '◉ ' + name);
      teamStr += '◉';
    } else if (s.includes('CREW')) {
      add(teamColumnsDiv, 'div', null, '◎ ' + name + "\n");
      teamStr += '◎';
    } else {
      // add(teamColumnsDiv, 'div', '◌ ' + name + "\n");
      teamStr += '◌';
    }
  }
  add(teamsDiv, 'div', 'bullets', teamStr);
  add(teamsDiv, 'div', 'explanation', data.explanation);

  let ideasDiv = add(card, 'div', 'ideas infobox');
  add(ideasDiv, 'span', 'title', 'Ideas: ');
  add(ideasDiv, 'span', null, data.ideas);

  let experienceDiv = add(card, 'div', 'experience infobox');
  add(experienceDiv, 'span', 'title', 'Experience: ');
  add(experienceDiv, 'span', null, data.experience);

  let skillsDiv = add(card, 'div', 'skills infobox');
  add(skillsDiv, 'div', 'title', 'Skills: ');
  let skillsRow = (data.skills || "").split(/, /);
  let skillsStr = '';
  for (const opt of skillsOptions) {
    let i = skillsRow.indexOf(opt);
    if (i > -1) {
      skillsStr += '●';
      add(skillsDiv, 'div', 'skill', '◉ ' + opt);
      skillsRow.splice(i, 1);
    } else {
      skillsStr += '◌';
    }
  }
  add(skillsDiv, 'div', 'bullets', skillsStr);
  add(skillsDiv, 'div', 'skills-other', skillsRow.join(", "));

  return card;
}

const cols = [
  "timestamp",
  "email",
  "name",
  "location",
  "experience",
  "teams:BAAAHS – Build",
  "teams:BAAAHS – Lights",
  "teams:BAAAHS – Sound",
  "teams:BAAAHS – Tech",
  "teams:STATION – Infrastructure",
  "teams:STATION – Communal Space",
  "teams:STATION - Interactivity, Art, and Theme",
  "teams:STATION – Kitchen/Food",
  "teams:EVENTS, PARTIES, AND PROGRAMMING",
  "teams:EXODUS/LNT",
  "teams:FUNDRAISING",
  "teams:ADMINISTRATIVE",
  "teams:RADICAL INCLUSION/DIVERSITY",
  "teams:GENERAL ON-PLAYA VOLUNTEER",
  "skills",
  "ideas",
  "arrival"
];

const teamSplits = [4, 8, 12]
const teams = [
  "BAAAHS-Build",
  "BAAAHS-Lights",
  "BAAAHS-Sound",
  "BAAAHS-Tech",

  "STATION-Infrastructure",
  "STATION-Communal Space",
  "STATION-Interactivity, Art, and Theme",
  "STATION-Kitchen/Food",

  "EVENTS, PARTIES, AND PROGRAMMING",
  "EXODUS/LNT",
  "FUNDRAISING",
  "ADMINISTRATIVE",
  "RADICAL INCLUSION/DIVERSITY",
  "GENERAL ON-PLAYA VOLUNTEER"
];

const skillsOptions = [
  "Graphic design/drawing/visual arts",
  "Coding/sw eng/hw eng/EE",
  "Photography/videography",
  "DJing/performing arts",
  "Kitchen management/cooking",
  "Construction/building/structural"
];
