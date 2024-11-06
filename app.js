// Initialize empty client list
let clients = [];
let loggedIn = false;

// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "kay@tendaonline.co.za" && password === "K@y5clients") {
    loggedIn = true;
    document.getElementById("login-page").style.display = "none";
    document.getElementById("header").style.

display = "flex";
    document.getElementById("client-details-container").style.display = "block";
  } else {
    alert("Invalid credentials");
  }
}

// Toggle dropdown menu for hamburger icon
function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Show "My Leads" section
function showLeads() {
  document.getElementById("my-leads-

section").style.display = "block";
  const leadsList = document.getElementById("leads-list");
  leadsList.innerHTML = '';
  clients.forEach((client, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${client.name} ${client.surname} - ${client.timestamp}
      <button onclick="editClient(${index})">Edit</button>`;
    leadsList.appendChild(li);
  });
}

// Save client details
function saveClient() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;

  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const membership = document.getElementById("membership").value;
  const medicalAid = document.getElementById("medical-aid").value;
  const comments = document.getElementById("comments").value;

  const client = {
    name,
    surname,
    contact,
    email,
    membership,
    medicalAid,

    comments,
    timestamp: new Date().toLocaleString()
  };

  clients.push(client);
  alert("Client saved successfully!");
  clearForm();
}

// Clear form inputs
function clearForm() {
  document.getElementById("name").value = '';
  document.getElementById("surname").value = '';
  document.getElementById("contact").value = '';
  document.getElementById("email").value = '';

  document.getElementById("membership").value = '';
  document.getElementById("medical-aid").value = '';
  document.getElementById("comments").value = '';
}

// Log out function (reset and go back to login page)
function logOut() {
  loggedIn = false;
  document.getElementById("login-page").style.display = "flex";
  document.getElementById("header").style.display = "none";
  document.getElementById("client-details-container").style.display = "none";

  document.getElementById("my-leads-section").style.display = "none";
}

// Edit client details
function editClient(index) {
  const client = clients[index];
  document.getElementById("name").value = client.name;
  document.getElementById("surname").value = client.surname;
  document.getElementById("contact").value = client.contact;
  document.getElementById("email").value = client.email;
  document.getElementById("membership").value = client.membership;
  document.getElementById("medical-

aid").value = client.medicalAid;
  document.getElementById("comments").value = client.comments;
}

// Search client by any attribute
function searchLeads() {
  const searchQuery = document.getElementById("search-input").value.toLowerCase();
  const filteredClients = clients.filter(client => {
    return (
      client.name.toLowerCase().includes(searchQuery) ||
      client.surname.toLowerCase().includes(searchQuery) ||
      

client.contact.toLowerCase().includes(searchQuery) ||
      client.email.toLowerCase().includes(searchQuery) ||
      client.membership.toLowerCase().includes(searchQuery)
    );
  });

  displayLeads(filteredClients);
}

// Display leads list with search filter
function displayLeads(filteredClients) {
  const leadsList = document.getElementById("leads-list");
  leadsList.innerHTML = '';
  filteredClients.forEach((client, index) => {
    const li = document.createElement('li');

    li.innerHTML = `${client.name} ${client.surname} - ${client.timestamp}
      <button onclick="editClient(${index})">Edit</button>`;
    leadsList.appendChild(li);
  });
}

// Show Home page (Client Details)
function goHome() {
  document.getElementById("my-leads-section").style.display = "none";
  document.getElementById("client-details-container").style.display = "block";
}
