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
  let rows = range.values.slice(1).map(entry => {
    const data = {teams: []};
    for (let i = 1; i < entry.length; i++) {
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
    spreadsheetId: '1tDerZLB2dZqkxU-mtSQznD8palfd7ySVyUeQtvh5uas',
    range: 'Form Responses 1!A:AB',
  }).then(function(response) {
    const range = response.result;
    process(range);
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}

function thatsSoFetch(url) {
  fetch(url)
      .then((response) => response.json())
      .then((data) => process(data));
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
    if (s.includes('Ringleader')) {
      add(teamColumnsDiv, 'div', 'ringleader', '◉ ' + name + " (ringleader)");
      teamStr += '◉';
    } else if (s.includes('Shepherd')) {
      add(teamColumnsDiv, 'div', 'lead', '◉ ' + name + " (shepherd)");
      teamStr += '◉';
    } else if (s.includes('Teammate')) {
      add(teamColumnsDiv, 'div', null, '◎ ' + name + " (crew)");
      teamStr += '◎';
    } else {
      // add(teamColumnsDiv, 'div', '◌ ' + name + "\n");
      teamStr += '◌';
    }
  }
  add(teamsDiv, 'div', 'bullets', teamStr);
  add(teamsDiv, 'div', 'explanation', data.explanation);

  let experienceDiv = add(card, 'div', 'experience infobox');
  add(experienceDiv, 'div', 'title', 'Experience: ');
  add(experienceDiv, 'span', null, data.experience);

  let whyBaaahsDiv = add(card, 'div', 'whyBaaahs infobox');
  add(whyBaaahsDiv, 'div', 'title', 'Why BAAAHS: ');
  add(whyBaaahsDiv, 'span', null, data.whyBaaahs);

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

  let ideasDiv = add(card, 'div', 'ideas infobox');
  add(ideasDiv, 'div', 'title', 'Ideas: ');
  add(ideasDiv, 'span', null, data.ideas);

  let diversityDiv = add(card, 'div', 'diversity infobox');
  add(diversityDiv, 'div', 'title', 'Diversity & Inclusion: ');
  add(diversityDiv, 'span', null, data.diversity);

  let arrivalDiv = add(card, 'div', 'arrival2 infobox');
  add(arrivalDiv, 'div', 'title', 'Arrival: ');
  add(arrivalDiv, 'span', null, data.arrival);

  let departureDiv = add(card, 'div', 'departure infobox');
  add(departureDiv, 'div', 'title', 'Departure: ');
  add(departureDiv, 'span', null, data.departure);

  return card;
}

const cols = [
  'timestamp',
  'email',
  'name',
  'phone',
  'location',

  'experience',
  'whyBaaahs',

  'teams:Build',
  'teams:Lights',
  'teams:Sound',
  'teams:Tech',
  'teams:Events',
  'teams:Camp',
  'teams:Depot',
  'teams:Infra',
  'teams:Community',
  'teams:Communications',
  'teams:Theme and Art',
  'teams:Food',
  'teams:Campout',
  'teams:Fundraising',
  'teams:Admin/Default World',
  'teams:Exodus',

  "skills",

  "ideas",
  'diversity',

  'arrival',
  'departure'];

const teamSplits = [4, 11]
const teams = [
  "Build",
  "Lights",
  "Sound",
  "Tech",
  "Events",
  "Camp",
  "Depot",
  "Infra",
  "Community",
  "Communications",
  "Theme and Art",
  "Food",
  "Campout",
  "Fundraising",
  "Admin/Default World",
  "Exodus",
];

const skillsOptions = [
  "Graphic design/drawing/visual arts",
  "Coding/sw eng/hw eng/EE",
  "Photography/videography",
  "DJing/performing arts",
  "Kitchen management/cooking",
  "Construction/building/structural"
];
